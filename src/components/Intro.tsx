import { FadeIn } from "./FadeIn";

export const Intro = () => {
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
            From routine maintenance to serious repairs, ASTRO delivers high-standard workmanship with modern tools and clear communication.
          </p>
        </FadeIn>
      </div>
    </section>
  );
};
