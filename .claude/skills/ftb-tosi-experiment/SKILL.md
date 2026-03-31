---
name: ftb-tosi-experiment
description: >
  Design, build, and documentation guide for the Tosi AI Sales Agent experiment.
  FTB's primary project. Use when building the sales coordinator system,
  designing prompts, setting up the CRM/database, writing prospect briefing
  cards, planning experiment phases, tracking metrics, or documenting results.
  Also use when writing the Tosi case study or project page content.
---

# Tosi Experiment — AI Sales Agent

## Current State (2026-03-31)

- **Phase:** 0 → 1 transition. Scraping complete, ready for CRM import and Digital Twin build.
- **CRM repo:** `~/Projects/TOSI/WEB/tosi-mini-crm` (branch: `feat/ai-sales-agent`). React + Vite + Supabase. 1400+ companies imported, agent assignment, auth, filters, bulk actions working.
- **Scraping repo:** `~/Projects/TOSI/WEB/tosi-scraping` (caseificiotosi-hub/tosi-scraping). Pipeline built and run.
- **Prospect list:** 252 prospects zona Turati Milano, 125 with email (50%). In `tosi-scraping/output/prospects_turati.csv`. NOT yet imported into CRM.
- **Proposal:** Sent to Andrea Tosi via email (PDF). Feedback received — positive. Source: `Projects/Tosi/Docs/00-TOSI-AI-Sales-Agent-Proposta-IT.md`
- **Scraping methodology:** `Projects/Tosi/Docs/00-TOSI-Scraping-Methodology.md`
- **Phase 1 planning:** `Projects/Tosi/Docs/01-TOSI-Phase1-Plan.md`
- **Team:** Andrea C. (FTB founder) = builds the system AND does field sales. Andrea M. (Tosi CEO) = supervises, approves emails, final decisions.
- **Location:** Caseificio Tosi is in Gattico (NO).
- **Target zone:** Zona Turati, Milano (2km radius: Brera, Porta Nuova, Garibaldi, Isola, Porta Venezia, Moscova).
- **Logistica:** Stocking point available in zona Turati (bar run by family contact).
- **Claude coordinator prompt:** Not written. Will be `/prompts/digital-twin-v1.md` in CRM repo.
- **Prospect briefing cards:** 0 generated. Template exists. UI component planned for Phase 1.
- **AI integration:** Planned via Supabase Edge Functions.
- **Email outreach:** Will use `hello@tosigorgonzola.com` via Resend. Phase 3. Andrea Tosi flagged email deliverability as biggest risk.
- **Baseline metrics:** Not collected. Need interview with Andrea Tosi.
- **Case study permission:** Secured (2026-03-20). Enthusiastic about Anthropic partnership.
- **Closed businesses discovered:** Panini Durini (2024), Chic & Go — removed from lists.

> Update this section as the experiment progresses. The agent needs to know what exists.

---

## Two-Repo Workflow

This project spans two repos. Know which one you're in.

| | **FTB repo** (this one) | **Tosi CRM repo** |
|---|---|---|
| **Path** | `~/Projects/FTB/food-tech-bootcamp` | `~/Projects/TOSI/WEB/tosi-mini-crm` |
| **Branch** | `main` | `feat/ai-sales-agent` |
| **Purpose** | Document, plan, track, write proposals/content | Build the CRM + AI sales agent |
| **What lives here** | Skills, STATUS.md, proposals in Projects/Tosi/Docs/, blog content, case study | React frontend, Supabase queries, Edge Functions, Digital Twin prompt |
| **Claude session** | Open Claude Code in FTB dir for documentation work | Open Claude Code in CRM dir for development work |

**Rule:** After every CRM development session, update STATUS.md and this skill file in the FTB repo.

### All Tosi Project Directories

| Path | Purpose |
|---|---|
| `~/Projects/TOSI/WEB/tosi-mini-crm` | CRM + AI sales agent (React + Supabase) |
| `~/Projects/TOSI/WEB/tosi-scraping` | Scraping pipeline for zona Turati prospects |
| `~/Projects/TOSI/WEB/APP-TOOL/Scraping-cheese-shop` | Existing scraper (fromagerie Francia/Germania) — reference for reuse |
| `~/Projects/FTB/food-tech-bootcamp` | Documentation, strategy, proposals, blog content |

---

## Documentation Guide

### What to document in FTB (this repo)

| What | Where | When |
|---|---|---|
| Phase progress, session logs | `STATUS.md` | After every work session |
| Architecture decisions, corrected context | This skill file | When something structural changes |
| Proposals, emails, feedback from Andrea Tosi | `Projects/Tosi/Docs/` | Every document sent or feedback received |
| Scraping methodology and results | `Projects/Tosi/Docs/` | After each scraping run |
| Blog posts about the experiment | `src/content/blog/` | End of each phase |
| Public project page updates | `src/content/projects/ai-sales-agent.mdx` | When there are results to show |

### What NOT to document here

- Code (lives in CRM repo or APP-TOOL)
- Prospect data (lives in Supabase)
- API keys, credentials (lives in .env files, never committed)

### Per-phase documentation outputs

| Phase | Document to produce |
|---|---|
| 0: Baseline | Baseline interview notes, current process metrics |
| 0: Scraping | Scraping methodology doc: queries used, filters applied, how many results, data quality |
| 1: Digital Twin | System prompt rationale: why each section, what knowledge was included, calibration notes |
| 2: Pipeline | Mid-experiment blog draft, weekly metrics snapshots |
| 3: Email | Email template analysis: what worked, what got overridden, response rates |
| 4: Measurement | Full case study (3 versions: Anthropic, UNISG, public blog) |

---

## Prospect Scraping Pipeline

### Existing Reference: `~/Projects/TOSI/WEB/APP-TOOL/Scraping-cheese-shop`

Node.js pipeline used for fromageries in France/Germany:
- **Source:** OpenStreetMap → Google Places API (New) Text Search for enrichment
- **Stack:** Node.js, axios, csv-parser, csv-writer
- **API:** Google Places API (New) — `places:searchText` endpoint
- **Fields:** displayName, formattedAddress, rating, userRatingCount, businessStatus, websiteUri, internationalPhoneNumber
- **Rate limit:** 100ms delay between requests (~10/sec)

### New: `~/Projects/TOSI/WEB/tosi-scraping`

Same stack, adapted for Milano zona Turati. Key differences:
- **No OSM step needed** — start directly with Google Places Text Search
- **Queries:** Multiple searches to cover the area: `"panineria Milano Turati"`, `"panini gourmet Brera Milano"`, `"bar panini Porta Nuova Milano"`, `"pizzeria gourmet Porta Venezia Milano"`, etc.
- **Location bias:** Use `locationBias` parameter to restrict results to zona Turati radius (~1.5km around Piazza Turati)
- **Extra fields:** Add `places.googleMapsUri`, `places.priceLevel`, `places.primaryType`
- **Dedup:** Same locale may appear in multiple queries — deduplicate by `places.id`
- **Output:** JSON → CSV → import into Supabase via CRM import function
- **Target:** ~47 validated prospects with menu online (key requirement from Andrea Tosi feedback)

### Scraping → CRM Import Flow

```
Google Places API    →  JSON (raw results)
  ↓ filter + dedup
Clean JSON           →  CSV (formatted for CRM import)
  ↓ import via CRM UI or Supabase direct insert
Supabase companies   →  Visible in CRM, ready for AI enrichment (Phase 1)
```

---

## Project Assets (`Projects/Tosi/`)

### Docs

| File                                          | What it contains                                                         |
| --------------------------------------------- | ------------------------------------------------------------------------ |
| `CLAUDE v4 latest.pdf`                        | Latest Claude-generated strategic analysis for Tosi                      |
| `dolce 1kg + disco piccante.pdf`              | Product specs — the 1kg cremoso (dolce) and piccante disc                |
| `DOP Artigianale Analisi Tosi.docx`           | DOP artisanal production analysis                                        |
| `Gorgonzola Paninerie Gourmet Strategia.d...` | Gourmet paninerie market strategy — **key input for prospect targeting** |
| `Gorgonzola_Tech_Artistry.pdf`                | Technical artistry of gorgonzola production                              |
| `Spirale dAutunno Tosi.pdf`                   | Spirale d'Autunno product/recipe documentation                           |
| `TOSI_Artisan_Rescue_The_Strategic_Para...`   | Strategic analysis — artisan rescue framework                            |
| `Tosi_Bar_Analisi_Strategica_IT.py`           | Python script — strategic bar/paninerie analysis (Italian)               |
| `Tosi_Bar_Strategy_Analysis.py`               | Python script — bar strategy analysis                                    |
| `TOSI_LISTA_CLIENTI_BOT.xlsx`                 | **Client list for the AI sales bot — the 47 targets**                    |
| `TOSI_SCHEDA TECNICA STANDARD (2).xlsx`       | Standard technical product sheet                                         |
| `Tosi-bot-commerciale.pdf`                    | Commercial bot specification document                                    |

### Media

| Folder               | Contents                                                                                               |
| -------------------- | ------------------------------------------------------------------------------------------------------ |
| `Media/Brand/`       | `logo-banner-tosi-crm.png`, `logo-tosi-gorgonzola-black.png` — Tosi brand assets for CRM and materials |
| `Media/Production/`  | Editorial production photography — real caseificio shots                                               |
| `Media/Provocation/` | `tosi mc.png`, `TOSI_VEO3_SPOT.mp4` — provocative/editorial content                                    |

### Key Files for Building the Sales System

When building the Claude coordinator prompt and CRM:

1. **Start with** `TOSI_LISTA_CLIENTI_BOT.xlsx` — this is the 47-target prospect list
2. **Product knowledge from** `dolce 1kg + disco piccante.pdf` + `TOSI_SCHEDA TECNICA STANDARD (2).xlsx`
3. **Market strategy from** `Gorgonzola Paninerie Gourmet Strategia` + `Tosi_Bar_Strategy_Analysis.py`
4. **Bot spec from** `Tosi-bot-commerciale.pdf` — earlier commercial bot design
5. **Brand assets from** `Media/Brand/` — for any materials the Andreases need

---

## The Experiment

### The Question

Can an AI intelligence layer + 3 human salespeople outsell a traditional commercial approach for artisanal DOP gorgonzola?

### Why It Matters

This is "Vending-Bench for artisanal food." Andon Labs proved AI can run a vending machine. We're proving AI can sell the most complex product in the world — one where taste, terroir, tradition, and trust matter more than price. If this works, it works for every artisanal producer in Italy.

### The Setup

- **Product:** 1kg cremoso gorgonzola DOP without rind
- **Target:** Paninerie, pizzerie, gourmet bars in Milan
- **Human team:** 3 people (Andrea, Andrea C., Andrea F.) — existing Tosi commercial team
- **AI layer:** Claude as intelligence coordinator
- **Targets:** 47 gourmet sandwich shops (from CRM import)
- **Benchmark period:** Minimum 4 weeks for meaningful data

---

## Architecture

### Multi-Agent System

```
┌─────────────────────────────────────┐
│         CLAUDE COORDINATOR          │
│  (Strategy, prioritization, intel)  │
└──────────┬──────────┬───────────────┘
           │          │          │
     ┌─────▼──┐ ┌────▼───┐ ┌───▼─────┐
     │Andrea 1│ │Andrea 2│ │Andrea 3 │
     │(Zone A)│ │(Zone B)│ │(Zone C) │
     └────────┘ └────────┘ └─────────┘
           │          │          │
           ▼          ▼          ▼
    ┌─────────────────────────────────┐
    │     TARGET: 47 PANINERIE        │
    │     Milan metro area            │
    └─────────────────────────────────┘
```

### Claude's Role (NOT replacing humans)

1. **Prospect Intelligence:** Research each target — menu style, price range, social presence, review themes, likely gorgonzola usage, best approach angle. Output: briefing card per prospect.

2. **Prioritization:** Rank 47 targets by conversion likelihood — menu alignment, price positioning, delivery logistics, provenance storytelling signals.

3. **Script Generation:** Personalized approach scripts per Andrea per prospect. Contextual conversation starters based on specific menu, philosophy, and cremoso use case.

4. **Follow-up Management:** Track interactions, suggest timing, draft follow-up messages, flag when to escalate or pivot.

5. **Learning Loop:** After each interaction, analyze what worked, update scoring, refine scripts for similar prospects.

### Human Role (ALWAYS in the loop)

The 3 Andreas remain the face, the voice, the trust:

- Make all calls and visits personally
- Decide whether to follow or override AI suggestions
- Report back via structured feedback form
- Bring samples, do tastings, build relationships
- Close deals with handshakes, not algorithms

### The "Andon" Angle

Frame explicitly as a benchmark:

- Define clear metrics BEFORE starting
- Document everything (especially failures)
- Compare AI-assisted vs. baseline (previous quarter without AI)
- Publish results openly

---

## Metrics

### Primary

| Metric              | Definition                       | Baseline      | Target           |
| ------------------- | -------------------------------- | ------------- | ---------------- |
| Contacts made       | # prospects contacted per week   | Measure first | +50% vs baseline |
| Response rate       | % prospects who engage           | Measure first | Track            |
| Meetings/tastings   | # in-person demos per week       | Measure first | Track            |
| Conversions         | # new clients acquired           | Measure first | Track            |
| Revenue per client  | Average first order value        | Measure first | Track            |
| Time to first order | Days from first contact to order | Measure first | Reduce           |

### Secondary

| Metric                | Definition                          | Why              |
| --------------------- | ----------------------------------- | ---------------- |
| Time saved per Andrea | Hours/week freed                    | Efficiency story |
| Script override rate  | % human ignores AI suggestion       | AI calibration   |
| Prospect accuracy     | % AI-prioritized leads that convert | AI value proof   |
| Follow-up compliance  | % suggested follow-ups executed     | System adoption  |
| Knowledge capture     | # market insights recorded          | Long-term value  |

### Qualitative (Equally Important)

- What surprised the Andreases about AI suggestions?
- Where did Claude get it wrong?
- How did prospects react when AI involvement was mentioned?
- What did the team learn about the paninerie market?
- How did human intuition vs. AI analysis evolve over time?

---

## Technical Implementation

### Prompt Architecture

Design a system prompt for the sales coordinator that includes:

- Complete product knowledge (cremoso 1kg, DOP certification, taste profile, storage, pricing)
- Tosi brand story (artisanal, family, best gorgonzola in the world)
- Milan paninerie market context (trends, price sensitivity, artisanal positioning)
- Competitor intelligence (industrial gorgonzola alternatives, pricing, distribution)
- Conversation guidelines (warm, consultative, never pushy)

### Prospect Briefing Card Template

```
PROSPECT: [Name]
ADDRESS: [Location, zone]
MENU TYPE: [Gourmet panini / Pizza / Mixed]
PRICE RANGE: [€ per item]
CURRENT CHEESE: [If identifiable from menu/reviews]
SOCIAL PRESENCE: [Instagram followers, review score, activity level]
APPROACH ANGLE: [Specific recommendation]
PRIORITY SCORE: [1-10 with reasoning]
ASSIGNED TO: [Andrea 1/2/3]
STATUS: [New / Contacted / Meeting / Tasting / Negotiating / Won / Lost]
```

### Interaction Log Template

```
DATE: [Date]
PROSPECT: [Name]
ANDREA: [Which Andrea]
CHANNEL: [Call / Visit / WhatsApp / Email]
AI SUGGESTION FOLLOWED: [Yes / No / Modified]
OUTCOME: [Description]
NEXT STEP: [AI recommended + Human decided]
LEARNING: [What did we learn?]
```

---

## Documentation Strategy

### Everything Is Content

Every week of the experiment produces:

1. Internal data — metrics, pipeline status
2. Blog material — one insight or learning (short-form)
3. Case study material — aggregated results, quotes, screenshots
4. Anthropic pitch material — Claude-specific learnings
5. Presentation material — charts, before/after, key numbers

### Weekly Ritual (Every Friday)

1. Update metrics dashboard
2. Write 3 bullets: "What worked / What failed / What surprised us"
3. Screenshot one interesting Claude output
4. Record one Andrea quote about the experience
5. Draft 2-3 raw sentences for the blog

---

## Phases

### Phase 0: Baseline (1 week)

- Document current sales process WITHOUT AI
- Measure: contacts/week, conversion rate, time per prospect
- This is the "before" that makes the "after" meaningful

### Phase 1: Intelligence Layer (2 weeks)

- Claude enriches all 47 prospects with briefing cards
- Prioritization and zone assignment
- Personalized scripts generated
- Andreases start using AI materials
- Track: adoption, override rate, initial results

### Phase 2: Full Coordination (4 weeks)

- Claude manages full pipeline: prioritization → briefing → follow-up → learning
- Weekly metrics review and system refinement
- Andreases provide structured feedback after each interaction
- Track: all primary and secondary metrics
- **FREEZE the system** — no feature changes during measurement

### Phase 3: Analysis & Publication (2 weeks)

- Compile results, write case study
- Create project page for FTB website (see `ftb-brand-identity-website` skill for page structure)
- Draft Anthropic pitch version
- Draft blog post(s) (see `ftb-content-engine` skill for format)
- Create UNISG presentation version

---

## Risk Management

| Risk                                         | Mitigation                                                                       |
| -------------------------------------------- | -------------------------------------------------------------------------------- |
| Andreases reject AI suggestions              | Start with low-friction tools (briefing cards). Let value prove itself.          |
| Inaccurate prospect intelligence             | Always human-verify before contact. Build feedback loop.                         |
| Low conversion (market issue, not AI)        | Document honestly. Separate "AI worked but market didn't" from "AI didn't work." |
| Andrea (owner) gets cold feet on publicity   | Start anonymized. Add name/brand only with explicit written permission.          |
| Scope creep mid-experiment                   | Freeze after Phase 1. No changes during Phase 2. Iterate AFTER data.             |
| Time constraints (founder has full-time job) | System requires <5 hours/week from founder once set up.                          |

---

## Narrative Frame

When writing about this experiment:

**NOT:** "We built a sales automation tool for a cheese company."
**YES:** "We asked whether AI could level the playing field for an artisanal producer competing against industrial giants."

The protagonist is the artisan (Tosi/Andrea), not the technology. The opening line:

> "Andrea makes the best gorgonzola in the world. His problem was never the product. His problem was that three people can't outreach thirty."
