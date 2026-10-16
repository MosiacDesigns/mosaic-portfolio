// Services, engagement models, guide prices and FAQ.

export type Service = {
  id: string;
  n: string;
  kicker: string;
  lead: string;
  title: string;
  short: string;
  description: string;
  fit: string;
  included: string[];
  related: { label: string; href: string };
  mat: string;
  visual:
    | { kind: "image"; src: string; alt: string; width: number; height: number }
    | { kind: "phones"; screens: { src: string; alt: string }[] };
};

export const services: Service[] = [
  {
    id: "web",
    n: "01",
    kicker: "Core",
    lead: "Sanjay & Parikshit",
    title: "Websites & web apps",
    short: "Marketing sites, redesigns and full web applications.",
    description:
      "Websites and web applications that explain what you do clearly, look the part, and stay fast as you grow — designed and engineered by the same team.",
    fit: "you’re launching, rebranding, or your current site no longer reflects the business you’ve become.",
    included: ["Responsive, accessible design", "SEO-ready Next.js builds", "CMS your team can edit", "Performance & analytics set-up", "UX research & wireframes", "Design systems"],
    related: { label: "Virinchi Software · Spine", href: "/work/virinchi" },
    mat: "#3A0F5C",
    visual: { kind: "image", src: "/images/virinchi.jpg", alt: "Virinchi Software website", width: 1600, height: 899 },
  },
  {
    id: "mvp",
    n: "02",
    kicker: "Products",
    lead: "Parikshit",
    title: "MVPs & custom software",
    short: "MVPs, SaaS products, dashboards and internal tools.",
    description:
      "From first version to a product people use every day — SaaS platforms, dashboards, internal tools and the APIs behind them, built around how your business actually works.",
    fit: "you have a validated idea to get in front of users, or a process that has outgrown spreadsheets.",
    included: ["MVP & SaaS builds", "Dashboards & admin tools", "APIs & third-party integrations", "Payments, e-commerce & orders"],
    related: { label: "OGGames · Kaarigar Connect", href: "/work/oggames" },
    mat: "#1E1D1B",
    visual: { kind: "image", src: "/images/oggames.jpg", alt: "OGGames platform", width: 1600, height: 900 },
  },
  {
    id: "ai",
    n: "03",
    kicker: "Applied AI",
    lead: "Sathwik",
    title: "AI features & automation",
    short: "Assistants, voice and document workflows, automation.",
    description:
      "AI placed where it saves real time — assistants, voice and document workflows, and automations built into your product or your operations, not bolted on for a demo.",
    fit: "you know which task eats your team’s week, or you want AI in your product without a research project.",
    included: ["Assistants & chatbots", "Voice & speech-to-text", "Document & data workflows", "Process automation"],
    related: { label: "Trader’s Mirror", href: "/work/traders-mirror" },
    mat: "#24201B",
    visual: { kind: "image", src: "/images/traders-mirror-film.jpg", alt: "Trader’s Mirror landing page", width: 1280, height: 730 },
  },
  {
    id: "web3",
    n: "04",
    kicker: "Specialist",
    lead: "Parikshit",
    title: "Web3 & blockchain",
    short: "Solana apps, token integrations and DeFi interfaces.",
    description:
      "Solana apps, token integrations and DeFi interfaces that ordinary users can actually use — product-grade UX on top of on-chain logic.",
    fit: "you’re building on Solana and need a team that cares as much about the interface as the contracts.",
    included: ["Solana dApps", "Token & wallet integration", "DeFi interfaces", "NFT & marketplace features"],
    related: { label: "OGGames · Fortify · Kaarigar", href: "/work/fortify" },
    mat: "#2A1F55",
    visual: {
      kind: "phones",
      screens: [
        { src: "/images/fortify-1.webp", alt: "" },
        { src: "/images/fortify-2.webp", alt: "Fortify dashboard" },
        { src: "/images/fortify-3.webp", alt: "" },
      ],
    },
  },
];

export const agencyPoints = ["White-label design & development", "Overflow capacity when you’re stretched", "Front end, full-stack & AI features", "Ongoing support after launch"];

export const engagementModels = [
  { kicker: "Most common", title: "Fixed-scope project", text: "A defined build — a website, an MVP, an AI feature — with a fixed quote, timeline and handover.", fit: "Websites, MVPs, launches" },
  { kicker: "Long-term", title: "Product partner", text: "A monthly arrangement for teams that need design and engineering on an ongoing basis after launch.", fit: "Post-launch growth, iteration" },
  { kicker: "For agencies", title: "White-label", text: "Project-based or monthly capacity, working under your brand and alongside your team.", fit: "Overflow, specialist builds" },
];

// Guide prices in USD — starting points only. Shown once, on the Services page.
export const prices = [
  { service: "Websites & web apps", price: "from $2,500" },
  { service: "UI/UX design only", price: "from $1,800" },
  { service: "MVPs & custom software", price: "scoped per project" },
  { service: "AI features & automation", price: "from $5,000" },
  { service: "Web3 & blockchain", price: "from $10,000" },
  { service: "Cloud & DevOps", price: "from $2,000" },
  { service: "Hosting & maintenance", price: "from $200 / month" },
];

export const faq = [
  {
    q: "Who will actually work on my project?",
    a: "Our own team: Sanjay leads design, Parikshit leads engineering, Sathwik leads AI work and Mansha runs operations and billing. No account managers in between, and no handing your project to people you haven’t met.",
  },
  {
    q: "How is a project priced?",
    a: "After the discovery call and requirements, you get a written proposal with a fixed quote, timeline and number of revisions. The guide prices above are typical starting points.",
  },
  {
    q: "Who owns the code and designs?",
    a: "You do. At handover everything transfers to you: source code and repository, designs, hosting and account access, and documentation, plus a walkthrough session with the team.",
  },
  {
    q: "How do payments work?",
    a: "An advance before we start the approved work, then milestone-based payments as the project progresses. We accept Wise and international bank (wire) transfer.",
  },
  { q: "Do you work with international clients?", a: "Yes. The team works mostly across UK and US time zones, so calls, check-ins and updates fit your working day." },
  { q: "Do you work with agencies?", a: "Yes. We offer white-label design and development and overflow capacity, working under your brand and alongside your team." },
  { q: "Do you offer support after launch?", a: "Yes. Hosting, maintenance and ongoing improvements are available once your project is live, from $200/month." },
  { q: "How do I start?", a: "Send an enquiry or book a discovery call. We reply personally and suggest next steps." },
];
