import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import { Select } from ".";

describe("Select component", () => {
  it("should is selected the default option", async () => {
    render(<Select options={["A", "B"]} defaultValue="A" />);

    await waitFor(() => {
      expect(screen.getByDisplayValue("A")).toBeInTheDocument();
    });
  });

  it("as user, should be able to select a option", async () => {
    render(<Select options={["A", "B"]} defaultValue="A" />);

    fireEvent.change(screen.getByDisplayValue("A"), {
      target: { value: "B" },
    });
    expect(screen.getByDisplayValue("B")).toBeInTheDocument();
  });
});
