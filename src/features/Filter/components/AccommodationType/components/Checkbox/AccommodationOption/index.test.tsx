import { render, screen } from "@testing-library/react";

import { AccommodationOption } from ".";

describe("AccommodationOption component", () => {
  it("should render correctly", async () => {
    render(
      <AccommodationOption
        accomodationTitle="Casa entera"
        accomodationDescription="Disfruta de una casa entera para ti."
        checked={true}
        handleChange={() => {}}
      />
    );

    expect(screen.getByText("Casa entera")).toBeInTheDocument();
  });
});
