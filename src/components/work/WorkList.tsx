"use client";

import Link from "next/link";
import { useState } from "react";
import clsx from "clsx";
import { ProvenanceChip } from "@/components/ui/Bits";
import { projects, projectHref, tags, type Tag } from "@/content/projects";
import { GoArrow, ProjectVisual } from "./ProjectVisual";

type Filter = "All" | Tag;

export default function WorkList() {
  const [filter, setFilter] = useState<Filter>("All");
  const shown = projects.filter((p) => filter === "All" || p.tags.includes(filter));
  const count = (f: Filter) => (f === "All" ? projects.length : projects.filter((p) => p.tags.includes(f)).length);

  return (
    <>
      <div className="shell">
        <div className="flex flex-wrap items-end justify-between gap-7 border-b border-line pb-7">
          <p className="max-w-[600px] flex-[1_1_380px] text-[clamp(17px,1.4vw,20px)] leading-relaxed">
            Products, platforms and websites we’ve designed and built — for clients, as pitch builds for prospective clients, and for ourselves. Each one has
            the full story behind it.
          </p>
          <div role="group" aria-label="Filter projects" className="no-scrollbar -mx-gutter flex gap-2 overflow-x-auto px-gutter md:mx-0 md:flex-wrap md:px-0">
            {(["All", ...tags] as Filter[]).map((f) => {
              const on = f === filter;
              return (
                <button
                  key={f}
                  type="button"
                  aria-pressed={on}
                  onClick={() => setFilter(f)}
                  className={clsx(
                    "min-h-[44px] shrink-0 rounded-full border px-[18px] text-[15px] transition-colors",
                    on ? "border-accent bg-accent text-ink" : "border-line hover:border-paper",
                  )}
                >
                  {f} <span className="font-mono text-[11px] opacity-70">{count(f)}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <section aria-live="polite" className="shell pb-10">
        {shown.map((p, i) => {
          const href = projectHref(p);
          return (
            <article
              key={p.slug}
              id={p.slug}
              className="group flex scroll-mt-8 animate-fade-up flex-wrap items-center gap-x-[clamp(32px,4vw,64px)] gap-y-7 border-b border-line py-[clamp(40px,4vw,64px)]"
            >
              <Link href={href} tabIndex={-1} aria-hidden className="relative block aspect-[16/10.5] min-w-0 flex-[1.5_1_520px] overflow-hidden rounded-3xl" style={{ background: p.mat }}>
                <ProjectVisual visual={p.visual} sizes="(max-width: 860px) 90vw, 55vw" priority={i === 0} />
                <ProvenanceChip label={p.chip} accent={p.provenance === "Client"} />
                <GoArrow />
              </Link>
              <div className="flex min-w-0 flex-[1_1_360px] flex-col gap-[18px]">
                <span className="font-mono text-[13px] text-mute">
                  <span className="text-accent">{String(projects.indexOf(p) + 1).padStart(2, "0")}</span> / {p.category.toUpperCase()}
                </span>
                <h2 className="display text-[clamp(36px,4vw,60px)] !leading-[0.92] transition-colors group-hover:text-accent">
                  <Link href={href}>{p.title}</Link>
                </h2>
                <p className="text-[17px] leading-relaxed">{p.summary}</p>
                <dl className="grid grid-cols-2 gap-x-5 gap-y-3.5 border-t border-line pt-[18px]">
                  {p.meta.map((m) => (
                    <div key={m.label}>
                      <dt className="mb-1 font-mono text-[11px] text-mute">{m.label.toUpperCase()}</dt>
                      <dd className="text-[15px]">{m.value}</dd>
                    </div>
                  ))}
                  <div className="col-span-2">
                    <dt className="mb-1 font-mono text-[11px] text-mute">STACK</dt>
                    <dd className="text-[15px]">{p.stack.join(" · ")}</dd>
                  </div>
                </dl>
                <div className="flex flex-wrap gap-x-6 gap-y-2 font-semibold">
                  <Link href={href} className="transition-colors hover:text-accent">
                    Read the story →
                  </Link>
                  {p.live && (
                    <a href={p.live.href} target="_blank" rel="noopener noreferrer" className="text-mute transition-colors hover:text-accent">
                      {p.live.label} ↗<span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </>
  );
}
