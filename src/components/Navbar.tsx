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
      <div className="flex items-center gap-[4px] mb-4">
        <Logo className="h-[24px] md:h-[34px] w-auto text-white" />
        <span className="font-serif text-[24px] md:text-[34px] text-white italic leading-none">Autos</span>
      </div>
    </motion.nav>
  );
};
