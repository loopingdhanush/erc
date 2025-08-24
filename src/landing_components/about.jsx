import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";


const useCountUp = (end, duration = 2) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration * 60);  
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [end, duration]);

  return count;
};

export default function About() {
  const members = useCountUp(200, 2);
  const marathons = useCountUp(5, 2);
  const chapters = useCountUp(5, 2);

  return (
    <section className="py-16 mt-8 px-4 bg-gradient-to-b from-blue-200 to-white">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-md md:text-xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-900 pb-2">
          About Us
        </h1>
 
        <h1 className="text-3xl md:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 mb-8 pb-2">
          The Journey of Erode Runners
        </h1>
        
        <p className="text-center  text-gray-900 mx-4">
          Dr. Madhushankar, Mr. Krishnamoorthy, and Dr. Arunandhi Chelvan
          establishes the Erode Runners Club with the goal of inspiring the
          people of Erode to participate in marathon races began with a modest
          group of ten runners and went on to motivate hundreds more to
          participate in marathons around the nation. Today, more than 200
          runners actively participate in running and fitness activities as part
          of the Erode Runners Club’s lifestyle habit. We hope to encourage a
          fit and active lifestyle through our club, as well as enduring
          friendships and a feeling of community.
        </p>

       
<div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">

  {[
    { value: members, label: "Active Members", icon: "👥" },
    { value: marathons, label: "Marathons Conducted", icon: "🏃‍♂️" },
    { value: chapters, label: "Runner's Chapters", icon: "📍" },
  ].map((stat, i) => (
    <motion.div
      key={i}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: i * 0.2 }}
      viewport={{ once: true }}
      className="bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-xl p-8 text-center hover:scale-105 transition-all flex flex-col items-center gap-3 border border-gray-100"
    >

      <h2 className="text-5xl font-extrabold bg-gradient-to-r from-[#374291] to-blue-600 bg-clip-text text-transparent">
        {stat.value}+
      </h2>
      <p className="text-gray-700 font-medium">{stat.label}</p>
    </motion.div>
  ))}
</div>


        {/* Swiper Section */}
        <div className="mt-16">
         <Swiper
            modules={[Autoplay]}
            loop={true}
            freeMode={true}
            freeModeMomentum={false}
            slidesPerView={1}
            spaceBetween={20}
            speed={2000} // bigger = slower continuous scroll
            autoplay={{
              delay: 0, // no pause
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            <SwiperSlide>
              <div className="bg-white rounded-2xl shadow-md  flex justify-center items-center">
                <img
                  src="https://eroderunnersclub.com/wp-content/uploads/2024/03/391722641_296559289802157_4348903873984384376_n.jpg"
                  alt="Runner 1"
                  className="rounded-lg"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-white rounded-2xl shadow-md  flex justify-center items-center">
                <img
                  src="https://eroderunnersclub.com/wp-content/uploads/2024/03/391702184_296559396468813_5509998848039475028_n.jpg"
                  alt="Runner 2"
                  className="rounded-lg"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-white rounded-2xl shadow-md  flex justify-center items-center">
                <img
                  src="https://eroderunnersclub.com/wp-content/uploads/2024/03/391693152_17914549562811887_2037428690816349982_n.jpg"
                  alt="Runner 3"
                  className="rounded-lg"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-white rounded-2xl shadow-md  flex justify-center items-center">
                <img
                  src="https://eroderunnersclub.com/wp-content/uploads/2024/03/391675185_297084686416284_7648262738615547471_n.jpg"
                  alt="Runner 3"
                  className="rounded-lg"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-white rounded-2xl shadow-md  flex justify-center items-center">
                <img
                  src="https://eroderunnersclub.com/wp-content/uploads/2024/03/winners-scaled.jpg"
                  alt="Runner 3"
                  className="rounded-lg"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
