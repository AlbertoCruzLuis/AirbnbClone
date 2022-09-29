import dayjs from "dayjs";
import type { FC } from "react";

import { DayGrid } from "@/features/DateRangePicker/components/DayGrid";
import { WeekHeader } from "@/features/DateRangePicker/components/WeekHeader";

type ICalendarMonthProps = {
  year: number;
  month: number;
  startDate: string;
  endDate: string;
  hoveredDate: string | null;
  onStartDateChange: (date: string) => void;
  onEndDateChange: (date: string) => void;
  onHoveredDateChange: (date: string) => void;
};

export const CalendarMonth: FC<ICalendarMonthProps> = ({
  year,
  month,
  startDate,
  endDate,
  hoveredDate,
  onStartDateChange,
  onEndDateChange,
  onHoveredDateChange,
}) => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-center pt-2 pb-4">
        <span className="font-bold">
          {dayjs(`${year}-${month}`).format("MMMM [de] YYYY")}
        </span>
      </div>
      <WeekHeader />
      <DayGrid
        year={year}
        month={month}
        startDate={startDate}
        endDate={endDate}
        hoveredDate={hoveredDate}
        onStartDateChange={onStartDateChange}
        onEndDateChange={onEndDateChange}
        onHoveredDateChange={onHoveredDateChange}
      />
    </div>
  );
};
