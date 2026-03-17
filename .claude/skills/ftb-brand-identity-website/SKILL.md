---
name: ftb-brand-identity-website
description: >
  Complete design system and brand identity for the Food Tech Bootcamp website.
  Use when building, styling, reviewing, or writing content for the FTB website.
  Covers: Materic color palette, typography (Syne/DM Sans/JetBrains Mono),
  logo specs, section-by-section layout, components, motion, photography,
  accessibility, performance targets, draft copy, and content roadmap.
  Also use when making any visual or brand decision for FTB — this is the
  single source of truth.
---

# FTB Website — Brand Identity & Design System

## Purpose

Single authoritative reference for building the Food Tech Bootcamp website. Every design decision, every component, every pixel — check it against this document. If code contradicts this document, the code is wrong.

---

## What You're Building

A one-page website for a lab. Not an agency. Not a startup. Not a consultancy.

**Reference site:** [andonlabs.com](https://andonlabs.com/) — same energy. Bold statement, show the work, partner logos, join or contact. No fluff, no services catalog, no pricing.

**The structure is fixed:**

1. Hero (statement + sector ticker)
2. The Work (project grid)
3. The Mission (manifesto)
4. Partners & Collaborators
5. The Founder
6. What's New (blog/updates)
7. Contact / Join
8. Footer

No subpages except project detail pages and blog posts. Mobile-first. Fast. Zero bloat.

---

## Design Principles

Six named principles. Memorize them. They resolve every ambiguous decision.

**1. Dark-First.** The lab environment is dark. `#0A0A0A` default. Light sections (Caglio `#F2EBE0`) are contrast breaks — never more than 40% of the page.

**2. Typography as Architecture.** Headlines carry the weight of carved stone. Not decorative — structural. The words breathe. Space is generous.

**3. Photography > Illustration.** No icons, no illustrations, no emoji. Real editorial photography of Italian artisanal production across ALL sectors. Generated images (Nano Banana) are interim — the goal is always real photography.

**4. Space = Confidence.** Generous margins. Generous line heights. Generous padding. A lab that knows what it's doing doesn't fill every pixel. Empty space says: we have nothing to prove and everything to show.

**5. The Work Speaks First.** The project grid is visible within the first scroll. No "about us" before showing work. Statement → Work → everything else.

**6. One Language, Done Right.** English primary. The audience that matters now (Anthropic, UNISG international, EU evaluators) reads English. Italian producers come through the network. Exception: the manifesto line and sector keywords stay in Italian — they're more powerful in the original language.

---

## Identity

### Name

**Food Tech Bootcamp** — always written in full for headers and formal use. A bootcamp is intensive, practical, hands-on. That's the lab — whether the "student" is a caseificio owner learning AI, a gastronomy graduate building a product, or an AI model learning to understand risotto. Bootcamp is a method, not a school.

Short forms: **FTB** or **FTB Lab** — acceptable for labels, navigation, favicon, metadata.

### Tagline

Primary (hero, meta description, OG tags):

> **Where food knowledge becomes computable.**

Alternatives (rotate in social, presentations, project pages):

> "AI per l'artigianalità italiana."
> "Making food intelligence programmable."
> "The lab where food meets AI."

### Manifesto Line

Always in Italian. Always italic. Never translated.

> _Il progresso che cancella ciò che siamo non è progresso._

---

## What This Site Is NOT

These elements were deliberately killed in the rebrand. Do not reintroduce them.

- ❌ Service catalog, pricing page, or "what we offer" section
- ❌ Multi-page navigation (Services, Companies, About, etc.)
- ❌ "How We Work" methodology section
- ❌ Venture Builder as a separate section or page
- ❌ Talent Pool page or "Join the FTB Pool" section
- ❌ FAQ page
- ❌ Newsletter signup form
- ❌ Italian/English language toggle
- ❌ Emoji decorations in headers or copy
- ❌ "For Companies" separate page
- ❌ Anonymous "— The Founder" signature (use real name)
- ❌ Any sentence a generic digital agency could say about themselves

**Why:** A lab doesn't sell services. It does work and shows it. A services page says "hire us." A project grid says "look what we built." The second is infinitely more powerful.

---

## Logo

### Design Intent

The logo should feel like a maker's mark — something branded, stamped, carved. Not a tech logo. Not a food logo. The mark of someone who builds things at the intersection.

### The Mark

A **leaf-and-circuit mark** — a stylized leaf shape containing organic stems that terminate in circuit-node dots. Nature meets computation. Craft meets technology. The organic form dominates; the tech elements are embedded within it, not imposed on top.

**The logo must never be:**

- Distorted, stretched, or rotated
- Placed on busy backgrounds without sufficient contrast
- Smaller than 24px height on screen
- Modified with effects (drop shadows, glows, gradients not in the system)

### Logo Variations

| Variant                      | Use Case                                | Description                                                                             |
| ---------------------------- | --------------------------------------- | --------------------------------------------------------------------------------------- |
| **Primary**                  | Default. Light/neutral backgrounds.     | Two-tone: Rame green (`#4A7C59`) leaf + Terra Bruciata (`#A0522D`) secondary leaf/stems |
| **Monochrome (Charcoal)**    | Dark applications, single-color print   | Carbone (`#2C2A28`) on light backgrounds                                                |
| **Reverse**                  | Dark backgrounds (`#2C2A28`, `#0A0A0A`) | Caglio (`#F2EBE0`) on dark                                                              |
| **Fired Earth (Accent)**     | Warm contexts, food-forward layouts     | Terra Bruciata (`#A0522D`) monochrome                                                   |
| **Oxidized Copper (Accent)** | Tech-forward contexts, data sections    | Rame (`#4A7C59`) monochrome                                                             |

### Logo + Wordmark

- Mark sits left of or above the wordmark
- Wordmark: **"FOOD TECH BOOTCAMP"** in Syne, all caps, tracked wide
- Minimum clear space: 1× the width of the circuit-node dot
- Dark backgrounds: Reverse mark + Caglio wordmark
- Light backgrounds: Primary mark + Carbone wordmark

### Favicon & Small Contexts

Leaf mark alone (no wordmark) at sizes below 48px. Fall back to Monochrome if color reproduction is unreliable.

---

## Color System — Materic Palette

Every color has a physical origin. This is a maker's palette on screen.

### Primary Palette

| Token             | Name           | Hex       | RGB           | Source                                  | Use                                       |
| ----------------- | -------------- | --------- | ------------- | --------------------------------------- | ----------------------------------------- |
| `--color-carbone` | Carbone        | `#2C2A28` | 44, 42, 40    | Burri's Combustioni — charcoal, ash     | Primary text, dark backgrounds            |
| `--color-terra`   | Terra Bruciata | `#A0522D` | 160, 82, 45   | Burnt sienna — fired earth, kiln heat   | **Primary accent**, headings, CTAs, links |
| `--color-crosta`  | Crosta         | `#C4956A` | 196, 149, 106 | Aged cheese rind, tanned leather        | Secondary accent, warm neutral, borders   |
| `--color-caglio`  | Caglio         | `#F2EBE0` | 242, 235, 224 | Raw milk, fresh curd, unbleached canvas | Light backgrounds, paper texture          |
| `--color-rame`    | Rame           | `#4A7C59` | 74, 124, 89   | Oxidized copper vats, verdigris patina  | Data/tech accent, code, tags, badges      |
| `--color-lava`    | Lava           | `#B8372A` | 184, 55, 42   | Volcanic red — Lanzarote, Manrique      | **Urgent accent only.** Max 2 per page.   |

### Extended / Utility

| Token                    | Hex                         | Use                                            |
| ------------------------ | --------------------------- | ---------------------------------------------- |
| `--bg-dark`              | `#0A0A0A`                   | Hero, dark full-bleed sections                 |
| `--bg-dark-mid`          | `#0D0D0D`                   | Card backgrounds on dark sections              |
| `--bg-dark-surface`      | `#1A1A1A`                   | Elevated surfaces (project cards, code blocks) |
| `--text-dark-primary`    | `#F2EBE0`                   | Primary text on dark (Caglio)                  |
| `--text-dark-secondary`  | `#C4956A`                   | Secondary text on dark (Crosta)                |
| `--text-light-primary`   | `#2C2A28`                   | Primary text on light (Carbone)                |
| `--text-light-secondary` | `#6B5E53`                   | Secondary text on light (muted Carbone)        |
| `--border-subtle`        | `rgba(196, 149, 106, 0.15)` | Subtle dividers                                |
| `--border-medium`        | `rgba(196, 149, 106, 0.3)`  | Card borders                                   |
| `--border-strong`        | `rgba(196, 149, 106, 0.5)`  | Hover borders                                  |

### Color Rules

1. **Terra Bruciata is the primary accent.** Headings on dark, CTA buttons, link hover states, sector ticker, active nav.
2. **Rame (green) is the tech accent.** Code snippets, monospace labels, data visualizations, "Research" badge.
3. **Lava (red) is emergency only.** Maximum 2 instances per page. Never for buttons or headings.
4. **Never pure white (`#FFFFFF`).** Use Caglio (`#F2EBE0`).
5. **Never pure black (`#000000`).** Darkest is `#0A0A0A`. Text is Carbone (`#2C2A28`).

### CSS Variables

```css
:root {
  --color-carbone: #2c2a28;
  --color-terra: #a0522d;
  --color-crosta: #c4956a;
  --color-caglio: #f2ebe0;
  --color-rame: #4a7c59;
  --color-lava: #b8372a;
  --bg-dark: #0a0a0a;
  --bg-dark-mid: #0d0d0d;
  --bg-dark-surface: #1a1a1a;
  --bg-light: #f2ebe0;
  --bg-light-surface: #ede5d8;
  --text-dark-primary: #f2ebe0;
  --text-dark-secondary: #c4956a;
  --text-dark-muted: rgba(242, 235, 224, 0.5);
  --text-light-primary: #2c2a28;
  --text-light-secondary: #6b5e53;
  --text-light-muted: rgba(44, 42, 40, 0.5);
  --border-subtle: rgba(196, 149, 106, 0.15);
  --border-medium: rgba(196, 149, 106, 0.3);
  --border-strong: rgba(196, 149, 106, 0.5);
}
```

---

## Typography

| Role          | Font               | Fallback                 | Weight   | Notes                                                                                                |
| ------------- | ------------------ | ------------------------ | -------- | ---------------------------------------------------------------------------------------------------- |
| **Headlines** | **Syne**           | system-ui, sans-serif    | 700–800  | Geometric, wide, architectural. All-caps for hero/section titles. `letter-spacing: 0.02em` for caps. |
| **Body**      | **DM Sans**        | system-ui, sans-serif    | 400, 500 | Humanist, warm. `line-height: 1.6` body, `1.4` captions.                                             |
| **Monospace** | **JetBrains Mono** | 'Courier New', monospace | 400      | Code, labels, tags, sector ticker. Ligatures on.                                                     |

**Alternatives if needed:** Headlines: PP Neue Montreal, Suisse Intl Extended, Monument Extended. Body: Satoshi, General Sans, Söhne.

### Type Scale (Perfect Fourth — 1.333)

| Token         | Size            | Use                            |
| ------------- | --------------- | ------------------------------ |
| `--text-xs`   | 0.75rem (12px)  | Captions, timestamps, legal    |
| `--text-sm`   | 0.875rem (14px) | Labels, tags, secondary info   |
| `--text-base` | 1rem (16px)     | Body text                      |
| `--text-lg`   | 1.125rem (18px) | Lead paragraphs, intro text    |
| `--text-xl`   | 1.333rem (21px) | Sub-headings (H3)              |
| `--text-2xl`  | 1.777rem (28px) | Section headings (H2)          |
| `--text-3xl`  | 2.369rem (38px) | Page headings (H1 on subpages) |
| `--text-4xl`  | 3.157rem (50px) | Hero statement                 |
| `--text-5xl`  | 4.209rem (67px) | Hero title                     |

Scale `--text-4xl` and `--text-5xl` down ~30% on mobile.

### Typography Rules

1. Hero title: Syne ExtraBold, `--text-5xl`, all-caps, `letter-spacing: 0.04em`, Caglio on dark.
2. Hero tagline: DM Sans Medium, `--text-lg`, sentence case, Crosta on dark.
3. Section headings: Syne Bold, `--text-2xl`, Terra Bruciata on dark, Carbone on light.
4. Project card titles: Syne Bold, `--text-xl`, sentence case, Caglio on dark cards.
5. Project card questions: DM Sans Regular, `--text-base`, italic, Crosta.
6. Body text: DM Sans Regular, `--text-base`, `line-height: 1.6`, max-width `65ch`.
7. Monospace labels: JetBrains Mono, `--text-sm`, Terra Bruciata or Rame.
8. Manifesto line: DM Sans, `--text-lg`, italic, Terra Bruciata. Always Italian.
9. Numbers: Always digits. `300,000` (English) or `300.000` (Italian).

---

## Spacing & Layout

### Grid

- **Desktop (≥1280px):** 12-column, `max-width: 1280px`, gutters `24px`, page padding `80px`
- **Tablet (768–1279px):** 8-column, gutters `20px`, padding `48px`
- **Mobile (<768px):** 4-column, gutters `16px`, padding `20px`

### Section Spacing

| Token           | Value                      | Use                              |
| --------------- | -------------------------- | -------------------------------- |
| `--section-gap` | `clamp(80px, 12vw, 160px)` | Between major sections           |
| `--block-gap`   | `clamp(40px, 6vw, 80px)`   | Between blocks within section    |
| `--element-gap` | `24px`                     | Between elements                 |
| `--tight-gap`   | `12px`                     | Between tightly related elements |

### Responsive

| Element          | Desktop          | Tablet           | Mobile               |
| ---------------- | ---------------- | ---------------- | -------------------- |
| Project grid     | 3 columns        | 2 columns        | 1 column, full-bleed |
| Hero title       | `--text-5xl`     | `--text-4xl`     | `--text-3xl`         |
| Section headings | `--text-2xl`     | `--text-2xl`     | `--text-xl`          |
| Nav              | Horizontal links | Horizontal links | Hamburger or scroll  |
| Blog cards       | 3 columns        | 2 columns        | 1 column             |
| Partner logos    | Horizontal row   | Smaller row      | 2×3 grid or scroll   |

---

## Section-by-Section Specification

### 1. Hero

**Background:** `--bg-dark`, full viewport (`100svh`).

**Content stack (centered):**

1. Logo mark (Reverse variant, ~48px)
2. "FOOD TECH BOOTCAMP" — hero title
3. "Where food knowledge becomes computable." — tagline
4. Hero paragraph (`max-width: 55ch`, centered):

> 300,000 artisanal food producers in Italy make the most respected food in the world. 98% compete without digital tools. We build the AI that changes this — for cheesemakers, bakers, olive oil producers, winemakers, and every artisan who refuses to become a factory.

5. "See the work ↓" — scroll CTA with gentle pulse animation

**Sector ticker** below the statement: JetBrains Mono, `--text-sm`, Terra Bruciata at 50% opacity, auto-scrolling left, pauses on hover:

```
caseifici · panifici · frantoi · cantine · norcinerie · pastifici · conservifici · birrifici · apicultura · cioccolateria · oleifici · gelaterie artigianali
```

### 2. The Work (Project Grid)

**Background:** `--bg-dark` or `--bg-dark-mid`.

**Heading:** "We do food intelligence and stuff" — Syne Bold, `--text-2xl`, Caglio.

**Card anatomy:**

```
┌──────────────────────────────────┐
│  [Image — editorial, full-bleed] │
├──────────────────────────────────┤
│  [Tag: monospace, pill-shaped]   │
│  Project Title — Syne Bold       │
│  Question — DM Sans Italic       │
└──────────────────────────────────┘
```

**Card hover:** image `scale(1.03)`, border opacity increase, `0.4s ease`. Cards link to `/projects/[slug]`.

**Tags:** "Experiment" (Rame bg), "Research" (Crosta outline), "Active" (Terra bg), "Upcoming" (Crosta 40%).

**Current cards:**

1. **Tosi AI Sales Agent** — "Can AI sell artisanal gorgonzola to 47 paninerie in Milan?" — Experiment / Active
2. **IMAGINE F&B** — "Can AI accelerate private label product development?" — Experiment
3. **Cooking Intelligence LLM** — "Can we make Michelin-level culinary knowledge computable?" — Research / Upcoming
4. **HACCP Automation** — "Can AI turn food safety compliance from hours into minutes?" — Experiment

Start with 2-3 real cards. Add as projects mature.

### 3. The Mission (Manifesto)

**Background:** `--bg-light` (Caglio). Contrast break.

**Content** (centered, `max-width: 65ch`, Carbone):

> Italy's 300,000 artisanal food producers carry centuries of knowledge in their hands. Cheesemakers who read milk by smell. Bakers who feel dough by touch. Winemakers who taste the season. This knowledge is irreplaceable — and it's disappearing. Not because the products are worse, but because the tools to compete are designed for factories, not workshops.
>
> We build the other tools. AI that speaks the language of the artisan. Technology that amplifies craft instead of replacing it.

**Manifesto line** (set apart, generous top margin):

> _Il progresso che cancella ciò che siamo non è progresso._

### 4. Partners & Collaborators

**Background:** `--bg-dark`.
**Heading:** "Building with" — Syne Bold, `--text-2xl`, Caglio.

Logo row (Caglio monochrome, consistent height ~32-40px, `gap: 48px`).

Below each logo, one line in DM Sans `--text-sm`, Crosta:

- **UNISG Pollenzo** — "Research partner. The world's only university of gastronomic sciences. Our alma mater."
- **Anthropic** — "Technology partner. Creators of Claude, the AI foundation of everything we build."
- **EIT Food** — "EU innovation network for the agri-food sector." _(only when active)_

**If no formal logos yet**, use text-only:

```
Building with
UNISG Pollenzo · Anthropic Claude · EU Innovation Programs
```

JetBrains Mono, `--text-base`, Crosta.

### 5. The Founder

**Background:** `--bg-light` (Caglio). Second contrast break.
**Layout:** Two columns on desktop (photo left, bio right). Photo full-width above bio on mobile.

**Photo:** 3:4 or 4:5 portrait, sharp corners, subtle Crosta border `1px`.

**Bio draft copy:**

> [Name]
> Founder & CTO
>
> UNISG Pollenzo alumnus. Years in the food supply chain — from artisanal production to food safety. Software developer at Cortilia. The rare person who knows the difference between artisanal and industrial gorgonzola AND can build the AI agent that sells one against the other.
>
> Food Tech Bootcamp is my lab. It's where 8 years of learning to code as a gastronome become tools for the people I studied with, grew up with, and build for.
>
> [LinkedIn →]

### 6. What's New (Blog / Updates)

**Background:** `--bg-dark`.
**Heading:** "What's new" — Syne Bold, `--text-2xl`, Caglio.

Reverse chronological cards, 3 columns desktop. Card: image + date (JetBrains Mono `--text-xs` Crosta) + title (Syne Bold `--text-lg` Caglio) + one-line description (DM Sans `--text-sm` Crosta). Cards link to `/blog/[slug]`.

### 7. Contact / Join

**Background:** `--bg-dark`. Centered, simple.

> Get in touch
>
> hello@foodtechbootcamp.com
>
> Are you a gastronome who codes? A developer who loves food? A producer who wants to compete?

No form. No newsletter. Email and a statement.

### 8. Footer

`--bg-dark`, separated by `--border-subtle` top border.
Logo mark (Reverse, ~24px) + "© 2026 Food Tech Bootcamp" + "Milan / Pollenzo, Italy"
DM Sans `--text-xs`, `--text-dark-muted`.

---

## Navigation

**Desktop:** Fixed top bar, transparent over hero → `--bg-dark` with backdrop blur on scroll. Left: logo mark + "FTB" (JetBrains Mono `--text-sm`). Right: "Work · Mission · About · Blog · Contact" (DM Sans Medium `--text-sm`). Active: Terra Bruciata underline. Smooth-scroll anchors with Intersection Observer.

**Mobile:** Fixed top bar. Logo left. Hamburger or single "Contact →" CTA right. If hamburger: full-screen overlay, `--bg-dark`, section links in Syne Bold `--text-2xl`.

---

## Photography & Images

### The Two Tests

1. Would an artisan feel dignified seeing themselves represented this way?
2. Does the technology appear as a tool, not the protagonist?

If either answer is no, reject the image.

### Style

- **Mood:** Editorial/documentary. Food photography meets reportage. Warm light, real environments, real hands, real textures.
- **Subject:** Artisan always the subject. Tech peripheral — background, shelf, hand alongside product.
- **Color grading:** Warm, earthy. Slight desaturation fine. No cold/blue tints.
- **Sectors:** Rotate. Never 2+ consecutive images from same sector.

### Generated Images (Interim)

Until real photography is available:

- Hyper-realistic artisanal production environments
- Italian settings (not industrial)
- Warm, natural lighting
- Hands, backs, profiles — not AI-generated faces
- No logos or text embedded

### Specifications

| Context         | Ratio    | Min Resolution | Format              |
| --------------- | -------- | -------------- | ------------------- |
| Project card    | 16:9     | 800×450        | WebP + JPG fallback |
| Blog card       | 16:9     | 600×338        | WebP + JPG fallback |
| Hero background | Viewport | 1920×1080      | WebP optimized      |
| Founder photo   | 3:4      | 600×800        | WebP + JPG fallback |
| OG / social     | 1200×630 | Exact          | PNG or JPG          |

All images: `loading="lazy"` except hero. Compress aggressively.

---

## Motion & Interaction

Motion is purposeful, never decorative.

### Transitions

```css
--transition-fast: 150ms ease;
--transition-base: 300ms ease;
--transition-slow: 500ms cubic-bezier(0.16, 1, 0.3, 1);
```

### Specific

| Element          | Trigger | Animation                                                                   |
| ---------------- | ------- | --------------------------------------------------------------------------- |
| Project cards    | Hover   | Image `scale(1.03)`, border opacity, `--transition-slow`                    |
| Nav links        | Hover   | Terra underline slides from left, `--transition-base`                       |
| CTA buttons      | Hover   | Background lightens, `translateY(-1px)`, `--transition-fast`                |
| Sector ticker    | Auto    | Continuous scroll, CSS keyframes, pauses on hover                           |
| "See the work ↓" | Auto    | Gentle pulse `translateY(0→8px)`, infinite, `2s`                            |
| Section reveals  | Scroll  | Fade up `opacity 0→1`, `translateY(24→0)`, staggered, Intersection Observer |

### Avoid

- No parallax, no typewriter effects, no bouncing/elastic
- No animation on the manifesto section — let the words be still

---

## Components

### Buttons

**Primary:** `background: var(--color-terra)`, `color: var(--color-caglio)`, DM Sans 500, `--text-sm`, uppercase, `padding: 12px 28px`, `border-radius: 0`. Hover: lighten, `translateY(-1px)`.

**Secondary/Ghost:** Transparent, `border: 1px solid var(--border-medium)`, Caglio text. Hover: border and text → Terra.

**Link Arrow:** Terra text, DM Sans 500, no underline, `→` after. Hover: arrow `translateX(4px)`.

### Tags

JetBrains Mono `--text-xs`, uppercase, `padding: 4px 10px`.

- Active: Terra bg, Caglio text
- Research: Crosta border, Crosta text (outline)
- Tech: Rame bg, Caglio text

### Dividers

`height: 1px`, `background: var(--border-subtle)`. No decorative dividers.

---

## Content Voice — Quick Reference

**Do:** Short sentences (max 20 words for UI). Lead with strongest statement. Concrete images ("la cagliata", "il forno a legna"). Specific numbers (300,000 / 47 / 98%). Use "artigianale", "costruiamo", "strumenti", "lab".

**Don't:** "leverage", "synergy", "ecosystem", "disruptive", "scalable". "Soluzioni innovative", "a 360 gradi". Hedging ("perhaps", "we believe"). Emoji in professional copy. Hashtags. "Intelligenza artificiale" without grounding it in a specific food example.

**Language:** English primary. Manifesto line and sector ticker stay in Italian.

---

## Draft Copy — Project Pages

### Tosi AI Sales Agent (`/projects/tosi-ai-sales`)

**The Question**

> A 3-person commercial team at an artisanal DOP caseificio competes against industrial producers with 30-person sales departments and digital CRM systems. Can an AI agent — built on Claude — level the playing field?

**The Setup**

> 3 humans (all named Andrea) as the commercial team. Claude as the intelligence layer coordinating prospecting, qualification, follow-up, and prioritization. Target: 47 identified paninerie, pizzerie, and gourmet bars in Milan. Product: 1kg cremoso gorgonzola without rind, artisanal DOP.

**The Approach** — [Write after building the system]
**Results** — [Write after Phase 2 data]
**What We Learned** — [Write after Phase 3 analysis]

### Cooking Intelligence LLM (`/projects/cooking-intelligence-llm`)

**The Vision**

> The world's greatest chefs carry knowledge that no textbook captures: how flavors interact, which technique transforms which ingredient, why a recipe works at altitude but not at sea level. This knowledge lives in heads and hands. When a chef retires, it often disappears.
>
> We're building a large language model specialized in culinary intelligence — trained on Michelin menu architectures, chef philosophies, modern techniques, and traditional recipes from every region of Italy. Not a recipe chatbot. A system that reasons about food the way a great chef does.

**The Collaborators**

> UNISG Pollenzo (gastronomic sciences research), Professor Ganesh Bagler (computational gastronomy, New Delhi), artisanal producers contributing real-world recipe development data.

**Status:** Early research. Seeking academic and funding partners.

---

## Content Roadmap

### Week 1: Core Page

1. Hero text (statement + sector ticker)
2. 2 project cards with full project pages (Tosi + HACCP or IMAGINE)
3. Manifesto short version
4. Founder section with photo and real bio
5. Contact info

### Week 2-3: Depth

6. 3rd project card (Cooking LLM as "upcoming research")
7. First blog post: "Why Italian Artisanal Producers Need AI, Not Websites"
8. Partners section (text-based initially, logos when formalized)

### Week 4+: Momentum

9. Blog post after first Tosi experiment results
10. Blog post about Anthropic Ambassador / Milan meetup
11. Project pages expanded with metrics and learnings
12. Real photography replacing generated images

---

## Technical Stack

| Layer      | Technology                    | Notes                                               |
| ---------- | ----------------------------- | --------------------------------------------------- |
| Framework  | Next.js (App Router)          | Static generation for project pages                 |
| Styling    | Tailwind CSS                  | Custom theme with Materic tokens                    |
| Fonts      | Google Fonts / self-hosted    | Subset Latin + Latin Extended. `font-display: swap` |
| Deployment | Vercel                        | Preview deployments on PR                           |
| Blog       | MDX in repo                   | `/content/blog/*.mdx`                               |
| Images     | Next.js `<Image>`             | WebP + JPG fallback, `priority` on hero only        |
| Analytics  | Vercel Analytics or Plausible | No GA4                                              |
| Metadata   | Next.js Metadata API          | OG images, Twitter cards, structured data           |

### Performance Targets

| Metric                   | Target         |
| ------------------------ | -------------- |
| Lighthouse Performance   | ≥95            |
| First Contentful Paint   | <1.2s          |
| Largest Contentful Paint | <2.5s          |
| Cumulative Layout Shift  | <0.1           |
| Total page weight        | <500KB initial |

---

## Project Detail Pages

Route: `/projects/[slug]`. Background: `--bg-dark`. Content: centered, `max-width: 800px`.

```
[← Back to all projects]
[Tag]
# Title
## Question (italic)

### The Question — from the artisan's perspective
### The Setup — team, product, market, AI system
### How It Works — architecture, human-AI coordination
### Results — metrics, charts, honest about failures
### What We Learned — unexpected findings, insights
### What's Next — scaling, other producers
```

H1 = Syne `--text-3xl`, H2 = `--text-2xl`, H3 = `--text-xl`. Body = DM Sans `--text-base`.

---

## Accessibility

- **Contrast:** WCAG AA minimum (4.5:1 body, 3:1 large). Verify Crosta on `#0A0A0A` and Terra on dark.
- **Focus:** `outline: 2px solid var(--color-terra); outline-offset: 2px`. Never `outline: none`.
- **Alt text:** Describe the artisanal process, not "food image."
- **Semantic HTML:** `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`.
- **Skip link:** Hidden before nav, visible on focus.
- **Reduced motion:** Respect `prefers-reduced-motion` — disable ticker, reveals, hover animations.

---

## Deployment Checklist

- [ ] All colors match Materic palette (no `#FFFFFF`, `#000000`, or `#E85D26`)
- [ ] Hero loads <1.5s on 4G
- [ ] All images have descriptive alt text
- [ ] OG image + meta description set per page
- [ ] Favicon is the leaf mark
- [ ] Manifesto line in Italian and italic
- [ ] Sector ticker shows ≥8 sectors
- [ ] ≥2 real project cards (not placeholders)
- [ ] No lorem ipsum anywhere
- [ ] Mobile: all sections readable, full-bleed images, no overflow
- [ ] Lighthouse ≥95
- [ ] WCAG AA contrast passes
- [ ] `prefers-reduced-motion` respected
- [ ] Project detail page links work
- [ ] Contact email is `mailto:`
- [ ] Footer year is dynamic
- [ ] No killed elements reintroduced (see "What This Site Is NOT")
