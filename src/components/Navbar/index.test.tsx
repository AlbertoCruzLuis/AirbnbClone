import { render, screen, waitFor } from "@testing-library/react";

import { Navbar } from ".";

const routes = [
  {
    name: "Home",
    url: "/home",
  },
  {
    name: "About",
    url: "/about",
  },
];

describe("Navbar component", () => {
  it("should show all routes of navbar", async () => {
    render(<Navbar routes={routes} />);

    await waitFor(() => {
      expect(screen.getByText("Home")).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(screen.getByText("About")).toBeInTheDocument();
    });
  });
});
