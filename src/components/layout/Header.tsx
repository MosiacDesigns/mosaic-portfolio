"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { nav, site } from "@/content/site";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the mobile menu on navigation and lock scroll while it is open.
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="relative z-50 border-b border-line">
      <div className="shell flex items-center justify-between gap-4 py-[18px]">
        <Link href="/" aria-label={`${site.name}, home`} className="flex items-center gap-3">
          <Image src="/images/logo-white.png" alt="" width={31} height={32} priority />
          <span className="font-display text-base font-bold tracking-[0.03em] sm:text-lg">MOSAIC DESIGNS</span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-7 text-[15px] md:flex">
          {nav.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={isActive(l.href) ? "page" : undefined}
              className={clsx("transition-colors hover:text-accent", isActive(l.href) && "border-b-[1.5px] border-accent pb-0.5 text-accent")}
            >
              {l.label}
            </Link>
          ))}
          <a
            href={site.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] items-center rounded-full bg-paper px-5 font-semibold text-ink transition hover:-translate-y-0.5"
          >
            Book a call
          </a>
        </nav>

        <button
          type="button"
          className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className={clsx("h-0.5 w-6 bg-paper transition", open && "translate-y-2 rotate-45")} />
          <span className={clsx("h-0.5 w-6 bg-paper transition", open && "opacity-0")} />
          <span className={clsx("h-0.5 w-6 bg-paper transition", open && "-translate-y-2 -rotate-45")} />
        </button>
      </div>

      {open && (
        <div id="mobile-menu" className="fixed inset-x-0 bottom-0 top-[81px] z-40 flex flex-col overflow-y-auto bg-ink px-gutter pb-7 pt-4 md:hidden">
          <nav aria-label="Mobile" className="flex flex-col">
            {nav.map((l, i) => (
              <Link
                key={l.href}
                href={l.href}
                aria-current={isActive(l.href) ? "page" : undefined}
                className={clsx("display flex items-baseline justify-between border-b border-line py-4 text-5xl", isActive(l.href) && "text-accent")}
              >
                <span>{l.label}</span>
                <span className="font-mono text-xs font-normal tracking-normal text-mute">{String(i + 1).padStart(2, "0")}</span>
              </Link>
            ))}
          </nav>
          <div className="mt-auto flex flex-col gap-3 pt-10">
            <Link href="/contact" className="rounded-full bg-accent py-5 text-center text-lg font-semibold text-ink">
              Start a project →
            </Link>
            <a href={site.calendly} target="_blank" rel="noopener noreferrer" className="rounded-full border-[1.5px] border-paper py-[18px] text-center font-semibold">
              Book a discovery call
            </a>
            <div className="flex justify-between gap-3 pt-2.5 font-mono text-[11px] text-mute">
              <a href={`mailto:${site.email}`}>{site.email.toUpperCase()}</a>
              <span>UK &amp; US HOURS</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
