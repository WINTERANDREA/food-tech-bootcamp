import Link from "next/link";
import { SectionReveal } from "@/components/ui/SectionReveal";

export function Manifesto() {
  return (
    <section id="mission" className="bg-caglio py-section px-5 md:px-12 lg:px-20">
      <div className="mx-auto max-w-[65ch] text-center">
        <SectionReveal>
          <p className="font-body text-base text-carbone leading-relaxed mb-6">
            Across Italy, real artisanal food producers carry centuries of
            knowledge in their hands. Cheesemakers who read milk by smell. Bakers
            who feel dough by touch. Winemakers who taste the season. This
            knowledge is irreplaceable — and it&apos;s disappearing. Not because
            the products are worse, but because the tools to compete are designed
            for industrial scale, not artisanal craft.
          </p>
        </SectionReveal>
        <SectionReveal>
          <p className="font-body text-base text-carbone leading-relaxed mb-12">
            We build the other tools. AI that speaks the language of the artisan.
            Technology that amplifies craft instead of replacing it.
          </p>
        </SectionReveal>
        <p className="font-body text-lg italic text-terra mt-12 mb-8">
          Il progresso che cancella ci&ograve; che siamo non &egrave; progresso.
        </p>
        <Link
          href="/manifesto"
          className="inline-flex items-center font-body font-medium text-sm text-carbone/60 hover:text-terra transition-colors group"
        >
          Read the full manifesto
          <span className="ml-1 inline-block transition-transform group-hover:translate-x-1">
            →
          </span>
        </Link>
      </div>
    </section>
  );
}
