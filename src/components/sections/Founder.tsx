import { SectionReveal } from "@/components/ui/SectionReveal";

export function Founder() {
  return (
    <section id="founder" className="bg-caglio py-section px-5 md:px-12 lg:px-20">
      <div className="mx-auto max-w-[65ch] text-center">
        <SectionReveal>
          <h2 className="font-headline text-2xl font-bold text-carbone mb-6">
            The Founder
          </h2>
          <p className="font-body text-sm text-light-secondary mb-2">
            Founder &amp; CTO
          </p>
          <p className="font-body text-base text-carbone leading-relaxed mb-6">
            UNISG Pollenzo alumnus. Years in the food supply chain — from
            artisanal production to food safety. Software developer at Cortilia.
            The rare person who knows the difference between artisanal and
            industrial gorgonzola AND can build the AI agent that sells one
            against the other.
          </p>
          <p className="font-body text-base text-carbone leading-relaxed mb-8">
            Food Tech Bootcamp is my lab. It&apos;s where 8 years of learning to
            code as a gastronome become tools for the people I studied with, grew
            up with, and build for.
          </p>
          <a
            href="https://www.linkedin.com/in/andreacasero/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center font-body font-medium text-sm text-terra hover:text-carbone transition-colors group"
          >
            LinkedIn
            <span className="ml-1 inline-block transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
        </SectionReveal>
      </div>
    </section>
  );
}
