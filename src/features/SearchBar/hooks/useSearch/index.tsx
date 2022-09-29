import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

import type { IGuests } from "@/redux/slices/searchSlice";
import {
  setArrivalDate,
  setDepartureDate,
  setGuests,
  setPlace,
} from "@/redux/slices/searchSlice";
import type { RootState } from "@/redux/store";

export const useSearch = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const place = useSelector((state: RootState) => state.search.place);
  const arrivalDate = useSelector(
    (state: RootState) => state.search.arrivalDate
  );
  const departureDate = useSelector(
    (state: RootState) => state.search.departureDate
  );
  const guests = useSelector((state: RootState) => state.search.guests);

  const onHandlePlace = (value: string) => dispatch(setPlace(value));
  const onHandleArrivalDate = (value: string) =>
    dispatch(setArrivalDate(value));
  const onHandleDepartureDate = (value: string) =>
    dispatch(setDepartureDate(value));
  const onHandleGuests = (value: IGuests) => dispatch(setGuests(value));

  const handleSearch = () => {
    const { adults, children, infants } = guests;

    router.push({
      pathname: `/s/${place}/homes`,
      query: {
        place,
        checkin: arrivalDate,
        checkout: departureDate,
        guests: adults + children + infants,
        adults,
        children,
        infants,
      },
    });
  };

  const handleSearchOnEnter = (e: any) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const decodeSearch = () => {
    const search = router.query;

    if (search.place) onHandlePlace(search.place as string);
    if (search.checkin) onHandleArrivalDate(search.checkin as string);
    if (search.checkout) onHandleDepartureDate(search.checkout as string);

    const guest = {
      adults: 0,
      children: 0,
      infants: 0,
    };

    if (search.adults) guest.adults = search.adults as unknown as number;
    if (search.children) guest.children = search.children as unknown as number;
    if (search.infants) guest.infants = search.infants as unknown as number;

    onHandleGuests({
      ...guests,
      ...(guest as IGuests),
    });
  };

  return {
    place,
    arrivalDate,
    departureDate,
    guests,
    setPlace: onHandlePlace,
    setArrivalDate: onHandleArrivalDate,
    setDepartureDate: onHandleDepartureDate,
    setGuests: onHandleGuests,
    handleSearch,
    handleSearchOnEnter,
    decodeSearch,
    router,
  };
};
