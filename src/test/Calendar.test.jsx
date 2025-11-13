import React from "react";
import { render, screen } from "@testing-library/react";
import Calendar from "../components/Calendar";

describe("Calendar Component", () => {
  test("renders the correct month and year", () => {
    const sampleDate = new Date(2022, 9, 3); 
    render(<Calendar date={sampleDate} />);
    expect(screen.getByText("October 2022")).toBeInTheDocument();
  });

  test("renders all days of the week", () => {
    const sampleDate = new Date();
    render(<Calendar date={sampleDate} />);

    const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    weekDays.forEach((day) => {
      expect(screen.getByText(day)).toBeInTheDocument();
    });
  });

  test("highlights the correct date with Tailwind classes", () => {
    const sampleDate = new Date(2022, 9, 3); 
    render(<Calendar date={sampleDate} />);
    const highlightedCell = screen.getByText("3");

    expect(highlightedCell.className).toMatch(/bg-blue-500/);
    expect(highlightedCell.className).toMatch(/text-white/);
  });

  test("does not highlight other dates", () => {
    const sampleDate = new Date(2022, 9, 3);
    render(<Calendar date={sampleDate} />);
    const nonHighlightedCell = screen.getByText("4");

    expect(nonHighlightedCell.className).not.toMatch(/bg-blue-500/);
    expect(nonHighlightedCell.className).not.toMatch(/text-white/);
  });
});
