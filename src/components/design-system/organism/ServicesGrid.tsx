"use client";
import { motion } from "framer-motion";
import {
  FaRobot,
  FaCode,
  FaPaintBrush,
  FaShoppingCart,
  FaCloud,
  FaMobile,
  FaShieldAlt
} from "react-icons/fa";
import { SiBlockchaindotcom } from "react-icons/si";

const ServicesGrid = () => {
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

  const services = [
    {
      icon: <FaRobot />,
      title: "AI Solutions",
      description: "Intelligent automation & AI-powered systems",
      price: "$5,000+",
      gradient: "from-purple-500 to-violet-600",
      popular: true
    },
    {
      icon: <SiBlockchaindotcom />,
      title: "Blockchain & Web3",
      description: "Smart contracts & decentralized applications",
      price: "$10,000+",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: <FaCode />,
      title: "Web Development",
      description: "Custom websites & web applications",
      price: "$2,500+",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <FaPaintBrush />,
      title: "UI/UX Design",
      description: "User-centered design that converts",
      price: "$1,800+",
      gradient: "from-pink-500 to-rose-500"
    },
    {
      icon: <FaMobile />,
      title: "Mobile Apps",
      description: "iOS & Android applications",
      price: "$8,000+",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: <FaShoppingCart />,
      title: "E-commerce",
      description: "Complete online store solutions",
      price: "$4,500+",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      icon: <FaCloud />,
      title: "Cloud & DevOps",
      description: "Scalable cloud infrastructure",
      price: "$3,000+",
      gradient: "from-teal-500 to-cyan-500"
    },
    {
      icon: <FaShieldAlt />,
      title: "Cybersecurity",
      description: "Security audits & implementation",
      price: "$4,000+",
      gradient: "from-red-500 to-pink-500"
    }
  ];

  return (
    <motion.section
      id="services-grid"
      className="py-16 px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="container mx-auto">
        <motion.h2
          variants={itemVariants}
          className="text-4xl font-bold text-white text-center mb-12"
        >
          What We <span className="text-accent">Build</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className={`group relative bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-accent/50 transition-all duration-300 ${service.popular ? 'ring-2 ring-accent/30' : ''}`}
            >
              {service.popular && (
                <div className="absolute -top-3 -right-3 bg-accent text-white text-xs px-2 py-1 rounded-full font-medium">
                  Popular
                </div>
              )}

              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <span className="text-white text-xl">{service.icon}</span>
              </div>

              <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
              <p className="text-white/70 text-sm mb-4">{service.description}</p>

              <div className="absolute inset-0 bg-gradient-to-r from-accent/0 to-accent/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ServicesGrid;
