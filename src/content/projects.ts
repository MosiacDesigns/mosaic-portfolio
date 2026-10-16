// Portfolio. Every project has a story page at /work/<slug>.
// Blocks marked `placeholder: true` are sample copy: they show with a dashed outline in development
// and are hidden in production until real content replaces them.

export type Tag = "Products" | "Websites" | "AI" | "Web3";
export type Provenance = "Client" | "Own product" | "Pitch build" | "In-house";

export type Visual =
  | { kind: "image"; src: string; alt: string; width: number; height: number }
  | { kind: "phones"; screens: { src: string; alt: string }[] };

type Block = { text: string; placeholder?: boolean };

export type Story = {
  oneLiner: string;
  accent: string;
  overview: { label: string; value: string }[];
  business: Block;
  statement: Block;
  approach: Block;
  features?: { title: string; text: string }[];
  value: { items: { k: string; d: string }[]; placeholder?: boolean };
  technical: { notes: { title: string; text: string }[]; placeholder?: boolean };
  screens?: { n: string; title: string; text: string; src: string; alt: string }[];
  quote?: { quote: string; name: string; role: string };
  servicesLink: { label: string; href: string };
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  tags: Tag[];
  provenance: Provenance;
  chip: string; // label on the image, e.g. "CLIENT · LIVE"
  summary: string;
  meta: { label: string; value: string }[]; // Work list. Leave out anything unknown — never show “—”.
  cardMeta: string; // one-line meta on homepage cards
  stack: string[];
  mat: string; // background colour of the image panel
  visual: Visual;
  live?: { href: string; label: string };
  story: Story;
  next: string;
};

const img = (src: string, alt: string, width = 1600, height = 900): Visual => ({ kind: "image", src, alt, width, height });

const fortifyScreens = [
  { src: "/images/fortify-1.webp", alt: "Fortify welcome screen: deposit, auto-yield and real-time tracking" },
  { src: "/images/fortify-2.webp", alt: "Fortify dashboard showing USDC and USDC+ balances" },
  { src: "/images/fortify-3.webp", alt: "Fortify recent activity with conversions via Reflect Protocol" },
];

const sampleValue = (what: string) => ({
  placeholder: true,
  items: [
    { k: "[ ]", d: `[Outcome 1 — ${what}]` },
    { k: "[ ]", d: "[Outcome 2 — a result, metric or piece of client feedback]" },
    { k: "[ ]", d: "[Outcome 3 — what the client could do afterwards that they couldn’t before]" },
  ],
});

export const projects: Project[] = [
  {
    slug: "traders-mirror",
    title: "Trader’s Mirror",
    category: "AI product",
    tags: ["Products", "AI"],
    provenance: "Own product",
    chip: "OUR OWN PRODUCT",
    summary:
      "A voice-first trading journal. Traders talk through a trade; our AI assistant, Mira, extracts the details, scores seven behaviour KPIs and tracks rules across projects and challenges.",
    meta: [
      { label: "Role", value: "Product design, full-stack & AI" },
      { label: "Status", value: "Private beta" },
    ],
    cardMeta: "AI PRODUCT · PRIVATE BETA",
    stack: ["Speech-to-text", "LLMs", "Full-stack"],
    mat: "#24201B",
    visual: img("/images/traders-mirror-film.jpg", "Trader’s Mirror landing page: Talk it out. Mira hears it.", 1280, 730),
    live: { href: "https://traders-mirror.mosaicdesigns.tech", label: "Visit the beta" },
    next: "oggames",
    story: {
      oneLiner: "The trading journal that listens.",
      accent: "#C8A46E",
      overview: [
        { label: "Client", value: "Our own product" },
        { label: "Sector", value: "Fintech · Trading" },
        { label: "Status", value: "Private beta" },
        { label: "Our role", value: "Product design, full-stack & AI" },
        { label: "Platform", value: "Web app" },
        { label: "Stack", value: "Speech-to-text · LLMs · Full-stack" },
      ],
      business: { text: "[Who Trader’s Mirror is for, and why traders struggle to keep an honest journal.]", placeholder: true },
      statement: { text: "[How might we … — the one-line challenge the product answers.]", placeholder: true },
      approach: {
        text: "Traders talk through a trade the moment it closes. Mira, the AI assistant, extracts the details, scores seven behaviour KPIs and tracks rules across projects and challenges — no forms, no advice, just an honest mirror.",
      },
      value: sampleValue("e.g. beta users onboarded, time saved per journal entry"),
      technical: {
        placeholder: true,
        notes: [
          { title: "[Voice capture]", text: "[how audio is captured and transcribed]" },
          { title: "[Extraction & scoring]", text: "[how the LLM structures a trade and scores behaviour]" },
        ],
      },
      servicesLink: { label: "See AI services", href: "/services#ai" },
    },
  },
  {
    slug: "oggames",
    title: "OGGames",
    category: "Web3 platform",
    tags: ["Products", "Web3"],
    provenance: "Client",
    chip: "CLIENT",
    summary: "A Solana board-game platform with on-chain game pieces, token rewards and tournaments — designed and built end to end.",
    meta: [
      { label: "Client", value: "OGGames" },
      { label: "Timeline", value: "4 months" },
    ],
    cardMeta: "WEB3 PLATFORM · 4 MONTHS",
    stack: ["Next.js", "NestJS", "Redis", "PostgreSQL", "Solana", "Figma"],
    mat: "#1E1D1B",
    visual: img("/images/oggames.jpg", "OG Games: chess landing page"),
    next: "virinchi",
    story: {
      oneLiner: "Classic board games, rebuilt for Solana.",
      accent: "#FF5B2E",
      overview: [
        { label: "Client", value: "OGGames" },
        { label: "Sector", value: "Gaming · Web3" },
        { label: "Timeline", value: "4 months" },
        { label: "Our role", value: "Product design, full-stack & Web3" },
        { label: "Platform", value: "Web" },
        { label: "Stack", value: "Next.js · NestJS · Redis · PostgreSQL · Solana" },
      ],
      business: { text: "[Who OGGames are and what problem they brought to us.]", placeholder: true },
      statement: { text: "[The one-line challenge.]", placeholder: true },
      approach: { text: "A Solana board-game platform with on-chain game pieces, token rewards and tournaments, designed in Figma and built on Next.js, NestJS, Redis and PostgreSQL." },
      value: sampleValue("e.g. launch, players, tournaments run"),
      technical: {
        placeholder: true,
        notes: [
          { title: "[On-chain game pieces]", text: "[how pieces and rewards live on Solana]" },
          { title: "[Real-time play]", text: "[how Redis and NestJS keep games in sync]" },
        ],
      },
      servicesLink: { label: "See Web3 services", href: "/services#web3" },
    },
  },
  {
    slug: "virinchi",
    title: "Virinchi Software",
    category: "Company website",
    tags: ["Websites"],
    provenance: "Client",
    chip: "CLIENT · LIVE",
    summary: "Website for a full-stack product company — services, industries, technologies and case studies under an AI-forward brand.",
    meta: [
      { label: "Client", value: "Virinchi Software" },
      { label: "Role", value: "Web design & front end" },
    ],
    cardMeta: "COMPANY WEBSITE",
    stack: ["Web design", "Front end"],
    mat: "#3A0F5C",
    visual: img("/images/virinchi.jpg", "Virinchi Software homepage: We turn ideas into scalable AI powered products", 1600, 899),
    live: { href: "https://www.virinchisoftware.com", label: "Visit live site" },
    next: "kaarigar-connect",
    story: {
      oneLiner: "From MVP to growth — a website for an AI-forward product company.",
      accent: "#E0457B",
      overview: [
        { label: "Client", value: "Virinchi Software" },
        { label: "Sector", value: "Software services" },
        { label: "Our role", value: "Web design & front end" },
        { label: "Platform", value: "Website" },
      ],
      business: { text: "[Who Virinchi are and what their old site was missing.]", placeholder: true },
      statement: { text: "[The one-line challenge.]", placeholder: true },
      approach: { text: "A website that presents services, industries, technologies and case studies under an AI-forward brand, with clear routes into each." },
      value: sampleValue("e.g. launch date, enquiries, pages shipped"),
      technical: { placeholder: true, notes: [{ title: "[Build]", text: "[framework, CMS, performance work]" }] },
      quote: {
        quote:
          "Working with the team was a great experience. They understood our technical requirements quickly and approached the challenges with professionalism. Their ability to combine clean implementation with practical problem-solving made the collaboration seamless.",
        name: "Santosh",
        role: "Technical Lead, Virinchi Software",
      },
      servicesLink: { label: "See website services", href: "/services#web" },
    },
  },
  {
    slug: "kaarigar-connect",
    title: "Kaarigar Connect",
    category: "Marketplace",
    tags: ["Products", "Web3", "Websites"],
    provenance: "Client",
    chip: "CLIENT",
    summary: "A platform connecting service professionals with clients through KARCON tokens, smart contracts and a reputation system.",
    meta: [
      { label: "Client", value: "Webllisto Tech" },
      { label: "Timeline", value: "2 months" },
    ],
    cardMeta: "MARKETPLACE · 2 MONTHS",
    stack: ["Next.js", "Framer Motion", "MUI", "Figma"],
    mat: "#2A2416",
    visual: img("/images/kaarigar.jpg", "Kaarigar Connect homepage"),
    next: "fortify",
    story: {
      oneLiner: "Skilled professionals and the clients who need them, connected on-chain.",
      accent: "#F2B705",
      overview: [
        { label: "Client", value: "Webllisto Tech" },
        { label: "Sector", value: "Marketplace · Web3" },
        { label: "Timeline", value: "2 months" },
        { label: "Our role", value: "Design & front end" },
        { label: "Stack", value: "Next.js · Framer Motion · MUI · Figma" },
      ],
      business: { text: "[Who the platform serves and the problem it solves.]", placeholder: true },
      statement: { text: "[The one-line challenge.]", placeholder: true },
      approach: { text: "A marketplace connecting service professionals with clients through KARCON tokens, smart contracts and a reputation system." },
      value: sampleValue("e.g. launch, listings, categories"),
      technical: { placeholder: true, notes: [{ title: "[Tokens & reputation]", text: "[how KARCON and the reputation system work]" }] },
      servicesLink: { label: "See product services", href: "/services#mvp" },
    },
  },
  {
    slug: "fortify",
    title: "Fortify",
    category: "Mobile web app",
    tags: ["Products", "Web3"],
    provenance: "Client",
    chip: "CLIENT",
    summary: "Earn yield on stablecoins: social login, auto-yield via Reflect Protocol and real-time balance tracking — built for Build Squad during a hackathon.",
    meta: [
      { label: "Client", value: "Build Squad" },
      { label: "Timeline", value: "1 month" },
    ],
    cardMeta: "BUILD SQUAD · MOBILE WEB APP · 1 MONTH",
    stack: ["React", "Solana", "TypeScript", "Figma"],
    mat: "#2A1F55",
    visual: { kind: "phones", screens: fortifyScreens },
    next: "designer-portfolio",
    story: {
      oneLiner: "Earning yield on stablecoins, made as simple as a banking app.",
      accent: "#8B6CF6",
      overview: [
        { label: "Client", value: "Build Squad (hackathon build)" },
        { label: "Sector", value: "Fintech · DeFi" },
        { label: "Timeline", value: "1 month" },
        { label: "Our role", value: "Product design, Web3 & front-end engineering" },
        { label: "Platform", value: "Mobile web app" },
        { label: "Stack", value: "React · Solana · TypeScript · Figma" },
      ],
      business: {
        text: "Stablecoin yield is usually buried under wallets, protocols and DeFi jargon. The goal was a mobile experience where anyone could sign in, deposit stablecoins and watch them earn — without needing to understand what happens on-chain.",
      },
      statement: { text: "How might we make earning yield on stablecoins feel as familiar as a banking app — no seed phrases, no jargon?" },
      approach: {
        text: "A familiar, app-like flow on top of Solana and Reflect Protocol. Built during a hackathon in React and TypeScript: social login instead of seed phrases, auto-yield on USDC+ via Reflect Protocol, and balances that update in real time.",
      },
      features: [
        { title: "Social login", text: "Sign in with a familiar account instead of managing a seed phrase." },
        { title: "Deposit & hold", text: "Secure storage for USDC and other stablecoins." },
        { title: "Auto-yield", text: "Convert to USDC+ via Reflect Protocol and earn passively." },
        { title: "Real-time tracking", text: "Balances and returns update as they change." },
        { title: "Quick actions", text: "Add, send, grow and convert from one row of controls." },
        { title: "Clear activity", text: "Every transfer and conversion listed, with a link to the transaction." },
      ],
      value: sampleValue("e.g. working product shipped within the hackathon timeframe"),
      technical: {
        notes: [
          { title: "Wallet-free onboarding", text: "social login in place of seed phrases, so first-time users get started in seconds." },
          { title: "Reflect Protocol integration", text: "USDC converts to yield-bearing USDC+ with no manual DeFi steps." },
          { title: "Real-time balances", text: "balances and returns update live as on-chain state changes." },
          { title: "Transparent history", text: "every transfer and conversion links to its on-chain transaction." },
        ],
      },
      screens: [
        { n: "01", title: "Welcome", text: "the three promises, then one clear call to action.", ...fortifyScreens[0] },
        { n: "02", title: "Dashboard", text: "liquid USDC and yield-earning USDC+ side by side.", ...fortifyScreens[1] },
        { n: "03", title: "Activity", text: "sends and conversions, each linked to its transaction.", ...fortifyScreens[2] },
      ],
      servicesLink: { label: "See Web3 services", href: "/services#web3" },
    },
  },
  {
    slug: "designer-portfolio",
    title: "Designer Portfolio",
    category: "Portfolio website",
    tags: ["Websites"],
    provenance: "In-house",
    chip: "IN-HOUSE",
    summary: "The portfolio of Sanjay Meena, our senior product designer — interactive animations, transitions and dynamic galleries.",
    meta: [
      { label: "For", value: "Sanjay Meena (our team)" },
      { label: "Timeline", value: "3 months" },
    ],
    cardMeta: "PORTFOLIO WEBSITE · 3 MONTHS",
    stack: ["Framer Motion", "Figma", "HTML", "CSS", "JavaScript"],
    mat: "#1E1D1B",
    visual: img("/images/designer-portfolio.jpg", "Designer portfolio homepage"),
    next: "spine",
    story: {
      oneLiner: "A portfolio that moves like the work it shows.",
      accent: "#FF5B2E",
      overview: [
        { label: "For", value: "Sanjay Meena (our team)" },
        { label: "Timeline", value: "3 months" },
        { label: "Platform", value: "Website" },
        { label: "Stack", value: "Framer Motion · Figma · HTML · CSS · JavaScript" },
      ],
      business: { text: "[The brief: what the portfolio needed to show and to whom.]", placeholder: true },
      statement: { text: "[The one-line challenge.]", placeholder: true },
      approach: { text: "A portfolio with interactive animations, transitions and dynamic galleries, designed in Figma and built with Framer Motion." },
      value: sampleValue("e.g. what the portfolio led to"),
      technical: { placeholder: true, notes: [{ title: "[Motion]", text: "[how transitions and galleries were built]" }] },
      servicesLink: { label: "See website services", href: "/services#web" },
    },
  },
  {
    slug: "spine",
    title: "Spine Creative Agency",
    category: "Agency website",
    tags: ["Websites"],
    provenance: "Pitch build",
    chip: "PITCH BUILD",
    summary:
      "A pitch build for a strategy-led creative consultancy — striped kinetic display type over an immersive, glitching video background, with sound on demand.",
    meta: [
      { label: "Built as", value: "Pitch build for a prospective client" },
      { label: "Focus", value: "Motion & front end" },
    ],
    cardMeta: "AGENCY WEBSITE · MOTION",
    stack: ["Web design", "Front end", "Motion"],
    mat: "#1E1D1B",
    visual: img("/images/spine.jpg", "Spine Creative Agency homepage with striped display lettering over a dark video background", 1600, 766),
    live: { href: "https://spine.mosaicdesigns.tech", label: "See the build" },
    next: "traders-mirror",
    story: {
      oneLiner: "Kinetic type and sound for a strategy-led creative consultancy.",
      accent: "#FF5B2E",
      overview: [
        { label: "Built as", value: "Pitch build for a prospective client" },
        { label: "Sector", value: "Creative agency" },
        { label: "Focus", value: "Motion & front end" },
        { label: "Platform", value: "Website" },
      ],
      business: { text: "[The brief: who the prospective client was and what they needed to say.]", placeholder: true },
      statement: { text: "[The one-line challenge.]", placeholder: true },
      approach: { text: "Striped kinetic display type over an immersive, glitching video background, with sound on demand." },
      value: sampleValue("e.g. what the pitch showed the client"),
      technical: { placeholder: true, notes: [{ title: "[Video & type]", text: "[how the background and kinetic type were built]" }] },
      servicesLink: { label: "See website services", href: "/services#web" },
    },
  },
];

export const tags: Tag[] = ["Products", "Websites", "AI", "Web3"];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
export const projectHref = (p: Project) => `/work/${p.slug}`;
export const homeProjects = ["oggames", "virinchi", "fortify", "spine"].map((s) => getProject(s)!).filter(Boolean);
export const featured = getProject("traders-mirror")!;
