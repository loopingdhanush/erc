import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const events = {
  "2025-08-24": [{ title: "Hyderabad Marathon - 2025", url: "https://nmdchyderabadmarathon.com/" }],
  "2025-11-09": [{ title: "Erode Marathon - 2025", url: "https://erodemarathon.com/" }],
  "2025-08-10": [{ title: "Kangayam Marathon - 2025", url: "https://kangayammarathon.com/" }],
  "2025-09-05": [{ title: "Erode Runners Club - 5 KM Awareness Run", url: "https://kangayammarathon.com/" }],
};

function formatMonth(date) {
  return date.toLocaleString("default", { month: "long", year: "numeric" });
}

export default function CalendarEvents() {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const daysInMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth() + 1,
    0
  ).getDate();

  const firstDayIndex = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth(),
    1
  ).getDay();

  const eventDates = Object.keys(events).map((d) => new Date(d).toDateString());
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const today = new Date().toDateString();

  return (
    <div className="max-w-md mx-auto md:mx-0 md:max-w-[400px] bg-white rounded-2xl border shadow-lg p-4 ">
      {/* Header */}
      <div className="flex justify-between items-center border-b pb-2">
        <button onClick={prevMonth}><ChevronLeft /></button>
        <h2 className="font-bold">{formatMonth(currentMonth)}</h2>
        <button onClick={nextMonth}><ChevronRight /></button>
      </div>

      {/* Content Wrapper with fixed min-height */}
      <div className="mt-4 min-h-[300px] flex flex-col">
        {!selectedDate ? (
          <>
            {/* Day names */}
            <div className="grid grid-cols-7 text-center font-semibold text-gray-600 mb-2">
              {dayNames.map((day, idx) => (
                <div key={idx}>{day}</div>
              ))}
            </div>

            {/* Dates - fixed 6 weeks (42 cells) */}
            <div className="grid grid-cols-7 gap-2 flex-1">
              {/* Empty slots before first day */}
              {Array.from({ length: firstDayIndex }).map((_, idx) => (
                <div key={idx}></div>
              ))}

              {/* Actual days */}
              {Array.from({ length: daysInMonth }, (_, i) => {
                const day = i + 1;
                const dateStr = new Date(
                  currentMonth.getFullYear(),
                  currentMonth.getMonth(),
                  day
                ).toDateString();

                const hasEvent = eventDates.includes(dateStr);

                return (
                  <div
                    key={day}
                    onClick={() => hasEvent && setSelectedDate(dateStr)}
                    className={`flex items-center justify-center p-2 rounded cursor-pointer transition
                      ${hasEvent ? "bg-blue-300 hover:bg-blue-200" : "bg-gray-50"}
                      ${dateStr === today ? "ring-2 ring-blue-600 font-bold" : ""}`}
                  >
                    <span>{day}</span>
                  </div>
                );
              })}

              {/* Extra empty slots after month ends */}
              {Array.from({
                length: 42 - (firstDayIndex + daysInMonth),
              }).map((_, idx) => (
                <div key={`end-${idx}`}></div>
              ))}
            </div>
          </>
        ) : (
          /* Event list */
          <div className="flex-1 flex flex-col">
            <button
              onClick={() => setSelectedDate(null)}
              className="text-blue-600 mb-2 border border-blue-500 px-3 py-1 rounded-xl flex items-center w-fit"
            >
              <ChevronLeft className="mr-1" /> Back
            </button>
            <h3 className="font-bold mb-2">
              Events on {new Date(selectedDate).toDateString()}
            </h3>
            <ul className="space-y-2">
              {events[
                Object.keys(events).find(
                  (d) => new Date(d).toDateString() === selectedDate
                )
              ]?.map((event, idx) => (
                <li
                  key={idx}
                  className="p-2 border rounded hover:bg-blue-50 transition"
                >
                  <a
                    href={event.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700"
                  >
                    {event.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
