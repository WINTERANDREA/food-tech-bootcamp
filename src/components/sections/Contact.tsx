import { CONTACT_EMAIL } from "@/lib/constants";
import { SectionReveal } from "@/components/ui/SectionReveal";

export function Contact() {
  return (
    <section id="contact" className="bg-dark py-section px-5 md:px-12 lg:px-20">
      <div className="mx-auto max-w-[1280px] text-center">
        <SectionReveal>
          <h2 className="font-headline text-2xl font-bold text-caglio mb-6">
            Get in touch
          </h2>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="font-body text-lg text-terra hover:text-crosta transition-colors duration-300 block mb-8"
          >
            {CONTACT_EMAIL}
          </a>
          <p className="font-body text-base text-crosta max-w-[55ch] mx-auto">
            Are you a gastronome who codes? A developer who loves food? A
            producer who wants to compete?
          </p>
        </SectionReveal>
      </div>
    </section>
  );
}
