import classNames from "classnames";
import { useWindowScroll } from "react-use";

import { Category } from "@/features/Category";
import { Filter } from "@/features/Filter";

export const CategoryFilterBarSection = () => {
  const { y } = useWindowScroll();
  const isScroll = y > 0;

  const containerStyles = classNames("sticky top-[calc(75px-16px)] z-10 pt-4", {
    "shadow-md": isScroll,
  });

  return (
    <div className={containerStyles}>
      <div className="mx-auto flex justify-between gap-6 bg-white px-8 xl:container xl:px-0">
        <Category />
        <Filter />
      </div>
    </div>
  );
};
