import { motion } from "motion/react";
import { ReactNode } from "react";

export const FadeIn = ({ children, delay = 0, direction = "up", className = "" }: { children: ReactNode, delay?: number, direction?: "up" | "down" | "left" | "right" | "none", className?: string, key?: string | number }) => {
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
      filter: "blur(10px)"
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      filter: "blur(0px)",
      transition: { duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};
