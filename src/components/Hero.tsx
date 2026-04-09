import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Navbar } from "./Navbar";
import { FadeIn } from "./FadeIn";
import { MobileMenu } from "./mobile/MobileMenu";

export const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-end pb-24">
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <img
          src="/images/workshop-1.jpg"
          alt="Premium Workshop"
          className="w-full h-full object-cover blur-[2px]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/65" />
      </motion.div>

      <MobileMenu />
      <Navbar />

      <motion.div
        style={{ opacity }}
        className="relative z-10 w-full max-w-7xl px-6 flex flex-col items-center text-center"
      >
        <FadeIn delay={0.8}>
          <h1 className="text-5xl md:text-7xl lg:text-[54px] font-serif text-white mb-12 leading-tight max-w-4xl">
            Precision Repairs. Honest Service. Built to Last.
          </h1>
        </FadeIn>

        <FadeIn delay={1} direction="none">
          <div className="hidden md:flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="flex gap-8 text-white/70 text-[15px] font-medium tracking-wide">
              {["Services", "About", "Diagnostics", "Gallery", "Reviews", "Contact"].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-white transition-colors relative group">
                  {item.charAt(0).toUpperCase() + item.slice(1).toLowerCase()}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>
            <a
              href="tel:+14143199400"
              className="bg-brand-orange text-white px-8 py-4 rounded-full font-medium hover:bg-brand-orange/90 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-brand-orange/20 border-[0.5px] border-orange-700"
            >
              +1 (414) 319-9400
            </a>
          </div>
        </FadeIn>
      </motion.div>
    </section>
  );
};
