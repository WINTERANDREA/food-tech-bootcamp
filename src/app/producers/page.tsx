"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import { CONTACT_EMAIL } from "@/lib/constants";
import { SectionReveal } from "@/components/ui/SectionReveal";

const content = {
  en: {
    label: "For artisanal producers",
    heroTitle: "Your product is extraordinary.\nThe world should know.",
    heroBody:
      "You chose quality over profit. Traditional methods over industrial shortcuts. You age on wooden shelves because stainless steel changes the flavor. You harvest by hand because the machine bruises the fruit. Your product is extraordinary — what you lack is the infrastructure to valorize it.",
    heroCta: "AI is that infrastructure.",
    aboutTitle: "Who we are",
    aboutP1:
      "Food Tech Bootcamp is a lab born from gastronomic science. Founded by a graduate of the University of Gastronomic Sciences in Pollenzo — Slow Food's university — who then spent more than ten years building software. We exist at the intersection of deep food knowledge and artificial intelligence.",
    aboutP2:
      "We identify the rarest artisanal producers in Italy — across every sector, as many as deserve the name. The ones whose knowledge, methods, and standards are irreplaceable. Finding them requires knowing what to look for.",
    howTitle: "How we work",
    howIntro:
      "We search for extraordinary producers across every sector — as many as deserve the name.",
    steps: [
      {
        num: "01",
        title: "We find you",
        body: "We research every sector — caseifici, panifici, frantoi, cantine, and beyond. We look for the producers whose knowledge, quality, and integrity are extraordinary.",
      },
      {
        num: "02",
        title: "We understand your craft",
        body: "We visit your production facility. We watch you work. We learn the knowledge embedded in your hands, your senses, your decisions. We start from the craft — never from the technology.",
      },
      {
        num: "03",
        title: "We build with you",
        body: "AI that speaks the language of your craft — not generic software adapted from another industry. Every tool is designed around your specific knowledge, your specific challenges.",
      },
      {
        num: "04",
        title: "Your system grows stronger",
        body: "AI becomes infrastructure for your entire operation — insight into what makes your product unique, tools to strengthen what surrounds it, intelligence that valorizes your craft. Not marketing. The foundation your food system deserves.",
      },
    ],
    projectsTitle: "What we're building",
    project1Tag: "Active experiment",
    project1Title: "AI Sales Coordinator",
    project1Body:
      "An artisanal DOP cheese dairy. 47 commercial targets in Milan. An AI system that coordinates prospect research, prepares briefing cards for each target, and manages follow-up. The sales team does what AI cannot: walk in the door, let the buyer taste the product, build a relationship.",
    project1Note: "Producer selected · Details coming soon",
    project2Tag: "Active experiment",
    project2Title: "Food Safety Automation",
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
      "Your knowledge is deep — you understand your raw material, your territory, your tradition at a level that industrial producers cannot reach",
      "You use traditional methods — not for marketing, because it is the only way to make the product right",
      "You chose quality over volume, authenticity over optimization, craft over convenience — and you pay for it every day",
      "You know the value of what you make — and you need infrastructure that finally valorizes it, not just sells it",
    ],
    forWhoCta: "If this is you, we would love to hear from you.",
    contactTitle: "Let's talk about your product",
    contactBody:
      "No commitment. Tell us what you make and what your challenges are.",
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
    heroTitle: "Il tuo prodotto è straordinario.\nIl mondo dovrebbe saperlo.",
    heroBody:
      "Hai scelto la qualità invece del profitto. I metodi tradizionali invece delle scorciatoie industriali. Stagioni su assi di legno perché l'acciaio cambia il sapore. Raccogli a mano perché la macchina rovina il frutto. Il tuo prodotto è straordinario — quello che ti manca è l'infrastruttura per valorizzarlo.",
    heroCta: "L'AI è quell'infrastruttura.",
    aboutTitle: "Chi siamo",
    aboutP1:
      "Food Tech Bootcamp è un lab nato dalla scienza gastronomica. Fondato da un laureato dell'Università di Scienze Gastronomiche di Pollenzo — l'università di Slow Food — che ha poi passato otto anni a costruire software. Esistiamo all'intersezione tra conoscenza profonda del cibo e intelligenza artificiale.",
    aboutP2:
      "Identifichiamo i produttori artigianali più rari d'Italia — in ogni settore, tutti quelli che meritano questo nome. Quelli la cui conoscenza, i cui metodi, i cui standard sono insostituibili. Trovarli richiede sapere cosa cercare.",
    howTitle: "Come lavoriamo",
    howIntro:
      "Cerchiamo produttori straordinari in ogni settore — tutti quelli che meritano questo nome.",
    steps: [
      {
        num: "01",
        title: "Ti troviamo",
        body: "Studiamo ogni settore — caseifici, panifici, frantoi, cantine e oltre. Cerchiamo i produttori la cui conoscenza, qualità e integrità sono straordinarie.",
      },
      {
        num: "02",
        title: "Capiamo il tuo mestiere",
        body: "Veniamo nel tuo laboratorio. Ti guardiamo lavorare. Impariamo la conoscenza racchiusa nelle tue mani, nei tuoi sensi, nelle tue decisioni. Partiamo dal mestiere — mai dalla tecnologia.",
      },
      {
        num: "03",
        title: "Costruiamo insieme",
        body: "AI che parla il linguaggio del tuo mestiere — non software generico adattato da un altro settore. Ogni strumento è progettato attorno alla tua conoscenza specifica, alle tue sfide specifiche.",
      },
      {
        num: "04",
        title: "Il tuo sistema si rafforza",
        body: "L'AI diventa infrastruttura per tutta la tua operazione — insight su cosa rende il tuo prodotto unico, strumenti per rafforzare ciò che lo circonda, intelligenza che valorizza il tuo mestiere. Non marketing. Le fondamenta che il tuo sistema alimentare merita.",
      },
    ],
    projectsTitle: "Cosa stiamo costruendo",
    project1Tag: "Esperimento attivo",
    project1Title: "AI Sales Coordinator",
    project1Body:
      "Un caseificio artigianale DOP. 47 target commerciali a Milano. Un sistema AI che coordina la ricerca sui prospect, prepara schede informative per ogni target e gestisce il follow-up. Il team vendite fa ciò che l'AI non può: entrare dalla porta, far assaggiare il prodotto, costruire una relazione.",
    project1Note: "Produttore selezionato · Dettagli in arrivo",
    project2Tag: "Esperimento attivo",
    project2Title: "Food Safety Automation",
    project2Body:
      "Registri temperature, piani di pulizia, documenti fornitori, azioni correttive. Per un piccolo caseificio o panificio sono ore di burocrazia ogni settimana — ore sottratte alla produzione. Stiamo costruendo un sistema che rende la burocrazia invisibile.",
    project2Note: "Produttore selezionato · Dettagli in arrivo",
    project3Tag: "Ricerca",
    project3Title: "Culinary Intelligence",
    project3Body:
      "Un sistema AI che ragiona sul cibo come un gastronomo — non ricette, ma conoscenza profonda: perché l'impasto si comporta diversamente a gennaio, perché le olive di una collina hanno un sapore diverso dalla collina accanto. Conoscenza che scompare quando un artigiano va in pensione.",
    forWhoTitle: "Per chi è",
    forWhoIntro:
      "Cerchiamo produttori artigianali che riconoscono in queste parole la propria storia:",
    forWhoItems: [
      "La tua conoscenza è profonda — capisci la tua materia prima, il tuo territorio, la tua tradizione a un livello che i produttori industriali non possono raggiungere",
      "Usi metodi tradizionali — non per marketing, perché è l'unico modo per fare il prodotto giusto",
      "Hai scelto la qualità invece del volume, l'autenticità invece dell'ottimizzazione, il mestiere invece della comodità — e lo paghi ogni giorno",
      "Conosci il valore di ciò che fai — e hai bisogno di un'infrastruttura che finalmente lo valorizzi, non che lo venda e basta",
    ],
    forWhoCta: "Se ti riconosci, ci piacerebbe sentirti.",
    contactTitle: "Parliamo del tuo prodotto",
    contactBody:
      "Nessun impegno. Raccontaci cosa fai e quali sono le tue sfide.",
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
      <div className="fixed top-[4.5rem] right-5 md:top-20 md:right-12 z-40">
        <button
          onClick={() => setLang(lang === "en" ? "it" : "en")}
          className="font-mono text-[0.6rem] md:text-xs uppercase tracking-widest text-terra hover:text-crosta bg-dark/80 border border-[var(--border-medium)] px-3 py-1.5 md:px-4 md:py-2 transition-colors backdrop-blur-sm"
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
            <h1 className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold text-caglio mb-8 whitespace-pre-line leading-tight max-w-[18ch]">
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
