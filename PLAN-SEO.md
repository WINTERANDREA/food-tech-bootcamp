# SEO, Structured Data & LLMs.txt — Implementation Plan

> Created: 2026-03-21
> Status: Not started
> Goal: Optimize the FTB website for search engines, rich results, and AI discoverability before the Claude Partner Program application.

---

## Current State

Already in place:
- Root metadata with `metadataBase`, `title`, `description`, `keywords`, `openGraph`, `twitter`
- `sitemap.ts` covering pages dynamically
- `robots.ts` with sensible rules
- JSON-LD `Article` on blog posts
- JSON-LD `ResearchProject` on project pages
- JSON-LD `Organization` in root layout
- Canonical URLs on all pages

---

## Issues Found

| Issue | Location | Priority |
|-------|----------|----------|
| Blog posts have empty `image`/`ogImage` — OG previews broken | `src/content/blog/*.mdx` | High |
| `/produttori` missing from sitemap | `src/app/sitemap.ts` | High |
| Sitemap hardcodes URL instead of using `SITE_URL` constant | `src/app/sitemap.ts` | Medium |
| No `WebSite` schema | Root layout | Medium |
| No `BreadcrumbList` schema on any page | All sub-pages | Medium |
| Organization JSON-LD missing `founder`, `sameAs`, `contactPoint` | Root layout | Medium |
| Article JSON-LD `author` is org name, should be person | Blog page template | Medium |
| No dynamic OG image generation — only one static `home.jpg` | `public/images/og/` | Medium |
| No LLMs.txt for AI discoverability | New feature | Medium |
| Font mismatch: Plus Jakarta Sans vs Syne (brand spec) | `src/app/layout.tsx` | Low |
| 404 page has no metadata | `src/app/not-found.tsx` | Low |

---

## Phase 1 — Quick Fixes

**Effort:** 30 min
**Files:** `sitemap.ts`, `not-found.tsx`, `blog/[slug]/page.tsx`

- [ ] Fix sitemap: add `/produttori` route
- [ ] Fix sitemap: use `SITE_URL` constant instead of hardcoded URL
- [ ] Fix blog Article JSON-LD: change `author` from org to `@type: Person` using frontmatter `author` field
- [ ] Add metadata to 404 page: `title`, `robots: { index: false, follow: true }`

---

## Phase 2 — LLMs.txt

**Effort:** 45 min
**Files:** new `llms.txt/route.ts`, new `llms-full.txt/route.ts`, `layout.tsx`

- [ ] Create `/llms.txt` route — plain text, concise summary:
  - About (lab, mission, Milan, gastronome who codes)
  - Projects (3 experiments with one-line descriptions)
  - Blog (post titles with URLs)
  - Sectors served (12 sectors)
  - Contact email
- [ ] Create `/llms-full.txt` route — dynamic, pulls all MDX content:
  - Full blog post text (stripped of MDX syntax)
  - Full project descriptions
  - Manifesto content
  - Uses existing `getAllPosts()` and `getAllProjects()` from `lib/content.ts`
- [ ] Add `<link rel="alternate" type="text/plain" href="/llms.txt" title="LLMs.txt" />` in root layout head

---

## Phase 3 — Structured Data

**Effort:** 45 min
**Files:** `layout.tsx`, new `components/seo/Breadcrumbs.tsx`, `manifesto/page.tsx`, `blog/[slug]/page.tsx`, `projects/[slug]/page.tsx`

- [ ] Enhance Organization JSON-LD in root layout:
  - Add `founder`: `@type: Person`, name, job title
  - Add `sameAs`: LinkedIn profile, future social
  - Add `contactPoint`: email
  - Add `areaServed: "IT"`
  - Add `knowsAbout`: artisanal food, AI, food technology
- [ ] Add WebSite JSON-LD alongside Organization using `@graph` pattern:
  - `name`, `url`, `publisher` linked to Organization via `@id`
- [ ] Create reusable `Breadcrumbs` component:
  - Renders visible breadcrumb navigation
  - Embeds `BreadcrumbList` JSON-LD
  - Paths: Home > Manifesto, Home > Produttori, Home > Blog > [Post], Home > Projects > [Project]
- [ ] Add breadcrumbs to manifesto, blog post, and project pages
- [ ] Fix Article JSON-LD: add `mainEntityOfPage`, `dateModified`

---

## Phase 4 — OG Images

**Effort:** 60 min
**Files:** new `api/og/route.tsx`, all page metadata, blog MDX frontmatter

- [ ] Create dynamic OG image route at `/api/og` using `next/og` (`ImageResponse`):
  - Accepts query params: `title`, `subtitle`, `type` (blog/project/page)
  - Branded design: dark background (`#0A0A0A`), terra accent, caglio text
  - FTB leaf logo mark
  - Output: 1200x630 PNG
- [ ] Update metadata across all pages to use dynamic OG:
  - Homepage: `title=Food Tech Bootcamp&subtitle=AI tools for artisanal food producers`
  - Manifesto: `title=Manifesto&type=page`
  - Produttori: `title=For Producers&type=page`
  - Blog posts: `title=[post title]&type=blog`
  - Projects: `title=[project title]&type=project`
- [ ] Fix blog MDX frontmatter: set actual `image` and `ogImage` values (use project images or generate)

---

## Phase 5 — Validation

**Effort:** 20 min

- [ ] Test all structured data with Google Rich Results Test
- [ ] Validate OG tags with Facebook Sharing Debugger
- [ ] Validate Twitter cards with Twitter Card Validator
- [ ] Test `/llms.txt` and `/llms-full.txt` responses
- [ ] Verify sitemap includes all routes
- [ ] Check canonical URLs resolve correctly

---

## Priority for Claude Partner Application

For the application, the most impactful items are:
1. **LLMs.txt** — shows AI-native thinking, Anthropic will notice
2. **Structured data** — makes the site look professional and well-built
3. **OG images** — the link preview when sharing the application URL
4. **Blog post images** — currently broken OG, needs immediate fix

---

## Notes

- The produttori page uses client-side language toggle (EN/IT). Search engines only index the English version. If Italian SEO becomes important later, create a separate `/it/produttori` route.
- Font mismatch (Plus Jakarta Sans vs Syne) is a brand consistency issue, not SEO. Track separately.
- All changes should be committed incrementally per phase.
