import classNames from "classnames";
import type { FC } from "react";

import { Button } from "../Button";

interface IRoomOptionProps {
  roomTitle: string;
  ammountOfRooms: number;
  handleAmmountRooms: (id: number) => void;
}

export const RoomOption: FC<IRoomOptionProps> = ({
  roomTitle,
  handleAmmountRooms,
  ammountOfRooms,
}) => {
  const getButtonStyle = (buttonId: number) =>
    classNames(
      "w-full p-2 text-sm border border-solid rounded-full hover:border-neutral-800",
      {
        "bg-black text-white": buttonId === ammountOfRooms,
        "px-6": buttonId === null,
      }
    );

  return (
    <div className="flex flex-col gap-4">
      <h3>{roomTitle}</h3>
      <div className="flex gap-2">
        <Button
          className={getButtonStyle(0)}
          name="Todos"
          handleClick={() => handleAmmountRooms(0)}
        />
        {Array.from({ length: 7 }, (_, i) => (
          <Button
            className={getButtonStyle(i + 1)}
            key={i + 1}
            name={`${i + 1}`}
            handleClick={() => handleAmmountRooms(i + 1)}
          />
        ))}
        <Button
          className={getButtonStyle(8)}
          name="8+"
          handleClick={() => handleAmmountRooms(8)}
        />
      </div>
    </div>
  );
};
