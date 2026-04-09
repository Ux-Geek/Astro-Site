import { motion, useScroll, useTransform, useInView } from "motion/react";
import { useRef, useEffect, useState, ReactNode } from "react";
import { ArrowRight, ChevronRight, Star, Clock, Shield, Wrench, Settings, Zap, CheckCircle2 } from "lucide-react";

const FadeIn = ({ children, delay = 0, direction = "up", className = "" }: { children: ReactNode, delay?: number, direction?: "up" | "down" | "left" | "right" | "none", className?: string, key?: string | number }) => {
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

const Logo = ({ className = "h-12 w-auto" }: { className?: string }) => (
  <svg 
    width="136" 
    height="143" 
    viewBox="0 0 136 143" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect x="0.25" y="65.25" width="135.5" height="41.5" rx="11.75" fill="#D9D9D9" stroke="#C6C6C6" strokeWidth="0.5"/>
    <path d="M43.6211 0.5H88.9121C93.9931 0.500165 98.6439 3.35345 100.946 7.88281L117.213 39.8828C121.778 48.8638 115.253 59.4997 105.179 59.5H29.4883C19.7325 59.5 13.1973 49.4701 17.1387 40.5459L31.2725 8.5459C33.4325 3.65534 38.2748 0.500105 43.6211 0.5Z" fill="#BEBDBD" stroke="#B3B1B1"/>
    <path d="M31 113.714V130C31 136.627 25.6274 142 19 142C12.3726 142 7 136.627 7 130V116.286V114.571V114C7 112.895 7.89543 112 9 112H29.2857C30.2325 112 31 112.768 31 113.714Z" fill="currentColor"/>
    <path d="M7 114.571V116.286M7 116.286V130C7 136.627 12.3726 142 19 142C25.6274 142 31 136.627 31 130V113.714C31 112.768 30.2325 112 29.2857 112H9C7.89543 112 7 112.895 7 114V116.286Z" stroke="currentColor" strokeWidth="2"/>
    <path d="M129 113.714V130C129 136.627 123.627 142 117 142C110.373 142 105 136.627 105 130V116.286V114.571V114C105 112.895 105.895 112 107 112H127.286C128.232 112 129 112.768 129 113.714Z" fill="currentColor"/>
    <path d="M105 114.571V116.286M105 116.286V130C105 136.627 110.373 142 117 142C123.627 142 129 136.627 129 130V113.714C129 112.768 128.232 112 127.286 112H107C105.895 112 105 112.895 105 114V116.286Z" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="absolute top-0 left-0 w-full z-50 py-12 flex flex-col items-center"
    >
      <div className="flex items-center gap-6 mb-4">
        <Logo className="h-16 w-auto text-white" />
        <span className="font-sans text-4xl font-bold tracking-[2px] text-white">ASTRO</span>
      </div>
    </motion.nav>
  );
};

const Hero = () => {
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
          src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=2000" 
          alt="Premium Workshop" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/45" />
      </motion.div>

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
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
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

const Intro = () => {
  return (
    <section className="py-32 px-6 bg-warm-stone">
      <div className="max-w-4xl mx-auto text-center">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-serif mb-8 text-deep-charcoal">
            Your Car Deserves Better Than Average.
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="text-lg md:text-xl text-supporting-gray leading-relaxed max-w-2xl mx-auto">
            From routine maintenance to serious repairs, ASTRO AUTOS delivers high-standard workmanship with modern tools and clear communication.
          </p>
        </FadeIn>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    { title: "Diagnostics", img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800" },
    { title: "Engine Repair", img: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=800" },
    { title: "Brake Service", img: "https://images.unsplash.com/photo-1530046339160-ce3e5b0c7a2f?auto=format&fit=crop&q=80&w=800" },
    { title: "Suspension", img: "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&q=80&w=800" },
    { title: "Oil & Maintenance", img: "https://images.unsplash.com/photo-1552650272-b8a34e21bc4b?auto=format&fit=crop&q=80&w=800" },
    { title: "Electrical Repairs", img: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=800" },
  ];

  return (
    <section id="services" className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="flex justify-between items-end mb-20">
            <h2 className="text-5xl font-serif">Our Expertise</h2>
            <p className="text-supporting-gray max-w-xs text-right hidden md:block">
              Specialized care for high-performance and luxury vehicles.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {services.map((service, idx) => (
            <motion.div 
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`group cursor-pointer ${idx % 2 !== 0 ? "md:mt-12" : ""}`}
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm mb-6">
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                  src={service.img} 
                  alt={service.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
              </div>
              <h3 className="text-2xl font-serif mb-2">{service.title}</h3>
              <div className="w-0 h-px bg-brand-orange group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FeaturedExperience = () => {
  return (
    <section className="py-32 px-6 bg-warm-stone overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="relative">
          <FadeIn direction="right">
            <div className="aspect-[4/5] overflow-hidden rounded-sm shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1507702553912-a15641ec572c?auto=format&fit=crop&q=80&w=1200" 
                alt="Repair Experience" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </FadeIn>
          <motion.div 
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1 }}
            className="absolute -bottom-10 -right-10 w-64 h-80 hidden lg:block border-8 border-warm-stone overflow-hidden rounded-sm shadow-xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&q=80&w=600" 
              alt="Detail" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>

        <div className="lg:pl-12">
          <FadeIn direction="left">
            <h2 className="text-5xl font-serif mb-8 leading-tight">
              Repairs Without the Runaround.
            </h2>
            <p className="text-lg text-supporting-gray mb-10 leading-relaxed">
              We inspect properly, explain clearly, and fix what matters. No vague language. No unnecessary work. Just quality service done right.
            </p>
            <ul className="space-y-6">
              {[
                "Modern diagnostics for complex systems",
                "Transparent pricing and clear timelines",
                "Master technicians with luxury experience"
              ].map((item) => (
                <li key={item} className="flex items-center gap-4 text-deep-charcoal font-medium">
                  <div className="w-6 h-6 rounded-full bg-brand-orange/10 flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-brand-orange" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  const images = [
    "https://images.unsplash.com/photo-1530046339160-ce3e5b0c7a2f?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1552650272-b8a34e21bc4b?auto=format&fit=crop&q=80&w=800",
  ];

  return (
    <section id="gallery" className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <h2 className="text-5xl font-serif mb-20 text-center">Workshop Showcase</h2>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-[1000px]">
          <div className="md:col-span-8 h-full">
            <FadeIn direction="none" className="h-full">
              <div className="h-full overflow-hidden rounded-sm group">
                <img src={images[0]} alt="Workshop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
              </div>
            </FadeIn>
          </div>
          <div className="md:col-span-4 flex flex-col gap-6 h-full">
            <div className="h-1/2 overflow-hidden rounded-sm group">
              <img src={images[1]} alt="Workshop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
            </div>
            <div className="h-1/2 overflow-hidden rounded-sm group">
              <img src={images[2]} alt="Workshop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const WhyChoose = () => {
  const reasons = [
    { title: "Fast Turnaround", desc: "Efficient processes to get you back on the road." },
    { title: "Transparent Advice", desc: "Honest assessments without the jargon." },
    { title: "Skilled Technicians", desc: "Expert hands for every mechanical challenge." },
    { title: "Quality Parts", desc: "Only the best components for your vehicle." },
    { title: "Clean Workshop", desc: "A professional environment for precision work." },
    { title: "Reliable Results", desc: "Service that stands the test of time." },
  ];

  return (
    <section className="py-32 px-6 bg-deep-charcoal text-white">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <h2 className="text-5xl font-serif mb-20">Why ASTRO AUTOS?</h2>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {reasons.map((reason, idx) => (
            <FadeIn key={reason.title} delay={idx * 0.1}>
              <div className="group">
                <div className="text-brand-orange mb-6 font-serif text-2xl">0{idx + 1}</div>
                <h3 className="text-2xl font-serif mb-4 group-hover:text-brand-orange transition-colors">{reason.title}</h3>
                <p className="text-white/50 leading-relaxed">{reason.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

const Reviews = () => {
  const reviews = [
    { name: "James Wilson", role: "Porsche Owner", text: "Finally, a shop that understands high-end vehicles. The attention to detail at ASTRO AUTOS is unmatched." },
    { name: "Sarah Chen", role: "BMW Enthusiast", text: "Transparent, professional, and incredibly skilled. They fixed an electrical issue two other shops couldn't find." },
    { name: "Michael Ross", role: "Classic Car Collector", text: "I trust ASTRO AUTOS with my entire collection. They treat every car like it's their own." },
  ];

  return (
    <section id="reviews" className="py-32 px-6 bg-warm-stone">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <h2 className="text-5xl font-serif mb-20 text-center">Client Stories</h2>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <FadeIn key={review.name} delay={idx * 0.2}>
              <div className="bg-white p-12 rounded-sm shadow-sm hover:shadow-xl transition-all duration-500 group">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-brand-orange text-brand-orange" />)}
                </div>
                <p className="text-xl font-serif italic mb-8 text-deep-charcoal leading-relaxed">
                  "{review.text}"
                </p>
                <div>
                  <div className="font-bold text-deep-charcoal">{review.name}</div>
                  <div className="text-sm text-supporting-gray uppercase tracking-widest">{review.role}</div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

const BookingCTA = () => {
  return (
    <section className="py-48 px-6 relative overflow-hidden flex flex-col items-center justify-center text-white">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=2000" 
          alt="CTA Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <FadeIn>
          <h2 className="text-5xl md:text-6xl font-serif mb-12">Expert Care for Your Vehicle</h2>
          <a 
            href="tel:+14143199400" 
            className="inline-block bg-brand-orange text-white px-12 py-6 rounded-full text-2xl font-medium hover:bg-brand-orange/90 transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-brand-orange/40 border-[0.5px] border-orange-700"
          >
            +1 (414) 319-9400
          </a>
        </FadeIn>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-24 px-6 bg-white border-t border-warm-stone">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16">
        <div className="md:col-span-1">
          <div className="flex items-center gap-4 mb-6">
            <Logo className="h-10 w-auto text-deep-charcoal" />
            <span className="font-sans text-2xl font-bold tracking-[2px] text-deep-charcoal">ASTRO</span>
          </div>
          <p className="text-supporting-gray leading-relaxed">
            Premium automotive care for discerning drivers. Built on precision and trust.
          </p>
        </div>
        
        <div>
          <h4 className="font-bold uppercase tracking-widest text-xs mb-8">Location</h4>
          <address className="not-italic text-supporting-gray space-y-2">
          <p>4722 South 13th Street</p>
          <p>Milwaukee, WI 53221</p>
          <p>United States</p>
          </address>
        </div>
        
        <div>
          <h4 className="font-bold uppercase tracking-widest text-xs mb-8">Contact</h4>
          <div className="text-supporting-gray space-y-2">
            <p>+1 (414) 319-9400</p>
            <p>service@milwaukee-astro.com</p>
          </div>
        </div>
        
        <div>
          <h4 className="font-bold uppercase tracking-widest text-xs mb-8">Hours</h4>
          <div className="text-supporting-gray space-y-2">
            <p>Mon — Fri: 08:00 - 18:00</p>
            <p>Sat: 09:00 - 14:00</p>
            <p>Sun: Closed</p>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-warm-stone flex flex-col md:row justify-between items-center gap-4 text-xs text-supporting-gray uppercase tracking-widest">
        <p>© 2026 ASTRO. ALL RIGHTS RESERVED.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-brand-orange transition-colors">Instagram</a>
          <a href="#" className="hover:text-brand-orange transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-brand-orange transition-colors">Twitter</a>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!isLoaded) return null;

  return (
    <main className="relative selection:bg-brand-orange selection:text-white">
      <Hero />
      <Intro />
      <Services />
      <FeaturedExperience />
      <Gallery />
      <WhyChoose />
      <Reviews />
      <BookingCTA />
      <Footer />
    </main>
  );
}
