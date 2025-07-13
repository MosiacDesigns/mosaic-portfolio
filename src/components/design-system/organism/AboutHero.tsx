"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FaRocket, FaGlobe, FaUsers, FaAward } from "react-icons/fa";
import CalendlyPopupLink from "../molecules/Calendly/CalendlyPopupLink";
import Link from "next/link";

const AboutHero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
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

  const stats = [
    { icon: <FaRocket />, number: "20+", label: "Projects Delivered" },
    { icon: <FaGlobe />, number: "3+", label: "Countries Served" },
    { icon: <FaUsers />, number: "7+", label: "Happy Clients" },
    { icon: <FaAward />, number: "5+", label: "Years Experience" },
  ];

  return (
    <motion.section
      className="pt-32 pb-24 bg-gradient-to-br from-primary via-primary/95 to-primary/90"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div variants={itemVariants} className="space-y-8">
            <motion.div
              className="inline-block px-4 py-2 bg-accent/20 rounded-full"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="text-accent font-medium">About Mosaic Designs</span>
            </motion.div>
            
            <motion.h1 
              className="text-5xl lg:text-6xl font-bold text-white leading-tight"
              variants={itemVariants}
            >
              Crafting Digital{" "}
              <span className="text-accent block">Excellence</span>{" "}
              Since 2019
            </motion.h1>
            
            <motion.p 
              className="text-xl text-white/80 leading-relaxed"
              variants={itemVariants}
            >
              We are a world-class team of designers, developers, and digital strategists 
              dedicated to transforming ideas into exceptional digital experiences. With 
              connections spanning across UAE, United States, and India, we deliver 24/7 
              innovation to businesses worldwide.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              variants={itemVariants}
            >
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-primary font-semibold px-8"
              >
                <CalendlyPopupLink />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10"
                asChild
              >
                <Link href="/#projects">
                  View Our Work
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Content - Stats Grid */}
          <motion.div 
            className="grid grid-cols-2 gap-6"
            variants={itemVariants}
          >
            {stats.map((stat, statIndex) => (
              <motion.div
                key={stat.label}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center"
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(255, 255, 255, 0.15)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className="text-accent text-3xl mb-3 flex justify-center"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {stat.icon}
                </motion.div>
                <motion.div
                  className="text-3xl font-bold text-white mb-2"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5 + statIndex * 0.1, type: "spring" }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-white/70 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 right-10 w-20 h-20 bg-accent/20 rounded-full"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-16 h-16 bg-white/10 rounded-full"
          animate={{
            y: [0, 20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </motion.section>
  );
};

export default AboutHero;
