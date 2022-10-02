import { screen, waitFor } from "@testing-library/react";

import { customRender } from "@/utils/testUtils";

import { FeatureList } from ".";

describe("FeatureList", () => {
  it("should show the feature list", async () => {
    customRender(
      <FeatureList
        features={["a", "b"]}
        getStateOfFlag={() => true}
        handleFeatureChange={() => {}}
      />
    );

    await waitFor(() => {
      expect(screen.getByText("a")).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(screen.getByText("b")).toBeInTheDocument();
    });
  });
});
