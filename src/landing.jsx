import { useEffect, useState } from "react";
import Hero from "./landing_components/Hero";
import Footer from "./landing_components/footer";
import Course from "./landing_components/course";
import About from "./landing_components/about";
import Final from "./landing_components/final";
import CalendarEvents from "./landing_components/calander";
import Timeline from "./landing_components/timeline";
import Swiperimg from "./landing_components/swiper";
import FAQ from "./landing_components/faq";

export default function Landing() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleLoad = () => setIsLoaded(true);

    if (document.readyState === "complete") {
      // Page already loaded
      setIsLoaded(true);
    } else {
      // Wait for full load
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center h-screen w-screen bg-white">
        <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div>
      <div className="h-24"></div>

      <div className="max-w-7xl mx-auto px-2">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-2 items-stretch">
          {/* Left Hero (takes 2 columns) */}
          <div className="md:col-span-2">
            <Hero />
          </div>

          {/* Right side stacked */}
          <div className="flex flex-col gap-4 h-full">
            <div className="flex-1">
              <Swiperimg />
            </div>
            <div className="flex-1">
              <CalendarEvents />
            </div>
          </div>
        </div>
      </div>

      <About id="about" />
      <Course id="benefits" />
      <Timeline />
      <Final />
      <FAQ id="faq" />
      <Footer />
    </div>
  );
}
