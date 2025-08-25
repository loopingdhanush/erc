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
  return (
    <div  className="">
    <div className="h-24 "></div>
    <div className="max-w-7xl mx-auto px-2 ">

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-2 ">

  <div className="md:col-span-2 ">
    <Hero />
    <div className="flex md:hidden flex-row gap-4 justify-center items-center mt-6">
      <span className="text-gray-500 ">Scroll</span>
      <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center items-start p-1">
        <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce mt-1"></div>
      </div>
      <span className="text-gray-500 ">down</span>
    </div>
    
  </div>


  <div className="flex flex-col gap-8 md:gap-4">
    <div className="flex-1 ">
      <CalendarEvents />
      

    </div>
    <div className="flex-1">
      <div className=" h-full "> 
          <Swiperimg/>
      </div>
    </div>
  </div>
</div>
<div className="md:flex hidden flex-row gap-4 justify-center items-center mt-6">
      <span className="text-gray-500 ">Scroll</span>
      <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center items-start p-1">
        <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce mt-1"></div>
      </div>
      <span className="text-gray-500 ">down</span>
    </div>
</div>

      <About id="about"/>
      <Course id="benefits"/>
      <Timeline/>
      <Final/>
      <FAQ id="faq"/>
      <Footer/>
    </div>
  );
}

