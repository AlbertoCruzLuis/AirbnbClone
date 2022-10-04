import { screen, waitFor } from "@testing-library/react";

import { customRender } from "@/utils/testUtils";

import { CategorySection } from ".";

describe("CategorySection", () => {
  it("should show the category list", async () => {
    customRender(<CategorySection />);

    await waitFor(() => {
      expect(screen.getByText("Playas")).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(screen.getByText("Islas")).toBeInTheDocument();
    });
  });
});
