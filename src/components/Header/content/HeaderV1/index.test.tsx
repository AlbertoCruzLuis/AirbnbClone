import { render, screen, waitFor } from "@testing-library/react";

import { HeaderV1 } from ".";

describe("Header component", () => {
  it("should have navbar component", async () => {
    render(<HeaderV1 />);

    await waitFor(() => {
      expect(screen.getByLabelText("Main")).toBeInTheDocument();
    });
  });
});
