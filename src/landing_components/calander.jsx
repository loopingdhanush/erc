import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

// Events with individual URLs
const events = {
  "2025-08-25": [
    { title: "Hyderabad Marathon - 2025", url: "https://nmdchyderabadmarathon.com/" },
  ],
  "2025-11-09": [
    { title: "Erode Marathon - 2025", url: "https://erodemarathon.com/" },
  ],
  "2025-07-20": [
    { title: "Salem Marathon - 2025", url: "https://example.com/salem" },
  ],
  "2025-08-10": [
    { title: "Kangayam Marathon - 2025", url: "https://kangayammarathon.com/" },
  ],
  "2025-07-03": [
    { title: "Senthil Marathon - 2025", url: "https://example.com/senthil" },
  ],
  "2025-07-10": [
    { title: "Erode Runners - Club Run", url: "https://example.com/clubrun" },
  ],
};

function formatMonth(date) {
  return date.toLocaleString("default", { month: "long", year: "numeric" });
}

export default function CalendarEvents() {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  // Filter events for current month
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
      className="max-w-full md:max-w-[400px] "
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div
        className="flex justify-center w-full"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <div className="w-full max-w-md md:mx-0 mx-2 bg-white shadow-xl rounded-2xl overflow-hidden border-2 border-[#374291]">
          {/* Header */}
          <div className="bg-[#374291] text-white text-center py-2 font-semibold text-md">
            Event's Calendar
          </div>

          {/* Month Navigation */}
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

          {/* Events List */}
          <div className="h-72 overflow-y-auto p-2 space-y-2">
            {filteredEvents.length > 0 ? (
              filteredEvents.map((date, idx) => {
                const day = new Date(date).getDate();
                return (
                  <div
                    key={idx}
                    className="flex items-center bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition border border-[#374291]"
                  >
                    {/* Date Box */}
                    <div className="w-16 bg-[#374291] text-white font-bold text-center py-3 flex-shrink-0">
                      {String(day).padStart(2, "0")}
                    </div>

                    {/* Event Title with Link */}
                    <div className="flex-1 px-4 py-3 text-gray-800">
                      {events[date].map((event, i) => (
                        <a
                          key={i}
                          href={event.url} // event-specific link
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium hover:text-blue-600 transition cursor-pointer block"
                        >
                          {event.title}
                        </a>
                      ))}
                    </div>
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
    </motion.section>
  );
}
