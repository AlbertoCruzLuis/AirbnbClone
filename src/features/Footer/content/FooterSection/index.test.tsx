import { render, screen } from "@testing-library/react";

import { FooterSection } from ".";

describe("FooterSection", () => {
  it("should render title of sections", () => {
    render(<FooterSection />);

    expect(screen.getByText("Airbnb")).toBeInTheDocument();
    expect(screen.getByText("Descubre Airbnb")).toBeInTheDocument();
    expect(screen.getByText("Hospedar")).toBeInTheDocument();
  });
});
