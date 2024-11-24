"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { PROJECTS, TECHNOLOGIES_ICON } from "@/lib/constants";

export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: Array<keyof typeof TECHNOLOGIES_ICON>;
  timeline: string;
  client: string;
}

export interface ProjectCardProps extends Project {
  index: number;
}

const ProjectsSection = () => {
  return (
    <section className="pt-24 md:pt-0 pb-24 bg-dark">
      <div className="container mx-auto">
        <h2 className="text-5xl text-center text-white mb-12">
          <span className="text-accent font-bold">Projects</span> We’ve Worked
          On
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12">
          {PROJECTS.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              index={index}
              technologies={project.technologies}
              timeline={project.timeline}
              client={project.client}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({
  title,
  description,
  image,
  index,
  technologies,
  timeline,
  client,
}: ProjectCardProps) => {
  const ref = useRef(null);

  const inView = useInView(ref);

  return (
    <motion.div
      ref={ref}
      className="p-6 rounded-[30px] shadow-md hover:shadow-xl cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
      whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
      transition={{ delay: index * 0.3, duration: 0.3 }}
    >
      <Image
        src={image}
        alt="Sanjay rayon"
        width={1000}
        height={1000}
        style={{ width: "100%" }}
      />
      <h3 className="mt-4 text-xl text-accent">{title}</h3>
      <p className="mt-2 text-white/80">{description}</p>

      {/* Displaying technologies */}
      <div className="mt-4 flex flex-wrap gap-2">
        {technologies.map((tech, idx) => (
          <span
            key={idx}
            className="text-lg bg-dark p-1 rounded-md cursor-pointer hover:scale-150 transform transition duration-300 tooltip-container "
          >
            {TECHNOLOGIES_ICON[tech] || null}
            <span className="tooltip-text">{tech}</span>
          </span>
        ))}
      </div>

      {/* Project timeline and client */}
      <p className="mt-4 text-white/60 text-sm">
        <strong>Timeline:</strong> {timeline}
      </p>
      <p className="text-white/60 text-sm">
        <strong>Client:</strong> {client}
      </p>
    </motion.div>
  );
};

export default ProjectsSection;
