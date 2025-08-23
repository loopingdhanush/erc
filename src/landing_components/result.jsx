import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import res1 from "../assets/10math.jpg"
import res2 from "../assets/10sci.jpg"
import res3 from "../assets/12physics.jpg"

const instagramResults = [
  res1,
  res2,
  res3
];

export default function ResultsShowcase() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col lg:flex-row items-center gap-10 md:mt-20 md:mb-10 mt-10 mb-10">
      
     
      <div className="lg:w-1/2 text-center lg:text-left">
        <h2 className="text-4xl md:text-5xl font-bold text-orange-500 mb-4 kollektif-font">Outstanding Results</h2>
        <p className="text-xl text-gray-900 dark:text-orange-100 futura-font">
          Our students have consistently delivered excellent academic performance in board exams and entrance tests.
        </p>
        <p className="mt-2 text-xl text-gray-900 dark:text-orange-300 futura-font">
          Here's a glimpse of our recent achievers <br></br> Join the Journey to success!
        </p>
      </div>

    
      <div className="lg:w-1/2 w-full">
        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={20}
          loop
          breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 2 },
            }}
          autoplay={{ delay: 3000 }}
        >
          {instagramResults.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={img}
                alt={`Result ${index + 1}`}
                className="w-full h-[400px] object-contain rounded-xl"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
