import { screen, waitFor } from "@testing-library/react";

import { customRender } from "@/utils/testUtils";

import { DropdownMode } from ".";

describe("DropdownMode", () => {
  it("should show the dropdown mode", async () => {
    customRender(
      <DropdownMode
        dropdownOpen="feature1"
        modeName="feature1"
        setDropdownOpen={() => {}}
      />
    );

    await waitFor(() => {
      expect(screen.getByText("feature1")).toBeInTheDocument();
    });
  });
});
