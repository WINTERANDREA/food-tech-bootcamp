import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SITE_URL } from "@/lib/constants";
import { SectionReveal } from "@/components/ui/SectionReveal";

export const metadata: Metadata = {
  title: "Manifesto — Food Tech Bootcamp",
  description:
    "Italy's real artisanal food producers carry centuries of irreplaceable knowledge. We find them, understand their craft, and build the AI tools that keep them competing. This is our manifesto.",
  openGraph: {
    title: "Manifesto — Food Tech Bootcamp",
    description:
      "The knowledge is disappearing. Not because the products are worse. Because the tools are designed for factories.",
    type: "article",
  },
  alternates: {
    canonical: `${SITE_URL}/manifesto`,
  },
};

export default function ManifestoPage() {
  return (
    <div className="min-h-screen">
      {/* Opening — the core */}
      <section className="bg-dark min-h-svh flex items-center justify-center px-5 md:px-12 lg:px-20 pt-16">
        <div className="max-w-[65ch]">
          <SectionReveal>
            <p className="font-mono text-sm text-terra/60 uppercase tracking-widest mb-12 text-center">
              Manifesto
            </p>
            <p className="font-headline text-3xl md:text-4xl font-bold text-caglio mb-8">
              Every year, artisanal producers close.
            </p>
            <p className="font-body text-base md:text-lg text-caglio/80 leading-relaxed mb-6">
              Not because their cheese is worse. Not because their bread tastes
              less. Not because their oil has lost its character. They close
              because a market rigged for scale has no patience for craft.
            </p>
            <p className="font-body text-base md:text-lg text-caglio/80 leading-relaxed mb-6">
              When a baker retires, she takes with her the knowledge of how her
              oven behaves in January versus August. When a cheesemaker closes,
              the understanding of how milk from his specific cows, in his
              specific valley, produces that specific flavor — it disappears
              forever. No algorithm can learn what a retired artisan knew.
            </p>
            <p className="font-headline text-xl md:text-2xl font-bold text-terra leading-snug mt-12">
              This is not an economic problem. It is a cultural extinction.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* The image break */}
      <section className="relative w-full h-[50vh] md:h-[60vh]">
        <Image
          src="/images/projects/IMG_5685.jpg"
          alt="Aged gorgonzola wheels under warm amber lighting in an artisanal aging room"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/40 via-transparent to-dark/60" />
      </section>

      {/* The problem */}
      <section className="bg-dark py-section px-5 md:px-12 lg:px-20">
        <div className="mx-auto max-w-[65ch]">
          <SectionReveal>
            <p className="font-headline text-3xl md:text-4xl font-bold text-caglio mb-12">
              98% of them compete without digital tools.
            </p>
          </SectionReveal>

          <SectionReveal>
            <p className="font-body text-base text-caglio/80 leading-relaxed mb-6">
              Right now, somewhere in Lombardy, a cheesemaker is waking up at
              4am. He will check his aging rooms by hand. He will read the mold
              by sight, the humidity by feel, the readiness of each wheel by a
              tap and a listen. He has done this for thirty years. His father did
              it before him.
            </p>
          </SectionReveal>

          <SectionReveal>
            <p className="font-body text-base text-caglio/80 leading-relaxed mb-6">
              His product is extraordinary. His sales team is three people. His
              competitor — an industrial producer — has thirty salespeople, a
              CRM, a digital marketing department, and distribution agreements
              he will never match.
            </p>
          </SectionReveal>

          <SectionReveal>
            <p className="font-body text-base text-caglio/80 leading-relaxed">
              The cheesemaker&apos;s problem was never the product. The problem
              is that the tools to compete were designed for industrial scale,
              not artisanal craft.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Tailored technology */}
      <section className="bg-caglio py-section px-5 md:px-12 lg:px-20">
        <div className="mx-auto max-w-[65ch]">
          <SectionReveal>
            <p className="font-headline text-2xl md:text-3xl font-bold text-carbone mb-12">
              Technology should be crafted like the product it serves.
            </p>
          </SectionReveal>

          <SectionReveal>
            <p className="font-body text-base text-carbone/80 leading-relaxed mb-6">
              An artisan doesn&apos;t use industrial molds. He shapes each piece
              by hand because that&apos;s what the raw material demands. The same
              principle applies to technology. A tool built for a producer
              with three people should be as precise and intentional as the
              product they make.
            </p>
          </SectionReveal>

          <SectionReveal>
            <p className="font-body text-base text-carbone/80 leading-relaxed mb-6">
              Find the restaurants that would love your product — and reach
              them before the industrial alternative arrives. Turn compliance
              documentation from hours into minutes. Know which of your clients
              is about to reorder and which is about to leave.
            </p>
          </SectionReveal>

          <SectionReveal>
            <p className="font-body text-base text-carbone/80 leading-relaxed">
              Not generic platforms. Not one-size-fits-all dashboards.
              Intelligence tailored to each craft — as specific as the terroir
              that defines the product.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Food knowledge is computable */}
      <section className="bg-dark py-section px-5 md:px-12 lg:px-20">
        <div className="mx-auto max-w-[65ch]">
          <SectionReveal>
            <p className="font-headline text-2xl md:text-3xl font-bold text-caglio mb-12">
              Food knowledge is computable.
            </p>
          </SectionReveal>

          <SectionReveal>
            <p className="font-body text-base text-caglio/80 leading-relaxed mb-6">
              A cheesemaker who reads milk by smell is performing an analysis. A
              baker who feels dough by touch is running a calibration. A
              winemaker who tastes the season is evaluating a dataset. This
              knowledge is not mystical. It is precise, structured, and
              transferable — if you speak the right language.
            </p>
          </SectionReveal>

          <SectionReveal>
            <p className="font-body text-base text-caglio/80 leading-relaxed mb-6">
              AI is the first technology in history that can speak both
              languages. The language of the algorithm and the language of the
              artisan. The language of the database and the language of the
              cagliata. It can translate between them without destroying either.
            </p>
          </SectionReveal>

          <SectionReveal>
            <p className="font-body text-base text-caglio/80 leading-relaxed">
              That is the revolution. Not automation. Translation. Not
              replacement. Amplification.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* The DOP lie */}
      <section className="bg-caglio py-section px-5 md:px-12 lg:px-20">
        <div className="mx-auto max-w-[65ch]">
          <SectionReveal>
            <p className="font-headline text-2xl md:text-3xl font-bold text-carbone mb-12">
              A DOP label does not tell you the truth.
            </p>
          </SectionReveal>

          <SectionReveal>
            <p className="font-body text-base text-carbone/80 leading-relaxed mb-6">
              The same DOP certification sits on a wheel made by hand in a
              family caseificio and on a wheel produced in a factory by the
              thousands. Same label. Same stamp. Same shelf. The consumer cannot
              tell the difference by looking. The buyer cannot tell the
              difference by reading the spec sheet.
            </p>
          </SectionReveal>

          <SectionReveal>
            <p className="font-body text-base text-carbone/80 leading-relaxed mb-6">
              Only the product can speak. Only the taste reveals the craft. The
              artisan who ages each wheel on wooden shelves, who pierces by hand,
              who waits for the mold to develop at its own pace — that producer
              makes something the factory never will. But the certification
              system treats them as equals.
            </p>
          </SectionReveal>

          <SectionReveal>
            <p className="font-body text-base text-carbone/80 leading-relaxed">
              If the institutions won&apos;t distinguish between artisanal and
              industrial, the market must. And for the market to choose, the
              artisan needs the tools to be found, to be understood, to let the
              product do the talking at scale.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Second image break */}
      <section className="relative w-full h-[50vh] md:h-[60vh]">
        <Image
          src="/images/projects/IMG_5670.jpg"
          alt="Close-up of foratura — hand-piercing a wheel with steel needles"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/40 via-transparent to-dark/60" />
      </section>

      {/* The opportunity */}
      <section className="bg-dark py-section px-5 md:px-12 lg:px-20">
        <div className="mx-auto max-w-[65ch]">
          <SectionReveal>
            <p className="font-headline text-2xl md:text-3xl font-bold text-caglio mb-12">
              For the first time, the opportunity is infinite.
            </p>
          </SectionReveal>

          <SectionReveal>
            <p className="font-body text-base text-caglio/80 leading-relaxed mb-6">
              Sales, logistics, compliance, market intelligence, customer
              relationships, quality monitoring, export documentation, seasonal
              planning — every dimension of the artisan&apos;s business that was
              once reserved for industrial scale is now within reach. Not
              someday. Now.
            </p>
          </SectionReveal>

          <SectionReveal>
            <p className="font-body text-base text-caglio/80 leading-relaxed mb-6">
              The playing field has never been more open. An artisan with the
              right AI tools can compete with producers ten times their size —
              without becoming one. The craft stays human. The competition
              becomes fair. The product finally speaks for itself.
            </p>
          </SectionReveal>

          <SectionReveal>
            <p className="font-body text-base text-caglio/80 leading-relaxed">
              Made in Italy is not a marketing label. It is a network of real
              producers who carry the knowledge, the culture, and the reputation
              of an entire country in their hands. AI gives every one of them the
              reach of a corporation and the precision of a consultant — while
              keeping the soul of a craftsman. This is how Italy stays proud of
              what its people build with their hands, every single day.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* The sectors */}
      <section className="bg-caglio py-section px-5 md:px-12 lg:px-20">
        <div className="mx-auto max-w-[65ch]">
          <SectionReveal>
            <p className="font-headline text-2xl md:text-3xl font-bold text-carbone mb-12">
              One mission. Every sector.
            </p>
          </SectionReveal>

          <SectionReveal>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-4 font-body text-base text-carbone/80 mb-12">
              <p>Caseifici</p>
              <p>Panifici</p>
              <p>Frantoi</p>
              <p>Cantine</p>
              <p>Norcinerie</p>
              <p>Pastifici</p>
              <p>Conservifici</p>
              <p>Birrifici</p>
              <p>Apicultura</p>
              <p>Cioccolateria</p>
              <p>Oleifici</p>
              <p>Gelaterie artigianali</p>
            </div>
          </SectionReveal>

          <SectionReveal>
            <p className="font-body text-base text-carbone/80 leading-relaxed">
              We start with one caseificio. Then one panificio. Then one
              frantoio. Each experiment proves the model for the next. Each
              artisan who competes is proof that the mission works. The goal is
              not one tool — it is a library of intelligence that serves every
              craft.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* The personal */}
      <section className="bg-dark py-section px-5 md:px-12 lg:px-20">
        <div className="mx-auto max-w-[65ch]">
          <SectionReveal>
            <p className="font-headline text-2xl md:text-3xl font-bold text-caglio mb-12">
              Why I build this.
            </p>
          </SectionReveal>

          <SectionReveal>
            <p className="font-body text-base text-caglio/80 leading-relaxed mb-6">
              I studied gastronomy at UNISG Pollenzo — the world&apos;s only
              university of gastronomic sciences. I learned how cheese is made by
              making it. I learned how bread rises by watching it. I learned how
              wine speaks by listening.
            </p>
          </SectionReveal>

          <SectionReveal>
            <p className="font-body text-base text-caglio/80 leading-relaxed mb-6">
              Then I went to India and learned to code. For eight years, I built
              software while the food world I came from fell further behind. I
              watched artisanal producers I studied with struggle against
              competitors who had nothing better — only bigger.
            </p>
          </SectionReveal>

          <SectionReveal>
            <p className="font-body text-base text-caglio/80 leading-relaxed mb-6">
              AI changed everything. For the first time, a tool existed that
              could understand both worlds — the precision of code and the
              complexity of craft. A tool that doesn&apos;t need the artisan to
              become a technologist. It meets them where they are.
            </p>
          </SectionReveal>

          <SectionReveal>
            <p className="font-body text-base text-caglio/80 leading-relaxed">
              Food Tech Bootcamp is not a startup. It is not an agency. It is a
              lab. It is where eight years of learning to code as a gastronome
              become tools for the people I studied with, grew up with, and build
              for.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Third image break */}
      <section className="relative w-full h-[50vh] md:h-[60vh]">
        <Image
          src="/images/projects/IMG_5658.jpg"
          alt="Fresh curd draining in cloth bundles — the first step of artisanal gorgonzola production"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/40 via-transparent to-dark/60" />
      </section>

      {/* The commitment */}
      <section className="bg-dark py-section px-5 md:px-12 lg:px-20">
        <div className="mx-auto max-w-[65ch]">
          <SectionReveal>
            <p className="font-headline text-2xl md:text-3xl font-bold text-caglio mb-12">
              What we refuse.
            </p>
          </SectionReveal>

          <SectionReveal>
            <p className="font-body text-base text-caglio/80 leading-relaxed mb-6">
              We refuse to build technology that replaces the artisan. If the AI
              could make the cheese, we would not be interested. The craft is
              sacred. The bottleneck is everything around it.
            </p>
          </SectionReveal>

          <SectionReveal>
            <p className="font-body text-base text-caglio/80 leading-relaxed mb-6">
              We refuse to scale before proving. One experiment, documented
              honestly, is worth more than fifty pitch decks. We ship
              experiments, not strategies. We build demos, not promises.
            </p>
          </SectionReveal>

          <SectionReveal>
            <p className="font-body text-base text-caglio/80 leading-relaxed">
              We refuse to speak about artisans without speaking to them first.
              Every tool we build starts with a conversation, not a spreadsheet.
              The producer is always the subject. Technology is always the tool.
              Never the reverse.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* The manifesto line */}
      <section className="bg-caglio py-section px-5 md:px-12 lg:px-20">
        <div className="mx-auto max-w-[65ch] text-center">
          <p className="font-body text-xl md:text-2xl italic text-terra leading-relaxed">
            Il progresso che cancella ci&ograve; che siamo non &egrave;
            progresso.
          </p>
        </div>
      </section>

      {/* The call */}
      <section className="bg-dark py-section px-5 md:px-12 lg:px-20">
        <div className="mx-auto max-w-[65ch] text-center">
          <SectionReveal>
            <p className="font-headline text-2xl md:text-3xl font-bold text-caglio mb-8">
              The tools are being built.
            </p>
            <p className="font-body text-base text-caglio/80 leading-relaxed mb-12">
              The first experiments are running. If they work, the model works
              for every artisan in Italy. If they fail, we document why and
              build better.
            </p>
            <p className="font-body text-base text-caglio/60 mb-12">
              This is not a manifesto about what we plan to do. It is a
              manifesto about what we are doing.
            </p>
            <Link
              href="/#work"
              className="inline-flex items-center font-body font-medium text-sm text-terra hover:text-crosta transition-colors group"
            >
              See the work
              <span className="ml-1 inline-block transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
}
