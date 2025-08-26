import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is Erode Runners Club?",
    answer:
      "Erode Runners Club is a community of runners in Erode promoting fitness, marathons, and healthy lifestyle through group runs and events.",
  },
  {
    question: "How can I join the club?",
    answer:
      "You can join by registering through our website or contacting our club representative. Membership includes access to training plans, events, and community support.",
  },
  {
    question: "Do I need prior experience to participate?",
    answer:
      "No prior experience is required! We welcome runners of all levels and provide guidance to improve endurance and performance.",
  },
];

export default function FAQ({id}) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id={id} className="py-16 px-4 bg-[#007CC2]  text-white max-w-5xl mx-auto md:rounded-t-3xl">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 pb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-100 to-blue-100">
          Frequently Asked Questions
        </h2>

        <div className="flex flex-col gap-4 transition">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/10 rounded-2xl border border-white/20 p-4 cursor-pointer"
              onClick={() => toggle(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-md">{faq.question}</h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-white" />
                </motion.div>
              </div>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-3 text-gray-100 "
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
