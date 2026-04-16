# CLAUDE.md — Food Tech Bootcamp

## What This Is

FTB is a lab building AI tools for Italy's 300,000 artisanal food producers. Mission: making food knowledge computable. Founded by a UNISG Pollenzo gastronome who codes. Based in Milan area. One-person lab with a full-time job at Cortilia.

Not an agency. Not a consultancy. A lab. The work changes — the mission doesn't.

## Current State (2026-04-16)

- **Primary project:** Tosi AI Sales Agent — Phase 0 complete. Phase 1 in progress. Baseline interview sessione 1 sintetizzata → Voice Twin v0.1 draft prodotto → call validazione stile (04b) → risposte Andrea M (04c) → agenda decisioni Fase 1 pronta (04d), 10 min call con Andrea M pendente per sbloccare v0.2. **CRM: route `/review` costruita e funzionante + integrazione Resend per invio email programmatico.**
- **Agent identity:** Proposta in corso — **Claudia** (non più Claudio). Andrea M in 04c: *"Claudio come nome non mi piace tantissimo, capisco derivi da Claude, ci rifletto"*. Andrea C ha proposto Claudia come alternativa: stessa etimologia Claude, suono più pulito in italiano. **In attesa di conferma call 04d.** Il principio non cambia: agent AI dichiarato, non finge di essere umano. Il Voice Twin resta italianizzato — la traccia di Anthropic nello stack rimane visibile.
- **Decisioni proposte a Andrea M in call 04d (pendenti):** (1) Naming → Claudia. (2) Offerta asimmetrica **1 kg gratis: *"se non lo trovate più buono del vostro, lo paghiamo noi"*** — derivata letteralmente dal reframing del Maestro nella baseline. Costo ipotesi peggiore su 30 prospect ~€400. (3) Disclosure AI stratificata: non più in riga 1, ma apertura neutra + middle esplicativo + firma esplicita *agent AI del Caseificio Tosi*. (4) Firma S2 con contatti umani reali di Andrea Casero. (5) Follow-up: una sola mail a 7 giorni poi stop. (6) Gesto singolo di default per nuovi prospect (Andrea M sceglie tra 4 candidati). (7) "Tutto fatto a mano" come cornice usata in combinazione con un gesto concreto, mai da sola.
- **Decisione Andrea C consolidata (non negoziata con Andrea M):** **Nessuna menzione di altri clienti nelle cold email di Fase 1.** La regola *"mai citare altri clienti, inclusa Berberè"* esistente resta in vigore e il tema non si riapre in Fase 1. Vedi memoria `project_tosi_phase1_rules.md`.
- **Baseline interview:** Sessione 1 svolta 2026-04-12. Sintesi master in `Projects/Tosi/Docs/02-TOSI-Baseline-Interview-Synthesis.md` (12 sezioni autoconsistenti, integra `NOTE TOSI.xlsx` + scheda tecnica cucchiaio 1kg). Questa è la fonte autoritativa per il Voice Twin e per tutti gli artefatti Fase 1.
- **Voice Twin artifacts chain:** `02-TOSI-Baseline-Interview-Synthesis.md` (fonte) → `03-TOSI-Voice-Twin-System-Prompt.md` v0.1 (draft) → `04-TOSI-Call-Validazione-Stile-Claudio.md` + `04b-*-COMPACT.md/pdf` (call di stile) → `04c-*-Risposte.pdf` (Andrea M answers 2026-04-15) → `04d-TOSI-Call-Decisioni-Fase1-Agenda.md` + `-COMPACT.md/pdf` + `-Email-Aggancio-Andrea-M.md` (nuova agenda strategica 10 min, in attesa call).
- **Contatti umani Andrea Casero (per firma Claudia e mail aggancio):** Head of Research and Development · Caseificio Tosi · Via Maggiate 6, Gattico-Veruno (NO), Italia · `+39 379 132 3187` · `sviluppo@tosigorgonzola.com`. Il dominio corretto è `tosigorgonzola.com` (il draft v0.1 del Voice Twin aveva erroneamente `caseificiotosi.it` → da correggere in v0.2).
- **Positioning consolidato:** Claim firma **"Latte, Uomo, Legno, Tempo"**. Asse narrativo in sviluppo "Le mani sono il nostro manifesto / maniaci". Parole bandite: `eccellenza`, `unico`, `premium`. Concetti `qualità/artigianalità/tradizione` sottintesi, mai nominati. Claim numerici autorizzati: `600L caldaia → 6 forme`, `1.5% sale`, `zero scarto`, `TMC 30gg`.
- **Modello Ambassador logistico** (decisione nuova critica): Tosi Gattico → Ambassador locale (zona Turati, stocca 20-30kg, fattura come rivenditore autorizzato) → rider refrigerato (Glovo/Deliveroo) → paninoteca/pizzeria. Velocità target ordine → consegna in ore ("1×2, non B2B"). Pagamento carta immediato. Replicabile Roma/Napoli — **questa è la dimensione replicabile da vendere ad Anthropic/EU**.
- **Fase 1 prospect pool:** paninerie/focaccerie/bistrot **+ pizzerie gourmet** (nessuna esclusione a priori per `tipo locale`). Campo esistente sufficiente — nessun nuovo attributo CRM.
- **CRM:** `~/Projects/TOSI/WEB/tosi-mini-crm` (branch: `feat/ai-sales-agent`). Deployed on Vercel (free tier). Features: Dashboard, Map, Priority Score, Top-50 view, BriefingCardSection, StructuredMenuSection with gorgonzola highlighting, **`/review` route** (Andon-style approve/reject+feedback queue per i draft di Claudia), **Resend integration** per invio email programmatico (`api/send-email.ts` Vercel serverless function, mittente `Claudia per Caseificio Tosi <hello@tosigorgonzola.com>`, reply-to `sviluppo@tosigorgonzola.com`). Review workflow: 3 azioni (Approva / Approva e invia / Rifiuta con feedback). Tracking `approved_by` per sapere chi ha revisionato (Andrea C o Andrea M). **Resend non ancora configurato** — serve: account Resend free, verifica dominio `tosigorgonzola.com` (DNS records SPF/DKIM/DMARC), env var `RESEND_API_KEY` in Vercel. Senza Resend: Approva e Rifiuta funzionano, solo "Approva e invia" dà errore runtime.
- **Scraping:** `~/Projects/TOSI/WEB/tosi-scraping` (caseificiotosi-hub). 250 prospects with phone/email/reviews/registro aziende. Menu extraction bridge to Claude Agent SDK working.
- **Menu extraction:** `~/Projects/FTB/menu-extraction-agents-sdk_top` (WINTERANDREA). Claude Agent SDK + Playwright MCP. Dedicated `output/tosi/` folder (--tosi flag). **15 menus in Supabase** dopo batch 2026-04-14 (Borgo 135, Sapò 62, Cesarino 65, San Giorgio 51, Cecino 40, Romanengo 58, Panino doc 73, 24 Burger 52, Vecchio Mulino 30, 'O Fiore Mio 55, Bonnie & Clyde 87, La Manierina 43, el gian 143, Debbie's 41, Savô 78). **156 prospects pending** dopo blacklist `primary_type` (bakery, cafe, pastry_shop, tea_house, liquor_store, food_store, grocery_store, supermarket, butcher_shop, cocktail_bar) — 21 non-target filtrati a monte.
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
- **Next milestone:** (1) **Setup Resend** (15 min): account free → verifica dominio `tosigorgonzola.com` (DNS SPF/DKIM/DMARC) → env var `RESEND_API_KEY` in Vercel dashboard. Senza questo, "Approva e invia" non funziona. (2) Call 10 min con Andrea M sull'agenda 04d per sbloccare naming Claudia + offerta 1 kg + firma + disclosure stratificata + gesto default. (3) Aggiornare `03-TOSI-Voice-Twin-System-Prompt.md` → v0.2 con tutte le decisioni post-call + rename Claudio→Claudia + domain fix `caseificiotosi.it` → `tosigorgonzola.com`. (4) Rigenerare le tre email esempio con v0.2 + offerta 1 kg per OK finale di Andrea M. (5) **Ristrutturare repo `menu-extraction-agents-sdk_top`**: creare `agents/`, `batch/`, `shared/`, `prompts/` + spostare smart_agent.py e batch_smart.py + aggiungere `--project` flag (tosi|stellati). (6) **Website profiling agent** + **Briefing card generator** nel repo ristrutturato. (7) Batch menu extraction 156 prospect rimanenti (pipeline stabile 100%). (8) Prima cold email pilota su 10 prospect selezionati entro la settimana successiva all'OK. (9) Sessione 2 intervista Andrea Tosi (10 open questions, incluso modello Ambassador operativo).

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
