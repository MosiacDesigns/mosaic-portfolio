"use client";

import { useEffect, useRef } from "react";

/**
 * Orange statement section that sits right below the hero.
 * The stage pins to the viewport while you scroll through a tall track; every character
 * starts faded and turns white one after another (with a soft edge), like reading along.
 * Only colour changes — nothing moves — so it runs with reduced-motion too.
 */

const STATEMENT =
  "We’re a design-led product studio. We craft UI/UX and front-end for websites, web apps and digital products — and build everything behind them in-house: full-stack, AI, automation and Web3.";

const BASE = 0.38; // starting opacity of the white text
const EDGE = 8; // characters in the soft fade-in front

const WIRE_SOLID =
  "M1060 600L-1400 900 M1060 600L-700 900 M1060 600L0 900 M1060 600L520 900 M1060 600L980 900 M1060 600L1440 900 M1060 600L2000 900 M1060 600L0 0 M1060 600L0 160 M1060 600L0 330 M1060 600L0 480 M1060 600L380 0 M1060 600L820 0 M1060 600L1300 0 M1060 600L1440 140 M1060 600L1440 400 M857 625L1138 625 M354 686L1330 686 M-406 779L1620 779 M-1400 900L2000 900 M1150 170L1370 170 M1130 265L1302 265 M1150 170L1130 265 M1370 170L1370 500 M1302 265L1302 522 M1370 170L1302 265 M1370 500L1150 500 M1302 522L1130 522 M1370 500L1302 522 M1150 500L1150 170 M1130 522L1130 265 M1150 500L1130 522 M80 640L340 640 M237 634L455 634 M80 640L237 634 M340 640L340 840 M455 634L455 802 M340 640L455 634 M340 840L80 840 M455 802L237 802 M340 840L455 802 M80 840L80 640 M237 802L237 634 M80 840L237 802 M760 700L920 700 M850 670L962 670 M760 700L850 670 M920 700L920 820 M962 670L962 754 M920 700L962 670 M920 820L760 820 M962 754L850 754 M920 820L962 754 M760 820L760 700 M850 754L850 670 M760 820L850 754";
const WIRE_DASHED = "M0 180L1440 560 M0 260L1440 640";

export default function StatementReveal({ text = STATEMENT }: { text?: string }) {
  const trackRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    const chars = Array.from(textRef.current?.querySelectorAll<HTMLSpanElement>("[data-c]") ?? []);
    if (!track || !chars.length) return;
    const n = chars.length;
    let last = -1;
    let raf = 0;

    const tick = () => {
      raf = 0;
      const r = track.getBoundingClientRect();
      const vh = window.innerHeight;
      // 0 when the stage pins to the top, 1 shortly before it unpins
      const prog = Math.min(1, Math.max(0, -r.top / (r.height - vh * 1.25)));
      if (prog === last) return;
      last = prog;
      const head = prog * (n + EDGE);
      for (let i = 0; i < n; i++) {
        const k = Math.min(1, Math.max(0, (head - i) / EDGE));
        chars[i].style.color = `rgba(255,255,255,${(BASE + (1 - BASE) * k).toFixed(3)})`;
      }
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(tick);
    };

    tick();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [text]);

  const words = text.split(" ");

  return (
    <section ref={trackRef} aria-label="What Mosaic Designs does" className="relative h-[320vh]">
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden bg-accent">
        <svg
          aria-hidden="true"
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
          fill="none"
          stroke="#fff"
          strokeOpacity=".22"
          strokeWidth="1.2"
          className="pointer-events-none absolute inset-0 h-full w-full"
        >
          <path d={WIRE_SOLID} />
          <path d={WIRE_DASHED} strokeDasharray="6 8" />
        </svg>

        <div className="relative max-w-[1060px] px-gutter text-center">
          {/* Screen readers get the sentence once, not character by character */}
          <p className="sr-only">{text}</p>
          <p ref={textRef} aria-hidden="true" className="text-[clamp(28px,3.8vw,56px)] font-normal leading-[1.22] tracking-[-0.015em]">
            {words.map((w, wi) => (
              <span key={wi}>
                <span className="inline-block whitespace-nowrap">
                  {Array.from(w).map((ch, ci) => (
                    <span key={ci} data-c style={{ color: `rgba(255,255,255,${BASE})` }}>
                      {ch}
                    </span>
                  ))}
                </span>
                {wi < words.length - 1 && " "}
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}
