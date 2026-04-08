# STATUS.md — FTB Flywheel Tracker

> Update after every work session. Date every entry.

## Tosi AI Sales Agent — The Seed

### Infrastructure

- **CRM repo:** `~/Projects/TOSI/WEB/tosi-mini-crm` (branch: `feat/ai-sales-agent`)
- **Scraping repo:** `~/Projects/TOSI/WEB/tosi-scraping` (caseificiotosi-hub/tosi-scraping)
- **CRM stack:** React 18 + TypeScript + Vite + Supabase + TanStack Query + Zustand
- **Current CRM:** 1400+ companies imported, agent assignment, groups, filters, auth
- **Scraping results:** 250 prospects zona Turati Milano, 123 with email. Ready for CRM import.
- **Proposal:** `Projects/Tosi/Docs/00-TOSI-AI-Sales-Agent-Proposta-IT.md` (sent, feedback received)
- **Scraping methodology:** `Projects/Tosi/Docs/00-TOSI-Scraping-Methodology.md`
- **Email:** `hello@tosigorgonzola.com` (confirmed for AI-drafted outreach)
- **Team:** Andrea C. (builds + field sales), Andrea M. / Tosi (supervises, approves)
- **Target zone:** Zona Turati Milano (2km radius: Brera, Porta Nuova, Garibaldi, Isola, Porta Venezia)

### Phase Roadmap

| Phase | Timeline | Status | Key Deliverables |
|-------|----------|--------|-----------------|
| **0: Baseline** | Week 1-2 | **Near-complete** | ~~Scraping~~ Done (250 prospects, 7-step pipeline). ~~Proposal~~ Done (feedback received). ~~CRM refactoring~~ Done (schema + import + UI + map). ~~Deploy~~ Done (Vercel). Remaining: baseline interview with Andrea Tosi. |
| **1: Digital Twin + Briefing Cards** | Week 3-5 | Not started | Digital Twin system prompt (`/prompts/digital-twin-v1.md`). Supabase Edge Function `generate-briefing-card`. BriefingCardPanel component in CRM. 47 cards generated. |
| **2: Pipeline + Interaction Logging** | Week 6-8 | Not started | InteractionLog + InteractionForm components. Pipeline kanban view (`/pipeline` route). AI follow-up suggestions via `suggest-followup` edge function. React Router added. |
| **3: Email Outreach + Coordinator** | Week 9-12 | Not started | Email draft generation + review UI (`/email` route). Resend integration from hello@tosigorgonzola.com. Coordinator dashboard (`/coordinator` route). Weekly strategy generation. |
| **4: Measurement + Case Study** | Week 13-16 | Not started | Metrics dashboard (`/metrics` route). 4-week feature freeze. Data export. Case study production (3 versions: Anthropic, UNISG, public). |

### Technical Architecture

**AI integration:** Supabase Edge Functions calling Claude API (Sonnet for routine, Opus for strategy). Digital Twin system prompt versioned in CRM repo.

**New Supabase tables:**
- `interactions` — channel, outcome, ai_suggestion_followed, learning
- `briefing_cards` — menu_type, approach_angle, priority_score, personalized_script
- `email_drafts` — subject, body, status (draft/approved/sent/rejected)
- `experiment_metrics` — weekly snapshots for baseline comparison

**New CRM pages:** Dashboard (existing) → Pipeline → Coordinator → Email → Metrics

**Edge Functions:** generate-briefing-card, suggest-followup, generate-email-draft, send-email, get-daily-priorities

### Six Outputs from One Project

| Output | Target Audience | Status | Artifact | Date |
|--------|----------------|--------|----------|------|
| Anthropic case study | Anthropic (Ambassador app) | Not started | — | — |
| UNISG presentation | UNISG Pollenzo faculty | Not started | — | — |
| Milan meetup content | Local AI/food community | Not started | — | — |
| EIT Food application | EU evaluators | Not started | — | — |
| Blog post #1 | Public / SEO | Not started | — | — |
| Client template | Future producers | Not started | — | — |

---

## Website

| Milestone | Status | Date |
|-----------|--------|------|
| Design system (Brand-Identity-Website skill) | Done | 2026-03-14 |
| Build prompt (Website-Build-Prompt) | Done | 2026-03-14 |
| Homepage skeleton (7 sections rendering) | Not started | — |
| Project detail page: Tosi | Not started | — |
| Blog post page template | Not started | — |
| SEO (sitemap, structured data, OG images) | Not started | — |
| Launch to production | Not started | — |

---

## Content Pipeline

| Piece | Type | Status | Target Date |
|-------|------|--------|-------------|
| "Can AI Sell Artisanal Gorgonzola?" | Blog post | Not started | After Phase 1 results |
| "Why Artisanal Producers Need AI, Not Websites" | Blog post | Not started | — |
| Tosi project page | Website | Not started | — |
| HACCP project page | Website | Not started | — |
| First LinkedIn post | Social | Not started | — |

---

## Partnerships

| Partner | Next Action | Status | Date |
|---------|------------|--------|------|
| Anthropic | Ambassador application | Pending — applications open March 2026 | — |
| UNISG Pollenzo | Initial contact with faculty | Not started | — |
| Tosi (Andrea) | Case study permission secured — enthusiastic about Anthropic partnership | **Done** | 2026-03-20 |
| EIT Food | Identify specific call to apply for | Not started | — |

---

## Session Log

Record what you shipped, not what you planned.

| Date | What was done | Output produced |
|------|--------------|-----------------|
| 2026-03-14 | Brand identity skill + website build prompt + CLAUDE.md restructure | 3 skill files ready for dev |
| 2026-03-20 | Met with Tosi — he endorses Anthropic partnership, case study permission secured | Partnership narrative validated |
| 2026-03-21 | Created FTB-Andrea-CEO skill — strategic positioning + partnership comms | Skill file in .claude/skills/ |
| 2026-03-27 | Created AI Sales Agent proposal for Andrea Tosi. Forked CRM to feat/ai-sales-agent branch. Designed 5-phase roadmap. | Proposal in Projects/Tosi/Docs/, CRM branch ready |
| 2026-03-31 | Built scraping pipeline (tosi-scraping repo). 18 optimized queries, zona Turati 2km. Run: 250 prospects, 123 emails. Deep email extraction (regex+cheerio+mailto+JSON-LD). Documented methodology. Updated all docs with corrected context (team, location, target zone). | 250 prospects in CSV, scraping methodology doc, all repos synced |
| 2026-04-03 | Full CRM refactoring: new schema (20+ columns for Google Places data), import script, 250 prospects in Supabase. New UI: rating/tipo/contatti columns, detail panel with phone/email/social/reviews/registro aziende, Google Maps view at /map, React Router, sidebar nav. Scraping pipeline expanded: reviews, registro aziende, menu enrichment. .claude/skills added to CRM and scraping repos. | CRM deployed on Vercel (feat/ai-sales-agent), 3 repos fully synced with skills |
