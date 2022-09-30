import type { IApartament } from "@/features/Apartament/hooks/useApartament";

export interface Filters {
  price?: {
    min: number;
    max: number;
  };
  accommodationType?: string;
  bedrooms?: number;
  beds?: number;
  bathrooms?: number;
  country?: string;
  province?: string;
  rating?: number;
}

const filterApartamentByPrice = (
  apartaments: IApartament[],
  price: { min: number; max: number }
) => {
  const { min, max } = price;

  return apartaments.filter(
    (apartament) => apartament.price >= min && apartament.price <= max
  );
};

const filterApartamentByAccommodationType = (
  apartaments: IApartament[],
  accommodationType: string
) => {
  return apartaments.filter(
    (apartament) => apartament.accommodationType === accommodationType
  );
};

const filterApartamentByBedrooms = (
  apartaments: IApartament[],
  bedrooms: number
) => {
  return apartaments.filter((apartament) => apartament.bedrooms === bedrooms);
};

const filterApartamentByBeds = (apartaments: IApartament[], beds: number) => {
  return apartaments.filter((apartament) => apartament.beds === beds);
};

const filterApartamentByBathrooms = (
  apartaments: IApartament[],
  bathrooms: number
) => {
  return apartaments.filter((apartament) => apartament.bathrooms === bathrooms);
};

const filterApartamentByCountry = (
  apartaments: IApartament[],
  country: string
) => {
  return apartaments.filter((apartament) => apartament.country === country);
};

const filterApartamentByProvince = (
  apartaments: IApartament[],
  province: string
) => {
  return apartaments.filter((apartament) => apartament.province === province);
};

const filterApartamentByRating = (
  apartaments: IApartament[],
  rating: number
) => {
  return apartaments.filter((apartament) => apartament.rating === rating);
};

export const getFilteredApartaments = (
  apartaments: IApartament[],
  filters: Filters
) => {
  let filteredApartaments = apartaments;

  if (filters.price) {
    filteredApartaments = filterApartamentByPrice(
      filteredApartaments,
      filters.price
    );
  }

  if (filters.accommodationType) {
    filteredApartaments = filterApartamentByAccommodationType(
      filteredApartaments,
      filters.accommodationType
    );
  }

  if (filters.bedrooms) {
    filteredApartaments = filterApartamentByBedrooms(
      filteredApartaments,
      filters.bedrooms
    );
  }

  if (filters.beds) {
    filteredApartaments = filterApartamentByBeds(
      filteredApartaments,
      filters.beds
    );
  }

  if (filters.bathrooms) {
    filteredApartaments = filterApartamentByBathrooms(
      filteredApartaments,
      filters.bathrooms
    );
  }

  if (filters.country) {
    filteredApartaments = filterApartamentByCountry(
      filteredApartaments,
      filters.country
    );
  }

  if (filters.province) {
    filteredApartaments = filterApartamentByProvince(
      filteredApartaments,
      filters.province
    );
  }

  if (filters.rating) {
    filteredApartaments = filterApartamentByRating(
      filteredApartaments,
      filters.rating
    );
  }

  return filteredApartaments;
};
