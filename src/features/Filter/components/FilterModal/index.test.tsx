import { fireEvent, render, screen } from "@testing-library/react";

import { customRender } from "@/utils/testUtils";

import { FilterModal } from ".";

describe("FilterModal", () => {
  it("should render correctly", async () => {
    render(<FilterModal onClose={() => {}} />);

    expect(screen.getByLabelText("Filter Modal")).toBeInTheDocument();
  });

  it("should change min Price of input value when execute onChange function", () => {
    customRender(<FilterModal onClose={() => {}} />);

    const input = screen.getByLabelText("Precio mínimo");

    fireEvent.change(input, { target: { value: 200 } });

    expect(input).toHaveValue(200);
  });
});
