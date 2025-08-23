import React from 'react';

export default function About(){
    return(
        <section className="py-16 mt-12 md:mt-32 px-4 bg-blue-100">
            <div className="max-w-6xl mx-auto">
                <p className='text-center text-lg text-gray-900 font-semibold'>About Us</p>
                <h1 className='text-3xl md:text-4xl font-bold text-center text-blue-600'>The Journey of Erode Runners</h1>
                <p className='text-center pt-8 text-gray-900 mx-4'>
                 Dr. Madhushankar, Mr. Krishnamoorthy, and Dr. Arunandhi Chelvan 
                 establishes the Erode Runners Club with the goal of inspiring the people of Erode to participate in marathon races began with a modest group of ten runners and went on to motivate hundreds more to participate in marathons around the nation. Today, more than 200 runners actively participate in running and fitness activities as part of the Erode Runners Club’s lifestyle habit. We hope to encourage a fit and active lifestyle through our club, as well as enduring friendships and a feeling of community.   
                </p>

                    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Members */}
                    <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:scale-105 transition flex justify-center items-center gap-3">
                        <h2 className="text-4xl font-extrabold text-[#374291]">200+</h2>
                        <p className="mt-2 text-gray-700 font-medium">Active Members</p>
                    </div>

                    {/* Events */}
                    <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:scale-105 transition flex justify-center items-center gap-3">
                        <h2 className="text-4xl font-extrabold text-[#374291]">5+</h2>
                        <p className="mt-2 text-gray-700 font-medium">Marathons Conducted</p>
                    </div>

                    {/* Chapters */}
                    <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:scale-105 transition flex justify-center items-center gap-3">
                        <h2 className="text-4xl font-extrabold text-[#374291]">5+</h2>
                        <p className="mt-2 text-gray-700 font-medium">Runners’ Chapters</p>
                    </div>
                    </div>

                    </div>
        </section>

    
)}