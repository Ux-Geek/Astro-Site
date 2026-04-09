import { FadeIn } from "./FadeIn";

export const Gallery = () => {
  const images = [
    "/images/workshop-1.jpg",
    "/images/gallery/2023-09-01.jpg",
    "/images/gallery/2024-03-02.jpg",
    "/images/gallery/unnamed.jpg",
    "/images/gallery/2023-10-19.jpg",
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
