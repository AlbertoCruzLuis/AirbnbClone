import { render, screen } from "@testing-library/react";

import { FilterHeader } from ".";

describe("FilterHeader", () => {
  it("should render correctly", async () => {
    render(<FilterHeader onClose={() => {}} />);

    expect(screen.getByText("Filtros")).toBeInTheDocument();
  });
});
