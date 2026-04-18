---
name: ftb-claudia-website-profiling
description: >
  On-demand invocation of the website profiling agent for Tosi prospects. Use
  when the user asks to "profila il sito di X", "batch profiling sui 15",
  "rigenera profilo di Y", "estrai filosofia del locale Z", "analizza lo stile
  del sito di X". HTTP fetch + Claude analysis (subscription mode, €0) reads
  homepage + about page, extracts locale identity, philosophy, key ingredients,
  supplier mentions, price positioning. Output lands both locally (JSON) and
  mirrored to companies.website_profile in Supabase so the CRM dashboard lights
  up the "Profilo" column. Falls back to Playwright MCP for SPA sites.
---

# Website Profiling — extract locale identity from prospect sites

Second AI-powered step of the Tosi pipeline (after menu extraction). Analyzes
the prospect's website to extract **who they are** (filosofia, stile, fornitori
citati, posizionamento prezzo). Feeds the briefing card generator with context
that goes beyond just the menu.

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
cd ~/Projects/FTB/menu-extraction-agents-sdk_top
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

## Profile JSON schema

\`\`\`json
{
  "locale_type": "paninoteca | pizzeria | focacceria | bistrot | bar | ristorante | altro",
  "style": "gourmet | casual | fast-casual | fine-dining | street-food",
  "philosophy": "free text: emphasize ingredients / territory / tradition / innovation / price",
  "key_ingredients_mentioned": ["list"],
  "cheese_mentions": ["types, suppliers, usage"],
  "gorgonzola_relevance": "high | medium | low",
  "gorgonzola_relevance_reasoning": "why",
  "price_positioning": "budget | mid-range | premium",
  "target_customer": "free text",
  "approach_angle": "best angle for Tosi cold email",
  "notable_details": "free text",
  "has_about_page": true/false,
  "social_links": {"instagram": "url_or_null", "facebook": "url_or_null"},
  "delivery_available": true/false/unknown,
  "_meta": {"url", "name", "profiled_at", "method", "tokens", "cost_usd"}
}
\`\`\`

The Tosi-specific prompt in `prompts/tosi_profiling.md` enforces this schema + adds gorgonzola-specific fields (relevance + approach_angle).

## Current status

Profilo column in CRM dashboard: grey (most prospects) → verde appena l'agent ha scritto il profile JSON. Dopo il batch profiling sui 15 con menu, tutti e 15 dovrebbero essere verdi.

Query per lo stato pendente:

\`\`\`sql
SELECT COUNT(*) FROM companies
WHERE data_source = 'google_places'
  AND is_out_of_scope = false
  AND menu_structured IS NOT NULL
  AND website_profile IS NULL;
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
