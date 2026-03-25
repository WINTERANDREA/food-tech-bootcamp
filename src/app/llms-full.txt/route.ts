import { SITE_URL, CONTACT_EMAIL, SECTORS } from "@/lib/constants";
import { getAllPosts, getAllProjects, getPost, getProject } from "@/lib/content";

function stripMdx(content: string): string {
  return content
    .replace(/^---[\s\S]*?---\n*/m, "") // frontmatter
    .replace(/import\s+.*\n/g, "") // imports
    .replace(/export\s+.*\n/g, "") // exports
    .replace(/<[^>]+>/g, "") // JSX/HTML tags
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1") // markdown links → text
    .replace(/!\[([^\]]*)\]\([^)]+\)/g, "") // images
    .replace(/#{1,6}\s+/g, "## ") // normalize headings
    .replace(/\n{3,}/g, "\n\n") // collapse whitespace
    .trim();
}

export function GET() {
  const posts = getAllPosts();
  const projects = getAllProjects();

  const sections: string[] = [];

  sections.push(`# Food Tech Bootcamp — Full Content

> Food wisdom is disappearing. We build the tools that keep it alive. AI that speaks the language of the artisan — technology that amplifies craft instead of replacing it.

## About

AI lab based in Milan, Italy. We build tools for artisanal food producers — the ones who chose craft over convenience. Built on Claude by Anthropic.

## Mission

Making food knowledge computable. Technology that amplifies craft, not replaces it.

## Sectors

${SECTORS.join(", ")}
`);

  // Projects
  sections.push("---\n\n# Projects\n");
  for (const p of projects) {
    try {
      const full = getProject(p.slug);
      sections.push(`## ${full.title}

**Question:** ${full.question}
**Status:** ${full.status}
**Sector:** ${full.sector}

${stripMdx(full.content)}
`);
    } catch {
      sections.push(`## ${p.title}\n\n${p.question}\n`);
    }
  }

  // Blog posts
  sections.push("---\n\n# Blog\n");
  for (const p of posts) {
    try {
      const full = getPost(p.slug);
      sections.push(`## ${full.title}

**Date:** ${full.date}
**Author:** ${full.author}

${stripMdx(full.content)}
`);
    } catch {
      sections.push(`## ${p.title}\n\n${p.excerpt}\n`);
    }
  }

  sections.push(`---

## Contact

${CONTACT_EMAIL}
${SITE_URL}
`);

  const body = sections.join("\n");

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
