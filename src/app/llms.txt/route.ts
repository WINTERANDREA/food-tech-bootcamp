import { SITE_URL, CONTACT_EMAIL, SECTORS } from "@/lib/constants";
import { getAllPosts, getAllProjects } from "@/lib/content";

export function GET() {
  const posts = getAllPosts();
  const projects = getAllProjects();

  const body = `# Food Tech Bootcamp

> AI lab building tools for Italy's best artisanal food producers. We find one producer per sector — the ones who chose craft over convenience — and build the AI they need to compete.

## About

Food Tech Bootcamp is a one-person lab based in Milan, Italy. Founded by a gastronome trained in gastronomic sciences who codes. We identify the best artisanal food producer in each sector and build AI tools that help them compete without compromising their craft. Not an agency. Not a consultancy. A lab.

## Mission

Making food knowledge computable. Technology that amplifies craft, not replaces it. Food wisdom is going extinct — not because the products are worse, but because the tools are. We build the other tools.

## Tech Stack

- AI: Claude by Anthropic (Sonnet for routine, Opus for complex reasoning)
- Frontend: Next.js (App Router), React, Tailwind CSS
- Backend: Supabase
- Deployment: Vercel

## Links

- [Homepage](${SITE_URL})
- [Mission](${SITE_URL}/mission)
- [For Producers](${SITE_URL}/producers)
- [Full LLMs.txt](${SITE_URL}/llms-full.txt)

## Projects

${projects.map((p) => `- [${p.title}](${SITE_URL}/projects/${p.slug}): ${p.question}`).join("\n")}

## Blog

${posts.map((p) => `- [${p.title}](${SITE_URL}/blog/${p.slug}): ${p.excerpt}`).join("\n")}

## Sectors

${SECTORS.join(", ")}

## Contact

${CONTACT_EMAIL}
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
