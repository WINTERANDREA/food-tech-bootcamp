# 02 — Sintesi intervista baseline Tosi (sessione 1)

**Fonti**:
- `Projects/Tosi/Docs/TOSI INTERVISTA - sessione 1/` (file A-L, audio + trascrizioni grezze)
- `Projects/Tosi/Docs/NOTE TOSI.xlsx` — Caratteristiche tecniche Tosi (testo firmato Andrea M) + vecchia lista "Perché scegliere Tosi"
- `Projects/Tosi/Docs/scheda tecnica cucchiaio 1kg.png` — scheda commerciale ufficiale del formato
**Intervistato**: Andrea M (Maestro, Caseificio Tosi)
**Intervistatore**: Andrea C (agente operativo, identità Claudio nel Voice Twin)
**Data intervista**: 2026-04-12
**Stato**: sintesi master — input diretto al Voice Twin e ai briefing card

> Questo documento è organizzato per **asse di riuso**, non per ordine delle domande. Ogni sezione è autoconsistente: un agente futuro può caricare una singola sezione (es. §5 per lavorare sul modello Ambassador) senza leggere il resto.

---

## Mappa di riuso

| Sezione | Output derivato |
|---|---|
| §1 Voice & Stile | `03-TOSI-Voice-Twin-System-Prompt.md` (in arrivo) — include claim firma "Latte, Uomo, Legno, Tempo" e gestione tensione positioning vecchio/nuovo |
| §2 Scheda prodotto | Briefing card, product sheet — include processo produttivo firmato Andrea M (600L caldaia, 1.5% sale, 0% scarto, TMC 30gg) + insight canale pizzerie |
| §3 Mercato Milano | Social proof briefing card, pitch Anthropic |
| §4 Pricing & obiezioni | Objection playbook Claudio, script chiamata |
| §5 Modello Ambassador | `05-TOSI-Ambassador-Model.md` (candidato doc dedicato), EU bandi, pitch replicabilità |
| §6 Cliente ideale | Filtri prospect qualification (NO auto-exclusion) |
| §7 Protocollo degustazione | Playbook visita Andrea C |
| §8 Guardrail Claudio | System prompt Voice Twin, matrice approvazione |
| §9 Stagionalità | Calendar outreach, pivot estivo |
| §10 Successo Fase 1 | KPI experiment, case study |
| §11 Canale contatto | Flow handover email → telefono |
| §12 Open questions | Scaletta sessione 2 intervista |

---

## 1. Voice & Stile (input diretto Voice Twin)

### Registro lessicale
- **"Voi"** al primo contatto. Passaggio a **"tu"** solo quando la relazione è instaurata.
- **No anglicismi**. No slang, abbreviazioni, emoji. Scrittura pulita e lineare.
- Italiano di forma, non di forma forzata.

### Parole bandite
- `eccellenza`, `unico`, `premium`, e in generale il marketing-speak generico.
- I concetti **qualità / artigianalità / tradizione** vanno **sottintesi, mai nominati esplicitamente**. Se devi dirli, vuol dire che non stai mostrando abbastanza.

### Lessico vivo — da usare
Parole che Andrea M usa e vuole sentire:
- `mani`, `fagotto`, `cavata`, `fatica`, `sudore`, `respiro delle persone`
- `sveglia alle quattro del mattino`, `scaricare il latte`
- `cavare`, `insaccare`, `girare`, `rivoltare`, `bucare`, `confezionare`
- Dal testo firmato in `NOTE TOSI.xlsx`: `caldaia piccola`, `cagliata soffice tagliata grande`, `tessitura della pasta`, `penetrazione non forzata del sale`, `penicilli`, `celle sottoterra`, `legno vivo che respira, assorbe e filtra`, `ogni forma si prende il suo tempo`

Il prodotto si racconta attraverso gesti umani concreti e materiali vivi, non aggettivi.

### Claim firma — "Latte, Uomo, Legno, Tempo"
Nel testo `Caratteristiche tecniche Tosi` (xlsx, sheet 1, firmato Andrea M), la chiusura è:

> "Latte, Uomo, Legno, Tempo. In fondo di questo stiamo parlando."

**Questo è uno slogan pronto all'uso.** Quattro parole, ritmo, concretezza totale, zero marketing-speak. Coerente al 100% col nuovo positioning "mani/maniaci". **Da usare come firma delle briefing card e come chiusura possibile delle email Claudio.**

### Tensione positioning vecchio vs nuovo — da gestire
Il secondo foglio di `NOTE TOSI.xlsx` contiene una vecchia lista **"Perché scegliere Tosi"** con 11 voci:
> È buono / artigianale e tradizionale / indipendente / piccolo / **unico e diverso** / sano / innovativo / fatto da persone per le persone / etico e rispettoso dei valori umani / gioia, piacere e convivialità / un'idea di mondo…

**Problema**: questa lista contiene **esattamente** le parole che Andrea M nell'intervista di sessione 1 dichiara bandite o da sottintendere:
- `unico` → **parola bandita esplicita**
- `artigianale, tradizionale, sano` → devono essere **sottintesi, non nominati**

**Interpretazione**: il positioning Tosi sta evolvendo. La lista xlsx è la vecchia versione claim-based; il nuovo positioning è **gesto-based** (mani, fagotto, Latte-Uomo-Legno-Tempo). Claudio deve lavorare col **nuovo**, non col vecchio.

**Come usare la vecchia lista**: solo come serbatoio di valori interni (cosa Andrea M vuole trasmettere), mai come testo cliente-facing. Se un prospect chiede "perché Tosi", Claudio non risponde con la lista — risponde raccontando un gesto concreto del processo.

### Tono target
> "Mite, consapevole, informato, sfaccettato, brillante, aperto."

Rigidità solo sull'etica del prodotto: pulizia, rispetto del personale, manualità. Tutto il resto è modulabile.

### Principi di credibilità (hard rules)
1. **Mai promettere ciò che non si può mantenere.** "Il concetto di dover promettere una cosa è di per sé una debolezza."
2. **Mai raccontare due versioni della stessa storia.** Puoi spostare l'enfasi, mai il contenuto.
3. **La forza commerciale è la credibilità, non la persuasione.**
4. **Accettare di risultare antipatico** piuttosto che simpatico-a-tutti. "Non si può piacere a tutti."
5. **Mai approccio "prezzo più basso del mercato"** — non siamo performanti lì, e il cliente lo capisce subito.
6. **Identità AI dichiarata, non nascosta.** Le cold email sono firmate **"Claudio per Tosi"** (o wording equivalente da validare con Andrea M nella call di stile). Il prospect sa fin dal primo contatto che sta parlando con un agent AI che lavora per conto del Maestro Tosi. Non è un ripiego difensivo: è coerente con la regola #3 (credibilità > persuasione) e con lo spirito Andon Labs del progetto. Fingere umanità e farsi scoprire distrugge la credibilità molto più che dichiararsi fin dall'inizio.

### Apertura — niente template fisso
Andrea M non ha una frase di apertura. Legge la persona nei primi secondi e modula. Il Voice Twin deve mimare questa capacità: **variare l'enfasi su leve diverse in base al segnale del prospect** (proprietario vs buyer vs responsabile vs dipendente storico), **non partire da script**. Filo conduttore unico, sfumature diverse.

### Nuovo positioning in sviluppo — CRITICO
Andrea M sta sviluppando in queste settimane (per il Salone dei Formaggi di Parigi) un asse narrativo inedito:

> **"Le mani sono il nostro manifesto"** — sottotitolo possibile **"maniaci"** (wordplay mani + maniaci, traducibile in più lingue).

Obiettivo: uscire dalla parola `artigianale` (che ormai usano anche le industrie) e rientrare nel gesto concreto. Per le paninerie Milano si collega naturalmente a un triangolo narrativo:

**pane → mani → panino** (il panino si mangia con le mani, il formaggio si fa con le mani, il pane si impasta con le mani).

Questo asse va anticipato nelle briefing card Fase 1.

### Filosofia alimentare
- **Cibo accessibile** (anti-elitario) ma **anti-discount**. Il cibo deve essere accessibile a tutti perché tutti ne hanno bisogno — ma accessibile non significa scadente a basso prezzo.
- **Prodotto sano** = latte + sale + caglio, niente altro. No nitriti, no nitrati, no polifosfati, no grassi aggiunti. Andrea M posiziona Tosi come "prodotto sano dentro un consorzio DOP truccato".
- **⚠️ Attenzione**: la rivendicazione "sano/pulito" va **gestita con cautela**. Siamo in un consorzio che non consente di farne bandiera esplicita. Va raccontato per sottrazione ("latte sale caglio, nient'altro"), non per accusa diretta.

### Vantaggio operativo "già pronto, non serve fare niente"
Il gorgonzola Tosi cremoso è **già nella consistenza giusta**. Non serve scaldarlo, fonderlo, lavorarlo, mantecarlo. Gli altri formaggi da panino (fontina, gouda, conté) richiedono invece una fase di fusione per essere spalmabili — più lavoro, più attrezzi, e un'alterazione tecnica che cambia il formaggio.

Per il locale questo è un **vantaggio pratico**, non un argomento di apertura:
- meno passaggi operativi in cucina
- nessuna attrezzatura dedicata (press, salamandra, forno per il solo formaggio)
- il prodotto arriva al cliente come il casaro l'ha pensato, non come la cottura l'ha trasformato

**Da non usare come killer frase di apertura** — rischia di confondere (il concetto "crudo vs fuso" applicato al formaggio non è intuitivo). Da nominare come beneficio concreto **dopo** aver stabilito interesse sul prodotto e sul processo.

---

## 2. Scheda prodotto — Gorgonzola Cremoso 1kg

### Denominazione esatta (scheda ufficiale)
Dalla `scheda tecnica cucchiaio 1kg.png`:
> **GORGONZOLA DOLCE A CUCCHIAIO IN VASCHETTA — SENZA CROSTA**

Caratteristiche formato dichiarate:
- **Peso unitario**: ~1 kg
- **Confezione**: vaschetta rettangolare con coperchio, sottovuoto/termosaldata
- **TMC**: **30 giorni**
- **Scarto**: **zero** ("assoluta assenza di scarto" — leva economica diretta per il locale)

### Destinazione dichiarata (dalla scheda ufficiale)
> "Mondo del **panino Gourmet**, la vaschetta pratica e studiata per occupare poco spazio nel frigorifero si adatta ad un uso variabile nelle quantità, sempre con facilità di utilizzo."

**Conferma perfetta del target Fase 1**: la scheda ufficiale indica già le paninerie gourmet come destinazione naturale del formato. Non stiamo forzando un uso, stiamo eseguendo una strategia prodotto che Tosi aveva già codificato.

### Pizzerie gourmet incluse in Fase 1 — nessuna esclusione per tipo locale
La scheda ufficiale aggiunge:
> "Le pizzerie stesse potrebbero valutare la convenienza, continuando a crescere l'attenzione del comparto per i prodotti di qualità **usati fuori forno e fine cottura**."

**Decisione operativa (2026-04-13)**: le pizzerie gourmet sono incluse in Fase 1. Più in generale: **nessuna esclusione a priori per tipo locale** — potenzialmente tutti i formati possono essere clienti validi se hanno l'attributo "attenzione al prodotto + capacità di racconto" (§6). Coerente con la posizione di Andrea M (nessun pregiudizio a priori, neanche su catene).

**Stesso vantaggio operativo per le pizzerie**: la scheda ufficiale indica esplicitamente l'uso "fuori forno e fine cottura", ovvero aggiungere il gorgonzola sulla pizza **dopo** la cottura. Questo preserva il formaggio dall'alterazione termica e si integra nel flusso di lavoro della pizzeria gourmet senza modifiche (il topping a fine cottura è già pratica diffusa per ingredienti di qualità). Come per le paninerie, è un beneficio concreto da nominare in fase di approfondimento, non una leva di apertura.

**Coerenza modello Ambassador**: le pizzerie gourmet Milano sono spesso concentrate nello stesso raggio 5-10km del centro storico delle paninerie → il nodo Ambassador serve tutti i segmenti senza modifiche logistiche.

**Scraping/CRM**: il campo `tipo locale` già presente nel prospect pool è sufficiente per distinguere i formati. Nessun attributo `canale` nuovo da aggiungere. Le briefing card e gli script Claudio si modulano sul `tipo locale` esistente con la stessa struttura e lo stesso messaggio di fondo, nominando il vantaggio operativo (già pronto, nessun passaggio extra) come beneficio secondario contestualizzato al formato.

### Tre argomenti di vendita forti
1. **Invaschettato a mano, senza stress** → mantiene le qualità organolettiche della forma intera (lavorazione tradizionale con latte, sale, caglio, croste originali preservate)
2. **Shelf life 30-40 giorni sottovuoto** → sufficiente per rotazione su formato 1kg
3. **Vaschetta rettangolare richiudibile** → destruttura il tondo, ottimizza lo spazio frigo, coperchio di chiusura

### Differenza sensoriale al primo assaggio
- **Equilibrio sapidità/dolcezza unico**.
- **Assenza di finale acido/amaro** — il difetto tipico dell'industriale deriva da squilibrio sale-crosta e siero residuo non evacuato. Nel Tosi il siero è evacuato.
- **Cremosità totale senza siero**.
- **Marker organolettico unico** — percepibile in assoluto, fortissimo in panel test comparato.
- **Rischio percettivo**: il consumatore abituato all'industriale può percepire l'assenza di acido/amaro come "mancanza di gusto" o "troppo dolce", perché la sua memoria storica è calibrata sul difetto. Questo va anticipato.
- **Prodotto divisivo**: o piace tantissimo o non piace — spesso il "non piace" è per l'**aspetto visivo** (il verde della muffa sul cremoso), non per il gusto.

### Segnali di qualità
- **Dopo il primo assaggio nasce il desiderio del secondo** — litmus test universale di qualità alimentare.
- **Bambini 3-4 anni** come palato pulito (nessuna memoria storica del gorgonzola industriale) — reazione positiva è il segnale più sincero.

### Cremoso vs Dolce — "gemelli dalla stessa madre"
Metafora di Andrea M, riusabile in narrazione:
> "Sono due gemelli figli della stessa madre, ma i due gemelli non necessariamente hanno lo stesso carattere."

Stessa caldaia, stessa mano, ma microvariazioni determinano il destino: 3mm di crosta in più, posizione in salina, microclima cella, assorbimento di sale leggermente diverso. La **selezione interna** decide quale forma resta dolce e quale diventa cucchiaio dopo stagionatura aggiuntiva.

### Abbinamenti
| Asse | Esito | Note |
|---|---|---|
| Carne, selvaggina | Facile | Mitiga ferrosità/note metalliche del sangue e degli umori di cottura |
| Pesce | Per contrasto | Polpa di gambero rosso/viola sì; testa del gambero no |
| Vegetale | Facile | Dona sapidità e grassezza al vegetale crudo o cotto |
| Pasta (cacio e pepe col gorgonzola) | **Signature dish degustazione** | Cremosità totale senza residui amari |
| Pizza | Scontato | Già diffuso |
| Panettone | Esperimento interrotto | 7-8 anni fa, export USA, bloccato per muffe superficiali su shelf life lungo |
| Pane | Già spalmabile, nessun passaggio extra | Vantaggio operativo per il locale: meno lavoro, meno attrezzi — non usare come apertura (vedi §1) |

### Processo produttivo — dalle parole di Andrea M
Dal foglio `Caratteristiche tecniche Tosi` in `NOTE TOSI.xlsx` (testo firmato, circa 25 anni di codifica). Questi sono i **passaggi di processo che Andrea M ritiene distintivi** e che Claudio deve saper raccontare:

1. **Caldaia piccola** — solo **600 litri di latte per 6 forme**. Correzioni e attenzioni micro su ogni caldaia → tutte le forme hanno le stesse caratteristiche.
2. **Latte caricato con dolcezza e lentamente** (non aggressivo).
3. **Cagliata soffice, morbida, tagliata grande** — la dimensione grande preserva la struttura perché la mano dell'uomo sa non romperla.
4. **Fagotto** — la cagliata viene raccolta in un piccolo telo che protegge e innesca lo spurgo graduale del siero.
5. **Insacco a mano in piccoli pezzi incrociati** → crea la **"tessitura" perfetta** della pasta finale.
6. **Pasta soffice** → consente **penetrazione non forzata del sale** → il siero se ne va velocemente **con poco sale** (**1.5%**, omogeneo tra esterno e interno).
7. **Stagionature piccole** — "formaggio buono in stagionatura piccola" (rovescio del detto del vino). Su un prodotto umido permette mix aromatico perfetto.
8. **Celle sottoterra** — "solo lì si trovano le condizioni migliori per lo sviluppo dei penicilli".
9. **Supporto in legno** — "non solo perché è naturale, ma perché è **vivo, respira, assorbe e filtra**".
10. **Tempo individuale per ogni forma** — "lasciamo che ogni forma si prenda il suo tempo, e solo quando sarà pronta la lasceremo andare, non importa di quanti mesi avrà avuto bisogno".

**Dati numerici utilizzabili nelle briefing card e nelle email Claudio**:
- Caldaia: **600L → 6 forme** (una forma da 100L di latte)
- Sale: **1.5%** (contro medie industriali più alte + squilibri)
- TMC: **30 giorni**
- Scarto: **0%** (vaschetta senza crosta)

Questi quattro numeri sono il vocabolario factual di Claudio. Sono verificabili, concreti, non marketing — ideali per l'apertura di una cold email che deve stabilire credibilità.

---

## 3. Mercato Milano & Competitor

### Mappa competitiva
- **Mercato dominato da distributori brand-less** con marchio proprio: **Rognoni**, **Agenzia Lombarda**, **Castellanza** (grossisti evoluti che brandizzano per giostrare tra Igor e altri produttori).
- **Croce di Lodi** — qualche presenza storica per vicinanza geografica.
- **Fascia alta ristorazione**: **Gufanti Selecta**, **Longino & Cardinal** — "mistero gaudioso" su quale gorgonzola distribuiscano.

### Vuoto strategico
Pochissimo gorgonzola con brand identity chiara e riconoscibile a Milano. **Spazio libero** per Tosi come brand identificabile. Questa è la tesi di posizionamento di Fase 1.

### Social proof — clienti top a Milano
Clienti Tosi esistenti a Milano (da intervista):
- **Berberè** — usa il gorgonzola piccante Tosi
- **Pizzium / Pizzino di Napoli** — usa il gorgonzola Tosi

⚠️ **Regola operativa Claudio (2026-04-13)**: **non citare Berberè nelle cold email**. Resta utile come riferimento interno per capire il profilo "pizzeria gourmet cliente-tipo" e come validazione retrospettiva del modello, ma **non è spendibile come social proof cliente-facing**. Verificare caso per caso con Andrea M prima di citare qualsiasi altro cliente nelle comunicazioni outbound.

Andrea M non è certo della lista completa dei clienti top Milano → lista da validare in sessione 2 (open question §12).

---

## 4. Pricing & Obiezioni

### Prezzi
| Voce | Valore |
|---|---|
| Ex-work Gattico | **€12.30/kg** |
| Esselunga retail (al banco cucchiaio) | ~€22-23/kg |
| Consegna singola kg con trasporto tradizionale | €22-23/kg (trasporto ~€10 = killer) |
| Drop 5kg | €13.30-14/kg ("non invitante") |
| **Drop 20kg via Ambassador** | **€13.30-14/kg target listino** |

### Economia su panino (argomento al locale)
- 80-120g di gorgonzola per panino.
- Incidenza costo: **€0.90-1.20 per panino**.
- Panino gourmet Milano: €12-16 (fino a €37-38 per riferimenti estremi come Panedicristallo).
- Il gorgonzola Tosi **risolve la componente formaggio** in un colpo solo: cremosità integrata, non serve aggiungere altro per evitare il panino asciutto. Leva economica primaria.

### Reframing radicale sull'obiezione prezzo
Andrea M **rifiuta** la giustificazione etica. La sua risposta all'obiezione "perché dovrei pagarlo più dell'industriale?":

> "Non devi pagarlo di più perché è artigianale — questo sarebbe etica, approccio emotivo. Devi pagarlo di più **perché è più buono, perché ti piace di più, perché c'è una differenza**."

Il criterio unico è l'**appagamento organolettico**. L'artigianalità è storytelling aggiunto, non giustificazione di prezzo.

L'intermediario (ristorante, bar, negozio) **ha bisogno di argomenti di racconto** da passare al cliente finale — e il brand Tosi glieli fornisce insieme al prodotto. Questo è un servizio aggiunto, non un orpello.

### Obiezioni ricorrenti
Poche, spesso **positive nella sostanza**. Esempio reale riportato: un cliente GDO si lamenta perché "il cremoso è troppo cremoso per tagliarlo" — l'obiezione è lo specchio della qualità. Accogliere come conferma, non come problema.

### Cosa **NON** fare
- Mai giocare sulla leva prezzo basso — Tosi non è performante lì e perderebbe il frame di credibilità.
- Mai scontare sotto listino in autonomia Claudio (vedi §8).

---

## 5. Modello logistico Ambassador — DECISIONE NUOVA, CRITICA

Questo è il **modello operativo inedito** emerso in questa intervista. Va documentato come fondamento di Fase 1 e rappresenta la **dimensione replicabile** del progetto — quella che rende Tosi un case study per Anthropic e un template per altri produttori.

> ⚠️ Candidato a diventare documento dedicato `05-TOSI-Ambassador-Model.md` una volta consolidato con sessione 2.

### Principio guida
**Bypass del B2B tradizionale.** La velocità ordine → consegna deve essere misurata in **ore, non giorni**.

> "Non devo parlare più in logica B2B. Devo parlare di **1×2**: ordino alle 10, consegno alle 11."

Questa affermazione è il cuore del modello. Tutto il resto discende da qui.

### Architettura a tre nodi

```
TOSI (Gattico)                AMBASSADOR (zona Turati MI)         CLIENTE FINALE (paninoteca)
 │                              │                                   │
 │  spedizione 20-30kg          │  stoccaggio refrigerato           │
 │  a palette, €20 trasporto    │  fattura al cliente finale        │
 │  €1/kg incidenza             │  rivenditore autorizzato Tosi     │
 └─────────────────────────────▶│                                   │
                                │  rider refrigerato (Glovo/        │
                                │  Deliveroo/equivalente)           │
                                │  delivery ore-based               │
                                └──────────────────────────────────▶│
                                                                    │
                                                                    │  pagamento carta
                                                                    │  immediato via delivery
                                                                    │  esposizione finanziaria zero
                                                                    ▼
```

### Nodo 1 — Tosi (Gattico)
- Spedisce 20-30kg per volta all'Ambassador.
- Prezzo di uscita €12.30/kg + ~€1/kg di trasporto diluito su 20kg = ~€13.30/kg al nodo Ambassador.
- Frequenza rifornimento: guidata dalla rotazione reale, non schedulata.

### Nodo 2 — Ambassador
- Locale fisico in zona Turati Milano (o equivalente centrale), es. bar/negozio "amico" con spazio refrigerato.
- **Fattura direttamente al cliente finale** — è il rivenditore autorizzato di fatto.
- Incassa, poi regola con Tosi a condizioni concordate (listino interno).
- Riceve benefici economici: margine sul rivenduto + gorgonzola scontato/gratuito su rotazione + branding associato a Tosi.
- **Gestisce l'ultimo 100 metri**, non l'ultimo chilometro. Questa è la differenza con la distribuzione retail tradizionale.

### Nodo 3 — Delivery finale
- Rider refrigerato (Glovo, Deliveroo, o player analogo autorizzato al trasporto di prodotto fresco).
- Tempi: ordine ore X → consegna ore X+1.
- Pagamento: carta di credito immediato direttamente al rider. **Esposizione finanziaria Ambassador azzerata** (niente 30/60/90 giorni, niente solleciti).

### Requisiti Ambassador
- Spazio stoccaggio refrigerato adeguato (catena del freddo).
- **Licenza di rivendita** prodotto confezionato (da verificare per bar — vedi §12).
- Parametri HACCP corretti.
- Relazione fiduciaria con Tosi (tipo "amicizia commerciale").
- Disponibilità a brandizzarsi come punto Tosi.

### Replicabilità
Il modello nasce per Milano ma è progettato fin dall'inizio per **Roma e Napoli**:
- Tutte e tre hanno sistemi di delivery moderni operativi.
- Tutte e tre hanno forte concentrazione clienti in raggio **5-10km di centro storico**.
- Modello cloneabile senza riprogettazione.

**Questa è la dimensione che va venduta ad Anthropic come case study** e a EU/EIT Food come progetto replicabile per altri produttori artigiani.

### Altri dettagli operativi
- **Shelf life**: 30 giorni aperto/chiuso. Per paninerie con rotazione rapida la conservazione estesa non è critica (un pezzo da 1kg si esaurisce in 1 giorno-1 settimana). Aggiungere **foglietto OFene** in vaschetta per rotazioni medie.
- **Reso/sostituzione**: su queste quantità, **storno immediato senza discussione**. "Una vaschetta bucata in viaggio non è da discutere, si storna."
- **Minimo d'ordine al cliente finale**: teoricamente 1 pezzo (~1kg). Ragionare in termini di pezzo, non di peso.
- **Peso fisso — riflessione aperta**: oggi la vaschetta è riempita manualmente, senza peso fisso. Portare la vaschetta a **1 pezzo = 1 vaschetta = 1kg** semplificherebbe drasticamente la gestione (fatturazione, logistica, rider). Rischio: regalare 30-50g per vaschetta. Costo accettabile se la semplificazione lo ripaga. **Decisione aperta — sessione 2**.

---

## 6. Cliente ideale & Red flag

### Profilo cliente
Non è una categoria, è un **attributo**:
- Locale orientato a **qualità, distintività, racconto**.
- Formati inclusi in Fase 1 (canali primari, entrambi): bar pranzo, aperitivi, focacceria, bistrot apericena, paninoteca gourmet, **pizzeria gourmet** (uso fuori forno / fine cottura).
- Capacità (o desiderio) di fare **storytelling del produttore**, non solo di vendere un panino o una pizza.

### Comportamenti da premiare attivamente
Clienti che:
1. **Scrivono "Tosi" in carta/menu** (riconoscimento esplicito del produttore)
2. **Raccontano la storia del produttore** al cliente finale
3. **Continuità d'uso nel tempo** (non one-shot)

Questi clienti vanno ricompensati con incentivi espliciti (sconti fedeltà, formazione, eventi, rotazione privilegiata). Claudio deve **flaggarli automaticamente** ad Andrea M per riconoscimento.

### Red flag
- **Nessun pregiudizio a priori**. Andrea M: *"Non sarei offeso se mi chiamasse McDonald's."*
- Soglia soggettiva personale di Andrea M ("persone con cui non andrei a cena") **non è esportabile come guardrail automatizzato** — è filtro personale suo, non regola del sistema.
- **Claudio non deve auto-filtrare prospect per categoria.** Procede su tutti i prospect qualificati dallo scraping, senza escludere a priori per brand o formato.

---

## 7. Protocollo degustazione

### Problema aperto — formato assaggio
Il cucchiaio tal quale **non è degustabile**. La vaschetta 100g non termosaldata non regge 7-10 giorni di ciclo visita. Decisione tecnica da prendere prima dell'esecuzione Fase 1:

- **Opzione A** — Fettina 150g dal "gemellino" (formato dolce meno cremoso). Si può confezionare, ma non rende la cremosità piena.
- **Opzione B** — Vaschettina 100g dedicata, termosaldata. Richiede attrezzaggio minimo. Esiste già un formato (quello dato a Cisa) da valutare.

**Andrea M propende per B** ma riconosce il trade-off operativo. → Sessione 2.

### Svolgimento visita
1. Andrea C arriva con **1-2 pezzi** (assaggio + campione da lasciare).
2. Degustazione congiunta.
3. **Lascia quantità** al locale per test autonomo su un loro panino reale. Questo è il vero test commerciale.

### Chi fa la degustazione
**Andrea C da solo.** Andrea M non serve in visita.

> "Il prodotto parla da solo. Dobbiamo essere così bravi."

### Follow-up
- **Auspicabile che sia il cliente a richiamare** — è il segnale più sincero di interesse.
- Se no, **accordo esplicito sul timing** durante la degustazione stessa ("ci sentiamo mercoledì prossimo?"), non dopo.
- **Mai insistere.** Frase chiave di Andrea M: *"Non siamo venditori di enciclopedie porta a porta."*
- Claudio gestisce i reminder nel rispetto di questa regola: un promemoria, non una campagna di pressing.

---

## 8. Guardrail Claudio — matrice autonomia

Matrice di escalation per il Voice Twin, estratta dalle risposte in sezione F dell'intervista.

| # | Attività | Autonomia Claudio | Escalation a |
|---|---|---|---|
| 1 | Scraping / ricerca prospect | Totale | — |
| 2 | Prima email contatto | Totale **dopo** validazione stile iniziale | Andrea C valida stile prima email una volta, poi libera |
| 3 | Invito a degustazione | Totale | — |
| 4 | Prenotazione degustazione | Totale | — |
| 5 | Follow-up standard post-degustazione | Totale | — |
| 6 | Listino standard (~€13.30-14/kg) | Totale | — |
| 7 | **Sconti sotto listino** | **Zero autonomia** | Andrea M sempre |
| 8 | Clienti multi-sede / catene (10+ locali) | Nessuna | Andrea M — trattativa diretta |
| 9 | Contratti con fatturazione non standard | Nessuna | Andrea M |
| 10 | Problemi operativi Ambassador ↔ cliente | Gestione Claudio | Andrea M solo se escalation grave |
| 11 | Flagging clienti top (storytelling, carta, continuità) | Flagging automatico | Andrea M informato per rewards |
| 12 | Citare clienti Tosi esistenti come social proof in cold email | **Vietato per default** — in particolare **mai Berberè**. Altri nomi solo dopo autorizzazione esplicita Andrea M | Andrea M caso per caso |

### Regola d'oro
> **Andrea M approva lo stile della prima email una volta sola.** Dopo quella validazione, Claudio opera autonomamente entro il perimetro listino. Nessun paletto addizionale "email per email".

### Canali Andrea M ↔ Claudio ↔ Andrea C — architettura comunicazione

Decisione operativa (2026-04-13). Ci sono **due esigenze distinte** con canali diversi.

**A. Validazione stile one-shot** (bloccante pilot, massima attenzione)
- **Canale**: call dedicata (30 min) + documento condiviso con 2-3 varianti di cold email.
- **Momento**: una volta sola, prima del go-live dell'outbound.
- **Output**: approvazione esplicita di Andrea M, eventuali modifiche puntuali catturate nel doc. Il risultato finale va versionato nel system prompt del Voice Twin come "stile validato Andrea M — data X".
- **Perché non WhatsApp/email**: merita un tavolo dedicato, un dialogo live coglie sfumature che un thumbs-up asincrono non cattura. Produce anche materiale utilizzabile per la documentazione del Voice Twin (come le sue correzioni spiegano le regole di stile).

**B. Escalation ongoing — interfaccia di review nel CRM (stile Andon Labs)**

Per tutte le decisioni che richiedono human-in-the-loop durante l'operatività (approvazione email generate, sconti, catene multi-sede, segnalazioni critiche), Claudio **non scrive mai direttamente sui canali esterni**. Scrive in una **coda di review interna al CRM**.

**Account e identità (Supabase auth nel tosi-mini-crm, multi-user già configurato)**:

| Attore | Email account | Ruolo |
|---|---|---|
| Andrea C | `sviluppo@tosigorgonzola.com` | Builder + field sales. Approva il grosso del traffico routine. |
| Andrea M | `commerciale@caseificiotosi.it` | Maestro Tosi. Interviene sulle escalation della matrice guardrail. |
| Claudio | `claudio@tosigorgonzola.com` | Agent identity. Indirizzo da cui partono le notifiche di review e (potenzialmente) le cold email outbound. |

Nota narrativa: Claudio ha un proprio indirizzo — non è anonimo. Le notifiche arrivano **da** `claudio@tosigorgonzola.com` **a** `sviluppo@tosigorgonzola.com` e/o `commerciale@caseificiotosi.it` con oggetto chiaro ("Claudio: 1 email da revisionare — [nome prospect]"). Andrea M riconosce il mittente come parte del sistema Tosi → non rientra nel pattern "email inattese da sconosciuti" che dichiara di ignorare in §11.

**Doppio dominio**: `tosigorgonzola.com` (esperimento + agent) e `caseificiotosi.it` (istituzionale Andrea M). La separazione è utile — isola l'esperimento dal dominio storico del caseificio e protegge la reputazione email di `caseificiotosi.it` mentre Claudio fa outbound.

**Mittente cold email outbound** (deciso 2026-04-13): `claudio@tosigorgonzola.com` con display name **"Claudio per Tosi"** (wording esatto da finalizzare con Andrea M nella call di stile). Identità AI dichiarata, non nascosta — vedi §1 principio di credibilità #6. Questa decisione supera il riferimento storico a `hello@tosigorgonzola.com` presente nella documentazione precedente.

**Implicazioni tecniche pre-pilot**:
- **Warm-up dominio `tosigorgonzola.com`**: dominio nuovo, serve 1-2 settimane di volumi crescenti prima del primo outbound a volume. Pianificare nella timeline.
- **SPF/DKIM/DMARC su entrambi i domini**: verificati e funzionanti prima di qualsiasi invio. Altrimenti anche le notifiche `/review` verso `commerciale@caseificiotosi.it` rischiano spam o blocco dal filtro Tosi.

Architettura:
- **Nuova route nel CRM**: `/review` (o simile), lista drafts in coda di approvazione con filtro per tipo (email cold, follow-up, decisione strategica, flag cliente top).
- **Due account**: Andrea M e Andrea C hanno ciascuno il proprio account nel tosi-mini-crm (Supabase auth). Entrambi possono approvare o rifiutare. Nessun quorum — la prima approvazione fa fede.
- **Azioni disponibili per draft**: `Approva & invia` / `Rifiuta con feedback` (feedback libero obbligatorio). Il feedback di rifiuto viene loggato e usato come contesto per il draft successivo sullo stesso prospect.
- **Notifica**: quando un draft entra in coda, il sistema manda **email di notifica** (subject chiaro tipo "Claudio: 1 email da revisionare — [nome prospect]") con link diretto al draft nel CRM. L'email parte dal dominio Tosi quindi Andrea M la riconosce (non rientra nel pattern "email inattese da sconosciuti" che dichiara di ignorare in §11).
- **Log**: ogni approvazione/rifiuto è tracciato in `interactions` (chi, quando, cosa). Questo diventa training data per iterare il Voice Twin.
- **Stile Andon Labs**: AI propone, umano dispone. Il costo di un errore falso-positivo (email sbagliata inviata) è asimmetricamente più alto del costo di un review click → vale la pena il checkpoint umano anche quando il sistema è confidente.

Chi approva cosa in pratica:
- **Andrea C** approva il grosso del traffico routine: prime email su prospect standard, follow-up, prenotazioni degustazione.
- **Andrea M** interviene sui casi che attivano escalation (vedi matrice righe 7-9-12), o quando Andrea C vuole un second pair of eyes.
- Il flusso di notifica è lo stesso per entrambi — è un layer di governance, non un workflow gerarchico.

**Fase 1 (pilot)**: è sufficiente la route `/review` + auth a due utenti + notifica email. Niente WhatsApp, niente bot, niente integrazioni esterne. Minimizza la superficie tecnica da costruire prima del go-live.

**Fase 2+**: possibile estensione con notifica WhatsApp come trigger aggiuntivo (solo alert → link al CRM), se l'email si rivela insufficientemente tempestiva. Da valutare sulla base del volume reale.

### Filosofia guardrail
Andrea M preferisce guardrail espliciti ma larghi. La ratio è:
- **Meno paletti = sistema più replicabile**.
- Gli unici veri paletti sono: **prezzo** (hard), **scala** (clienti multi-sede richiedono trattativa umana), **stile** (prima approvazione una tantum).
- Tutto il resto è deliberatamente automatizzabile, anche al costo di qualche errore, perché l'esperimento vuole testare il sistema — non proteggerlo dalle imperfezioni.

---

## 9. Stagionalità & timing

### Curva del consumo
- **Picco**: autunno/inverno. Gorgonzola tradizionalmente legato a stagione fredda/piovosa.
- **Estate Milano**: si svuota. Meno studenti, ferie che si allungano (giugno-settembre). **Finestra sottoperformante.**
- **Pivot estivo**: piatti freddi, e come leva narrativa estrema il **gelato al gorgonzola**.

### Finestra outreach consigliata
**Settembre – maggio**, evitando:
- Agosto (ferie)
- Periodi festivi (Natale/Epifania, Pasqua)

### Fiere come leva contatto
**Non disponibili nei prossimi mesi.** Le fiere Tosi prossime sono tutte export (Salone dei Formaggi Parigi in primis). **Non possiamo invitare prospect italiani in eventi**. Escludere questa leva dal playbook Fase 1.

---

## 10. Definizione di successo Fase 1

Andrea M ha espresso una definizione deliberatamente **larga** per l'esperimento.

### Soglie
- **Soglia numerica bassa**: >1 cliente acquisito = successo quantitativo.
- **Successo vero**: validare che il **sistema completo** funzioni come insieme:
  - scraping + qualificazione
  - Claudio (Voice Twin) su outbound
  - Ambassador + delivery come ultima miglia
  - flusso dati CRM
- **Replicabilità > volume.** Il valore primario è poter clonare il modello su Roma, Napoli, altri prodotti, altri artigiani.

### Fallimento
- **Accettabile**: il target prospect era sbagliato (si impara per la prossima iterazione).
- **Grave**: il modello non è replicabile. Se funziona solo per Tosi a Milano grazie a relazioni personali preesistenti, abbiamo perso.

### Valore doppio esplicito
Questo esperimento ha **due output paralleli**:
1. Un **modello di vendita AI** riusabile.
2. Un **nuovo modo di comunicare Tosi** (positioning "mani/maniaci", etica alimentare, narrazione artigiano).

Entrambi vanno valorizzati nel case study, non solo il primo.

---

## 11. Canale contatto — baseline attuale

### Andrea M oggi
- **Telefono prima**, email secondaria.
- Andrea M **non risponde a email inattese da sconosciuti** — le gestisce come spam di default.

### Implicazione per Claudio
Claudio deve progettare il flusso **email → telefono**, non aspettarsi risposte email come KPI primario:
- Cold email serve a **legittimare la chiamata successiva**, non a chiudere.
- KPI intermedio = numero di prospect che accettano una **telefonata di 5 minuti** post-email.
- KPI finale = numero di **degustazioni prenotate**.

---

## 12. Open questions per sessione 2

Scaletta diretta della prossima intervista. Ogni punto è bloccante per l'esecuzione operativa di Fase 1.

1. **Formato assaggio cucchiaio** — decisione A (fettina 150g) vs B (vaschettina 100g termosaldata). Tempi di attrezzaggio.
2. **Peso fisso vaschetta 1kg** — fattibilità tecnica, linea di pesa, impatto su tolleranza e frodi.
3. **Identità candidato Ambassador zona Turati Milano** — nomi concreti, chi contattare per primo.
4. **Accordo economico Ambassador** — % margine, soglia rotazione per gratuità, forma contratto.
5. **Licenza bar per rivendita prodotto confezionato** — verifica legale (dipende dal tipo di licenza somministrazione).
6. **Rider refrigerato Milano** — quale player oggi consegna fresco, costo per consegna, autorizzazioni HACCP.
7. **Vincoli consorzio DOP sulla comunicazione** — fino a dove possiamo spingere "sano/pulito/no nitriti" senza uscire dalla cornice consortile.
8. **Lista clienti top Milano verificata** — Berberè ok, Pizzium ok, chi altri? Serve per social proof briefing card.
9. **Soglia sconto zero** — confermato come hard rule assoluta senza eccezioni anche su volumi grandi?
10. ~~**Validazione stile prima email Claudio**~~ — **risolto 2026-04-13**: call dedicata (A) + coda review nel CRM (B). Vedi §8 "Canali Andrea M ↔ Claudio ↔ Andrea C".
*(punti 11-12 risolti da Andrea C il 2026-04-13 — vedi decisioni consolidate sotto.)*

## Decisioni consolidate post-sessione 1

Oltre alla sessione 1 + allegati, Andrea C ha consolidato queste decisioni operative:

- **Pizzerie gourmet incluse in Fase 1** insieme alle paninerie. Nessuna esclusione a priori per `tipo locale`: il prospect pool esistente è già sufficiente, le briefing card si modulano sul campo esistente senza cambi strutturali.
- **Il "non serve scaldarlo" non è un killer argument** — è un vantaggio operativo concreto (meno lavoro, nessuna attrezzatura dedicata, prodotto non alterato dal calore) da nominare in approfondimento, mai come apertura. Il concetto "crudo/non fuso" applicato al formaggio è ambiguo e rischia di confondere il prospect.
- **No citazione clienti Tosi esistenti nelle cold email** — in particolare **mai Berberè**. Resta riferimento interno per qualificazione, non arma outbound. Altri nomi solo dopo autorizzazione esplicita Andrea M.
- **Canali comunicazione Andrea M ↔ Claudio ↔ Andrea C definiti**: (A) validazione stile one-shot via call dedicata + doc condiviso; (B) escalation ongoing via coda review `/review` nel tosi-mini-crm, stile Andon Labs (approva&invia / rifiuta+feedback), due account Supabase (Andrea M + Andrea C), notifica email dal dominio Tosi con link al draft. Niente WhatsApp/bot in Fase 1 pilot — minimizza la superficie tecnica da costruire. Dettagli §8.
- **Account Supabase auth**: Andrea C `sviluppo@tosigorgonzola.com` · Andrea M `commerciale@caseificiotosi.it` · Claudio `claudio@tosigorgonzola.com`. Doppio dominio intenzionale.
- **Identità AI dichiarata nelle cold email**: mittente `claudio@tosigorgonzola.com` con display "Claudio per Tosi" (wording finale in call di stile). Coerente con principio credibilità §1 #6 e con lo spirito Andon Labs. Supera il riferimento storico a `hello@tosigorgonzola.com`.
- **Claim numerici utilizzabili pubblicamente**: `600L caldaia → 6 forme`, `1.5% sale`, `zero scarto`, `TMC 30 giorni` sono autorizzati come vocabolario factual di Claudio nelle cold email e nelle briefing card, entro i vincoli consortili (nessun claim comparativo sugli altri DOP, nessuna accusa diretta al consorzio).

---

## Note di metodo

### Cosa c'è in questo documento
Sintesi strutturata per riuso di tutte le risposte date da Andrea M in sessione 1. Le citazioni tra virgolette sono verbatim (o quasi verbatim, depurate dalle disfluenze della trascrizione automatica) e ricostruibili nei file grezzi A-L.

### Cosa NON c'è
- **Non è una trascrizione rifinita**. I file grezzi A-L restano fonte verificabile.
- **Non è il Voice Twin system prompt**. Sarà un output derivato (`03-TOSI-Voice-Twin-System-Prompt.md`).
- **Non valida le affermazioni contro fonti esterne**. Competitor, prezzi, clienti top vanno confermati prima dell'uso in materiale pubblico.
- **Non tocca STATUS.md o altri file di tracking**. Sarà aggiornato solo dopo validazione Andrea C.

### Come usarlo
Un agente futuro che deve lavorare su un artefatto Fase 1 carica **solo la sezione pertinente** di questo file, non tutto. Il documento è progettato per estrazione modulare — ogni sezione è autoconsistente.
