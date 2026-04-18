# FTB — Architecture Overview

**Ultimo aggiornamento: 2026-04-17**

Reference per capire come i pezzi si tengono insieme. Per lo state corrente / convenzioni di codice vai su `CLAUDE.md`. Per la roadmap vai su skill `ftb-roadmap-2026-2027`.

---

## Il progetto in una frase

FTB è un lab che costruisce AI tools per produttori artigianali italiani. Il primo esperimento — **Tosi AI Sales Agent** — ha come agent **Claudia**, che scrive cold email per il Caseificio Tosi di Gattico-Veruno. Tosi valida il modello che poi diventa prodotto replicabile (vedi `ftb-roadmap-2026-2027`).

---

## I 4 repo

```
~/Projects/
  FTB/
    food-tech-bootcamp/                       ← hub docs + skills + strategia (QUESTO REPO)
    menu-extraction-agents-sdk_top/           ← Python agents (Claude Agent SDK)
  TOSI/
    WEB/
      tosi-scraping/                          ← Google Places scraping pipeline
      tosi-mini-crm/                          ← React + Vercel, Supabase, review queue
```

### `food-tech-bootcamp` (questo repo, hub)
- `Projects/Tosi/Docs/` — documenti autoritativi (Voice Twin v0.2, email esempio, baseline interview)
- `Projects/Tosi/Media/` — asset brand Tosi
- `.claude/skills/` — skill Claude Code user-facing per invocare la pipeline
- `STATUS.md` — flywheel tracker session log
- `CLAUDE.md` — convenzioni di codice + current state
- Memorie persistenti (via auto memory) in `~/.claude/projects/-Users-andre-Projects-FTB-food-tech-bootcamp/memory/`

### `menu-extraction-agents-sdk_top`
- `agents/menu_extraction/` — estrae menu strutturati da siti ristoranti (Playwright MCP)
- `agents/website_profiling/` — estrae filosofia/stile/fornitori (HTTP fetch + Claude)
- `agents/briefing_cards/` — sintetizza CRM + menu + profile → briefing
- `agents/email_generation/` — Claudia scrive cold email
- `batch/` — orchestratori per batch operations, ciascuno con `--project <name>` flag
- `prompts/` — prompt per-progetto (tosi_voice_twin_v02.md, tosi_briefing.md, etc.)
- `shared/tracker.py` — UsageTracker per routing subscription/API
- `.claude/skills/` — skill Agent SDK (browser-automation, menu-parsing) usate DENTRO gli script Python, non da utente

### `tosi-scraping`
- `scripts/searchPlaces.js` — Google Places Text Search (zona configurabile)
- `scripts/enrich*.js` — enrichment email, reviews, registro aziende, menu
- `scripts/bridgeMenuExtraction.js` — handoff tra scraping repo e menu-extraction repo + push Supabase
- `output/enriched_results.json` — output finale, consumato dall'import CRM

### `tosi-mini-crm`
- `frontend/` — Vite + React 18 + TypeScript, dashboard prospect, route `/review`
- `frontend/api/` — Vercel serverless functions (`send-email.ts`, `generate-draft.ts`)
- `scripts/` — SQL migrations + `importGooglePlaces.js` (prospect upsert)
- Deploy: Vercel (free tier), branch `feat/ai-sales-agent`

---

## Data flow — pipeline end-to-end

```
┌──────────────────┐        ┌──────────────────┐        ┌──────────────────┐
│ 1. PROSPECT      │        │ 2. IMPORT        │        │ 3. MENU          │
│    SCRAPING      │───────▶│    → Supabase    │───────▶│    EXTRACTION    │
│ (tosi-scraping)  │        │ (tosi-mini-crm)  │        │ (menu-extraction)│
│                  │        │                  │        │                  │
│ Google Places    │ JSON   │ upsert by        │        │ Playwright + SDK │
│ → enriched.json  │        │ google_place_id  │        │ → menu_structured│
└──────────────────┘        └──────────────────┘        └──────────────────┘
                                                                  │
                                                                  ▼
┌──────────────────┐        ┌──────────────────┐        ┌──────────────────┐
│ 6. COLD EMAIL    │        │ 5. BRIEFING CARD │        │ 4. WEBSITE       │
│    GENERATION    │◀───────│    GENERATION    │◀───────│    PROFILING     │
│ (menu-extraction)│        │ (menu-extraction)│        │ (menu-extraction)│
│                  │        │                  │        │                  │
│ Voice Twin v0.2  │        │ CRM + menu +     │        │ HTTP fetch       │
│ → email_drafts   │        │ profile → card   │        │ → website_profile│
│   (pending_review│        │   → briefing_    │        │                  │
└────────┬─────────┘        │     cards table  │        └──────────────────┘
         │                   └──────────────────┘
         │
         ▼
┌──────────────────┐        ┌──────────────────┐        ┌──────────────────┐
│ 7. REVIEW        │        │ 8. SEND (Resend) │        │ 9. POST-SEND     │
│ (CRM /review)    │───────▶│ (Vercel serverless)───────▶│ (CRM companies)  │
│                  │ approve│                  │  sent  │                  │
│ Andrea C/M:      │        │ hello@tosi-      │        │ contact_status=  │
│ approve / reject │        │ gorgonzola.com   │        │ Contattato       │
│ / send           │        │ → prospect inbox │        │ assigned_to=     │
│                  │        │                  │        │ Claudia          │
└──────────────────┘        └──────────────────┘        └──────────────────┘
```

Ogni step è una **skill invocabile da conversazione** (vedi mappa sotto).

---

## Supabase schema — tabelle chiave

```
companies
├─ id, azienda, citta, provincia, formatted_address
├─ google_place_id (unique), rating, user_rating_count, google_reviews
├─ phone, email, link, social fields
├─ primary_type, contact_status, assigned_to, updated_by, updated_at
├─ menu_structured (JSONB)         ← da menu extraction
├─ menu_v2_status, menu_v2_dishes_count
├─ website_profile (JSONB)         ← da website profiling
├─ priority_score, is_out_of_scope
└─ data_source ('google_places' | 'registry')

briefing_cards
├─ id, company_id (FK), version (unique per company)
├─ content (JSONB) — tipo, fascia_prezzo, angolo_approccio, gesto_suggerito, ...
├─ prompt_version, generated_at, generated_by
├─ approved, approved_by, approved_at, feedback
└─ supports v1→v2 regeneration with feedback as context

email_drafts
├─ id, company_id (FK), briefing_card_id (FK nullable)
├─ subject, body, prompt_version, generated_at
├─ status: draft | pending_review | approved | rejected | sent
├─ approved_by (reviewer), approved_at
├─ sent_by (sender — may differ from approver), sent_at
└─ feedback (reviewer rejection note, becomes regen context)

groups + company_groups
└─ many-to-many tag system — "Zona Turati", "Zona Navigli", etc.

interactions (Fase 2+, not yet used)
└─ call/visit/email log per company — for override rate metric later
```

---

## Le 6 skill Claude Code → 6 step della pipeline

```
Pipeline step              Skill                              Repo che invoca
───────────────────────────────────────────────────────────────────────────
1. Google Places scraping  ftb-claudia-prospect-scraping      tosi-scraping
2. Import in CRM           ftb-claudia-prospect-import        tosi-mini-crm
3. Menu extraction         ftb-claudia-menu-extraction        menu-extraction
4. Website profiling       ftb-claudia-website-profiling      menu-extraction
5. Briefing cards          ftb-claudia-briefing-cards         menu-extraction
6. Email generation        ftb-claudia-email-generator        menu-extraction
```

Tutte le skill **vivono in FTB** (questo repo, `.claude/skills/ftb-claudia-*`). Invocano script nei repo esterni ma il punto di conversazione è FTB.

Principio: quando arriva un **2° cliente** in Fase 3, duplica le 6 skill come `ftb-<nuovo-agent>-*` e adatta trigger/descrizioni. Gli script Python sono già generici via `--project <name>` flag. Onboarding di un nuovo cliente ≈ 1 ora per skill adaptation, 2-3 ore per prompt tuning.

### Due tipi di skill — non confonderli

| Tipo | Cosa fa | Dove vive | Chi la legge |
|---|---|---|---|
| **Claude Code skill** | Orchestra comandi via conversazione | `.claude/skills/` del repo DOVE apri Claude Code | Io, via chat |
| **Agent SDK skill** | Istruzioni per agent Python che usa SDK | `.claude/skills/` del repo DOVE gira lo script | Script Python via `setting_sources=["project"]` |

Esempio: `browser-automation` e `menu-parsing` in menu-extraction repo sono Agent SDK skill (usate da `smart_agent.py`). Le `ftb-claudia-*` in FTB repo sono Claude Code skill (usate da me in chat).

---

## Credenziali + env vars per repo

| Repo | File | Variabili richieste |
|---|---|---|
| `tosi-scraping` | `.env` | `GOOGLE_PLACES_API_KEY` |
| `tosi-mini-crm` root | `.env` | `VITE_SUPABASE_URL`, `SUPABASE_SERVICE_KEY` |
| `tosi-mini-crm` (Vercel env vars) | Vercel dashboard | `RESEND_API_KEY`, `ANTHROPIC_API_KEY` (per UI button), `SUPABASE_SERVICE_KEY` |
| `menu-extraction-agents-sdk_top` | `.env` | `SUPABASE_URL`, `SUPABASE_SERVICE_KEY`, opz. `ANTHROPIC_API_KEY` (fallback quando subscription quota esaurita) |

Subscription Claude Code è autenticata via login CLI, non via variabile.

---

## Cost model

| Path | Chi paga | Cost per prospect | Use case |
|---|---|---|---|
| Script Python con Claude Agent SDK (subscription) | Piano Claude Max | €0 | Batch operazioni, CLI, preferito |
| Vercel serverless function con Anthropic SDK (API key) | Pay-as-you-go | ~$0.01 | UI button, one-off da browser |
| Google Places API | Pay-as-you-go | ~$0.005 | Scraping zone (tipicamente una volta per zona) |
| Resend outbound email | Free tier fino a 100/giorno | €0 | Invio cold email |

Budget tipico per Fase 1 pilot (10 prospect): Google Places ~$1, Claude via subscription €0, Resend free. **Totale reale: ~$1.**

---

## Dove committo cosa

| Cambia... | Commit in... |
|---|---|
| Voice Twin prompt, email esempio, decisioni strategiche, memorie | `food-tech-bootcamp` (questo) |
| Componenti UI CRM, SQL migration, serverless functions | `tosi-mini-crm` |
| Nuovo agent Python, batch runner, prompt files per-progetto | `menu-extraction-agents-sdk_top` |
| Google Places queries, enrichment logic | `tosi-scraping` |

Quando il cambio tocca piu di un repo (raro ma succede), committa ciascuno con lo stesso messaggio tematico per audit trail.

---

## Glossario rapido

- **Voice Twin** — il system prompt di Claudia, versionato (`voice-twin-v0.2`). Deriva dalla baseline interview con il Maestro Andrea Tosi.
- **Modello a 4 fasi** — strategia commerciale validata da Andrea M (2026-04-17): Visita → 2 vaschette → Contratto → Ambassador. Claudia opera solo in Fase 1.
- **Claudia** — agent AI (Voice Twin) che scrive cold email. Mittente: `hello@tosigorgonzola.com`.
- **Andrea C** — Andrea Casero, Head of R&D Caseificio Tosi. Umano, va in degustazione.
- **Andrea M** — Andrea Tosi, il Maestro. Casaro, CEO del caseificio.
- **Briefing card** — scheda sintetica che Claudia legge prima di scrivere un'email. Una per prospect, versionata.
- **Review queue** — route `/review` nel CRM dove Andrea C e Andrea M approvano/rifiutano/inviano i draft di Claudia.
