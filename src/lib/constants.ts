export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://foodtechbootcamp.com";
export const SITE_NAME = "Food Tech Bootcamp";
export const SITE_DESCRIPTION =
  "AI lab building tools for Italy's best artisanal food producers. We find one producer per sector — the ones who chose craft over convenience — and build the AI they need to compete.";
export const CONTACT_EMAIL = "hello@foodtechbootcamp.com";

export const SECTORS = [
  "caseifici",
  "panifici",
  "frantoi",
  "cantine",
  "norcinerie",
  "pastifici",
  "conservifici",
  "birrifici",
  "apicoltura",
  "cioccolateria",
  "oleifici",
  "gelaterie artigianali",
] as const;

export const NAV_LINKS = [
  { label: "Work", href: "/#work" },
  { label: "Mission", href: "/mission" },
  { label: "Producers", href: "/producers" },
  { label: "About", href: "/#founder" },
  { label: "Blog", href: "/#blog" },
  { label: "Contact", href: "/#contact" },
] as const;

export type ProjectTag = "experiment" | "research" | "active" | "upcoming" | "producer selected";

export interface Project {
  slug: string;
  title: string;
  question: string;
  tags: ProjectTag[];
  image?: string;
  imageAlt?: string;
  comingSoon?: boolean;
  relatedBlog?: string;
}

export const PROJECTS: Project[] = [
  {
    slug: "cooking-intelligence-llm",
    title: "Cooking Intelligence LLM",
    question:
      "Can we make Michelin-level culinary knowledge computable?",
    tags: ["research", "upcoming"],
    image: "/images/projects/cooking-intelligence-llm.jpg",
    imageAlt: "3D visualization of the FTB brand identity — food meets computation",
    relatedBlog: "what-if-culinary-knowledge-had-a-memory",
  },
  {
    slug: "ai-sales-agent",
    title: "AI Sales Agent",
    question:
      "Can AI help an artisanal caseificio sell to 47 targets in Milan?",
    tags: ["experiment", "producer selected"],
    image: "/images/projects/IMG_5662.jpg",
    imageAlt:
      "Gorgonzola aging room with green molds developing on wooden shelves",
    comingSoon: true,
    relatedBlog: "from-vending-machines-to-aging-rooms",
  },
  {
    slug: "haccp-automation",
    title: "HACCP Automation",
    question:
      "Can AI turn food safety compliance from hours into minutes?",
    tags: ["experiment", "producer selected"],
    image: "/images/projects/haccp-automation.jpg",
    imageAlt: "Artisanal production environment inside an Italian caseificio",
    comingSoon: true,
  },
];
