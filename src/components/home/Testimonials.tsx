"use client";

import Image from "next/image";
import { useState } from "react";
import clsx from "clsx";
import { testimonials, videoTestimonial as vt } from "@/content/testimonials";

// Where the faded cards float on desktop (hidden below lg).
const slots = [
  "left-[4%] top-14 w-[250px]",
  "right-[5%] top-[60px] w-[280px]",
  "left-[7%] bottom-16 w-[300px]",
  "left-[35%] top-9 w-[320px]",
  "-right-[1%] top-[360px] w-[240px]",
  "-left-[1%] top-[400px] w-[240px]",
  "left-[39%] bottom-10 w-[340px]",
];

/** Spotlight testimonial with dots, faded floating cards and the Build Squad video. */
export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const [video, setVideo] = useState(false);
  const q = testimonials[idx];
  const others = testimonials.map((t, i) => ({ t, i })).filter((x) => x.i !== idx);
  const pick = (i: number) => {
    setIdx(i);
    setVideo(false);
  };

  return (
    <section aria-labelledby="testimonials-title" className="relative flex min-h-[900px] items-center justify-center overflow-hidden border-y border-line bg-card px-5 py-[120px]">
      {others.map(({ t, i }, n) => (
        <button
          key={t.name}
          type="button"
          onClick={() => pick(i)}
          aria-label={`Show the quote from ${t.name}`}
          className={clsx(
            "absolute z-[1] hidden rounded-[26px] border border-[#262523] px-[26px] py-6 text-center text-base leading-[1.45] text-faint transition-colors hover:border-line2 hover:text-mute lg:block",
            slots[n % slots.length],
          )}
        >
          {t.short}
        </button>
      ))}

      <button
        type="button"
        onClick={() => setVideo(true)}
        aria-label={`Watch ${vt.name} from ${vt.company}, video testimonial, ${vt.duration.replace(":", " minute ")} seconds`}
        className="absolute bottom-[72px] right-[7%] z-[1] hidden w-[300px] rotate-[4deg] rounded-2xl bg-accent px-[9px] pb-2.5 pt-[9px] text-left shadow-[0_40px_70px_-30px_rgba(0,0,0,0.9)] transition-transform hover:rotate-[2deg] lg:block"
      >
        <span className="relative block aspect-video overflow-hidden rounded-[9px] bg-[#111]">
          <Image src={vt.poster} alt="" fill sizes="300px" className="object-cover" />
          <span className="absolute left-1/2 top-1/2 flex h-[52px] w-[52px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-paper">
            <svg aria-hidden width="16" height="18" viewBox="0 0 20 22">
              <path d="M2 2 L18 11 L2 20 Z" fill="#0E0E0E" />
            </svg>
          </span>
        </span>
        <span className="flex justify-between px-1 pt-[9px] font-mono text-[11px] text-ink">
          <span>
            {vt.name.toUpperCase()} · {vt.company.toUpperCase()}
          </span>
          <span>{vt.duration} ▶</span>
        </span>
      </button>

      <div className="relative z-[2] flex max-w-[920px] flex-col items-center gap-7 text-center">
        <p id="testimonials-title" className="font-mono text-sm tracking-[0.04em] text-accent">
          (WHAT CLIENTS SAY)
        </p>

        {video ? (
          <figure className="flex w-[min(820px,100%)] flex-col gap-[18px]">
            <video src={vt.src} poster={vt.poster} controls autoPlay playsInline className="block aspect-video w-full rounded-[18px] bg-[#111]">
              {vt.captions && <track kind="captions" src={vt.captions} srcLang="en" label="English" default />}
            </video>
            <figcaption className="flex flex-wrap items-center justify-between gap-3 text-base text-mute">
              <span>
                <span className="text-paper">{vt.name}</span>
                <span className="px-2 text-line2">|</span>
                {vt.company} · video testimonial
              </span>
              <button type="button" onClick={() => setVideo(false)} className="min-h-[44px] font-mono text-xs text-paper hover:text-accent">
                ← BACK TO QUOTES
              </button>
            </figcaption>
          </figure>
        ) : (
          <>
            <figure key={idx} className="flex animate-fade-up flex-col items-center gap-7">
              <blockquote className="text-[clamp(24px,2.7vw,40px)] font-medium leading-[1.22] tracking-[-0.02em]">{q.quote}</blockquote>
              <figcaption className="text-[17px] text-mute">
                <span className="text-paper">{q.name}</span>
                <span className="px-2.5 text-line2">|</span>
                {q.role}
              </figcaption>
            </figure>
            {q.linksVideo && (
              <button
                type="button"
                onClick={() => setVideo(true)}
                className="inline-flex min-h-[44px] items-center gap-2.5 rounded-full border border-line2 px-[18px] font-mono text-xs tracking-[0.04em] transition-colors hover:border-paper"
              >
                <span className="text-accent">▶</span> MORE FROM {vt.company.toUpperCase()} · {vt.name.toUpperCase()} ON VIDEO · {vt.duration}
              </button>
            )}
          </>
        )}

        <div role="group" aria-label="Choose a testimonial" className="mt-2 flex flex-wrap items-center justify-center gap-2.5">
          {testimonials.map((t, i) => {
            const on = i === idx && !video;
            return (
              <button key={t.name} type="button" onClick={() => pick(i)} aria-label={`Quote ${i + 1}: ${t.name}`} aria-pressed={on} className="flex h-11 w-7 items-center justify-center">
                <span className={clsx("block h-2 rounded-full transition-all duration-300", on ? "w-7 bg-paper" : "w-2 bg-faint")} />
              </button>
            );
          })}
          <button type="button" onClick={() => setVideo(true)} aria-label={`Video: ${vt.name}, ${vt.company}`} aria-pressed={video} className="flex h-11 w-7 items-center justify-center lg:hidden">
            <span className={clsx("block text-[10px] leading-none", video ? "text-paper" : "text-faint")}>▶</span>
          </button>
        </div>
      </div>
    </section>
  );
}
