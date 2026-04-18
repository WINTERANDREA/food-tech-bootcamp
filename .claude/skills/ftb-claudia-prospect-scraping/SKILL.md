---
name: ftb-claudia-prospect-scraping
description: >
  Google Places scraping for a target zone — produces the raw prospect list that
  feeds the Tosi/Claudia pipeline. Use when the user asks to "scrape nuovi prospect
  per zona X", "cerchiamo locali a Roma / Navigli / Paris", "sposta la ricerca da
  Turati a Porta Ticinese", "aggiungi 50 prospect in zona Y", "lancia lo scraping
  su nuove query", or wants to expand the universe beyond zona Turati Milano.
  Runs from the tosi-scraping repo. Produces JSON files in output/ that feed the
  import step (ftb-claudia-prospect-import) which pushes into the CRM Supabase.
---

# Prospect Scraping — Google Places by zone

Raw discovery of target locali in a specific geographic area. Output lands in
`output/enriched_results.json` of the `tosi-scraping` repo, ready to be imported
into the CRM.

## When to invoke

Triggers:
- *"scrapa nuovi prospect zona Navigli"*
- *"sposta la ricerca da Milano Turati a Porta Ticinese"*
- *"cerchiamo paninerie a Roma Trastevere"*
- *"lancia scraping zona Y con 18 query"*
- *"aggiungi prospect francese, zona Le Marais Paris"*
- *"enrich email/reviews/registro per i 250 esistenti"*

## Repo

```
~/Projects/TOSI/WEB/tosi-scraping/
  scripts/
    searchPlaces.js        # Google Places API Text Search — core discovery
    dedup.js               # dedup by place_id + hostname
    enrichEmails.js        # scrape email from prospect websites
    enrichReviews.js       # fetch Google reviews
    enrichRegistroAziende.js  # fetch business registry data (Italy)
    enrichMenu.js          # basic menu detection (pre-SDK)
    enrichMenuV2.js        # structured menu via Claude (replaced by menu-extraction repo)
    bridgeMenuExtraction.js   # handoff to menu-extraction-agents-sdk_top
    toCsv.js               # export results to CSV
  output/
    places_results.json    # raw Google Places output (per-query)
    deduped_results.json   # after dedup
    enriched_results.json  # final — feeds CRM import
  reference/
    enrichWithGooglePlacesNew.js   # upstream pattern from cheese-shop project
```

## Env vars (in tosi-scraping/.env)

- `GOOGLE_PLACES_API_KEY` — required, Google Cloud console
- `ANTHROPIC_API_KEY` — for enrichMenuV2 (optional, legacy)
- `SUPABASE_URL` + `SUPABASE_SERVICE_KEY` — not strictly needed here (import is separate)

## Typical invocations

### Full first-pass scraping of a new zone

Edit `scripts/searchPlaces.js`:
1. Update \`TURATI_CENTER\` to new lat/lng (use Google Maps pin → right-click → copy coords)
2. Update \`SEARCH_RADIUS\` (default 2000m covers ~2km)
3. Update the \`QUERIES\` array with zone-appropriate search strings (keep Italian grammar for Italian zones, localize for foreign zones)

Then:

\`\`\`bash
cd ~/Projects/TOSI/WEB/tosi-scraping
npm run search         # Google Places Text Search → output/places_results.json
npm run dedup          # dedup by place_id + hostname → output/deduped_results.json
npm run enrich         # scrape email from each website → adds email field
npm run enrich-reviews # fetch Google reviews → adds google_reviews field
npm run enrich-ra      # fetch business registry (Italian prospects only) → output/enriched_results.json
\`\`\`

Final file `output/enriched_results.json` is what the import script reads.

### Adding queries to existing zone

Open \`scripts/searchPlaces.js\`, add new query strings to the array, re-run \`npm run search\`. Dedup will skip duplicates.

### Re-enriching existing prospects (new emails, new reviews)

If the prospect list is stable but you want fresh email/reviews data:

\`\`\`bash
npm run enrich         # overwrite email field
npm run enrich-reviews # overwrite google_reviews field
\`\`\`

Dedup runs idempotent — safe to re-run.

## Query design principles

Good queries (high signal, low noise):
- \`paninoteca Milano centro\`
- \`pizzeria gourmet Milano Brera\`
- \`wine bar tagliere Milano Porta Venezia\`
- \`focacceria artigianale Milano Garibaldi\`

Avoid:
- Too generic (\`ristorante Milano\`) → thousands of results, most irrelevant
- Too niche (\`panino gorgonzola Milano\`) → few results, arbitrary bias
- Wrong locale (\`pizzeria Napoli\` when scraping Milano) — Google will still return some

Target 12-18 queries per zone. Quality over quantity.

## Target zones: geography + expected volume

| Zone | Center coords | Radius | Expected after dedup |
|---|---|---|---|
| Milano Turati (current) | 45.4735, 9.1895 | 2000m | ~250 prospects |
| Milano Navigli | 45.4485, 9.1731 | 1500m | ~180 prospects |
| Milano Porta Romana | 45.4528, 9.2015 | 1500m | ~150 prospects |
| Roma Trastevere | 41.8890, 12.4690 | 1200m | ~120 prospects |
| Roma Monti | 41.8948, 12.4920 | 1000m | ~90 prospects |
| Paris Le Marais | 48.8566, 2.3522 | 1200m | ~150 prospects |

(Numbers are rough estimates based on density. Actual after dedup varies ±30%.)

## After scraping — handoff

Once `output/enriched_results.json` is produced, **invoke the companion skill
`ftb-claudia-prospect-import`** to push the new prospects into the CRM Supabase.
The import is idempotent (upsert by `google_place_id`) so safe to re-run as you
add queries.

## Related files to update when changing zone

- \`scripts/searchPlaces.js\` — TURATI_CENTER, SEARCH_RADIUS, QUERIES
- \`scripts/importGooglePlaces.js\` (CRM repo) — the "Zona Turati" group tag. Edit
  to "Zona [Nuova]" when importing prospects from a different area.
- STATUS.md in FTB repo — reflect the new target zone
- CLAUDE.md in FTB repo — **Current State** section ("Target zone" line)

## Related skills

- **`ftb-claudia-prospect-import`** — push scraped prospects into CRM Supabase (next step)
- **`ftb-claudia-menu-extraction`** — extract structured menus from prospect sites
- **`ftb-artisan-discovery`** — field research framework (different purpose: interviewing producers, not scraping targets)
