import classNames from "classnames";

interface IDayProps {
  day: number;
  isHighlighted: boolean;
  isHovered: boolean;
  handleClick: (day: number) => void;
  handleHover: (day: number) => void;
}

export const Day = ({
  day,
  isHighlighted,
  isHovered,
  handleClick,
  handleHover,
}: IDayProps) => {
  const dayStyles = () => {
    return classNames("h-full w-full", {
      "bg-mediumturquoise": isHovered,
      "hover:bg-gray-200": !isHighlighted,
      "bg-darkcyan": isHighlighted,
    });
  };

  return (
    <button
      aria-label={`${day}`}
      className={dayStyles()}
      onClick={() => handleClick(day)}
      onMouseOver={() => handleHover(day)}
    >
      {day}
    </button>
  );
};
