---
name: ftb-claudia-menu-extraction
description: >
  On-demand invocation of the menu extraction agent for Tosi prospects. Use when
  the user asks to "estrai menu di X", "lancia menu extraction sui qualificati",
  "rilancia menu per prospect Y", "batch menu completo", "run menu pipeline",
  or "quanti prospect hanno ancora il menu da estrarre". Runs AFTER website
  profiling — gated on companies.fit_score >= 7 (pass --require-fit-score 7 to
  the bridge). Uses Claude Agent SDK + Playwright MCP in subscription mode (€0
  real cost) to navigate restaurant websites and extract structured menus
  (categories + items + prices). Output lands in companies.menu_structured in
  Supabase (via the bridge script).
---

# Menu Extraction — extract structured menus from prospect websites

**Second** AI-powered step of the Tosi pipeline (runs AFTER website profiling).
Takes a prospect's website URL and produces a structured JSON menu (categories
+ items + descriptions + prices). Critical for Claudia: no menu = no
personalization = no quality briefing card.

**Gate:** menu extraction only runs for prospects with `companies.fit_score >= 7`
(set by the profiling step). Sub-7 prospects are parked — no menu compute spent.
The bridge enforces this via `--require-fit-score 7`.

## When to invoke

Triggers:
- *"estrai menu di Pizzeria X"*
- *"lancia menu extraction sui 156 rimanenti"*
- *"batch menu completo sui Tosi prospect"*
- *"ri-estrai il menu di X"* (forzatura)
- *"quanti prospect hanno menu vs no-menu?"*
- *"resume batch menu"* (ripresa dopo interruzione)

## Repo

```
~/Projects/FTB/menu-extraction-agents-sdk_top/
  agents/menu_extraction/agent.py     # single-site extraction
  batch/batch_menu.py                 # batch runner with resume
  .claude/skills/
    browser-automation/SKILL.md       # loaded by the Agent SDK at runtime
    menu-parsing/SKILL.md             # loaded by the Agent SDK at runtime
  output/tosi/                        # per-prospect JSON output
  monitoring/tracking/                # token/cost tracking per run
~/Projects/TOSI/WEB/tosi-scraping/
  scripts/bridgeMenuExtraction.js     # handoff + dedup + Supabase push
```

## Auth mode

Subscription-first, €0 real cost. Tracks "would-have-been" API cost as proxy for
the Anthropic partnership metrics. Fallback to API if monthly quota hit.

## Typical invocations

### Extract menu for a single restaurant

\`\`\`bash
cd ~/Projects/FTB/menu-extraction-agents-sdk_top && source venv/bin/activate
python -m agents.menu_extraction.agent "https://pizzeriasapo.it" "Pizzeria Sapò" --tosi
\`\`\`

Output: `output/tosi/Pizzeria_Sapò_menu.json` + usage logged.

### Batch — only the qualified prospects (fit_score ≥ 7)

The batch reads \`input/restaurants.json\` (produced by
\`bridgeMenuExtraction.js generate --require-fit-score 7\` in tosi-scraping).
Only prospects that have been profiled AND scored ≥ 7 enter the input:

\`\`\`bash
cd ~/Projects/TOSI/WEB/tosi-scraping
node scripts/bridgeMenuExtraction.js generate --require-fit-score 7

cd ~/Projects/FTB/menu-extraction-agents-sdk_top && source venv/bin/activate
cp ~/Projects/TOSI/WEB/tosi-scraping/menu-pipeline/input/restaurants.json input/restaurants.json

python -m batch.batch_menu --tosi --limit 10   # test small
python -m batch.batch_menu --tosi              # full qualified batch
\`\`\`

Expected (post-gate): dramatically smaller batch than 156 — likely 30-50 prospects
depending on how the scoring distributes. Typical cost at $0.50-$1.50 per site,
subscription mode → actual $0.

**If you forget `--require-fit-score 7`** the bridge will include unprofiled
prospects and sub-7 ones, wasting menu-extraction compute. It's the cheapest
mistake to make — always pass the flag for menu step.

### Resume after interruption

\`\`\`bash
python -m batch.batch_menu --tosi --resume
\`\`\`

Reads \`monitoring/reports/batch_report.json\` to figure out where to restart.

### Push extracted menus back to Supabase

After a batch completes, bridge the local JSON files back to Supabase so the CRM dashboard lights up the "Menu" column:

\`\`\`bash
cd ~/Projects/TOSI/WEB/tosi-scraping
npm run menu-collect-push
\`\`\`

The bridge is idempotent — skips prospects already pushed. Dedup + normalization (diacritics, hostname matching) included.

## Current status (post fit-score gate)

- **15 prospects** have menu_structured in Supabase (Borgo 135 items, Sapò 62, Cesarino 65, …)
- **All new prospects** go through profiling first; only fit_score ≥ 7 enters menu extraction.

To see pending-qualified count (prospects ready for menu extraction):

\`\`\`sql
SELECT COUNT(*) FROM companies
WHERE data_source = 'google_places'
  AND is_out_of_scope = false
  AND menu_structured IS NULL
  AND website IS NOT NULL
  AND fit_score >= 7;
\`\`\`

To see how many are still blocked upstream (need profiling first):

\`\`\`sql
SELECT COUNT(*) FROM companies
WHERE data_source = 'google_places'
  AND is_out_of_scope = false
  AND website IS NOT NULL
  AND fit_score IS NULL;
\`\`\`

## Output schema

Each successful extraction produces a JSON with:

\`\`\`json
{
  "restaurant": { "name", "url", "address", "phone", "email", "hours", "vat_number" },
  "menu": {
    "categories": [
      {
        "name": "Burger - Classici",
        "items": [{ "name", "description", "prices": [...], "currency": "EUR" }]
      }
    ]
  },
  "extraction_metadata": { "source_url", "extraction_date", "method", "total_items", ... }
}
\`\`\`

## Known issues / edge cases

- **SPA sites** (single-page JavaScript) → Playwright handles them but takes longer
- **PDF menus** → extracted via the built-in PDF skill (menu-parsing/scripts/parse_table.py)
- **Menu behind auth** (requires login) → extraction fails, mark as out_of_scope
- **Sites with only Instagram/Facebook menu** → Bridge dedups and skips (pure social not scrapable cleanly)

## Related skills

- **`ftb-claudia-prospect-scraping`** — step 1: finds the prospects
- **`ftb-claudia-prospect-import`** — step 2: gets them into Supabase
- **`ftb-claudia-website-profiling`** — step 3 (before this one): profiles + scores, gates this skill
- **`ftb-claudia-briefing-cards`** — step 5 (after this one): depends on menu output
