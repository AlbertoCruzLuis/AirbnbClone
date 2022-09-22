import type { FC } from "react";
import { useState } from "react";

type ISelectProps = {
  options: string[];
  defaultValue: string;
};

export const Select: FC<ISelectProps> = ({ options, defaultValue }) => {
  const [value, setValue] = useState(defaultValue);
  return (
    <select
      className="border border-solid p-2 outline-none"
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
      }}
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};
