"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const TeamSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

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
        hidden: { opacity: 0, y: 30, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.5, ease: "easeOut" },
        },
    };

    const teamMembers = [
        {
            name: "Parikshit Singh",
            role: "Lead Full-Stack Engineer",
            bio: "Visionary leader with 5+ years in tech, specializing in digital transformation and business strategy.",
            image: "/assets/parikshitsingh.jpeg",
            skills: ["Leadership", "Strategy", "Business Development"]
        },
        {
            name: "Anothny ",
            role: "Blockchain Developer",
            bio: "Blockchain specialist with expertise in Solana, Ethereum, and smart contract development.",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
            skills: ["Solana", "Smart Contracts", "Rust", "Web3"]
        },
        {
            name: "Sanjay Meena",
            role: "UI/UX Designer",
            bio: "Expert in React, Next.js, and modern web technologies with a passion for creating exceptional user experiences.",
            image: "/assets/sanjaymeena.jpeg",
            skills: ["React", "Next.js", "TypeScript", "UI/UX"]
        },
        {
            name: "Emily Watson",
            role: "AI Specialist",
            bio: "Creative designer focused on user-centered design and creating beautiful, functional interfaces.",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
            skills: ["Figma", "Photoshop", "User Research", "Prototyping"]
        },
        {
            name: "David Park",
            role: "Backend Developer",
            bio: "Full-stack developer specializing in Node.js, Python, and cloud architecture solutions.",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
            skills: ["Node.js", "Python", "AWS", "Database Design"]
        }
    ];

    const stats = [
        { number: "3+", label: "Countries Served" },
        { number: "20+", label: "Projects Delivered" },
        { number: "7+", label: "Happy Clients" },
        { number: "24/7", label: "Support Available" }
    ];

    return (
        <motion.section
            ref={ref}
            className="py-24 bg-gradient-to-b from-dark to-primary"
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
                        Meet Our <span className="text-accent">Team</span>
                    </motion.h2>
                    <motion.p
                        className="text-xl text-white/80 max-w-3xl mx-auto"
                        variants={itemVariants}
                    >
                        A diverse team of passionate professionals dedicated to delivering exceptional results
                    </motion.p>
                </motion.div>

                {/* Team Grid */}
                <motion.div
                    className="flex flex-wrap justify-center gap-8 mb-20"
                    variants={containerVariants}
                >
                    {teamMembers.map((member) => (
                        <motion.div
                            key={member.name}
                            className="group relative w-full max-w-sm md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)]"
                            variants={itemVariants}
                            whileHover={{ y: -10, scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <div className="relative bg-white/5 backdrop-blur-lg rounded-2xl p-8 h-full border border-white/10 overflow-hidden flex flex-col justify-between">
                                {/* Gradient Background */}
                                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />


                                {/* Content */}
                                {/* Profile Image */}
                                <div className="relative z-10 text-center">
                                    <motion.div
                                        className="relative w-24 h-24 mx-auto mb-6"
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <Image
                                            src={member.image}
                                            alt={member.name}
                                            fill
                                            className="rounded-full object-cover border-4 border-accent/20"
                                        />
                                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/20 to-transparent" />
                                    </motion.div>
                                    <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                                    <p className="text-accent font-medium mb-4">{member.role}</p>
                                    <p className="text-white/70 text-sm mb-6 leading-relaxed">{member.bio}</p>
                                </div>

                                {/* Skills */}
                                <div className="flex flex-wrap justify-center gap-2 mb-6">
                                    {member.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-3 py-1 bg-accent/20 text-accent text-xs rounded-full"
                                        >
                                            {skill}
                                        </span>
                                    ))}
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

                {/* Stats Section */}
                <motion.div
                    className="bg-white/5 backdrop-blur-lg rounded-3xl p-12 border border-white/10"
                    variants={itemVariants}
                    whileHover={{ scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat) => (
                            <motion.div
                                key={stat.label}
                                className="text-center"
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <motion.div
                                    className="text-4xl font-bold text-accent mb-2"
                                    initial={{ scale: 0 }}
                                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                                    transition={{ delay: 0.5, type: "spring" }}
                                >
                                    {stat.number}
                                </motion.div>
                                <div className="text-white/70 font-medium">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Join Team CTA */}
                <motion.div
                    className="text-center mt-16"
                    variants={itemVariants}
                >
                    <div className="bg-gradient-to-r from-accent/20 to-accent/10 backdrop-blur-lg rounded-3xl p-12 border border-accent/20">
                        <h4 className="text-3xl font-bold text-white mb-4">
                            Want to Join Our Team?
                        </h4>
                        <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                            We&apos;re always looking for talented individuals who share our passion for innovation and excellence.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                size="lg"
                                variant="outline"
                                className="bg-accent hover:bg-accent/90 text-primary font-semibold px-8"
                                asChild
                            >
                                <a href="mailto:mosaicdesigns06@gmail.com?subject=Resume Submission - [Your Name]&body=Hi Mosaic Designs Team,%0D%0A%0D%0AI am interested in joining your team. Please find my resume attached.%0D%0A%0D%0AName: [Your Full Name]%0D%0APosition of Interest: [Position]%0D%0AExperience: [Years of Experience]%0D%0A%0D%0AThank you for your consideration.%0D%0A%0D%0ABest regards">
                                    Send Your Resume
                                </a>
                            </Button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default TeamSection;
