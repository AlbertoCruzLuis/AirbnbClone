import { screen, waitFor } from "@testing-library/react";

import { customRender } from "@/utils/testUtils";

import { ApartamentListSection } from ".";

const fakeData = [
  {
    id: "1",
    title: "Apartament 1",
    imageUrl: "https://picsum.photos/200/300",
    price: 100,
    accommodationType: "Entire place",
    bedrooms: 1,
    beds: 1,
    bathrooms: 1,
    zipCode: "12345",
    country: "Spain",
    province: "Barcelona",
    rating: 4,
  },
  {
    id: "2",
    title: "Apartament 2",
    imageUrl: "https://picsum.photos/200/300",
    price: 100,
    accommodationType: "Entire place",
    bedrooms: 1,
    beds: 2,
    bathrooms: 1,
    zipCode: "12348",
    country: "Spain",
    province: "Madrid",
    rating: 0,
  },
];

window.fetch = jest.fn().mockImplementation(() => {
  return Promise.resolve({
    json: () => Promise.resolve(fakeData),
  });
});

describe("ApartamentListSection", () => {
  it("should show the apartament list", async () => {
    customRender(<ApartamentListSection />);

    await waitFor(() => {
      expect(screen.getByText("Barcelona, Spain")).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(screen.getByText("Madrid, Spain")).toBeInTheDocument();
    });
  });
});
