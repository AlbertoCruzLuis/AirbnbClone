import { useEffect, useState } from "react";

import { defaultSearchFilters } from "../../constants";
import type { IGuests } from "../../contexts/SearchContext";
import { SearchContext } from "../../contexts/SearchContext";
import { useSearchingParams } from "../../hooks/useSearchingParams";

interface ISearchProviderProps {
  children: React.ReactNode;
}

export const SearchProvider = ({ children }: ISearchProviderProps) => {
  const { filters } = useSearchingParams();

  const [place, setPlace] = useState(defaultSearchFilters.place);
  const [arrivalDate, setArrivalDate] = useState(defaultSearchFilters.checkIn);
  const [departureDate, setDepartureDate] = useState(
    defaultSearchFilters.checkOut
  );
  const [guests, setGuests] = useState({
    adults: defaultSearchFilters.adults,
    children: defaultSearchFilters.children,
    infants: defaultSearchFilters.infants,
  });

  useEffect(() => {
    const draftGuests: Partial<IGuests> = {};

    if (filters.adults) draftGuests.adults = filters.adults;
    if (filters.children) draftGuests.children = filters.children;
    if (filters.infants) draftGuests.infants = filters.infants;

    setGuests({
      ...guests,
      ...draftGuests,
    });
  }, [filters.adults, filters.children, filters.infants]);

  useEffect(() => {
    if (filters.place) setPlace(filters.place);
  }, [filters.place]);

  useEffect(() => {
    if (filters.checkIn) setArrivalDate(filters.checkIn);
  }, [filters.checkIn]);

  useEffect(() => {
    if (filters.checkOut) setDepartureDate(filters.checkOut);
  }, [filters.checkOut]);

  const contextValue = {
    place,
    arrivalDate,
    departureDate,
    guests,
    setPlace,
    setArrivalDate,
    setDepartureDate,
    setGuests,
  };

  return (
    <SearchContext.Provider value={contextValue}>
      {children}
    </SearchContext.Provider>
  );
};
