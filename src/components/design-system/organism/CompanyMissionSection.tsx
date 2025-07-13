"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaEye, FaBullseye, FaHeart, FaLightbulb } from "react-icons/fa";

const CompanyMissionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const values = [
    {
      icon: <FaEye />,
      title: "Our Vision",
      description: "To be the global leader in digital transformation, empowering businesses to thrive in the digital age through innovative technology solutions.",
      gradient: "from-blue-500 to-cyan-400"
    },
    {
      icon: <FaBullseye />,
      title: "Our Mission",
      description: "To deliver exceptional digital experiences that drive business growth, enhance user engagement, and create lasting value for our clients worldwide.",
      gradient: "from-purple-500 to-pink-400"
    },
    {
      icon: <FaHeart />,
      title: "Our Values",
      description: "Innovation, integrity, excellence, and client success are at the core of everything we do. We believe in building long-term partnerships based on trust and results.",
      gradient: "from-orange-500 to-red-400"
    },
    {
      icon: <FaLightbulb />,
      title: "Our Approach",
      description: "We combine cutting-edge technology with creative design thinking to solve complex business challenges and deliver solutions that exceed expectations.",
      gradient: "from-green-500 to-emerald-400"
    }
  ];

  return (
    <motion.section
      ref={ref}
      className="py-24 bg-gradient-to-b from-primary to-primary/95"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-16"
          variants={itemVariants}
        >
          <motion.h2 
            className="text-5xl font-bold text-white mb-6"
            variants={itemVariants}
          >
            Our <span className="text-accent">Foundation</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-white/80 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Built on a foundation of innovation, excellence, and unwavering commitment to client success
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
        >
          {values.map((value) => (
            <motion.div
              key={value.title}
              className="group relative"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="relative bg-white/5 backdrop-blur-lg rounded-2xl p-8 h-full border border-white/10 overflow-hidden">
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Icon */}
                <motion.div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${value.gradient} mb-6 relative z-10`}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="text-white text-2xl">{value.icon}</span>
                </motion.div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-white/70 leading-relaxed">{value.description}</p>
                </div>

                {/* Hover Effect */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-accent/60"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{ originX: 0 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Company Story Section */}
        <motion.div 
          className="mt-24 text-center"
          variants={itemVariants}
        >
          <motion.div
            className="bg-white/5 backdrop-blur-lg rounded-3xl p-12 border border-white/10"
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-3xl font-bold text-white mb-6">Our Story</h3>
            <p className="text-xl text-white/80 leading-relaxed max-w-4xl mx-auto">
              Founded in 2019, Mosaic Designs began as a vision to bridge the gap between 
              innovative technology and exceptional user experiences. What started as a small 
              team of passionate developers and designers has grown into a global powerhouse, 
              serving clients across 3+ countries and delivering solutions that drive real 
              business impact. Our journey is marked by continuous learning, adaptation, and 
              an unwavering commitment to excellence.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CompanyMissionSection;
