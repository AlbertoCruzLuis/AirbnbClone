import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import { CalendarMonthCarousel } from ".";

describe("CalendarMonthCarousel component", () => {
  it("should change month when click on button next month", async () => {
    render(
      <CalendarMonthCarousel
        month={1}
        year={2021}
        startDate="2021-01-01"
        endDate="2021-01-01"
        hoveredDate="2021-01-01"
        onStartDateChange={() => {}}
        onEndDateChange={() => {}}
        onHoveredDateChange={() => {}}
      />
    );

    // First: See January month & February month in the screen
    await waitFor(() => {
      expect(screen.getByText("January", { exact: false })).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(
        screen.getByText("February", { exact: false })
      ).toBeInTheDocument();
    });

    // Second: Click on button next month
    fireEvent.click(screen.getByTitle("Next Month"));

    // Third: See February month & March month in the screen
    await waitFor(() => {
      expect(
        screen.getByText("February", { exact: false })
      ).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(screen.getByText("March", { exact: false })).toBeInTheDocument();
    });
  });

  it("should change month when click on button previous month", async () => {
    render(
      <CalendarMonthCarousel
        month={2}
        year={2021}
        startDate="2021-01-01"
        endDate="2021-01-01"
        hoveredDate="2021-01-01"
        onStartDateChange={() => {}}
        onEndDateChange={() => {}}
        onHoveredDateChange={() => {}}
      />
    );

    // First: See February month & March month in the screen
    await waitFor(() => {
      expect(
        screen.getByText("February", { exact: false })
      ).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(screen.getByText("March", { exact: false })).toBeInTheDocument();
    });

    // Second: Click on button previous month
    fireEvent.click(screen.getByTitle("Previous Month"));

    // Third: See January month & February month in the screen
    await waitFor(() => {
      expect(screen.getByText("January", { exact: false })).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(
        screen.getByText("February", { exact: false })
      ).toBeInTheDocument();
    });
  });

  it("should change year when click on button next month and is the last month", async () => {
    render(
      <CalendarMonthCarousel
        month={12}
        year={2021}
        startDate="2021-01-01"
        endDate="2021-01-01"
        hoveredDate="2021-01-01"
        onStartDateChange={() => {}}
        onEndDateChange={() => {}}
        onHoveredDateChange={() => {}}
      />
    );

    // First: See December month & January month in the screen
    await waitFor(() => {
      expect(screen.getByText("December de 2021")).toBeInTheDocument();
    });

    // Second: Click on button next month
    fireEvent.click(screen.getByTitle("Next Month"));

    // Third: See January de 2022 in the screen
    await waitFor(() => {
      expect(screen.getByText("January de 2022")).toBeInTheDocument();
    });
  });

  it("should change year when click on button previous month and is the first month", async () => {
    render(
      <CalendarMonthCarousel
        month={1}
        year={2021}
        startDate="2021-01-01"
        endDate="2021-01-01"
        hoveredDate="2021-01-01"
        onStartDateChange={() => {}}
        onEndDateChange={() => {}}
        onHoveredDateChange={() => {}}
      />
    );

    // First: See January month & February month in the screen
    await waitFor(() => {
      expect(screen.getByText("January de 2021")).toBeInTheDocument();
    });

    // Second: Click on button previous month
    fireEvent.click(screen.getByTitle("Previous Month"));

    // Third: See December de 2020 in the screen
    await waitFor(() => {
      expect(screen.getByText("December de 2020")).toBeInTheDocument();
    });
  });
});
