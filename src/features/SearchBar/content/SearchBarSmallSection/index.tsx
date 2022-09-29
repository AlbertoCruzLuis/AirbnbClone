import { InputSearch } from "@/features/SearchBar/components/InputSearch";
import { SearchContainer } from "@/features/SearchBar/components/SearchContainer";

import { DropdownDateRangePicker } from "../../../DropdownDateRangePicker";
import { DropdownHost } from "../../components/DropdownHost";
import { useSearch } from "../../hooks/useSearch";

export const SearchBarSmallSection = () => {
  const {
    place,
    arrivalDate,
    departureDate,
    setArrivalDate,
    setDepartureDate,
    setPlace,
    handleSearchOnEnter,
    handleSearch,
  } = useSearch();

  return (
    <section className="grid grid-cols-3 divide-x rounded-md border border-solid">
      <SearchContainer title="Donde">
        <InputSearch
          className="p-2"
          defaultValue={place}
          placeholder="Destino, ciudad, direccion"
          handleChange={(e: any) => setPlace(e.target.value)}
          onKeyDown={handleSearchOnEnter}
          handleClick={handleSearch}
        />
      </SearchContainer>
      <SearchContainer title="Cuando">
        <DropdownDateRangePicker
          className="p-2"
          startDate={arrivalDate}
          endDate={departureDate}
          onStartDateChange={setArrivalDate}
          onEndDateChange={setDepartureDate}
        />
      </SearchContainer>
      <SearchContainer className="relative" title="Huespedes">
        <DropdownHost className="p-2" />
      </SearchContainer>
    </section>
  );
};
