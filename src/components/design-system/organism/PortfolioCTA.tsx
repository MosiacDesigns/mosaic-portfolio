"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import CalendlyPopupLink from "@/components/design-system/molecules/Calendly/CalendlyPopupLink";
import { FaRocket, FaPhone, FaEnvelope, FaCalendarAlt, FaArrowRight } from "react-icons/fa";

const PortfolioCTA = () => {
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

  const ctaOptions = [
    {
      icon: <FaCalendarAlt />,
      title: "Book Free Consultation",
      description: "30-min strategy session to discuss your project",
      action: "Schedule Now",
      primary: true
    },
    {
      icon: <FaEnvelope />,
      title: "Get Custom Quote",
      description: "Detailed proposal tailored to your needs",
      action: "Request Quote",
      primary: false
    },
    {
      icon: <FaPhone />,
      title: "Speak with Expert",
      description: "Direct call with our technical team",
      action: "Call Now",
      primary: false
    }
  ];

  return (
    <motion.section
      className="py-20 px-4 bg-gradient-to-r from-accent/10 via-accent/5 to-accent/10 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-accent/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Main CTA */}
        <motion.div 
          variants={itemVariants}
          className="text-center mb-16 bg-gradient-to-r from-accent/20 to-accent/10 rounded-3xl p-12 border border-accent/20 backdrop-blur-sm"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Ready to Build Your{" "}
            <span className="text-accent bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">
              Digital Empire?
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto mb-8 leading-relaxed">
            Join 500+ successful businesses that trusted us to transform their digital presence. 
            Let&apos;s create something extraordinary together and dominate your market.
          </p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center mb-8"
            variants={itemVariants}
          >
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent/70 text-white px-12 py-4 text-lg font-semibold shadow-2xl shadow-accent/25 transform hover:scale-105 transition-all duration-300"
            >
              <CalendlyPopupLink />
              <FaRocket className="ml-3 text-xl" />
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-8 text-white/60 text-sm">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
              Free Consultation
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
              24/7 Support
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
              Money-Back Guarantee
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
              Fast Delivery
            </div>
          </motion.div>
        </motion.div>


        {/* Bottom Section */}
        <motion.div variants={itemVariants} className="text-center mt-16">
          <p className="text-white/60 text-lg mb-4">
            Trusted by startups to companies worldwide
          </p>
        </motion.div>
      </div>

      {/* Animated floating elements */}
      <motion.div
        className="absolute top-20 right-20 w-20 h-20 bg-accent/20 rounded-full"
        animate={{
          y: [0, -15, 0],
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
        className="absolute bottom-20 left-20 w-16 h-16 bg-white/10 rounded-full"
        animate={{
          y: [0, 15, 0],
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

export default PortfolioCTA;
