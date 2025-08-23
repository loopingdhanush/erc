import { useState, useEffect } from "react";
import logoFull from "../assets/main_club_logo.png";

import { Link } from "react-router-dom";



export default function Navbar() {
 
  

  const [isOpen, setIsOpen] = useState(false);

  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
  function handleClickOutside(event) {
    if (!event.target.closest(".relative")) {
      setDropdownOpen(false);
    }
  }

  document.addEventListener("mousedown", handleClickOutside);
  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, []);


  

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50
                w-[90%] max-w-6xl 
                bg-white/80 backdrop-blur-md
                shadow-lg border border-[#374291]/30 
                px-6 py-1 rounded-2xl">
                  
        <div className="max-w-7xl mx-auto flex items-center justify-between">

       
          <div className="flex items-center  space-x-2">
            <a href="/">
              <img
                src={logoFull}
                className="h-12 rounded-full"
                alt="Logo"
              />
            </a>
            <div className="flex flex-col items-start">
              
              
            </div>
          </div>



          <div className="hidden lg:flex items-center space-x-4">
            <Link to="/" className="font-medium border-r border-gray-800 pr-4 ">Home</Link>
            <Link to="/Resources" className="font-medium  border-r border-gray-800 pr-4  "> Event Calander</Link>
            <Link to="/Resources" className="font-medium  ">Flagship Events</Link>
           </div>


            <Link to="/privileges" 
            className="hidden lg:block text-sm font-semibold text-white geist
            bg-blue-400 
            border border-blue-500 shadow-sm hover:shadow-lg transition duration-300 ease-in-out
            rounded-xl px-4 py-1.5 h-8">
            Contact Us</Link>

         

          
          

          
          <div className="lg:hidden flex items-center">
            <button onClick={() => setIsOpen(true)} className="text-gray-600 dark:text-gray-300">

              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16" />
              </svg>

            </button>
          </div>
        </div>
      </div>


      <div className={`fixed top-0 left-0 w-64 h-full bg-white dark:bg-gray-800 text-black dark:text-white shadow-lg transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 z-50`}>
        <div className="p-6 space-y-4">
          <button onClick={() => setIsOpen(false)} className="mb-4">

            <svg className="w-6 h-6 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M6 18L18 6M6 6l12 12" />
            </svg>

          </button>

          
          <Link to="/" className="block font-medium  " onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/Resources" className="block font-medium  " onClick={() => setIsOpen(false)}>Resources</Link>
          <Link to="/contact" className="block font-medium  " onClick={() => setIsOpen(false)}>Contact</Link>
          
          
          <hr className="border-gray-300 dark:border-gray-600" /> 
        </div>
      </div>

      
      <div className="h-16"></div>
    </>
  );
}
