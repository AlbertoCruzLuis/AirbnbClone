import { render, screen } from "@testing-library/react";

import { Logo } from ".";

describe("Logo component", () => {
  it("should have logo alt=Isotipo in screens less of 1200", () => {
    render(<Logo />);

    expect(screen.getByAltText("Isotipo")).toBeInTheDocument();
  });
});
