import React from "react";

const WEEK_DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const Calendar = ({ date }) => {
  const currentYear = date.getFullYear();
  const currentMonth = date.getMonth();
  const highlightedDate = date.getDate();

  const startDayIndex = new Date(currentYear, currentMonth, 1).getDay();
  const totalDaysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  
  const daysArray = [];
  for (let i = 0; i < startDayIndex; i++) daysArray.push(null);
  for (let day = 1; day <= totalDaysInMonth; day++) daysArray.push(day);

 
  const weekRows = [];
  for (let i = 0; i < daysArray.length; i += 7) {
    weekRows.push(daysArray.slice(i, i + 7));
  }

  return (
    <div className="max-w-sm mx-auto mt-10 p-4 border rounded-lg shadow-sm bg-white">

      <div className="text-center text-lg font-semibold mb-2">
        {date.toLocaleString("default", { month: "long" })} {currentYear}
      </div>

      <div className="grid grid-cols-7 text-center text-sm font-medium text-gray-600 border-b pb-1 mb-2">
        {WEEK_DAYS.map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>

      <div className="grid grid-cols-7 text-center gap-y-1">
        {weekRows.map((week, weekIndex) =>
          week.map((day, dayIndex) => (
            <div
              key={`${weekIndex}-${dayIndex}`}
              className={`py-2 rounded ${
                day === highlightedDate
                  ? "bg-blue-500 text-white font-semibold"
                  : "text-gray-800"
              }`}
            >
              {day || ""}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Calendar;
