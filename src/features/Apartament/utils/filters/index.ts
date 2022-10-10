import type { IApartament } from "@/features/Apartament/hooks/useApartament";

export interface ApartamentFilters {
  minPrice?: number;
  maxPrice?: number;
  accommodationType?: string[];
  bedrooms?: number;
  beds?: number;
  bathrooms?: number;
  country?: string;
  province?: string;
  rating?: number;
  category?: string;
  guests?: number;
  place?: string;
  checkIn?: string;
  checkOut?: string;
}

const filterApartamentBy = (
  apartaments: IApartament[],
  filter: keyof ApartamentFilters,
  onFilter: (
    apartament: IApartament,
    value: ApartamentFilters[keyof ApartamentFilters]
  ) => boolean
) => {
  return (filters: ApartamentFilters) => {
    if (!filters[filter]) return apartaments;

    return apartaments.filter((apartament) =>
      onFilter(apartament, filters[filter])
    );
  };
};

const filterActions: Record<
  keyof ApartamentFilters,
  (apartament: IApartament, filterValue: any) => boolean
> = {
  minPrice: (apartament, minPrice: number) => apartament.price >= minPrice,
  maxPrice: (apartament, maxPrice: number) => apartament.price <= maxPrice,
  accommodationType: (apartament, accommodationType: string[]) =>
    accommodationType.includes(apartament.accommodationType),
  bedrooms: (apartament, bedrooms: number) => apartament.bedrooms === bedrooms,
  beds: (apartament, beds: number) => apartament.beds === beds,
  bathrooms: (apartament, bathrooms: number) =>
    apartament.bathrooms === bathrooms,
  country: (apartament, country: string) => apartament.country === country,
  province: (apartament, province: string) => apartament.province === province,
  rating: (apartament, rating: number) => apartament.rating === rating,
  category: (apartament, category: string) => apartament.category === category,
  guests: (apartament, guests: number) => apartament.guests >= guests,
  place: (apartament, place: string) => apartament.country === place,
  checkIn: (apartament, checkIn: string) => apartament.checkIn === checkIn,
  checkOut: (apartament, checkOut: string) => apartament.checkOut === checkOut,
};

export const getFilteredApartaments = (
  apartaments: IApartament[],
  filters: ApartamentFilters
) => {
  let filteredApartaments = apartaments;

  const filterKeys = Object.keys(filters) as (keyof ApartamentFilters)[];

  filterKeys.forEach((filterKey) => {
    const filterAction = filterActions[filterKey];

    filteredApartaments = filterApartamentBy(
      filteredApartaments,
      filterKey,
      filterAction
    )(filters);
  });

  return filteredApartaments;
};
