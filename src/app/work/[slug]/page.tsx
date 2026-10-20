import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import clsx from "clsx";
import { ButtonLink } from "@/components/ui/Button";
import { ClosingCta } from "@/components/ui/Bits";
import { getProject, projects, projectHref } from "@/content/projects";
import { showPlaceholders } from "@/lib/placeholder";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const p = getProject(params.slug);
  if (!p) return {};
  return { title: `${p.title} — project story`, description: `${p.story.oneLiner} ${p.summary}` };
}

/** Wraps sample copy: dashed outline in development, hidden in production. */
function Sample({ on, children, className }: { on?: boolean; children: ReactNode; className?: string }) {
  if (!on) return <>{children}</>;
  if (!showPlaceholders) return null;
  return (
    <div className={clsx("relative rounded-2xl border-[1.5px] border-dashed border-accent p-5", className)}>
      <span className="absolute -top-2.5 left-4 bg-ink px-2 font-mono text-[10px] text-accent">SAMPLE — REPLACE</span>
      {children}
    </div>
  );
}

export default function ProjectStoryPage({ params }: { params: { slug: string } }) {
  const p = getProject(params.slug);
  if (!p) notFound();
  const st = p.story;
  const next = getProject(p.next);
  const show = (placeholder?: boolean) => !placeholder || showPlaceholders;

  // Number only the sections that actually render.
  const sections = [
    { id: "business", label: "The business & its problem", visible: show(st.business.placeholder) },
    { id: "statement", label: "Problem statement", visible: show(st.statement.placeholder) },
    { id: "approach", label: "What we did", visible: show(st.approach.placeholder) },
    { id: "value", label: "Value added", visible: show(st.value.placeholder) },
    { id: "technical", label: "Technical notes", visible: true },
    { id: "screens", label: "The screens", visible: !!st.screens?.length },
  ]
    .filter((s) => s.visible)
    .map((s, i) => ({ ...s, n: String(i + 1).padStart(2, "0") }));
  const num = (id: string) => sections.find((s) => s.id === id)?.n ?? "";
  const Label = ({ id }: { id: string }) => (
    <span className="font-mono text-[13px] text-mute">
      <span className="text-accent">{num(id)}</span> — {sections.find((s) => s.id === id)?.label.toUpperCase()}
    </span>
  );

  return (
    <>
      <section className="shell pt-[clamp(32px,5vw,72px)]">
        <nav aria-label="Breadcrumb" className="mb-[18px] font-mono text-[13px] text-mute">
          <Link href="/work" className="transition-colors hover:text-accent">
            WORK
          </Link>{" "}
          / <span style={{ color: st.accent }}>{p.title.toUpperCase()}</span>
        </nav>
        <div className="mb-[22px] flex flex-wrap gap-2.5">
          <span className={clsx("rounded-full px-3 py-[7px] font-mono text-[11px] tracking-[0.04em]", p.provenance === "Client" ? "bg-accent text-ink" : "border border-line")}>{p.chip}</span>
          <span className="rounded-full border border-line px-3 py-[7px] font-mono text-[11px] tracking-[0.04em] text-mute">{p.category.toUpperCase()}</span>
        </div>
        <h1 className="display animate-rise text-[clamp(52px,12vw,180px)] !leading-[0.82] tracking-[-0.045em]">
          {p.title}
          <span style={{ color: st.accent }}>.</span>
        </h1>
        <p className="mt-9 max-w-[760px] text-[clamp(21px,2vw,30px)] leading-snug">{st.oneLiner}</p>

        <dl aria-label="Project overview" className="mt-12 grid grid-cols-2 gap-x-6 gap-y-[18px] border-b border-t-[1.5px] border-b-line border-t-paper py-6 md:grid-cols-[repeat(auto-fit,minmax(170px,1fr))]">
          {st.overview.map((o) => (
            <div key={o.label}>
              <dt className="mb-1.5 font-mono text-[11px] text-mute">{o.label.toUpperCase()}</dt>
              <dd className="text-[15px] leading-snug">{o.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Hero visual — shown whole, never cropped */}
      <section className="shell pt-12">
        <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-[32px] p-[6%] md:aspect-[16/8]" style={{ background: p.mat }}>
          <div aria-hidden className="absolute left-1/2 top-[30%] aspect-square w-3/5 -translate-x-1/2 rounded-full opacity-20 blur-[60px]" style={{ background: st.accent }} />
          {p.visual.kind === "phones" ? (
            <div className="relative flex h-full w-full items-center justify-center gap-[4%]">
              {p.visual.screens.map((s, i) => (
                <Image key={s.src} src={s.src} alt={s.alt} width={560} height={1155} priority sizes="25vw" className={clsx("w-auto", i === 1 ? "h-full" : "h-[88%]")} />
              ))}
            </div>
          ) : (
            <Image
              src={p.visual.src}
              alt={p.visual.alt}
              width={p.visual.width}
              height={p.visual.height}
              priority
              sizes="(max-width: 960px) 90vw, 1200px"
              className="relative h-auto max-h-full w-auto max-w-full rounded-xl border border-paper/10 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.8)]"
            />
          )}
        </div>
      </section>

      <div className="shell flex gap-16 pt-[clamp(80px,9vw,120px)]">
        <nav aria-label="On this page" className="sticky top-8 hidden w-[220px] shrink-0 flex-col gap-1 self-start text-sm lg:flex">
          <span className="mb-2.5 font-mono text-[11px] text-mute">ON THIS PAGE</span>
          {sections.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="border-b border-line py-2 text-mute transition-colors hover:text-paper">
              <span className="font-mono text-[11px] text-accent">{s.n}</span>  {s.label}
            </a>
          ))}
        </nav>

        <div className="flex min-w-0 flex-1 flex-col gap-[clamp(72px,8vw,112px)]">
          {show(st.business.placeholder) && (
            <section id="business" className="flex max-w-[820px] scroll-mt-8 flex-col gap-5">
              <Label id="business" />
              <Sample on={st.business.placeholder}>
                <p className="text-[19px] leading-[1.7]">{st.business.text}</p>
              </Sample>
            </section>
          )}

          {show(st.statement.placeholder) && (
            <section id="statement" className="flex scroll-mt-8 flex-col gap-5">
              <Label id="statement" />
              <Sample on={st.statement.placeholder}>
                <p className="font-display text-[clamp(28px,3.4vw,50px)] font-bold leading-[1.04] tracking-[-0.02em]">{st.statement.text}</p>
              </Sample>
            </section>
          )}

          {show(st.approach.placeholder) && (
            <section id="approach" className="flex scroll-mt-8 flex-col gap-6">
              <Label id="approach" />
              <Sample on={st.approach.placeholder}>
                <p className="max-w-[820px] text-[19px] leading-[1.7]">{st.approach.text}</p>
              </Sample>
              {st.features && (
                <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] border-t-[1.5px] border-paper">
                  {st.features.map((f) => (
                    <div key={f.title} className="flex flex-col gap-2 border-b border-line py-6 pr-6">
                      <span className="font-display text-xl font-bold uppercase">{f.title}</span>
                      <span className="text-[15px] leading-normal text-mute">{f.text}</span>
                    </div>
                  ))}
                </div>
              )}
            </section>
          )}

          {show(st.value.placeholder) && (
            <section id="value" className="flex scroll-mt-8 flex-col gap-6">
              <Label id="value" />
              <Sample on={st.value.placeholder}>
                <div className="grid gap-5 xl:grid-cols-3">
                  {st.value.items.map((v, i) => (
                    <div key={i} className="flex flex-col gap-2.5 rounded-3xl bg-card p-[26px]">
                      <span className="font-display text-[40px] font-bold leading-none text-accent">{v.k}</span>
                      <span className="text-[15px] leading-normal text-mute">{v.d}</span>
                    </div>
                  ))}
                </div>
              </Sample>
            </section>
          )}

          <section id="technical" className="flex scroll-mt-8 flex-wrap gap-x-16 gap-y-6 rounded-[28px] border border-line bg-card p-[clamp(28px,4vw,48px)]">
            <div className="flex flex-[1_1_260px] flex-col gap-4">
              <Label id="technical" />
              <div className="flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span key={s} className="rounded-full border border-line px-3.5 py-2 text-sm">
                    {s}
                  </span>
                ))}
              </div>
            </div>
            {show(st.technical.placeholder) && (
              <div className="flex-[2_1_420px]">
                <Sample on={st.technical.placeholder}>
                  <ul>
                    {st.technical.notes.map((t) => (
                      <li key={t.title} className="flex gap-3 border-b border-line py-3.5 text-base leading-normal">
                        <span aria-hidden className="text-accent">
                          ✦
                        </span>
                        <span>
                          <b className="font-semibold">{t.title}</b> <span className="text-mute">— {t.text}</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </Sample>
              </div>
            )}
          </section>

          {st.screens && (
            <section id="screens" className="flex scroll-mt-8 flex-col gap-6">
              <Label id="screens" />
              <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-6">
                {st.screens.map((s) => (
                  <figure key={s.n} className="flex flex-col gap-3.5">
                    <span className="flex justify-center rounded-3xl border border-line bg-card px-5 py-8">
                      <Image src={s.src} alt={s.alt} width={560} height={1155} sizes="260px" className="h-auto w-[72%] max-w-[260px]" />
                    </span>
                    <figcaption className="text-[15px] leading-normal">
                      <span className="font-mono text-xs text-accent">{s.n}</span> <b className="font-semibold">{s.title}</b> <span className="text-mute">— {s.text}</span>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </section>
          )}

          {st.quote && (
            <figure className="flex flex-col items-center gap-5 rounded-[28px] border border-line bg-card p-[clamp(28px,4vw,48px)] text-center">
              <span className="font-mono text-xs text-accent">(WHAT THE CLIENT SAID)</span>
              <blockquote className="max-w-[760px] text-[clamp(20px,2.2vw,30px)] font-medium leading-[1.3] tracking-[-0.01em]">“{st.quote.quote}”</blockquote>
              <figcaption className="text-base text-mute">
                <span className="text-paper">{st.quote.name}</span>
                <span className="px-2.5 text-line2">|</span>
                {st.quote.role}
              </figcaption>
            </figure>
          )}
        </div>
      </div>

      <section className="shell mt-[clamp(80px,8vw,120px)] flex flex-wrap items-center justify-between gap-6 border-t border-line py-8">
        <span className="text-[17px] text-mute">Want something like this for your product?</span>
        <div className="flex flex-wrap items-center gap-3.5">
          {p.live?.code && (
            <span className="font-mono text-xs text-mute">
              ACCESS CODE · <span className="select-all text-paper">{p.live.code}</span>
            </span>
          )}
          {p.live && (
            <ButtonLink href={p.live.href} size="md" variant="outline">
              {p.live.label} ↗
            </ButtonLink>
          )}
          <ButtonLink href={st.servicesLink.href} size="md" variant="outline">
            {st.servicesLink.label}
          </ButtonLink>
          <ButtonLink href="/contact" size="md">
            Start a project →
          </ButtonLink>
        </div>
      </section>

      {next && (
        <section className="shell pt-10">
          <Link href={projectHref(next)} className="group flex flex-wrap items-end justify-between gap-6 border-y-[1.5px] border-paper py-10">
            <span className="flex min-w-0 flex-col gap-3">
              <span className="font-mono text-[13px] text-mute">NEXT PROJECT</span>
              <span className="display text-[clamp(36px,7vw,110px)] !leading-[0.85] tracking-[-0.04em] transition-colors group-hover:text-accent">{next.title}</span>
            </span>
            <span aria-hidden className="text-[clamp(40px,5vw,80px)] leading-none transition-transform group-hover:translate-x-2.5">
              →
            </span>
          </Link>
        </section>
      )}

      <ClosingCta kicker="Have a project in mind?" title="Let’s talk" />
    </>
  );
}
