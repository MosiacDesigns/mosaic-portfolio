import { Project } from "@/components/design-system/organism/ProjectsSection";

import { RiNextjsFill } from "react-icons/ri";
import { FaReact, FaFigma, FaHtml5, FaCss3 } from "react-icons/fa";
import {
  SiSolana,
  SiNestjs,
  SiDjango,
  SiPostgresql,
  SiJavascript,
  SiTypescript,
  SiAdobephotoshop,
  SiRedis,
  SiMui,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

export const TECHNOLOGIES_ICON: { [key: string]: JSX.Element } = {
  NextJs: <RiNextjsFill />,
  NestJS: <SiNestjs />,
  Redis: <SiRedis />,
  PostgreSQL: <SiPostgresql />,
  Solana: <SiSolana />,
  Figma: <FaFigma />,
  Framer_Motion: <TbBrandFramerMotion />,
  Photoshop: <SiAdobephotoshop />,
  HTML: <FaHtml5 />,
  CSS: <FaCss3 />,
  JavaScript: <SiJavascript />,
  React: <FaReact />,
  Typescript: <SiTypescript />,
  Django: <SiDjango />,
  MUI: <SiMui />,
};

export const PROJECTS: Project[] = [
  {
    title: "OGGames - Web3 Board Game Platform",
    description: "A Web3 board game platform using solana tokens.",
    image: "/assets/ogGames.png",
    technologies: [
      "NextJs",
      "NestJS",
      "Redis",
      "PostgreSQL",
      "Solana",
      "Figma",
      "Typescript",
    ],
    timeline: "4 months",
    client: "OGGames",
  },
  {
    title: "Fortify - Web3 Stablecoin Yield Platform",
    description: "Mobile web3 app for earning yields on stablecoins.",
    image: "/assets/Fortify landing.png",
    images: [
      "/assets/Fortify landing.png",
      "/assets/Fortify Dashboard.png",
      "/assets/Fortify Txs.png",
    ],
    isMobile: true,
    technologies: ["React", "Solana", "Figma", "Typescript"],
    timeline: "1 month",
    client: "Build Squad",
  },
  {
    title: "Designer Portfolio",
    description: "A portfolio showcasing an experienced designer's work.",
    image: "/assets/sanjayRayon.png",
    technologies: ["Framer_Motion", "Figma", "HTML", "CSS", "JavaScript"],
    timeline: "3 months",
    client: "Sanjay Rayon",
  },
  {
    title: "Kaarigar Connect",
    description: "Web3 platform for service providers using KARCON tokens.",
    image: "/assets/kaarigar.png",
    technologies: ["NextJs", "Framer_Motion", "MUI", "Figma"],
    timeline: "2 months",
    client: "Webllisto Tech",
  },
];
