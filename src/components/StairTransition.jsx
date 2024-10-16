"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const TOTAL_STEPS = 6;

const stairAnimation = {
  // When the animation is coming in
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },

  // Defines when the animated div is being removed
  exit: {
    top: ["100%", "0%"],
  },
};

const reverseIndex = (index) => {
  return TOTAL_STEPS - index - 1;
};

const StairTransition = () => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <div key={pathname}>
        <div className="h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex">
          {[...Array(TOTAL_STEPS)].map((_, index) => {
            return (
              <motion.div
                key={index}
                variants={stairAnimation}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{
                  duration: 0.4,
                  ease: "easeInOut",
                  delay: reverseIndex(index) * 0.1,
                }}
                className="h-full w-full bg-white relative"
              />
            );
          })}
        </div>
      </div>
    </AnimatePresence>
  );
};

export default StairTransition;
