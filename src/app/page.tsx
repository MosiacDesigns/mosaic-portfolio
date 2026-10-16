import Image from "next/image";
import Link from "next/link";
import { ButtonLink, TextLink } from "@/components/ui/Button";
import { ClosingCta, Greeting, ProcessGrid, ProvenanceChip, ScrollBadge, SectionHead, TapeBand } from "@/components/ui/Bits";
import FilmCard from "@/components/ui/FilmCard";
import Testimonials from "@/components/home/Testimonials";
import { GoArrow, ProjectVisual } from "@/components/work/ProjectVisual";
import { featured, homeProjects, projectHref, projects } from "@/content/projects";
import { agencyPoints, services } from "@/content/services";
import { capabilities, film, process, site, trustedBy } from "@/content/site";
import { team } from "@/content/team";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="shell grid items-end pt-[clamp(40px,6vw,96px)] lg:grid-cols-[minmax(0,1fr)_minmax(300px,440px)] lg:gap-x-14">
        <div className="lg:col-span-2">
          <Greeting>(DESIGN · ENGINEERING · AI)</Greeting>
        </div>
        <h1 className="display contents text-[clamp(56px,10.4vw,150px)] !leading-[0.84]">
          <span className="block animate-rise lg:col-span-2">We design</span>
          <span className="block animate-rise [animation-delay:.1s] lg:col-start-1">
            &amp; build<span className="text-accent">.</span>
          </span>
        </h1>
        <div className="order-last mx-auto mt-12 w-[88%] max-w-[480px] animate-hero-card lg:order-none lg:col-start-2 lg:row-span-2 lg:row-start-3 lg:mt-6 lg:w-full lg:self-center">
          <FilmCard src={film.src} webm={film.webm} poster={film.poster} label={film.label} caption="THE FILM · HOW WE WORK" duration={film.duration} tilt="" priority />
        </div>
        <p className="mt-[clamp(32px,4vw,48px)] max-w-[560px] text-[clamp(18px,1.5vw,21px)] leading-normal lg:col-start-1">
          <b className="font-semibold">Websites</b>, <b className="font-semibold">web apps</b> and <b className="font-semibold">AI-powered products</b> for founders,
          product teams and agencies — designed and engineered by one senior team, from first call to launch.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-[22px] lg:col-start-1">
          <ButtonLink href="/contact">Start a project →</ButtonLink>
          <TextLink href="/work" className="text-[17px]">
            See the work
          </TextLink>
          <ScrollBadge />
        </div>
      </section>

      <div className="shell pt-14">
        <div className="flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-line pt-[22px] font-mono text-[13px] text-mute">
          <span>TRUSTED BY TEAMS AT →</span>
          {trustedBy.map((c) => (
            <span key={c} className="text-paper">
              {c.toUpperCase()}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-16">
        <TapeBand items={capabilities} />
      </div>

      {/* Team teaser */}
      <section className="shell pb-10 pt-[clamp(80px,8vw,120px)]">
        <SectionHead n="01" label="The team" />
        <div className="flex flex-wrap gap-x-20 gap-y-10">
          <p className="flex-[3_1_560px] font-display text-[clamp(30px,3.6vw,54px)] font-bold leading-[1.08] tracking-[-0.02em]">
            Design, engineering <span className="text-mute">and</span> AI at one table — so the people you brief <span className="text-accent">are</span> the people who
            build it.
          </p>
          <div className="flex flex-[2_1_360px] flex-col gap-[18px] text-[17px] leading-relaxed">
            <p>
              Mosaic is a team of senior specialists: product design, full-stack engineering and AI engineering, with operations keeping every project on
              scope and on time.
            </p>
            <p className="text-mute">No account managers in between. You talk to the designer and engineers doing the work.</p>
            <Link href="/about" className="mt-1.5 font-semibold transition-colors hover:text-accent">
              Meet the team →
            </Link>
          </div>
        </div>
        <div className="mt-16 grid grid-cols-2 border-t-[1.5px] border-paper lg:grid-cols-4">
          {team.map((t) => (
            <div key={t.name} className="flex flex-col gap-2.5 border-b border-line py-[26px] pr-6">
              <Image src={t.photo} alt="" width={64} height={64} className="mb-1.5 h-16 w-16 rounded-full object-cover object-[center_30%] contrast-[1.08] grayscale" />
              <span className="font-mono text-xs uppercase text-accent">{t.area}</span>
              <span className="display text-[clamp(20px,2vw,26px)] !leading-none">{t.name}</span>
              <span className="text-[15px] leading-snug text-mute">{t.role}</span>
              <span className="font-mono text-xs">{t.years} YEARS</span>
            </div>
          ))}
        </div>
      </section>

      {/* Selected work */}
      <section className="shell pb-[140px] pt-[clamp(80px,8vw,120px)]">
        <SectionHead n="02" label="Selected work" right={`ALL ${projects.length} PROJECTS →`} href="/work" />
        <Link href={projectHref(featured)} className="group mb-7 flex flex-wrap items-center gap-8 rounded-[28px] bg-mirror p-[clamp(28px,4vw,56px)] text-mirror-ink">
          <span className="flex min-w-0 flex-[1_1_380px] flex-col gap-[18px]">
            <span className="font-mono text-xs text-mirror-mute">
              <span className="text-accent">FEATURED</span> · OUR OWN PRODUCT · AI · PRIVATE BETA
            </span>
            <span className="display text-[clamp(44px,5vw,80px)] !leading-[0.9] transition-colors group-hover:text-accent">
              Trader’s
              <br />
              Mirror
            </span>
            <span className="max-w-[460px] text-[17px] leading-relaxed text-mirror-text">
              A voice-first trading journal we designed and built in-house. Traders talk through a trade; our AI assistant, Mira, extracts the details, scores
              seven behaviour KPIs and tracks rules across projects and challenges.
            </span>
            <span className="flex flex-wrap gap-x-6 gap-y-2 border-t border-mirror-line pt-3.5 font-mono text-xs text-mirror-mute">
              <span>WE DID · Product design, full-stack &amp; AI</span>
              <span>STACK · Speech-to-text · LLMs</span>
            </span>
            <span className="font-semibold">Read the story →</span>
          </span>
          <span className="block min-w-0 flex-[1.2_1_460px] overflow-hidden rounded-[18px] border border-mirror-line">
            <Image
              src="/images/traders-mirror-film.jpg"
              alt="Trader’s Mirror landing page: Talk it out. Mira hears it."
              width={1280}
              height={730}
              sizes="(max-width: 960px) 100vw, 55vw"
              className="h-auto w-full transition-transform duration-700 group-hover:scale-[1.02]"
            />
          </span>
        </Link>

        <div className="grid gap-x-7 gap-y-12 md:grid-cols-2">
          {homeProjects.map((p) => (
            <Link key={p.slug} href={projectHref(p)} className="group flex flex-col gap-[18px]">
              <span className="relative block aspect-[16/11] overflow-hidden rounded-3xl" style={{ background: p.mat }}>
                <ProjectVisual visual={p.visual} sizes="(max-width: 768px) 90vw, 45vw" />
                <ProvenanceChip label={p.chip} accent={p.provenance === "Client"} />
                <GoArrow />
              </span>
              <span className="display text-[clamp(28px,2.6vw,40px)] !leading-[0.95] transition-colors group-hover:text-accent">{p.title}</span>
              <span className="max-w-[560px] text-base leading-normal">{p.summary}</span>
              <span className="flex flex-wrap justify-between gap-x-[22px] gap-y-2 border-t border-line pt-3 font-mono text-xs text-mute">
                <span>{p.cardMeta}</span>
                <span className="text-paper">READ THE STORY →</span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <Testimonials />

      {/* What we build */}
      <section className="shell pb-10 pt-[clamp(80px,8vw,120px)]">
        <SectionHead n="04" label="What we build" right="ALL SERVICES →" href="/services" />
        <div className="border-t-[1.5px] border-paper">
          {services.map((s) => (
            <Link
              key={s.id}
              href={`/services#${s.id}`}
              className="group flex flex-wrap items-baseline gap-x-8 gap-y-2.5 border-b border-line px-4 py-[26px] transition-colors hover:bg-accent hover:text-ink"
            >
              <span className="w-10 font-mono text-[13px] text-mute group-hover:text-ink">{s.n}</span>
              <span className="display flex-[1_1_380px] text-[clamp(28px,3.4vw,52px)] !leading-none">{s.title}</span>
              <span className="flex-[1_1_320px] text-base leading-normal text-mute group-hover:text-ink">{s.short}</span>
              <span aria-hidden className="text-[26px]">
                →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Agencies */}
      <section className="shell pb-10 pt-[clamp(80px,8vw,120px)]">
        <div className="flex flex-wrap items-start gap-x-16 gap-y-8 rounded-[28px] border border-line bg-card p-[clamp(28px,4vw,56px)]">
          <div className="flex-[1_1_380px]">
            <span className="mb-[18px] block font-mono text-[13px] text-mute">
              <span className="text-accent">05</span> — FOR AGENCIES
            </span>
            <h2 className="display text-[clamp(36px,4vw,60px)] !leading-[0.95]">Your build partner, behind the scenes.</h2>
          </div>
          <div className="flex-[1_1_380px]">
            <p className="mb-[22px] text-[17px] leading-relaxed">
              More client work than developers? We design and build white-label under your brand — for overflow, one-off projects or ongoing support.
            </p>
            {agencyPoints.map((a) => (
              <span key={a} className="flex justify-between border-t border-line py-3.5 text-base">
                <span>{a}</span>
                <span className="text-accent">✦</span>
              </span>
            ))}
            <Link href="/services#agencies" className="mt-[22px] inline-block font-semibold transition-colors hover:text-accent">
              Talk about a partnership →
            </Link>
          </div>
        </div>
      </section>

      <section className="shell pb-10 pt-[clamp(80px,8vw,120px)]">
        <SectionHead n="06" label="How a project runs" right="FULL PROCESS →" href="/services#process" />
        <ProcessGrid steps={process} />
      </section>

      <ClosingCta kicker="Got an idea?" title="Let’s make it real" secondary={{ label: "Book a discovery call", href: site.calendly }} />
    </>
  );
}
