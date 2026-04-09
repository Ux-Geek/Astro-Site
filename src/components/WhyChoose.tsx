import { FadeIn } from "./FadeIn";

export const WhyChoose = () => {
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
          <h2 className="text-5xl font-serif mb-20">Why ASTRO?</h2>
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
