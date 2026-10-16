// Client testimonials. Each client should approve the final wording attributed to them.

export type Testimonial = {
  quote: string;
  /** Short fragment shown on the faded floating cards. */
  short: string;
  name: string;
  role: string;
  /** Show the “more from Build Squad on video” button under this quote. */
  linksVideo?: boolean;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Mosaic’s work on our gaming platform was exceptional. Their expertise in Solana blockchain integration and attention to UI/UX helped us build a smooth, intuitive experience. The team understood our requirements and delivered with great attention to detail.",
    short: "Mosaic’s work on our gaming platform was exceptional…",
    name: "Amarildo Grembi",
    role: "Co-founder, Build Squad",
    linksVideo: true,
  },
  {
    quote:
      "We loved collaborating with Mosaic! Their ability to translate complex requirements into a clean and functional UI using MUI and TypeScript was remarkable.",
    short: "Complex requirements, translated into a clean and functional UI…",
    name: "Khanak Khandelwal",
    role: "Managing Director, Elevated Club",
  },
  {
    quote:
      "Mosaic delivered a scalable and efficient solution for our ecommerce platform. Their proficiency in Next.js and Shopify integration ensured seamless performance and a modern look for our site.",
    short: "A scalable and efficient solution for our ecommerce platform…",
    name: "Piyush Singh",
    role: "Founder, Webllisto",
  },
  {
    quote:
      "Working with Mosaic was a game-changer. Their skills in blockchain and frontend technologies brought our vision of a decentralized app to life. Highly recommended!",
    short: "Working with Mosaic was a game-changer…",
    name: "Shyam Visamsetty",
    role: "CEO, Navaratan Technologies",
  },
  {
    quote:
      "Working with the team was a great experience. They understood our technical requirements quickly and approached the challenges with professionalism. Their ability to combine clean implementation with practical problem-solving made the collaboration seamless.",
    short: "They understood our technical requirements quickly…",
    name: "Santosh",
    role: "Technical Lead, Virinchi Software",
  },
  {
    quote:
      "The team brought a thoughtful and solution-oriented approach to the project. From understanding our requirements to refining the implementation, they maintained a strong focus on quality, communication, and delivering a polished result.",
    short: "A thoughtful and solution-oriented approach to the project…",
    name: "Vikram Paul",
    role: "Senior Product Manager, Navaratan Technologies",
  },
  {
    quote:
      "What impressed us most was the combination of technical expertise and attention to the user experience. Mosaic understood our vision, adapted to our requirements, and helped turn complex ideas into a clean, functional product.",
    short: "Technical expertise and attention to the user experience…",
    name: "Anthony",
    role: "Technical Director, XCrow",
  },
];

export const videoTestimonial = {
  name: "Alex",
  company: "Build Squad",
  src: "/video/buildsquad-testimonial-720.mp4",
  webm: "/video/buildsquad-testimonial-720.webm",
  poster: "/video/buildsquad-poster.jpg",
  duration: "1:31",
} as const;
