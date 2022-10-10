import classNames from "classnames";
import type { FC } from "react";
import { HiCheck } from "react-icons/hi";

interface ICheckboxProps {
  id: string;
  checked?: boolean;
  handleChange?: () => void;
}

export const Checkbox: FC<ICheckboxProps> = ({ id, checked, handleChange }) => {
  const containerStyles = classNames(
    "flex justify-center items-center w-6 h-6 border border-solid border-gray-400 rounded-md cursor-pointer hover:border-black",
    {
      "bg-black": checked,
    }
  );

  return (
    <div className="relative">
      <input
        id={id}
        name={id}
        className="absolute opacity-0"
        checked={checked}
        onChange={handleChange}
        type="checkbox"
      />
      <span className={containerStyles}>
        {checked && <HiCheck className="text-white" />}
      </span>
    </div>
  );
};
