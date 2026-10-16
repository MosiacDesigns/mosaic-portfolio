// Global business details. Edit here — every page reads from this file.

export const site = {
  name: "Mosaic Designs",
  url: "https://mosaicdesigns.tech",
  tagline: "Design, engineering and AI for founders, product teams and agencies.",
  description:
    "Mosaic Designs is a senior team of designers and engineers building websites, web apps and AI-powered products for founders, product teams and agencies — from first call to launch.",
  email: "admin@mosaicdesigns.tech",
  calendly: "https://calendly.com/mosaicdesigns06",
  socials: [
    { label: "X / Twitter", href: "https://x.com/MosaicDesigns06" },
    { label: "Instagram", href: "https://www.instagram.com/mosaicdesigns06/" },
    // { label: "LinkedIn", href: "" }, // TODO add when the company page exists
  ],
  hours: "UK & US time zones",
  // PLACEHOLDER — set a reply time you can always keep.
  replyTime: "1 business day",
} as const;

export const nav = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

/** The five steps from the brand film. Used on Home and Services. */
export const process = [
  { n: "01", title: "Discovery call", text: "We talk through your idea, your goals and who it is for.", output: "Is this a fit?" },
  {
    n: "02",
    title: "Requirements",
    text: "Together we map out exactly what needs to be built: goals, users, core flows, integrations, tech.",
    output: "Agreed scope",
  },
  {
    n: "03",
    title: "Proposal",
    text: "Everything agreed in writing before any work begins: budget, scope, timeline, revisions, communication.",
    output: "Fixed quote",
  },
  { n: "04", title: "Design & build", text: "Designs to review, then working builds you can click through, with regular check-ins.", output: "Working product" },
  {
    n: "05",
    title: "Handover",
    text: "A proper handover, so everything is yours: code, hosting access, documentation and a walkthrough.",
    output: "Live & yours",
  },
] as const;

/** Companies that have given us a testimonial — shown under the hero. */
export const trustedBy = ["Build Squad", "Webllisto", "Elevated Club", "Navaratan Technologies", "Virinchi Software"] as const;

/** Orange “tape” band under the hero. */
export const capabilities = ["Websites", "Web apps", "MVPs", "AI features", "White-label"] as const;

export const film = {
  src: "/video/mosaic-film-720.mp4",
  poster: "/video/mosaic-film-poster.jpg",
  duration: "1:36",
  label: "Play the Mosaic Designs film, 1 minute 36 seconds",
} as const;
