---
name: ftb-website-build-prompt
description: >
  Complete build instructions for the Food Tech Bootcamp website.
  Use when scaffolding, developing, or deploying the FTB Next.js site.
  Covers: routing architecture, SEO (metadata, structured data, sitemap),
  Next.js App Router file structure, MDX content schemas, Tailwind config,
  phased build order, and deployment checklist.
  Pair with ftb-brand-identity-website for all visual/design decisions.
---

# FTB Website — Build Prompt

## Your Role

You are the developer agent building the Food Tech Bootcamp website. Ship a production-grade Next.js site that looks like it was built by a lab that does real things — not by an agency selling templates.

---

## Before You Write Any Code

Read these files. They are your source of truth.

| Priority | File                                                 | What it gives you                                                                                                                  |
| -------- | ---------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| 1        | `CLAUDE.md`                                          | Project overview, tech stack, coding conventions                                                                                   |
| 2        | `.claude/skills/ftb-brand-identity-website/SKILL.md` | **AUTHORITATIVE design system** — colors, type, layout, components, sections, copy. If any design question arises, this file wins. |
| 3        | `.claude/skills/ftb-website-build-prompt/SKILL.md`   | **THIS FILE** — routing, SEO, file structure, build order                                                                          |
| 4        | `.claude/skills/ftb-content-engine/SKILL.md`         | Blog format, voice calibration (reference when writing content)                                                                    |
| 5        | `.claude/skills/ftb-tosi-experiment/SKILL.md`        | Tosi project details (reference when building project pages)                                                                       |

---

## Project Structure

```
WEBSITE2/
├── .claude/
│   └── skills/                        → All skills (auto-discovered by Claude Code)
│       ├── ftb-brand-identity-website/SKILL.md
│       ├── ftb-website-build-prompt/SKILL.md    ← THIS FILE
│       ├── ftb-voice-ceo/SKILL.md
│       ├── ftb-content-engine/SKILL.md
│       ├── ftb-tosi-experiment/SKILL.md
│       ├── ftb-artisan-discovery/SKILL.md
│       ├── ftb-eu-bandi-navigator/SKILL.md
│       └── ftb-roadmap-2026-2027/SKILL.md
├── Projects/
│   └── Tosi/
│       └── Docs/                      → experiment docs (00-, 01-, ...) + Archive/
├── CLAUDE.md
├── STATUS.md
├── ARCHITECTURE.md
└── src/                               → Next.js app — YOU BUILD THIS
```

### Next.js App Structure

```
src/
├── app/
│   ├── layout.tsx              → Root layout (fonts, metadata, nav, footer)
│   ├── page.tsx                → Homepage (7 sections composed)
│   ├── projects/
│   │   └── [slug]/
│   │       └── page.tsx        → Project detail page
│   ├── blog/
│   │   └── [slug]/
│   │       └── page.tsx        → Blog post page
│   ├── sitemap.ts              → Dynamic sitemap generation
│   ├── robots.ts               → Robots.txt generation
│   └── not-found.tsx           → Custom 404 (dark, on-brand)
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          → Fixed nav (transparent → solid on scroll)
│   │   └── Footer.tsx          → Minimal footer
│   ├── sections/
│   │   ├── Hero.tsx            → Hero + sector ticker
│   │   ├── ProjectGrid.tsx     → "We do food intelligence and stuff"
│   │   ├── Manifesto.tsx       → Mission statement (light bg break)
│   │   ├── Partners.tsx        → Logo bar + descriptions
│   │   ├── Founder.tsx         → Photo + bio (light bg break)
│   │   ├── BlogFeed.tsx        → "What's new" cards
│   │   └── Contact.tsx         → Email + statement
│   ├── ui/
│   │   ├── Button.tsx          → Primary + Secondary + LinkArrow
│   │   ├── ProjectCard.tsx     → Card with image, tag, title, question
│   │   ├── BlogCard.tsx        → Card with image, date, title, excerpt
│   │   ├── Tag.tsx             → Active / Research / Tech pill badges
│   │   ├── SectorTicker.tsx    → Infinite horizontal scroll
│   │   └── SectionReveal.tsx   → Intersection Observer fade-up wrapper
│   └── mdx/
│       └── MDXComponents.tsx   → Custom MDX rendering components
├── content/
│   ├── projects/
│   │   ├── tosi-ai-sales.mdx
│   │   ├── imagine-fb.mdx
│   │   ├── cooking-intelligence-llm.mdx
│   │   └── haccp-automation.mdx
│   └── blog/
│       ├── can-ai-sell-artisanal-gorgonzola.mdx
│       └── why-artisanal-producers-need-ai-not-websites.mdx
├── lib/
│   ├── content.ts              → MDX parsing, frontmatter extraction
│   ├── metadata.ts             → Shared metadata helpers
│   └── constants.ts            → Site-wide constants (colors, links, sectors)
├── styles/
│   └── globals.css             → Tailwind base + CSS variables + custom utilities
└── public/
    ├── images/
    │   ├── logo/               → All logo variants (SVG preferred)
    │   ├── projects/           → Project card + detail images
    │   ├── blog/               → Blog card images
    │   ├── founder/            → Founder photo
    │   └── og/                 → Open Graph images (1200×630)
    ├── favicon.ico
    ├── apple-touch-icon.png
    └── site.webmanifest
```

---

## Routing Architecture

### Route Map

```
/                           → Homepage (single-page, 7 sections)
/projects/[slug]            → Individual project detail pages
/blog/[slug]                → Individual blog posts
/sitemap.xml                → Auto-generated sitemap
/robots.txt                 → Crawl directives
/feed.xml                   → RSS feed (optional, low priority)
```

No `/about`, no `/services`, no `/pricing`, no `/contact` page. The homepage IS the site.

---

## SEO Architecture

### Page-Level Metadata

Every page exports metadata via Next.js Metadata API. No page ships without complete metadata.

#### Homepage (`/`)

```typescript
export const metadata: Metadata = {
  title: "Food Tech Bootcamp — Where Food Knowledge Becomes Computable",
  description:
    "AI lab for Italy's 300,000 artisanal food producers. We build intelligence tools for cheesemakers, bakers, olive oil producers, winemakers — technology that amplifies craft, not replaces it.",
  keywords: [
    "food tech",
    "AI food industry",
    "artisanal food producers Italy",
    "food AI lab",
    "artificial intelligence food",
    "Italian food innovation",
    "DOP producers technology",
    "food tech bootcamp",
    "cheesemaker AI",
    "food safety automation",
    "HACCP AI",
  ],
  openGraph: {
    title: "Food Tech Bootcamp — Where Food Knowledge Becomes Computable",
    description:
      "AI lab for Italy's artisanal food producers. Technology that amplifies craft, not replaces it.",
    url: "https://foodtechbootcamp.com",
    siteName: "Food Tech Bootcamp",
    images: [{ url: "/images/og/home.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Food Tech Bootcamp",
    description: "AI lab for Italy's artisanal food producers.",
    images: ["/images/og/home.jpg"],
  },
  alternates: {
    canonical: "https://foodtechbootcamp.com",
  },
};
```

#### Project Pages (`/projects/[slug]`)

```typescript
export async function generateMetadata({ params }): Promise<Metadata> {
  const project = await getProject(params.slug);
  return {
    title: `${project.title} — Food Tech Bootcamp`,
    description: project.seoDescription,
    openGraph: {
      title: project.title,
      description: project.question,
      images: [{ url: project.ogImage }],
      type: "article",
    },
    alternates: {
      canonical: `https://foodtechbootcamp.com/projects/${params.slug}`,
    },
  };
}
```

#### Blog Posts (`/blog/[slug]`)

```typescript
export async function generateMetadata({ params }): Promise<Metadata> {
  const post = await getPost(params.slug);
  return {
    title: `${post.title} — Food Tech Bootcamp`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.ogImage }],
      type: "article",
      publishedTime: post.date,
      authors: ["Food Tech Bootcamp"],
      tags: post.tags,
    },
    alternates: {
      canonical: `https://foodtechbootcamp.com/blog/${params.slug}`,
    },
  };
}
```

### MDX Frontmatter Schemas

#### Projects

```yaml
---
title: "Tosi AI Sales Agent"
slug: "tosi-ai-sales"
question: "Can AI sell artisanal gorgonzola to 47 paninerie in Milan?"
seoDescription: "AI sales experiment: Claude coordinates a 3-person team selling artisanal DOP gorgonzola to gourmet sandwich shops in Milan."
status: "active" # active | upcoming | completed
tag: "experiment" # experiment | research
sector: "caseificio"
image: "/images/projects/tosi-ai-sales.jpg"
ogImage: "/images/og/tosi-ai-sales.jpg"
date: "2026-03-01"
updated: "2026-03-14"
---
```

#### Blog Posts

```yaml
---
title: "Can AI Sell Artisanal Gorgonzola?"
slug: "can-ai-sell-artisanal-gorgonzola"
excerpt: "We asked Claude to coordinate a 3-person sales team at an artisanal DOP caseificio. Week 1 results from the experiment."
seoDescription: "First results from the Tosi AI Sales experiment: an AI intelligence layer helping 3 humans sell artisanal gorgonzola to Milan's gourmet paninerie."
tags: ["AI sales", "gorgonzola", "artisanal food", "case study"]
image: "/images/blog/gorgonzola-experiment.jpg"
ogImage: "/images/og/gorgonzola-experiment.jpg"
date: "2026-03-14"
author: "Founder"
---
```

### URL Slug Rules

- All lowercase, hyphenated: `tosi-ai-sales`
- Max 5 words when possible
- Include primary keyword: `haccp-automation` not `project-4`
- Never change a slug after publishing

### Structured Data (JSON-LD)

#### Organization (Homepage)

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Food Tech Bootcamp",
  "alternateName": "FTB Lab",
  "url": "https://foodtechbootcamp.com",
  "logo": "https://foodtechbootcamp.com/images/logo/logo-ftb.png",
  "description": "AI lab for Italy's artisanal food producers. Making food knowledge computable.",
  "foundingDate": "2018",
  "founder": {
    "@type": "Person",
    "name": "[Founder Name]",
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "UNISG — University of Gastronomic Sciences, Pollenzo"
    }
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Milan",
    "addressRegion": "Lombardy",
    "addressCountry": "IT"
  },
  "sameAs": [
    "https://www.linkedin.com/company/foodtechbootcamp",
    "https://github.com/foodtechbootcamp"
  ]
}
```

#### Article (Blog Posts)

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "{{title}}",
  "description": "{{excerpt}}",
  "image": "{{ogImage}}",
  "datePublished": "{{date}}",
  "dateModified": "{{updated}}",
  "author": { "@type": "Person", "name": "[Founder Name]" },
  "publisher": {
    "@type": "Organization",
    "name": "Food Tech Bootcamp",
    "logo": {
      "@type": "ImageObject",
      "url": "https://foodtechbootcamp.com/images/logo/logo-ftb.png"
    }
  }
}
```

#### Research Project (Project Pages)

```json
{
  "@context": "https://schema.org",
  "@type": "ResearchProject",
  "name": "{{title}}",
  "description": "{{seoDescription}}",
  "url": "https://foodtechbootcamp.com/projects/{{slug}}",
  "startDate": "{{date}}",
  "funder": { "@type": "Organization", "name": "Food Tech Bootcamp" }
}
```

### Technical SEO Files

#### `sitemap.ts`

```typescript
import { MetadataRoute } from "next";
import { getAllProjects, getAllPosts } from "@/lib/content";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const projects = await getAllProjects();
  const posts = await getAllPosts();

  return [
    {
      url: "https://foodtechbootcamp.com",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    ...projects.map((p) => ({
      url: `https://foodtechbootcamp.com/projects/${p.slug}`,
      lastModified: p.updated || p.date,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...posts.map((p) => ({
      url: `https://foodtechbootcamp.com/blog/${p.slug}`,
      lastModified: p.date,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
```

#### `robots.ts`

```typescript
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/api/", "/_next/"] },
    sitemap: "https://foodtechbootcamp.com/sitemap.xml",
  };
}
```

#### Head Essentials (`layout.tsx`)

```html
<link rel="canonical" href="https://foodtechbootcamp.com" />
<meta name="theme-color" content="#0A0A0A" />
<meta name="apple-mobile-web-app-title" content="FTB Lab" />
<link rel="icon" href="/favicon.ico" sizes="any" />
<link rel="icon" href="/icon.svg" type="image/svg+xml" />
<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
<link rel="manifest" href="/site.webmanifest" />
```

### Internal Linking Strategy

- Every project page: `← Back to all projects` → homepage
- Every blog post: `← Back to updates` → homepage
- Blog posts cross-link to relevant project pages
- Project pages link to related blog posts
- No orphan pages — every page reachable from `/` in 1 click

### Core Web Vitals

| Metric | Target | How                                                    |
| ------ | ------ | ------------------------------------------------------ |
| LCP    | <2.5s  | Hero optimized, fonts preloaded, no render-blocking JS |
| INP    | <100ms | Minimal JS. Static pages. No heavy hydration.          |
| CLS    | <0.1   | Explicit image dimensions. Font `swap`.                |
| TTFB   | <200ms | Vercel edge. Static generation.                        |

### Image SEO

- Descriptive `alt` text on all images
- Describe the process: "Cheesemaker checking aging wheels" not "food image"
- Descriptive filenames: `tosi-gorgonzola-aging-cave.jpg` not `IMG_4521.jpg`
- OG images unique per page

---

## Tailwind Config

```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        carbone: "#2C2A28",
        terra: "#A0522D",
        crosta: "#C4956A",
        caglio: "#F2EBE0",
        rame: "#4A7C59",
        lava: "#B8372A",
        dark: {
          DEFAULT: "#0A0A0A",
          mid: "#0D0D0D",
          surface: "#1A1A1A",
        },
      },
      fontFamily: {
        headline: ["var(--font-syne)", "system-ui", "sans-serif"],
        body: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "Courier New", "monospace"],
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1.4" }],
        sm: ["0.875rem", { lineHeight: "1.5" }],
        base: ["1rem", { lineHeight: "1.6" }],
        lg: ["1.125rem", { lineHeight: "1.5" }],
        xl: ["1.333rem", { lineHeight: "1.3" }],
        "2xl": ["1.777rem", { lineHeight: "1.2" }],
        "3xl": ["2.369rem", { lineHeight: "1.1" }],
        "4xl": ["3.157rem", { lineHeight: "1.05" }],
        "5xl": ["4.209rem", { lineHeight: "1" }],
      },
      spacing: {
        section: "clamp(80px, 12vw, 160px)",
        block: "clamp(40px, 6vw, 80px)",
      },
      maxWidth: {
        prose: "65ch",
        content: "1280px",
      },
      letterSpacing: {
        caps: "0.04em",
        wide: "0.02em",
      },
    },
  },
  plugins: [],
};

export default config;
```

---

## Content — What to Write

### Project Pages (Priority Order)

1. **Tosi AI Sales Agent** (`/projects/tosi-ai-sales`) — Flagship. Andon Labs eval format. See `ftb-tosi-experiment` skill.
2. **HACCP Automation** (`/projects/haccp-automation`) — Shorter PoC format.
3. **IMAGINE F&B** (`/projects/imagine-fb`) — In-development format.
4. **Cooking Intelligence LLM** (`/projects/cooking-intelligence-llm`) — Research/upcoming.

### Blog Posts (Start with 1-2)

1. "Can AI Sell Artisanal Gorgonzola?" — experiment report
2. "Why Italian Artisanal Producers Need AI, Not Websites" — industry insight

See `ftb-content-engine` skill for blog structure and voice.

### Homepage Copy

All section copy is in `ftb-brand-identity-website` skill. Use verbatim. Do not improvise.

---

## Build Order

### Phase 1: Skeleton (Ship First)

1. `layout.tsx` — fonts, metadata, Navbar + Footer
2. `page.tsx` — 7 sections composed, scrollable, responsive
3. `globals.css` — CSS variables, Tailwind base, ticker animation
4. Static content — hardcode cards (no MDX yet)

**Ship when:** homepage loads, sections render, nav works, mobile clean.

### Phase 2: Content System

5. MDX parsing in `lib/content.ts`
6. `/projects/[slug]` with `generateStaticParams`
7. `/blog/[slug]` with `generateStaticParams`
8. First 2 project pages (Tosi + HACCP)
9. First blog post

**Ship when:** cards link to pages, metadata correct.

### Phase 3: Polish & SEO

10. `sitemap.ts` + `robots.ts`
11. JSON-LD structured data
12. OG images
13. 404 page
14. Accessibility audit
15. Lighthouse ≥95

**Ship when:** structured data validates, sitemap to GSC.

### Phase 4: Growth

16. RSS feed
17. Additional pages
18. Real photography
19. Analytics configured

---

## 404 Page

```
FOOD TECH BOOTCAMP

This page doesn't exist.
Like a CRM in most caseifici.

← Back to the lab
```

---

## Checklist Before Launch

- [ ] All 7 sections render on desktop, tablet, mobile
- [ ] Nav smooth-scrolls, highlights active section
- [ ] Project cards → detail pages with full metadata
- [ ] Blog cards → posts with full metadata
- [ ] Sector ticker scrolls, pauses on hover
- [ ] Section alternation: dark → dark → light → dark → light → dark → dark → dark
- [ ] No `#FFFFFF` or `#000000` in CSS
- [ ] No `border-radius` on cards, buttons, images
- [ ] Manifesto line in Italian, italic
- [ ] All images have descriptive alt text
- [ ] OG images unique per page
- [ ] JSON-LD validates
- [ ] Sitemap generates all routes
- [ ] Robots.txt references sitemap
- [ ] Lighthouse ≥95
- [ ] WCAG AA contrast passes
- [ ] `prefers-reduced-motion` disables animations
- [ ] Favicon is leaf mark
- [ ] `<title>` + `<meta description>` unique per page
- [ ] Canonical URLs on every page
- [ ] No lorem ipsum
- [ ] Loads <2s on 4G
- [ ] Contact email is `mailto:`
