import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import {motion} from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "https://eroderunnersclub.com/wp-content/uploads/2024/03/391722641_296559289802157_4348903873984384376_n.jpg",
  "https://eroderunnersclub.com/wp-content/uploads/2024/03/391702184_296559396468813_5509998848039475028_n.jpg",
  "https://eroderunnersclub.com/wp-content/uploads/2024/03/391693152_17914549562811887_2037428690816349982_n.jpg",
  "https://eroderunnersclub.com/wp-content/uploads/2024/03/391675185_297084686416284_7648262738615547471_n.jpg",
  "https://eroderunnersclub.com/wp-content/uploads/2024/03/winners-scaled.jpg",
];

export default function SwiperImg() {
  return (
 <div className="h-full w-full md:max-w-[400px] flex justify-center">
  <motion.div
    className="border absolute h-full rounded-2xl max-w-[400px] shadow-2xl relative overflow-hidden md:mx-0 ml-2"
    initial={{ opacity: 0, y: -60 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        spaceBetween={20}
        slidesPerView={1}
        loop
        className="h-full"
        autoplay={{
    delay: 3000,       // 3 seconds per slide
    disableOnInteraction: false, // continue autoplay after manual swipe
  }}

      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
  <div className="relative flex justify-center items-center h-full">
    <img
      src={src}
      alt={`Slide ${index + 1}`}
      className="rounded-2xl object-cover w-full h-full transform transition-transform duration-[7000ms] ease-in-out scale-105 "
    />

    
   
    <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black/100 to-transparent rounded-t-2xl"></div>
    <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/100 to-transparent rounded-b-2xl"></div>
    <p className=" absolute top-4 left-4 text-2xl font-bold text-white">Featured Events</p>
    <div className="absolute bottom-4 left-4">
        <p className=" text-sm font-semibold text-white">29 October 2025</p>
        <p className=" text-lg font-bold text-white">Erode Marathon - 2025 </p>
    </div>
  </div>
</SwiperSlide>

        ))}

        <div className="absolute bottom-8 right-12 flex gap-2 z-10">
            
          <button className="swiper-button-prev bg-white text-blue-600 rounded-lg p-1 shadow hover:bg-white flex items-center justify-center">
            <ChevronRight size={40} />
          </button>
          <button className="swiper-button-next bg-white text-blue-600 rounded-lg p-1 full shadow hover:bg-white flex items-center justify-center">
            <ChevronLeft size={40} />
          </button>
          
        </div>
      </Swiper>

   
      <style>
        {`
          .swiper-button-prev::after,
          .swiper-button-next::after {
            display: none !important;
          }
        `}
      </style>
    </motion.div>
    </div>
  );
}
