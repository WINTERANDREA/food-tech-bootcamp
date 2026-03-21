import type { ProjectTag } from "@/lib/constants";

const tagStyles: Record<ProjectTag, string> = {
  active: "bg-terra text-caglio",
  experiment: "bg-rame text-caglio",
  research: "border border-crosta text-crosta bg-transparent",
  upcoming: "text-crosta bg-crosta/40",
  "producer selected": "bg-terra/80 text-caglio",
};

export function Tag({ tag }: { tag: ProjectTag }) {
  return (
    <span
      className={`font-mono text-[0.6875rem] uppercase leading-none px-2.5 py-1.5 whitespace-nowrap ${tagStyles[tag]}`}
    >
      {tag}
    </span>
  );
}
