import { useState, useEffect } from "react";
import { 
  Hero, 
  Intro, 
  Services, 
  FeaturedExperience, 
  Gallery, 
  WhyChoose, 
  Reviews, 
  BookingCTA, 
  Footer 
} from "./components";

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
