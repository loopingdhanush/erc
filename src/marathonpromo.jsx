import React from "react";
import { motion } from "framer-motion";
import marathonPoster from "./assets/promo.jpg";

export default function MarathonPromo() {
  return (
    <motion.div
      className="relative max-w-md mx-2 md:mx-auto md:mx-0 md:max-w-[400px] bg-white rounded-2xl border shadow-lg overflow-hidden"
      initial={{ opacity: 0, y: -40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Poster */}
      <img
        src={marathonPoster}
        alt="Erode Marathon 2025"
        className="w-full h-full object-cover"
        loading="eager"
        decoding="async"
      />

      {/* Overlay with CTA */}
      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/100 to-transparent p-4 pt-28 flex flex-row items-end justify-between">
        {/* Text */}
        <div>
          <h3 className="text-lg md:text-xl font-bold text-white">
            5 km Awareness Run
          </h3>
          <p className="text-sm text-gray-200">
            September 5, 2025 • Erode Collectorate
          </p>
        </div>

        {/* Button */}
        <a
          href="https://eroderunnersclub.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#007CC2] text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition border-2 border-blue-800"
        >
          Register Now
        </a>
      </div>
    </motion.div>
  );
}
