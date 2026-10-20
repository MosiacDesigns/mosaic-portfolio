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
  live?: { href: string; label: string; code?: string }; // code: access code shown beside the link
  story: Story;
  next: string;
};

const img = (src: string, alt: string, width = 1600, height = 900): Visual => ({ kind: "image", src, alt, width, height });

const fortifyScreens = [
  { src: "/images/fortify-1.webp", alt: "Fortify welcome screen: deposit, auto-yield and real-time tracking" },
  { src: "/images/fortify-2.webp", alt: "Fortify dashboard showing USDC and USDC+ balances" },
  { src: "/images/fortify-3.webp", alt: "Fortify recent activity with conversions via Reflect Protocol" },
];

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
    live: { href: "https://traders-mirror.mosaicdesigns.tech", label: "Visit the beta", code: "TM-BETA-2026" },
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
      business: {
        text: "Trader’s Mirror is our own AI trading journal, built for forex, crypto and prop-firm traders who want to judge the quality of their decisions — not just their profit and loss. Most traders know they should journal, but logging every trade, the emotions behind it and the rules they broke takes time, so the habit rarely sticks. Trader’s Mirror replaces the forms with a voice note: talk through the trade and Mira turns it into structured data and a behavioural review. It is about discipline and execution, never trading signals.",
      },
      statement: { text: "How might we make honest trade reflection effortless — and turn it into measurable behavioural insight?" },
      approach: {
        text: "Traders talk through a trade the moment it closes. Mira, the AI assistant, extracts the details, scores seven behaviour KPIs and tracks rules across projects and challenges — no forms, no advice, just an honest mirror.",
      },
      value: {
        items: [
          { k: "Voice", d: "A spoken reflection after each trade replaces a long journal form." },
          { k: "7 KPIs", d: "Every trade gets seven behaviour scores, an overall execution score, strengths and areas to improve." },
          { k: "Beta", d: "Live in private beta: traders group trades by project or challenge and track discipline and rule breaks over time." },
        ],
      },
      technical: {
        notes: [
          { title: "Speech-to-text", text: "spoken reflections are transcribed before any analysis runs." },
          { title: "LLM analysis", text: "LLM workflows extract structured trade details, assess behaviour and write the review." },
          { title: "Project-level context", text: "trades, rules, violations and performance history are organised around each trading project." },
          { title: "AI cost visibility", text: "every model call is logged with its cost, and a credit system keeps usage visible." },
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
      { label: "Client", value: "Build Squad" },
      { label: "Timeline", value: "4 months" },
    ],
    cardMeta: "WEB3 PLATFORM · 4 MONTHS",
    stack: ["Next.js", "NestJS", "Redis", "PostgreSQL", "Solana", "Anchor", "Web3Auth", "Figma"],
    mat: "#1E1D1B",
    visual: img("/images/oggames.jpg", "OG Games: chess landing page"),
    next: "virinchi",
    story: {
      oneLiner: "Classic board games, rebuilt for Solana.",
      accent: "#FF5B2E",
      overview: [
        { label: "Client", value: "Build Squad" },
        { label: "Sector", value: "Gaming · Web3" },
        { label: "Timeline", value: "4 months" },
        { label: "Our role", value: "Product design, full-stack & Web3" },
        { label: "Platform", value: "Web" },
        { label: "Stack", value: "Next.js · NestJS · Redis · PostgreSQL · Solana" },
      ],
      business: {
        text: "OGGames is a Solana gaming platform we built for Build Squad, with chess at its core. Players create a game, invite an opponent, play in real time and wager tokens on the result — without wrestling with crypto onboarding first. Behind that sit matchmaking, live game state and on-chain transactions that all have to stay in step, plus the OGG token that powers participation and rewards.",
      },
      statement: { text: "How might we make competitive on-chain chess feel easy — without compromising real-time play or the integrity of every wager?" },
      approach: { text: "A Solana board-game platform with on-chain game pieces, token rewards and tournaments, designed in Figma and built on Next.js, NestJS, Redis and PostgreSQL." },
      value: {
        items: [
          { k: "4 months", d: "Designed and built the Solana board-game platform end to end." },
          { k: "~$800K", d: "Reported peak fully diluted valuation of the OGG token (August 2025 snapshot)." },
          { k: "4,300+", d: "On-chain OGG token transfers, with 98 holders (August 2025 snapshot)." },
        ],
      },
      technical: {
        notes: [
          { title: "Real-time multiplayer", text: "Next.js on the front end and NestJS behind it, with WebSockets carrying every move live." },
          { title: "On-chain wagering", text: "Solana smart contracts written in Anchor handle wagers and token transfers." },
          { title: "Wallet-less onboarding", text: "Web3Auth gives players Solana access without a seed-phrase-first sign-up." },
          { title: "Game-state services", text: "NestJS services run matchmaking, socket rooms and bet verification, with Redis and PostgreSQL holding game state." },
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
    stack: ["Web design", "Next.js", "Tailwind CSS"],
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
        { label: "Stack", value: "Next.js · Tailwind CSS" },
      ],
      business: {
        text: "Virinchi Software builds software and digital products, with AI at the centre of its offer. Their website had to cover a lot — services, industries, technologies and case studies — without reading like a list of disconnected services. We designed it and built the front end, giving prospective clients a clear route from what Virinchi can do to the work that proves it.",
      },
      statement: { text: "How might we turn a broad software offering into a clear, credible website that helps clients find the right expertise?" },
      approach: { text: "A website that presents services, industries, technologies and case studies under an AI-forward brand, with clear routes into each." },
      value: {
        items: [
          { k: "Live", d: "Published the redesigned company website at virinchisoftware.com." },
          { k: "One site", d: "Brought software development, AI solutions and digital marketing together under one company website." },
          { k: "Clear", d: "Organised services, technologies and case studies into dedicated sections for prospective clients to explore." },
        ],
      },
      technical: {
        notes: [
          { title: "Front-end implementation", text: "the approved design translated into a live, navigable website." },
          { title: "Content structure", text: "services, industries, technologies and case studies each have their own dedicated pages." },
          { title: "Next.js & Tailwind CSS", text: "server-rendered App Router pages, utility-first styling and automatically optimised images." },
        ],
      },
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
      business: {
        text: "Kaarigar Connect, built for Webllisto Tech, connects skilled service professionals with the clients who need them. The hard part is trust on both sides: clients need a way to judge who they are hiring, and professionals need their track record to win them future work. The platform answers with KARCON tokens, smart contracts and a reputation system. We handled the design and front end.",
      },
      statement: { text: "How might we help clients find trusted service professionals through a marketplace with verifiable reputation?" },
      approach: { text: "A marketplace connecting service professionals with clients through KARCON tokens, smart contracts and a reputation system." },
      value: {
        items: [
          { k: "2 months", d: "Delivered the marketplace design and front end within a two-month engagement." },
          { k: "2-sided", d: "Designed an interface that connects clients with the service professionals they need." },
          { k: "Trust", d: "Designed reputation into the core of the marketplace experience." },
        ],
      },
      technical: {
        notes: [
          { title: "Component system", text: "Next.js and MUI form the foundation of the interface." },
          { title: "Motion", text: "Framer Motion drives transitions and feedback across the marketplace." },
        ],
      },
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
      value: {
        items: [
          { k: "1 month", d: "Designed and built within the hackathon’s one-month window." },
          { k: "No seed", d: "Social login replaced seed-phrase onboarding for first-time users." },
          { k: "One view", d: "Auto-yield and real-time balances brought together in a single interface." },
        ],
      },
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
    chip: "IN-HOUSE · LIVE",
    summary: "The portfolio of Sanjay Meena, our senior product designer — interactive animations, transitions and dynamic galleries.",
    meta: [
      { label: "For", value: "Sanjay Meena (our team)" },
      { label: "Timeline", value: "3 months" },
    ],
    cardMeta: "PORTFOLIO WEBSITE · 3 MONTHS",
    stack: ["Framer", "Figma"],
    mat: "#1E1D1B",
    visual: img("/images/designer-portfolio.jpg", "Designer portfolio homepage"),
    live: { href: "https://www.sanjayrayon.com", label: "Visit the portfolio" },
    next: "spine",
    story: {
      oneLiner: "A portfolio that moves like the work it shows.",
      accent: "#FF5B2E",
      overview: [
        { label: "For", value: "Sanjay Meena (our team)" },
        { label: "Timeline", value: "3 months" },
        { label: "Platform", value: "Website" },
        { label: "Stack", value: "Framer · Figma" },
      ],
      business: {
        text: "This is the portfolio of Sanjay Meena, our senior product designer. A product designer’s portfolio has to do more than list projects: it has to show the quality of the work, make each case study easy to explore and carry a recognisable point of view. So instead of static thumbnails, the site leans on motion, transitions and dynamic galleries.",
      },
      statement: { text: "How might we turn a product designer’s portfolio into an interactive experience that demonstrates the work itself?" },
      approach: { text: "A portfolio with interactive animations, transitions and dynamic galleries, designed in Figma and built in Framer." },
      value: {
        items: [
          { k: "3 months", d: "Developed the portfolio over a three-month engagement." },
          { k: "Motion", d: "Animation and transitions make the portfolio more engaging to explore." },
          { k: "Galleries", d: "Project work presented through dynamic galleries, not just static thumbnails." },
        ],
      },
      technical: {
        notes: [
          { title: "Built in Framer", text: "designed, animated and published in Framer, so new work can go up without a code release." },
          { title: "Motion system", text: "Framer’s interactions and page transitions drive the galleries and animation." },
        ],
      },
      servicesLink: { label: "See website services", href: "/services#web" },
    },
  },
  {
    slug: "spine",
    title: "Spine Creative Agency",
    category: "Agency website",
    tags: ["Websites"],
    provenance: "Pitch build",
    chip: "PITCH BUILD · LIVE",
    summary:
      "A pitch build for a strategy-led creative consultancy — striped kinetic display type over an immersive, glitching video background, with sound on demand.",
    meta: [
      { label: "Built as", value: "Pitch build for a prospective client" },
      { label: "Focus", value: "Motion & front end" },
    ],
    cardMeta: "AGENCY WEBSITE · MOTION",
    stack: ["Web design", "Next.js", "Tailwind CSS", "Vercel"],
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
        { label: "Stack", value: "Next.js · Tailwind CSS · Vercel" },
      ],
      business: {
        text: "Spine is a pitch build we made for a prospective client: a strategy-led creative consultancy. The site needed to prove their creative identity through the experience itself, not describe it inside a conventional agency layout. Our direction pairs striped kinetic typography with an immersive, glitching video background and optional sound — a live concept showing how motion, type and atmosphere can work together as a brand.",
      },
      statement: { text: "How might we make a creative consultancy’s website feel like an expressive brand experience rather than an agency template?" },
      approach: { text: "Striped kinetic display type over an immersive, glitching video background, with sound on demand." },
      value: {
        items: [
          { k: "Live", d: "Published the creative pitch build at spine.mosaicdesigns.tech." },
          { k: "Kinetic", d: "Striped, animated typography as the central visual feature." },
          { k: "Glitch", d: "A glitching video background with optional sound demonstrates an experimental creative direction." },
        ],
      },
      technical: {
        notes: [
          { title: "Video atmosphere", text: "an immersive video background sets the tone for the whole experience." },
          { title: "Glitch effects", text: "glitching treatments reinforce the experimental creative direction." },
          { title: "User-controlled sound", text: "audio is available on demand, so visitors choose whether to turn it on." },
          { title: "Next.js on Vercel", text: "built in Next.js and Tailwind CSS, deployed on Vercel." },
        ],
      },
      servicesLink: { label: "See website services", href: "/services#web" },
    },
  },
];

export const tags: Tag[] = ["Products", "Websites", "AI", "Web3"];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
export const projectHref = (p: Project) => `/work/${p.slug}`;
export const homeProjects = ["oggames", "virinchi", "fortify", "spine"].map((s) => getProject(s)!).filter(Boolean);
export const featured = getProject("traders-mirror")!;
