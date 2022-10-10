import { useContext } from "react";

import { SearchContext } from "../../contexts/SearchContext";
import { useSearchingParams } from "../useSearchingParams";

export const useSearch = () => {
  const {
    arrivalDate,
    departureDate,
    guests,
    place,
    setArrivalDate,
    setDepartureDate,
    setGuests,
    setPlace,
  } = useContext(SearchContext);

  const { setFilters, router } = useSearchingParams();

  const handleSearch = () => {
    const newQuery = {
      place,
      checkIn: arrivalDate,
      checkOut: departureDate,
      adults: guests.adults,
      children: guests.children,
      infants: guests.infants,
    };

    const placeUrl = place ? `${place}/` : "";

    setFilters(newQuery, `/s/${placeUrl}homes`);
  };

  const handleSearchOnEnter = (e: any) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return {
    place,
    arrivalDate,
    departureDate,
    guests,
    setPlace,
    setArrivalDate,
    setDepartureDate,
    setGuests,
    handleSearch,
    handleSearchOnEnter,
    router,
  };
};
