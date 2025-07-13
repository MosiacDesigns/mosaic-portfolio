"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import CalendlyPopupLink from "@/components/design-system/molecules/Calendly/CalendlyPopupLink";
import { FaRocket, FaArrowRight } from "react-icons/fa";

const ServicesCTA = () => {
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
      className="py-16 px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="container mx-auto text-center">
        <motion.div
          variants={itemVariants}
          className="bg-gradient-to-r from-accent/20 to-accent/10 rounded-3xl p-12 border border-accent/20"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Let&apos;s turn your vision into reality. Book a free consultation to discuss your project.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-accent hover:bg-accent/90 text-white px-8 py-4 text-lg">
              <CalendlyPopupLink />
              <FaRocket className="ml-2" />
            </Button>
            <Button
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg"
            >
              View Portfolio
              <FaArrowRight className="ml-2" />
            </Button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ServicesCTA;
