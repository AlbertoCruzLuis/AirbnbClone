import type { FC } from "react";
import { useState } from "react";
import { CgChevronDown, CgChevronUp } from "react-icons/cg";
import { HiOutlineUsers } from "react-icons/hi";
import Popup from "reactjs-popup";

import { useSearch } from "@/features/SearchBar/hooks/useSearch";

import { QuantityPicker } from "../QuantityPicker";

type IDropdownHostProps = {
  className?: string;
};

export const DropdownHost: FC<IDropdownHostProps> = ({ className }) => {
  const [isOpen, setOpen] = useState(false);
  const { guests, setGuests } = useSearch();

  const getHostAmount = () => {
    return `${guests.adults + guests.children} guests${
      guests.infants ? `, ${guests.infants} infants` : ""
    }`;
  };

  return (
    <Popup
      className="appearance-none pt-4"
      arrow={false}
      position={"bottom left"}
      open={isOpen}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      trigger={
        <button title="dropdownHost" className={`${className} flex gap-2`}>
          <div>
            <HiOutlineUsers size="1.4rem" />
          </div>
          <span className="truncate">{getHostAmount()}</span>
          {isOpen ? (
            <CgChevronUp color="gray" size="1.4rem" />
          ) : (
            <CgChevronDown color="gray" size="1.4rem" />
          )}
        </button>
      }
    >
      <div className="flex flex-col gap-4 border border-solid bg-white p-4">
        <div className="grid grid-cols-2 gap-8">
          <span>Adultos</span>
          <QuantityPicker
            min={1}
            max={16}
            quantity={guests.adults}
            setQuantity={(quantity: number) =>
              setGuests({ ...guests, adults: quantity })
            }
          />
        </div>
        <div className="grid grid-cols-2 gap-8">
          <span>Niños</span>
          <QuantityPicker
            min={0}
            max={16}
            quantity={guests.children}
            setQuantity={(quantity: number) =>
              setGuests({ ...guests, children: quantity })
            }
          />
        </div>
        <div className="grid grid-cols-2 gap-8">
          <span>Bebes</span>
          <QuantityPicker
            min={0}
            max={5}
            quantity={guests.infants}
            setQuantity={(quantity: number) =>
              setGuests({ ...guests, infants: quantity })
            }
          />
        </div>
      </div>
    </Popup>
  );
};
