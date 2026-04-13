# TOSI AI Sales Agent — Proposta

**Preparata per Andrea Tosi, Caseificio Tosi**
**Da Food Tech Bootcamp — Marzo 2026**

> Versione allineata al PDF inviato via email + feedback di Andrea Tosi ricevuto.
> Aggiornata 2026-03-31.

---

## Il Problema

Fai il miglior gorgonzola del mondo. Il team commerciale (una persona, Andrea M)
non riesce a raggiungere tutti. Seguire 47 nuovi potenziali target a Milano gestendo
contemporaneamente i clienti esistenti, la produzione e le relazioni non e' semplice.
I competitor industriali hanno spesso reparti vendita da 30 persone. Noi abbiamo
talento, prodotto e passione. Quello che ci manca e' la scala e gli strumenti giusti.

## Cosa Sto Costruendo (Andrea C)

Un coordinatore commerciale AI che lavora dentro il nostro CRM esistente.
Un coordinatore che:

- **Studia ogni potenziale cliente (prospect)** — tipo di menu, fascia di prezzo, presenza social, che formaggio usano oggi, miglior approccio
- **Scrive schede informative** — una pagina per prospect, cosi Andrea C. entra preparato
- **Prioritizza il contatto** — classifica i 47 target per probabilita' di conversione, dice ad Andrea C chi chiamare oggi e perche'
- **Prepara email personalizzate** — da `hello@tosigorgonzola.com`, con la voce di Andrea M, pronte per revisione prima dell'invio
- **Traccia la pipeline** — ogni chiamata, visita, degustazione registrata. L'AI suggerisce quando e come fare follow-up
- **Impara dai risultati** — quale messaggio funziona, quali zone sono calde, dove cambiare strategia

Andrea M. resta al comando. Revisiona ogni email prima che venga inviata. Decide se seguire il suggerimento dell'AI o ignorarlo. L'AI fa il lavoro di ricerca. Gli umani fanno la stretta di mano.

---

## Le 5 Fasi

### Fase 0 — Baseline (Settimana 1-2) [Da capire]

Come possiamo misurare come funzionano le cose oggi, senza AI. Quanti contatti a settimana? Quanto tempo per ogni prospect? Qual e' il tasso di conversione?

**Perche' e' importante:** Questa e' la foto del "prima". Senza, non possiamo dimostrare il "dopo".

**Cosa ci servirebbe:**
- Intervista di 15 minuti con Andrea sul processo attuale
- Accesso a qualsiasi tracciamento vendite esistente (anche se sono solo appunti)

**Deliverable:** Metriche baseline documentate. Database pronto per le funzionalita' AI.

---

### Fase 1 — Voice Twin + Schede Informative (Settimana 3-5)

Costruiamo un **Voice Twin** del maestro artigiano — in parole semplici: un'AI che impara *come parla* e *come decide* il maestro (tono, obiezioni tipiche, cosa non direbbe mai, cosa considera un buon cliente), sulla base dei vostri prodotti, della vostra storia, del posizionamento di mercato e dei competitor. Nel caso Tosi il maestro sara' Andrea M.

> **Nota terminologica.** Usiamo "Voice Twin" (non "gemello digitale" / "digital twin") perche' quel termine nasce nell'industria pesante (Tesla, NVIDIA) e implica sensori real-time su un oggetto fisico. Qui l'oggetto e' la conoscenza tacita di un maestro artigiano, quindi "Voice Twin" e' piu' onesto: il sistema gemella solo la **voce** e il criterio decisionale di chi conosce il prodotto meglio di chiunque altro. "Maestro" e' un parametro — oggi e' il produttore, domani potrebbe essere un sales specialist esterno se la voce del produttore non funziona.
>
> **L'agente si chiama Claudio.** Claudio e' l'italianizzazione di Claude (il modello di Anthropic che sta sotto). Il nome dichiara cosa c'e': l'intelligenza di Anthropic, resa italiana, al servizio di un artigiano italiano. Claudio e' l'agente che *agisce* (scrive email, legge menu, genera briefing card, chiama telefono); il Voice Twin e' il *cosa* (come parla e decide il maestro); il Maestro e' *chi* presta la voce (Andrea Tosi, in questo caso). Tre livelli ben distinti.

Poi la usiamo per generare schede informative per tutti i 47 target nella zona Turati di Milano.

**Come appare una scheda informativa:**

```
PROSPECT: La Panineria del Corso
INDIRIZZO: Via del Corso 15, Milano (Zona Turati)
TIPO MENU: Panini gourmet, birra artigianale
FASCIA PREZZO: €8-12 per panino
FORMAGGIO ATTUALE: Gorgonzola industriale (da analisi menu)
PRESENZA SOCIAL: 2.4K follower Instagram, 4.3 valutazione Google
ANGOLO DI APPROCCIO: Il loro panino "Autunno" usa gorgonzola —
                     entrata perfetta per degustazione cremoso DOP.
                     Menzionare il menu stagionale.
PRIORITA': 8/10 — Alta coerenza menu, posizionamento artigianale,
           zona comoda per consegne
ASSEGNATO A: Andrea C.
```

**Cosa otteniamo:** 47 schede cosi'. Andrea C. entra in ogni incontro conoscendo il prospect meglio di quanto il prospect conosca se stesso.

**Cosa serve:**
- Schede tecniche prodotto (ne abbiamo gia' la maggior parte)
- Strategia, visione e approccio comunicativo — cosa rende Tosi diverso

---

### Fase 2 — Tracciamento Pipeline + Follow-up (Settimana 6-8)

Il CRM diventa un tracker della pipeline in tempo reale. Ogni email, chiamata, visita, messaggio WhatsApp viene registrato. L'AI analizza ogni interazione e suggerisce cosa fare dopo.

**Come appare nel CRM:**
- Una board pipeline: Nuovo → Contattato → Meeting Fissato → Degustazione Fatta → In Trattativa → Vinto/Perso
- Dopo aver registrato una chiamata: l'AI dice "Richiama tra 3 giorni con proposta degustazione. Questo prospect ha detto che sta cambiando fornitori ad aprile."
- Lista priorita' giornaliera per Andrea C.: "Oggi chiama questi 5 prospect. Ecco perche'."

**Cosa ottenete:** Nessun prospect cade nel dimenticatoio. Ogni follow-up avviene puntuale. L'AI ricorda quello che ogni Andrea si e' dimenticato di scrivere.

**Cosa serve:**
- Andrea C. usa il CRM per registrare le interazioni (30 secondi per interazione)
- Check-in settimanale di 10 minuti per rivedere lo stato della pipeline

---

### Fase 3 — Email Outreach (Settimana 9-12)

L'AI prepara email personalizzate per ogni prospect, inviate da `hello@tosigorgonzola.com`. Ogni email viene revisionata da Andrea M. prima dell'invio.

**Come funziona:**
1. L'AI genera una bozza basata sulla scheda informativa del prospect e le interazioni precedenti
2. Andrea revisiona: approva, modifica o rifiuta
3. Un click per inviare
4. Tracciamento consegna (inviata, aperta)
5. Log interazione creato automaticamente

**Esempio di email che l'AI potrebbe scrivere:**

> Oggetto: Il cremoso che mancava al vostro menu autunnale
>
> Buongiorno,
>
> Ho visto il vostro panino "Autunno" — gran combinazione con la zucca e le noci.
> Noi del Caseificio Tosi produciamo un gorgonzola cremoso DOP servito in una
> confezione dedicata al servizio veloce - formato 1kg - senza crosta, stagionato 90
> giorni su assi di legno. Nessun compromesso, la qualita' ed il gusto e' tutto per noi.
>
> Se vi interessa assaggiarlo, posso passare con un campione questa settimana.
> Siamo a Gattico (No) ma raggiungiamo facilmente la vostra zona.
>
> A presto,
> Andrea

**Cosa serve da Andrea M:**
- Conferma che possiamo inviare da email aziendale `hello@tosigorgonzola.com`
- Revisione e approvazione delle email prima dell'invio (sempre)

---

### Fase 4 — Misurazione + Risultati (Settimana 13-16)

Smettiamo di costruire e iniziamo a misurare. 4 settimane di raccolta dati pura. Poi compiliamo i risultati.

**Cosa misuriamo:**
- Contatti a settimana (baseline vs. con AI)
- Tasso di risposta all'outreach
- Meeting e degustazioni prenotate
- Conversioni (nuovi clienti acquisiti)
- Tempo risparmiato
- Accuratezza AI (quanto spesso Andrea C. ha seguito i suggerimenti, e cosa e' successo quando non l'ha fatto)

**Cosa ottenete:**
- Una dashboard metriche nel CRM che mostra il prima/dopo
- Un case study completo che documenta l'esperimento
- Se funziona: un sistema che continua a girare e migliorare
- Se non funziona: documentazione onesta del perche' e cosa abbiamo imparato

---

## Quanto Costa

| Voce | Costo Mensile |
|------|--------------|
| Supabase (database + hosting) | Gratuito |
| Claude API (intelligenza AI) | ~€15-20 |
| Resend (invio email) | Gratuito (100/giorno) |
| Hosting CRM (Vercel) | Gratuito |
| **Totale infrastruttura** | **~€20/mese** |

L'investimento principale e' il tempo: ~10-15 ore/mese dal laboratorio FTB per costruire e mantenere il sistema.

---

## Cosa Ottiene Andrea M

Dopo 16 settimane, il Caseificio Tosi ha:

1. Un'AI che conosce ogni prospect meglio di quanto qualsiasi commerciale potrebbe fare manualmente
2. Schede informative con strategie di approccio personalizzate per tutti i 47 target
3. Un tracker della pipeline che mostra esattamente a che punto e' ogni prospect
4. Email scritte dall'AI pronte per approvazione con un click
5. Una lista priorita' giornaliera che dice a ogni Andrea chi chiamare e perche'
6. Una dashboard metriche che dimostra (o smentisce) il valore dell'AI
7. Un case study pubblicato che posiziona Tosi come produttore orientato all'innovazione

L'AI fa il lavoro di un analista commerciale a tempo pieno. Gli Andrea continuano a fare quello che sanno fare meglio: entrare dalla porta, aprire il gorgonzola e lasciare che il prodotto parli.

---

## Cosa Ci Serve Da Tosi

| Cosa | Quando | Tempo Richiesto |
|------|--------|----------------|
| Intervista baseline (2 Andrea) | Fase 0 | 15 min ciascuno |
| Schede tecniche prodotto | Fase 1 | Ne abbiamo gia' la maggior parte |
| Conferma permesso invio email | Fase 3 | 5 min |
| Check-in settimanale pipeline | Fase 2-4 | 10 min/settimana |
| Permesso case study | Fase 4 | Consenso scritto |

---

## Timeline

```
Aprile 2026         Maggio 2026         Giugno 2026         Luglio 2026
|----- Fase 0 ------|----- Fase 1 ------|----- Fase 2 ------|- Fase 3 → ...
  Baseline             Schede              Pipeline            Email +
  + Database           + Voice Twin         + Follow-up         Coordinatore

                     Primo output AI      Pipeline live        Sistema completo
                     nel CRM              in tempo reale       operativo
```

---

## Il Quadro Generale

Questo esperimento non riguarda solo vendere gorgonzola a 47 paninerie. Se funziona, lo stesso sistema funziona per qualsiasi produttore artigianale in Italia — frantoi, panifici, cantine, norcinerie. Tosi diventa il primo case study. La prova che l'AI puo' livellare il campo di gioco per gli artigiani che competono contro la scala industriale.

Documentiamo tutto. Pubblichiamo i risultati — vittorie e fallimenti. E Tosi viene riconosciuto come il produttore che l'ha dimostrato per primo. Magari suscita interesse ad Anthropic.

---

## Feedback di Andrea Tosi (ricevuto)

**Punti Forti:** Idea funzionale e brillante. Perfetta per mettere a punto il sistema. Replicabile su altri temi-mercati. Moltiplicatore di risorse. Tracciabilita' di tutte le informazioni. Creazione automatica di un database.

**Punti Deboli:** (1) Per le paninerie i menu online funzionano, ma per GDO/grossisti/dettaglio serve una piattaforma tipo CIRCANA. (2) Destinatario dell'email — rischio che vada persa. (3) Controllo e filtri — il controllo diretto deve entrare in gioco solo nella fase finale.

---

*Food Tech Bootcamp — Rendere la conoscenza alimentare computabile.*
*Contatto: hello@foodtechbootcamp.com*
