import { useCategoryParams } from "@/features/Category/hooks/useCategoryParams";
import { useFilteringParams } from "@/features/Filter/hooks/useFilteringParams";
import { useSearchingParams } from "@/features/SearchBar/hooks/useSearchingParams";

import type { ApartamentFilters } from "../../utils/filters";

export const useApartamentFilter = () => {
  const { filters: generalFilters } = useFilteringParams();
  const { filters: searchFilters } = useSearchingParams();
  const { filters: categoryFilters } = useCategoryParams();

  const getGuests = () => {
    if (!searchFilters.children || !searchFilters.adults)
      return searchFilters.adults;

    return searchFilters.adults + searchFilters.children;
  };

  const filters: ApartamentFilters = {
    ...generalFilters,
    checkIn: searchFilters.checkIn,
    checkOut: searchFilters.checkOut,
    place: searchFilters.place,
    guests: getGuests(),
    ...categoryFilters,
  };

  return {
    filters,
  };
};
