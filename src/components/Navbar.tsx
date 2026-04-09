import { motion } from "motion/react";
import { Logo } from "./Logo";

export const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="absolute top-0 left-0 w-full z-50 py-12 flex flex-col items-center"
    >
      <div className="flex items-center gap-4 mb-4">
        <Logo className="h-8 w-auto text-white" />
        <span className="font-sans text-4xl font-bold tracking-[2px] text-white">STRO</span>
      </div>
    </motion.nav>
  );
};
