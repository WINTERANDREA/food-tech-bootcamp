import type { Metadata } from "next";
import { DM_Sans, JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from "@/lib/constants";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Food Tech Bootcamp — Where Food Knowledge Becomes Computable",
  description: SITE_DESCRIPTION,
  keywords: [
    "food tech",
    "AI food industry",
    "artisanal food producers Italy",
    "food AI lab",
    "artificial intelligence food",
    "Italian food innovation",
    "DOP producers technology",
    "food tech bootcamp",
    "cheesemaker AI",
    "food safety automation",
    "HACCP AI",
  ],
  openGraph: {
    title: "Food Tech Bootcamp — Where Food Knowledge Becomes Computable",
    description:
      "AI lab for Italy's artisanal food producers. Technology that amplifies craft, not replaces it.",
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [{ url: "/images/og/home.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: "AI lab for Italy's artisanal food producers.",
    images: ["/images/og/home.jpg"],
  },
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/images/logo/logo.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  other: {
    "theme-color": "#0A0A0A",
    "apple-mobile-web-app-title": "FTB Lab",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Food Tech Bootcamp",
              alternateName: "FTB Lab",
              url: SITE_URL,
              logo: `${SITE_URL}/images/logo/logo-ftb.png`,
              description:
                "AI lab for Italy's artisanal food producers. Making food knowledge computable.",
              foundingDate: "2018",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Milan",
                addressRegion: "Lombardy",
                addressCountry: "IT",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${plusJakarta.variable} ${dmSans.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
