import { render, screen } from "@testing-library/react";

import { PriceRange } from ".";

describe("PriceRange component", () => {
  it("should render correctly", async () => {
    render(<PriceRange minPrice={100} maxPrice={200} averagePrice={150} />);

    expect(
      screen.getByText("El precio medio por noche es de 150 €")
    ).toBeInTheDocument();
  });
});
