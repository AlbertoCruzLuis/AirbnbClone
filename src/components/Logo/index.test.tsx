import { render, screen, waitFor } from "@testing-library/react";

import { Logo } from ".";

describe("Logo component", () => {
  it("should have logo alt=Isotipo in screens less of 1200", async () => {
    render(<Logo />);

    await waitFor(() => {
      expect(screen.getByAltText("Isotipo")).toBeInTheDocument();
    });
  });
});
