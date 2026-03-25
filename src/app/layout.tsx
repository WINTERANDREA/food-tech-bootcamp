import type { Metadata } from "next";
import { DM_Sans, JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
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
    images: [{ url: "/api/og?title=Food+Tech+Bootcamp&subtitle=AI+tools+for+Italy%27s+best+artisanal+food+producers", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: "AI lab for Italy's artisanal food producers.",
    images: ["/api/og?title=Food+Tech+Bootcamp&subtitle=AI+tools+for+Italy%27s+best+artisanal+food+producers"],
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
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" title="Food Tech Bootcamp RSS Feed" />
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLMs.txt" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": `${SITE_URL}/#organization`,
                  name: "Food Tech Bootcamp",
                  alternateName: "FTB Lab",
                  url: SITE_URL,
                  logo: `${SITE_URL}/images/logo/logo-ftb.png`,
                  description:
                    "AI lab building tools for Italy's best artisanal food producers. Making food knowledge computable.",
                  foundingDate: "2018",
                  founder: {
                    "@type": "Person",
                    name: "Andrea",
                    jobTitle: "Founder",
                    alumniOf: {
                      "@type": "EducationalOrganization",
                      name: "UNISG — University of Gastronomic Sciences Pollenzo",
                    },
                  },
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Milan",
                    addressRegion: "Lombardy",
                    addressCountry: "IT",
                  },
                  contactPoint: {
                    "@type": "ContactPoint",
                    email: "hello@foodtechbootcamp.com",
                    contactType: "general",
                  },
                  sameAs: [
                    "https://www.linkedin.com/in/andreacasero/",
                  ],
                  areaServed: "IT",
                  knowsAbout: [
                    "Artisanal food production",
                    "Artificial intelligence",
                    "Food safety (HACCP)",
                    "Italian DOP/IGP products",
                    "Culinary intelligence",
                    "AI sales coordination",
                  ],
                },
                {
                  "@type": "WebSite",
                  "@id": `${SITE_URL}/#website`,
                  name: "Food Tech Bootcamp",
                  url: SITE_URL,
                  publisher: { "@id": `${SITE_URL}/#organization` },
                  inLanguage: "en",
                },
              ],
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
        {process.env.GA_MEASUREMENT_ID && (
          <GoogleAnalytics gaId={process.env.GA_MEASUREMENT_ID} />
        )}
      </body>
    </html>
  );
}
