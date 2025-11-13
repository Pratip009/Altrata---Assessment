import React from "react";

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const Calendar = ({ date }) => {
  const year = date.getFullYear();
  const month = date.getMonth();
  const selectedDay = date.getDate();

  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  
  const calendarCells = [];
  for (let i = 0; i < firstDayOfMonth; i++) calendarCells.push(null);
  for (let day = 1; day <= daysInMonth; day++) calendarCells.push(day);

  
  const weeks = [];
  for (let i = 0; i < calendarCells.length; i += 7) {
    weeks.push(calendarCells.slice(i, i + 7));
  }

  return (
    <div className="max-w-sm mx-auto mt-10 p-4 border rounded-lg shadow-sm bg-white">
    
      <div className="text-center text-lg font-semibold mb-2">
        {date.toLocaleString("default", { month: "long" })} {year}
      </div>

      <div className="grid grid-cols-7 text-center text-sm font-medium text-gray-600 border-b pb-1 mb-2">
        {DAYS.map((d) => (
          <div key={d}>{d}</div>
        ))}
      </div>

   
      <div className="grid grid-cols-7 text-center gap-y-1">
        {weeks.map((week, i) =>
          week.map((day, j) => (
            <div
              key={`${i}-${j}`}
              className={`py-2 rounded ${
                day === selectedDay
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
