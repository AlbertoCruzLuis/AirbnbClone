import classNames from "classnames";
import type { FC } from "react";
import { useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

import { CalendarMonth } from "../CalendarMonth";

type ICalendarMonthCarouselProps = {
  month: number;
  year: number;
  startDate: string;
  endDate: string;
  hoveredDate: string;
  onStartDateChange: (date: string) => void;
  onEndDateChange: (date: string) => void;
  onHoveredDateChange: (date: string) => void;
};

export const CalendarMonthCarousel: FC<ICalendarMonthCarouselProps> = ({
  month,
  year,
  startDate,
  endDate,
  hoveredDate,
  onStartDateChange,
  onEndDateChange,
  onHoveredDateChange,
}) => {
  const [currentMonth, setCurrentMonth] = useState(month);
  const [currentYear, setCurrentYear] = useState(year);

  const handleNext = () => {
    if (currentMonth === 12) {
      setCurrentMonth(1);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const handlePrev = () => {
    if (currentMonth === 1) {
      setCurrentMonth(12);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const buttonStyle = (direction: string) =>
    classNames(
      "absolute flex items-center justify-center w-8 h-8 bg-gray-100 border border-solid top-1 hover:bg-gray-200 focus:outline-none",
      {
        "left-1": direction === "left",
        "right-1": direction === "right",
      }
    );

  return (
    <div className="relative flex flex-col">
      <button
        className={buttonStyle("left")}
        aria-label="Previous Month"
        title="Previous Month"
        onClick={handlePrev}
      >
        <BsArrowLeft />
      </button>
      <button
        className={buttonStyle("right")}
        aria-label="Next Month"
        title="Next Month"
        onClick={handleNext}
      >
        <BsArrowRight />
      </button>
      <div className="flex overflow-hidden">
        <div className="flex gap-6">
          <CalendarMonth
            month={currentMonth}
            year={currentYear}
            hoveredDate={hoveredDate}
            startDate={startDate}
            endDate={endDate}
            onStartDateChange={onStartDateChange}
            onEndDateChange={onEndDateChange}
            onHoveredDateChange={onHoveredDateChange}
          />
          <CalendarMonth
            month={currentMonth + 1}
            year={currentYear}
            startDate={startDate}
            hoveredDate={hoveredDate}
            endDate={endDate}
            onStartDateChange={onStartDateChange}
            onEndDateChange={onEndDateChange}
            onHoveredDateChange={onHoveredDateChange}
          />
        </div>
      </div>
    </div>
  );
};
