---
name: ftb-claudia-prospect-import
description: >
  Import scraped prospects from tosi-scraping into the CRM Supabase. Use when
  the user asks to "importa i prospect nel CRM", "carica i nuovi locali in
  Supabase", "aggiungi la zona Roma alla dashboard", "push enriched_results into
  CRM", or after running ftb-claudia-prospect-scraping on a new zone. The import
  is idempotent — upsert by google_place_id, safe to re-run. Creates/updates a
  group tag (e.g. "Zona Turati", "Zona Navigli") and assigns all imports to it.
---

# Prospect Import — from scraping JSON to CRM Supabase

Second step of the prospect discovery pipeline. Takes `enriched_results.json`
produced by `ftb-claudia-prospect-scraping` and upserts into the `companies`
table in Supabase. The CRM dashboard picks them up immediately.

## When to invoke

Triggers:
- *"importa i nuovi prospect nel CRM"*
- *"carica i locali scrapati in Supabase"*
- *"push della zona Navigli dentro al database"*
- *"aggiorna il CRM con gli enriched_results"*
- *"importa e crea il gruppo Zona Roma"*

## Repo

```
~/Projects/TOSI/WEB/tosi-mini-crm/
  scripts/
    importGooglePlaces.js    # core import — reads from ../data/enriched_results.json
                              # upserts companies by google_place_id
                              # creates "Zona Turati" group (hard-coded by default)
  .env                       # needs VITE_SUPABASE_URL + SUPABASE_SERVICE_KEY
```

**Data flow:**

```
tosi-scraping/output/enriched_results.json
            ↓ (manual copy or symlink)
tosi-mini-crm/data/enriched_results.json
            ↓ (npm run import)
Supabase companies table (upsert by google_place_id)
```

The import expects the JSON file at `tosi-mini-crm/data/enriched_results.json`.
Either copy it there or symlink from the scraping repo output.

## Env vars (in tosi-mini-crm/.env)

- `VITE_SUPABASE_URL` — already set for the CRM frontend
- `SUPABASE_SERVICE_KEY` — for write access (bypasses RLS)

## Typical invocations

### Import default (zona Turati)

\`\`\`bash
cd ~/Projects/TOSI/WEB/tosi-scraping
# Produce enriched_results.json if not already done (see ftb-claudia-prospect-scraping)

cp output/enriched_results.json ~/Projects/TOSI/WEB/tosi-mini-crm/data/enriched_results.json

cd ~/Projects/TOSI/WEB/tosi-mini-crm
npm run import
\`\`\`

The script:
1. Reads JSON from \`../data/enriched_results.json\` (relative to scripts/)
2. For each row:
   - Parses \`citta\` + \`provincia\` from Google's \`formatted_address\`
   - Upserts into \`companies\` by \`google_place_id\` (new row or update existing)
   - Copies enriched fields: phone, email, website, rating, reviews, registry data, menu text
3. Ensures a "Zona Turati" group exists
4. Links each imported company to that group via \`company_groups\`

Safe to re-run — upsert semantics prevent duplicates.

### Import a different zone

The group name is **hard-coded** as "Zona Turati" in \`importGooglePlaces.js\`. For a new zone:

1. Open \`scripts/importGooglePlaces.js\`
2. Find the line \`const GROUP_NAME = 'Zona Turati';\` (or equivalent)
3. Change to \`'Zona Navigli'\` / \`'Zona Roma Trastevere'\` / whatever
4. Run \`npm run import\`

The script auto-creates the group if it doesn't exist. Imported prospects are assigned to the new group. Existing prospects already imported under "Zona Turati" are untouched (upsert only updates their data fields, not group membership).

**Alternative**: edit the script to accept a CLI arg like \`node scripts/importGooglePlaces.js --group "Zona Roma"\`. Small enhancement, worth doing if you import multiple zones regularly.

### Verify what was imported

\`\`\`sql
-- In Supabase SQL Editor
SELECT COUNT(*) FROM companies WHERE data_source = 'google_places';
SELECT citta, COUNT(*) FROM companies
  WHERE data_source = 'google_places'
  GROUP BY citta
  ORDER BY 2 DESC;
SELECT name, COUNT(cg.company_id) FROM groups g
  LEFT JOIN company_groups cg ON cg.group_id = g.id
  GROUP BY g.id, g.name
  ORDER BY 2 DESC;
\`\`\`

Or just open the CRM dashboard — the new prospects appear in the table immediately.

## After import — pipeline next steps

Once prospects are in Supabase, the pipeline continues:

1. **Menu extraction** → `ftb-claudia-menu-extraction` populates \`menu_structured\` for each prospect with a website. Only prospects with a menu become eligible for Claudia emails.
2. **Website profiling** → `ftb-claudia-website-profiling` fills \`companies.website_profile\` with filosofia/style/supplier mentions.
3. **Briefing cards** → `ftb-claudia-briefing-cards` synthesizes CRM data + menu + profile into a card for Claudia.
4. **Email generation** → `ftb-claudia-email-generator` writes cold emails using the briefing card.

Each step is gated by the presence of the previous. Menu extraction needs a website. Briefing needs menu (optional profile). Email needs briefing (optional but strongly recommended).

## Idempotence guarantees

| Re-run trigger | What happens |
|---|---|
| Same \`google_place_id\` already in DB | UPDATE existing row (refresh phone, email, reviews, etc.) |
| New \`google_place_id\` | INSERT new row with \`contact_status='Non Contattato'\` |
| Group "Zona X" already exists | Reuse it, skip creation |
| Row already in group | Skip re-linking (no duplicate in \`company_groups\`) |

This means you can run \`npm run import\` multiple times after incremental scraping rounds, and only new prospects are added.

## Related skills

- **`ftb-claudia-prospect-scraping`** — produces the \`enriched_results.json\` that this skill imports (previous step)
- **`ftb-claudia-menu-extraction`** — next step after import for prospects with websites
