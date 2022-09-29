import dayjs from "dayjs";

const getDayStartOfMonth = (year: number, month: number) => {
  return dayjs(`${year}-${month}-01`).day();
};

const getDayStartOfMonthWithMondayAsFirstDay = (
  year: number,
  month: number
) => {
  const day = getDayStartOfMonth(year, month);
  return day === 0 ? 6 : day - 1;
};

const getDaysInMonth = (year: number, month: number) => {
  return dayjs(`${year}-${month}`).daysInMonth();
};

/**
 * @param startDayInWeekOfMonth - (0: Monday, 6: Sunday)
 * @param endDayOfMonth - (28, 29, 30, 31)
 * @returns Array<Array<number | null>>
 */
const fillDaysInCalendar = (
  startIndexDayOfMonth: number,
  endDayOfMonth: number
) => {
  const days: Array<Array<number | null>> = [[]];

  const daysOfWeek = 7;
  const weekLength = (week: Array<number | null> | undefined) =>
    week ? week.length : 0;

  let day = 1;
  let week = 0;

  for (let i = 0; i < startIndexDayOfMonth; i += 1) {
    days[week]?.push(null);
  }

  while (day <= endDayOfMonth) {
    if (weekLength(days[week]) === daysOfWeek) {
      week += 1;
      days.push([]);
    }
    days[week]?.push(day);
    day += 1;
  }

  while (daysOfWeek > weekLength(days[week])) {
    days[week]?.push(null);
  }

  return days;
};

export const getDaysOfCalendar = (year: number, month: number) => {
  const startDayOfWeek = getDayStartOfMonthWithMondayAsFirstDay(year, month);
  const endDay = getDaysInMonth(year, month);
  return fillDaysInCalendar(startDayOfWeek, endDay);
};
