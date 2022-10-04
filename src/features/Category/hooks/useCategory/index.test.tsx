import { customRenderHook } from "@/utils/testUtils";

import { useCategory } from ".";

describe("useCategory hook", () => {
  it("should change the category when execute changeCategory function", async () => {
    const { result } = customRenderHook(() => useCategory());

    result.current.changeCategory("Playas");

    expect(result.current.router.push).toHaveBeenCalledTimes(1);
  });
});
