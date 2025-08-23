import React from "react";



import sprinters from "../assets/sprinters.svg";
import movers from "../assets/movers.svg";
import flyers from "../assets/flyers.svg";
import neet from "../assets/neet.svg";
import bmp from "../assets/bmp.svg";
import crash from "../assets/crash.svg";
import bootcamp from "../assets/bootcamp.svg";
import prime from "../assets/prime.svg";
import college from "../assets/college.svg";

const courseinfo = [
    {
        title: "Guidance & Mentorship",
        description: "Experienced runners guide beginners, ensuring everyone feels supported no matter their pace.",
        icon: "https://img.icons8.com/pulsar-line/100/1E88E5/exercise.png",
    },
    {
        title: "Exclusive Club Runs & Events",
        description: "Special weekend runs, night runs, and training challenges keep the momentum alive all year.",
        icon: "https://img.icons8.com/pulsar-line/100/1E88E5/star.png",
    },
    {
        title: "Exclusive Club T-Shirt",
        description: "Summer program to boost logical thinking, problem solving, and mental ability.",
        icon: "https://img.icons8.com/pulsar-line/100/1E88E5/t-shirt.png",
    },
    {
        title: "A Strong Community",
        description: "Stay connected through our dedicated WhatsApp group where members share progress, tips, and motivation every day.",
        icon: "https://img.icons8.com/pulsar-line/100/1E88E5/people-working-together.png"   ,
    },
    {
        title: "Structured Training Plans",
        description: "From Couch to 5K to Half Marathon we’ve got tried-and-tested training programs to help you reach your goals step by step.",
        icon: "https://img.icons8.com/pulsar-line/100/1E88E5/barbell.png",
    },
    {
        title: "Race-Day Convenience",
        description: "No more waiting in long queues. Our club representative collects bibs in advance, so you can focus on running, not logistics.",
        icon: "https://img.icons8.com/pulsar-line/100/1E88E5/suv.png",
    },
    
        
];

export default function Course(){
    return (
    <div className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-3 gap-12 mt-10">
  {courseinfo.map((course, index) => {
    // Map index to Tailwind top spacing (7rem, 8rem, 9rem, etc.)
    const topClasses = [
      "top-28", // 7rem
      "top-32", // 8rem
      "top-36", // 9rem
      "top-40", // 10rem
      "top-44", // 11rem
    ];

    return (
      <div
        key={index}
        className={`
          bg-blue-50 dark:bg-gray-900 border-2 border-blue-400 
          p-8 rounded-3xl shadow-lg transition duration-300 
          md:hover:scale-105 md:hover:shadow-2xl
          relative
          sticky ${topClasses[index] || "top-28"} 
          lg:static
        `}
        style={{
          zIndex: courseinfo.length + index, // keep stacking order
        }}
      >
        <div className="w-16 h-16 mx-auto flex items-center justify-center 
                        mb-6 mt-2 bg-blue-200 dark:bg-gray-800 rounded-full">
          <img src={course.icon} alt="Icon" className="w-8 h-8" />
        </div>
        <h3 className="text-2xl text-blue-500 font-bold text-center mb-4 kollektif-font">
          {course.title}
        </h3>
        <p className="text-gray-900 dark:text-orange-100 text-center futura-font leading-relaxed">
          {course.description}
        </p>
      </div>
    );
  })}
</div>




    )
}