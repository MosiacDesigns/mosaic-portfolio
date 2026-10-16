"use client";

import Image from "next/image";
import { useState } from "react";
import clsx from "clsx";

/**
 * A video in the tilted orange “polaroid” frame. Shows a poster with a play button;
 * the video only loads when played.
 */
export default function FilmCard({
  src,
  poster,
  label,
  caption,
  duration,
  tilt = "-rotate-[4deg]",
  frame = "accent",
  captionsSrc,
  sizes = "(max-width: 960px) 90vw, 440px",
  priority,
  className,
}: {
  src: string;
  poster: string;
  label: string;
  caption: string;
  duration: string;
  tilt?: string;
  frame?: "accent" | "paper";
  captionsSrc?: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
}) {
  const [playing, setPlaying] = useState(false);
  return (
    <div className={clsx(tilt, "rounded-[18px] p-2.5 shadow-[0_40px_70px_-30px_rgba(0,0,0,0.9)]", frame === "accent" ? "bg-accent" : "bg-paper", className)}>
      {playing ? (
        <video src={src} poster={poster} controls autoPlay playsInline className="block aspect-video w-full rounded-[10px] bg-[#111]">
          {captionsSrc && <track kind="captions" src={captionsSrc} srcLang="en" label="English" default />}
        </video>
      ) : (
        <button type="button" onClick={() => setPlaying(true)} aria-label={label} className="group relative block aspect-video w-full overflow-hidden rounded-[10px] bg-[#111]">
          <Image src={poster} alt="" fill sizes={sizes} priority={priority} className="object-cover" />
          <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-paper transition-transform duration-300 group-hover:scale-110">
            <svg aria-hidden width="20" height="22" viewBox="0 0 20 22">
              <path d="M2 2 L18 11 L2 20 Z" fill="#0E0E0E" />
            </svg>
          </span>
        </button>
      )}
      <span className="flex justify-between px-1.5 pb-0.5 pt-2.5 font-mono text-[11px] text-ink">
        <span>{caption}</span>
        <span>{duration} ▶</span>
      </span>
    </div>
  );
}
