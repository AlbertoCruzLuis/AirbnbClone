import classNames from "classnames";
import { useWindowSize } from "react-use";

import { InputSearch } from "@/features/SearchBar/components/InputSearch";
import { SearchContainer } from "@/features/SearchBar/components/SearchContainer";

import { DropdownDateRangePicker } from "../../../DropdownDateRangePicker";
import { DropdownHost } from "../../components/DropdownHost";
import { useSearch } from "../../hooks/useSearch";

export const SearchBarSection = () => {
  const {
    place,
    arrivalDate,
    departureDate,
    setArrivalDate,
    setDepartureDate,
    setPlace,
    handleSearch,
    handleSearchOnEnter,
  } = useSearch();

  const { width } = useWindowSize();
  const isDesktop = width >= 1024;
  const paddingStyle = classNames({ "p-2": !isDesktop, "p-4 pt-2": isDesktop });

  return (
    <section className="grid grid-cols-3 divide-x rounded-md border border-solid">
      <SearchContainer title="Donde" isHeader={isDesktop}>
        <InputSearch
          className={paddingStyle}
          defaultValue={place}
          placeholder="Destino, ciudad, direccion"
          handleChange={(e: any) => setPlace(e.target.value)}
          handleClick={handleSearch}
          onKeyDown={handleSearchOnEnter}
        />
      </SearchContainer>
      <SearchContainer title="Cuando" isHeader={isDesktop}>
        <DropdownDateRangePicker
          className={paddingStyle}
          startDate={arrivalDate}
          endDate={departureDate}
          onStartDateChange={setArrivalDate}
          onEndDateChange={setDepartureDate}
        />
      </SearchContainer>
      <SearchContainer
        className="relative"
        title="Huespedes"
        isHeader={isDesktop}
      >
        {isDesktop && (
          <div className="absolute inset-y-0 right-5 flex items-center">
            <button
              className="rounded bg-red-1000 p-2 px-4"
              onClick={handleSearch}
            >
              <span className="text-lg text-white">Buscar</span>
            </button>
          </div>
        )}
        <DropdownHost className={paddingStyle} />
      </SearchContainer>
    </section>
  );
};
