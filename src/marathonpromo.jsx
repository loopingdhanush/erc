import React from "react";
import { motion } from "framer-motion";
import marathonPoster from "./assets/membership.jpg";

export default function MarathonPromo() {
  return (
    <motion.div
      className="relative h-full bg-white rounded-2xl border shadow-lg overflow-hidden"
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
      <div className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-md px-4 md:px-6 py-3 flex flex-row justify-between rounded-t-3xl">
        {/* Text */}
        
        <div>
          <h3 className="text-sm md:text-xl font-bold text-white">
            Erode Runners Club
          </h3>
          <p className="text-xs font-bold text-white">
            Membership Registration
          </p>
        </div>
        

        {/* Button */}
        <a
          href="https://forms.gle/TGfAd2FFHpeP65xf7"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-200 text-black px-4 py-2  text-sm md:text-xl rounded-lg font-bold hover:bg-blue-100 transition"
        >
          Register Now
        </a>
        
      </div>
    </motion.div>
  );
}