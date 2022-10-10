import { createContext } from "react";

export type IGuests = {
  adults: number;
  children: number;
  infants: number;
};

interface IContextValue {
  place: string;
  arrivalDate: string;
  departureDate: string;
  guests: IGuests;
  setPlace: (value: string) => void;
  setArrivalDate: (value: string) => void;
  setDepartureDate: (value: string) => void;
  setGuests: (value: IGuests) => void;
}

export const SearchContext = createContext<IContextValue>({
  place: "",
  arrivalDate: "",
  departureDate: "",
  guests: {
    adults: 1,
    children: 0,
    infants: 0,
  },
  setPlace: () => {},
  setArrivalDate: () => {},
  setDepartureDate: () => {},
  setGuests: () => {},
});
