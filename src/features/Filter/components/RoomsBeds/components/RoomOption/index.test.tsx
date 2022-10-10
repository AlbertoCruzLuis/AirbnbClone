import { fireEvent, render, screen } from "@testing-library/react";

import { RoomOption } from ".";

describe("RoomOption", () => {
  it("should change ammount of rooms when user select relevant button", async () => {
    let ammountOfRooms = 0;
    const handleAmmountRooms = jest.fn((id) => {
      ammountOfRooms = id;
    });

    const { rerender } = render(
      <RoomOption
        roomTitle="Habitaciones"
        ammountOfRooms={ammountOfRooms}
        handleAmmountRooms={handleAmmountRooms}
      />
    );

    expect(ammountOfRooms).toEqual(0);

    const sixRoomButton = screen.getByText("6");

    fireEvent.click(sixRoomButton);

    rerender(
      <RoomOption
        roomTitle="Habitaciones"
        ammountOfRooms={ammountOfRooms}
        handleAmmountRooms={handleAmmountRooms}
      />
    );

    expect(ammountOfRooms).toEqual(6);
  });
});
