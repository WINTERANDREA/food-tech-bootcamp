---
name: ftb-roadmap-2026-2027
description: >
  FTB master roadmap 2026-2027 — phased execution plan with target numbers,
  cash flow projections, fiscal decision tree (forfettario vs SRL vs doppia
  entità), Partner Network buildup, explicit "do-not-do" list, and the three
  strategic directions for 2027 (Apprendista digitale / Terroir AI /
  Computational Gastronomy Lab). Use when the user asks about phase
  priorities, long-term planning, cash flow, fiscal regime, partner network
  recruiting, the verticali primario/secondario distinction (PMI food
  Lombardia + Consorzi DOP/IGP), when a client/project fits the strategy
  or should be refused, or when a "do I accept this?" decision needs the
  "cosa NON faccio" list. Complements ftb-strategy (partnerships + funding
  pipeline stay there). DO NOT LOAD for Tosi day-to-day execution or
  technical tasks — Tosi is the seed, ftb-tosi-experiment is the
  authoritative skill for that.
---

# FTB Roadmap 2026–2027

**Andrea Casero · Food Tech Bootcamp**
*Ultimo aggiornamento: 2026-04-17*

> Documento vivo. Da aggiornare a fine di ogni fase con numeri reali, decisioni prese e scostamenti.

## Premessa strategica

Questa roadmap si basa su tre convinzioni:

1. **Il mercato italiano è in una finestra favorevole**: awareness AI alta, adoption bassa, concorrenza verticale quasi inesistente nel food artigianale e nelle PMI del Nord. La finestra si chiude in 18–24 mesi.
2. **Il valore di Andrea sta nell'intersezione rara** UNISG + 8 anni di sviluppo + metodologia digital twin. Non è replicabile da un vibe coder generico.
3. **Il sales agent Claudia è insieme tool, case study e prodotto**. Il loop: vendere con l'agent → vendere l'agent → con i ricavi costruire agent migliori.

**Obiettivo finale 2027**: FTB consolidato come autorità verticale AI per il food artigianale italiano, con €300k+ di fatturato, margine >60%, un prodotto replicabile (Claudia), un playbook di vendita automatizzato, e 2–3 retainer strategici che generano cash flow prevedibile.

> **Nota nome**: l'agent si chiama **Claudia** (non più Claudio — decisione Andrea M 2026-04-17). L'etimologia Claude resta visibile. Vedi memoria `project_tosi_phase1_rules.md` e `project_tosi_four_phase_model.md`.

---

## Focus verticali iniziali (non negoziabili)

Tutti gli altri segmenti restano in ghiaccio fino a fine Fase 3.

### Verticale primario: **PMI food Lombardia**
- Fatturato target cliente: €3–30M
- Profilo: caseifici, salumifici, pastifici, conserve, gastronomie artigianali, pasticcerie industriali
- Perché: naturale per Andrea (UNISG + Cortilia + Tosi), mercato geograficamente accessibile (Origgio), decisori italiani che apprezzano l'approccio relazionale
- Universo potenziale: ~2.000 aziende Lombardia

### Verticale secondario: **Consorzi DOP/IGP e associazioni di categoria**
- Target: consorzi di tutela, camere di commercio, GAL, enti di promozione territoriale
- Perché: amplifica il brand FTB, accesso a molti produttori con un solo deal, compatibile con la visione Manrique (tecnologia al servizio dell'identità territoriale)
- Universo potenziale: ~300 consorzi DOP/IGP in Italia, di cui ~80 in Nord Italia

---

## Struttura della roadmap

| Fase | Periodo | Tema |
|---|---|---|
| **1** | Mag–Giu 2026 · 8 settimane | Prospect Intelligence + Content Engine |
| **2** | Lug–Ago 2026 · 8 settimane | Outbound engine + CRM attivo |
| **3** | Set–Ott 2026 · 8 settimane | Delivery automation + prodotto Claudia |
| **4** | Nov 2026–Feb 2027 · 16 settimane | Consolidamento + decisione fiscale |
| **5** | Mar–Dic 2027 · 10 mesi | Scalata selettiva |

---

## FASE 1 — Prospect Intelligence + Content Engine
**Mag–Giu 2026 · 8 settimane**

### Obiettivi misurabili
- 200 prospect qualificati in database (150 PMI Lombardia + 50 consorzi)
- Pubblicazione di 24 post LinkedIn + 8 articoli blog FTB
- 2–3 conversazioni qualificate innescate dai contenuti
- 1 cliente firmato (pilota, anche scontato)

### Deliverable tecnici
- Agente di prospect research notturno (stack: Claude API + n8n + Supabase + Notion)
- Content engine: da audio-nota di 3 min → post LinkedIn + articolo + thread
- Dashboard Notion con pipeline viva
- Template blog post FTB con Materic palette

### Attività settimanali
| Blocco | Ore/settimana | Attività |
|---|---|---|
| Sviluppo Andrea 2.0 | 8h | Due pomeriggi fissi, non negoziabili |
| Content creation | 4h | Registrazione + revisione |
| Delivery Tosi (Claudia) | 12h | Mantenere momentum pilota 10 prospect → feedback → iterazione |
| Cortilia | ~20h | 50% contratto attuale |
| Business dev manuale | 4h | Chiamate, cene, eventi |

### Rischi fase 1
- **Procrastinazione "calzolaio scalzo"**: antidoto = calendar-block non negoziabile
- **Paralisi da analisi sul tech stack**: scegli velocità > perfezione, n8n + Supabase bastano
- **Dispersione contenuti**: tieni un solo tema portante (AI per food artigianale)

### Stato corrente (2026-04-17)
La Fase 1 è effettivamente iniziata: l'esperimento Tosi con Claudia è il pilota che validerà il modello a 4 fasi di Andrea M. Vedi `ftb-tosi-experiment` per i dettagli operativi.

---

## FASE 2 — Outbound engine + CRM attivo
**Lug–Ago 2026 · 8 settimane**

### Obiettivi misurabili
- Pipeline €60–100k in proposte attive
- 2–3 clienti chiusi addizionali
- 50 email outbound personalizzate inviate, tasso risposta ≥6%
- CRM attivo che manda nudge quotidiani via Telegram/WhatsApp

### Deliverable tecnici
- Email outbound sequences 1-to-1 (no blast), personalizzate su segnali specifici (acquisizioni, assunzioni digital, premi, rassegna stampa)
- Sales agent CRM con integrazione Telegram/WhatsApp per nudge
- Proposal generator post-discovery call
- Template SOW + preventivo standard FTB

### Metriche chiave
- Tasso risposta outbound: target ≥6% (benchmark mercato italiano: 0.5–2%)
- Discovery call → proposta: target ≥40%
- Proposta → firma: target ≥30%
- Tempo medio discovery → firma: target <30 giorni

### Decisioni di fase 2
- **Cortilia**: scendere a 30% entro agosto, comunicare con 1 mese di preavviso
- **Partner Network FTB**: attivare i primi 3 collaboratori per gestire delivery overflow
- **Regime forfettario**: prima verifica con commercialista, scenario a €85k

### Rischi fase 2
- **GDPR e scraping**: impostare compliance dal giorno zero, documentare fonti legittime (bilanci pubblici, Registro Imprese, LinkedIn pubblico)
- **LinkedIn banning**: mai automatizzare outreach dal tuo account personale, solo research
- **Overcommit delivery**: se firmi troppo velocemente senza Partner Network attivo, bruci la reputazione

---

## FASE 3 — Delivery automation + prodotto Claudia
**Set–Ott 2026 · 8 settimane**

### Obiettivi misurabili
- **Claudia** trasformata in playbook replicabile (non più custom Tosi)
- 1 seconda installazione Claudia venduta (validazione replicabilità)
- Onboarding cliente standardizzato (kickoff + raccolta dati + setup) ridotto a <10 ore dal primo contatto
- Fatturato cumulato 2026: €120–180k

### Deliverable tecnici
- **Claudia 2.0**: architettura modulare (Next.js/Supabase/Resend) con onboarding assistito, digital twin interview protocol documentato, pricing trasparente (€25–45k installazione + €500–1.500/mese)
- Agente di onboarding cliente (raccolta dati, kickoff automatico, setup iniziale)
- Libreria prompt riutilizzabile per discovery + proposal
- Dashboard cliente (stato progetto, metriche, deliverable)

### Il modello a 4 fasi come asset replicabile
Il modello a 4 fasi validato da Andrea Tosi (visita → 2 vaschette → contrattualizzazione → Ambassador) è il **playbook commerciale replicabile** da vendere a altri produttori. Vedi `project_tosi_four_phase_model.md`.

Ogni nuova installazione Claudia eredita:
- Il Voice Twin del Maestro del cliente (personalizzato per loro casaro/panettiere/norcino/oleificatore)
- Le hard rules (no altri clienti citati, disclosure stratificata, firma con contatti umani)
- Il modello a 4 fasi adattato al ciclo del prodotto specifico

### Ecosistema Partner Network
- **Requirement Anthropic**: 10 collaboratori certificati
- **Struttura proposta**: 10 freelance italiani/europei con profili complementari (designer, copywriter, developer, consulenti food), legati da accordo di revenue share (10–20% sui progetti che delivery)
- **Primi 3 attivati entro settembre 2026**, 7 restanti entro dicembre

### Rischi fase 3
- **Sovra-ingegnerizzazione Claudia**: ogni feature deve essere richiesta da ≥2 clienti reali, no feature speculative
- **Pricing troppo basso**: il primo cliente sconta, dal secondo no. Mantieni €25k floor.

---

## FASE 4 — Consolidamento + decisione fiscale
**Nov 2026 – Feb 2027 · 16 settimane**

### Obiettivi misurabili
- Fatturato 2026 chiuso: €120–180k
- 4–6 retainer attivi (Tosi + IMAGINE + 2–4 nuovi)
- Decisione fiscale operativa dal 1° gennaio 2027
- Pipeline 2027 pre-firmata: ≥€80k

### Decisione fiscale critica
Tre scenari da valutare con commercialista entro **novembre 2026**:

**Scenario A — Restare forfettario (€85k cap)**
- Vantaggio: semplicità, flat tax 15% (5% primi 5 anni se applicabile)
- Svantaggio: cap strutturale, non scalabile oltre 2027
- Quando ha senso: se Andrea preferisce qualità della vita e selezione dura dei clienti

**Scenario B — SRL (o SRL semplificata)**
- Vantaggio: scalabilità illimitata, credibilità B2B, separazione patrimoniale, possibilità di equity
- Svantaggio: costi gestione (€3–5k/anno), tassazione più complessa, IRES+IRAP
- Quando ha senso: se Andrea proietta fatturato >€100k stabile e vuole prendere collaboratori

**Scenario C — Doppia entità (forfettario + SRL)**
- FTB forfettario mantiene retainer advisory (alto margine, pochi clienti)
- Nuova SRL canalizza progetti grandi + licensing Claudia + Partner Network
- Vantaggio: flessibilità fiscale, ottimizzazione carico
- Svantaggio: complessità gestionale, richiede commercialista bravo

**Raccomandazione da approfondire**: Scenario C o B. Il vincolo del forfettario a €85k è strutturalmente incompatibile con la traiettoria di ricavi proiettata.

### Attività chiave fase 4
- Retrospective dura sulle Fasi 1–3 (cosa ha funzionato, cosa no, dove è stato sprecato tempo)
- Planning 2027 con numeri concreti, non ambizioni
- Consolidamento del Partner Network (10 membri certificati entro dicembre)
- Uscita completa da Cortilia o mantenimento simbolico (max 10% tempo)
- Eventuale primo pitch a EU funding (EIT Food, Horizon) con Bagler/UNISG

---

## FASE 5 — Scalata selettiva
**Mar–Dic 2027 · 10 mesi**

### Obiettivi misurabili
- Fatturato 2027: €300–500k
- 10–14 progetti delivery + 4–6 retainer stabili
- 3–5 licenze Claudia attive (€30–75k licensing revenue)
- Selezione di 1 "idea fuori dagli schemi" da attivare come vehicle di scala

### Decisione strategica grande (entro Q2 2027)
Scegliere 1 delle 3 direzioni esplorate per trasformare FTB da consulenza a piattaforma:

**Direzione A — "Apprendista digitale" (evoluzione Claudia)**
- Framing emotivo-culturale invece che tecnico-CRM
- Pricing premium (€50k+ per installazione)
- Adatta se: Andrea preferisce rimanere vicino al mestiere artigiano

**Direzione B — "Terroir AI"**
- Modelli verticali per territori (Valtellina, Langhe, Val di Non...)
- Clienti: consorzi, camere di commercio, GAL
- Adatta se: Andrea preferisce il gioco istituzionale e contratti grandi

**Direzione C — "Computational Gastronomy Lab"**
- Partnership UNISG + Bagler + FTB
- Focus ricerca + IP licenziabile + paper
- Adatta se: Andrea vuole costruire autorità accademica + riconoscimento internazionale

### Metriche di salute business 2027
- Margine operativo: ≥60%
- Concentrazione clienti: nessun cliente >25% del fatturato
- Ricavi ricorrenti (retainer + licensing): ≥40% del totale
- Ore/settimana lavorate: ≤45h (qualità di vita, viaggi con il cane, cucina)
- Tempo speso in "lavoro non-automatizzabile" (relazioni, strategia, pensiero): ≥50%

---

## Cash flow proiettato

### 2026

| Voce | Conservativo | Realistico |
|---|---|---|
| Cortilia (graduale uscita) | €18k | €24k |
| Clienti nuovi FTB (5–7 progetti) | €80k | €140k |
| Retainer esistenti (Tosi + IMAGINE) | €15k | €25k |
| **Totale 2026** | **€113k** | **€189k** |

### 2027

| Voce | Conservativo | Realistico |
|---|---|---|
| Cortilia (residuale o uscita) | €0 | €12k |
| Clienti progetti (10–14) | €180k | €300k |
| Retainer consolidati (4–6) | €90k | €180k |
| Licensing/prodotto Claudia (3–5) | €30k | €75k |
| **Totale 2027** | **€300k** | **€567k** |

---

## Cosa NON faccio nel 2026–2027

Lista esplicita, da rileggere ogni trimestre per resistere alla tentazione. **Quando un cliente bussa o viene un'opportunità spot, check contro questa lista prima.**

- Web maintenance clienti spot (Centro Radiologico Arese in uscita)
- Booking platforms custom (HOLO VAN e simili — commoditizzati)
- Newsletter HTML / marketing generico per clienti non strategici
- Progetti spot senza prospettiva di retainer o ricorrenza
- Nuovi segmenti verticali fuori da food + consorzi fino a fine Fase 3
- Consulenza AI generica (ChatGPT training, corsi base) — il brand FTB vale di più
- Prompt engineering come skill vendibile (commoditizzato entro 2027)
- Costruire tool che Claude/Cowork renderanno obsoleti in 18 mesi:
  - Pitch deck generator generici
  - Siti web da brief
  - Script di data wrangling
  - Dashboard su misura (esiste già come prodotto)

---

## Rituali operativi

### Settimanali
- **Lunedì mattina**: review pipeline Notion + priorità settimana
- **Martedì + Giovedì pomeriggio**: blocchi di sviluppo Andrea 2.0 (non negoziabili)
- **Venerdì pomeriggio**: content creation (audio-nota + revisione output agente)

### Mensili
- Chiusura numeri mese (fatturato, pipeline, conversioni)
- Review del "cosa NON faccio" — qualche concessione accettabile? No.
- Aggiornamento LinkedIn con 1 case study concreto

### Trimestrali
- Retrospective su scostamenti da roadmap
- Verifica matrice difendibilità × ricavi
- Aggiornamento previsioni fiscali con commercialista

### Annuali
- Scelta della "grande direzione" per l'anno successivo
- Eventuale aggiornamento brand FTB se emergono nuovi framing

---

## Principio di chiusura

> Il tempo è l'unica risorsa non rigenerabile in un momento in cui i concorrenti arrivano con molti più soldi di me.
> **Vinco con focus e velocità, non con risorse.**

Ogni trimestre, test del taglio netto: *"Questa attività, tra 24 mesi, sarà ancora difendibile o l'AI l'avrà commoditizzata?"* Se la risposta è commoditizzata → taglio subito, non quando brucia.

---

## Riferimenti incrociati

- **Tosi è il progetto-seed di tutta la roadmap.** Se Tosi non valida il modello a 4 fasi, la Fase 3 (prodotto Claudia) non ha fondamenta. Operativamente: `ftb-tosi-experiment`.
- **Il modello a 4 fasi di Andrea M** (vaschetta → 2 vaschette → contratto → ambassador) è l'asset replicabile che rende Claudia un prodotto e non un servizio custom. Fonte autoritativa: memoria `project_tosi_four_phase_model.md`.
- **Partnership e funding (Anthropic, EIT Food, Horizon, UNISG)**: vedi `ftb-strategy`. Non sono in questa roadmap perché sono orizzontali a tutte le fasi.
- **Brand e voce (Manrique + Andrea CEO)**: vedi `ftb-manrique-ceo` e `ftb-andrea-ceo`.
- **Contenuti e case study**: vedi `ftb-content-engine`.

## Come usare questa skill

**Trigger tipici:**
- *"Dovrei accettare questo cliente?"* → cerca nella lista "cosa NON faccio", check contro verticali primario/secondario, check contro fase corrente.
- *"Quanto devo chiedere per questo progetto?"* → pricing floor €25k (Fase 3+), scontabile solo per il primo cliente di un nuovo playbook.
- *"Quando dovrei lasciare Cortilia?"* → scendere al 30% entro agosto 2026, uscita completa in Fase 4.
- *"Devo aprire SRL?"* → decisione formale in Fase 4 (nov 2026–feb 2027) con commercialista. Default: Scenario C (doppia entità) o B (SRL sola).
- *"Verticale di espansione?"* → fino a fine Fase 3, solo PMI food Lombardia + Consorzi DOP/IGP. Tutto il resto rimandato.
- *"Quale direzione 2027 scelgo?"* → decisione in Q2 2027 tra Apprendista / Terroir AI / Computational Gastronomy Lab.

**Non trigger:**
- Task operativi Tosi (Claudia, Voice Twin, CRM) → `ftb-tosi-experiment`
- Scrittura cold email → `ftb-manrique-ceo` + `ftb-tosi-experiment`
- Applicazioni EU funding → `ftb-eu-bandi-navigator`
- Sviluppo website → `ftb-brand-identity-website` + `ftb-website-build-prompt`
