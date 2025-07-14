"use client";
import { motion } from "framer-motion";
import { 
  FaCode, 
  FaPaintBrush, 
  FaServer, 
  FaDollarSign, 
  FaFacebook, 
  FaInstagram, 
  FaGoogle, 
  FaShoppingCart, 
  FaMobile, 
  FaShieldAlt,
  FaRocket,
  FaChartLine
} from "react-icons/fa";
import { SiBlockchaindotcom } from "react-icons/si";

const PortfolioServices = () => {
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
      icon: <FaCode />,
      title: "Website Development",
      description: "Custom websites and web applications built with modern technologies",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading", "CMS Integration"],
      price: "Starting from $2,500",
      gradient: "from-blue-500 to-cyan-500",
      popular: true
    },
    {
      icon: <FaServer />,
      title: "Web Hosting & Domain",
      description: "Reliable hosting solutions with 99.9% uptime guarantee",
      features: ["SSL Certificate", "Daily Backups", "24/7 Support", "CDN Integration"],
      price: "Starting from $99/month",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: <FaPaintBrush />,
      title: "UI/UX Design",
      description: "User-centered design that converts visitors into customers",
      features: ["Wireframing", "Prototyping", "User Testing", "Brand Identity"],
      price: "Starting from $1,800",
      gradient: "from-pink-500 to-rose-500"
    },
    {
      icon: <FaDollarSign />,
      title: "Cost Estimation",
      description: "Transparent pricing with detailed project breakdowns",
      features: ["Free Consultation", "Detailed Quotes", "Milestone Planning", "Budget Optimization"],
      price: "Free Consultation",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: <FaFacebook />,
      title: "Facebook Marketing",
      description: "Targeted social media campaigns that drive engagement and sales",
      features: ["Ad Creation", "Audience Targeting", "Performance Analytics", "ROI Optimization"],
      price: "Starting from $800/month",
      gradient: "from-blue-600 to-blue-800"
    },
    {
      icon: <FaInstagram />,
      title: "Instagram Marketing",
      description: "Visual storytelling that builds brand awareness and loyalty",
      features: ["Content Creation", "Story Campaigns", "Influencer Outreach", "Growth Strategy"],
      price: "Starting from $600/month",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <FaGoogle />,
      title: "Google Ads & SEO",
      description: "Search engine optimization and paid advertising for maximum visibility",
      features: ["Keyword Research", "PPC Campaigns", "Local SEO", "Analytics Reporting"],
      price: "Starting from $1,200/month",
      gradient: "from-red-500 to-yellow-500"
    },
    {
      icon: <FaShoppingCart />,
      title: "E-commerce Solutions",
      description: "Complete online store setup with payment gateway integration",
      features: ["Product Catalog", "Payment Processing", "Inventory Management", "Order Tracking"],
      price: "Starting from $4,500",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      icon: <FaMobile />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications",
      features: ["iOS & Android", "React Native", "API Integration", "App Store Deployment"],
      price: "Starting from $8,000",
      gradient: "from-teal-500 to-cyan-500"
    },
    {
      icon: <SiBlockchaindotcom />,
      title: "Blockchain Development",
      description: "Smart contracts and decentralized applications",
      features: ["Smart Contracts", "DeFi Protocols", "NFT Marketplaces", "Web3 Integration"],
      price: "Starting from $15,000",
      gradient: "from-purple-600 to-blue-600"
    },
    {
      icon: <FaShieldAlt />,
      title: "Cybersecurity",
      description: "Security audits and penetration testing services",
      features: ["Security Audits", "Vulnerability Assessment", "Compliance Consulting", "24/7 Monitoring"],
      price: "Starting from $3,000",
      gradient: "from-red-500 to-pink-500"
    },
    {
      icon: <FaChartLine />,
      title: "Digital Analytics",
      description: "Data-driven insights to optimize your digital presence",
      features: ["Performance Tracking", "Conversion Analysis", "User Behavior", "Growth Metrics"],
      price: "Starting from $500/month",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <motion.section
      className="py-20 px-4 bg-white/5"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="container mx-auto">
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our <span className="text-accent">Services</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            From concept to deployment, we offer comprehensive digital solutions 
            that drive growth and success for your business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-accent/50 transition-all duration-500 ${service.popular ? 'ring-2 ring-accent/30' : ''}`}
            >
              {service.popular && (
                <div className="absolute -top-3 -right-3 bg-accent text-white text-xs px-3 py-1 rounded-full font-medium">
                  Most Popular
                </div>
              )}

              {/* Service Icon */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <span className="text-white text-2xl">{service.icon}</span>
              </div>

              {/* Service Content */}
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              
              <p className="text-white/70 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-white/80 text-sm">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Pricing */}
              <div className="flex items-center justify-between pt-6 border-t border-white/10">
                <span className="text-accent font-bold text-lg">{service.price}</span>
                <motion.button
                  className="bg-accent/20 hover:bg-accent text-white px-4 py-2 rounded-lg transition-all duration-300 group-hover:bg-accent"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaRocket className="inline mr-2" />
                  Get Quote
                </motion.button>
              </div>

              {/* Hover Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none`}></div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div 
          variants={itemVariants}
          className="text-center mt-16 bg-gradient-to-r from-accent/20 to-accent/10 rounded-3xl p-12 border border-accent/20"
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss your project and create a custom solution that drives results.
          </p>
          <motion.button
            className="bg-accent hover:bg-accent/90 text-white px-10 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaRocket className="inline mr-2" />
            Start Your Project
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default PortfolioServices;
