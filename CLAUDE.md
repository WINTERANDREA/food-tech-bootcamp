# CLAUDE.md — Food Tech Bootcamp

## What This Is

FTB is a lab building AI tools for Italy's 300,000 artisanal food producers. Mission: making food knowledge computable. Founded by a UNISG Pollenzo gastronome who codes. Based in Milan area. One-person lab with a full-time job at Cortilia.

Not an agency. Not a consultancy. A lab. The work changes — the mission doesn't.

> **Per capire come i 4 repo si tengono insieme, il data flow della pipeline, e lo schema Supabase**: leggi [`ARCHITECTURE.md`](./ARCHITECTURE.md). Questo file (CLAUDE.md) tratta stato corrente + convenzioni. L'architettura è separata perché cambia poco.

## Current State (2026-04-17)

- **Primary project:** Tosi AI Sales Agent — Phase 0 complete. Phase 1 in progress. Baseline interview sintetizzata → Voice Twin v0.1 → call validazione stile (04b/04c) → agenda decisioni Fase 1 (04d) → **risposte Andrea M (04d-risposte, 2026-04-17)** → **Voice Twin v0.2 scritto e pronto** + tre email esempio rigenerate (doc `05-*`) in attesa di OK finale di Andrea M. CRM: route `/review` con toast notification e Resend live da `hello@tosigorgonzola.com`.
- **Agent identity:** **Claudia** (confermato Andrea M 2026-04-17). Etimologia Claude, suono piu pulito in italiano. Resta agent AI dichiarato, non finge di essere umana. La traccia di Anthropic nello stack rimane visibile.
- **STRATEGIA CENTRALE: modello a 4 fasi** (proposta Andrea M, 2026-04-17 — sostituisce l'offerta asimmetrica 1kg). Scala di impegno progressivo: **Fase 1 → Sei interessato: Andrea C viene, lascia 1 vaschetta per provare, zero impegno** / Fase 2 → Hai provato, ti piace: Andrea torna con 2 vaschette, 1 paghi 1 no (mai menzionato in email) / Fase 3 → Vuoi diventare cliente: contrattualizzazione / Fase 4 → Ambassador: il locale ci nomina in menu/social, lo supportiamo. **Claudia opera SOLO in Fase 1.** Andrea M: *"se dobbiamo fare una prova non convenzionale, tanto vale farla bene. Forse ci costa il doppio, ma forse e meglio."* Memoria autoritativa: `project_tosi_four_phase_model.md`.
- **Decisioni consolidate v0.2 (Andrea M 2026-04-17):** (1) Naming: Claudia ✓. (2) **Offerta 1kg "paghiamo noi se non e piu buono" RIMOSSA** — Andrea M: *"sembra quasi presuntuoso"*. Sostituita dalla logica a fasi. (3) Disclosure AI stratificata ✓. (4) Firma S2 con contatti Andrea Casero ✓. (5) Follow-up: una sola mail a 7 giorni, poi stop ✓. (6) Gesto default: `caldaia 600l → 6 forme` ✓. (7) "Tutto fatto a mano" come cornice con gesto concreto ✓.
- **Decisione Andrea C consolidata:** Nessuna menzione di altri clienti nelle cold email di Fase 1. Regola hard, non si riapre. Vedi `project_tosi_phase1_rules.md`.
- **Baseline interview:** Sessione 1 svolta 2026-04-12. Sintesi master in `Projects/Tosi/Docs/02-TOSI-Baseline-Interview-Synthesis.md` (12 sezioni autoconsistenti, integra `NOTE TOSI.xlsx` + scheda tecnica cucchiaio 1kg). Questa è la fonte autoritativa per il Voice Twin e per tutti gli artefatti Fase 1.
- **Voice Twin artifacts chain:** `02-TOSI-Baseline-Interview-Synthesis.md` (fonte) → `03-TOSI-Voice-Twin-System-Prompt.md` **v0.2 (attivo, validato Andrea M)** → `04-TOSI-Call-Validazione-Stile-Claudio.md` + `04b-*-COMPACT.md/pdf` (call di stile) → `04c-*-Risposte.pdf` (risposte validazione) → `04d-TOSI-Call-Decisioni-Fase1-Agenda.md` + `-COMPACT.md/pdf` (agenda decisioni) → `04d-TOSI-Call-Decisioni-Fase1-COMPACT-risposte.pdf` (**risposte Andrea M 2026-04-17, include modello a 4 fasi**) → `05-TOSI-Email-Esempio-v0.2.md` + `-COMPACT.md/pdf` (tre email rigenerate per OK finale).
- **Contatti umani Andrea Casero (per firma Claudia e mail aggancio):** Head of Research and Development · Caseificio Tosi · Via Maggiate 6, Gattico-Veruno (NO), Italia · `+39 379 132 3187` · `sviluppo@tosigorgonzola.com`. Il dominio corretto è `tosigorgonzola.com` (il draft v0.1 del Voice Twin aveva erroneamente `caseificiotosi.it` → da correggere in v0.2).
- **Positioning consolidato:** Claim firma **"Latte, Uomo, Legno, Tempo"**. Asse narrativo in sviluppo "Le mani sono il nostro manifesto / maniaci". Parole bandite: `eccellenza`, `unico`, `premium`. Concetti `qualità/artigianalità/tradizione` sottintesi, mai nominati. Claim numerici autorizzati: `600L caldaia → 6 forme`, `1.5% sale`, `zero scarto`, `TMC 30gg`.
- **Modello Ambassador logistico** (decisione nuova critica): Tosi Gattico → Ambassador locale (zona Turati, stocca 20-30kg, fattura come rivenditore autorizzato) → rider refrigerato (Glovo/Deliveroo) → paninoteca/pizzeria. Velocità target ordine → consegna in ore ("1×2, non B2B"). Pagamento carta immediato. Replicabile Roma/Napoli — **questa è la dimensione replicabile da vendere ad Anthropic/EU**.
- **Fase 1 prospect pool:** paninerie/focaccerie/bistrot **+ pizzerie gourmet** (nessuna esclusione a priori per `tipo locale`). Campo esistente sufficiente — nessun nuovo attributo CRM.
- **CRM:** `~/Projects/TOSI/WEB/tosi-mini-crm` (branch: `feat/ai-sales-agent`). Deployed on Vercel (free tier). Features: Dashboard, Map, Priority Score, Top-50 view, BriefingCardSection, StructuredMenuSection with gorgonzola highlighting, **`/review` route** (Andon-style approve/reject+feedback queue per i draft di Claudia), **Resend integration** per invio email programmatico (`frontend/api/send-email.ts` Vercel serverless function). Review workflow: Approva / Approva e invia / Rifiuta con feedback + bottone "Invia" separato nella tab Approvate. Tracking `approved_by`. **Resend configurato**: account free, dominio `tosigorgonzola.com` verificato (DNS SPF/DKIM/DMARC su Aruba), env var `RESEND_API_KEY` in Vercel. Mittente: `Claudia per Caseificio Tosi <hello@tosigorgonzola.com>`. Reply-to: `hello@tosigorgonzola.com` (stessa casella, thread pulita per il prospect). **Inbound automatico non attivo** — Resend free plan supporta 1 solo dominio, non possiamo aggiungere `reply.tosigorgonzola.com`. Piano futuro: creare `claudia@tosigorgonzola.com` come secondo dominio Resend con receiving ON per chiudere il loop prospect→CRM.
- **Scraping:** `~/Projects/TOSI/WEB/tosi-scraping` (caseificiotosi-hub). 250 prospects with phone/email/reviews/registro aziende. Menu extraction bridge to Claude Agent SDK working.
- **Menu extraction + AI pipeline:** `~/Projects/FTB/menu-extraction-agents-sdk_top` (WINTERANDREA). **Ristrutturato 2026-04-16**: `agents/menu_extraction/` (spostato da src/), `agents/website_profiling/` (NUOVO — HTTP fetch + Claude analysis), `agents/briefing_cards/` (NUOVO — sintesi CRM+menu+profilo→card per Claudia), `shared/tracker.py` (UsageTracker estratto), `batch/` (batch runner per tutti e 3 con `--project` flag), `prompts/` (Tosi-specifici). Backward compat: `src/smart_agent.py` e `src/batch_smart.py` sono wrapper. Dedicated `output/tosi/` folder (--tosi o --project tosi). **15 menus in Supabase** dopo batch 2026-04-14 (Borgo 135, Sapò 62, Cesarino 65, San Giorgio 51, Cecino 40, Romanengo 58, Panino doc 73, 24 Burger 52, Vecchio Mulino 30, 'O Fiore Mio 55, Bonnie & Clyde 87, La Manierina 43, el gian 143, Debbie's 41, Savô 78). **156 prospects pending** dopo blacklist `primary_type` (bakery, cafe, pastry_shop, tea_house, liquor_store, food_store, grocery_store, supermarket, butcher_shop, cocktail_bar) — 21 non-target filtrati a monte.
- **Per-website cost tracking (2026-04-14):** `smart_agent.py` cattura tokens reali (input/output/cache_creation/cache_read) e `total_cost_usd` dal `ResultMessage` del Claude Agent SDK invece dell'estimate `len/4`. Log per ristorante in `monitoring/tracking/per_restaurant_usage.json`. `batch_smart.py` stampa breakdown a fine batch. Subscription mode → cost=$0 reale (incluso nel piano), ma il campo `total_cost_usd` riporta comunque il "would-have-been API cost" → ottimo proxy per pitch Anthropic.
- **Primo batch 10 prospect (2026-04-14):** 10/10 success dopo retry. **Total cost $10.86, 8.6M tokens, ~48 min**. Cache hit ratio ~92%. Range per sito: $0.35 (Panino doc) → $1.57 (Romanengo) — 4.5x. Stima estrapolata per 188 totali: ~$200, ~162M tokens, ~15h wall-clock.
- **Bridge fix (2026-04-14):** Tre fix in `bridgeMenuExtraction.js`: (1) dedup-by-hostname in `generate()` per skippare duplicati Google Places con `place_id` diversi ma stesso sito (es. Cesarino con/senza `?fbclid=`); (2) `slugify()` normalizza i diacritici (NFD → strip combining marks) e converte `&` in `and` per match consistente file↔prospect (fix Savô, Bonnie & Clyde); (3) `getMenuRestaurantName`/`getMenuWebsite` gestiscono anche lo schema alternativo SDK con `restaurant_name`/`url` top-level.
- **Bug fix SDK (2026-04-14):** `smart_agent.py` wrappa `print(message)` in try/except `BlockingIOError` — il Claude Agent SDK mette stdout in non-blocking mode, e i `ResultMessage` enormi con cache tokens facevano fallire il write con `[Errno 35]`, killando l'estrazione. Fix ha portato success rate da 30% a 100%.
- **Unicorn discovery:** Skill `ftb-unicorn-discovery` with 5-category references. Tosi identified as #1 (Mayfair bar + Gambero Rosso).
- **Four-project workflow:** All synced on GitHub. Bridge is idempotent — next `menu-generate` skipperà i 15 già in Supabase e targetterà i 178 rimanenti.
- **Website:** In development. New design system and build prompt complete. No live site yet.
- **Blog:** 1 post published ("From Vending Machines to Aging Rooms").
- **Partnerships:** Anthropic Ambassador application submitted. Tosi case study permission secured (2026-03-20).
- **EU funding:** 0 applications submitted. Landscape research complete.
- **Next milestone:** (1) **Inviare le 3 email esempio v0.2 ad Andrea M** (`05-TOSI-Email-Esempio-v0.2-COMPACT.pdf`) per OK finale sullo stile + modello a 4 fasi. (2) Al suo OK: deploy del Voice Twin v0.2 nel `tosi-mini-crm` (prompt file + cadenza follow-up 7gg + gesto default 600l). (3) **Website profiling batch** sui 15 prospect con menu gia in Supabase (`python -m batch.batch_profiling --tosi`). (4) **Briefing cards batch** per gli stessi 15 (`python -m batch.batch_cards --tosi`). (5) Selezione dei **10 prospect pilota** tra i 15 → prima cold email generata da Claudia in `/review`. (6) Batch menu extraction 156 prospect rimanenti (pipeline stabile 100%). (7) Sessione 2 intervista Andrea Tosi (10 open questions, incluso modello Ambassador operativo e dettagli logistici per Fase 3-4).

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
  FTB-Roadmap-2026-2027.skill.md       → Master phased roadmap: fasi, cash flow, decisione fiscale, cosa NON faccio
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
| **Tosi experiment (design / strategy)** | Tosi-Experiment (+ Manrique-CEO if writing about it) |
| **Scrape prospect per nuova zona (Milano, Roma, Paris, ...)** | Claudia-Prospect-Scraping |
| **Import prospect scrapati nel CRM Supabase** | Claudia-Prospect-Import |
| **Estrarre menu dai siti dei prospect** | Claudia-Menu-Extraction |
| **Profilare sito web prospect (filosofia, stile, fornitori)** | Claudia-Website-Profiling |
| **Generare briefing card per prospect** | Claudia-Briefing-Cards |
| **Generate / regenerate Claudia cold emails (CLI, subscription)** | Claudia-Email-Generator |
| **EU funding applications** | EU-Bandi-Navigator + Content-Engine |
| **Producer field research** | Artisan-Discovery |
| **Strategy / partnerships / pitches** | Strategy + Manrique-CEO |
| **Roadmap / phase priorities / fiscal / "do I accept this client?"** | Roadmap-2026-2027 (+ Strategy if partnership/funding angle) |
| **Emails / formal communication** | Manrique-CEO |
| **Cortilia work / general dev** | CLAUDE.md alone — no skills needed |

## Tosi pipeline — 6 skill invocabili da conversazione

Ogni step della pipeline Claudia ha la sua skill Claude Code. Sequenza naturale:

```
1. ftb-claudia-prospect-scraping   → Google Places su nuova zona → enriched_results.json
2. ftb-claudia-prospect-import      → JSON → companies table (Supabase CRM)
3. ftb-claudia-menu-extraction      → website → companies.menu_structured
4. ftb-claudia-website-profiling    → website → companies.website_profile
5. ftb-claudia-briefing-cards       → CRM + menu + profile → briefing_cards table
6. ftb-claudia-email-generator      → briefing → email_drafts (pending_review)
```

Tutte le skill operano da subscription Claude (€0 real cost) tranne il button UI in CRM che usa API key. Le skill `ftb-claudia-*` sono tutte **in FTB** (questo repo) anche se i comandi lanciano script nel CRM repo o nel menu-extraction repo — FTB è l'hub di conversazione.

## Generating PDFs from Markdown (without installing libraries)

Per convertire un `.md` in `.pdf` senza installare `pandoc`, `weasyprint` o `wkhtmltopdf` — usa lo script already-in-repo `/tmp/md_to_pdf.py` che fa **Markdown → HTML → Chrome headless → PDF**. Dipende solo da Python 3 (stdlib) e Google Chrome (già installato su macOS).

```bash
python3 /tmp/md_to_pdf.py input.md output.pdf
```

Lo script:
- Ha un mini-parser Markdown inline (headings, liste, blockquote, code fence, bold/italic, HR, paragraph)
- Include CSS inline stile materic-minimal (sans-serif Helvetica, accent `#b4896d` sui blockquote, header con underline grigio)
- Scrive `/tmp/_doc.html` come intermedio
- Invoca `/Applications/Google Chrome.app/Contents/MacOS/Google Chrome --headless --disable-gpu --no-pdf-header-footer --print-to-pdf=...`

Gotchas noti:
- Il parser spezza le liste numerate se ci sono righe vuote tra gli item (1. ... / blank / 2. ...) → risultano tre liste separate che ripartono da "1.". Fix: niente blank lines dentro la lista.
- Checkbox unicode `☐` renderizzano nativamente, non serve HTML
- Se lo script `/tmp/md_to_pdf.py` non c'è più (tmp wiped), lo ricreo al volo dalla memoria `reference_pdf_generation.md`.

Pattern usato per i doc 04b/04d. Per stile diverso (es. case study formale), duplicare lo script e modificare la costante `CSS`.

## Key Rules

1. **Tosi is the seed.** Everything else grows from it. Don't start new projects before Tosi produces results.
2. **One project, six outputs.** Every Tosi work session should produce material for at least 2 of: case study, blog post, UNISG presentation, EU application, Anthropic pitch, client template. Track in STATUS.md.
3. **Show, don't pitch.** Build demos, not decks. Ship experiments, not strategies. (César Manrique principle — full voice guide in Manrique-CEO skill.)
4. **The artisan is always the subject.** In all content, the human craft comes first, technology second.
5. **Sector rotation.** Never more than 2 consecutive references to the same food sector. Rotate: caseifici, panifici, frantoi, cantine, norcinerie, pastifici, conservifici, birrifici, apicoltura, cioccolateria, oleifici, gelaterie artigianali.
