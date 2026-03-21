import { SectionReveal } from "@/components/ui/SectionReveal";

export function Founder() {
  return (
    <section id="founder" className="bg-caglio py-section px-5 md:px-12 lg:px-20">
      <div className="mx-auto max-w-[65ch] text-center">
        <SectionReveal>
          <h2 className="font-headline text-2xl font-bold text-carbone mb-6">
            The Founder
          </h2>
          <p className="font-body text-base text-carbone leading-relaxed mb-6">
            I&apos;m a gastronome who builds AI tools for artisanal food
            producers. I studied how cheese is made by making it. Then I went
            to India and learned to code. For eight years I built software while
            the food world I came from fell further behind.
          </p>
          <p className="font-body text-base text-carbone leading-relaxed mb-8">
            Food Tech Bootcamp is my lab. Not a startup, not an agency. It&apos;s
            where everything I learned about food and everything I learned about
            code become tools for the producers who chose craft over convenience.
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
