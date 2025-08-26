import React from "react";
import { motion } from "framer-motion";
import heroimage from "../assets/heroimg.webp";

export default function Hero() {
  return (
    <div className="px-2">
      <section className="relative flex flex-col bg-gradient-to-t from-white to-white rounded-3xl border-2 border-[#374291] overflow-hidden h-screen">
        <div className="pt-12 px-6 flex flex-col relative z-10 flex-grow">
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-md text-gray-900 mb-2 inline-block mx-auto text-center"
          >
            <span className="font-semibold">Erode’s</span> Running Community,
            Stronger Together
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text 
              bg-gradient-to-r from-[#007CC2] to-blue-900
              tracking-tight leading-tight text-center drop-shadow-lg"
          >
            Live to Run <br />
            <span className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text 
              bg-gradient-to-r to-[#007CC2] from-blue-900
              tracking-tight leading-tight text-center drop-shadow-lg">
              Run to Live
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="text-lg mt-5 md:text-xl text-gray-900 max-w-3xl mx-auto text-center"
          >
            Taking even a small step towards your goal is more impactful than
            standing still. Be part of a community that moves together.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="flex flex-wrap gap-4 mt-8 mx-auto justify-center items-center"
          >
            <button className="w-48 px-5 py-2 text-sm font-semibold text-white bg-[#007CC2] border-2 border-blue-900 rounded-xl hover:bg-[#007cc2] transition-colors duration-200">
              Erode Marathon 2025
            </button>

            <button
              onClick={() =>
                window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })
              }
              className="w-48 px-5 py-2 text-sm font-semibold text-[#007cc2] border-2 border-[#007cc2] rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors duration-200"
            >
              Contact Us
            </button>
          </motion.div>
        </div>

        {/* Hero Image */}
        <div className="w-full overflow-hidden relative  md:mt-16 rounded-b-2xl flex-grow">
          <motion.img
            src={heroimage}
            alt="Hero runners"
            loading="eager"
            decoding="async"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="w-full h-full object-cover"
          />
        </div>
      </section>
    </div>
  );
}
