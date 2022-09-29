import dayjs from "dayjs";

import { getDaysOfCalendar } from "@/features/DateRangePicker/utils/daysOfCalendar";

import { Day } from "../Day";

interface IDayGridProps {
  year: number;
  month: number;
  startDate: string;
  endDate: string;
  hoveredDate: string | null;
  onStartDateChange: (date: string) => void;
  onEndDateChange: (date: string) => void;
  onHoveredDateChange: (date: string) => void;
}

export const DayGrid = ({
  year,
  month,
  startDate,
  endDate,
  hoveredDate,
  onStartDateChange,
  onEndDateChange,
  onHoveredDateChange,
}: IDayGridProps) => {
  const days = getDaysOfCalendar(year, month);

  const getDateFromDay = (day: number) => {
    return dayjs(`${year}-${month}-${day}`).format("YYYY-MM-DD");
  };

  const handleDayClick = (day: number) => {
    const currentDate = getDateFromDay(day);

    // Change End Date
    if (startDate && !endDate && currentDate > startDate) {
      onEndDateChange(currentDate);
      return;
    }

    // Change Start Date & Reset End Date
    onStartDateChange(currentDate);
    onEndDateChange("");
  };

  const changeHoveredDate = (day: number) => {
    if (endDate) return;

    const currentDate = getDateFromDay(day);
    onHoveredDateChange(currentDate);
  };

  const isDaySelected = (dayDate: string) => {
    return dayDate === startDate || dayDate === endDate;
  };

  const isDayBetweenStartDateAndHoveredDate = (dayDate: string) => {
    if (!startDate || !hoveredDate) return false;
    return dayDate > startDate && dayDate < hoveredDate;
  };

  return (
    <table>
      <tbody>
        {days.map((week, fIndex) => (
          <tr className="flex" key={fIndex}>
            {week.map((day, sIndex) => (
              <td
                className="flex h-9 w-9 items-center justify-center p-0"
                key={sIndex}
              >
                {day && (
                  <Day
                    day={day}
                    isHighlighted={isDaySelected(getDateFromDay(day))}
                    isHovered={isDayBetweenStartDateAndHoveredDate(
                      getDateFromDay(day)
                    )}
                    handleClick={() => handleDayClick(day)}
                    handleHover={() => changeHoveredDate(day)}
                  />
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
