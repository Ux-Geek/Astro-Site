import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ["Services", "About", "Diagnostics", "Gallery", "Reviews", "Contact"];

  return (
    <div className="md:hidden fixed top-8 right-6 z-[60]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-3 bg-brand-orange text-white rounded-full shadow-lg"
      >
        {isOpen ? <X /> : <Menu />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="fixed inset-0 bg-deep-charcoal text-white flex flex-col items-center pt-32 gap-4 z-50"
          >
            {navItems.map((item, idx) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => setIsOpen(false)}
                className="text-[12px] uppercase tracking-widest font-normal hover:text-brand-orange transition-colors"
              >
                {item}
              </motion.a>
            ))}
            
            <motion.a
              href="tel:+14143199400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-8 bg-brand-orange text-white px-8 py-4 rounded-full font-bold text-xl"
            >
              +1 (414) 319-9400
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
