import { useState, useEffect } from "react";
import logoFull from "../assets/main_club_logo.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function handleClickOutside(event) {
      if (!event.target.closest(".relative")) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Navbar */}
      <motion.div
        className="z-50"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] md:w-[95%] max-w-7xl bg-white/80 backdrop-blur-md shadow-lg border border-[#374291]/30 px-6 py-1 rounded-2xl">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <a href="/">
                <img src={logoFull} className="h-12 rounded-full" alt="Logo" />
              </a>
            </div>

            {/* Desktop buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="font-medium border-r border-gray-800 pr-4">
                Home
              </button>
              <button onClick={() => scrollTo("about")} className="font-medium border-r border-gray-800 pr-4">
                About Us
              </button>
              <button onClick={() => scrollTo("benefits")} className="font-medium border-r border-gray-800 pr-4">
                Benefits
              </button>
              <button onClick={() => scrollTo("faq")} className="font-medium">
                FAQ
              </button>
            </div>

            {/* Desktop Contact */}
            <button
              onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })}
              className="hidden lg:block text-sm font-semibold text-[#007cc2] border-2 border-[#007cc2] bg-blue-100 shadow-sm hover:shadow-lg transition duration-300 ease-in-out rounded-xl px-4 py-1 h-8"
            >
              Contact Us
            </button>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center">
              <button onClick={() => setIsOpen(true)} className="text-gray-600 dark:text-gray-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-white text-black shadow-lg transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 z-50 p-6 flex flex-col gap-4`}
      >
        <button onClick={() => setIsOpen(false)} className="mb-4 self-end">
          <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Mobile buttons (same as desktop) */}
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="font-medium cursor-pointer">
          Home
        </button>
        <button onClick={() => scrollTo("about")} className="font-medium cursor-pointer">
          About Us
        </button>
        <button onClick={() => scrollTo("benefits")} className="font-medium cursor-pointer">
          Benefits
        </button>
        <button onClick={() => scrollTo("faq")} className="font-medium cursor-pointer">
          FAQ
        </button>

        <button
          onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })}
          className="font-semibold text-[#007cc2] border-2 border-[#007cc2] bg-blue-100 shadow-sm hover:shadow-lg transition duration-300 ease-in-out rounded-xl px-4 py-1 mt-4"
        >
          Contact Us
        </button>
      </div>
    </>
  );
}
