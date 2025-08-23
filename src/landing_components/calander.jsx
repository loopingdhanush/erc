import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";


const events = {
  "2025-07-06": [
    "International Club BHEL",
    "Secunderabad.",
  ],
  "2025-07-13": ["Sunday Long Run | BOTANICAL GARDEN asfaf"],
  "2025-07-20": [
    "NALLAGANDLA",
    " Nagole",
  ],
  "2025-07-27": [
    "Save the Rock Run @ Fakhruddin Gutta, Khajaguda",
  ],
  "2025-08-03": ["Necklace Road"],
  "2025-08-10": ["KBR Park"],
};

function formatMonth(date) {
  return date.toLocaleString("default", { month: "long", year: "numeric" });
}

export default function CalendarEvents() {
  const [currentMonth, setCurrentMonth] = useState(new Date); 

  const filteredEvents = Object.keys(events)
    .filter((date) => {
      const d = new Date(date);
      return (
        d.getMonth() === currentMonth.getMonth() &&
        d.getFullYear() === currentMonth.getFullYear()
      );
    })
    .sort();

  const prevMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1)
    );
  };

  const nextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1)
    );
  };

  return (
<section className="px-6 md:pt-24 pt-12">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center md: gap-10">
    
    {/* Heading */}
    <div className=" text-center lg:text-left ">
      <h2 className="kollektif-font text-3xl md:text-5xl font-bold 
                     text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
        Events Calander
      </h2>
      <p className="mt-4 text-gray-700 dark:text-gray-300 futura-font max-w-md mx-auto lg:mx-0">
        Stay updated with our latest runs, training sessions, and community activities.
      </p>
    </div>

    {/* Calendar */}
    <div className="lg:w-1/2 flex justify-center w-full">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl overflow-hidden border border-blue-500">
        
     
        <div className="bg-blue-500 text-white text-center py-3 font-semibold text-lg">
          Event's Calendar
        </div>

     
        <div className="flex items-center justify-between px-4 py-3 border-b bg-gray-50">
          <button 
            onClick={prevMonth} 
            className="p-2 hover:bg-blue-100 rounded-full transition"
          >
            <ChevronLeft className="w-5 h-5 text-blue-600" />
          </button>
          <span className="font-semibold text-gray-800">{formatMonth(currentMonth)}</span>
          <button 
            onClick={nextMonth} 
            className="p-2 hover:bg-blue-100 rounded-full transition"
          >
            <ChevronRight className="w-5 h-5 text-blue-600" />
          </button>
        </div>

      
        <div className="h-72 overflow-y-auto">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((date) => {
              const day = new Date(date).getDate();

              return (
                <div key={date}>
                  {events[date].map((event, i) => (
                    <div 
                      key={i} 
                      className="grid grid-cols-6 items-center px-4 py-3 border-b 
                                 hover:bg-blue-50 transition cursor-pointer"
                    >
                      <div className="mr-2 text-blue-600 font-bold col-span-1 text-center text-lg">
                        {String(day).padStart(2, '0')}
                      </div>
                      <div className="col-span-5 text-gray-800">{event}</div>
                    </div>
                  ))}
                </div>
              );
            })
          ) : (
            <p className="text-gray-500 text-center mt-10">
              No events scheduled for this month.
            </p>
          )}
        </div>
      </div>
    </div>
  </div>
</section>


  );
}
