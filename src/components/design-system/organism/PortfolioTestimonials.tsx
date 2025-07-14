"use client";
import { motion } from "framer-motion";
import { FaStar, FaQuoteLeft, FaLinkedin, FaTwitter } from "react-icons/fa";

const PortfolioTestimonials = () => {
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

    const testimonials = [
        {
            name: "Amarildo Grembi",
            position: "Co-founder",
            company: "Build Squad",
            rating: 5,
            text: "Mosaic's work on our gaming platform was exceptional. Their expertise in Solana blockchain integration helped us launch on time, and their attention to UI/UX made the platform incredibly user-friendly. The result? Our platform now handles over 50K active gamers daily and has processed $2M+ in transactions.",
            project: "OGGames - Web3 Gaming Platform",
            avatar: "AG",
            gradient: "from-purple-500 to-pink-500",
            results: { metric: "50K+", label: "Daily Active Users" }
        },
        {
            name: "Khanak Khandelwal",
            position: "Managing Director",
            company: "Elevated Club",
            rating: 4,
            text: "We loved collaborating with Mosaic! Their ability to translate complex requirements into a clean and functional UI using MUI and TypeScript was remarkable. The platform they built increased our member engagement by 400% and streamlined our operations completely.",
            project: "Kaarigar Connect Platform",
            avatar: "KK",
            gradient: "from-green-500 to-emerald-500",
            results: { metric: "400%", label: "Engagement Increase" }
        },
        {
            name: "Piyush Singh",
            position: "Founder",
            company: "Webllisto",
            rating: 4,
            text: "Mosaic delivered a scalable and efficient solution for our ecommerce platform. Their proficiency in Next.js and Shopify integration ensured seamless performance and a modern look for our site. Sales increased by 350% within the first quarter after launch!",
            project: "E-commerce Platform Development",
            avatar: "PS",
            gradient: "from-blue-500 to-cyan-500",
            results: { metric: "350%", label: "Sales Growth" }
        }
    ];

    return (
        <motion.section
            className="py-20 px-4 bg-gradient-to-b from-primary to-primary/95"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
        >
            <div className="container mx-auto">
                <motion.div variants={itemVariants} className="text-center mb-16">
                    <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                        Client <span className="text-accent">Success Stories</span>
                    </h2>
                    <p className="text-xl text-white/80 max-w-3xl mx-auto">
                        Don&apos;t just take our word for it. Here&apos;s what our clients say about
                        the transformative impact of our work on their businesses.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial) => (
                        <motion.div
                            key={testimonial.name}
                            variants={itemVariants}
                            whileHover={{ y: -8, scale: 1.02 }}
                            className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-accent/50 transition-all duration-500 flex flex-col justify-between"
                        >
                            <div>
                                {/* Quote Icon */}
                                <div className="absolute top-6 right-6 text-accent/30 text-3xl">
                                    <FaQuoteLeft />
                                </div>

                                {/* Rating */}
                                <div className="flex items-center mb-6">
                                    {[...Array(testimonial.rating)].map((_, starIndex) => (
                                        <FaStar key={`star-${testimonial.name}-${starIndex}`} className="text-accent text-lg mr-1" />
                                    ))}
                                    <span className="text-white/60 ml-2 text-sm">({testimonial.rating}.0)</span>
                                </div>

                                {/* Testimonial Text */}
                                <p className="text-white/80 leading-relaxed mb-6 text-sm">
                                    &quot;{testimonial.text}&quot;
                                </p>

                                {/* Project Type */}
                                <div className="mb-6">
                                    <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-xs font-medium">
                                        {testimonial.project}
                                    </span>
                                </div>

                                {/* Social Links */}
                                <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        className="text-white/40 hover:text-accent transition-colors"
                                    >
                                        <FaLinkedin />
                                    </motion.button>
                                    <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        className="text-white/40 hover:text-accent transition-colors"
                                    >
                                        <FaTwitter />
                                    </motion.button>
                                </div>
                            </div>
                            {/* Client Info */}
                            <div className="flex items-center mb-6">
                                <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${testimonial.gradient} flex items-center justify-center mr-4`}>
                                    <span className="text-white font-bold text-sm">{testimonial.avatar}</span>
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                                    <p className="text-white/60 text-sm">{testimonial.position}</p>
                                    <p className="text-accent text-xs">{testimonial.company}</p>
                                </div>
                            </div>


                            {/* Hover Gradient Overlay */}
                            <div className={`absolute inset-0 bg-gradient-to-t from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none`}></div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Stats */}
                <motion.div
                    variants={itemVariants}
                    className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center"
                >
                    <div>
                        <div className="text-4xl font-bold text-accent mb-2">7+</div>
                        <div className="text-white/60">Happy Clients</div>
                    </div>
                    <div>
                        <div className="text-4xl font-bold text-accent mb-2">20+</div>
                        <div className="text-white/60">Projects Delivered</div>
                    </div>
                    <div>
                        <div className="text-4xl font-bold text-accent mb-2">3+</div>
                        <div className="text-white/60">Countries Served</div>
                    </div>
                    <div>
                        <div className="text-4xl font-bold text-accent mb-2">24/7</div>
                        <div className="text-white/60">Support Available</div>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default PortfolioTestimonials;
