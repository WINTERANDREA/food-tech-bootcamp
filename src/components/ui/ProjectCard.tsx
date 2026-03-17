import Image from "next/image";
import Link from "next/link";
import { Tag } from "@/components/ui/Tag";
import type { Project } from "@/lib/constants";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block bg-dark-surface border border-[var(--border-medium)] overflow-hidden transition-all duration-500 hover:border-[var(--border-strong)]"
    >
      <div className="relative aspect-video overflow-hidden">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.imageAlt || project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            loading="lazy"
          />
        ) : (
          <div className="absolute inset-0 bg-dark-surface" />
        )}
      </div>
      <div className="p-6">
        <div className="flex flex-wrap gap-2.5 mb-3">
          {project.tags.map((tag) => (
            <Tag key={tag} tag={tag} />
          ))}
        </div>
        <h3 className="font-headline text-xl leading-snug font-bold text-caglio mb-2">
          {project.title}
        </h3>
        <p className="font-body text-base italic text-crosta">
          {project.question}
        </p>
      </div>
    </Link>
  );
}
