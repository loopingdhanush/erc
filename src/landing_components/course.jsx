import React from "react";
import { motion } from "framer-motion";

const courseinfo = [
  {
    title: "A Strong Community",
    description: "Stay connected through our dedicated WhatsApp group where members share progress, tips, and motivation every day.",
    icon: "https://img.icons8.com/pulsar-line/100/1E88E5/people-working-together.png",
  },
  {
    title: "Structured Training Plans",
    description: "From Couch to 5K to Half Marathon we’ve got tried and tested training programs to help you reach your goals step by step.",
    icon: "https://img.icons8.com/pulsar-line/100/1E88E5/barbell.png",
  },
  {
    title: "Race-Day Convenience",
    description: "No more waiting in long queues. Our club representative collects bibs in advance, so you can focus on running, not logistics.",
    icon: "https://img.icons8.com/pulsar-line/100/1E88E5/suv.png",
  },
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
    description: "Show your pride with a personalized runners T-shirt featuring your name and our club logo.",
    icon: "https://img.icons8.com/pulsar-line/100/1E88E5/t-shirt.png",
  },
];

export default function Course({id}) {
  return (
    <section id={id} className="relative bg-white ">
      <div className="mx-4 md:pt-20 pt-10">
        
        <motion.h2
          className="kollektif-font text-3xl md:text-5xl font-bold 
                     text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 
                     text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="text-lg md:text-xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-600 pb-2">
          Benefits
        </h1>
          Why Join Erode Runners?
        </motion.h2>

        <motion.p
          className="text-xl text-gray-800 dark:text-orange-100 text-center max-w-3xl mx-auto mt-8 mb-6 md:mb-12 futura-font"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Being part of our club isn’t just about running, it’s about running smarter, together.
        </motion.p>

        <div className="max-w-6xl mx-auto px-6 md:py-12 py-4  grid grid-cols-1 lg:grid-cols-3 gap-12">
          {courseinfo.map((course, index) => (
            <motion.div
              key={index}
              className="bg-blue-50 dark:bg-gray-900 border-2 border-blue-400 
                         p-8 rounded-3xl shadow-lg transform transition duration-300 
                         hover:scale-105 hover:shadow-2xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
