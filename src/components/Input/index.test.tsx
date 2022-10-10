import { fireEvent, screen } from "@testing-library/react";

import { customRender } from "@/utils/testUtils";

import { Input } from ".";

describe("Input component", () => {
  it("should have input with text 'Precio mínimo'", () => {
    customRender(<Input label="Precio mínimo" value={100} currency="€" />);

    expect(screen.getByText("Precio mínimo")).toBeInTheDocument();
  });

  it("should change input value when execute onChange function", () => {
    let value = 100;
    const onChange = jest.fn((newValue) => {
      value = newValue;
    });

    const { rerender } = customRender(
      <Input
        label="Precio mínimo"
        value={value}
        onChange={onChange}
        currency="€"
      />
    );

    const input = screen.getByLabelText("Precio mínimo");

    expect(input).toHaveValue(100);

    fireEvent.change(input, { target: { value: 200 } });

    rerender(
      <Input
        label="Precio mínimo"
        value={value}
        onChange={onChange}
        currency="€"
      />
    );

    expect(input).toHaveValue(200);
  });
});
