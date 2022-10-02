import { cleanup, screen } from "@testing-library/react";

import { customRender } from "@/utils/testUtils";

import { PageLayout } from ".";

describe("PageLayout", () => {
  it("should have header component", async () => {
    customRender(<PageLayout />);

    const header = await screen.findByRole("banner");
    expect(header).toBeInTheDocument();

    cleanup();
  });

  it("should have main component", async () => {
    customRender(<PageLayout />);

    const main = await screen.findByRole("main");
    expect(main).toBeInTheDocument();

    cleanup();
  });

  it("should have footer component", async () => {
    customRender(<PageLayout />);

    const footer = await screen.findByRole("contentinfo");
    expect(footer).toBeInTheDocument();

    cleanup();
  });
});
