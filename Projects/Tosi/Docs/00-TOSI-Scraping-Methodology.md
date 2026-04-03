# Tosi AI Sales Agent — Prospect Research Methodology

**Data:** 2026-03-31
**Autore:** Andrea C. (Food Tech Bootcamp)
**Progetto:** Tosi AI Sales Agent — Fase 0

---

## 1. Fase

Fase 0 — Baseline e costruzione lista prospect.

Questo e' il primo passo operativo del progetto Tosi AI Sales Agent: prima di costruire il Digital Twin (Fase 1), prima di tracciare la pipeline (Fase 2), prima di inviare email (Fase 3) — serve sapere **a chi vendere**.

---

## 2. Obiettivo

Costruire una lista di ~47 locali nella zona Turati di Milano che potrebbero acquistare gorgonzola cremoso DOP da 1kg per il loro servizio. La lista deve contenere:

- Nome, indirizzo, telefono, sito web
- Rating e recensioni Google (indicatori di qualita' e volume)
- Tipo di attivita' (panineria, hamburgheria, pizzeria, wine bar...)
- Dati sufficienti per l'AI per generare briefing cards nella Fase 1

Non cerchiamo "ristoranti a Milano". Cerchiamo locali specifici dove il formato 1kg senza crosta ha un uso concreto nel menu quotidiano.

---

## 3. Vincoli

| Vincolo | Dettaglio |
|---|---|
| **Geografico** | Raggio 2km da Piazza Turati (45.4735, 9.1895). Copre: Brera, Porta Nuova, Garibaldi, Isola, Porta Venezia, Moscova, Corso Como |
| **Logistico** | Punto di stoccaggio disponibile in zona (bar gestito dal ragazzo della sorella di Andrea C.) |
| **Prodotto** | Gorgonzola cremoso DOP 1kg, senza crosta, servizio veloce. Non e' per ristoranti fine dining, non e' per la GDO |
| **Budget** | ~$0.65 per run completo (18 richieste Google Places API). Dentro i $200/mese di credito gratuito |
| **Tempo** | Pipeline automatizzata. Un run completo richiede ~5 secondi |

---

## 4. Soluzione

### Stack tecnico

| Tool | Ruolo |
|---|---|
| **Google Places API (New)** | Text Search con locationBias per trovare locali in zona |
| **Node.js + axios** | Esecuzione delle query API |
| **csv-writer** | Export dati in formato CRM |
| **dotenv** | Gestione sicura della API key |

### Pipeline in 3 step

```
Step 1: npm run search
  18 query → Google Places API → output/raw_results.json (~270 risultati)

Step 2: npm run dedup
  Deduplica per Google Place ID → output/deduped_results.json (~110 unici)

Step 3: npm run enrich
  Estrai email dai siti web → output/enriched_results.json (~70% con email)

Step 4: npm run export-csv
  Formatta per import CRM → output/prospects_turati.csv (~50-70 qualificati)
```

### Repository

`caseificiotosi-hub/tosi-scraping` su GitHub. Clonabile su qualsiasi macchina con Node.js.

---

## 5. Strategia di Ricerca

### Perche' 18 query e non 1

Google Places Text Search restituisce massimo 20 risultati per query. Una sola query generica ("locale Milano") restituirebbe 20 risultati irrilevanti. 18 query mirate, ciascuna per un tipo specifico di locale, massimizzano la copertura.

### Le query, raggruppate per tipo di locale

**Paninerie (target primario — il formato 1kg e' nato per loro)**

| Query | Razionale |
|---|---|
| `paninoteca Milano centro` | Ampia, cattura tutte le paninoteca centrali |
| `panineria artigianale Milano` | Filtra per locali che valorizzano ingredienti DOP |
| `panini gourmet Milano` | Il trend panini d'autore (De Santis, Crocetta...) |
| `toast e panini Milano` | Molti bar servono toast con gorgonzola come base |

**Hamburgherie (il gorgonzola burger e' praticamente uno standard)**

| Query | Razionale |
|---|---|
| `hamburgheria Milano centro` | Il "burger al gorgonzola" e' tra i piu' venduti |
| `burger gourmet Milano` | Premium burger che apprezzano la differenza DOP vs industriale |

**Bar con cucina (la categoria piu' ampia a Milano)**

| Query | Razionale |
|---|---|
| `bar con cucina Milano Brera` | Brera = massima densita' bar con food |
| `bar tavola calda Milano Porta Venezia` | Tavola calda: gorgonzola in toast, focacce, piatti |
| `bar gastronomia Milano Garibaldi` | Copertura Garibaldi/Isola |

**Pizzerie gourmet (gorgonzola come topping premium)**

| Query | Razionale |
|---|---|
| `pizzeria gourmet Milano Brera` | Gorgonzola + pera, gorgonzola + noci = classici |
| `pizza artigianale Milano Porta Nuova` | Nuove pizzerie artigianali nel distretto Porta Nuova |

**Wine bar e Bistrot (taglieri con gorgonzola)**

| Query | Razionale |
|---|---|
| `wine bar taglieri Milano` | Tagliere = il formato perfetto per il cremoso |
| `bistrot Milano Brera` | Casual-upscale: gorgonzola in piatti e taglieri |
| `enoteca con cucina Milano` | Enoteche con food service |

**Focaccerie e Gastronomie**

| Query | Razionale |
|---|---|
| `focacceria Milano` | Focaccia col gorgonzola = variante amata |
| `gastronomia Milano Brera Moscova` | Gastronomie tradizionali con formaggi e piatti pronti |

**Brunch e Street Food**

| Query | Razionale |
|---|---|
| `brunch Milano centro` | Cheese board, uova con gorgonzola, toast gourmet |
| `street food gourmet Milano` | Nuovi format che usano ingredienti premium |

### Query escluse (e perche')

| Esclusa | Motivo |
|---|---|
| `ristorante Milano` | Troppo generico. Restituisce sushi, cinese, fine dining |
| `panineria gorgonzola Milano` | Troppo specifico. Nessun locale si autodescrive cosi' |
| `formaggeria Milano` | Retail, non food service. Canale diverso |
| `trattoria Milano` | Comprano tramite distributori Horeca, non direttamente |
| `"Turati" nelle query` | E' un nome di via, non una zona. I locali non si identificano con "Turati" — la geografia la gestisce il `locationBias` |

---

## 6. Dati Raccolti

Per ogni locale l'API restituisce:

| Campo | Uso |
|---|---|
| Nome | Identificazione nel CRM |
| Indirizzo | Pianificare visite e verificare che sia in zona |
| Telefono | Primo contatto diretto |
| Sito web | Analisi menu per AI briefing card (Fase 1) |
| Rating Google | Indicatore qualita' — locali con rating alto tendono ad essere piu' attenti agli ingredienti |
| Numero recensioni | Indicatore volume/popolarita' |
| Link Google Maps | Navigazione per visite sul campo |
| Tipo attivita' | Classificazione automatica (bar, ristorante, pizzeria...) |
| Fascia prezzo | Indica posizionamento premium |
| Coordinate | Calcolo distanza esatta da Piazza Turati |
| Google Place ID | Deduplicazione + riferimento unico |

---

## 7. Deduplicazione

Lo stesso locale puo' apparire in piu' query. Un'hamburgheria gourmet a Brera compare sia in "hamburgheria Milano centro" che in "burger gourmet Milano".

- **Metodo:** Deduplicazione per Google Place ID (identificativo unico di Google)
- **Bonus:** Tracciamo in quante query un locale appare (`queries_matched`). Un locale che compare in 3+ query e' probabilmente molto rilevante per il nostro prodotto

---

## 8. Arricchimento Email

Google Places API non restituisce indirizzi email. E' il dato piu' importante per la Fase 3 (email outreach), quindi lo raccogliamo noi.

### Il problema

- Le email non sono un dato strutturato di Google Places
- Molti locali non le espongono nemmeno sul proprio sito
- Quando le espongono, sono in formati diversi: footer, pagina contatti, pagina "chi siamo"
- Alcuni le offuscano per evitare spam

### La soluzione: approccio ibrido (regex + AI)

**Pass 1 — Regex (gratuito, ~50-60% successo)**

Per ogni locale con un sito web, lo script:
1. Scarica la homepage
2. Prova le pagine contatti piu' comuni (`/contatti`, `/contact`, `/chi-siamo`, `/about`, `/dove-siamo`)
3. Cerca email con pattern regex nell'HTML
4. Filtra i falsi positivi (email di servizio come `@wixpress.com`, `@sentry.io`, `@schema.org`)

Se trova un'email valida, si ferma. Nessun costo API, solo richieste HTTP.

**Pass 2 — Claude Haiku (opzionale, ~€0.003/pagina)**

Per i siti dove il regex non ha trovato nulla:
1. Scarica il testo visibile della homepage e della pagina contatti
2. Lo invia a Claude Haiku con un prompt che chiede di estrarre: email, Instagram, Facebook
3. Claude capisce il contesto: trova email offuscate, email in immagini con alt text, link `mailto:` nascosti in JavaScript

Costo per 50 siti senza email: ~€0.15. Alza la copertura dal ~55% al ~75%.

### Perche' non solo Claude?

| Approccio | Costo per 100 siti | Tempo | Copertura |
|---|---|---|---|
| Solo regex | €0 | ~2 min | ~55% |
| Solo Claude | ~€0.30 | ~10 min | ~75% |
| **Ibrido (regex + Claude fallback)** | **~€0.15** | **~5 min** | **~75%** |

L'ibrido dimezza il costo di Claude perche' lo usa solo dove serve. E il regex e' piu' affidabile sui casi facili (email in chiaro nel footer).

### Per chi non ha email

Per il ~25% di locali senza email trovabile:
- Il **telefono** ce l'abbiamo gia' da Google Places
- Il primo contatto sara' **telefonico o di persona** — che per vendere gorgonzola artigianale e' comunque il canale migliore
- Andrea Tosi stesso ha sottolineato che l'email rischia di andare persa. Il telefono e' piu' diretto

### Dati extra raccolti da Claude

Quando Claude analizza un sito, non si limita all'email. Estrae anche:
- **Instagram handle** — utile per analisi social nella Fase 1
- **Facebook** — canale di contatto alternativo
- **Telefono alternativo** — a volte diverso da quello di Google

---

## 9. Target gia' Noti

Prima dello scraping, avevamo identificato 6 locali dalla lista nazionale Mondo Panini che si trovano in zona Turati:

| Locale | Distanza | Gorgonzola fit | Note |
|---|---|---|---|
| **Panino Giusto** (Via Turati 38) | 0m | Alto | Panini premium, 5+ sedi in zona |
| **De Santis** (Brera) | ~700m | Molto alto | Panineria storica dal 1964 |
| **Porcobrado** (Isola) | ~1.2km | Medio-alto | Porchetta + gorgonzola = classico |
| **Burgez** (Porta Venezia) | ~1.4km | Alto | Gorgonzola burger standard |
| **Chic&Go** (Montenapoleone) | ~1km | Medio | Panini luxury |
| **Miscusi** (Isola) | ~1.3km | Medio-basso | Pasta chain |

**Nota:** Panini Durini era nella lista originale ma **ha chiuso nel 2024** (tutte le 17 sedi). Rimosso.

Questi locali servono come validazione: se lo scraping li trova, conferma che la pipeline funziona e che sono ancora operativi.

---

## 10. Limiti

Lo scraping ci da' **chi esiste e dove**. Non ci dice:

| Domanda | Chi risponde | Quando |
|---|---|---|
| Usano gia' gorgonzola? | L'AI, analizzando il menu online | Fase 1 (briefing cards) |
| Sono aperti a cambiare fornitore? | Andrea C., chiamando | Fase 2 (pipeline) |
| Il prezzo e' giusto per loro? | La degustazione | Fase 2-3 |
| Il volume giustifica la consegna? | La trattativa | Fase 3 |

Lo scraping trasforma "zona Turati" da un'idea geografica a una lista concreta di nomi, indirizzi e telefoni. Tutto il resto e' lavoro dell'AI e degli umani.

---

## 11. Riproducibilita'

La pipeline e' progettata per essere riutilizzata. Per qualsiasi produttore artigianale in qualsiasi zona d'Italia:

| Produttore | Query da adattare | Centro + raggio |
|---|---|---|
| Frantoio in Puglia | `ristorante olio EVO Bari`, `pizzeria gourmet Lecce`... | Coordinate della citta' target |
| Panificio in Piemonte | `bar colazione Torino`, `gastronomia panini Torino`... | Coordinate della zona target |
| Cantina in Toscana | `enoteca Firenze`, `wine bar degustazione Siena`... | Coordinate della zona target |

Cambiano le query, cambia il centro, cambia il raggio. La pipeline (`search → dedup → export → import CRM`) resta identica.

Il Caseificio Tosi e' il primo caso. Non l'ultimo.

---

*Food Tech Bootcamp — Rendere la conoscenza alimentare computabile.*
*Repository scraping: `caseificiotosi-hub/tosi-scraping`*
*Repository CRM: `caseificiotosi-hub/tosi-mini-crm` (branch: feat/ai-sales-agent)*
*Documentazione: `WINTERANDREA/food-tech-bootcamp`*
