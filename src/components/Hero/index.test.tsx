import { screen } from "@testing-library/react";

import { customRender } from "@/utils/testUtils";

import { Hero } from ".";

describe("Hero component", () => {
  it("should have h1 with text 'Airbnb'", () => {
    customRender(<Hero />);

    expect(
      screen.getByRole("heading", { name: /Airbnb/i })
    ).toBeInTheDocument();
  });
});
