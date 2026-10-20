import Link from "next/link";
import type { ReactNode } from "react";
import { ButtonLink } from "./Button";

/** "01 — ABOUT ……… ///////" row above a section. */
export function SectionHead({ n, label, right = "///////", href }: { n?: string; label: string; right?: string; href?: string }) {
  return (
    <div className="eyebrow mb-9 flex flex-wrap justify-between gap-3">
      <span>
        {n && <span className="text-accent">{n}</span>}
        {n && " — "}
        {label.toUpperCase()}
      </span>
      {href ? (
        <Link href={href} className="transition-colors hover:text-accent">
          {right}
        </Link>
      ) : (
        <span>{right}</span>
      )}
    </div>
  );
}

/** Small accent mono line above a hero headline: "(DESIGN · ENGINEERING · AI)". */
export function Greeting({ children }: { children: ReactNode }) {
  return <p className="mb-[18px] font-mono text-[13px] tracking-[0.04em] text-accent md:text-base">{children}</p>;
}

/**
 * Orange, slightly tilted “tape” band (DM Mono on orange). The only decorative band style —
 * big uppercase Syne is reserved for headings.
 */
export function TapeBand({ items, repeat = 6 }: { items: readonly string[]; repeat?: number }) {
  const list = Array.from({ length: repeat }, () => items).flat();
  return (
    <div aria-hidden className="-mx-5 my-10 -rotate-[1.2deg] overflow-hidden bg-accent py-4 text-ink">
      <div className="inline-flex animate-marquee-fast whitespace-nowrap font-mono text-[17px] font-medium uppercase tracking-[0.04em] md:text-[20px]">
        {list.map((t, i) => (
          <span key={i} className="pl-7">
            {t} <span className="pl-7">{"///////"}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/** Big centred sign-off used at the bottom of most pages. */
export function ClosingCta({
  kicker,
  title,
  mark = ".",
  primary = { label: "Start a project →", href: "/contact" },
  secondary,
}: {
  kicker: string;
  title: string;
  mark?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <section className="shell pb-20 pt-[clamp(100px,10vw,160px)] text-center">
      <p className="mb-3.5 font-mono text-[15px] text-mute">{kicker}</p>
      <h2 className="display text-[clamp(56px,10vw,150px)] !leading-[0.85] tracking-[-0.035em]">
        {title}
        <span className="text-accent">{mark}</span>
      </h2>
      <div className="mt-11 flex flex-wrap justify-center gap-4">
        <ButtonLink href={primary.href}>{primary.label}</ButtonLink>
        {secondary && (
          <ButtonLink href={secondary.href} variant="outline">
            {secondary.label}
          </ButtonLink>
        )}
      </div>
    </section>
  );
}

/** Process steps (five, from the brand film). */
export function ProcessGrid({ steps, showOutput = false }: { steps: readonly { n: string; title: string; text: string; output: string }[]; showOutput?: boolean }) {
  return (
    <div className="grid border-t-[1.5px] border-paper sm:grid-cols-2 lg:grid-cols-5">
      {steps.map((s) => (
        <div key={s.n} className="flex flex-col gap-3 border-b border-line py-[26px] pr-6 lg:border-b-0">
          <span className="font-display text-[56px] font-bold leading-[0.9] text-accent">{s.n}</span>
          <span className="font-display text-[22px] font-bold uppercase leading-[1.05]">{s.title}</span>
          <span className="max-w-[300px] text-[15px] leading-relaxed text-mute">{s.text}</span>
          {showOutput && <span className="font-mono text-xs">→ {s.output}</span>}
        </div>
      ))}
    </div>
  );
}

export function Chip({ children }: { children: ReactNode }) {
  return <span className="rounded-full border border-line px-4 py-2.5 text-[15px] font-medium">{children}</span>;
}

/** Provenance label on project imagery: orange for client work, dark for everything else. */
export function ProvenanceChip({ label, accent }: { label: string; accent?: boolean }) {
  return (
    <span
      className={
        "absolute left-[18px] top-[18px] z-[1] rounded-full px-3 py-[7px] font-mono text-[11px] tracking-[0.04em] " +
        (accent ? "bg-accent text-ink" : "border border-line bg-ink/80 text-paper")
      }
    >
      {label}
    </span>
  );
}
