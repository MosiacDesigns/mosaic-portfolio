"use client";
import { motion } from "framer-motion";
import { RiNextjsFill } from "react-icons/ri";
import { FaReact, FaNodeJs, FaVuejs, FaFigma } from "react-icons/fa";
import {
  SiSolana,
  SiNestjs,
  SiDjango,
  SiBootstrap,
  SiGraphql,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiJavascript,
  SiTypescript,
  SiAdobephotoshop,
  SiNotion,
  SiRust,
  SiShopify,
  SiWordpress,
} from "react-icons/si";
import { MdVideoSettings } from "react-icons/md";

const iconStyles = { width: "54px", height: "54px" };

const technologies = [
  { name: "React.js", icon: <FaReact style={iconStyles} /> },
  { name: "Next.js", icon: <RiNextjsFill style={iconStyles} /> },
  { name: "Vue.js", icon: <FaVuejs style={iconStyles} /> },
  { name: "Bootstrap", icon: <SiBootstrap style={iconStyles} /> },
  { name: "Solana", icon: <SiSolana style={iconStyles} /> },
  { name: "Rust", icon: <SiRust style={iconStyles} /> },
  { name: "NestJS", icon: <SiNestjs style={iconStyles} /> },
  { name: "Django", icon: <SiDjango style={iconStyles} /> },
  { name: "Node.js", icon: <FaNodeJs style={iconStyles} /> },
  { name: "TypeScript", icon: <SiTypescript style={iconStyles} /> },
  { name: "JavaScript", icon: <SiJavascript style={iconStyles} /> },
  { name: "Apollo GraphQL", icon: <SiGraphql style={iconStyles} /> },
  { name: "MongoDB", icon: <SiMongodb style={iconStyles} /> },
  { name: "MySQL", icon: <SiMysql style={iconStyles} /> },
  { name: "PostgreSQL", icon: <SiPostgresql style={iconStyles} /> },
  { name: "Figma", icon: <FaFigma style={iconStyles} /> },
  { name: "Photoshop", icon: <SiAdobephotoshop style={iconStyles} /> },
  { name: "DaVinci Resolve", icon: <MdVideoSettings style={iconStyles} /> },
  { name: "Shopify", icon: <SiShopify style={iconStyles} /> },
  { name: "WordPress", icon: <SiWordpress style={iconStyles} /> },
  { name: "Notion", icon: <SiNotion style={iconStyles} /> },
];

const TechnologiesSection = () => {
  const infiniteTechnologies = [...technologies, ...technologies];

  return (
    <section className="mt-5 py-0 md:py-24 bg-dark">
      <div className="mx-auto overflow-hidden">
        <h2 className="text-5xl text-center text-white mb-20">
          <span className="text-accent font-bold">Technologies</span> We Work On
        </h2>
        <motion.div
          className="flex gap-0 md:gap-12 items-center"
          style={{ whiteSpace: "nowrap" }}
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 15,
            ease: "easeIn",
          }}
        >
          {infiniteTechnologies.map((tech, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center"
              style={{ minWidth: "150px" }}
            >
              {tech.icon}
              <p className="mt-4 text-center text-white">{tech.name}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
