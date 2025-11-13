import React from "react";
import Calendar from "./components/Calendar";

function App() {
  return (
    <div className="flex items-center justify-around p-5">
      <Calendar date={new Date(2022, 9, 3)} />
      <Calendar date={new Date(2020, 2, 23)} />
    </div>
  );
}

export default App;
