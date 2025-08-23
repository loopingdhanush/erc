import logoFull from "../assets/main_club_logo.png";

export default function Footer() {
  return (
    <footer className=" bg-black py-10 px-6">

        <div className="grid lg:grid-cols-2 grid-cols-1 max-w-6xl mx-auto md:gap-x-8 ">

            <div className="lg:text-left mb-2 lg:mb-0">
                <div className="flex items-center  space-x-2">
                            <a href="/">
                              <img
                                src={logoFull}
                                className="h-10 rounded-full"
                                alt="Logo"
                              />
                            </a>
                            <div className="flex flex-col items-start">
                              <h1 className="text-white kollektif-font text-md md:text-xl font-bold leading-none">
                                Easy Exam Academy
                              </h1>
                              <p className="text-orange-400 md:text-[9.2px] text-[7.5px] kollectif-font font-bold leading-none md:pb-1 md:pt-0 pt-1">
                                Empowering Young Minds, Inspiring Futures!
                              </p>
                            </div>
                          </div>
                <p className="text-gray-400 mt-2 futura-font max-w-md">
                    Easy Exam Academy is a leading online tutoring platform that connects students with expert tutors to enhance learning experiences
                </p>
            </div>

            <div className="md:grid grid-cols-2">

            <div className="space-y-1 ">
                <h3 className="text-white font-semibold mb-3 md:mt-0 mt-3 kollektif-font">Important Links</h3>
                <ul>
                <li><a href="https://drive.google.com/file/d/1pJHxVdQpo-JXanOiTGfpKbFOmNSaHveG/view?usp=drive_link" className="text-gray-400 hover:text-white transition-colors duration-200 futura-font">Brochure</a></li>
                <li><a href="https://drive.google.com/file/d/1u613YeBebKnWPXJFBjpdcioZoqGokjTW/view?usp=drive_link" className="text-gray-400 hover:text-white transition-colors duration-200 futura-font">Terms Conditions</a></li>
                <li><a href="https://drive.google.com/file/d/1aFQ_KDCDqC9XcB9eevEcwpD3fTgiiKtW/view?usp=sharing" className="text-gray-400 hover:text-white transition-colors duration-200 futura-font">Attendance Policy</a></li>
                </ul>
            </div>

            <div>
                <h3 className="text-white font-semibold mb-3 md:mt-0 mt-3 kollektif-font">Contact</h3>
                <ul>
                    <li><p className="text-gray-400">Email : <a href="mailto:admin@easyexamacademy.com" className="hover:underline text-gray-400 hover:text-white futura-font">admin@easyexamacademy.com</a></p></li>
                    <li><p className="text-gray-400">Phone : <a href="tel:+917708568206" className="hover:underline text-gray-400 hover:text-white futura-font">+91 77085 68206</a></p></li>
                    <li><p className="text-gray-400 futura-font">Location : Erode, Tamil Nadu, India</p></li>
                </ul>
            </div>

            </div>

        </div>

        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-500 kollektif-font">
                © {new Date().getFullYear()} Thinkverse Technologies Private Limited
        </div>
        

    </footer>
  );
}
