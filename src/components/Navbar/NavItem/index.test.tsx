import { render, screen, waitFor } from "@testing-library/react";

import { NavItemComponent } from ".";

describe("NavItemComponent", () => {
  it("should have attribute href slash correctly", async () => {
    const href = "/home";

    render(<NavItemComponent name="Home" url={href} isActive={false} />);

    await waitFor(() => {
      expect(screen.getByRole("link")).toHaveAttribute("href", href);
    });
  });
});
