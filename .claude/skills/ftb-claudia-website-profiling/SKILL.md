---
name: ftb-claudia-website-profiling
description: >
  On-demand invocation of the website profiling + fit scoring agent for Tosi
  prospects. Use when the user asks to "profila il sito di X", "batch profiling
  sui 15", "rigenera profilo di Y", "estrai filosofia del locale Z", "analizza
  lo stile del sito di X", "dammi lo score di X", "quanti prospect sopra 7",
  "filtra prospect per fit_score". FIRST AI-powered step of the pipeline (runs
  BEFORE menu extraction). HTTP fetch + Claude analysis (subscription mode, €0)
  reads homepage + about page, extracts locale identity + philosophy + supplier
  mentions AND emits a fit_score 0-10 with per-dimension breakdown (price_tier,
  terroir_language, artisan_framing, chef_voice, supplier_mentions). Output
  lands locally (JSON) + mirrored to companies.website_profile (full JSON) and
  companies.fit_score (int) in Supabase. The fit_score gates the rest of the
  pipeline: only prospects >=7 proceed to menu extraction. Falls back to
  Playwright MCP for SPA sites.
---

# Website Profiling — extract locale identity + fit score from prospect sites

**First** AI-powered step of the Tosi pipeline (runs BEFORE menu extraction).
Analyzes the prospect's website to extract **who they are** (filosofia, stile,
fornitori citati, posizionamento prezzo) AND emits a **fit_score 0-10** that
gates the rest of the pipeline: only prospects with fit_score ≥ 7 proceed to
menu extraction, briefing, and email generation. Sub-7 prospects stay in CRM
for review but don't consume downstream compute.

## When to invoke

Triggers:
- *"profila il sito di X"*
- *"batch profiling sui 15 prospect con menu"*
- *"rigenera profilo di Pizzeria Y"*
- *"estrai filosofia/stile del locale Z"*
- *"quanti prospect hanno il profile ancora da fare?"*
- *"analizza la presenza online di X"*

## Repo

```
~/Projects/FTB/menu-extraction-agents-sdk_top/
  agents/website_profiling/agent.py      # single-prospect
  batch/batch_profiling.py               # batch runner
  prompts/tosi_profiling.md              # Tosi-specific profiling prompt
  output/tosi/*_profile.json             # per-prospect output
```

## Auth mode

Subscription-first (€0 real). The agent does:
1. HTTP fetch of homepage + /chi-siamo / /about (requests lib, no browser)
2. Strip HTML to text, cap at ~12k chars
3. Feed to Claude with the profiling prompt
4. Parse JSON output
5. Save JSON locally + mirror to Supabase `companies.website_profile`

Fallback to Playwright MCP if HTTP fetch fails (SPA, JavaScript-heavy sites).

## Typical invocations

### Single prospect

\`\`\`bash
cd ~/Projects/FTB/menu-extraction-agents-sdk_top && source venv/bin/activate
python -m agents.website_profiling.agent \\
  "https://pizzeriasapo.it" "Pizzeria Sapò" \\
  --tosi \\
  --prompt-file prompts/tosi_profiling.md
\`\`\`

If you want the result also pushed to Supabase for the "Profilo" column, pass `company_id` via programmatic call (batch runner does this automatically).

### Batch — sui prospect con menu ma senza profilo

\`\`\`bash
python -m batch.batch_profiling --tosi --prompt-file prompts/tosi_profiling.md
\`\`\`

The batch runner reads `input/restaurants.json` (same format as menu extraction). Pass `company_id` via the JSON entries → agent writes to Supabase automatically.

### Force re-profiling (overwrite existing)

Not a dedicated flag — just re-run. The agent overwrites `companies.website_profile` with the new JSON. Safe idempotent operation.

### Force Playwright (bypass HTTP fetch for SPAs)

Inside `agents/website_profiling/agent.py` there's a `force_playwright=True` param. Expose it as a CLI flag if needed for specific sites.

## Profile JSON schema (v2 with fit_score)

\`\`\`json
{
  "fit_score": 7,
  "fit_summary": "Bistrot mid-high, chef firma il menu, fornitori nominati, forte linguaggio di territorio",
  "fit_breakdown": {
    "price_tier":        { "tier": "mid-high", "fit": "good" },
    "terroir_language":  { "level": "strong",  "evidence": "Parla di 'latti lombardi' e 'produttori locali'" },
    "artisan_framing":   { "level": "light",   "evidence": "About page menziona 'fatto a mano'" },
    "chef_voice":        { "level": "personal","evidence": "Chef nominato, foto staff" },
    "supplier_mentions": { "count": 3, "examples": ["Cascina X", "Frantoio Y", "Cantina Z"] }
  },
  "locale_type": "paninoteca | pizzeria | focacceria | bistrot | bar | ristorante | altro",
  "style": "gourmet | casual | fast-casual | fine-dining | street-food",
  "philosophy": "free text: what they emphasize about food",
  "key_ingredients_mentioned": ["list"],
  "cheese_mentions": ["types, suppliers, usage"],
  "approach_angle": "best angle for Tosi cold email",
  "social_links": {"instagram": "url_or_null", "facebook": "url_or_null"},
  "_meta": {"url", "name", "profiled_at", "method", "tokens", "cost_usd"}
}
\`\`\`

### The `fit_score` gate

`fit_score` is the headline number (0-10, integer). The agent writes it to:
- `companies.fit_score` top-level column (queryable, indexed, sortable in CRM)
- `companies.website_profile.fit_score` inside JSON (kept alongside the breakdown)

**Threshold ≥7** is enforced by the menu extraction bridge — the
`bridgeMenuExtraction.js generate --require-fit-score 7` flag excludes sub-7
prospects from the menu batch input.

Rubric anchor (lives in `prompts/tosi_profiling.md`):
- **8-10**: chef-driven mid-high, strong terroir + artisan language, named suppliers
- **6-7**: some signals present, worth contacting
- **4-5**: borderline, skip
- **0-3**: clear mismatch (budget, luxury marquee-brand, anonymous corporate)

## Current status

Profilo column in CRM dashboard: grey (not profiled yet) → verde appena l'agent
ha scritto il profile JSON. The "fit_score" column shows 0-10.

Query per lo stato pendente (prospect da profilare):

\`\`\`sql
SELECT COUNT(*) FROM companies
WHERE data_source = 'google_places'
  AND is_out_of_scope = false
  AND website IS NOT NULL
  AND fit_score IS NULL;
\`\`\`

Query per il gate della menu-extraction (prospect qualificati):

\`\`\`sql
SELECT COUNT(*) FROM companies
WHERE data_source = 'google_places'
  AND is_out_of_scope = false
  AND fit_score >= 7;
\`\`\`

Query per il fit-score distribution (sanity-check del rubric):

\`\`\`sql
SELECT fit_score, COUNT(*) FROM companies
WHERE fit_score IS NOT NULL
GROUP BY fit_score ORDER BY fit_score DESC;
\`\`\`

## When Playwright fallback kicks in

- Site returns empty/tiny HTML after fetch (likely SPA)
- Site returns 403/429 (anti-bot on simple fetch)
- HTTP fetch raises connection error 3x

Playwright costs ~10x more tokens and ~5x more time per site. Minimize by keeping HTTP path happy where possible.

## Cost profile

- HTTP path: ~$0.02-0.05 per prospect (cache hit on system prompt)
- Playwright fallback: ~$0.20-0.80 per prospect
- Batch di 15 prospect: ~$0.50-1.50 "would-have-been" cost, €0 actual (subscription)

## Related skills

- **`ftb-claudia-menu-extraction`** — previous step (need menu before profile to plan Claudia's approach)
- **`ftb-claudia-briefing-cards`** — next step (briefing reads profile + menu)
- **`ftb-claudia-email-generator`** — final step (Claudia uses briefing in cold email)
