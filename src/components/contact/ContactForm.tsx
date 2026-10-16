"use client";

import { useRef, useState, type FormEvent } from "react";
import clsx from "clsx";
import { site } from "@/content/site";
import {
  budgetOptions,
  serviceOptions,
  timelineOptions,
  validateEnquiry,
  type Enquiry,
  type EnquiryErrors,
} from "@/lib/enquiry";

type Status = "idle" | "sending" | "success" | "error";
const empty: Enquiry = { name: "", email: "", company: "", service: "", message: "", budget: "", timeline: "", website: "" };

const fieldCls =
  "w-full rounded-none border-0 border-b-[1.5px] bg-transparent py-3.5 text-[17px] text-paper outline-none transition-colors placeholder:text-faint focus:border-accent focus-visible:outline-none";

export default function ContactForm() {
  const [v, setV] = useState<Enquiry>(empty);
  const [errors, setErrors] = useState<EnquiryErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const firstName = useRef("");

  const set = (k: keyof Enquiry) => (e: { target: { value: string } }) => setV((s) => ({ ...s, [k]: e.target.value }));

  async function submit(e: FormEvent) {
    e.preventDefault();
    const errs = validateEnquiry(v);
    setErrors(errs);
    if (Object.keys(errs).length) {
      document.getElementById(`f-${Object.keys(errs)[0]}`)?.focus();
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(v),
      });
      if (!res.ok) throw new Error(String(res.status));
      firstName.current = v.name.trim().split(" ")[0];
      setStatus("success");
      setV(empty);
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="flex animate-fade-up flex-col gap-5 rounded-[28px] border border-line bg-card p-[clamp(28px,4vw,56px)]">
        <span aria-hidden className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-accent text-3xl text-ink">
          ✓
        </span>
        <h2 className="display text-[clamp(36px,4vw,60px)] !leading-[0.95]">
          Thanks{firstName.current ? `, ${firstName.current}` : ""}
          <span className="text-accent">.</span>
        </h2>
        <p className="max-w-[560px] text-lg leading-relaxed">Your enquiry has arrived. A member of the team will reply personally within {site.replyTime}, from {site.email}.</p>
        <div className="mt-1.5 flex flex-wrap gap-3.5">
          <a href={site.calendly} target="_blank" rel="noopener noreferrer" className="rounded-full bg-paper px-6 py-4 font-semibold text-ink">
            Book a call while you wait
          </a>
          <button type="button" onClick={() => setStatus("idle")} className="rounded-full border-[1.5px] border-line2 px-6 py-4 font-medium">
            Send another
          </button>
        </div>
      </div>
    );
  }

  const err = (k: keyof EnquiryErrors) =>
    errors[k] ? (
      <span id={`e-${k}`} className="text-[13px] text-accent-soft">
        {errors[k]}
      </span>
    ) : null;
  const border = (k: keyof EnquiryErrors) => (errors[k] ? "border-accent" : "border-line2");
  const aria = (k: keyof EnquiryErrors) => (errors[k] ? { "aria-invalid": true, "aria-describedby": `e-${k}` } : {});

  return (
    <form onSubmit={submit} noValidate className="flex flex-col gap-[30px]">
      <div className="flex flex-wrap justify-between gap-2 font-mono text-[13px] text-mute">
        <span>
          <span className="text-accent">01</span> — PROJECT ENQUIRY
        </span>
        <span>* required</span>
      </div>

      {Object.keys(errors).length > 0 && (
        <p role="alert" className="rounded-[14px] border border-accent bg-accent/10 px-[18px] py-3.5 text-[15px]">
          Please fill in the highlighted fields.
        </p>
      )}
      {status === "error" && (
        <p role="alert" className="rounded-[14px] border border-accent bg-accent/10 px-[18px] py-3.5 text-[15px]">
          Something went wrong sending your message. Please email us at{" "}
          <a className="underline" href={`mailto:${site.email}`}>
            {site.email}
          </a>{" "}
          instead.
        </p>
      )}

      {/* Honeypot: hidden from people and screen readers */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" value={v.website} onChange={set("website")} />

      <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-x-8 gap-y-[30px]">
        <label className="flex flex-col gap-1">
          <span className="font-mono text-xs text-mute">YOUR NAME *</span>
          <input id="f-name" className={clsx(fieldCls, border("name"))} autoComplete="name" placeholder="Jane Doe" value={v.name} onChange={set("name")} {...aria("name")} />
          {err("name")}
        </label>
        <label className="flex flex-col gap-1">
          <span className="font-mono text-xs text-mute">WORK EMAIL *</span>
          <input id="f-email" type="email" className={clsx(fieldCls, border("email"))} autoComplete="email" placeholder="jane@company.com" value={v.email} onChange={set("email")} {...aria("email")} />
          {err("email")}
        </label>
        <label className="flex flex-col gap-1">
          <span className="font-mono text-xs text-mute">COMPANY OR WEBSITE</span>
          <input className={clsx(fieldCls, "border-line2")} autoComplete="organization" placeholder="company.com" value={v.company} onChange={set("company")} />
        </label>
        <label className="flex flex-col gap-1">
          <span className="font-mono text-xs text-mute">WHAT DO YOU NEED? *</span>
          <select id="f-service" className={clsx(fieldCls, border("service"), "cursor-pointer [&>option]:bg-card")} value={v.service} onChange={set("service")} {...aria("service")}>
            <option value="">Choose one…</option>
            {serviceOptions.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
          {err("service")}
        </label>
      </div>

      <label className="flex flex-col gap-1">
        <span className="font-mono text-xs text-mute">ABOUT THE PROJECT *</span>
        <textarea
          id="f-message"
          rows={4}
          className={clsx(fieldCls, border("message"), "min-h-[120px] resize-y leading-normal")}
          placeholder="What are you building, who is it for, and what do you need help with?"
          value={v.message}
          onChange={set("message")}
          {...aria("message")}
        />
        {err("message")}
      </label>

      <Pills legend="BUDGET (OPTIONAL)" options={budgetOptions} value={v.budget} onChange={(budget) => setV((s) => ({ ...s, budget }))} />
      <Pills legend="TIMELINE (OPTIONAL)" options={timelineOptions} value={v.timeline} onChange={(timeline) => setV((s) => ({ ...s, timeline }))} />

      <div className="flex flex-wrap items-center gap-x-7 gap-y-[18px] pt-2">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center gap-3 rounded-full bg-accent px-[34px] py-[22px] text-lg font-semibold text-ink transition hover:-translate-y-0.5 disabled:cursor-wait disabled:opacity-70"
        >
          {status === "sending" && <span aria-hidden className="h-4 w-4 animate-spin rounded-full border-2 border-ink border-t-transparent" />}
          {status === "sending" ? "Sending…" : "Send enquiry →"}
        </button>
        <span className="max-w-[360px] text-sm leading-normal text-mute">
          We only use your details to reply. Prefer email?{" "}
          <a className="text-paper hover:text-accent" href={`mailto:${site.email}`}>
            {site.email}
          </a>
        </span>
      </div>
    </form>
  );
}

function Pills({ legend, options, value, onChange }: { legend: string; options: readonly string[]; value: string; onChange: (v: string) => void }) {
  return (
    <fieldset className="flex flex-col gap-3">
      <legend className="mb-3 font-mono text-xs text-mute">{legend}</legend>
      <div className="flex flex-wrap gap-2">
        {options.map((o) => {
          const on = o === value;
          return (
            <button
              key={o}
              type="button"
              aria-pressed={on}
              onClick={() => onChange(on ? "" : o)}
              className={clsx("min-h-[44px] rounded-full border px-4 text-sm transition-colors", on ? "border-paper bg-paper text-ink" : "border-line2 hover:border-paper")}
            >
              {o}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}
