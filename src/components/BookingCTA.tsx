import { FadeIn } from "./FadeIn";

export const BookingCTA = () => {
  return (
    <section className="py-48 px-6 relative overflow-hidden flex flex-col items-center justify-center text-white">
      <div className="absolute inset-0 z-0">
        <img
          src="/images/workshop-1.jpg"
          alt="Astro Workshop"
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
