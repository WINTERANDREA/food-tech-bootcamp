import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "For Producers — Food Tech Bootcamp",
  description:
    "We build AI tools for Italy's best artisanal food producers. One producer per sector. If your product is the best, let's talk.",
  openGraph: {
    title: "For Producers — Food Tech Bootcamp",
    description:
      "Your product is the best. The market doesn't know yet. We build the tools that change this.",
    type: "website",
  },
  alternates: {
    canonical: `${SITE_URL}/produttori`,
  },
};

export default function ProduttoriLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
