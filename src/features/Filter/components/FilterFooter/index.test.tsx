import { fireEvent, render, screen } from "@testing-library/react";

import { FilterFooter } from ".";

describe("FilterFooter", () => {
  it("should render correctly", async () => {
    render(
      <FilterFooter
        applyFilters={() => {}}
        clearFilters={() => {}}
        draftFilters={{}}
      />
    );

    expect(screen.getByText("Quitar Filtros")).toBeInTheDocument();
  });

  it("should apply filters", async () => {
    let filters = {};
    const applyFilters = jest.fn((newFilters) => {
      filters = newFilters;
    });

    const { rerender } = render(
      <FilterFooter
        applyFilters={() =>
          applyFilters({
            minPrice: 100,
            maxPrice: 200,
          })
        }
        clearFilters={() => {}}
        draftFilters={filters}
      />
    );

    expect(filters).toEqual({});

    const applyFiltersButton = screen.getByLabelText("Aplicar filtros");

    fireEvent.click(applyFiltersButton);

    rerender(
      <FilterFooter
        applyFilters={applyFilters}
        clearFilters={() => {}}
        draftFilters={filters}
      />
    );

    expect(filters).toEqual({
      minPrice: 100,
      maxPrice: 200,
    });
  });
});
