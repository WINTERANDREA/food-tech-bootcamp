import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "For Producers — Food Tech Bootcamp",
  description:
    "We build AI tools for Italy's best artisanal food producers. One producer per sector. If your product is extraordinary, let's talk.",
  openGraph: {
    title: "For Producers — Food Tech Bootcamp",
    description:
      "Your product is extraordinary. The market doesn't know — yet. We build the tools that change this.",
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
