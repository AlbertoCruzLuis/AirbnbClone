import classNames from "classnames";
import type { FC } from "react";

type ISearchContainerProps = {
  title: string;
  children: React.ReactNode;
  className?: string;
  isHeader?: boolean;
};

export const SearchContainer: FC<ISearchContainerProps> = ({
  title,
  children,
  className,
  isHeader,
}) => {
  const divStyle = classNames("flex flex-col gap-2 truncate", className);

  return (
    <div className={divStyle}>
      {isHeader && <span className="truncate px-4 pt-4">{title}</span>}
      {children}
    </div>
  );
};
