import { useQuery } from "@tanstack/react-query";

import type { Filters } from "@/utils/filters";
import { getFilteredApartaments } from "@/utils/filters";

export interface IApartament {
  id: string;
  title: string;
  imageUrl: string;
  price: number;
  accommodationType: string;
  bedrooms: number;
  beds: number;
  bathrooms: number;
  zipCode: string;
  country: string;
  province: string;
  rating: number;
}

export const useApartament = (filters: Filters = {}) => {
  const { data: apartaments } = useQuery(
    ["apartaments"],
    async () => {
      const apartamentsRaw = await fetch("/api/apartaments");
      return apartamentsRaw.json();
    },
    {
      select: (apartamentList: IApartament[]) =>
        getFilteredApartaments(apartamentList, filters),
    }
  );

  return {
    apartaments,
  };
};
