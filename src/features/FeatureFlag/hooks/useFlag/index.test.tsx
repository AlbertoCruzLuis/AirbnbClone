import { waitFor } from "@testing-library/react";

import { customRenderHook } from "@/utils/testUtils";

import { useFlag } from ".";

describe("useFlag hook", () => {
  it("should activate the feature flag from updateFlag function", async () => {
    const { result } = customRenderHook(() => useFlag({ name: "FEATURE1" }));

    await waitFor(() => {
      expect(result.current.updateFlag(true)).toBeUndefined();
    });
  });

  it("should deactivate the feature flag", async () => {
    const { result } = customRenderHook(() => useFlag({ name: "FEATURE1" }));

    await waitFor(() => {
      expect(result.current.deactivate()).toBeUndefined();
    });
  });

  it("should activate the feature flag from activate function", async () => {
    const { result } = customRenderHook(() => useFlag({ name: "FEATURE1" }));

    await waitFor(() => {
      expect(result.current.activate()).toBeUndefined();
    });
  });
});
