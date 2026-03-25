import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "For Producers — Food Tech Bootcamp",
  description:
    "We find Italy's rarest artisanal producers — the ones whose knowledge is irreplaceable. If your craft is uncompromising, we want to know you.",
  openGraph: {
    title: "For Producers — Food Tech Bootcamp",
    description:
      "Your product is extraordinary. Your knowledge is centuries deep. We build AI that makes artisanal craft knowledge computable.",
    type: "website",
    images: [{ url: "/api/og?title=For+Producers&subtitle=Your+product+is+extraordinary.+The+market+doesn%27t+know+%E2%80%94+yet.", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: `${SITE_URL}/producers`,
  },
};

export default function ProduttoriLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
