import React from "react";
import member2 from "../assets/member1.jpg"; // Dr.G.MADHU SHANKAR
import member1 from "../assets/member2.jpg"; // Mr.V.Krishnamoorthy
import presidentPhoto from "../assets/member1.jpg"; // Temporary - replace with formal photo later

export default function FoundingMembers() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#007CC2] to-blue-600 mb-8">
          Founding Members
        </h2>

        {/* Founding Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Member 1 */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden">
            <img
              src={member1}
              alt="Dr.G.MADHU SHANKAR"
              className="w-full aspect-video object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">
                Dr.G.Madhu Shankar
              </h3>
              <p className="text-sm text-gray-600">Founding Member</p>
            </div>
          </div>

          {/* Member 2 */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden">
            <img
              src={member2}
              alt="Mr.V.Krishnamoorthy"
              className="w-full aspect-video object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">
                Mr.V.Krishnamoorthy
              </h3>
              <p className="text-sm text-gray-600">Founding Member</p>
            </div>
          </div>

          {/* Member 3 Placeholder */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden">
            <img
              src="https://via.placeholder.com/800x450?text=Photo+Coming+Soon"
              alt="Placeholder"
              className="w-full aspect-video object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">
                Dr.Arunanadhichelvan
              </h3>
              <p className="text-sm text-gray-600">Founding Member</p>
            </div>
          </div>
        </div>

        {/* President Spotlight */}
        <div className="mt-16 text-left bg-white shadow-lg rounded-2xl overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img
              src="https://via.placeholder.com/800x450?text=Photo+Coming+Soon"
              alt="Placeholder"
              className="w-full aspect-video object-cover"
            />
            </div>
            <div className="p-8 md:w-1/2 flex flex-col justify-center">
              <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#007CC2] to-blue-600 mb-2">
                President
              </h2>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Dr. Arunandhichelvan <br></br> The Heartbeat of Erode Runners Club
              </h3>
              <p className="text-gray-700 leading-relaxed">
                More than a Surgical Oncologist, Dr. Arunandhichelvan is a
                runner at heart. A true pillar of the Erode Runners Club, he has
                inspired countless runners to lace up and chase their dreams.
                From several Full Marathons to grueling Ultra Marathons, his
                journey is a testament to endurance, discipline, and the joy of
                running. With every mile he conquers, he proves that passion and
                perseverance can push boundaries on the road and in life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
