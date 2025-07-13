"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import CalendlyPopupLink from "../molecules/Calendly/CalendlyPopupLink";
import {
    FaCode,
    FaPaintBrush,
    FaServer,
    FaFacebook,
    FaRocket,
    FaShoppingCart,
    FaSearchDollar,
    FaCloud,
    FaRobot
} from "react-icons/fa";
import { SiBlockchaindotcom } from "react-icons/si";

const ServicesSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

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
        hidden: { opacity: 0, y: 30, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.5, ease: "easeOut" },
        },
    };

    const services = [

        {
            icon: <FaRobot />,
            title: "AI Technology Solutions",
            description: "Intelligent automation and AI-powered solutions to enhance business operations and user experiences.",
            features: ["OpenAI Chatbots", "Data Analytics", "Image Generation", "Process Automation"],
            gradient: "from-violet-500 to-purple-400",
            price: "Starting from $5,000"
        },
        {
            icon: <SiBlockchaindotcom />,
            title: "Blockchain & Web3",
            description: "Decentralized applications, smart contracts, and blockchain integration services.",
            features: ["Smart Contracts", "DeFi Platforms", "NFT Marketplaces", "Token Development"],
            gradient: "from-yellow-500 to-orange-400",
            price: "Starting from $10,000"
        },
        {
            icon: <FaCode />,
            title: "Website Development",
            description: "Custom websites, web applications, and progressive web apps built with cutting-edge technologies.",
            features: ["Responsive Design", "SEO Optimized", "Performance Focused", "Cross-browser Compatible"],
            gradient: "from-blue-500 to-cyan-400",
            price: "Starting from $2,500"
        },
        {
            icon: <FaPaintBrush />,
            title: "UI/UX Design",
            description: "User-centered design that converts visitors into customers with stunning visual experiences.",
            features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
            gradient: "from-purple-500 to-pink-400",
            price: "Starting from $1,800"
        },
        {
            icon: <FaServer />,
            title: "Web Hosting & Maintenance",
            description: "Reliable hosting solutions with 99.9% uptime and comprehensive maintenance support.",
            features: ["24/7 Monitoring", "SSL Certificates", "Daily Backups", "Security Updates"],
            gradient: "from-green-500 to-emerald-400",
            price: "Starting from $200/month"
        },
        {
            icon: <FaShoppingCart />,
            title: "E-commerce Solutions",
            description: "Complete online store development with payment integration and inventory management.",
            features: ["Payment Gateway", "Inventory Management", "Order Tracking", "Multi-vendor Support"],
            gradient: "from-indigo-500 to-purple-400",
            price: "Starting from $4,500"
        },
        {
            icon: <FaFacebook />,
            title: "Digital Marketing",
            description: "Facebook, Instagram, and Google Ads management to grow your business online.",
            features: ["Social Media Ads", "Google Ads", "Content Strategy", "Analytics & Reporting"],
            gradient: "from-pink-500 to-rose-400",
            price: "Starting from $800/month"
        },
        {
            icon: <FaSearchDollar />,
            title: "SEO & Performance",
            description: "Search engine optimization and performance enhancement for better visibility.",
            features: ["Keyword Research", "On-page SEO", "Technical SEO", "Performance Optimization"],
            gradient: "from-teal-500 to-blue-400",
            price: "Starting from $1,200/month"
        },
        {
            icon: <FaCloud />,
            title: "Cloud Solutions",
            description: "Cloud migration, deployment, and management services for scalable applications.",
            features: ["AWS/Azure/GCP", "DevOps", "Auto-scaling", "Load Balancing"],
            gradient: "from-cyan-500 to-blue-400",
            price: "Starting from $2,000"
        }
    ];

    const pricingTiers = [
        {
            name: "Startup Package",
            price: "$4,999",
            period: "one-time",
            description: "Perfect for small businesses getting started",
            features: [
                "5-page responsive website",
                "Basic SEO setup",
                "Contact form integration",
                "3 months support",
                "Mobile optimization"
            ],
            popular: false
        },
        {
            name: "Business Package",
            price: "$9,999",
            period: "one-time",
            description: "Ideal for growing businesses",
            features: [
                "Custom web application",
                "E-commerce functionality",
                "Advanced SEO",
                "6 months support",
                "Analytics integration",
                "Payment gateway",
                "Admin dashboard"
            ],
            popular: true
        },
        {
            name: "Enterprise Package",
            price: "$24,999",
            period: "one-time",
            description: "For large-scale operations",
            features: [
                "Full-stack application",
                "Custom API development",
                "Cloud deployment",
                "12 months support",
                "Security audit",
                "Performance optimization",
                "24/7 monitoring",
                "Team training"
            ],
            popular: false
        }
    ];

    return (
        <motion.section
            ref={ref}
            className="py-24 bg-gradient-to-b from-primary/95 to-dark"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
        >
            <div className="container mx-auto">
                {/* Header */}
                <motion.div
                    className="text-center mb-20"
                    variants={itemVariants}
                >
                    <motion.h2
                        className="text-5xl font-bold text-white mb-6"
                        variants={itemVariants}
                    >
                        Our <span className="text-accent">Services</span>
                    </motion.h2>
                    <motion.p
                        className="text-xl text-white/80 max-w-3xl mx-auto"
                        variants={itemVariants}
                    >
                        Comprehensive digital solutions to transform your business and drive growth
                    </motion.p>
                </motion.div>

                {/* Services Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24"
                    variants={containerVariants}
                >
                    {services.map((service) => (
                        <motion.div
                            key={service.title}
                            className="group relative"
                            variants={itemVariants}
                            whileHover={{ y: -10, scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <div className="relative bg-white/5 backdrop-blur-lg rounded-2xl p-8 h-full border border-white/10 overflow-hidden flex flex-col justify-between">
                                {/* Gradient Background */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`} />


                                {/* Icon & Content */}
                                <div className="relative z-10">
                                    <motion.div
                                        className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} mb-6 relative z-10`}
                                        whileHover={{ rotate: 360, scale: 1.1 }}
                                        transition={{ duration: 0.6 }}
                                    >
                                        <span className="text-white text-2xl">{service.icon}</span>
                                    </motion.div>
                                    <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                                    <p className="text-white/70 mb-4 leading-relaxed">{service.description}</p>

                                    {/* Features */}
                                    <ul className="space-y-2 mb-6">
                                        {service.features.map((feature) => (
                                            <li key={feature} className="text-white/60 text-sm flex items-center">
                                                <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                </div>
                                {/* Price */}
                                <div className="flex items-center justify-between">
                                    <span className="text-accent font-bold text-lg">{service.price}</span>
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

                {/* Pricing Section */}
                <motion.div
                    className="text-center mb-16"
                    variants={itemVariants}
                >
                    <h3 className="text-4xl font-bold text-white mb-6">
                        Choose Your <span className="text-accent">Package</span>
                    </h3>
                    <p className="text-xl text-white/80 max-w-2xl mx-auto">
                        Flexible pricing options designed to fit businesses of all sizes
                    </p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    variants={containerVariants}
                >
                    {pricingTiers.map((tier) => (
                        <motion.div
                            key={tier.name}
                            className={`relative group ${tier.popular ? 'scale-105' : ''}`}
                            variants={itemVariants}
                            whileHover={{ scale: tier.popular ? 1.08 : 1.03 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            {tier.popular && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-accent text-primary px-4 py-1 rounded-full text-sm font-bold z-10">
                                    Most Popular
                                </div>
                            )}

                            <div className={`relative bg-white/5 backdrop-blur-lg rounded-2xl p-8 h-full border ${tier.popular ? 'border-accent' : 'border-white/10'} overflow-hidden`}>
                                {tier.popular && (
                                    <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-accent/5" />
                                )}

                                <div className="relative z-10">
                                    <h4 className="text-2xl font-bold text-white mb-2">{tier.name}</h4>
                                    <div className="flex items-baseline mb-4">
                                        <span className="text-4xl font-bold text-accent">{tier.price}</span>
                                        <span className="text-white/60 ml-2">/{tier.period}</span>
                                    </div>
                                    <p className="text-white/70 mb-6">{tier.description}</p>

                                    <ul className="space-y-3 mb-8">
                                        {tier.features.map((feature) => (
                                            <li key={feature} className="text-white/80 flex items-start">
                                                <FaRocket className="text-accent text-sm mt-1 mr-3 flex-shrink-0" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* CTA Section */}
                <motion.div
                    className="text-center mt-20"
                    variants={itemVariants}
                >
                    <div className="bg-gradient-to-r from-accent/20 to-accent/10 backdrop-blur-lg rounded-3xl p-12 border border-accent/20">
                        <h4 className="text-3xl font-bold text-white mb-4">
                            Ready to Start Your Project?
                        </h4>
                        <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                            Let&apos;s discuss your requirements and create a custom solution that fits your needs perfectly.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                size="lg"
                                className="bg-accent hover:bg-accent/90 text-primary font-semibold px-8"
                            >
                                <CalendlyPopupLink />
                            </Button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default ServicesSection;
