import type { FC, ReactNode } from "react";
import { memo } from "react";

type IButtonProps = {
  title: string;
  icon?: ReactNode;
  handleClick?: () => void;
};

const ButtonComponent: FC<IButtonProps> = ({ title, icon, handleClick }) => {
  return (
    <button onClick={handleClick}>
      <span className="text-sm hover:underline">{title}</span>
      {icon && icon}
    </button>
  );
};

export const Button = memo(ButtonComponent);
