import { PROJECTS } from "@/lib/constants";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { SectionReveal } from "@/components/ui/SectionReveal";

export function ProjectGrid() {
  return (
    <section id="work" className="bg-dark py-section px-5 md:px-12 lg:px-20">
      <div className="mx-auto max-w-[1280px]">
        <SectionReveal>
          <h2 className="font-headline text-xl md:text-2xl font-bold text-caglio mb-block">
            What we&apos;re exploring
          </h2>
        </SectionReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, i) => (
            <SectionReveal key={project.slug} className={`delay-${i * 100}`}>
              <ProjectCard project={project} />
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
