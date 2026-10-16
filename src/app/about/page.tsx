import type { Metadata } from "next";
import Image from "next/image";
import clsx from "clsx";
import { ClosingCta, Greeting, SectionHead, TapeBand } from "@/components/ui/Bits";
import FilmCard from "@/components/ui/FilmCard";
import { beliefs, facts, toolkit } from "@/content/about";
import { film } from "@/content/site";
import { team } from "@/content/team";
import { showPlaceholders } from "@/lib/placeholder";

export const metadata: Metadata = {
  title: "About",
  description:
    "Mosaic Designs is a senior team of designers and engineers. Meet the people you’ll work with — design, engineering, AI and operations — and how we think.",
};

export default function AboutPage() {
  return (
    <>
      <section className="shell pt-[clamp(40px,6vw,96px)]">
        <Greeting>(ABOUT THE STUDIO)</Greeting>
        <h1 className="display text-[clamp(26px,8.6vw,132px)]">
          <span className="block animate-rise whitespace-nowrap">Senior team.</span>
          <span className="block animate-rise [animation-delay:.1s] whitespace-nowrap">
            Serious work<span className="text-accent">.</span>
          </span>
        </h1>
        <p className="mt-[clamp(32px,4vw,56px)] max-w-[760px] text-[clamp(18px,1.5vw,22px)] leading-relaxed">
          Mosaic Designs is a senior team of designers and engineers. We design and build websites, web apps and AI-powered products for founders, product teams
          and agencies — and you work directly with the people doing the work, from first call to handover.
        </p>
      </section>

      <section className="shell flex flex-wrap items-center gap-x-16 gap-y-10 pt-[clamp(72px,8vw,110px)]">
        <div className="flex flex-[1_1_300px] flex-col gap-4">
          <span className="font-mono text-[13px] text-mute">
            <span className="text-accent">00</span> — THE FILM
          </span>
          <h2 className="display text-[clamp(32px,3.4vw,52px)] !leading-[0.95]">Mosaic in 96 seconds</h2>
          <p className="max-w-[380px] text-[17px] leading-relaxed text-mute">What we build, how a project runs, and what you get at the end of it.</p>
        </div>
        <div className="min-w-0 flex-[2_1_560px]">
          <FilmCard src={film.src} webm={film.webm} poster={film.poster} label={film.label} caption="THE FILM · HOW WE WORK" duration={film.duration} tilt="-rotate-[1.5deg]" sizes="(max-width: 960px) 90vw, 60vw" />
        </div>
      </section>

      <section className="shell pb-10 pt-[clamp(100px,10vw,140px)]">
        <SectionHead n="01" label="Who you’ll work with" right="DESIGN · ENGINEERING · AI · OPERATIONS" />
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {team.map((t) => (
            <article key={t.name} className="group flex flex-col gap-[18px] rounded-3xl border border-line bg-card p-3.5 pb-[26px]">
              <span className="relative block aspect-square overflow-hidden rounded-2xl bg-ink">
                <Image
                  src={t.photo}
                  alt={`${t.name}, ${t.role}`}
                  fill
                  sizes="(max-width: 640px) 90vw, (max-width: 1280px) 45vw, 320px"
                  className="object-cover object-[center_30%] contrast-[1.08] grayscale transition duration-500 group-hover:grayscale-0"
                />
                <span className="absolute left-3 top-3 rounded-full bg-accent px-2.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.04em] text-ink">{t.area}</span>
              </span>
              <div className="flex flex-1 flex-col gap-[18px] px-3">
                <div className="flex flex-col gap-1.5">
                  <h3 className="display text-[26px] !leading-none">{t.name}</h3>
                  <span className="text-[15px] text-mute">{t.role}</span>
                </div>
                {(!t.bioPlaceholder || showPlaceholders) && (
                  <p className={clsx("text-sm leading-relaxed text-mute", t.bioPlaceholder && "sample")}>{t.bio}</p>
                )}
                <div className="flex flex-wrap gap-1.5">
                  {t.skills.map((k) => (
                    <span key={k} className="rounded-full border border-line px-3 py-1.5 text-[13px]">
                      {k}
                    </span>
                  ))}
                </div>
                <span className="mt-auto border-t border-line pt-3.5 font-mono text-xs">{t.years} YEARS EXPERIENCE</span>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-[clamp(72px,7vw,96px)] grid grid-cols-2 border-t-[1.5px] border-paper lg:grid-cols-4">
          {facts.map((f) => (
            <div key={f.label} className="flex flex-col gap-2.5 pr-6 pt-[26px]">
              <span className={clsx("font-display text-[clamp(44px,6vw,88px)] font-bold leading-[0.9] tracking-[-0.03em]", f.accent && "text-accent")}>{f.n}</span>
              <span className="max-w-[240px] text-base leading-snug text-mute">{f.label}</span>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-16">
        <TapeBand items={["Thoughtful design · Serious engineering · Practical AI"]} />
      </div>

      <section className="shell section">
        <SectionHead n="02" label="How we think" />
        <div className="border-t-[1.5px] border-paper">
          {beliefs.map((b) => (
            <div key={b.n} className="group flex flex-wrap items-baseline gap-x-10 gap-y-2.5 border-b border-line py-[30px]">
              <span className="w-10 font-mono text-[13px] text-mute">{b.n}</span>
              <span className="display flex-[1_1_420px] text-[clamp(28px,3.2vw,46px)] !leading-none transition-colors group-hover:text-accent">{b.title}</span>
              <span className="flex-[1_1_360px] text-[17px] leading-relaxed text-mute">{b.text}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="shell section">
        <SectionHead n="03" label="The toolkit" right="WHAT WE BUILD WITH" />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] gap-5">
          {toolkit.map((g) => (
            <div key={g.group} className="flex flex-col gap-[18px] rounded-3xl border border-line bg-card p-[26px]">
              <span className="font-mono text-xs text-accent">{g.group.toUpperCase()}</span>
              <span className="flex flex-wrap gap-2">
                {g.items.map((i) => (
                  <span key={i} className="rounded-full border border-line px-3.5 py-2 text-[15px]">
                    {i}
                  </span>
                ))}
              </span>
            </div>
          ))}
        </div>
      </section>

      <ClosingCta kicker="Sounds like a fit?" title="Say hello" secondary={{ label: "See the work", href: "/work" }} />
    </>
  );
}
