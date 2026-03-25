import { SITE_URL, CONTACT_EMAIL, SECTORS } from "@/lib/constants";
import { getAllPosts, getAllProjects } from "@/lib/content";

export function GET() {
  const posts = getAllPosts();
  const projects = getAllProjects();

  const body = `# Food Tech Bootcamp

> Food wisdom is disappearing. We build the tools that keep it alive. AI that speaks the language of the artisan — technology that amplifies craft instead of replacing it.

## About

AI lab based in Milan, Italy. We build tools for artisanal food producers — the ones who chose craft over convenience.

## Mission

Making food knowledge computable. Technology that amplifies craft, not replaces it.

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
