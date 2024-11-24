"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    quote: `"Mosaic's work on our gaming platform was exceptional. Their expertise in Solana blockchain integration helped us launch on time, and their attention to UI/UX made the platform incredibly user-friendly."`,
    name: "Amarildo Grembi",
    position: "Co-founder",
    company: "Build Squad",
  },
  {
    quote: `"We loved collaborating with Mosaic! Their ability to translate complex requirements into a clean and functional UI using MUI and TypeScript was remarkable."`,
    name: "Khanak Khandelwal",
    position: "Managing Director",
    company: "Elevated Club",
  },
  {
    quote: `"Mosaic delivered a scalable and efficient solution for our ecommerce platform. their proficiency in Next.js and Shopify integration ensured seamless performance and a modern look for our site."`,
    name: "Piyush Singh",
    position: "Founder",
    company: "Webllisto",
  },
  {
    quote: `"Working with Mosaic was a game-changer. Their skills in blockchain and frontend technologies brought our vision of a decentralized app to life. Highly recommended!"`,
    name: "Shyam Visamsetty",
    position: "CEO",
    company: "Navaratan Technologies",
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <section className="pb-24 bg-dark" ref={ref}>
      <div className="container mx-auto">
        <motion.h2
          className="text-5xl text-center text-white mb-12"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          What Our <span className="text-accent font-bold">Clients</span> Say
        </motion.h2>
        <motion.div
          className="flex flex-col items-center gap-8"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="testimonial-card bg-light p-8 rounded-lg shadow-lg"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              transition={{ duration: 2, ease: "easeOut" }}
            >
              <p className="text-white/80 italic">{testimonial.quote}</p>
              <h3 className="mt-4 text-xl text-accent">{testimonial.name}</h3>
              <p className="text-white/60">
                {testimonial.position}, {testimonial.company}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
