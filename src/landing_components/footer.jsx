import logoFull from "../assets/main_club_logo.png";

export default function Footer() {
  return (
    <footer className="bg-black py-10 px-6">
      <div className="grid lg:grid-cols-2 grid-cols-1 max-w-6xl mx-auto md:gap-x-8 ">
        
        {/* Left side: Logo + About */}
        <div className="lg:text-left mb-2 lg:mb-0">
          <div className="flex items-center space-x-2">
            <a href="/">
              <img
                src={logoFull}
                className="h-10 rounded-full"
                alt="Logo"
              />
            </a>
            <div className="flex flex-col items-start">
              <h1 className="text-white kollektif-font text-md md:text-xl font-semibold leading-none">
                Erode Runners Club
              </h1>
            </div>
          </div>
          <p className="text-gray-400 mt-2 futura-font max-w-md">
            Erode Runners Club is a vibrant running community promoting
            fitness, health, and togetherness through events, training
            plans, and group runs.
          </p>
        </div>

        {/* Right side: Links + Contact */}
        <div className="md:grid grid-cols-2">
          {/* Quick Links */}
          <div className="space-y-1">
            <h3 className="text-white text-lg font-semibold mb-3 md:mt-0 mt-3 kollektif-font">
              Quick Links
            </h3>
            <ul>
              <li><a onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="text-gray-400 hover:text-white transition-colors duration-200 futura-font cursor-pointer">Home</a></li>
              <li><a onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })} className="text-gray-400 hover:text-white transition-colors duration-200 futura-font cursor-pointer">About Us</a></li>
              <li><a onClick={() => document.getElementById("benefits")?.scrollIntoView({ behavior: "smooth" })} className="text-gray-400 hover:text-white transition-colors duration-200 futura-font cursor-pointer">Benefits</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-3 md:mt-0 mt-3 kollektif-font">
              Contact Info
            </h3>
            <ul>
              <li>
                <p className="text-gray-400 futura-font">
                  Hotel West Land, <br></br>Opp. Senthil Multispeciality Hospital, <br />
                  399 B, Perundurai Rd, Nggo Colony, <br />
                  Erode, Tamil Nadu 638011
                </p>
              </li>
              <li>
                <p className="text-gray-100">
                  Phone: {" "}
                  <a
                    href="tel:+919750813438"
                    className="hover:underline text-gray-100 hover:text-white futura-font"
                  >
                    +919750813438
                  </a>
                </p>
              </li>
              <li>
                <p className="text-gray-100">
                  Email:{" "}
                  <a
                    href="mailto:eroderunnersclub@gmail.com"
                    className="hover:underline text-gray-100 hover:text-white futura-font"
                  >
                    eroderunnersclub@gmail.com
                  </a>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="mt-10 border-t border-gray-700 pt-6 px-6 flex flex-col md:flex-row items-center justify-between">
  {/* Left side - small text */}
  <p className="text-sm text-gray-500 mb-3 md:mb-0">
    Proudly made by students of <a className="hover:text-orange-300 transition fade-in-out"><span className="font-semibold">Easy Exam Academy</span></a>
  </p>

  {/* Right side - main copyright */}
  <p className="text-gray-500 kollektif-font text-center md:text-right">
    © {new Date().getFullYear()} Erode Runners Club <br></br>All Rights Reserved
  </p>
</div>

    </footer>
  );
}
