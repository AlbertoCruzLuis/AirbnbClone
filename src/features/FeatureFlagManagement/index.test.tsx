import { screen, waitFor } from "@testing-library/react";

import { customRender } from "@/utils/testUtils";

import { FeatureFlagManagement } from ".";

describe("FeatureFlagManagement", () => {
  it("should show the feature flag management button", async () => {
    customRender(<FeatureFlagManagement />);

    await waitFor(() => {
      expect(screen.getByTitle("FeatureFlagManagement")).toBeInTheDocument();
    });
  });
});
