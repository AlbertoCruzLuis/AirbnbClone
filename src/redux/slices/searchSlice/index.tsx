import { createSlice } from "@reduxjs/toolkit";

export interface IGuests {
  adults: number;
  children: number;
  infants: number;
}

export interface SearchState {
  place: string;
  arrivalDate: string;
  departureDate: string;
  guests: IGuests;
}

const initialState: SearchState = {
  place: "",
  arrivalDate: "",
  departureDate: "",
  guests: {
    adults: 1,
    children: 0,
    infants: 0,
  },
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setPlace: (state, action) => {
      state.place = action.payload;
    },
    setArrivalDate: (state, action) => {
      state.arrivalDate = action.payload;
    },
    setDepartureDate: (state, action) => {
      state.departureDate = action.payload;
    },
    setGuests: (state, action) => {
      state.guests = action.payload;
    },
  },
});

export const { setPlace, setArrivalDate, setDepartureDate, setGuests } =
  searchSlice.actions;

export default searchSlice.reducer;
