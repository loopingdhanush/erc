import Hero from "./landing_components/Hero";
import TestimonialScroller from "./landing_components/testimonial";
import ResultsShowcase from "./landing_components/result";
import Footer from "./landing_components/footer";
import Course from "./landing_components/course";
import About from "./landing_components/about";
import Instagram from "./landing_components/instagram";
import Final from "./landing_components/final";
import Why from "./landing_components/why";
import CalendarEvents from "./landing_components/calander";

export default function Landing() {
  return (
    <div >
      <Hero />
      <CalendarEvents/>
      <About />
      <Course />
      <Instagram />
      <ResultsShowcase />
      <TestimonialScroller />
      <Final/>
      <Footer/>
    </div>
  );
}

