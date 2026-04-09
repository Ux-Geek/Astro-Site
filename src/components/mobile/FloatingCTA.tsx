import { motion, useScroll, useTransform } from "motion/react";
import { Phone } from "lucide-react";

export const FloatingCTA = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [300, 500], [0, 1]);
  const y = useTransform(scrollY, [300, 500], [20, 0]);

  return (
    <motion.div
      style={{ opacity, y }}
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] w-[calc(100%-48px)] max-w-sm"
    >
      <a
        href="tel:+14143199400"
        className="flex items-center justify-center gap-3 bg-brand-orange text-white px-8 py-5 rounded-full font-bold shadow-2xl shadow-brand-orange/40 backdrop-blur-md border border-white/20 active:scale-95 transition-transform"
      >
        <Phone className="w-5 h-5 fill-white" />
        <span className="text-lg">Call Now: +1 (414) 319-9400</span>
      </a>
    </motion.div>
  );
};
