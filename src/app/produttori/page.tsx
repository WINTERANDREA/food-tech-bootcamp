"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import { CONTACT_EMAIL } from "@/lib/constants";
import { SectionReveal } from "@/components/ui/SectionReveal";

const content = {
  en: {
    label: "For artisanal producers",
    heroTitle: "Your product is the best.\nThe market doesn't know yet.",
    heroBody:
      "You make cheese the way it was made before industrial shortcuts. You fire the wood oven at 4am. You harvest olives by hand in October. Your product is extraordinary — but you compete against those who make it worse and sell it better.",
    heroCta: "We build the tools that change this.",
    aboutTitle: "Who we are",
    aboutP1:
      "Food Tech Bootcamp is a lab. Not an agency, not a consultancy. We build AI tools for Italian artisanal producers — the ones who chose quality, traditional methods, no compromise.",
    aboutP2:
      "The founder is a gastronome who learned how cheese is made by making it. Then he learned to code. For eight years he built software while the artisanal food world fell further behind. Now he combines both: craft knowledge and the technology needed to compete.",
    aboutP3:
      "We don't sell technology. We build concrete tools: a sales coordinator that finds the right buyers, a briefing card that tells your product story in the language buyers understand, a system that speaks of stagionatura and disciplinare — not algorithms.",
    howTitle: "How we work",
    howIntro:
      "We select one producer per sector. The best one. The one who represents true artisanal excellence.",
    steps: [
      {
        num: "01",
        title: "We get to know you",
        body: "We visit your lab. We see how you work. We understand your product, your clients, your challenges. We start from your craft — not from technology.",
      },
      {
        num: "02",
        title: "We build the tool",
        body: "A system tailored to your specific problem. Sales, compliance, client management — what you need, not what we sell.",
      },
      {
        num: "03",
        title: "We measure results",
        body: "New clients, orders, revenue. Real numbers, not promises. If it works, we document it. If it doesn't, we understand why and improve.",
      },
      {
        num: "04",
        title: "The craft stays yours",
        body: "AI doesn't replace your hands. It doesn't change your product. It gives you the tools a 30-person sales department would have — without becoming a factory.",
      },
    ],
    projectsTitle: "What we're building",
    project1Tag: "Active experiment",
    project1Title: "AI Sales Coordinator",
    project1Body:
      "An artisanal DOP caseificio. 47 commercial targets in Milan. An AI system that coordinates prospect research, prepares briefing cards for each target, and manages follow-up. The sales team does what AI cannot: walk in the door, let the buyer taste the product, build a relationship.",
    project1Note: "Producer selected · Details coming soon",
    project2Tag: "Active experiment",
    project2Title: "HACCP Automation",
    project2Body:
      "Temperature logs, cleaning schedules, supplier records, corrective actions. For a small caseificio or panificio, that's hours of paperwork every week — hours taken from production. We're building a system that makes the bureaucracy invisible.",
    project2Note: "Producer selected · Details coming soon",
    project3Tag: "Research",
    project3Title: "Culinary Intelligence",
    project3Body:
      "An AI system that reasons about food the way a gastronome does — not recipes, but deep knowledge: why dough behaves differently in January, why olives from one hillside taste different from the next. Knowledge that disappears when an artisan retires.",
    forWhoTitle: "Who this is for",
    forWhoIntro:
      "We look for artisanal producers who recognize their own story in these words:",
    forWhoItems: [
      "Your product is excellent — but you compete against those who make it worse and have a sales team 10 times yours",
      "You use traditional methods — not for marketing, because it's the only way to make the product right",
      "You're not speculative — quality comes before volume, always",
      "You want to build a virtuous model — where quality, tradition, and sustainability are the competitive advantage, not the obstacle",
    ],
    forWhoCta: "If this is you, let's talk.",
    contactTitle: "Let's talk about your product",
    contactBody:
      "No commitment. Tell us what you make and what your challenges are. The first conversation is always free.",
    contactBtn: "Write to us",
    stayUpdated: "Or stay updated",
    stayUpdatedSub: "Rare updates. Always concrete.",
    formPlaceholder: "your@email.com",
    formBtn: "Subscribe",
    formSuccess: "We'll be in touch.",
    formSending: "Sending...",
    langSwitch: "Leggi in italiano",
  },
  it: {
    label: "Per i produttori artigianali",
    heroTitle: "Il tuo prodotto è il migliore.\nMa il mercato non lo sa.",
    heroBody:
      "Fai il formaggio come si faceva prima delle scorciatoie industriali. Cuoci il pane nel forno a legna alle 4 di mattina. Spremi le olive a freddo, raccolte a mano in ottobre. Il tuo prodotto è straordinario — ma competi contro chi lo fa peggio e lo vende meglio.",
    heroCta: "Costruiamo gli strumenti che cambiano questo.",
    aboutTitle: "Chi siamo",
    aboutP1:
      "Food Tech Bootcamp è un lab. Non un'agenzia, non una consulenza. Costruiamo strumenti di intelligenza artificiale per i produttori artigianali italiani — quelli che hanno scelto la qualità, i metodi tradizionali, nessun compromesso.",
    aboutP2:
      "Il fondatore è un gastronomo che ha studiato come si fa il formaggio facendolo. Poi ha imparato a programmare. Per otto anni ha costruito software mentre il mondo del cibo artigianale restava indietro. Oggi unisce le due cose: la conoscenza del mestiere e la tecnologia che serve per competere.",
    aboutP3:
      "Non vendiamo tecnologia. Costruiamo strumenti concreti: un coordinatore commerciale che trova i clienti giusti, una scheda che racconta il tuo prodotto nel linguaggio che i buyer capiscono, un sistema che parla di stagionatura e disciplinare — non di algoritmi.",
    howTitle: "Come lavoriamo",
    howIntro:
      "Selezioniamo un produttore per settore. Il migliore. Quello che rappresenta l'eccellenza artigianale vera.",
    steps: [
      {
        num: "01",
        title: "Ti conosciamo",
        body: "Veniamo nel tuo laboratorio. Vediamo come lavori. Capiamo il tuo prodotto, i tuoi clienti, i tuoi problemi. Non partiamo dalla tecnologia — partiamo dal tuo mestiere.",
      },
      {
        num: "02",
        title: "Costruiamo lo strumento",
        body: "Un sistema su misura per il tuo problema concreto. Vendite, compliance, gestione clienti — quello che serve a te, non quello che vendiamo noi.",
      },
      {
        num: "03",
        title: "Misuriamo i risultati",
        body: "Nuovi clienti, ordini, fatturato. Numeri veri, non promesse. Se funziona, lo documentiamo. Se non funziona, capiamo perché e miglioriamo.",
      },
      {
        num: "04",
        title: "Il mestiere resta tuo",
        body: "L'AI non sostituisce le tue mani. Non cambia il tuo prodotto. Ti dà gli strumenti che un reparto commerciale di 30 persone avrebbe — senza diventare un'industria.",
      },
    ],
    projectsTitle: "Cosa stiamo costruendo",
    project1Tag: "Esperimento in corso",
    project1Title: "Coordinatore commerciale AI",
    project1Body:
      "Un caseificio artigianale DOP. 47 obiettivi commerciali a Milano. Un sistema AI che coordina la ricerca clienti, prepara le schede per ogni prospect, e gestisce il follow-up. Il team commerciale fa quello che l'AI non può fare: entrare dalla porta, far assaggiare il prodotto, costruire una relazione.",
    project1Note: "Produttore selezionato · Dettagli in arrivo",
    project2Tag: "Esperimento in corso",
    project2Title: "Automazione HACCP",
    project2Body:
      "Registri temperature, schede di pulizia, documenti fornitori, azioni correttive. Per un piccolo caseificio o panificio sono ore di lavoro ogni settimana — ore tolte alla produzione. Stiamo costruendo un sistema che rende la burocrazia invisibile.",
    project2Note: "Produttore selezionato · Dettagli in arrivo",
    project3Tag: "Ricerca",
    project3Title: "Intelligenza culinaria",
    project3Body:
      "Un sistema AI che ragiona sul cibo come un gastronomo — non ricette, ma la conoscenza profonda: perché l'impasto si comporta diversamente a gennaio, perché le olive di una collina hanno un sapore diverso dalla collina accanto. Conoscenza che scompare quando un artigiano va in pensione.",
    forWhoTitle: "Per chi è",
    forWhoIntro:
      "Cerchiamo produttori artigianali che riconoscono in queste parole la propria storia:",
    forWhoItems: [
      "Il tuo prodotto è eccellente — ma competi contro chi lo fa peggio e ha un reparto commerciale 10 volte il tuo",
      "Usi metodi tradizionali — non per marketing, perché è l'unico modo per fare il prodotto giusto",
      "Non sei speculativo — la qualità viene prima del volume, sempre",
      "Vuoi costruire un modello virtuoso — dove qualità, tradizione e sostenibilità sono il vantaggio competitivo, non l'ostacolo",
    ],
    forWhoCta: "Se ti riconosci, parliamo.",
    contactTitle: "Parliamo del tuo prodotto",
    contactBody:
      "Nessun impegno. Raccontaci cosa fai e quali sono le tue sfide. Il primo incontro è sempre gratuito.",
    contactBtn: "Scrivici",
    stayUpdated: "Oppure resta aggiornato",
    stayUpdatedSub: "Aggiornamenti rari. Sempre concreti.",
    formPlaceholder: "la-tua@email.com",
    formBtn: "Iscriviti",
    formSuccess: "Ti ricontatteremo.",
    formSending: "Invio...",
    langSwitch: "Read in English",
  },
} as const;

type Lang = keyof typeof content;

function ProducerForm({ t }: { t: (typeof content)[Lang] }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, interest: "producer" }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <p className="font-body text-sm text-rame py-2">{t.formSuccess}</p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 w-full max-w-md">
      <input
        type="email"
        required
        placeholder={t.formPlaceholder}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1 min-w-0 bg-dark-surface border border-[var(--border-subtle)] text-caglio font-body text-sm px-4 py-3 placeholder:text-light-secondary focus:border-terra focus:outline-none transition-colors"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="shrink-0 font-body font-medium text-sm uppercase tracking-wide bg-terra text-caglio px-6 py-3 hover:brightness-110 transition-all disabled:opacity-50"
      >
        {status === "loading" ? t.formSending : t.formBtn}
      </button>
    </form>
  );
}

export default function ProduttoriPage() {
  const [lang, setLang] = useState<Lang>("en");
  const t = content[lang];

  return (
    <div className="min-h-screen">
      {/* Language toggle */}
      <div className="fixed top-20 right-5 md:right-12 z-40">
        <button
          onClick={() => setLang(lang === "en" ? "it" : "en")}
          className="font-mono text-xs uppercase tracking-widest text-terra hover:text-crosta bg-dark/80 border border-[var(--border-medium)] px-4 py-2 transition-colors backdrop-blur-sm"
        >
          {t.langSwitch}
        </button>
      </div>

      {/* Hero */}
      <section className="relative bg-dark min-h-svh flex items-center px-5 md:px-12 lg:px-20 pt-16">
        <div className="absolute inset-0">
          <Image
            src="/images/projects/3_cagliata.jpg"
            alt="Exterior of an artisanal Italian caseificio"
            fill
            className="object-cover brightness-[0.25]"
            sizes="100vw"
            priority
          />
        </div>
        <div className="relative max-w-[65ch] z-10">
          <SectionReveal>
            <p className="font-mono text-sm text-terra uppercase tracking-widest mb-8">
              {t.label}
            </p>
            <h1 className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold text-caglio mb-8 whitespace-pre-line leading-tight">
              {t.heroTitle}
            </h1>
            <p className="font-body text-base md:text-lg text-caglio/80 leading-relaxed mb-8 max-w-[55ch]">
              {t.heroBody}
            </p>
            <p className="font-headline text-xl md:text-2xl font-bold text-terra">
              {t.heroCta}
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Who we are */}
      <section className="bg-dark py-section px-5 md:px-12 lg:px-20">
        <div className="mx-auto max-w-[1280px]">
          <SectionReveal>
            <p className="font-headline text-2xl md:text-3xl font-bold text-caglio mb-8">
              {t.aboutTitle}
            </p>
          </SectionReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SectionReveal>
              <p className="font-body text-base text-caglio/80 leading-relaxed">
                {t.aboutP1}
              </p>
            </SectionReveal>
            <SectionReveal>
              <p className="font-body text-base text-caglio/80 leading-relaxed">
                {t.aboutP2}
              </p>
            </SectionReveal>
            <SectionReveal>
              <p className="font-body text-base text-caglio/80 leading-relaxed">
                {t.aboutP3}
              </p>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="bg-caglio py-section px-5 md:px-12 lg:px-20">
        <div className="mx-auto max-w-[1280px]">
          <SectionReveal>
            <p className="font-headline text-2xl md:text-3xl font-bold text-carbone mb-4">
              {t.howTitle}
            </p>
            <p className="font-body text-base text-carbone/70 mb-12 max-w-[55ch]">
              {t.howIntro}
            </p>
          </SectionReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.steps.map((step) => (
              <SectionReveal key={step.num}>
                <div className="border border-carbone/15 p-6 h-full">
                  <p className="font-mono text-2xl text-terra/40 font-bold mb-4">
                    {step.num}
                  </p>
                  <p className="font-headline text-lg font-bold text-carbone mb-3">
                    {step.title}
                  </p>
                  <p className="font-body text-sm text-carbone/70 leading-relaxed">
                    {step.body}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="bg-dark py-section px-5 md:px-12 lg:px-20">
        <div className="mx-auto max-w-[1280px]">
          <SectionReveal>
            <p className="font-headline text-2xl md:text-3xl font-bold text-caglio mb-12">
              {t.projectsTitle}
            </p>
          </SectionReveal>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <SectionReveal>
              <div className="border border-[var(--border-medium)] p-6 md:p-8 h-full flex flex-col">
                <p className="font-mono text-xs uppercase text-rame tracking-widest mb-3">
                  {t.project1Tag}
                </p>
                <p className="font-headline text-xl font-bold text-caglio mb-3">
                  {t.project1Title}
                </p>
                <p className="font-body text-sm text-crosta leading-relaxed mb-auto">
                  {t.project1Body}
                </p>
                <p className="font-mono text-xs text-terra/50 mt-4 pt-4 border-t border-[var(--border-subtle)]">
                  {t.project1Note}
                </p>
              </div>
            </SectionReveal>
            <SectionReveal>
              <div className="border border-[var(--border-medium)] p-6 md:p-8 h-full flex flex-col">
                <p className="font-mono text-xs uppercase text-rame tracking-widest mb-3">
                  {t.project2Tag}
                </p>
                <p className="font-headline text-xl font-bold text-caglio mb-3">
                  {t.project2Title}
                </p>
                <p className="font-body text-sm text-crosta leading-relaxed mb-auto">
                  {t.project2Body}
                </p>
                <p className="font-mono text-xs text-terra/50 mt-4 pt-4 border-t border-[var(--border-subtle)]">
                  {t.project2Note}
                </p>
              </div>
            </SectionReveal>
            <SectionReveal>
              <div className="border border-[var(--border-medium)] p-6 md:p-8 h-full flex flex-col">
                <p className="font-mono text-xs uppercase text-crosta/60 tracking-widest mb-3">
                  {t.project3Tag}
                </p>
                <p className="font-headline text-xl font-bold text-caglio mb-3">
                  {t.project3Title}
                </p>
                <p className="font-body text-sm text-crosta leading-relaxed">
                  {t.project3Body}
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Who this is for */}
      <section className="bg-caglio py-section px-5 md:px-12 lg:px-20">
        <div className="mx-auto max-w-[65ch]">
          <SectionReveal>
            <p className="font-headline text-2xl md:text-3xl font-bold text-carbone mb-4">
              {t.forWhoTitle}
            </p>
            <p className="font-body text-base text-carbone/70 mb-8">
              {t.forWhoIntro}
            </p>
          </SectionReveal>
          <SectionReveal>
            <ul className="space-y-4 mb-8">
              {t.forWhoItems.map((item, i) => (
                <li
                  key={i}
                  className="font-body text-base text-carbone/80 leading-relaxed pl-5 border-l-2 border-terra"
                >
                  {item}
                </li>
              ))}
            </ul>
          </SectionReveal>
          <SectionReveal>
            <p className="font-body text-lg italic text-terra">
              {t.forWhoCta}
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-dark py-section px-5 md:px-12 lg:px-20">
        <div className="mx-auto max-w-[65ch] text-center">
          <SectionReveal>
            <p className="font-headline text-2xl md:text-3xl font-bold text-caglio mb-4">
              {t.contactTitle}
            </p>
            <p className="font-body text-base text-caglio/80 leading-relaxed mb-8 max-w-[50ch] mx-auto">
              {t.contactBody}
            </p>
            <div className="flex justify-center">
              <a
                href={`mailto:${CONTACT_EMAIL}?subject=Artisanal%20producer%20—%20first%20contact`}
                className="font-body font-medium text-sm uppercase tracking-wide bg-terra text-caglio px-10 py-4 hover:brightness-110 hover:-translate-y-px transition-all whitespace-nowrap"
              >
                {t.contactBtn}
              </a>
            </div>
          </SectionReveal>

          <div className="mt-16 pt-12 border-t border-[var(--border-subtle)]">
            <SectionReveal>
              <p className="font-headline text-lg font-bold text-caglio mb-2">
                {t.stayUpdated}
              </p>
              <p className="font-body text-sm text-crosta mb-6">
                {t.stayUpdatedSub}
              </p>
              <div className="flex justify-center">
                <ProducerForm t={t} />
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
