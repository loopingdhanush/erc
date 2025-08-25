import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import videoBg from "../assets/video.mp4";

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

export default function About({id}) {
  const members = useCountUp(200, 2);
  const marathons = useCountUp(5, 2);
  const chapters = useCountUp(5, 2);

  return (
    <section id={id} className="relative py-16 mt-8 px-4">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={videoBg} type="video/mp4" />
      </video>

      {/* Dark overlay for readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/70 z-0"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-white">
        {/* Headings */}
        <h1 className="text-md md:text-2xl font-normal kollektif-font text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-100 to-blue-200 pb-2"> About Us </h1> <h1 className="text-3xl md:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-100 to-blue-400 mb-8 pb-2"> The Journey of Erode Runners </h1>

        {/* Paragraph */}
        <p className="text-center text-gray-100 mx-4">
          Dr. Madhushankar, Mr. Krishnamoorthy, and Dr. Arunandhi Chelvan
          established the Erode Runners Club with the goal of inspiring the
          people of Erode to participate in marathon races. It began with a
          modest group of ten runners and went on to motivate hundreds more to
          participate in marathons around the nation. Today, more than 200
          runners actively participate in running and fitness activities as part
          of the Erode Runners Club’s lifestyle. We aim to encourage a fit and
          active lifestyle, enduring friendships, and a feeling of community.
        </p>

        {/* Stats */}
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
            speed={2000} // slower continuous scroll
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {[
              "https://eroderunnersclub.com/wp-content/uploads/2024/03/391722641_296559289802157_4348903873984384376_n.jpg",
              "https://eroderunnersclub.com/wp-content/uploads/2024/03/391702184_296559396468813_5509998848039475028_n.jpg",
              "https://eroderunnersclub.com/wp-content/uploads/2024/03/391693152_17914549562811887_2037428690816349982_n.jpg",
              "https://eroderunnersclub.com/wp-content/uploads/2024/03/391675185_297084686416284_7648262738615547471_n.jpg",
              "https://eroderunnersclub.com/wp-content/uploads/2024/03/winners-scaled.jpg",
            ].map((img, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-2xl shadow-md flex justify-center items-center p-2">
                  <img
                    src={img}
                    alt={`Runner ${index + 1}`}
                    className="rounded-lg"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
