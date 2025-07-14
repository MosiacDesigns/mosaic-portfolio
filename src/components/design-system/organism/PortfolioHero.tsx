"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import CalendlyPopupLink from "@/components/design-system/molecules/Calendly/CalendlyPopupLink";
import { FaRocket, FaEye, FaTrophy } from "react-icons/fa";

const PortfolioHero = () => {
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

  const stats = [
    { icon: <FaTrophy />, number: "20+", label: "Projects Completed" },
    { icon: <FaEye />, number: "150k+", label: "Onboarded Users" },
    { icon: <FaRocket />, number: "100%", label: "Client Satisfaction" },
  ];

  return (
    <motion.section
      className="pt-20 pb-16 px-4 bg-gradient-to-br from-primary via-primary/95 to-primary/90 relative overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-32 h-32 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-accent/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mx-auto">
          <motion.div
            variants={itemVariants}
            className="inline-block px-6 py-3 bg-gradient-to-r from-accent/20 to-accent/10 rounded-full mb-8 border border-accent/20"
          >
            <span className="text-accent font-medium text-sm tracking-wide">✨ Our Portfolio Showcase</span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-8 leading-tight"
          >
            Our Creative{" "}
            <span className="text-accent block bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">
              Masterpieces
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Discover our world-class digital solutions that have transformed businesses 
            across the globe. From cutting-edge web development to strategic digital marketing, 
            each project tells a story of innovation and excellence.
          </motion.p>

          <motion.div 
            variants={itemVariants} 
            className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
          >
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent/70 text-white px-10 py-4 text-lg font-semibold shadow-2xl shadow-accent/25 transform hover:scale-105 transition-all duration-300"
            >
              <CalendlyPopupLink />
              <FaRocket className="ml-2" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-10 py-4 text-lg"
              onClick={() => document.getElementById('portfolio-grid')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Projects
              <FaEye className="ml-2" />
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10"
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(255, 255, 255, 0.1)"
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
                  transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-white/70 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Animated floating elements */}
      <motion.div
        className="absolute top-32 right-16 w-24 h-24 bg-accent/20 rounded-full"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 180, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-32 left-16 w-20 h-20 bg-white/10 rounded-full"
        animate={{
          y: [0, 20, 0],
          x: [0, 10, 0],
          scale: [1, 0.9, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.section>
  );
};

export default PortfolioHero;
