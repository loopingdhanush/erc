import React from "react";
import logo from "./assets/logo_full.png";

export default function Contact() {
    return (
        <section>
            <div className="mx-auto px-4 py-4 mt-12 max-w-6xl">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[100px] bg-orange-300 opacity-40 rounded-b-full blur-2xl pointer-events-none z-0"></div>

                <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-2xl mb-10 flex flex-row items-center border-2 border-orange-200 dark:border-orange-500">
                <div className="flex items-center justify-center bg-white dark:bg-gray-800 bg-opacity-80 rounded-full shadow-md mr-8">
                    <img src={logo} alt="logo" className="md:w-20 w-12" />
                </div>
                <div>
                    <h1 className="md:text-5xl text-4xl font-bold mb-0 drop-shadow kollektif-font text-gray-900 dark:text-white">
                    Contact Us
                    </h1>
                    <p className="text-base text-gray-500 dark:text-gray-300 mt-2 font-medium futura-font">
                    We'd love to hear from you. Reach out using the details below.
                    </p>
                </div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg ">
                <ul className="space-y-4 text-lg text-gray-800 dark:text-gray-200 futura-font">
                    <li>
                    <span className="font-semibold">Email :</span> <br></br><a href="mailto:admin@easyexamacademy.com" className="text-xl text-orange-500 hover:underline">admin@easyexamacademy.com</a>
                    </li>
                    <li>
                    <span className="font-semibold">Phone :</span> <br></br><a href="tel:+917708568206" className="text-md text-orange-500 hover:underline">+91 77085 68206</a>
                    </li>
                </ul>
                </div>
            </div>
        </section>

    )}