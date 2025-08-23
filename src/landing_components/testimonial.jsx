

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const testimonials1 = [
  {
    name: "Kayelesh",
    text: "I feel truly great about the coaching academy, especially because of the way Vijay Anand sir teaches. His approach is not just about completing the syllabus but about ensuring each student understands deeply. What stands out most is the individual care and attention he gives he truly customizes his mentoring to suit each student's needs, whether it's for JEE or CBSE. His dedication and personal involvement in our preparation make a big difference. I'm really grateful to have him as my mentor.",
  },
  {
    name: "Yasvini",
    text: "The courses and teaching at this academy are truly excellent. The classes have helped me score much higher in school and in exams. They’ve also been really useful for other competitive exams. Vijay sir explains every concept clearly and never misses a single doubt he’s extremely supportive. Thanks to his guidance and the regular practice tests at the academy, I scored 97 in Math and 95 in Science in my Class 10 board exams. I used to be an average student in Science, but this academy really helped me improve. The best part is the way concepts are taught simple, to the point, and with plenty of examples and tests that boost confidence. I’m really thankful to the academy for helping me score better.",
  },
  {
    name: "Pavithra N",
    text: "From 9th till 12th and in my NEET preparation Easy Exam Academy played a major role in my academics. Vijay sir's way of teaching and his guidance throughout the entire journey is what really got me till the end... Not to mention his way of connecting the physics concepts to real life examples we daily encounter. For instance whenever I see a mirage on the road my mind will automatically go back to the ray optics class and the images he showed while explaining refraction... I wasn’t really that into physics at first, but over time, his classes made me actually interested in it. The mock tests and the quick revision videos in youtube helped a lot in the last time preparation. A Very Big Thanks to Vijay sir for his unwavavering dedication and guidance. He helped me get better in my acdamics. I'm forever gratefull to him for his role in my academics. Thank you so much sir.",
  },
  {
    name: "Harshini D V",
    text: "My journey at Easy Exam Academy has been both productive and insightful, I attended a bridge course in physics and chemistry. This course was specifically designed to prepare students for competitive entrance exams, and it turned out to be an incredibly rewarding experience to me. This course strengthen my knowledge in physics and chemistry very well. The sessions were well structured, interactive, easy to follow and focusing on both conceptual clarity and problem-solving techniques. The faculty members explained complex topics in a simple, understandable way in the short time. Doubt clearing part were held daily, ensuring we stayed on track. Regular practice questions and mock tests helped in sharpening my problem-solving skills. Despite being online, the sessions were highly engaging and gave the feel of a real classroom environment. I am truly thankful to Easy Exam Academy for offering such a high quality and accessible learning.",
  },
  {
    name: "Harsinii Vetrivela",
    text: "Vijay Anand Sir has helped my daughter in Physics for her Board and Neet Exam . His exam tips were very useful. He corrected all her mistakes and she scored 92 in her Board examination. He cleared pinpointed all her mistakes so that she can improve. He keeps motivating his students and encourages them so that they can face the exams with ease . Thank you Sir",
  },
];

const testimonials2 = [...testimonials1].reverse();


export default function TestimonialSwiper() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-bold text-orange-500">Testimonials</h2>
        <p className="text-2xl text-gray-700 mt-2 dark:text-orange-100">Hear from our students</p>
        
      </div>

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        autoplay={{ delay: 4000, disableOnInteraction: true, pauseOnMouseEnter: true }}
        loop={true}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {testimonials1.map((t, index) => {
          const [expanded, setExpanded] = React.useState(false);
          const limit = 350; 
          const isLong = t.text.length > limit;
          const displayText = expanded ? t.text : t.text.slice(0, limit) + (isLong ? "..." : "");

          return (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-xl shadow-md p-5 mt-10 mb-4  border-2 border-orange-200 dark:bg-gray-800 dark:border-orange-500">
                <div className="text-sm font-semibold text-gray-900 text-orange-500 dark:text-orange-300">
                  {t.name}
                </div>
                <p className="text-gray-700 text-sm italic mt-1 dark:text-orange-100">
                  "{displayText}"
                  {isLong && (
                    <button
                      onClick={() => setExpanded(!expanded)}
                      className="ml-1 text-orange-300 hover:underline focus:outline-none"
                    >
                      {expanded ? "See less" : "See more"}
                    </button>
                  )}
                </p>
              </div>
            </SwiperSlide>
          );
        })}

        

        


      </Swiper>


    </div>
  );
}