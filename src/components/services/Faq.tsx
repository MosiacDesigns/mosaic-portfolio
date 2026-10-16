"use client";

import { useId, useState } from "react";

export default function Faq({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState(0);
  const base = useId();
  return (
    <div className="border-t border-paper">
      {items.map((f, i) => {
        const isOpen = i === open;
        const panel = `${base}-panel-${i}`;
        return (
          <div key={f.q} className="border-b border-line">
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={panel}
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="group flex min-h-[44px] w-full items-center justify-between gap-6 py-[26px] text-left"
              >
                <span className="font-display text-[clamp(20px,1.8vw,26px)] font-bold leading-tight transition-colors group-hover:text-accent">{f.q}</span>
                <span aria-hidden className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line text-xl text-accent">
                  {isOpen ? "−" : "+"}
                </span>
              </button>
            </h3>
            <div id={panel} hidden={!isOpen}>
              <p className="mb-[26px] max-w-[680px] text-[17px] leading-relaxed text-mute">{f.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
