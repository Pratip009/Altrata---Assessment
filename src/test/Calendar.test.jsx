import React from "react";
import { render, screen } from "@testing-library/react";
import Calendar from "../components/Calendar";

describe("Calendar Component", () => {
  test("renders month and year correctly", () => {
    const testDate = new Date(2022, 9, 3); 
    render(<Calendar date={testDate} />);
    expect(screen.getByText("October 2022")).toBeInTheDocument();
  });

  test("renders days of the week", () => {
    const testDate = new Date();
    render(<Calendar date={testDate} />);

    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    days.forEach((day) => {
      expect(screen.getByText(day)).toBeInTheDocument();
    });
  });

  test("highlights the correct date using Tailwind classes", () => {
    const testDate = new Date(2022, 9, 3);
    render(<Calendar date={testDate} />);
    const highlighted = screen.getByText("3");

    
    expect(highlighted.className).toMatch(/bg-blue-500/);
    expect(highlighted.className).toMatch(/text-white/);
  });

  test("does not highlight other dates", () => {
    const testDate = new Date(2022, 9, 3);
    render(<Calendar date={testDate} />);
    const notHighlighted = screen.getByText("4");

   
    expect(notHighlighted.className).not.toMatch(/bg-blue-500/);
    expect(notHighlighted.className).not.toMatch(/text-white/);
  });
});
