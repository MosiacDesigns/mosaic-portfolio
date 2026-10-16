"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import clsx from "clsx";

/**
 * A video in the tilted orange “polaroid” frame. Shows a poster with a play button.
 * The <video> is always in the page (preload="none", so nothing downloads until played) and is
 * started from the click handler itself — that keeps the user gesture, so browsers play it WITH sound.
 */
export default function FilmCard({
  src,
  webm,
  poster,
  label,
  caption,
  duration,
  tilt = "-rotate-[4deg]",
  frame = "accent",
  sizes = "(max-width: 960px) 90vw, 440px",
  priority,
  className,
}: {
  src: string;
  webm?: string;
  poster: string;
  label: string;
  caption: string;
  duration: string;
  tilt?: string;
  frame?: "accent" | "paper";
  sizes?: string;
  priority?: boolean;
  className?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const play = () => {
    const v = ref.current;
    if (!v) return;
    v.muted = false;
    v.volume = 1;
    setPlaying(true);
    void v.play().catch(() => {
      // Some browsers still refuse; the native controls are now visible, so one more tap plays it.
    });
  };

  return (
    <div className={clsx(tilt, "rounded-[18px] p-2.5 shadow-[0_40px_70px_-30px_rgba(0,0,0,0.9)]", frame === "accent" ? "bg-accent" : "bg-paper", className)}>
      <div className="relative aspect-video overflow-hidden rounded-[10px] bg-[#111]">
        <video
          ref={ref}
          poster={poster}
          preload="none"
          playsInline
          controls={playing}
          className="absolute inset-0 block h-full w-full"
          onEnded={() => setPlaying(false)}
        >
          <source src={src} type="video/mp4" />
          {webm && <source src={webm} type="video/webm" />}
        </video>
        {!playing && (
          <button type="button" onClick={play} aria-label={label} className="group absolute inset-0 block">
            <Image src={poster} alt="" fill sizes={sizes} priority={priority} className="object-cover" />
            <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-paper transition-transform duration-300 group-hover:scale-110">
              <svg aria-hidden width="20" height="22" viewBox="0 0 20 22">
                <path d="M2 2 L18 11 L2 20 Z" fill="#0E0E0E" />
              </svg>
            </span>
          </button>
        )}
      </div>
      <span className="flex justify-between px-1.5 pb-0.5 pt-2.5 font-mono text-[11px] text-ink">
        <span>{caption}</span>
        <span>{duration} ▶</span>
      </span>
    </div>
  );
}
