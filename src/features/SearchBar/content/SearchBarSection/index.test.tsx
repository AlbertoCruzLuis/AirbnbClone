import { fireEvent, screen } from "@testing-library/react";

import { customRender } from "@/utils/testUtils";

import { SearchProvider } from "../../providers/SearchProvider";
import { SearchBarSection } from ".";

describe("SearchBarSection component", () => {
  it("should change color of day when user click", async () => {
    customRender(
      <SearchProvider>
        <SearchBarSection />
      </SearchProvider>
    );

    fireEvent.click(screen.getByTitle("DateRangePicker"));

    const dayOne = screen.getAllByText("1")[0];
    if (!dayOne) {
      throw new Error("Day not found");
    }
    fireEvent.click(dayOne);

    expect(dayOne).toHaveClass("bg-darkcyan");

    const dayFour = screen.getAllByText("4")[0];
    if (!dayFour) {
      throw new Error("Day not found");
    }
    fireEvent.click(dayFour);

    expect(dayOne).toHaveClass("bg-darkcyan");
  });

  it("should change color of day when user hover", async () => {
    customRender(
      <SearchProvider>
        <SearchBarSection />
      </SearchProvider>
    );

    fireEvent.click(screen.getByTitle("DateRangePicker"));

    const dayOne = screen.getAllByText("1")[0];
    if (!dayOne) {
      throw new Error("Day not found");
    }
    fireEvent.click(dayOne);

    const dayTwo = screen.getAllByText("2")[0];
    const dayThree = screen.getAllByText("3")[0];
    const dayFour = screen.getAllByText("4")[0];
    if (!dayFour) {
      throw new Error("Day not found");
    }
    fireEvent.mouseOver(dayFour);

    expect(dayTwo).toHaveClass("bg-mediumturquoise");
    expect(dayThree).toHaveClass("bg-mediumturquoise");
  });

  it("not should change color of day when user do hover and endDate is selected", async () => {
    customRender(
      <SearchProvider>
        <SearchBarSection />
      </SearchProvider>
    );

    fireEvent.click(screen.getByTitle("DateRangePicker"));

    const dayOne = screen.getAllByText("1")[0];
    if (!dayOne) {
      throw new Error("Day not found");
    }
    fireEvent.click(dayOne);

    const dayFour = screen.getAllByText("4")[0];
    if (!dayFour) {
      throw new Error("Day not found");
    }
    fireEvent.click(dayFour);

    const dayFive = screen.getAllByText("5")[0];
    if (!dayFive) {
      throw new Error("Day not found");
    }
    fireEvent.mouseOver(dayFive);

    expect(dayFive).not.toHaveClass("bg-mediumturquoise");
  });

  it("should clear dates when user click in clearDates button", async () => {
    customRender(
      <SearchProvider>
        <SearchBarSection />
      </SearchProvider>
    );

    fireEvent.click(screen.getByTitle("DateRangePicker"));

    const dayOne = screen.getAllByText("1")[0];
    if (!dayOne) {
      throw new Error("Day not found");
    }
    fireEvent.click(dayOne);

    const dayFour = screen.getAllByText("4")[0];
    if (!dayFour) {
      throw new Error("Day not found");
    }
    fireEvent.click(dayFour);

    fireEvent.click(screen.getByTitle("clearDates"));

    expect(screen.queryByTitle("clearDates")).not.toBeInTheDocument();
  });

  it("should increment value of quantity of Adults when user click in increment button", async () => {
    customRender(
      <SearchProvider>
        <SearchBarSection />
      </SearchProvider>
    );

    fireEvent.click(screen.getByTitle("dropdownHost"));

    const incrementAdultsButton = screen.getAllByTitle("Increment")[0];
    if (!incrementAdultsButton) {
      throw new Error("Increment button not found");
    }

    fireEvent.click(incrementAdultsButton);

    expect(screen.getByText("2")).toBeInTheDocument();
  });

  it("should decrement value of quantity of Children when user click in decrement button", async () => {
    customRender(
      <SearchProvider>
        <SearchBarSection />
      </SearchProvider>
    );

    fireEvent.click(screen.getByTitle("dropdownHost"));

    const incrementChildrenButton = screen.getAllByTitle("Increment")[1];
    if (!incrementChildrenButton) {
      throw new Error("Increment button not found");
    }

    fireEvent.click(incrementChildrenButton);
    fireEvent.click(incrementChildrenButton);
    fireEvent.click(incrementChildrenButton);
    fireEvent.click(incrementChildrenButton);

    const decrementChildrenButton = screen.getAllByTitle("Decrement")[1];
    if (!decrementChildrenButton) {
      throw new Error("Decrement button not found");
    }

    fireEvent.click(decrementChildrenButton);

    expect(screen.getByText("3")).toBeInTheDocument();
  });

  it("should show name of place when user write in inputSearch", async () => {
    customRender(
      <SearchProvider>
        <SearchBarSection />
      </SearchProvider>
    );

    const inputSearch: HTMLInputElement = screen.getByLabelText("input-search");

    fireEvent.change(inputSearch, { target: { value: "Rio de Janeiro" } });

    expect(inputSearch.value).toBe("Rio de Janeiro");
  });
});
