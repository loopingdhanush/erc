import React from "react";
import member2 from "../assets/member1.jpg"; 
import member1 from "../assets/member2.jpg";
import member3 from "../assets/member3.jpg";
import president from "../assets/president.jpg";
import presidentPhoto from "../assets/member1.jpg"; 

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
              src={member3}
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
<div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl overflow-hidden mt-16">
        <div className="md:flex items-center">
          {/* Image */}
          <div className="md:w-1/3 flex justify-center bg-gray-50 p-4">
            <img
              src={president}
              alt="President"
              className="w-40 h-56 object-cover rounded-xl shadow-md"
            />
          </div>
          {/* Content */}
          <div className="p-6 md:w-2/3">
            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#007CC2] to-blue-600">
              President
            </h2>
            <h3 className="text-lg font-semibold text-gray-800 mt-2">
              Dr. Arunandhichelvan
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              The Heartbeat of Erode Runners Club
            </p>
            <p className="text-gray-700 leading-relaxed">
              More than a Surgical Oncologist, Dr. Arunandhichelvan is a runner
              at heart. A true pillar of the Erode Runners Club, he has inspired
              countless runners to lace up and chase their dreams. From several
              Full Marathons to grueling Ultra Marathons, his journey is a
              testament to endurance, discipline, and the joy of running.
            </p>
          </div>
        </div>
      </div>
</div>
    </section>
  );
}
