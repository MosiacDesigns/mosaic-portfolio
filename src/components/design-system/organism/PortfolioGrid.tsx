"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FaExternalLinkAlt, FaGithub, FaRocket, FaAward, FaStar, FaClock, FaUser } from "react-icons/fa";
import { TECHNOLOGIES_ICON } from "@/lib/constants";
import Image from "next/image";

const PortfolioGrid = () => {
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

    const projects = [
        {
            id: 1,
            title: "OGGames - Web3 Board Game Platform",
            category: "Web3 & Blockchain",
            description: "Revolutionary Web3 board game platform powered by Solana blockchain, featuring NFT game pieces, token rewards, and decentralized tournaments. Built with cutting-edge technology stack for seamless gaming experience.",
            image: "/assets/ogGames.png",
            technologies: ["NextJs", "NestJS", "Redis", "PostgreSQL", "Solana", "Figma", "Typescript"],
            gradient: "from-purple-500 to-pink-500",
            featured: true,
            timeline: "4 months",
            client: "OGGames",
            stats: {
                players: "25K+",
                tournaments: "500+",
                "token volume": "$2.5M+"
            },
            services: ["Web3 Development", "Smart Contracts", "Game Design", "Blockchain Integration"],
            achievements: [
                "🎮 First-ever Solana-based board game platform",
                "🏆 Winner of Web3 Gaming Innovation Award 2024",
                "💎 Featured on Solana Foundation's showcase",
                "📈 300% user growth in first 3 months"
            ]
        },
        {
            id: 2,
            title: "Transquil - Global Travel Platform",
            category: "Travel & Social",
            description: "Innovative global travel platform connecting like-minded travelers worldwide. Features AI-powered matching, real-time chat, trip planning, and social networking for the modern nomad community.",
            image: "/assets/transquil.png",
            technologies: ["NextJs", "Framer_Motion", "Photoshop", "Figma", "Typescript"],
            gradient: "from-blue-500 to-cyan-500",
            timeline: "6 months",
            client: "Transquil Global",
            stats: {
                travelers: "100K+",
                countries: "150+",
                connections: "500K+"
            },
            services: ["Full-Stack Development", "UI/UX Design", "Animation", "Global Deployment"],
            achievements: [
                "🌍 Active users in 150+ countries worldwide",
                "🤝 Facilitated 500K+ meaningful connections",
                "🏅 Featured in Forbes '50 Best Travel Apps'",
                "⭐ 4.9/5 rating with 50K+ reviews"
            ]
        },
        {
            id: 3,
            title: "Kaarigar Connect - Service Provider Platform",
            category: "Web3 & Services",
            description: "Groundbreaking Web3 platform revolutionizing the service provider industry with KARCON tokens. Connects skilled professionals with clients through blockchain-powered smart contracts and reputation system.",
            image: "/assets/kaarigar.png",
            technologies: ["NextJs", "Framer_Motion", "MUI", "Figma"],
            gradient: "from-green-500 to-emerald-500",
            timeline: "2 months",
            client: "Webllisto Tech",
            stats: {
                providers: "50K+",
                completed: "200K+",
                "token value": "$5M+"
            },
            services: ["Web3 Development", "Token Integration", "Smart Contracts", "Platform Design"],
            achievements: [
                "🔧 50K+ verified service providers onboarded",
                "💰 $5M+ in KARCON tokens distributed",
                "🚀 Fastest growing Web3 service platform",
                "🔒 Zero security incidents with 99.9% uptime"
            ]
        },
        {
            id: 4,
            title: "Designer Portfolio - Creative Showcase",
            category: "Portfolio & Design",
            description: "Stunning portfolio website showcasing world-class design work with interactive animations, smooth transitions, and immersive user experience. Features dynamic galleries and client testimonials.",
            image: "/assets/sanjayRayon.png",
            technologies: ["Framer_Motion", "Figma", "HTML", "CSS", "JavaScript"],
            gradient: "from-pink-500 to-rose-500",
            timeline: "3 months",
            client: "Independent Designer",
            stats: {
                visitors: "75K+",
                "engagement": "8.5min",
                "conversion": "25%"
            },
            services: ["Portfolio Development", "Animation Design", "Brand Identity", "SEO Optimization"],
            achievements: [
                "🎨 Awarded 'Best Portfolio Design 2024'",
                "💼 Generated 200% increase in client inquiries",
                "🌟 Featured on Awwwards and CSS Design Awards",
                "📱 Perfect mobile responsiveness score"
            ]
        }
    ];

    const categories = ["Web3 & Blockchain", "Travel & Social", "Portfolio & Design", "Service Platforms"];

    return (
        <motion.section
            id="portfolio-grid"
            className="py-20 px-4 bg-gradient-to-b from-primary to-primary/95"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
        >
            <div className="container mx-auto">
                <motion.div variants={itemVariants} className="text-center mb-16">
                    <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                        Featured <span className="text-accent">Projects</span>
                    </h2>
                    <p className="text-xl text-white/80 max-w-3xl mx-auto">
                        Explore our diverse portfolio of successful projects that showcase our expertise
                        across various technologies and industries.
                    </p>
                </motion.div>

                {/* Category Filter */}
                <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category}
                            className="px-6 py-3 bg-white/10 text-white rounded-full border border-white/20"
                        >
                            {category}
                        </button>
                    ))}
                </motion.div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            variants={itemVariants}
                            whileHover={{ y: -10, scale: 1.02 }}
                            className={`group relative bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 hover:border-accent/50 transition-all duration-500 ${project.featured ? 'ring-2 ring-accent/30' : ''}`}
                        >
                            {project.featured && (
                                <div className="absolute top-6 right-6 z-20 bg-gradient-to-r from-accent to-accent/80 text-white text-sm px-4 py-2 rounded-full font-medium shadow-lg">
                                    🏆 Featured Project
                                </div>
                            )}

                            {/* Project Image */}
                            <div className="relative h-80 overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>

                                {/* Project Category Badge */}
                                <div className="absolute top-6 left-6 bg-black/60 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
                                    {project.category}
                                </div>

                            </div>

                            {/* Project Content */}
                            <div className="p-8 flex flex-col h-full">
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                                            {project.title}
                                        </h3>
                                        <div className="flex items-center gap-4 text-white/60 text-sm mb-4">
                                            <span className="flex items-center">
                                                <FaClock className="mr-1" />
                                                {project.timeline}
                                            </span>
                                            <span className="flex items-center">
                                                <FaUser className="mr-1" />
                                                {project.client}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <p className="text-white/80 leading-relaxed mb-6">
                                    {project.description}
                                </p>

                                {/* Technologies Used */}
                                <div className="mb-6">
                                    <h4 className="text-white font-semibold mb-3">Technologies Used:</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className="flex items-center gap-2 bg-white/10 text-white px-3 py-2 rounded-lg text-sm hover:bg-accent/20 transition-colors cursor-pointer"
                                            >
                                                <span className="text-lg">{TECHNOLOGIES_ICON[tech]}</span>
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Services Provided */}
                                <div className="mb-6">
                                    <h4 className="text-white font-semibold mb-3">Services Provided:</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {project.services.map((service) => (
                                            <span key={service} className="text-xs bg-accent/20 text-accent px-3 py-1 rounded-full font-medium">
                                                {service}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Key Achievements */}
                                <div className="mb-6 flex-grow">
                                    <h4 className="text-white font-semibold mb-3">🏆 Key Achievements:</h4>
                                    <ul className="space-y-2">
                                        {project.achievements.map((achievement, index) => (
                                            <li key={index} className="text-white/80 text-sm leading-relaxed">
                                                {achievement}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Bottom Gradient */}
                            <div className={`absolute inset-0 bg-gradient-to-t from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl pointer-events-none`}></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default PortfolioGrid;
