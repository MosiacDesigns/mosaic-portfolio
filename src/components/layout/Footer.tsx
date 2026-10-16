import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/Button";
import { services } from "@/content/services";
import { site } from "@/content/site";

export default function Footer() {
  const linkCls = "transition-colors hover:text-accent";
  const cols = [
    {
      h: "SERVICES",
      links: [...services.map((s) => ({ label: s.title, href: `/services#${s.id}` })), { label: "For agencies", href: "/services#agencies" }],
    },
    {
      h: "STUDIO",
      links: [
        { label: "Work", href: "/work" },
        { label: "About", href: "/about" },
        { label: "How we work", href: "/services#process" },
        { label: "Pricing", href: "/services#pricing" },
        { label: "Contact", href: "/contact" },
      ],
    },
  ];
  return (
    <footer className="overflow-hidden border-t border-line">
      <div className="shell pt-14">
        <div className="flex flex-wrap items-end justify-between gap-6 border-b border-line pb-12">
          <div className="flex min-w-0 flex-col gap-2.5">
            <span className="font-mono text-xs text-mute">HAVE A PROJECT IN MIND?</span>
            <a href={`mailto:${site.email}`} className="display break-all text-[clamp(26px,4vw,56px)] !leading-[0.95] transition-colors hover:text-accent">
              {site.email}
            </a>
          </div>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href="/contact" size="md">
              Start a project →
            </ButtonLink>
            <ButtonLink href={site.calendly} size="md" variant="outline">
              Book a discovery call
            </ButtonLink>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 pt-12 text-[15px] md:grid-cols-[repeat(auto-fit,minmax(190px,1fr))]">
          <div className="col-span-2 flex flex-col gap-3.5 md:col-span-1">
            <Image src="/images/logo-white.png" alt={site.name} width={39} height={40} />
            <span className="max-w-[240px] leading-normal text-mute">{site.tagline}</span>
            <span className="font-mono text-xs text-mute">WORKING ACROSS UK &amp; US HOURS</span>
          </div>
          {cols.map((c) => (
            <div key={c.h} className="flex flex-col gap-2.5">
              <span className="mb-1 font-mono text-xs text-mute">{c.h}</span>
              {c.links.map((l) => (
                <Link key={l.href} href={l.href} className={linkCls}>
                  {l.label}
                </Link>
              ))}
            </div>
          ))}
          <div className="flex flex-col gap-2.5">
            <span className="mb-1 font-mono text-xs text-mute">FIND US AT</span>
            {site.socials.map((s) => (
              <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer" className={linkCls}>
                {s.label} ↗
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap justify-between gap-3 pt-10 text-[13px] text-mute">
          <span>
            © {new Date().getFullYear()} {site.name}
          </span>
          <span className="flex gap-5">
            <Link href="/privacy" className={linkCls}>
              Privacy
            </Link>
            <a href="#top" className={linkCls}>
              Back to top ↑
            </a>
          </span>
          <span>Thanks for scrolling ✦</span>
        </div>
      </div>
      <div aria-hidden className="-mb-[2vw] whitespace-nowrap pt-8 text-center font-display text-[20vw] font-bold leading-[0.8] tracking-[-0.04em] text-line">
        MOSAIC
      </div>
    </footer>
  );
}
