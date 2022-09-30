import { cleanup, render, screen } from "@testing-library/react";

import { PageLayout } from ".";

describe("PageLayout", () => {
  it("should have header component", async () => {
    render(<PageLayout />);

    const header = await screen.findByRole("banner");
    expect(header).toBeInTheDocument();

    cleanup();
  });

  it("should have main component", async () => {
    render(<PageLayout />);

    const main = await screen.findByRole("main");
    expect(main).toBeInTheDocument();

    cleanup();
  });

  it("should have footer component", async () => {
    render(<PageLayout />);

    const footer = await screen.findByRole("contentinfo");
    expect(footer).toBeInTheDocument();

    cleanup();
  });
});
