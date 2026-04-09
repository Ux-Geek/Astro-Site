import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";
import { FadeIn } from "./FadeIn";

export const FeaturedExperience = () => {
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
