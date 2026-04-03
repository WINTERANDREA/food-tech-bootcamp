# Fase 1 — Digital Twin + Schede Informative

**Data:** 2026-03-31
**Stato:** Pianificazione
**Prerequisito:** Fase 0 completata (scraping), in corso (baseline interview, import CRM)

---

## 1. Obiettivo

Creare un "gemello digitale" di Andrea Tosi — un'AI che conosce prodotti, storia, mercato e competitor — e usarlo per generare schede informative (briefing cards) per i prospect nella zona Turati.

Al termine della Fase 1, Andrea C. entra in ogni incontro sapendo:
- Che tipo di locale e'
- Che formaggio usano (se visibile dal menu)
- Qual e' l'angolo di approccio migliore
- Quanto e' prioritario rispetto agli altri

---

## 2. Cosa Serve da Andrea Tosi

Prima di costruire il Digital Twin, servono input da Andrea M. che solo lui puo' dare.

### Intervista baseline (15 min)

Domande per Andrea Tosi:

**Sul prodotto:**
- Quali sono i 3 argomenti di vendita piu' forti per il cremoso 1kg?
- Cosa dice di solito quando un cliente chiede "perche' dovrei pagare di piu' del gorgonzola industriale?"
- Qual e' la differenza concreta che un cliente sente al primo assaggio?
- Ci sono abbinamenti specifici che funzionano meglio? (con che tipo di pane, condimenti, piatti)

**Sul mercato:**
- Chi sono i competitor diretti a Milano per il cremoso? (nomi, prezzi)
- Quanto costa il cremoso 1kg al locale? Qual e' il margine per loro?
- Qual e' il volume minimo d'ordine che ha senso per una consegna?
- Quali obiezioni sente piu' spesso? (prezzo, conservazione, volume, logistica)

**Sul processo attuale:**
- Quanti nuovi clienti ha acquisito nell'ultimo trimestre? Come?
- Quanto tempo dedica alla parte commerciale a settimana?
- Ha un CRM, un foglio Excel, o tiene tutto a mente?
- Qual e' il suo canale di contatto preferito? (telefono, email, visita diretta, WhatsApp)

**Sulla comunicazione:**
- Come si presenta di solito? Qual e' la frase di apertura tipica?
- Ci sono cose che non vuole mai dire o promettere?
- Qual e' il tono: formale, amichevole, tecnico, passionale?
- Vuole che l'AI usi il "tu" o il "voi" con i prospect?

### Materiali da raccogliere

| Materiale | Stato | Serve per |
|---|---|---|
| Scheda tecnica cremoso 1kg | Abbiamo gia' | Conoscenza prodotto nel Digital Twin |
| Listino prezzi aggiornato | **Da chiedere** | Calcolo margini, obiezioni prezzo |
| Foto prodotto alta qualita' | Abbiamo gia' | Eventuale allegato email Fase 3 |
| Lista clienti attuali a Milano | **Da chiedere** | Evitare di contattare chi e' gia' cliente |
| Competitor e prezzi loro | **Da chiedere** | Posizionamento nel Digital Twin |

---

## 3. Import Prospect nel CRM

### Cosa fare

I 252 prospect sono in `tosi-scraping/output/prospects_turati.csv`. Vanno importati nella tabella `companies` del CRM Supabase.

### Decisioni da prendere

**A. Sostituire o aggiungere?**
- Il CRM ha gia' 1400+ companies (scraping nazionale precedente)
- I 252 nuovi sono specifici per zona Turati
- **Opzione consigliata:** Creare un gruppo "Zona Turati" nel CRM e importare i 252 come nuove companies assegnate a quel gruppo. Non eliminare le vecchie — potrebbero servire per fasi future.

**B. Colonne aggiuntive?**
- Il CSV ha campi che il CRM non ha ancora: `email`, `instagram`, `google_rating`, `google_reviews`, `google_maps`
- **Serve:** Aggiungere queste colonne alla tabella `companies` in Supabase prima dell'import
- Lavoro nel CRM repo, branch `feat/ai-sales-agent`

**C. Filtro qualita'?**
- 252 e' troppo per la Fase 1 (briefing cards costano tempo e attenzione)
- **Proposta:** Filtrare i top ~50 per priority (rating alto + reviews + ha website + ha email) e generare briefing cards solo per quelli
- I restanti 200 restano nel CRM come pipeline futura

---

## 4. Digital Twin — System Prompt v1

### Struttura del prompt

Il Digital Twin sara' un system prompt che viene caricato in ogni chiamata Claude API. Vive in `/prompts/digital-twin-v1.md` nel CRM repo.

**Sezioni previste:**

```
1. IDENTITA'
   Chi sei: Andrea Tosi, CEO del Caseificio Tosi. Gattico (NO).
   Missione: produrre il miglior gorgonzola del mondo, senza compromessi.

2. PRODOTTO
   Cremoso DOP 1kg senza crosta.
   Stagionatura, processo, certificazione, differenza vs industriale.
   Abbinamenti consigliati, conservazione, shelf life.
   [Da: schede tecniche + intervista Andrea]

3. MERCATO
   Target: paninerie, hamburgherie, pizzerie gourmet, wine bar nella zona Turati.
   Competitor: [nomi e prezzi da intervista]
   Posizionamento: artigianale, DOP, qualita' premium.
   Prezzo e margini per il locale.

4. STILE COMUNICATIVO
   Tono: [da intervista — formale/amichevole/tecnico]
   Apertura tipica: [da intervista]
   Cose da non dire mai: [da intervista]
   Tu o Voi: [da intervista]

5. OBIEZIONI E RISPOSTE
   "Costa troppo" → [risposta da intervista]
   "Non ho spazio in frigo" → [risposta]
   "Gia' ho un fornitore" → [risposta]
   [Altre obiezioni comuni]

6. REGOLE
   - Mai mentire sul prodotto
   - Mai promettere sconti senza approvazione di Andrea M.
   - Mai inviare email senza approvazione
   - Sempre proporre degustazione gratuita come primo passo
   - Il prodotto parla da solo — l'obiettivo e' far assaggiare, non convincere
```

### Cosa serve PRIMA di scrivere il prompt

| Input | Fonte | Stato |
|---|---|---|
| Risposte intervista | Andrea Tosi | **Da fare** |
| Schede tecniche | Docs esistenti | Disponibile |
| Listino prezzi | Andrea Tosi | **Da chiedere** |
| Competitor/prezzi | Andrea Tosi | **Da chiedere** |
| Tono comunicativo | Intervista | **Da fare** |

**Non possiamo scrivere il Digital Twin senza l'intervista.** E' il passo bloccante.

---

## 5. Briefing Cards

### Come funzionano

Per ogni prospect, Claude (con il Digital Twin system prompt) analizza:
1. Dati Google Places (rating, tipo, indirizzo, fascia prezzo)
2. Sito web del locale (menu, posizionamento, stile)
3. Contesto zona (vicinanza ad altri prospect, logistica)

E genera:

```
PROSPECT: [Nome]
INDIRIZZO: [Da Google Places]
TIPO: [Panineria / Hamburgheria / Pizzeria / Wine bar / ...]
FASCIA PREZZO: [Da priceLevel o analisi menu]
MENU GORGONZOLA: [Usa gorgonzola? Quale? In che piatto?]
PRESENZA ONLINE: [Rating, reviews, Instagram followers]
ANGOLO DI APPROCCIO: [Raccomandazione specifica per questo locale]
PRIORITA': [1-10 con ragionamento]
PRIMO CONTATTO: [Telefono / Email / Visita diretta — e perche']
SCRIPT APERTURA: [2-3 frasi personalizzate per questo locale]
```

### Dove vengono salvate

- Tabella `briefing_cards` in Supabase (da creare)
- Visualizzate nel CRM nella CompanyDetails panel (nuovo componente)

### Costo stimato

- ~50 briefing cards x Claude Sonnet (~$0.01/card con analisi menu) = ~$0.50
- Se serve analisi sito web: +$0.02/card = ~$1.50 totale
- Ampiamente nel budget ~€20/mese

---

## 6. Sequenza Operativa

```
BLOCCO 1: Cose che Andrea C. puo' fare subito (senza Andrea Tosi)
├── Import 252 prospect nel CRM (aggiungere colonne + gruppo)
├── Nuove tabelle Supabase (interactions, briefing_cards, email_drafts)
├── Preparare la struttura del Digital Twin prompt (sezioni vuote)
└── Briefing Card UI component nel CRM (shell, senza dati)

BLOCCO 2: Cose che richiedono Andrea Tosi
├── Intervista baseline (15 min)
├── Raccolta materiali (listino, competitor, clienti attuali)
└── Revisione 3-4 briefing cards campione per calibrare il tono

BLOCCO 3: Dopo l'intervista
├── Compilare il Digital Twin v1 con le risposte
├── Generare briefing cards per i top ~50 prospect
├── Andrea Tosi revisiona le prime cards → feedback → calibrazione
└── Fase 1 completata → si passa alla Fase 2 (pipeline)
```

### Priorita' immediata

**Fissare l'intervista con Andrea Tosi.** Tutto il resto (import, tabelle, UI) si puo' fare in parallelo, ma il Digital Twin — il cuore della Fase 1 — e' bloccato fino all'intervista.

**Proposta email ad Andrea Tosi:**

> Ciao Andre,
>
> Aggiornamento veloce: ho completato la ricerca dei prospect nella zona Turati.
> 252 locali mappati (paninerie, hamburgherie, pizzerie, wine bar, bistrot),
> 125 con email diretta. Tutto pronto per il CRM.
>
> Per il passo successivo (le schede informative per ogni locale) mi serve
> una chiacchierata di 15 minuti con te. Devo capire come presenti il prodotto,
> quali obiezioni senti di solito, e come vuoi che l'AI parli a nome tuo.
>
> Quando hai un buco questa settimana o la prossima?
>
> Andrea

---

## 7. Rischi e Mitigazioni

| Rischio | Mitigazione |
|---|---|
| Andrea Tosi non ha tempo per l'intervista | Mandare le domande via email/WhatsApp. Anche risposte scritte funzionano. |
| Il Digital Twin non cattura bene il tono | Generare 3-4 cards campione e farle revisionare. Iterare. |
| 252 prospect sono troppi per la Fase 1 | Filtrare top ~50 per priority. I restanti entrano dopo. |
| Briefing cards sono troppo generiche | Aggiungere analisi menu dal sito web (il 84% ha websiteUri). |
| Il CRM non ha le colonne per i nuovi dati | Aggiungere prima dell'import. Schema migration. |

---

*Questo documento viene aggiornato man mano che la Fase 1 progredisce.*
*Prossimo aggiornamento: dopo l'intervista con Andrea Tosi.*
