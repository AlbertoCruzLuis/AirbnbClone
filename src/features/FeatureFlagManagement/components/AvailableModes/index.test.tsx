import { screen, waitFor } from "@testing-library/react";

import { customRender } from "@/utils/testUtils";

import { AvailableModes } from ".";

describe("AvailableModes", () => {
  it("should show the available modes", async () => {
    customRender(<AvailableModes />);

    await waitFor(() => {
      expect(screen.getByText("Available Modes")).toBeInTheDocument();
    });
  });
});
