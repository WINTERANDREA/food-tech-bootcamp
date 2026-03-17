import { SectionReveal } from "@/components/ui/SectionReveal";

const LAYERS = [
  {
    label: "Food Science",
    title: "Gastronomic Sciences",
    description:
      "Trained at UNISG Pollenzo — the world's only university dedicated to gastronomic sciences. We don't guess what artisans need. We studied alongside them.",
  },
  {
    label: "AI",
    title: "Claude by Anthropic",
    description:
      "Every tool we build runs on Claude. The first AI capable of reasoning about food the way a trained gastronome does — not just processing data, but understanding context.",
  },
  {
    label: "Craft",
    title: "Real producers, real problems",
    description:
      "We work inside caseifici, not from coworking spaces. Every experiment starts with a producer's problem, not a technology looking for a use case.",
  },
];

export function Partners() {
  return (
    <section className="bg-dark py-section px-5 md:px-12 lg:px-20">
      <div className="mx-auto max-w-[1280px]">
        <SectionReveal>
          <h2 className="font-headline text-xl md:text-2xl font-bold text-caglio mb-4">
            Why this lab exists
          </h2>
          <p className="font-body text-base text-crosta mb-block max-w-[55ch]">
            Three things need to be in the same room. They almost never are.
          </p>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {LAYERS.map((layer) => (
            <SectionReveal key={layer.label}>
              <div className="border border-[var(--border-medium)] p-6 md:p-8 h-full">
                <p className="font-mono text-[0.6875rem] uppercase text-terra tracking-widest mb-4">
                  {layer.label}
                </p>
                <h3 className="font-headline text-lg font-bold text-caglio mb-3">
                  {layer.title}
                </h3>
                <p className="font-body text-sm text-crosta/80 leading-relaxed">
                  {layer.description}
                </p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
