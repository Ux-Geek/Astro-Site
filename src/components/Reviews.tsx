import { useState } from "react";
import { Star } from "lucide-react";
import { FadeIn } from "./FadeIn";

const ReviewText = ({ text }: { text: string }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const words = text.split(" ");
  const isLong = words.length > 35;
  const displayedText = isExpanded ? text : words.slice(0, 35).join(" ");

  return (
    <p className="text-lg font-serif italic mb-8 text-deep-charcoal leading-relaxed flex-grow">
      "{displayedText}
      {!isExpanded && isLong && (
        <button
          onClick={() => setIsExpanded(true)}
          className="text-blue-600 hover:text-blue-800 ml-1 inline italic cursor-pointer font-sans"
        >
          ....more
        </button>
      )}
      "
    </p>
  );
};

export const Reviews = () => {
  const reviews = [
    {
      name: "Aida Ornelas",
      role: "Local Guide",
      text: "I was referred to Astro General Repair and Towing after receiving sky-high quotes elsewhere for new tires and an alignment. Not only was the pricing here far more reasonable, but the experience was exceptional from start to finish. Yes, my brother works here—but this review isn’t just about family. The entire team at Astro was incredibly welcoming, professional, and efficient. They treated me with respect, explained everything clearly, and got the job done quickly and correctly. I’m highly satisfied with the quality of work and the customer service I received. I’ll absolutely be recommending Astro to my family, friends, and colleagues. If you're looking for honest, skilled, and friendly automotive service, this is the place to go!"
    },
    {
      name: "Dylan Siegfried",
      role: "Local Guide",
      text: "Astro has fair prices and honest assessment of your issue. I asked them to do an alternator replacement, and before starting work on my car they retested my battery, starter, and alternator, checked the belt and tension, and called me to say that everything on my car looked fine. They let me take my car back with no chargez, and told me what to look out for if the issue arises again. At the local Nissan dealership, they would have charged me $150 just for the diagnostics. I can't recommend Astro enough. Coming back to edit. Its been a week and a 5 hour drive since Astro defied what my own eyes and advanced auto parts were telling me and said my car was fine. It's still fine. They saved me a bunch of money and stress. Good and honest auto mechanics are hard to find, but I found one here. Thanks again Astro team."
    },
    {
      name: "Douglas Copher",
      role: "Local Guide",
      text: "My blend door broke, it is used to switch from hot to cold air which is housed within the dashboard. Many of the shops I spoke with would not take it cause it was a labor intensive project. Not only did they find the issue quickly but they also fixed it really quick. They were detailed and anything else they discovered they called to let me know and offered to repair it at part cost. I am glad I discovered this shop and look forward to getting my vehicles serviced with them in the future"
    },
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
              <div className="bg-white p-8 rounded-sm shadow-sm hover:shadow-xl transition-all duration-500 group h-full flex flex-col">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-brand-orange text-brand-orange" />)}
                </div>
                <ReviewText text={review.text} />
                <div className="mt-auto">
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
