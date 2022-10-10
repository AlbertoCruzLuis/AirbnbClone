import { render, screen } from "@testing-library/react";

import { FilterSection } from ".";

describe("FilterSection", () => {
  it("should render correctly", async () => {
    render(<FilterSection />);

    expect(screen.getByText("Filtros")).toBeInTheDocument();
  });
});
