import Link from "next/link";
import clsx from "clsx";
import type { ReactNode } from "react";

type Variant = "accent" | "light" | "outline";
type Size = "md" | "lg";

const variants: Record<Variant, string> = {
  accent: "bg-accent text-ink",
  light: "bg-paper text-ink",
  outline: "border-[1.5px] border-paper text-paper",
};

const sizes: Record<Size, string> = {
  md: "min-h-[44px] px-5 py-3 text-[15px]",
  lg: "px-7 py-5 text-[17px] md:px-8 md:text-lg",
};

export function ButtonLink({
  href,
  children,
  variant = "accent",
  size = "lg",
  className,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
}) {
  const cls = clsx(
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition duration-200 hover:-translate-y-0.5 hover:brightness-105",
    variants[variant],
    sizes[size],
    className,
  );
  const external = /^(https?:|mailto:)/.test(href);
  return external ? (
    <a href={href} className={cls} {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
      {children}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

/** Underlined text link used for secondary actions. */
export function TextLink({ href, children, className }: { href: string; children: ReactNode; className?: string }) {
  return (
    <Link href={href} className={clsx("border-b-[1.5px] border-paper pb-[3px] font-medium transition-colors hover:border-accent hover:text-accent", className)}>
      {children}
    </Link>
  );
}
