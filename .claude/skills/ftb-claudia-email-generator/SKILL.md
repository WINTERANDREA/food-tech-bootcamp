---
name: ftb-claudia-email-generator
description: >
  On-demand invocation of Claudia (the Tosi AI sales agent) to generate cold-email
  drafts for prospects. Use when the user asks to "generate email for prospect X",
  "fai un batch di email Claudia", "regenerate with feedback", "genera email pilota
  per i primi 10", "Claudia scriva a pizzeria X". Claudia reads company + menu +
  website profile + briefing card from Supabase, writes the draft via Claude Agent
  SDK in subscription mode (€0 real cost), and inserts the draft into email_drafts
  with status='pending_review' so it lands in the CRM /review queue for human
  approval. Claudia NEVER sends — drafts only. Complements the Vercel UI button
  (API-key based) by giving the user a fast, free CLI path for batch operations
  and ad-hoc regeneration.
---

# Claudia Email Generator — On-demand invocation

Tosi's AI sales agent. You can invoke her from Claude Code when the user wants to
generate or regenerate cold-email drafts without clicking the UI button.

## When to invoke

Triggers from the user:
- *"genera email per company 3996"*
- *"fammi partire un batch Claudia sui primi 10 prospect"*
- *"rigenera email per Pizzeria X con questo feedback: …"*
- *"Claudia scrive a questo locale"*
- *"batch email su tutti i prospect con briefing e senza draft pending"*
- *"resume dei rejected con feedback"*
- *"quanti prospect sono eligibili per email oggi?"*

When the user just wants to discuss strategy, voice twin, or review/approve drafts
already in the queue → don't invoke this skill, work in conversation.

## Repo

```
~/Projects/FTB/menu-extraction-agents-sdk_top/
  agents/email_generation/agent.py       # single-prospect generator
  batch/batch_emails.py                  # batch runner
  prompts/tosi_voice_twin_v02.md         # system prompt Claudia reads
  shared/tracker.py                      # subscription/API routing tracker
```

All commands must be run from the repo root `~/Projects/FTB/menu-extraction-agents-sdk_top/`.

## Auth mode

Subscription-first by default — uses the Claude subscription at €0 real cost and
tracks "would-have-been" API cost for the Anthropic partnership pitch metrics.
Falls back to API key if the monthly 80% subscription quota is exceeded. To force
API mode for one run, append `--force-api`.

## Typical invocations

### Generate a single draft for a specific prospect

```bash
cd ~/Projects/FTB/menu-extraction-agents-sdk_top && source venv/bin/activate
python -m agents.email_generation.agent 3996
```

Output:
- Reads company 3996 (Pizzeria Sapò) + menu + profile + latest briefing card
- Calls Claude with Voice Twin v0.2 system prompt
- Parses `{subject, body}` JSON output
- Inserts into `email_drafts` table (status='pending_review')
- Prints: tokens, cost, draft_id

### Regenerate with reviewer feedback

```bash
python -m agents.email_generation.agent 3996 \
  --feedback "Troppo formale. Usa il gesto della salatura invece della caldaia." \
  --regenerate-from 12
```

The feedback is injected as context in the prompt and saved on the new draft row
so the audit trail shows what drove the v2 generation.

### Batch — first 10 pilot prospects

```bash
python -m batch.batch_emails --tosi --limit 10
```

Picks prospects that have:
- `menu_structured` populated in Supabase
- at least one briefing_card
- NO draft in `pending_review` already (avoid duplicates)

### Batch — regenerate all rejected drafts

After a review round where several drafts were rejected with feedback, run:

```bash
python -m batch.batch_emails --tosi --resume-rejected
```

For each rejected draft (latest per company), Claudia reads the feedback and
produces a v2 in pending_review.

### Force regeneration on a specific prospect (skip the "no pending draft" guard)

```bash
python -m batch.batch_emails --company-id 3996 --force
```

## What happens in Supabase

For each successful generation, a new row in `email_drafts`:

| Column | Value |
|---|---|
| `company_id` | target prospect |
| `briefing_card_id` | latest card id (nullable) |
| `subject` | Claudia's subject |
| `body` | Claudia's body (with `\n` line breaks) |
| `prompt_version` | `voice-twin-v0.2` |
| `status` | `pending_review` |
| `feedback` | reviewer feedback if regenerating (nullable) |
| `generated_at` | `NOW()` |

**Claudia never sets `approved_by`, `sent_by`, `sent_at` or changes the company's
`contact_status`**. Those fields are touched only by the human approval/send flow
in the CRM UI.

## Environment variables (in menu-extraction repo's `.env`)

Required:
- `SUPABASE_URL` (or `VITE_SUPABASE_URL`)
- `SUPABASE_SERVICE_KEY` (or `VITE_SUPABASE_ANON_KEY` — service key preferred for RLS bypass)

Optional:
- `ANTHROPIC_API_KEY` — used only when subscription quota is exceeded or `--force-api` is passed

## Prompt editing

If Andrea wants to tune Claudia's voice, edit `prompts/tosi_voice_twin_v02.md`
directly. The agent reads this file at runtime — no code change needed.

When making a material voice change (not just a typo), bump the version:
1. Rename to `tosi_voice_twin_v03.md`
2. Update `PROMPT_VERSION` constant in `agents/email_generation/agent.py`
3. Also sync `frontend/api/_prompts/voiceTwinV02.ts` in the CRM repo if the UI
   button path is still enabled — otherwise it drifts from the CLI version.

## Output interpretation

A successful run prints:

```
--- Generating email for #3996 Pizzeria Sapò Milano (subscription) ---
  Briefing card v2 loaded

  Subject: Una vaschetta da provare sulle vostre pizze
  Body: Buongiorno,\n\nmi chiamo Claudia. Scrivo per il Caseificio Tosi...
  Tokens: 5,432 | Cost: $0.0200 | 3.2s
  ✅ Draft saved — email_drafts.id = 42
```

If you see `❌ JSON parse failed`, Claude returned non-JSON. Usually the prompt
needs tightening. Re-run once — subscription means retry is free.

## When NOT to use this skill

- When the user is in the **review queue approving drafts** — that's UI work, no
  skill needed.
- When the user is **editing the Voice Twin prompt itself** — edit the `.md` file
  directly, don't invoke Claudia.
- When Claudia needs to **send emails autonomously** — out of scope. Sending is a
  human approval action in the CRM, always. The Fase 1 rule *"Claudia non ha mai
  la mano sul bottone invia"* is non-negotiable.
- When discussing **which prospects to target** — that's strategy, discuss in chat.

## Complementary skills

- `ftb-tosi-experiment` — architecture, voice design, phase roadmap. Load when
  designing Claudia, not when invoking her.
- `ftb-voice-ceo` — voice rules + Andrea CEO substance. Load when editing the prompt file.
