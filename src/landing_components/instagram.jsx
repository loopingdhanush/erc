import React from 'react';
import v1 from '../assets/gif1.gif'
import v2 from '../assets/gif2.gif'
import v3 from '../assets/gif3.gif'
import v4 from '../assets/gif4.gif'
import v5 from '../assets/gif5.gif'
import v6 from '../assets/gif6.gif'

import instagram from '../assets/instagram.svg'
import youtube from '../assets/youtube.svg';
import facebook from '../assets/facebook.svg';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from "swiper/modules";
import 'swiper/css';
import "swiper/css/navigation";

const Videos = [
    {
        video: v1,
        link: "https://www.instagram.com/easyexamacademy_/reel/DLCtoe4P2EB/"
    },
    {
        video: v2,
        link: "https://www.instagram.com/easyexamacademy_/reel/DLH2h5LP7K8/"
    },
    {
        video: v3,
        link: "https://www.instagram.com/easyexamacademy_/reel/DJ9JW95O7_w/"
    },
    {
        video: v4,
        link: "https://www.instagram.com/easyexamacademy_/reel/DMXrKKhN4GN/"
    },
    {
        video: v5,
        link: " https://www.instagram.com/easyexamacademy_/reel/DKuH7d3yj38/"
    },
    {
        video: v6,
        link: " https://www.instagram.com/easyexamacademy_/reel/DI3qB7ENHfZ/"
    }
]

export default function Instagram() {
    return(
        <section className='md:mt-20 md:mb-20 mt-10 mb-10'> 
        <div className='max-w-5xl mx-auto px-6 py-12 text-center'>
            <h2 className='text-4xl md:text-5xl text-orange-500  font-bold kollektif-font'>Learn with short and powerful Videos</h2>
            <p className='text-gray-900 dark:text-orange-100 mt-4 text-xl mb-12 futura-font'> Follow our founder on Instagram and Youtube for bite-sized educational content, exam tips, and learning strategies that make a real impact.</p>

            <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-8 pb-8">
                
                <a
                    href="https://www.instagram.com/easyexamacademy_/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" flex items-center bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-2xl px-4 py-2 shadow-lg "
                >
                    <img src={instagram} alt="Instagram" className="w-6 h-6 mr-2" />
                    <span className="futura-font text-sm md:text-base font-semibold">
                    Follow us on Instagram
                    </span>
                </a>

                <a
                    href="https://www.youtube.com/@EasyExamAcademy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center bg-gradient-to-r from-red-500 to-red-600 text-white rounded-2xl px-4 py-2 shadow-lg "
                >
                    <img src={youtube} alt="YouTube" className="w-6 h-6 mr-2" />
                    <span className="futura-font text-sm md:text-base font-semibold">
                    Subscribe on YouTube
                    </span>
                </a>

                <a
                    href="https://www.facebook.com/p/Easy-Exam-Academy-61569184779655/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" flex items-center bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl px-4 py-2 shadow-lg "
                >
                    <img src={facebook} alt="YouTube" className="w-6 h-6 mr-2" />
                    <span className="futura-font text-sm md:text-base font-semibold">
                    Follow on Facebook
                    </span>
                </a>

            </div>

            <div className="max-w-5xl mx-auto pb-12 ">
                    <div className="rounded-lg shadow-lg">
                        <iframe
                        className="w-full h-64 md:h-96 rounded-lg"
                        src="https://www.youtube.com/embed/kldX6toZJwk"
                        title="Explore the Features of Our Website: Online Sessions, Notes &amp; More"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        ></iframe>
                    </div>
                </div>


                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={20}
                    loop={true}  
                    speed={2000}
                    breakpoints={{
                        0: { slidesPerView: 2 },
                        640: { slidesPerView: 2 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 4 },
                    }}
                    autoplay={{
                        delay: 0,                
                        disableOnInteraction: false,
                    }}
                    
                >
                    {Videos.map((item)=>(  
                    <SwiperSlide>
                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                        <div className="rounded-xl overflow-hidden shadow-lg w-70 mx-auto">
                        <img
                            src={item.video}
                            alt="Educational Reel Preview"
                            className="w-full h-auto"/>
                        </div>
                        </a>
                    </SwiperSlide>
                    ))}

                </Swiper>

                


        </div>

        
        </section>
    )
}