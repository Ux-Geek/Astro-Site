import { motion } from "motion/react";
import { FadeIn } from "./FadeIn";

export const Services = () => {
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
