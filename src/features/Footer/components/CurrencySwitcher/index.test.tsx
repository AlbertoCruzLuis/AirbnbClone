import { render, screen, waitFor } from "@testing-library/react";

import { CurrencySwitcher } from ".";

describe("CurrencySwitcher component", () => {
  it("should have EUR how currency by default", async () => {
    render(<CurrencySwitcher />);

    await waitFor(() => {
      expect(screen.getByText("EUR")).toBeInTheDocument();
    });
  });
});
