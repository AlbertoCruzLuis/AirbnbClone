import { customRenderHook } from "@/utils/testUtils";

import { SearchProvider } from "../../providers/SearchProvider";
import { useSearch } from ".";

describe("useSearch hook", () => {
  it("should redirect to url to where the parameters is set in the handleSearch function", async () => {
    const { result } = customRenderHook(() => useSearch(), {
      wrapper: SearchProvider,
    });

    result.current.handleSearch();

    const { place, guests } = result.current;

    expect(result.current.router.push).toHaveBeenCalledWith({
      pathname: `/s/${place}/homes`,
      query: {
        adults: String(guests.adults),
      },
    });
  });

  it("should execute handleSearchOnEnter function when user click enter key", async () => {
    const { result } = customRenderHook(() => useSearch(), {
      wrapper: SearchProvider,
    });

    const event = {
      key: "Enter",
    };

    result.current.handleSearchOnEnter(event);

    const { place, guests } = result.current;

    expect(result.current.router.push).toHaveBeenCalledWith({
      pathname: `/s/${place}/homes`,
      query: {
        adults: String(guests.adults),
      },
    });
  });
});
