import { FadeIn } from "./FadeIn";

export const Gallery = () => {
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
