import { memo, useId } from "react";

const daysOfWeek = ["lu", "ma", "mi", "ju", "vi", "sa", "do"];

const WeekHeaderComponent = () => {
  const id = useId();

  return (
    <div className="grid grid-cols-7">
      {daysOfWeek.map((day, index) => (
        <small key={`${id}-${index}`} className="w-9 text-center">
          {day}
        </small>
      ))}
    </div>
  );
};

export const WeekHeader = memo(WeekHeaderComponent);
