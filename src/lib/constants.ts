export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://foodtechbootcamp.com";
export const SITE_NAME = "Food Tech Bootcamp";
export const SITE_DESCRIPTION =
  "AI lab for Italy's real artisanal food producers. We discover, validate, and build intelligence tools for the cheesemakers, bakers, olive oil producers, and winemakers who still do it by hand.";
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
  "apicultura",
  "cioccolateria",
  "oleifici",
  "gelaterie artigianali",
] as const;

export const NAV_LINKS = [
  { label: "Work", href: "#work" },
  { label: "Mission", href: "#mission" },
  { label: "About", href: "#founder" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
] as const;

export type ProjectTag = "experiment" | "research" | "active" | "upcoming";

export interface Project {
  slug: string;
  title: string;
  question: string;
  tags: ProjectTag[];
  image?: string;
  imageAlt?: string;
}

export const PROJECTS: Project[] = [
  {
    slug: "tosi-ai-sales",
    title: "Tosi AI Sales Agent",
    question:
      "Can AI sell artisanal gorgonzola to 47 paninerie in Milan?",
    tags: ["experiment", "active"],
    image: "/images/projects/IMG_5662.jpg",
    imageAlt:
      "Gorgonzola aging room with green molds developing on wooden shelves",
  },
  {
    slug: "cooking-intelligence-llm",
    title: "Cooking Intelligence LLM",
    question:
      "Can we make Michelin-level culinary knowledge computable?",
    tags: ["research", "upcoming"],
    image: "/images/projects/cooking-intelligence-llm.jpg",
    imageAlt: "3D visualization of the FTB brand identity — food meets computation",
  },
  {
    slug: "haccp-automation",
    title: "HACCP Automation",
    question:
      "Can AI turn food safety compliance from hours into minutes?",
    tags: ["experiment"],
    image: "/images/projects/haccp-automation.jpg",
    imageAlt: "Artisanal production environment inside an Italian caseificio",
  },
];
