import { render, screen, waitFor } from "@testing-library/react";

import { Button } from ".";

describe("Button component", () => {
  it("should render name of Button", async () => {
    render(<Button title="A" />);

    await waitFor(() => {
      expect(screen.getByText("A")).toBeInTheDocument();
    });
  });

  it("should render icon of Button", async () => {
    render(<Button title="A" icon={<div>-</div>} />);

    await waitFor(() => {
      expect(screen.getByText("-")).toBeInTheDocument();
    });
  });
});
