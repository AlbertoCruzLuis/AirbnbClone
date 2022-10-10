import { act } from "react-dom/test-utils";

import { customRenderHook } from "@/utils/testUtils";

import { useQueryParams } from ".";

describe("useQueryParams hook", () => {
  it("should redirect to url to where the parameters is set in the setQuery function", async () => {
    const { result } = customRenderHook(() => useQueryParams());

    const value = {
      minPrice: "100",
      maxPrice: "200",
      bedrooms: "2",
      beds: "3",
      bathrooms: "1",
    };

    act(() => {
      result.current.setQuery(value);
    });

    expect(result.current.router.push).toHaveBeenCalledWith({
      pathname: "",
      query: value,
    });
  });

  it("should remove query params when execute removeQueries function", async () => {
    const { result } = customRenderHook(() => useQueryParams());

    const keys = ["minPrice", "maxPrice"];

    act(() => {
      result.current.removeQueries(keys);
    });

    expect(result.current.router.push).toHaveBeenCalledWith({
      pathname: "",
      query: {},
    });
  });
});
