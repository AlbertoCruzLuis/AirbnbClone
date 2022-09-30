import { render, screen, waitFor } from "@testing-library/react";

import { Header } from ".";

describe("Header component", () => {
  it("should have navbar component", async () => {
    render(<Header />);

    await waitFor(() => {
      expect(screen.getByLabelText("Main")).toBeInTheDocument();
    });
  });
});
