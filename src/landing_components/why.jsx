import React from 'react';
import v1 from '../assets/window1.png'
import v2 from '../assets/window2.png'
import v3 from '../assets/window3.png'

export default function Why() {
    return(
    <section>
            <div className="max-w-6xl mx-auto px-6 py-12 text-center md:mt-20 md:mb-20 mt-10 mb-10">
            <h2 className="kollektif-font text-4xl md:text-5xl font-bold text-orange-500 text-center max-w-2xl mx-auto">
                Explore Our Complete Learning Ecosystem
            </h2>
            <p className="text-xl text-gray-900 dark:text-orange-100 text-center max-w-3xl mx-auto mt-8 mb-16 md:mb-32 futura-font">
            At Easy Exam Academy, we offer more than just classes, we provide a complete support system to help students excel
        </p>

        

        <div className='grid grid-cols-1 md:grid-cols-2 my-16 md:gap-x-8'>
            <div className="flex flex-col justify-center text-left mb-6 md:mb-0 ">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-orange-500 mb-4">Live Interactive Classes</h2>
                <p className="text-gray-900 text-xl dark:text-orange-100 mb-6 max-w-md futura-font">
                    Live Interactive online classes for Classes 10–12, NEET & JEE. All sessions are recorded for easy revision</p>
            </div>
            <img src={v1} alt="Live Classes" className="w-full h-auto rounded-lg shadow-xl border-2 border-orange-300 mb-6 md:mb-0 " />
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 my-16 lg:gap-x-8 ">
            <div className="order-1 md:order-2 flex flex-col justify-center text-right mb-6 md:mb-0 ">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-orange-500 mb-4">MCQ Test & Class Platform</h2>
                <p className="text-gray-900 text-xl dark:text-orange-100 mb-6 ml-8 futura-font">An online platform for MCQ practice, performance tracking, and class scheduling, everything in one place.</p>
            </div>
            <img src={v2} alt="Live Classes" className="w-full h-auto rounded-lg shadow-xl order-2 md:order-1 border-2 border-orange-300"/>
        </div>



        <div className='grid grid-cols-1 md:grid-cols-2 md:gap-x-8'>
            <div className="flex flex-col justify-center text-left mb-6 md:mb-0">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-orange-500 mb-4">Study Materials & Resources</h2>
                <p className="text-gray-900 text-xl dark:text-orange-100 mb-6 max-w-md futura-font">Access PDF notes, solved examples, revision sheets, and videos. all aligned with the latest syllabus and exams.</p>
            </div>
            <img src={v3} alt="Live Classes" className="w-full h-auto rounded-lg shadow-xl mb-6 md:mb-0 border-2 border-orange-300" />
        </div>



        </div>
    </section>)
}