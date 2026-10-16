import Image from "next/image";
import clsx from "clsx";

type Visual =
  | { kind: "image"; src: string; alt: string; width: number; height: number }
  | { kind: "phones"; screens: { src: string; alt: string }[] };

/**
 * A screenshot shown whole on a coloured mat — never cropped. `inset` leaves room at the top
 * for the provenance chip and arrow so they never sit over the screenshot.
 */
export function ProjectVisual({ visual, sizes, priority, inset = "card" }: { visual: Visual; sizes: string; priority?: boolean; inset?: "card" | "plain" }) {
  const pad = inset === "card" ? "inset-x-[6%] bottom-[6%] top-[72px]" : "inset-[6%]";
  if (visual.kind === "image") {
    return (
      <span className={clsx("absolute flex items-center justify-center", pad)}>
        <Image
          src={visual.src}
          alt={visual.alt}
          width={visual.width}
          height={visual.height}
          sizes={sizes}
          priority={priority}
          className="h-auto max-h-full w-auto max-w-full rounded-[10px] border border-paper/10 shadow-[0_24px_50px_-24px_rgba(0,0,0,0.8)] transition-transform duration-700 ease-out group-hover:scale-[1.02]"
        />
      </span>
    );
  }
  return (
    <span className={clsx("absolute flex items-center justify-center gap-[4%]", pad)}>
      {visual.screens.map((s, i) => (
        <Image
          key={s.src}
          src={s.src}
          alt={s.alt}
          width={560}
          height={1155}
          sizes="(max-width: 860px) 30vw, 12vw"
          className={clsx("w-auto", i === 1 ? "h-full" : "h-[88%]")}
        />
      ))}
    </span>
  );
}

/** Round arrow button in the corner of project imagery — always →. */
export function GoArrow() {
  return (
    <span
      aria-hidden
      className="absolute right-[18px] top-[18px] z-[1] inline-flex h-12 w-12 items-center justify-center rounded-full bg-paper text-xl text-ink transition-transform duration-300 group-hover:-rotate-45"
    >
      →
    </span>
  );
}
