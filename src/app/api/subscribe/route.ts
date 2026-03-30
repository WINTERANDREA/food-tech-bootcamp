import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

const ADMIN_EMAIL = process.env.EMAIL_ADMIN!;
const AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID!;
const TURNSTILE_SECRET = process.env.TURNSTILE_SECRET_KEY!;

// Use verified domain or Resend's test sender
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || "Food Tech Bootcamp <onboarding@resend.dev>";

interface SubscribeBody {
  email: string;
  firstName?: string;
  interest?: string;
  turnstileToken: string;
}

async function verifyTurnstile(token: string): Promise<boolean> {
  const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      secret: TURNSTILE_SECRET,
      response: token,
    }),
  });
  const data = await res.json();
  return data.success === true;
}

export async function POST(request: Request) {
  const errors: string[] = [];

  try {
    const body: SubscribeBody = await request.json();
    const { email, firstName, interest = "newsletter", turnstileToken } = body;

    // Verify Turnstile token
    if (!turnstileToken) {
      return NextResponse.json({ error: "Bot verification required" }, { status: 400 });
    }

    const isHuman = await verifyTurnstile(turnstileToken);
    if (!isHuman) {
      return NextResponse.json({ error: "Bot verification failed" }, { status: 403 });
    }

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Valid email required" }, { status: 400 });
    }

    // 1. Add to Resend audience with interest in lastName for now
    const contactResult = await resend.contacts.create({
      email,
      firstName: firstName || undefined,
      lastName: interest,
      audienceId: AUDIENCE_ID,
    });

    if (contactResult.error) {
      console.error("Contact error:", contactResult.error);
      errors.push(`contact: ${contactResult.error.message}`);
    } else {
      console.log("Contact created:", contactResult.data?.id);
    }

    // 2. Send confirmation to subscriber
    const confirmResult = await resend.emails.send({
      from: FROM_EMAIL,
      to: email,
      subject: "Welcome to Food Tech Bootcamp",
      html: `
        <div style="font-family: system-ui, sans-serif; max-width: 520px; color: #2C2A28;">
          <p>Hey${firstName ? ` ${firstName}` : ""},</p>
          <p>Thanks for your interest in Food Tech Bootcamp — where food knowledge becomes computable.</p>
          ${interest !== "newsletter" ? `<p>We noted your interest in: <strong>${interest}</strong>. We'll be in touch soon.</p>` : ""}
          <p>We're a small lab building AI tools for Italy's artisanal food producers. Updates are rare and always worth reading.</p>
          <p>— Andrea, FTB Lab</p>
        </div>
      `,
    });

    if (confirmResult.error) {
      console.error("Confirmation email error:", confirmResult.error);
      errors.push(`confirm: ${confirmResult.error.message}`);
    } else {
      console.log("Confirmation sent:", confirmResult.data?.id);
    }

    // 3. Notify admin
    const notifyResult = await resend.emails.send({
      from: FROM_EMAIL,
      to: ADMIN_EMAIL,
      subject: `New subscriber: ${email}`,
      html: `
        <div style="font-family: monospace; color: #2C2A28;">
          <p><strong>New signup</strong></p>
          <ul>
            <li><strong>Email:</strong> ${email}</li>
            <li><strong>Name:</strong> ${firstName || "—"}</li>
            <li><strong>Interest:</strong> ${interest}</li>
            <li><strong>Time:</strong> ${new Date().toISOString()}</li>
          </ul>
        </div>
      `,
    });

    if (notifyResult.error) {
      console.error("Notify email error:", notifyResult.error);
      errors.push(`notify: ${notifyResult.error.message}`);
    } else {
      console.log("Admin notified:", notifyResult.data?.id);
    }

    if (errors.length > 0) {
      console.warn("Partial failures:", errors);
    }

    // Contact was created even if emails failed — still count as success
    return NextResponse.json({ ok: true, warnings: errors.length > 0 ? errors : undefined });
  } catch (error) {
    console.error("Subscribe error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Try again." },
      { status: 500 }
    );
  }
}
