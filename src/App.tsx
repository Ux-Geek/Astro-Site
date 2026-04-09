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
import { FloatingCTA } from "./components/mobile/FloatingCTA";

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
      <FloatingCTA />
    </main>
  );
}
