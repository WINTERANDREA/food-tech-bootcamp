---
name: ftb-claudia-briefing-cards
description: >
  On-demand invocation of the briefing card generator for Tosi prospects. Use
  when the user asks to "genera briefing card per X", "batch briefing sui 15",
  "rigenera briefing di Y", "crea scheda prospect Z", "quanti prospect hanno
  ancora la briefing da fare?". Claude synthesizes CRM data + menu + website
  profile into a structured card (angolo d'approccio, gesto suggerito, priorità,
  red flags) that feeds Claudia's email generator. Runs via Agent SDK in
  subscription mode (€0 real). Writes to briefing_cards table in Supabase with
  versioning — v1, v2, ... for successive refinements.
---

# Briefing Cards — synthesize CRM + menu + profile into a prospect scheda

Third AI-powered step of the Tosi pipeline (after menu extraction + website
profiling). Reads all the accumulated data about a prospect and produces a
**briefing card**: a structured decision aid that Claudia uses to personalize
her cold email. Without a good briefing, Claudia falls back to generic — with
a good briefing, she lands specific.

## When to invoke

Triggers:
- *"genera briefing card per Pizzeria X"*
- *"batch briefing sui 15 prospect con menu + profilo"*
- *"rigenera briefing di Y con più attenzione a [X]"*
- *"quanti prospect hanno ancora la briefing da generare?"*
- *"crea scheda prospect Z"*
- *"update briefing cards dopo aver rifato i profili"*

## Repo

```
~/Projects/FTB/menu-extraction-agents-sdk_top/
  agents/briefing_cards/agent.py        # single-prospect generator
  batch/batch_cards.py                  # batch runner
  prompts/tosi_briefing.md              # Tosi-specific briefing prompt
  output/tosi/*_briefing.json           # local JSON mirror per prospect
```

Output primario: riga nella tabella `briefing_cards` in Supabase (versionata).
Il CRM dashboard mostra la "Briefing" column verde quando esiste almeno una
briefing per il prospect.

## Auth mode

Subscription-first (€0). Pattern identico a `email_generation`:
1. Legge `companies` row (menu_structured, website_profile, primary_type, google_reviews, …)
2. Legge eventuali briefing precedenti (per versioning)
3. Chiama Claude con `tosi_briefing.md` prompt + dati
4. Parsa JSON output
5. INSERT in `briefing_cards` con `version = latest + 1`

## Typical invocations

### Single prospect

\`\`\`bash
cd ~/Projects/FTB/menu-extraction-agents-sdk_top
python -m agents.briefing_cards.agent 3996 --tosi
\`\`\`

Output:
- Legge company 3996 (Pizzeria Sapò) + menu + profile
- Chiama Claude con prompt Tosi-specific
- Inserisce nuova briefing_card (es. v1 se non esiste, v2 se v1 esisteva)
- Stampa tokens / cost / duration

### Batch — tutti i prospect eligibili (hanno menu, non hanno ancora briefing)

\`\`\`bash
python -m batch.batch_cards --tosi
\`\`\`

Il runner seleziona `companies` con `menu_structured IS NOT NULL` e senza righe in `briefing_cards`, poi itera.

### Rigenerare una briefing esistente (nuova versione v2)

\`\`\`bash
python -m agents.briefing_cards.agent 3996 --tosi --force
\`\`\`

(Aggiungere il flag `--force` al CLI se non esiste già — il pattern attuale crea v2 automaticamente incrementando la version.)

### Solo prospect senza briefing, limite

\`\`\`bash
python -m batch.batch_cards --tosi --limit 10
\`\`\`

## Briefing card schema (content field)

\`\`\`json
{
  "tipo": "paninoteca | pizzeria | focacceria | bistrot | bar | ristorante | hamburgheria",
  "fascia_prezzo": "budget | medio | premium",
  "menu_gorgonzola": "gia_presente | assente | potenziale_alto | potenziale_basso",
  "menu_gorgonzola_reasoning": "perché",
  "presenza_online": "forte | media | debole",
  "angolo_approccio": "THE ANGLE Claudia should use",
  "gesto_suggerito": "caldaia_600l | salatura_mano | cagliata_soffice | fagotto | insacco_tessitura | celle_sottoterra | legno_vivo | tempo_individuale | tutto_fatto_a_mano",
  "gesto_reasoning": "why this gesture for this prospect",
  "priorita": "1-10",
  "priorita_reasoning": "why",
  "primo_contatto": "email | telefono | visita | whatsapp",
  "primo_contatto_reasoning": "why",
  "script_apertura": "1-2 sentence opener Claudia can reuse",
  "red_flags": ["concerns"],
  "leve_vendita": ["zero_scarto | tmc_30gg | vaschetta_richiudibile | non_serve_scaldarlo | differenza_organolettica"]
}
\`\`\`

Format enforced by the Tosi prompt in `prompts/tosi_briefing.md`.

## Current status

Come di 2026-04-17: 0 briefing cards generate. I 15 prospect con menu sono tutti candidati per il primo batch. Dopo il batch profiling, il batch briefing è il passo successivo — la pipeline pre-pilota.

Query per lo stato pendente:

\`\`\`sql
SELECT COUNT(*) FROM companies c
WHERE c.data_source = 'google_places'
  AND c.is_out_of_scope = false
  AND c.menu_structured IS NOT NULL
  AND NOT EXISTS (SELECT 1 FROM briefing_cards bc WHERE bc.company_id = c.id);
\`\`\`

## Versioning

La tabella `briefing_cards` ha un vincolo `UNIQUE(company_id, version)`. Ogni rigenerazione crea una nuova versione, mai overwrite. Il CRM mostra sempre la **latest version** (max version per company_id). Questo permette di:
- Confrontare v1 vs v2 per capire come cambia l'angolo d'approccio
- Ripristinare v1 se v2 è peggiorato (manualmente, via SQL)
- Tracciare l'evoluzione del Voice Twin → briefing → email al crescere del feedback

## Feedback loop

Il campo `briefing_cards.feedback` può contenere note di Andrea M / Andrea C. Se la v1 esiste con feedback, il generatore della v2 lo legge come contesto aggiuntivo (stesso pattern di email regeneration con feedback).

## Dipendenze

Una buona briefing card richiede:
- ✓ **menu_structured** (critico) — altrimenti niente personalizzazione su piatti
- Optional ma consigliato: **website_profile** — per filosofia/stile
- Optional: **google_reviews** (già in CRM da scraping)
- Optional: **primary_type** (Google Places default) — per il default gesto

Se solo **menu_structured** esiste, la briefing viene comunque generata ma è più generica sul "who they are".

## Cost profile

- Singolo prospect: ~$0.05-0.10 "would-have-been"
- Batch 15 prospect: ~$1-1.50 "would-have-been"
- Actual con subscription: €0

## Related skills

- **`ftb-claudia-menu-extraction`** — input critico
- **`ftb-claudia-website-profiling`** — input opzionale ma consigliato
- **`ftb-claudia-email-generator`** — **consumer** della briefing (reads briefing_cards latest version when writing email)
