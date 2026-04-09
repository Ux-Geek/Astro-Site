import { FadeIn } from "./FadeIn";

export const Gallery = () => {
  const images = [
    "https://images.unsplash.com/photo-1542435503-956c469947f6?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1518131681197-4c4c442478d3?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1506318137071-a8e063b497a1?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1494905998402-395d579af36f?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=800",
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
