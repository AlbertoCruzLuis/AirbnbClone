import type { FC } from "react";
import { AiOutlineSearch } from "react-icons/ai";

type IInputProps = {
  className?: string;
  defaultValue?: string;
  placeholder: string;
  handleChange: (e: any) => void;
  onKeyDown?: (e: any) => void;
  handleClick?: () => void;
};

export const InputSearch: FC<IInputProps> = ({
  className,
  defaultValue,
  placeholder,
  handleChange,
  onKeyDown,
  handleClick,
}) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <button onClick={handleClick}>
        <AiOutlineSearch size="1.4rem" />
      </button>
      <input
        className="bg-transparent outline-none"
        type="text"
        aria-label="input-search"
        value={defaultValue}
        placeholder={placeholder}
        onChange={handleChange}
        onKeyDown={onKeyDown}
      />
    </div>
  );
};
