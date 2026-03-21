"use client";

import { useState, type FormEvent } from "react";

const TOPICS = [
  { value: "newsletter", label: "Newsletter (All Topics)" },
  { value: "producer", label: "I'm an artisanal producer" },
  { value: "ai-sales-agent", label: "AI Sales Agent" },
  { value: "cooking-intelligence-llm", label: "Cooking Intelligence LLM" },
  { value: "haccp-automation", label: "HACCP Automation" },
  { value: "partnership", label: "Partnership opportunities" },
] as const;

interface SubscribeFormProps {
  interest?: string;
}

export function SubscribeForm({ interest = "newsletter" }: SubscribeFormProps) {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [topic, setTopic] = useState(interest);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, firstName: firstName || undefined, interest: topic }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong");
      }

      setStatus("success");
      setEmail("");
      setFirstName("");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  if (status === "success") {
    return (
      <div className="w-full max-w-lg mx-auto text-center py-8">
        <p className="font-headline text-xl font-bold text-rame mb-2">
          You&apos;re in.
        </p>
        <p className="font-body text-sm text-crosta">
          Check your inbox for a confirmation.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto">
      {/* Name + Email row on desktop, stacked on mobile */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
        <input
          type="text"
          placeholder="First name (optional)"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="w-full bg-dark-surface border border-[var(--border-subtle)] text-caglio font-body text-sm px-4 py-3 placeholder:text-light-secondary focus:border-terra focus:outline-none transition-colors"
        />
        <input
          type="email"
          required
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full bg-dark-surface border border-[var(--border-subtle)] text-caglio font-body text-sm px-4 py-3 placeholder:text-light-secondary focus:border-terra focus:outline-none transition-colors"
        />
      </div>

      {/* Topic selector */}
      <div className="mb-5">
        <label className="block font-mono text-xs text-crosta/60 uppercase tracking-widest mb-2">
          I&apos;m interested in
        </label>
        <select
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className="w-full bg-dark-surface border border-[var(--border-subtle)] text-caglio font-body text-sm px-4 py-3 focus:border-terra focus:outline-none transition-colors appearance-none cursor-pointer"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23C4956A' stroke-width='1.5' fill='none'/%3E%3C/svg%3E")`, backgroundRepeat: "no-repeat", backgroundPosition: "right 16px center" }}
        >
          {TOPICS.map((t) => (
            <option key={t.value} value={t.value}>
              {t.label}
            </option>
          ))}
        </select>
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full font-body font-medium text-sm uppercase tracking-wide bg-terra text-caglio px-7 py-3.5 hover:brightness-110 hover:-translate-y-px transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "loading" ? "Sending..." : "Subscribe"}
      </button>

      {status === "error" && (
        <p className="font-body text-sm text-lava mt-3 text-center">{errorMsg}</p>
      )}
    </form>
  );
}
