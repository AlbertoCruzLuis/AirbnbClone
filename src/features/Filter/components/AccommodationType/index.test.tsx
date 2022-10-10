import { fireEvent, render, screen } from "@testing-library/react";

import { AccommodationType } from ".";

describe("AccommodationType component", () => {
  it("should render correctly", async () => {
    render(
      <AccommodationType
        accommodationType={["full", "private", "shared"]}
        onAccommodationTypeChange={() => {}}
      />
    );

    expect(
      screen.getByRole("heading", { name: "Tipo de alojamiento" })
    ).toBeInTheDocument();
  });

  it("should enable full type of checkbox when user click in this option", () => {
    let accommodationTypes = ["private"];
    const onAccommodationTypeChange = jest.fn((accommodationType) => {
      accommodationTypes = accommodationType;
    });

    const { rerender } = render(
      <AccommodationType
        accommodationType={accommodationTypes}
        onAccommodationTypeChange={onAccommodationTypeChange}
      />
    );

    const input = screen.getByRole("checkbox", {
      name: "Alojamiento entero Un alojamiento solo para ti",
    });

    expect(input).not.toBeChecked();

    fireEvent.click(input);

    rerender(
      <AccommodationType
        accommodationType={accommodationTypes}
        onAccommodationTypeChange={onAccommodationTypeChange}
      />
    );

    expect(input).toBeChecked();
  });

  it("should enable private type of checkbox when user click in this option", () => {
    let accommodationTypes = ["full"];
    const onAccommodationTypeChange = jest.fn((accommodationType) => {
      accommodationTypes = accommodationType;
    });

    const { rerender } = render(
      <AccommodationType
        accommodationType={accommodationTypes}
        onAccommodationTypeChange={onAccommodationTypeChange}
      />
    );

    const input = screen.getByRole("checkbox", {
      name: "Habitación privada Una habitación privada en un alojamiento u hotel, además de zonas comunes compartidas",
    });

    expect(input).not.toBeChecked();

    fireEvent.click(input);

    rerender(
      <AccommodationType
        accommodationType={accommodationTypes}
        onAccommodationTypeChange={onAccommodationTypeChange}
      />
    );

    expect(input).toBeChecked();
  });

  it("should enable shared type of checkbox when user click in this option", () => {
    let accommodationTypes = ["full"];
    const onAccommodationTypeChange = jest.fn((accommodationType) => {
      accommodationTypes = accommodationType;
    });

    const { rerender } = render(
      <AccommodationType
        accommodationType={accommodationTypes}
        onAccommodationTypeChange={onAccommodationTypeChange}
      />
    );

    const input = screen.getByRole("checkbox", {
      name: "Habitación compartida Un espacio para dormir y zonas comunes a las que pueden tener acceso otras personas",
    });

    expect(input).not.toBeChecked();

    fireEvent.click(input);

    rerender(
      <AccommodationType
        accommodationType={accommodationTypes}
        onAccommodationTypeChange={onAccommodationTypeChange}
      />
    );

    expect(input).toBeChecked();
  });
});
