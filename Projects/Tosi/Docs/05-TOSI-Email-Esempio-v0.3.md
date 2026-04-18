# 05 — Tre email esempio v0.3 (post parere legale DOP + L. 34/2026)

**Fonte**: Voice Twin System Prompt v0.3 (`03-TOSI-Voice-Twin-System-Prompt.md`) applicato alle stesse tre briefing card illustrative della v0.2, con le modifiche derivanti dal parere legale del 18 aprile 2026 (doc `06-Tosi-Legge-34-2026-Parere-Legale.pdf`).

**Target**: OK finale di Andrea M su stile, tono e calibrazione della leva legale. Le email v0.2 erano già state revisionate una volta da Andrea C il 18 aprile 2026 — la v0.3 applica solo i delta del parere legale sopra quelle.

**Stato: validato Andrea M il 18 aprile 2026.** Risposta registrata: *"OK tutto"* su tutte e tre le decisioni chiuse. Concretamente:
1. ✅ Parola "artigiano/artigianalmente" nel corpo delle email 1 e 2 — confermata.
2. ✅ Paragrafo sulla leva legale di 40 parole in email 3 — confermato.
3. ✅ Firma estesa con "Azienda artigiana / Iscritti Albo" su tutte e tre le email — confermata.

Claudia entra in produzione con questa baseline sui primi 10 prospect pilota non appena Andrea Casero fornisce il numero di iscrizione all'Albo (sostituzione placeholder `[XXX]`).

---

## Cosa è cambiato rispetto alla v0.2

Tre modifiche minime ma sistematiche, derivate dal DIFF v0.2 → v0.3 (doc `03b-TOSI-Voice-Twin-v0.2-vs-v0.3-DIFF.md`):

1. **Firma estesa su tutte e tre**. Sotto il blocco contatti esistente aggiungiamo due righe: *"Caseificio Tosi — Azienda artigiana / Iscritti all'Albo delle Imprese Artigiane · CCIAA Novara n. [XXX]"*. Il numero Albo è placeholder fino a recupero da Andrea Casero. Se non disponibile al deploy, Claudia omette l'intera riga (meglio niente che un placeholder visibile).

2. **"Artigianale/artigiano" sdoganato** come predicato dell'impresa. La v0.2 evitava la parola in assoluto; la v0.3 la usa con misura — una volta per email, riferita al caseificio o alla lavorazione, mai come aggettivo grammaticale del nome DOP. Mai "Gorgonzola DOP Artigianale" in sintagma unitario.

3. **Leva legale (L. 34/2026) solo in 1 email su 3**. Concretamente: la metto **solo nell'email 3** (focacceria Garibaldi), che ha già il middle più identitario e può reggere un rinforzo di credibilità. Le altre due restano asciutte — la leva è un asset, non un mantra.

Tutto il resto (modello a 4 fasi, middle a due paragrafi, cornice "Riferimento per la degustazione", gesti, ancoraggi personalizzati) resta identico alla v0.2 revisionata.

---

## ① Paninoteca gourmet — zona Brera

**Oggetto**: Una vaschetta da provare nei vostri panini

**Corpo**:

> Buongiorno,
>
> mi chiamo Claudia. Scrivo per il **Caseificio Tosi** di Gattico-Veruno, sul Lago Maggiore. Vi cerco perché il vostro menu mostra un'attenzione alla materia prima che non è comune nemmeno a Brera, e perché tra i formaggi nei vostri panini non vedo un gorgonzola con un'identità forte.
>
> Siamo un caseificio artigiano a conduzione familiare. Produciamo un Gorgonzola Dolce a Cucchiaio che confezioniamo in vaschetta da circa un chilo, senza crosta, zero scarto. Il nostro casaro lavora in caldaie da seicento litri — sei forme alla volta — e ogni forma la segue dall'inizio alla fine, con le mani.
>
> Le email le scrivo io. Andrea, che segue lo sviluppo dei nostri prodotti, preferisce dedicarsi alla degustazione.
>
> Se vi va, passa di persona con una vaschetta da lasciarvi qualche giorno. La provate sui vostri panini, senza impegno. Se ci fate sapere come va, per noi è un aiuto.
>
> Un caro saluto,
>
> Claudia — agent AI del Caseificio Tosi
>
> Riferimento per la degustazione
> Andrea Casero · Head of R&D, Caseificio Tosi
> +39 379 132 3187 · sviluppo@tosigorgonzola.com
> Via Maggiate 6 · Gattico-Veruno (NO)
>
> Caseificio Tosi — Azienda artigiana
> Iscritti all'Albo delle Imprese Artigiane · CCIAA Novara n. [XXX]

**Word count**: ~160 parole.

**Cosa è cambiato dalla v0.2**: aggiunta la frase *"Siamo un caseificio artigiano a conduzione familiare"* come apertura del secondo paragrafo (predicato dell'impresa, grammaticalmente netto). Firma estesa con le due righe dell'Albo.

**Gesto usato**: caldaia 600L → 6 forme (default).

**Aggancio personalizzato**: assenza di gorgonzola con identità forte nei panini.

---

## ② Pizzeria gourmet — zona Porta Venezia

**Oggetto**: Un gorgonzola da usare fuori forno

**Corpo**:

> Buongiorno,
>
> mi chiamo Claudia, scrivo per il **Caseificio Tosi** di Gattico-Veruno. Vi cerco perché tra le pizzerie di Milano la vostra cura particolarmente i topping fuori forno — qualcosa che emerge anche dalle recensioni dei vostri clienti.
>
> Produciamo artigianalmente un Gorgonzola Dolce a Cucchiaio che confezioniamo in vaschetta da un chilo, senza crosta, con trenta giorni di TMC. Non serve cuocerlo per renderlo cremoso: è già la sua natura. Basta il calore della pizza in uscita per valorizzarlo ancora di più in sapore e consistenza, senza alterarne il gusto.
>
> Le email le scrivo io. Andrea, che di gorgonzola se ne intende da anni, preferisce dedicarsi alla degustazione.
>
> Se vi va, passa una mattina con una vaschetta da lasciarvi qualche giorno. La provate su una delle vostre pizze, senza impegno. Se poi vi fa piacere dirci cosa ne pensate, meglio ancora.
>
> Un saluto,
>
> Claudia — agent AI del Caseificio Tosi
>
> Riferimento per la degustazione
> Andrea Casero · Head of R&D, Caseificio Tosi
> +39 379 132 3187 · sviluppo@tosigorgonzola.com
> Via Maggiate 6 · Gattico-Veruno (NO)
>
> Caseificio Tosi — Azienda artigiana
> Iscritti all'Albo delle Imprese Artigiane · CCIAA Novara n. [XXX]

**Word count**: ~145 parole.

**Cosa è cambiato dalla v0.2**: una sola parola in più — *"Produciamo artigianalmente"* invece di *"Produciamo"* (predicato grammaticale del soggetto "noi / il Caseificio Tosi"). Firma estesa.

**Gesto usato**: "non serve cuocerlo per renderlo cremoso" come beneficio operativo.

**Aggancio personalizzato**: cura dei topping fuori forno.

---

## ③ Focacceria artigianale — zona Garibaldi

**Oggetto**: Un cremoso che entra in focaccia senza scaldarsi

**Corpo**:

> Buongiorno,
>
> mi chiamo Claudia e scrivo per il **Caseificio Tosi**. Tra le focaccerie di Milano la vostra è una delle poche che tratta il ripieno con lo stesso peso dell'impasto — e un gorgonzola dolce sa entrare in una focaccia meglio di quanto si pensi.
>
> Il nostro è un cucchiaio in vaschetta da un chilo, senza crosta. Tutto — caldaia, insacco, salatura — lo fa il casaro con le mani: non c'è un punto del processo dove una macchina sostituisce un gesto. L'azienda lo riassume in una frase: *Latte, Uomo, Legno, Tempo*.
>
> Siamo uno dei pochi caseifici di Gorgonzola DOP iscritti all'Albo delle Imprese Artigiane — una qualifica che dall'11 marzo 2026 è riservata per legge, e che la maggior parte dei grandi produttori non ha.
>
> Io ricerco i locali di Milano che potrebbero valorizzare al meglio il nostro prodotto. Andrea — laureato in Scienze Gastronomiche — viene di persona per farvi provare il nostro fiore all'occhiello, il Tosi a Cucchiaio.
>
> Se vi va, passa con una vaschetta da lasciarvi qualche giorno sul bancone: la provate nelle vostre focacce, senza impegno. Se ci raccontate com'è andata, meglio ancora.
>
> A presto,
>
> Claudia — agent AI del Caseificio Tosi
>
> Riferimento per la degustazione
> Andrea Casero · Head of R&D, Caseificio Tosi
> +39 379 132 3187 · sviluppo@tosigorgonzola.com
> Via Maggiate 6 · Gattico-Veruno (NO)
>
> Caseificio Tosi — Azienda artigiana
> Iscritti all'Albo delle Imprese Artigiane · CCIAA Novara n. [XXX]

**Word count**: ~200 parole (era ~165 in v0.2 — l'aumento è dovuto al paragrafo sulla leva legale).

**Cosa è cambiato dalla v0.2**: aggiunto un paragrafo intermedio di 40 parole con la leva legale della L. 34/2026 ("siamo uno dei pochi caseifici di Gorgonzola DOP iscritti all'Albo..."). Firma estesa. Tutto il resto invariato.

**Gesto usato**: "tutto fatto a mano" come cornice con elenco concreto (caldaia/insacco/salatura), claim firma in chiusura del paragrafo processo.

**Aggancio personalizzato**: la focacceria tratta il ripieno con lo stesso peso dell'impasto.

**Nota**: la frase legale è volutamente fattuale ("una qualifica che dall'11 marzo 2026 è riservata per legge"), non retorica. Non dice "siamo i migliori", dice "siamo dentro una categoria che i grandi non hanno". È informazione, non claim qualitativo — coerente con la voce del Maestro e con le parole bandite (non compare "eccellenza/unico/premium").

---

## Confronto sintetico v0.2 vs v0.3

| Email | Cambiamento nel corpo | Firma |
|---|---|---|
| ① Paninoteca Brera | Aggiunta frase *"Siamo un caseificio artigiano a conduzione familiare"* | +2 righe Albo |
| ② Pizzeria Porta Venezia | Una parola: *"artigianalmente"* nel verbo | +2 righe Albo |
| ③ Focacceria Garibaldi | Nuovo paragrafo intermedio sulla leva legale (40 parole) | +2 righe Albo |

La v0.3 è un'evoluzione incrementale sulla v0.2, non una riscrittura. Il Maestro riconosce il tono; il lettore sente una mano leggermente più ferma sulla qualifica.

---

## Domande per Andrea M

Tre decisioni chiuse. Se sei d'accordo su tutte, scrivi "OK tutto" e procediamo al deploy v0.3.

1. **Email 1 e 2**: la parola "artigiano"/"artigianalmente" nel corpo ti va bene (una volta, come predicato dell'impresa)?
   ☐ Sì ☐ Toglila, tieni la v0.2 identica ☐ Altro: _______

2. **Email 3**: il paragrafo sulla leva legale (40 parole) ti convince, o stona con la voce Maestro?
   ☐ Sì, tienilo ☐ Toglilo, tieni solo la firma estesa ☐ Riformulalo più breve ☐ Altro: _______

3. **Firma estesa** con le due righe "Azienda artigiana / Iscritti Albo" su tutte e tre le email:
   ☐ Sì ☐ Solo su Email 3 (la più identitaria) ☐ Nessuna, tieni firma v0.2 ☐ Altro: _______

---

## Prossimi passi dopo l'OK

1. Andrea Casero fornisce il numero di iscrizione all'Albo CCIAA Novara
2. Il placeholder `[XXX]` viene sostituito in tutte le firme
3. Deploy v0.3 nel `tosi-mini-crm` (`/prompts/voice-judgment-model-v1.md`)
4. `prompt_version` nel database diventa `voice-twin-v0.3-fase1`
5. Selezione dei 10 prospect pilota tra i 15 con menu già estratto
6. Claudia genera i primi 10 draft → coda `/review`
7. Andrea C approva/rifiuta — le email approvate partono via Resend da `hello@tosigorgonzola.com`
8. Follow-up 7 giorni dopo la prima, una sola volta, per chi non ha risposto

**Regola invariata**: Claudia non ha mai la mano sul bottone *invia*.
