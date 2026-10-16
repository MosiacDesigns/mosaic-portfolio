import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";
import { Greeting } from "@/components/ui/Bits";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Tell us what you’re building. Your message goes straight to the team who’ll work on it — we work across UK and US time zones.",
};

const next = [
  { t: "We reply personally", d: `within ${site.replyTime}, from a real person on the team.` },
  { t: "Discovery call", d: "a short call about your goals, users, scope and timing." },
  { t: "Written proposal", d: "scope, fixed quote, timeline and milestones, agreed before any work begins." },
];

export default function ContactPage() {
  return (
    <>
      <section className="shell pt-[clamp(40px,6vw,96px)]">
        <Greeting>(LET’S WORK TOGETHER)</Greeting>
        <h1 className="display animate-rise text-[clamp(64px,15vw,220px)] !leading-[0.82] tracking-[-0.04em]">
          Let’s talk<span className="text-accent">.</span>
        </h1>
        <p className="mt-[clamp(28px,3vw,44px)] max-w-[680px] text-[clamp(18px,1.5vw,22px)] leading-normal">
          Tell us what you’re building. Your message goes straight to the team who’ll work on it — no sales layer in between. We reply within {site.replyTime}.
        </p>
      </section>

      <section className="shell flex flex-wrap items-start gap-x-[clamp(40px,6vw,96px)] gap-y-14 pb-20 pt-[clamp(64px,7vw,96px)]">
        {/* On phones the quick actions come first, then the form. */}
        <aside className="order-first flex min-w-0 flex-[2_1_340px] flex-col gap-[22px] lg:order-last">
          <span className="font-mono text-[13px] text-mute">
            <span className="text-accent">02</span> — OTHER WAYS
          </span>
          <a href={site.calendly} target="_blank" rel="noopener noreferrer" className="flex flex-col gap-2 rounded-3xl bg-accent p-[26px] text-ink transition hover:-translate-y-0.5">
            <span className="font-mono text-xs">BOOK A FREE DISCOVERY CALL</span>
            <span className="font-display text-[clamp(20px,1.8vw,26px)] font-bold leading-tight">Pick a time that suits you →</span>
          </a>
          <a href={`mailto:${site.email}`} className="flex flex-col gap-2 rounded-3xl border border-line bg-card p-[26px] transition hover:-translate-y-0.5">
            <span className="font-mono text-xs text-mute">EMAIL</span>
            <span className="break-all font-display text-[clamp(17px,1.8vw,24px)] font-bold">{site.email}</span>
          </a>
          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col gap-1.5 rounded-[20px] border border-line p-5">
              <span className="font-mono text-[11px] text-mute">WORKING HOURS</span>
              <span className="text-base leading-snug">{site.hours}</span>
            </div>
            <div className="flex flex-col gap-1.5 rounded-[20px] border border-line p-5">
              <span className="font-mono text-[11px] text-mute">REPLY TIME</span>
              <span className="text-base leading-snug">Within {site.replyTime}</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {site.socials.map((s) => (
              <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer" className="rounded-full border border-line px-4 py-2.5 text-sm transition-colors hover:text-accent">
                {s.label} ↗
              </a>
            ))}
          </div>
          <div className="pt-2">
            <span className="mb-3.5 block font-mono text-xs text-mute">WHAT HAPPENS NEXT</span>
            <ol>
              {next.map((n, i) => (
                <li key={n.t} className="flex gap-4 border-t border-line py-3.5">
                  <span className="w-[30px] font-display text-[22px] font-bold text-accent">{i + 1}</span>
                  <span className="text-[15px] leading-normal">
                    <b className="font-semibold">{n.t}</b> <span className="text-mute">— {n.d}</span>
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </aside>

        <div className="min-w-0 flex-[3_1_560px]">
          <ContactForm />
        </div>
      </section>
    </>
  );
}
