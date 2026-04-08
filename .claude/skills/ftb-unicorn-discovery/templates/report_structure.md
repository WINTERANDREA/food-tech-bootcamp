# Template: Report Structure

Usa questa struttura per il report finale di analisi. È stata raffinata sul caso Tosi/Gorgonzola e funziona per qualsiasi categoria food artigianale.

## 1. Titolo e cover

**Titolo**: "[CATEGORIA] [DOP/IGP se applicabile] — Analisi dei Produttori e Classifica dei Potenziali Unicorni Artigianali"

**Sottotitolo**: "Qualità • Artigianalità • Crescita Futura"

**Footer cover**: data + "Analisi imparziale basata su fonti pubbliche"

## 2. Sezione "Il panorama"

Includi:
- Numero totale di produttori della categoria (consorzio o stima)
- Volumi totali di produzione del settore
- Trend recenti (export, consumi, anni record)
- Struttura competitiva: oligopolio? frammentazione? quota dei top player?
- Tabella delle quote di mercato dei principali player con tipologia (industriale/artigianale)

**Pattern tipico**: 4-5 grandi player industriali + 30-40 medio-piccoli artigianali. La tua analisi si concentra sui 30-40 medio-piccoli.

## 3. Sezione "Metodologia"

Spiega i 3 assi:
- Qualità (premi, riconoscimenti, critica)
- Artigianalità (processo, dimensione, filiera)
- Crescita futura (traiettoria, asset, format)

Definisci cosa intendi per "unicorno artigianale" nel contesto specifico.

## 4. Sezione "Classifica per Tier"

Quattro tier:

### Tier 1 — Candidati Unicorni (3-5 produttori max)
Per ognuno, scheda con:
- Nome + posizione + rating (⭐⭐⭐⭐⭐)
- Riga info: Sede, Fondazione, Produzione/Volumi, Generazione
- 2-3 paragrafi descrittivi:
  - Come produce (artigianalità)
  - Cosa lo distingue (qualità, riconoscimenti)
  - Asset nascosti / format esperienziali / partnership
- Riquadro verde: Punti di forza (4-5 bullet)
- Riquadro rosso: Criticità / Rischi (3-4 bullet)
- Riquadro oro: "Potenziale unicorno: [BASSO/MEDIO/ALTO/MOLTO ALTO]" + 1 frase motivazionale

### Tier 2 — Artigianali con Potenziale (4-6 produttori)
Stessa struttura ma più sintetica.

### Tier 3 — I Medi con Ambizioni (3-5 produttori)
Schede compatte: 1-2 paragrafi + verdict.

### Tier 4 — I Grandi Industriali (paragrafo unico)
Citazione di Galbani/Lactalis, leader di settore, con nota che "non sono rilevanti per questa classifica unicorno".

## 5. Sezione "Sintesi" — Tabella comparativa

Tabella riassuntiva con tutti i produttori dei Tier 1-3:

| # | Produttore | Qualità /10 | Artigianalità /10 | Crescita /10 | Potenziale Unicorno |
|---|---|---|---|---|---|
| 1 | [Nome] | X/10 | X/10 | X/10 | MOLTO ALTO |

## 6. Sezione "Conclusione"

3-4 paragrafi:
- Chi è il vero unicorno e perché (l'argomentazione cardine)
- Il #2 e perché (differenza con il #1)
- I "tesori culturali" (micro-produttori non scalabili ma da preservare)
- Pattern emergenti dalla categoria

## 7. Footer / Note

- Data dell'analisi
- Disclaimer: "Le quote di mercato e i dati finanziari non direttamente dichiarati sono stime"
- Disclaimer: "Nessun produttore ha sponsorizzato o influenzato questa analisi"
- Lista delle fonti principali consultate

---

## Output format

Il report finale può essere consegnato in due formati:

### Inline (markdown nel chat)
Usa per analisi rapide, risposte conversazionali, o quando il contenuto è breve (1-2 produttori).

### PDF (file scaricabile)
Usa quando l'analisi è completa e copre 5+ produttori. Per il PDF:
- Usa la skill `pdf` o `frontend-design` per il rendering
- Stile: tipografia pulita, colori warm/terra (terracotta, crema, ocra), rispettare i colori del brand FTB se rilevante
- Includi tabelle, riquadri colorati per punti di forza/criticità
- Footer con paginazione e titolo
- Cover dedicata
- Sempre includere il prompt dell'utente in apertura per tracciabilità

## Tone of voice

- Imparziale e fattuale
- Quantitativo dove possibile
- Cita sempre le fonti con `` se vengono dal web search
- Usa "tu" / "voi" se il tono è conversazionale
- Evita superlativi non supportati da fatti
- Quando un produttore ha gap di comunicazione, dillo esplicitamente — è un'informazione strategica preziosa

## Anti-pattern nel report

- ❌ Non fare un elenco di 30 produttori senza ranking
- ❌ Non dare punteggi senza fatti specifici a supporto
- ❌ Non confondere "famoso" con "unicorno"
- ❌ Non ignorare i micro-produttori se hanno asset esperienziali
- ❌ Non dimenticare la sezione "asset nascosti" per il #1 della classifica
- ❌ Non usare aggettivi vaghi ("eccezionale", "incredibile") senza supporto
