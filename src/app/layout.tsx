import type { Metadata, Viewport } from "next";
import "@fontsource/syne/600.css";
import "@fontsource/syne/700.css";
import "@fontsource/dm-sans/400.css";
import "@fontsource/dm-sans/500.css";
import "@fontsource/dm-sans/600.css";
import "@fontsource/dm-mono/400.css";
import "@fontsource/dm-mono/500.css";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import { site } from "@/content/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Websites, web apps & AI-powered products`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `${site.name} — Websites, web apps & AI-powered products`,
    description: site.description,
    images: [{ url: "/video/mosaic-film-poster.jpg", width: 1280, height: 720, alt: "Mosaic Designs — design, engineering, intelligent technology" }],
  },
  twitter: { card: "summary_large_image", site: "@MosaicDesigns06" },
  icons: { icon: "/favicon.ico" },
};

export const viewport: Viewport = { themeColor: "#0E0E0E" };

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  url: site.url,
  email: site.email,
  description: site.description,
  sameAs: site.socials.map((s) => s.href),
  areaServed: ["GB", "US", "EU", "AE"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body id="top">
        <a href="#main" className="sr-only z-50 rounded-full bg-accent px-5 py-3 text-ink focus:not-sr-only focus:fixed focus:left-4 focus:top-4">
          Skip to content
        </a>
        <Header />
        <main id="main" className="overflow-x-clip">{children}</main>
        <Footer />
        <CustomCursor />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
