# TOSI AI Sales Agent — Proposal

**Prepared for Andrea Tosi, Caseificio Tosi**
**By Food Tech Bootcamp — March 2026**

---

## The Problem

You make the best gorgonzola in the world. Your commercial team — 3 people — can't outreach 47 targets in Milan while also managing existing clients, doing tastings, and building relationships. Industrial competitors have 30-person sales departments. You have talent, product, and passion. What you don't have is scale.

## What We're Building

An AI sales coordinator that works inside your existing CRM. Not a chatbot. Not automation. A coordinator that:

- **Researches every prospect** — menu style, price range, social presence, what cheese they currently use, best approach angle
- **Writes briefing cards** — one page per prospect, so each Andrea walks in prepared
- **Prioritizes outreach** — ranks the 47 targets by conversion likelihood, tells each Andrea who to call today and why
- **Drafts personalized emails** — from `hello@tosigorgonzola.com`, in your voice, ready for review before sending
- **Tracks the pipeline** — every call, visit, tasting logged. AI suggests when and how to follow up
- **Learns from results** — what messaging works, which zones are hot, where to pivot

The 3 Andreas stay in control. They review every email before it's sent. They decide whether to follow the AI's suggestion or override it. The AI does the homework. The humans do the handshake.

---

## The 5 Phases

### Phase 0 — Baseline (Week 1-2)

**What happens:** We measure how things work today, without AI. How many contacts per week? How long per prospect? What's the conversion rate?

**Why it matters:** This is the "before" photo. Without it, we can't prove the "after."

**What we need from you:**
- 15-minute interview with each Andrea about their current process
- Access to any existing sales tracking (even if it's just notes)

**Deliverable:** Baseline metrics documented. Database ready for AI features.

---

### Phase 1 — Voice Twin + Briefing Cards (Week 3-5)

**What happens:** We build a **Voice Twin** of the master artisan — in plain language: an AI that learns *how the master talks* and *how the master decides* (tone, recurring objections, what they'd never say, what they consider a good customer), grounded in your products, your story, your market positioning, and your competitors. In the Tosi case, the master is Andrea Tosi himself. Then we use the Voice Twin to generate intelligence briefing cards for all 47 Mondo Panini targets.

> **Terminology note.** We deliberately avoid the phrase "digital twin" — that term comes from heavy industry (Tesla, NVIDIA Omniverse) and implies real-time sensor telemetry from a physical object. What we're capturing here is the tacit knowledge of a master artisan, so "Voice Twin" is the accurate description: the system twins the **voice** and decision criteria, nothing more. The "master" role is a parameter — today it's Andrea Tosi, tomorrow it could be another producer or an external sales specialist whose voice proves to work better for the same product.
>
> **The agent's name is Claudio.** Claudio is the Italianization of Claude (Anthropic's model, which powers the stack). The name makes the tech visible: Anthropic's intelligence, rendered Italian for an Italian artisan. Three-layer model: **Claudio** is the *who* (the agent that writes emails, reads menus, generates briefing cards, makes calls); the **Voice Twin** is the *what* (how the master talks and decides); the **Master** is *whose voice* is captured (Andrea Tosi, in this case). Named after Claudio Monteverdi — the composer who built the Baroque future *inside* the Renaissance tradition, which is our manifesto in one name.

**What a briefing card looks like:**

```
PROSPECT: La Panineria del Corso
ADDRESS: Via del Corso 15, Milano (Zona 1)
MENU TYPE: Gourmet panini, craft beer
PRICE RANGE: €8-12 per panino
CURRENT CHEESE: Industrial gorgonzola (from menu analysis)
SOCIAL PRESENCE: 2.4K Instagram followers, 4.3 Google rating
APPROACH ANGLE: Their "Autunno" panino uses gorgonzola — perfect
               entry for cremoso DOP tasting. Mention seasonal menu.
PRIORITY: 8/10 — High menu alignment, artisanal positioning,
          delivery-friendly zone
ASSIGNED TO: Andrea C.
```

**What you get:** 47 cards like this. Each Andrea walks into every meeting knowing the prospect better than they know themselves.

**What we need from you:**
- Product technical sheets (already have most of them)
- Your competitive positioning — what makes Tosi different in 2 sentences
- Review of 3-4 sample cards to calibrate the AI's tone

---

### Phase 2 — Pipeline Tracking + Follow-ups (Week 6-8)

**What happens:** The CRM becomes a live pipeline tracker. Every call, visit, WhatsApp message gets logged. The AI analyzes each interaction and suggests what to do next.

**What it looks like in the CRM:**
- A pipeline board: New → Contacted → Meeting Scheduled → Tasting Done → Negotiating → Won/Lost
- After logging a call: AI says "Follow up in 3 days with a tasting offer. This prospect mentioned they're changing suppliers in April."
- Daily priority list for each Andrea: "Today, call these 5 prospects. Here's why."

**What you get:** No prospect falls through the cracks. Every follow-up happens on time. The AI remembers what each Andrea forgot to write down.

**What we need from you:**
- The team uses the CRM for logging (takes 30 seconds per interaction)
- Weekly 10-minute check-in to review pipeline status

---

### Phase 3 — Email Outreach (Week 9-12)

**What happens:** The AI drafts personalized outreach emails for each prospect, sent from `hello@tosigorgonzola.com`. Every email is reviewed by an Andrea before sending.

**How it works:**
1. AI generates a draft based on the prospect's briefing card and any prior interactions
2. Andrea reviews: approve, edit, or reject
3. One click to send
4. Delivery tracked (sent, opened)
5. Automatic interaction log created

**Example email the AI might draft:**

> Subject: Il cremoso che mancava al vostro menu autunnale
>
> Buongiorno,
>
> Ho visto il vostro panino "Autunno" — gran combinazione con la zucca e le noci.
> Noi del Caseificio Tosi produciamo un gorgonzola cremoso DOP da 1kg senza crosta,
> stagionato 90 giorni su assi di legno. Fermentazione naturale, niente stampi industriali.
>
> Se vi interessa assaggiarlo, posso passare con un campione questa settimana.
> Siamo a Cologno al Serio ma serviamo già tutta Milano.
>
> A presto,
> Andrea

**What you get:** Professional, personalized outreach at scale. Each email sounds like Andrea wrote it — because the AI learned his voice.

**What we need from you:**
- Confirm we can send from `hello@tosigorgonzola.com`
- Review and approve emails before they go out (always)

---

### Phase 4 — Measurement + Results (Week 13-16)

**What happens:** We stop building and start measuring. 4 weeks of pure data collection. Then we compile the results.

**What we measure:**
- Contacts per week (baseline vs. AI-assisted)
- Response rate to outreach
- Meetings and tastings booked
- Conversions (new clients acquired)
- Time saved per Andrea
- AI accuracy (how often the team followed suggestions, and what happened when they didn't)

**What you get:**
- A metrics dashboard in the CRM showing before/after
- A full case study documenting the experiment
- If it works: a system that keeps running and improving
- If it doesn't: honest documentation of why, and what we learned

---

## What This Costs

| Item | Monthly Cost |
|------|-------------|
| Supabase (database + hosting) | Free tier |
| Claude API (AI intelligence) | ~€15-20 |
| Resend (email sending) | Free tier (100/day) |
| CRM hosting (Vercel) | Free tier |
| **Total infrastructure** | **~€20/month** |

The main investment is time: ~10-15 hours/month from the FTB lab to build and maintain the system.

---

## What Andrea Tosi Gets

After 16 weeks, Caseificio Tosi has:

1. An AI that knows every prospect better than any salesperson could manually research
2. Briefing cards with personalized approach strategies for all 47 targets
3. A pipeline tracker showing exactly where each prospect stands
4. AI-drafted emails ready for one-click approval
5. A daily priority list telling each Andrea who to call and why
6. A metrics dashboard proving (or disproving) the AI's value
7. A published case study positioning Tosi as an innovation-forward producer

The AI does the work of a full-time sales analyst. The 3 Andreas keep doing what they do best: walking in the door, opening the gorgonzola, and letting the product speak.

---

## What We Need From Tosi

| What | When | Time Required |
|------|------|--------------|
| Baseline interview (3 Andreas) | Phase 0 | 15 min each |
| Product technical sheets | Phase 1 | Already have most |
| Review 3-4 sample briefing cards | Phase 1 | 20 min |
| Confirm email sending permission | Phase 3 | 5 min |
| Weekly pipeline check-in | Phase 2-4 | 10 min/week |
| Case study permission | Phase 4 | Written consent |

---

## Timeline

```
April 2026          May 2026            June 2026           July 2026
|----- Phase 0 -----|----- Phase 1 -----|----- Phase 2 -----|- Phase 3 → ...
  Baseline             Briefing Cards      Pipeline            Email +
  + Database           + Voice Twin         + Follow-ups        Coordinator

                     First AI output      Live pipeline        Full system
                     in CRM               tracking             operational
```

---

## The Bigger Picture

This experiment isn't just about selling gorgonzola to 47 paninerie. If it works, the same system works for any artisanal producer in Italy — frantoi, panifici, cantine, norcinerie. Tosi becomes the first case study. The proof that AI can level the playing field for artisans competing against industrial scale.

We document everything. We publish the results — wins and failures. And Tosi gets recognized as the producer who proved it first.

---

*Food Tech Bootcamp — Making food knowledge computable.*
*Contact: andrea@foodtechbootcamp.com*
