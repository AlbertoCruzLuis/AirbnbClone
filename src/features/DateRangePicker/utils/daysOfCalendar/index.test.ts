import { getDaysOfCalendar } from ".";

describe("getDaysOfCalendar util", () => {
  it("should return days of calendar", () => {
    const days = getDaysOfCalendar(2023, 1);
    expect(days).toEqual([
      [null, null, null, null, null, null, 1],
      [2, 3, 4, 5, 6, 7, 8],
      [9, 10, 11, 12, 13, 14, 15],
      [16, 17, 18, 19, 20, 21, 22],
      [23, 24, 25, 26, 27, 28, 29],
      [30, 31, null, null, null, null, null],
    ]);
  });
});
