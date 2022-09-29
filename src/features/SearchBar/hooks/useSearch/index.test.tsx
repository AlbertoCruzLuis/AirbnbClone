import { act } from "react-dom/test-utils";

import { customRenderHook } from "@/utils/testUtils";

import { useSearch } from ".";

describe("useSearch hook", () => {
  it("should redirect to url to where the parameters is set in the handleSearch function", async () => {
    const { result } = customRenderHook(() => useSearch());

    result.current.handleSearch();

    const { place, arrivalDate, guests, departureDate } = result.current;

    expect(result.current.router.push).toHaveBeenCalledWith({
      pathname: `/s/${place}/homes`,
      query: {
        place,
        checkin: arrivalDate,
        checkout: departureDate,
        guests: guests.adults + guests.children + guests.infants,
        adults: guests.adults,
        children: guests.children,
        infants: guests.infants,
      },
    });
  });

  it("should execute handleSearchOnEnter function when user click enter key", async () => {
    const { result } = customRenderHook(() => useSearch());

    const event = {
      key: "Enter",
    };

    result.current.handleSearchOnEnter(event);

    const { place, arrivalDate, guests, departureDate } = result.current;

    expect(result.current.router.push).toHaveBeenCalledWith({
      pathname: `/s/${place}/homes`,
      query: {
        place,
        checkin: arrivalDate,
        checkout: departureDate,
        guests: guests.adults + guests.children + guests.infants,
        adults: guests.adults,
        children: guests.children,
        infants: guests.infants,
      },
    });
  });

  it("should get value of params when execute decodeSearch function", async () => {
    const { result } = customRenderHook(() => useSearch());

    const search = {
      place: "Spain",
      checkin: "2022-09-01",
      checkout: "2022-09-08",
      adults: 2,
      children: 2,
      infants: 1,
    };

    act(() => {
      result.current.router.query = {
        place: search.place,
        checkin: search.checkin,
        checkout: search.checkout,
        adults: search.adults as unknown as string,
        children: search.children as unknown as string,
        infants: search.infants as unknown as string,
      };
    });

    act(() => {
      result.current.decodeSearch();
    });

    expect(result.current.place).toBe(search.place);

    expect(result.current.arrivalDate).toBe(search.checkin);
    expect(result.current.departureDate).toBe(search.checkout);
    expect(result.current.guests.adults).toBe(search.adults);
    expect(result.current.guests.children).toBe(search.children);
    expect(result.current.guests.infants).toBe(search.infants);
  });
});
