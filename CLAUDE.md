# CLAUDE.md — Food Tech Bootcamp

## What This Is

FTB is a lab building AI tools for Italy's 300,000 artisanal food producers. Mission: making food knowledge computable. Founded by a UNISG Pollenzo gastronome who codes. Based in Milan area. One-person lab with a full-time job at Cortilia.

Not an agency. Not a consultancy. A lab. The work changes — the mission doesn't.

## Current State (2026-04-03)

- **Primary project:** Tosi AI Sales Agent — Phase 0 near-complete. CRM fully refactored with 250 Google Places prospects imported, map view built, deployed on Vercel. Next: baseline interview with Andrea Tosi → Phase 1 (Digital Twin + briefing cards).
- **CRM:** `~/Projects/TOSI/WEB/tosi-mini-crm` (branch: `feat/ai-sales-agent`). React + Vite + Supabase + Google Maps. Dashboard + Map view. 250 prospects with phone/email/reviews/menu/registro aziende.
- **Scraping:** `~/Projects/TOSI/WEB/tosi-scraping`. Full 7-step pipeline: search → dedup → emails → reviews → registro aziende → menu → CSV.
- **Website:** In development. New design system and build prompt complete. No live site yet.
- **Blog:** 1 post published ("From Vending Machines to Aging Rooms").
- **Partnerships:** Anthropic Ambassador application pending. Tosi case study permission secured (2026-03-20).
- **EU funding:** 0 applications submitted. Landscape research complete.
- **Next milestone:** Baseline interview with Andrea Tosi. Build Digital Twin system prompt. Generate briefing cards for top ~47 prospects.

> Update this section after every meaningful work session. If it's stale, the agent can't help you.

## Tech Stack

- **AI:** Anthropic Claude API (Sonnet for routine tasks, Opus for complex reasoning)
- **Frontend:** Next.js 14+ (App Router), React, Tailwind CSS
- **Backend:** Supabase (pgvector for embeddings when needed)
- **Content:** MDX files in `/content/`
- **Deployment:** Vercel
- **Fonts:** Syne (headlines), DM Sans (body), JetBrains Mono (monospace)
- **Images:** Next.js `<Image>`, WebP + JPG fallback
- **Analytics:** Vercel Analytics or Plausible (no GA4)

## Coding Conventions

- TypeScript strict mode
- Functional components only, no class components
- Tailwind utility classes in JSX — no custom CSS files except `globals.css`
- Use Materic palette tokens: never `#FFFFFF` (use Caglio `#F2EBE0`), never `#000000` (use Carbone `#2C2A28` or `#0A0A0A`)
- No `border-radius` on cards, buttons, or images — sharp corners
- All images: descriptive `alt` text, `loading="lazy"` (except hero)
- Commit early, commit often, meaningful messages
- `npm run dev` — local development
- `npm run build` — production build
- `npm run lint` — lint check
- Deploy: push to `main` → Vercel auto-deploys

## Folder Structure

```
CLAUDE.md
STATUS.md                              → Flywheel tracker (update after every session)
Media/
  Brand/                               → Logo variants, palette reference, brand images
Projects/
  Tosi/
    Docs/                              → Experiment docs, prefixed by phase (00-, 01-, ...)
    Media/
      Brand/                           → Tosi-specific brand assets
      Production/                      → Editorial production photography
      Provocation/                     → Provocative/editorial imagery
Skills/
  FTB-Artisan-Discovery.skill.md       → Producer field research framework
  FTB-Brand-Identity-Website.skill.md  → Website design system (AUTHORITATIVE for all visual decisions)
  FTB-Content-Engine.skill.md          → Blog, LinkedIn, case study formats
  FTB-EU-Bandi-Navigator.skill.md      → EU funding landscape, application writing
  FTB-Manrique-CEO.skill.md            → Communication voice, strategic push-back
  FTB-Rebrand-Lab-Identity.md          → LEGACY (superseded by Brand-Identity-Website)
  FTB-Strategy.skill.md               → Partnerships, funding pipeline, legal, timeline
  FTB-Tosi-Experiment.skill.md         → AI sales agent architecture, metrics, documentation
  FTB-Website-Build-Prompt.md          → Routing, SEO, Next.js structure, deployment
```

## Task → Skill Routing

Only load the skills you need. Every skill costs context.

| Task | Load these skills |
|------|-------------------|
| **Website development** | Brand-Identity-Website + Website-Build-Prompt |
| **Blog / LinkedIn / content** | Content-Engine + Manrique-CEO |
| **Tosi experiment** | Tosi-Experiment (+ Manrique-CEO if writing about it) |
| **EU funding applications** | EU-Bandi-Navigator + Content-Engine |
| **Producer field research** | Artisan-Discovery |
| **Strategy / partnerships / pitches** | Strategy + Manrique-CEO |
| **Emails / formal communication** | Manrique-CEO |
| **Cortilia work / general dev** | CLAUDE.md alone — no skills needed |

## Key Rules

1. **Tosi is the seed.** Everything else grows from it. Don't start new projects before Tosi produces results.
2. **One project, six outputs.** Every Tosi work session should produce material for at least 2 of: case study, blog post, UNISG presentation, EU application, Anthropic pitch, client template. Track in STATUS.md.
3. **Show, don't pitch.** Build demos, not decks. Ship experiments, not strategies. (César Manrique principle — full voice guide in Manrique-CEO skill.)
4. **The artisan is always the subject.** In all content, the human craft comes first, technology second.
5. **Sector rotation.** Never more than 2 consecutive references to the same food sector. Rotate: caseifici, panifici, frantoi, cantine, norcinerie, pastifici, conservifici, birrifici, apicoltura, cioccolateria, oleifici, gelaterie artigianali.
