import type { FC } from "react";

import { CalendarMonthCarousel } from "@/features/DateRangePicker/components/CalendarMonthCarousel";

type IDateRangePickerProps = {
  startDate: string;
  endDate: string;
  hoveredDate: string;
  onStartDateChange: (date: string) => void;
  onEndDateChange: (date: string) => void;
  onHoveredDateChange: (date: string) => void;
};

export const DateRangePicker: FC<IDateRangePickerProps> = ({
  startDate,
  endDate,
  hoveredDate,
  onStartDateChange,
  onEndDateChange,
  onHoveredDateChange,
}) => {
  return (
    <div className="flex gap-4">
      <CalendarMonthCarousel
        month={new Date().getMonth() + 1}
        year={new Date().getFullYear()}
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
