import { render, screen, waitFor } from "@testing-library/react";

import { CustomLink } from ".";

describe("CustomLink component", () => {
  it("should have attribute href slash correctly", async () => {
    const href = "/home";

    render(<CustomLink href={href} />);

    await waitFor(() => {
      expect(screen.getByRole("link")).toHaveAttribute("href", href);
    });
  });

  it("should have attribute href hashtag correctly", async () => {
    const href = "#home";

    render(<CustomLink href={href} />);

    await waitFor(() => {
      expect(screen.getByRole("link")).toHaveAttribute("href", href);
    });
  });

  it("should have attribute href absolute correctly", async () => {
    const href = "https://www.google.com";

    render(<CustomLink href={href} />);

    await waitFor(() => {
      expect(screen.getByRole("link")).toHaveAttribute("href", href);
    });
  });
});
