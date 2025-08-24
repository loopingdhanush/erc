import Hero from "./landing_components/Hero";
import TestimonialScroller from "./landing_components/testimonial";
import Footer from "./landing_components/footer";
import Course from "./landing_components/course";
import About from "./landing_components/about";
import Instagram from "./landing_components/instagram";
import Final from "./landing_components/final";
import CalendarEvents from "./landing_components/calander";
import Timeline from "./landing_components/timeline";
import Swiperimg from "./landing_components/swiper";

export default function Landing() {
  return (
    <div  className="bg-blue-50">
    <div className="h-24 "></div>
    <div className="max-w-7xl mx-auto px-2">

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-2 ">

  <div className="md:col-span-2">
    <Hero />
  </div>


  <div className="flex flex-col gap-8 md:gap-4">
    <div className="flex-1">
      <CalendarEvents />
      

    </div>
    <div className="flex-1">
      <div className=" h-full "> 
          <Swiperimg/>
      </div>
    </div>
  </div>
</div>

</div>

      <About />
      <Course />
      <Timeline/>
      <Final/>
      <Footer/>
    </div>
  );
}

