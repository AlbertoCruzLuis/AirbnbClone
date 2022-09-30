import { render, screen, waitFor } from "@testing-library/react";

import { LanguageSwitcher } from ".";

describe("LanguageSwitcher component", () => {
  it("should have Español how language by default", async () => {
    render(<LanguageSwitcher />);

    await waitFor(() => {
      expect(screen.getByText("Español")).toBeInTheDocument();
    });
  });
});
