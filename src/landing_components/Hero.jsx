import React from "react";
import { motion } from "framer-motion";
import heroimage from "../assets/heroimg.png";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="px-2">
      

      <section className="relative flex flex-col bg-blue-100 rounded-3xl border border-blue-500 overflow-hidden">
        <div className="pt-12 px-6 flex flex-col relative z-10">
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-md text-gray-900 dark:text-blue-100 mb-2 inline-block mx-auto text-center"
          >
            <span className="font-semibold">Erode’s</span> Running Community,
            Stronger Together
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text 
              bg-gradient-to-r from-[#374291] via-blue-500 to-purple-600 
              tracking-tight leading-tight text-center drop-shadow-lg"
          >
            Live to Run <br />
            <span className="text-[#374291] drop-shadow-sm">Run to Live</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="text-lg mt-5 md:text-xl text-gray-900 dark:text-blue-100 max-w-3xl mx-auto text-center"
          >
            Taking even a small step towards your goal is more impactful than
            standing still. Be part of a community that moves together.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="flex flex-wrap gap-4 mt-6 mx-auto justify-center items-center"
          >
            <a>
              <button className="w-48 px-5 py-2 text-sm font-semibold text-white bg-blue-500 border-2 border-blue-500 rounded-xl hover:bg-blue-600 transition-colors duration-200 cursor-pointer">
                Erode Marathon - 2025
              </button>
            </a>
            <Link to="/contact">
              <button className="w-48 px-5 py-2 text-sm font-semibold text-blue-500 border-2 border-blue-500 rounded-xl hover:bg-blue-100 transition-colors duration-200 cursor-pointer">
                Contact Us
              </button>
            </Link>
          </motion.div>
        </div>

        {/* Hero Image at the bottom */}
        <motion.img
          src={heroimage}
          alt="Hero runners"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, delay: 0.4 }}
          className="w-full object-contain mt-8"
        />
      </section>
    </div>
  );
}
