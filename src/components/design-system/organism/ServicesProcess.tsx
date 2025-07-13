"use client";
import { motion } from "framer-motion";

const ServicesProcess = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const processSteps = [
    { step: "01", title: "Discover", desc: "Understand your goals" },
    { step: "02", title: "Design", desc: "Create the blueprint" },
    { step: "03", title: "Develop", desc: "Build with precision" },
    { step: "04", title: "Deploy", desc: "Launch & support" }
  ];

  return (
    <motion.section
      className="py-16 px-4 bg-white/5"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="container mx-auto text-center">
        <motion.h2
          variants={itemVariants}
          className="text-4xl font-bold text-white mb-12"
        >
          How We <span className="text-accent">Work</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {processSteps.map((item) => (
            <motion.div
              key={item.step}
              variants={itemVariants}
              className="relative"
            >
              <div className="text-accent text-4xl font-bold mb-2">{item.step}</div>
              <h4 className="text-white text-xl font-bold mb-2">{item.title}</h4>
              <p className="text-white/70">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ServicesProcess;
