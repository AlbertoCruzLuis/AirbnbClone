import classNames from "classnames";
import type { FC } from "react";
import { forwardRef } from "react";

import { FilterIcon } from "@/icons/FilterIcon";

import { useFilteringParams } from "../../hooks/useFilteringParams";

interface IFilterButtonProps {
  handleClick?: () => void;
}

export const FilterButton: FC<IFilterButtonProps> = forwardRef(
  ({ handleClick }, ref: any) => {
    const { filters } = useFilteringParams();

    const filterAmmount = Object.keys(filters).length;
    const hasFilters = filterAmmount > 0;

    const buttonStyles = classNames(
      "relative flex items-center gap-2 p-4 border border-solid rounded-md",
      {
        "border-2 border-black": hasFilters,
      }
    );

    return (
      <button ref={ref} className={buttonStyles} onClick={handleClick}>
        {hasFilters && (
          <div className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-black">
            <span className="text-[10px] font-bold text-white">
              {filterAmmount}
            </span>
          </div>
        )}
        <FilterIcon />
        <span className="text-xs">Filtros</span>
      </button>
    );
  }
);

FilterButton.displayName = "FilterButton";
