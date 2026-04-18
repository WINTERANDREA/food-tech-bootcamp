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
- **Email accounts (Supabase auth multi-user):** Andrea C → `sviluppo@tosigorgonzola.com` · Andrea M → `commerciale@caseificiotosi.it`. Claudia manda via Resend da `hello@tosigorgonzola.com`, le risposte arrivano nella stessa casella (Aruba). Inbound automatico nel CRM rinviato a quando Resend supportera un secondo dominio (`claudia@tosigorgonzola.com`).
- **Mittente cold email outbound:** `hello@tosigorgonzola.com` con display **"Claudia per Caseificio Tosi"** via Resend API. Reply-to: `hello@tosigorgonzola.com` (stessa casella, thread pulita). Dominio verificato su Resend con SPF/DKIM/DMARC (Aruba DNS, 2026-04-16). Serverless function: `frontend/api/send-email.ts` su Vercel.
- **Team:** Andrea C. (builds + field sales), Andrea M. / Tosi (supervises, approves)
- **Target zone:** Zona Turati Milano (2km radius: Brera, Porta Nuova, Garibaldi, Isola, Porta Venezia)

### Phase Roadmap

Per la roadmap dettagliata (fasi 1–5, deliverable, cash flow, decisioni fiscali) vedi skill **`ftb-roadmap-2026-2027`**. Questo file traccia solo infrastructure, partnerships, e session log.

### Technical Architecture

**AI integration:** Supabase Edge Functions calling Claude API (Sonnet for routine, Opus for strategy). Voice Twin system prompt versioned in CRM repo.

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
| 2026-04-12 | Built 5-tier menu extraction pipeline (probe→crawl→PDF→Playwright→Vision→fallback) in tosi-scraping. Integrated menu-extraction-agents-sdk_top via bridge (Claude Agent SDK + Playwright MCP). Test: Borgo in Centrale 135 items with gorgonzola detected, Pizzeria Sapo 38+ items. Created unicorn discovery skill with 5-category references. Updated Phase 1 plan with 2-session interview structure. | 192 prospects ready for batch extraction, unicorn discovery framework operational |
| 2026-04-12 | Dedicated output/tosi/ folder in menu-extraction repo (--tosi flag) for clean separation from historical test data. Bridge collect with strict matching (hostname, slug, filters Instagram/Facebook). Supabase schema: menu_structured JSONB + menu_v2_status/dishes_count/cost columns. StructuredMenuSection in CRM CompanyDetails with collapsible categories and gorgonzola highlighting. 5 menus pushed to Supabase (Borgo 135, Sapo 62, Cesarino 65, San Giorgio 51, Cecino 40). All 4 repos committed and pushed (FTB, CRM, scraping, menu-extraction on WINTERANDREA). | 5 prospects with structured menu in CRM, bridge idempotent, 187 prospects remaining for next batch |
| 2026-04-12 | Baseline interview sessione 1 con Andrea Tosi (audio + trascrizioni per argomento A-L in `Projects/Tosi/Docs/TOSI INTERVISTA - sessione 1/`). 10 blocchi: prodotto, mercato, operations, degustazione, cliente ideale, guardrail, stile, processo/successo, stagionalità, logistica. | Materiale grezzo per sintesi |
| 2026-04-13 | Analisi a fondo del materiale intervista + integrazione `NOTE TOSI.xlsx` (caratteristiche tecniche firmate + vecchia lista claim) e `scheda tecnica cucchiaio 1kg.png`. Prodotta sintesi master `02-TOSI-Baseline-Interview-Synthesis.md` in 12 sezioni autoconsistenti (voice, prodotto, mercato, pricing, modello Ambassador, cliente ideale, degustazione, guardrail Claudio, stagionalità, successo, canale contatto, open questions). Decisioni consolidate: pizzerie gourmet in Fase 1 (nessun nuovo attributo CRM, si usa `tipo locale` esistente); claim numerici `600L / 1.5% sale / 0% scarto / TMC 30gg` autorizzati pubblicamente; no citazione clienti esistenti in cold email (mai Berberè); killer frase "non scaldato" declassata a vantaggio operativo secondario (concetto "crudo" confonde); claim firma "Latte, Uomo, Legno, Tempo" come chiusura briefing card/email. Allineati `CLAUDE.md`, `STATUS.md`, skill `ftb-tosi-experiment`. | `02-TOSI-Baseline-Interview-Synthesis.md` (12 sezioni), Voice Twin sbloccato, 10 open questions scaletta sessione 2 |
| 2026-04-13 | Definiti canali comunicazione Andrea M ↔ Claudio ↔ Andrea C: (A) call dedicata one-shot per validazione stile; (B) coda review `/review` nel tosi-mini-crm stile Andon Labs (approva&invia / rifiuta+feedback), due account Supabase, notifica email. Mappati 3 account: Andrea C `sviluppo@tosigorgonzola.com`, Andrea M `commerciale@caseificiotosi.it`, Claudio `claudio@tosigorgonzola.com`. Doppio dominio intenzionale. Mittente cold outbound = `claudio@tosigorgonzola.com` "Claudio per Tosi" — **identità AI dichiarata, non nascosta** (opzione C, principio credibilità #6 aggiunto a §1 sintesi). `/review` route tirata avanti da Phase 3 a Phase 1 perché bloccante per il pilot. | Architettura canali documentata, account mappati, disclosure AI come regola stilistica hard del Voice Twin |
| 2026-04-13 | Draft v0.1 Voice Twin system prompt prodotto → `Projects/Tosi/Docs/03-TOSI-Voice-Twin-System-Prompt.md`. Include: identità Claudio + disclosure AI, tono/registro, claim numerici autorizzati, repertorio 9 gesti del processo, firma "Latte Uomo Legno Tempo", reframing obiezione prezzo verbatim dal Maestro, guardrail e workflow coda review, domande difficili con risposte canoniche (prezzo/DOP comparativo/artigianalità/pagare di più), 3 esempi illustrativi (paninoteca, pizzeria, focacceria). Tracciabilità esplicita alle sezioni della sintesi per ogni blocco. 7 open points registrati per call di validazione con Andrea M (wording firma, posizione disclosure, lunghezza email, uso claim firma, reframing verbatim, auto-reply handling, repertorio gesti). **Non deployato — richiede validazione Andrea M prima di v1.0.** | `03-TOSI-Voice-Twin-System-Prompt.md` v0.1 draft, pronto per call di stile A |
| 2026-04-15 | Analizzate risposte di Andrea M alla call di validazione stile (file `04c-TOSI-Risposte-Call-Validazione-Stile-COMPACT.pdf`, red-text answers). Tutte e 3 le email campione segnate "giuste", struttura confermata. Nodi aperti sintetizzati: naming Claudio non convince ("capisco derivi da Claude, ci rifletto"), firma indecisa, disclosure AI richiede "contesto più articolato", follow-up da definire, gesto singolo di default da scegliere, aggiunto "tutto fatto a mano" al repertorio. Discussione strategica con Andrea C: valutata la tensione profit-first vs trasparenza AI; conclusione che la disclosure rimane ma si sposta da riga 1 alla firma + middle stratificato (pattern P2 "articolato ma presente"). Leve di conversione vere identificate: social proof, offerta asimmetrica 1 kg, frizione zero logistica. Andrea C decide autonomamente di **rimuovere social proof dallo scope Fase 1** (no citazione clienti). Proposta `Claudia` come alternativa a `Claudio` (stessa etimologia Claude, suono più pulito). Proposta **offerta 1 kg gratis *"lo paghiamo noi se non è più buono"*** derivata letteralmente dal reframing del Maestro. Contatti umani reali di Andrea Casero integrati nella firma S2. Prodotti: `04d-TOSI-Call-Decisioni-Fase1-Agenda.md` (full), `04d-TOSI-Call-Decisioni-Fase1-COMPACT.md` + `.pdf` (3 pagine, generate via Chrome headless + mini-parser Markdown in `/tmp/md_to_pdf.py` — no librerie installate), `04d-TOSI-Email-Aggancio-Andrea-M.md` (testo mail sintetica per anticipare la call). Memorie aggiornate: `project_tosi_real_context.md` con identità completa di Andrea Casero, nuovo file `project_tosi_phase1_rules.md` con regola vincolante no-client-mentions, nuovo file `reference_pdf_generation.md` con tutto il metodo PDF per sessioni future. CLAUDE.md "Current State" riscritto con le decisioni 04d + sezione "Generating PDFs from Markdown". | Agenda 04d pronta con PDF 3 pagine, mail aggancio sintetica pronta, Voice Twin pronto per v0.2 appena Andrea M conferma in 10 min call |
| 2026-04-16 | **Sessione maratona.** (1) CRM `/review` route costruita: ReviewQueue.tsx con tabs (In attesa/Approvate/Rifiutate/Inviate), DraftReviewCard espandibile con preview email + contesto prospect, DraftFeedbackModal per feedback di rifiuto, bottone "Invia" separato per draft gia approvati, sidebar badge con conteggio pendenti (polling 30s). 15 file, +846 righe. (2) **Resend integration completa**: `frontend/api/send-email.ts` Vercel serverless function, mittente `Claudia per Caseificio Tosi <hello@tosigorgonzola.com>`, reply-to stessa casella. Account Resend free creato, dominio `tosigorgonzola.com` verificato con DNS records SPF/DKIM/DMARC su Aruba. API key in Vercel env vars. Inbound automatico non attivo (Resend free = 1 dominio) — piano futuro: `claudia@tosigorgonzola.com` come secondo dominio. (3) **Repo menu-extraction ristrutturato**: `agents/menu_extraction/`, `agents/website_profiling/` (HTTP fetch + Claude, no Playwright), `agents/briefing_cards/` (CRM+menu+profilo→card), `shared/tracker.py` (UsageTracker estratto), `batch/` (3 batch runner con `--project` flag), `prompts/` (Tosi-specifici). Backward compat wrappers in `src/`. `requirements.txt` aggiornato con `requests`. (4) Memorie aggiornate e CLAUDE.md riscritto. Tutti i repo committati e pushati: FTB `d26f0a4`, CRM `feat/ai-sales-agent` fino a `1e759bc`, menu-extraction `19d2e69`. | Route /review + Resend live, repo menu-extraction ristrutturato con 3 agent, ready per profiling + briefing cards batch domani |
| 2026-04-17 | **Svolta strategica + toast feedback + Voice Twin v0.2.** (1) Aggiunti **toast notification** al `/review` nel CRM: Zustand store + ToastContainer + hook nelle mutations (approve/reject/send). Zero librerie esterne, 5 file nuovi/modificati. (2) Ricevute risposte Andrea M all'agenda 04d (`04d-TOSI-Call-Decisioni-Fase1-COMPACT-risposte.pdf`). Checkbox: Claudia ✓, disclosure stratificata ✓, "tutto fatto a mano" ok, **offerta 1 kg rigettata come "quasi presuntuosa"**. Il valore vero sono le note in fondo al doc: Andrea M ha proposto un **modello a 4 fasi di progressione commerciale** (Fase 1 visita + 1 vaschetta → Fase 2 Andrea torna con 2 vaschette, 1 paghi 1 no → Fase 3 contrattualizzazione → Fase 4 Ambassador). Ribalta la proposta Andrea C dell'offerta asimmetrica in email: *"invogliare all'assaggio, incentivare il feedback"*. **Claudia opera solo in Fase 1** — in email zero prezzo, zero offerta, solo invito alla visita. Tre decisioni residue chiuse (firma Claudia + contatti Andrea Casero `sviluppo@`, follow-up 7gg, gesto default `caldaia 600l → 6 forme`). (3) Prodotti: memoria nuova `project_tosi_four_phase_model.md` (backbone strategico), `project_tosi_phase1_rules.md` riscritta (hard rules Fase 1), **Voice Twin v0.2** completo in `03-TOSI-Voice-Twin-System-Prompt.md` (modello a 4 fasi centrale, disclosure stratificata, firma S2, domain fix, gesto default, follow-up 7gg), **tre email esempio rigenerate** in `05-TOSI-Email-Esempio-v0.2.md` + `-COMPACT.md/pdf` per OK finale Andrea M. CLAUDE.md riscritto con il modello a 4 fasi al centro. Script PDF (`/tmp/md_to_pdf.py`) ricreato dalla memoria dopo cleanup di /tmp. | Voice Twin v0.2 pronto + validato, modello strategico a 4 fasi consolidato, 3 email esempio pronte per OK Andrea M → dopo OK, pilota su 10 prospect |
