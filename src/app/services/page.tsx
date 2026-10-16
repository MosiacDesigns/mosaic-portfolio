import type { Metadata } from "next";
import Link from "next/link";
import clsx from "clsx";
import Faq from "@/components/services/Faq";
import { ClosingCta, Greeting, ProcessGrid, SectionHead } from "@/components/ui/Bits";
import { ProjectVisual } from "@/components/work/ProjectVisual";
import { agencyPoints, engagementModels, faq, prices, services } from "@/content/services";
import { process, site } from "@/content/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Websites and web apps, MVPs and custom software, AI features and Web3 — plus white-label partnerships for agencies. How a project runs, ways to work with us and guide prices.",
};

const jump = [
  ...services.map((s) => ({ href: `#${s.id}`, label: s.title })),
  { href: "#agencies", label: "For agencies" },
  { href: "#pricing", label: "Pricing" },
];

export default function ServicesPage() {
  return (
    <>
      <section className="shell pt-[clamp(40px,6vw,96px)]">
        <Greeting>(SERVICES)</Greeting>
        <h1 className="display text-[clamp(64px,14vw,200px)] !leading-[0.84]">
          <span className="block animate-rise">What we</span>
          <span className="block animate-rise [animation-delay:.1s]">
            build<span className="text-accent">.</span>
          </span>
        </h1>
        <div className="mt-[clamp(32px,4vw,56px)] flex flex-wrap items-end justify-between gap-8">
          <p className="max-w-[620px] flex-[1_1_420px] text-[clamp(18px,1.5vw,21px)] leading-normal">
            Websites, web apps and AI-powered products for founders, product teams and agencies. Here’s what we take on, who each service is for, and how a
            project runs from first call to handover.
          </p>
          <nav aria-label="Jump to a section" className="flex flex-wrap gap-2.5">
            {jump.map((j) => (
              <a key={j.href} href={j.href} className="rounded-full border border-line px-4 py-2.5 text-sm transition-colors hover:border-accent hover:text-accent">
                {j.label}
              </a>
            ))}
          </nav>
        </div>
      </section>

      <section className="shell flex flex-col gap-[clamp(56px,6vw,96px)] pb-10 pt-[clamp(80px,9vw,140px)]">
        {services.map((s, i) => (
          <article
            key={s.id}
            id={s.id}
            className={clsx("group flex scroll-mt-8 flex-wrap gap-x-[clamp(32px,5vw,80px)] gap-y-8 border-t-[1.5px] border-paper pt-7", i % 2 === 1 && "lg:flex-row-reverse")}
          >
            <div className="flex min-w-0 flex-[1_1_480px] flex-col gap-[22px]">
              <span className="flex flex-wrap justify-between gap-2 font-mono text-[13px] text-mute">
                <span>
                  <span className="text-accent">{s.n}</span> — {s.kicker.toUpperCase()}
                </span>
                <span>LED BY · {s.lead.toUpperCase()}</span>
              </span>
              <h2 className="display text-[clamp(40px,4.6vw,68px)] !leading-[0.92]">{s.title}</h2>
              <p className="max-w-[560px] text-lg leading-relaxed">{s.description}</p>
              <p className="max-w-[560px] rounded-2xl border border-line bg-card px-5 py-4 text-base leading-normal">
                <span className="mb-1.5 block font-mono text-[11px] text-accent">GOOD FIT IF</span>
                {s.fit}
              </p>
              <ul className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-x-6">
                {s.included.map((item) => (
                  <li key={item} className="flex gap-3 border-b border-line py-3 text-base">
                    <span aria-hidden className="text-accent">
                      ✦
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <Link href={s.related.href} className="flex min-w-0 flex-[1_1_420px] flex-col gap-3">
              <span className="relative block aspect-[16/11] overflow-hidden rounded-3xl" style={{ background: s.mat }}>
                <ProjectVisual visual={s.visual} sizes="(max-width: 960px) 90vw, 42vw" inset="plain" />
              </span>
              <span className="flex justify-between font-mono text-xs text-mute">
                <span>SEE IT IN · {s.related.label.toUpperCase()}</span>
                <span aria-hidden>→</span>
              </span>
            </Link>
          </article>
        ))}
      </section>

      <section className="shell pt-[clamp(80px,8vw,120px)]">
        <div id="agencies" className="flex scroll-mt-8 flex-wrap gap-x-16 gap-y-8 rounded-[28px] bg-accent p-[clamp(28px,4vw,56px)] text-ink">
          <div className="flex flex-[1_1_380px] flex-col gap-[18px]">
            <span className="font-mono text-[13px]">05 — FOR AGENCIES</span>
            <h2 className="display text-[clamp(36px,4vw,60px)] !leading-[0.95]">Your build partner, behind the scenes.</h2>
            <p className="text-[17px] leading-relaxed">
              More client work than developers? We design and build white-label under your brand — for overflow, one-off projects or ongoing support. Your
              client relationship stays yours.
            </p>
          </div>
          <div className="flex-[1_1_380px]">
            {agencyPoints.map((a) => (
              <span key={a} className="flex justify-between border-t border-ink/25 py-3.5 text-base">
                <span>{a}</span>
                <span aria-hidden>✦</span>
              </span>
            ))}
            <Link href="/contact" className="mt-[22px] inline-flex rounded-full bg-ink px-[26px] py-4 font-semibold text-paper transition hover:-translate-y-0.5">
              Talk about a partnership →
            </Link>
          </div>
        </div>
      </section>

      <section id="process" className="shell section scroll-mt-8">
        <SectionHead n="06" label="How a project runs" right="SAME FIVE STEPS AS THE FILM" />
        <ProcessGrid steps={process} showOutput />
      </section>

      <section id="pricing" className="shell section scroll-mt-8">
        <SectionHead n="07" label="Ways to work with us" />
        <div className="grid gap-5 md:grid-cols-3">
          {engagementModels.map((m) => (
            <div key={m.title} className="flex flex-col gap-3.5 rounded-3xl border border-line bg-card p-7">
              <span className="font-mono text-xs uppercase text-accent">{m.kicker}</span>
              <span className="display text-[28px] !leading-none">{m.title}</span>
              <span className="text-base leading-relaxed text-mute">{m.text}</span>
              <span className="mt-auto border-t border-line pt-3.5 font-mono text-xs">{m.fit}</span>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-wrap gap-x-16 gap-y-6">
          <div className="flex flex-[1_1_320px] flex-col gap-3.5">
            <h3 className="display text-[32px] !leading-none">Guide prices</h3>
            <p className="max-w-[420px] text-base leading-relaxed text-mute">
              Starting points in USD, so you can tell early whether we’re a fit. Every project gets a fixed written quote after the discovery call.
            </p>
          </div>
          <div className="flex-[2_1_560px]">
            <dl className="border-t-[1.5px] border-paper">
              {prices.map((p) => (
                <div key={p.service} className="flex flex-wrap justify-between gap-x-6 gap-y-1.5 border-b border-line py-3.5 text-base">
                  <dt>{p.service}</dt>
                  <dd className="font-mono text-sm text-mute">{p.price}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-3.5 text-sm text-mute">Working with a different budget? Tell us on the enquiry form — we’ll say honestly what’s achievable.</p>
          </div>
        </div>
      </section>

      <section className="shell section flex flex-wrap gap-x-20 gap-y-8">
        <div className="min-w-0 flex-[1_1_300px]">
          <span className="mb-[18px] block font-mono text-[13px] text-mute">
            <span className="text-accent">08</span> — FAQ
          </span>
          <h2 className="display text-[clamp(34px,4.4vw,64px)] !leading-[0.92]">
            Good questions<span className="text-accent">.</span>
          </h2>
        </div>
        <div className="flex-[2_1_560px]">
          <Faq items={faq} />
        </div>
      </section>

      <ClosingCta kicker="Ready when you are." title="Let’s build it" secondary={{ label: "Book a free call", href: site.calendly }} />
    </>
  );
}
