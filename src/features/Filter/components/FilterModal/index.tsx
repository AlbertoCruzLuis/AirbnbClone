import { motion } from "framer-motion";
import type { FC } from "react";

import { defaultFilters } from "../../constants";
import { useFilter } from "../../hooks/useFilter";
import { AccommodationType } from "../AccommodationType";
import { FilterFooter } from "../FilterFooter";
import { FilterHeader } from "../FilterHeader";
import { PriceRange } from "../PriceRange";
import { RoomsBeds } from "../RoomsBeds";

interface IFilterModalProps {
  onClose: () => void;
}

export const FilterModal: FC<IFilterModalProps> = ({ onClose }) => {
  const {
    addFilter,
    applyFilters,
    clearFiltersHandle,
    draftFilters,
    averagePrice,
  } = useFilter({ onClose });

  return (
    <motion.div
      aria-label="Filter Modal"
      className="flex max-w-3xl flex-col rounded-md bg-white"
      initial={{ y: 1000, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <FilterHeader onClose={onClose} />
      <main className="flex flex-col gap-4 overflow-y-auto border-b border-solid p-3">
        <PriceRange
          averagePrice={averagePrice}
          minPrice={draftFilters.minPrice || defaultFilters.minPrice}
          maxPrice={draftFilters.maxPrice || defaultFilters.maxPrice}
          onMinPriceChange={(newMinPrice) => {
            addFilter("minPrice", newMinPrice);
          }}
          onMaxPriceChange={(newMaxPrice) => {
            addFilter("maxPrice", newMaxPrice);
          }}
        />
        <AccommodationType
          accommodationType={draftFilters.accommodationType as string[]}
          onAccommodationTypeChange={(newAccommodationType) => {
            addFilter("accommodationType", newAccommodationType);
          }}
        />
        <RoomsBeds
          bathrooms={draftFilters.bathrooms as number}
          bedrooms={draftFilters.bedrooms as number}
          beds={draftFilters.beds as number}
          onRoomsBedsChange={(roomAmmount, filterId) =>
            addFilter(filterId, roomAmmount)
          }
        />
      </main>
      <FilterFooter
        draftFilters={draftFilters}
        applyFilters={applyFilters}
        clearFilters={clearFiltersHandle}
      />
    </motion.div>
  );
};
