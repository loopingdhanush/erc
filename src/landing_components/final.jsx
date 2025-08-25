import React from "react";
import { Link } from "react-router-dom";

export default function Final(){
    return(
      <section className="py-16 px-4 text-center pt-40 pb-40 ">
  <div className="max-w-3xl mx-auto">
    <h2 className="text-3xl  md:text-4xl font-bold mb-4 kollektif-font">Ready to join?</h2>
    <p className="text-gray-900 text-xl dark:text-orange-100 text-lg mb-8 futura-font">Start your journey with Erode Runners Club and take the next step toward success.</p>
    
    <Link to="/contact" className="inline-block bg-[#007CC2] text-white px-5 py-2 rounded-full text-s font-semibold hover:bg-blue-700 transition kollektif-font">Join Now</Link>

    

  </div>
</section>
    )
}