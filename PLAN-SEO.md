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

- [x] Fix sitemap: add `/produttori` route
- [x] Fix sitemap: use `SITE_URL` constant instead of hardcoded URL
- [x] Fix blog Article JSON-LD: change `author` from org to `@type: Person` using frontmatter `author` field
- [x] Add metadata to 404 page: `title`, `robots: { index: false, follow: true }`

---

## Phase 2 — LLMs.txt

**Effort:** 45 min
**Files:** new `llms.txt/route.ts`, new `llms-full.txt/route.ts`, `layout.tsx`

- [x] Create `/llms.txt` route — plain text, concise summary
- [x] Create `/llms-full.txt` route — dynamic, pulls all MDX content
- [x] Add `<link rel="alternate" type="text/plain" href="/llms.txt" title="LLMs.txt" />` in root layout head

---

## Phase 3 — Structured Data

**Effort:** 45 min
**Files:** `layout.tsx`, new `components/seo/Breadcrumbs.tsx`, `manifesto/page.tsx`, `blog/[slug]/page.tsx`, `projects/[slug]/page.tsx`

- [x] Enhance Organization JSON-LD: founder, sameAs, contactPoint, areaServed, knowsAbout
- [x] Add WebSite JSON-LD using `@graph` pattern
- [x] Create reusable `Breadcrumbs` component with BreadcrumbList JSON-LD
- [x] Add breadcrumbs to blog post and project pages
- [x] Fix Article JSON-LD: add `mainEntityOfPage`, linked publisher `@id`
- [x] Add breadcrumbs to manifesto page (hidden, JSON-LD only)

---

## Phase 4 — OG Images

**Effort:** 60 min
**Files:** new `api/og/route.tsx`, all page metadata, blog MDX frontmatter

- [x] Create dynamic OG image route at `/api/og` using `next/og` (edge runtime, `ImageResponse`)
- [x] Update metadata across all pages to use dynamic OG (homepage, manifesto, produttori, blog, projects)
- [x] Fix blog MDX frontmatter: set actual `image` and `ogImage` values, fix author name

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
