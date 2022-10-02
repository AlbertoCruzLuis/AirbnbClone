import { waitFor } from "@testing-library/react";

import { customRenderHook } from "@/utils/testUtils";

import { useModes } from ".";

describe("useModes hook", () => {
  it("should call method activateMode", async () => {
    const { result } = customRenderHook(() => useModes());

    await waitFor(() => {
      expect(result.current.activateMode("VERSION1")).toBeUndefined();
    });
  });
});
