import Link from "next/link";
import { SectionReveal } from "@/components/ui/SectionReveal";

export function Manifesto() {
  return (
    <section id="mission" className="bg-caglio py-section px-5 md:px-12 lg:px-20">
      <div className="mx-auto max-w-[65ch] text-center">
        <SectionReveal>
          <p className="font-body text-base text-carbone leading-relaxed mb-6">
            A cheesemaker who reads milk by smell is performing an analysis. A baker
            who feels dough by touch is running a calibration. A winemaker who
            tastes the season is evaluating a dataset. This knowledge is precise,
            structured, and transferable — if you speak the right language.
          </p>
        </SectionReveal>
        <SectionReveal>
          <p className="font-body text-base text-carbone leading-relaxed mb-12">
            We speak both. The language of the algorithm and the language of the
            craft. We build AI that makes food knowledge computable — so the
            producers who chose quality over volume can finally compete on
            their own terms.
          </p>
        </SectionReveal>
        <p className="font-body text-lg italic text-terra mt-12 mb-8">
          Il progresso che cancella ci&ograve; che siamo non &egrave; progresso.
        </p>
        <Link
          href="/mission"
          className="inline-flex items-center font-body font-medium text-sm text-carbone/60 hover:text-terra transition-colors group"
        >
          Read the full mission
          <span className="ml-1 inline-block transition-transform group-hover:translate-x-1">
            →
          </span>
        </Link>
      </div>
    </section>
  );
}
