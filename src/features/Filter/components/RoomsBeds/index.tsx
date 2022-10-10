import type { FC } from "react";
import { useState } from "react";

import type { Filters } from "@/features/Filter/hooks/useFilteringParams";

import { RoomOption } from "./components/RoomOption";

interface IRoomOptionProps {
  bathrooms: number;
  bedrooms: number;
  beds: number;
  onRoomsBedsChange: (roomAmmount: number, roomId: keyof Filters) => void;
}

const initialState = (draftState: any) => {
  const state = {
    bedrooms: draftState.bedrooms || 0,
    beds: draftState.beds || 0,
    bathrooms: draftState.bathrooms || 0,
  };

  return state;
};

export const RoomsBeds: FC<IRoomOptionProps> = ({
  onRoomsBedsChange,
  bedrooms,
  beds,
  bathrooms,
}) => {
  const [rooms, setRooms] = useState(
    initialState({ bedrooms, beds, bathrooms })
  );
  const handleRooms = (roomId: keyof Filters) => {
    return (roomAmmount: number) => {
      setRooms((prevState) => ({
        ...prevState,
        [roomId]: roomAmmount,
      }));
      onRoomsBedsChange(roomAmmount, roomId);
    };
  };

  return (
    <section className="flex flex-col gap-2 p-4">
      <h2 className="pb-2 text-xl font-bold">Habitaciones y camas</h2>
      <div className="flex flex-col gap-4">
        <RoomOption
          roomTitle="Dormitorios"
          ammountOfRooms={rooms.bedrooms}
          handleAmmountRooms={(roomAmmount) =>
            handleRooms("bedrooms")(roomAmmount)
          }
        />
        <RoomOption
          roomTitle="Camas"
          ammountOfRooms={rooms.beds}
          handleAmmountRooms={(roomAmmount) => handleRooms("beds")(roomAmmount)}
        />
        <RoomOption
          roomTitle="Baños"
          ammountOfRooms={rooms.bathrooms}
          handleAmmountRooms={(roomAmmount) =>
            handleRooms("bathrooms")(roomAmmount)
          }
        />
      </div>
    </section>
  );
};
