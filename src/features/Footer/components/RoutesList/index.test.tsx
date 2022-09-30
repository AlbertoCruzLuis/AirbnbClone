import { render, screen, waitFor } from "@testing-library/react";

import { RoutesList } from ".";

const routes = [
  {
    name: "A",
    url: "/a",
  },
  {
    name: "B",
    url: "/b",
  },
];

describe("RoutesList component", () => {
  it("should render name of RoutesList", async () => {
    render(<RoutesList routes={routes} title="routes" />);

    await waitFor(() => {
      expect(screen.getByText("A")).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(screen.getByText("B")).toBeInTheDocument();
    });
  });
});
