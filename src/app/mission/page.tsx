import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SITE_URL } from "@/lib/constants";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { SubscribeForm } from "@/components/ui/SubscribeForm";

export const metadata: Metadata = {
  title: "Mission — Food Tech Bootcamp",
  description:
    "Food wisdom is disappearing. Not because the products are worse — because the tools are. We build AI that makes food knowledge computable.",
  openGraph: {
    title: "Mission — Food Tech Bootcamp",
    description:
      "Food wisdom is disappearing. We build the tools that keep artisanal producers competing.",
    type: "article",
    images: [{ url: "/api/og?title=Mission&subtitle=Food+wisdom+is+disappearing&type=mission", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: `${SITE_URL}/mission`,
  },
};

export default function ManifestoPage() {
  return (
    <div className="min-h-screen">
      <Breadcrumbs items={[{ label: "Mission", href: "/mission" }]} hidden />
      {/* Opening */}
      <section className="bg-dark min-h-svh flex items-center justify-center px-5 md:px-12 lg:px-20 pt-16">
        <div className="max-w-[65ch]">
          <SectionReveal>
            <p className="font-mono text-sm text-terra/60 uppercase tracking-widest mb-12 text-center">
              Mission
            </p>
            <p className="font-headline text-3xl md:text-4xl font-bold text-caglio mb-8">
              Food wisdom is disappearing.
            </p>
            <p className="font-body text-base md:text-lg text-caglio/80 leading-relaxed mb-6">
              Not because the products are worse. Because the tools are. A market
              built for volume has no patience for a cheesemaker who ages each
              wheel on wooden shelves, a baker who fires a wood oven at 4am, an
              olive oil producer who harvests by hand in October.
            </p>
            <p className="font-body text-base md:text-lg text-caglio/80 leading-relaxed mb-6">
              When these producers close, what disappears is not a business. It
              is centuries of technique that no algorithm can reconstruct.
            </p>
            <p className="font-headline text-xl md:text-2xl font-bold text-terra leading-snug mt-12">
              We build the tools that keep them competing.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Image break */}
      <section className="relative w-full h-[50vh] md:h-[60vh]">
        <Image
          src="/images/projects/IMG_5685.jpg"
          alt="Aged cheese wheels under warm amber lighting in an artisanal aging room"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/40 via-transparent to-dark/60" />
      </section>

      {/* The method */}
      <section className="bg-dark py-section px-5 md:px-12 lg:px-20">
        <div className="mx-auto max-w-[65ch]">
          <SectionReveal>
            <p className="font-headline text-2xl md:text-3xl font-bold text-caglio mb-8">
              Food knowledge is computable.
            </p>
          </SectionReveal>

          <SectionReveal>
            <p className="font-body text-base text-caglio/80 leading-relaxed">
              A cheesemaker who reads milk by smell is performing an analysis. A
              baker who feels dough by touch is running a calibration. A winemaker
              who tastes the season is evaluating a dataset. This knowledge is
              precise, structured, and transferable — if you speak the right
              language.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* The approach */}
      <section className="bg-caglio py-section px-5 md:px-12 lg:px-20">
        <div className="mx-auto max-w-[65ch]">
          <SectionReveal>
            <p className="font-headline text-2xl md:text-3xl font-bold text-carbone mb-8">
              Finding the extraordinary ones.
            </p>
          </SectionReveal>

          <SectionReveal>
            <p className="font-body text-base text-carbone/80 leading-relaxed mb-8">
              Across every sector of Italian food, extraordinary producers
              exist — rare, uncompromising, often invisible. Not one per
              category. As many as deserve the name. We search for them
              wherever craft knowledge runs deepest.
            </p>
          </SectionReveal>

          <SectionReveal>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-3 font-body text-base text-carbone/80 mb-8">
              <p>Caseifici</p>
              <p>Panifici</p>
              <p>Frantoi</p>
              <p>Cantine</p>
              <p>Norcinerie</p>
              <p>Pastifici</p>
              <p>Conservifici</p>
              <p>Birrifici</p>
              <p>Apicoltura</p>
              <p>Cioccolateria</p>
              <p>Oleifici</p>
              <p>Gelaterie artigianali</p>
            </div>
          </SectionReveal>

          <SectionReveal>
            <p className="font-body text-base text-carbone/80 leading-relaxed">
              We study their craft. We map their knowledge. Then we build
              AI that becomes infrastructure for their entire system —
              insight into what makes their product unique, tools to
              strengthen their operations, intelligence that valorizes
              artisanal excellence on its own terms.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Image break */}
      <section className="relative w-full h-[50vh] md:h-[60vh]">
        <Image
          src="/images/projects/IMG_5670.jpg"
          alt="Close-up of foratura — hand-piercing a wheel with steel needles"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/40 via-transparent to-dark/60" />
      </section>

      {/* Why I build this */}
      <section className="bg-dark py-section px-5 md:px-12 lg:px-20">
        <div className="mx-auto max-w-[65ch]">
          <SectionReveal>
            <p className="font-headline text-2xl md:text-3xl font-bold text-caglio mb-8">
              Why I build this.
            </p>
          </SectionReveal>

          <SectionReveal>
            <p className="font-body text-base text-caglio/80 leading-relaxed mb-6">
              I studied gastronomy. I learned how cheese is made by making it.
              Then I went to India and learned to code. For ten years, I built
              software while the food world I came from fell further behind.
            </p>
          </SectionReveal>

          <SectionReveal>
            <p className="font-body text-base text-caglio/80 leading-relaxed">
              AI changed everything. A tool that understands both the precision
              of code and the complexity of craft. Food Tech Bootcamp is my lab.
              Not a startup. Not an agency. The place where everything I learned
              about food and everything I learned about code become tools for the
              producers who chose craft over convenience.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* The manifesto line */}
      <section className="bg-caglio py-section px-5 md:px-12 lg:px-20">
        <div className="mx-auto max-w-[65ch] text-center">
          <p className="font-body text-xl md:text-2xl italic text-terra leading-relaxed">
            Il progresso che cancella ci&ograve; che siamo non &egrave;
            progresso.
          </p>
        </div>
      </section>

      {/* The call */}
      <section className="bg-dark py-section px-5 md:px-12 lg:px-20">
        <div className="mx-auto max-w-[65ch] text-center">
          <SectionReveal>
            <p className="font-body text-base text-caglio/80 leading-relaxed mb-6">
              We refuse to scale before proving. One experiment, documented
              honestly, is worth more than fifty pitch decks. We ship
              experiments, not strategies.
            </p>
            <p className="font-body text-base text-caglio/80 leading-relaxed mb-12">
              One producer. One experiment. Everything documented honestly —
              what works, what fails, and what we learn. The proof comes first.
              Then we scale.
            </p>
            <Link
              href="/#work"
              className="inline-flex items-center font-body font-medium text-sm text-terra hover:text-crosta transition-colors group mb-16"
            >
              See the work
              <span className="ml-1 inline-block transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>

            <div className="mt-12 pt-12 border-t border-[var(--border-subtle)]">
              <p className="font-headline text-xl font-bold text-caglio mb-2">
                Follow the mission
              </p>
              <p className="font-body text-sm text-crosta mb-6">
                Rare updates. Always worth reading.
              </p>
              <div className="flex justify-center">
                <SubscribeForm />
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
}
