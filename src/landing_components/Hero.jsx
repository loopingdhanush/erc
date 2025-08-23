import React from "react";
import logoFull from "../assets/main_club_logo.png";
import CalendarEvents from "../landing_components/calander"

import heroimage from "../assets/heroimg.png"
import { Link } from "react-router-dom";


export default function Hero() {
  return (
    
  <div className="px-5" >
    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[200px] bg-blue-500 opacity-40 rounded-b-full blur-2xl pointer-events-none z-0"></div>
  <section className="relative mt-8 md:mt-16 mx-auto max-w-6xl flex flex-col bg-blue-100 rounded-3xl border border-blue-500 overflow-hidden" >

      <div className="absolute inset-0 pointer-events-none">
      
      </div>

      <div className="pt-12 px-6 flex flex-col">
      <span className=" text-md text-gray-900 dark:text-blue-100 mb-2 inline-block mx-auto text-center">
      <span className="font-semibold"> Erode’s</span> Running Community, Stronger Together</span>

      <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text 
               bg-gradient-to-r from-[#374291] via-blue-500 to-purple-600 
               tracking-tight leading-tight text-center drop-shadow-lg">
                  Live to Run <br />
  <span className="text-[#374291] drop-shadow-sm">Run to Live</span>
</h1>


 
      <p className="text-lg mt-5 md:text-xl text-gray-900 dark:text-blue-100 max-w-3xl mx-auto text-center">
        Taking even a small step towards your goal is more impactful than standing still. Be part of a community that moves together.
      </p>

      <div className="mt-8"></div>

      <div className="flex flex-wrap gap-4 mt-6 mx-auto justify-center items-center">
        <a><button className="w-48 px-5 py-2 text-sm font-semibold text-white bg-blue-500 border-2 border-blue-500 rounded-xl hover:bg-blue-600 transition-colors duration-200 cursor-pointer">
          Erode Marathon - 2025
        </button></a>
        <Link to="/contact"><button className="w-48 px-5 py-2 text-sm font-semibold text-blue-500 border-2 border-blue-500 rounded-xl hover:bg-blue-100 transition-colors duration-200 cursor-pointer">
          Contact Us
        </button></Link>
      </div> 
      </div> 

     
  
    <img src={heroimage} className=""></img>
   

    
    </section>
    </div>
  );
}
