"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import CalendlyPopupLink from "@/components/design-system/molecules/Calendly/CalendlyPopupLink";

const ServicesHero = () => {
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

  return (
    <motion.section
      className="pt-10 pb-16 px-4"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container mx-auto text-center">
        <motion.div
          variants={itemVariants}
          className="inline-block px-4 py-2 bg-accent/20 rounded-full mb-6"
        >
          <span className="text-accent font-medium text-sm">🚀 Our Services</span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-6xl md:text-8xl font-bold text-white mb-6"
        >
          Digital Solutions
          <span className="text-accent block">That Scale</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl text-white/80 max-w-2xl mx-auto mb-8"
        >
          From AI automation to custom development, we deliver technology solutions
          that transform businesses and drive measurable growth.
        </motion.p>

        <motion.div variants={itemVariants} className="flex gap-4 justify-center">
          <Button className="bg-accent hover:bg-accent/90 text-white px-8 py-3">
            <CalendlyPopupLink />
          </Button>
          <Button
            variant="outline"
            className="border-white/30 text-white hover:bg-white/10 px-8 py-3"
            onClick={() => document.getElementById('services-grid')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore Services
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ServicesHero;
