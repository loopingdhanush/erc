import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const events = {
  "2025-07-06": ["Hyderbad Marathon - 2025"],
  "2025-08-13": ["Erode Marathon - 2025"],
  "2025-08-20": ["Salem Marathon - 2025"],
  "2025-07-27": ["Kangayam Marathon - 2025"],
  "2025-08-03": ["Senthil Marathon - 2025"],
  "2025-08-10": ["Erode Runners - Club Run"],
};

function formatMonth(date) {
  return date.toLocaleString("default", { month: "long", year: "numeric" });
}

export default function CalendarEvents() {
  const [currentMonth, setCurrentMonth] = useState(new Date());

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
    <motion.section
      className=" md:w-[400px]"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className=" flex flex-col items-center justify-center ">
        

        <motion.div
          className=" flex justify-center w-full"
          initial={{ opacity: 0}}
          whileInView={{ opacity: 1}}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="w-full max-w-md md:mx-0 mx-2 bg-white shadow-xl rounded-2xl overflow-hidden border border-blue-500">

            <div className="bg-blue-500 text-white text-center py-2 font-bold text-lg">
              Event's Calendar
            </div>

            <div className="flex items-center justify-between px-4 py-1 border-b bg-gray-50">
              <button
                onClick={prevMonth}
                className="p-2 hover:bg-blue-100 rounded-full transition"
              >
                <ChevronLeft className="w-5 h-5 text-blue-600" />
              </button>
              <span className="font-semibold text-gray-800">
                {formatMonth(currentMonth)}
              </span>
              <button
                onClick={nextMonth}
                className="p-2 hover:bg-blue-100 rounded-full transition"
              >
                <ChevronRight className="w-5 h-5 text-blue-600" />
              </button>
            </div>

            <div className="h-72 overflow-y-auto">
              {filteredEvents.length > 0 ? (
                filteredEvents.map((date, idx) => {
                  const day = new Date(date).getDate();

                  return (
                    <div
                  
                    >
                      {events[date].map((event, i) => (
                        <div
                          key={i}
                          className="grid grid-cols-6 items-center px-4 py-3 border-b 
                                     hover:bg-blue-50 transition cursor-pointer"
                        >
                          <div className="mr-2 text-blue-600 font-bold col-span-1 text-center text-lg">
                            {String(day).padStart(2, "0")}
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
       </motion.div>
      </div>
    </motion.section>
  );
}
