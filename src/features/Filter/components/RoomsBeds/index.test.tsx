import { render, screen } from "@testing-library/react";

import { RoomsBeds } from ".";

describe("RoomsBeds", () => {
  it("should render correctly", async () => {
    render(
      <RoomsBeds
        bathrooms={1}
        bedrooms={1}
        beds={1}
        onRoomsBedsChange={() => {}}
      />
    );

    expect(screen.getByText("Habitaciones y camas")).toBeInTheDocument();
  });
});
