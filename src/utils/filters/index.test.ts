import type { IApartament } from "@/features/Apartament/hooks/useApartament";

import { getFilteredApartaments } from ".";

const apartaments: IApartament[] = [
  {
    id: "1",
    title: "Apartament 1",
    imageUrl: "https://picsum.photos/200/300",
    price: 50,
    accommodationType: "Entire place",
    bedrooms: 1,
    beds: 1,
    bathrooms: 1,
    zipCode: "08001",
    country: "Spain",
    province: "Barcelona",
    rating: 4,
    category: "Playas",
  },
  {
    id: "2",
    title: "Apartament 2",
    imageUrl: "https://picsum.photos/200/300",
    price: 80,
    accommodationType: "Entire place",
    bedrooms: 1,
    beds: 3,
    bathrooms: 1,
    zipCode: "08001",
    country: "Spain",
    province: "Madrid",
    rating: 3,
    category: "Piscinas increibles",
  },
];

describe("getFilteredApartaments util", () => {
  it("should return first apartament", () => {
    const filters = {
      price: { min: 0, max: 100 },
      accommodationType: "Entire place",
      bedrooms: 1,
      beds: 1,
      bathrooms: 1,
      country: "Spain",
      province: "Barcelona",
      rating: 4,
      category: "Playas",
    };

    const filteredApartaments = getFilteredApartaments(apartaments, filters);

    expect(filteredApartaments).toEqual([apartaments[0]]);
  });

  it("should return second apartament", () => {
    const filters = {
      price: { min: 0, max: 100 },
      accommodationType: "Entire place",
      bedrooms: 1,
      beds: 3,
      bathrooms: 1,
      country: "Spain",
      province: "Madrid",
      rating: 3,
      category: "Piscinas increibles",
    };

    const filteredApartaments = getFilteredApartaments(apartaments, filters);

    expect(filteredApartaments).toEqual([apartaments[1]]);
  });
});
