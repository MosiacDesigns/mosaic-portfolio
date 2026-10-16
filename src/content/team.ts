// The team. `bioPlaceholder: true` hides the bio in production until real copy is added.

export type TeamMember = {
  name: string;
  role: string;
  area: "Design" | "Engineering" | "AI" | "Operations";
  years: string;
  photo: string;
  bio: string;
  bioPlaceholder?: boolean;
  skills: string[];
};

export const team: TeamMember[] = [
  {
    name: "Sanjay Meena",
    role: "Senior Product Designer",
    area: "Design",
    years: "7+",
    photo: "/images/team/sanjay.jpg",
    bio: "Leads product and interface design, from research and flows to the design systems our engineers build from.",
    bioPlaceholder: true,
    skills: ["Product design", "UI/UX", "Design systems"],
  },
  {
    name: "Parikshit Singh",
    role: "Lead Software Engineer",
    area: "Engineering",
    years: "5+",
    photo: "/images/team/parikshit.jpg",
    bio: "Leads engineering across front end, back end and Web3 — React, Next.js, Node.js, NestJS and Solana.",
    bioPlaceholder: true,
    skills: ["Full-stack", "Next.js", "Solana"],
  },
  {
    name: "Sathwik Gottipati",
    role: "Lead AI Engineer",
    area: "AI",
    years: "6+",
    photo: "/images/team/sathwik.jpg",
    bio: "Designs and ships the AI features — assistants, voice and data workflows — and makes sure they hold up in production.",
    bioPlaceholder: true,
    skills: ["LLMs", "Voice AI", "Automation"],
  },
  {
    name: "Mansha Singh",
    role: "Co-founder, Business Operations",
    area: "Operations",
    years: "10+",
    photo: "/images/team/mansha.jpg",
    bio: "Runs operations, proposals and billing, keeping every project on scope, on schedule and clearly communicated.",
    bioPlaceholder: true,
    skills: ["Operations", "Delivery", "Finance"],
  },
];
