# CLAUDE.md — Food Tech Bootcamp

## What This Is

FTB is a lab building AI tools for Italy's 300,000 artisanal food producers. Mission: making food knowledge computable. Founded by a UNISG Pollenzo gastronome who codes. Based in Milan area. One-person lab with a full-time job at Cortilia.

Not an agency. Not a consultancy. A lab. The work changes — the mission doesn't.

> **Per capire come i 4 repo si tengono insieme, il data flow della pipeline, e lo schema Supabase**: leggi [`ARCHITECTURE.md`](./ARCHITECTURE.md). Questo file (CLAUDE.md) tratta stato corrente + convenzioni. L'architettura è separata perché cambia poco.

## Current State (2026-04-22)

- **Tosi Fase 1 quasi pronta.** Voice Twin **v0.3 validato Andrea M (2026-04-18)** + parere legale L. 34/2026 + DOP (doc 06) + tre email esempio v0.3 validate. **Blocker unico al deploy**: numero iscrizione Albo Imprese Artigiane CCIAA Novara (da Andrea Casero) — placeholder `[XXX]` in firma S2.
- **Agent = Claudia.** Mittente cold outbound: `Claudia per Caseificio Tosi <hello@tosigorgonzola.com>` via Resend. CRM `/review` live con toast notification. Disclosure AI dichiarata (stratificata).
- **Pipeline menu**: 15 menus in Supabase. Pipeline riorganizzata 2026-04-22 — profiling runs PRIMA del menu con fit_score ≥ 7 gate. La batch menu non si lancia più sui 156 pending: prima si profila tutto, poi solo i qualificati (tipicamente 30-50 prospect) entrano in menu extraction. Per-website cost tracking live (batch 2026-04-14 = $10.86, 92% cache hit, 100% success rate post fix).
- **Strategia consolidata**: modello a 4 fasi (visita → 2 vaschette → contratto → Ambassador). Claudia opera solo in Fase 1. Hard rules: zero citazione clienti, zero offerta 1kg, zero leva prezzo. Positioning: **"Latte, Uomo, Legno, Tempo"**. Memorie autoritative: `project_tosi_four_phase_model.md`, `project_tosi_phase1_rules.md`.
- **Prossimo milestone**: (1) numero Albo → (2) deploy Voice Twin v0.3 nel CRM → (3) website profiling + briefing cards batch sui 15 → (4) selezione 10 prospect pilota → (5) prima cold email in `/review`.

> **Dettaglio operativo + session log** → `STATUS.md`. **Architettura multi-repo + data flow + Supabase schema** → `ARCHITECTURE.md`. **Roadmap fasi 2026-2027** → skill `ftb-roadmap-2026-2027`.

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
CLAUDE.md                              → conventions + short current state pointer
STATUS.md                              → flywheel tracker (update after every session)
ARCHITECTURE.md                        → multi-repo map, data flow, Supabase schema
Partner/
  Anthropic/                           → CPN application trail, email screenshots, analysis
    Archive/                           → superseded drafts (reply_to_karl v1, submitted answers)
Projects/
  Tosi/
    Docs/                              → experiment docs, prefixed by phase (00-, 01-, ...)
      Archive/                         → superseded versions (v0.2 emails, Phase1-Plan)
.claude/
  skills/                              → Claude Code skills (one folder per skill, SKILL.md inside)
```

Skills are listed and routed in "Task → Skill Routing" below. For the architecture of the 4 repos that make up the Tosi system, see `ARCHITECTURE.md`.

## Task → Skill Routing

Only load the skills you need. Every skill costs context.

| Task | Load these skills |
|------|-------------------|
| **Website development** | Brand-Identity-Website + Website-Build-Prompt |
| **Blog / LinkedIn / content** | Content-Engine + Voice-CEO |
| **Tosi experiment (design / strategy)** | Tosi-Experiment (+ Voice-CEO if writing about it) |
| **Scrape prospect per nuova zona (Milano, Roma, Paris, ...)** | Claudia-Prospect-Scraping |
| **Import prospect scrapati nel CRM Supabase** | Claudia-Prospect-Import |
| **Profilare sito web prospect + emettere fit_score (STEP 3, gate)** | Claudia-Website-Profiling |
| **Estrarre menu dai siti dei prospect qualificati (fit_score ≥ 7)** | Claudia-Menu-Extraction |
| **Generare briefing card per prospect** | Claudia-Briefing-Cards |
| **Generate / regenerate Claudia cold emails (CLI, subscription)** | Claudia-Email-Generator |
| **EU funding applications** | EU-Bandi-Navigator + Content-Engine |
| **Producer field research** | Artisan-Discovery |
| **Strategy / partnerships / pitches / fiscal / roadmap / "do I accept this client?"** | Roadmap-2026-2027 (absorbe ex ftb-strategy) |
| **Emails / formal communication** | Voice-CEO |
| **Cortilia work / general dev** | CLAUDE.md alone — no skills needed |

## Tosi pipeline — 6 skill invocabili da conversazione

Ogni step della pipeline Claudia ha la sua skill Claude Code. Sequenza naturale
(profiling PRIMA del menu — fit_score ≥ 7 è il gate per il resto della pipeline):

```
1. ftb-claudia-prospect-scraping   → Google Places su nuova zona → enriched_results.json
2. ftb-claudia-prospect-import      → JSON → companies table (Supabase CRM)
3. ftb-claudia-website-profiling    → website → companies.website_profile + companies.fit_score (0-10)
   ─── GATE: solo prospect con fit_score ≥ 7 proseguono ───
4. ftb-claudia-menu-extraction      → website → companies.menu_structured
5. ftb-claudia-briefing-cards       → CRM + menu + profile → briefing_cards table
6. ftb-claudia-email-generator      → briefing → email_drafts (pending_review)
```

Il gate (step 3 → 4) è enforced dal bridge con `node scripts/bridgeMenuExtraction.js generate --require-fit-score 7`. Prospect sub-7 restano in CRM per review manuale ma non consumano compute downstream.

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
3. **Show, don't pitch.** Build demos, not decks. Ship experiments, not strategies. (César Manrique principle — full voice guide in `ftb-voice-ceo` skill.)
4. **The artisan is always the subject.** In all content, the human craft comes first, technology second.
5. **Sector rotation.** Never more than 2 consecutive references to the same food sector. Rotate: caseifici, panifici, frantoi, cantine, norcinerie, pastifici, conservifici, birrifici, apicoltura, cioccolateria, oleifici, gelaterie artigianali.
