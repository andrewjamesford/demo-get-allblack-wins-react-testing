import matchData from "./data.json";
import { getAllBlacksWins } from "./utils";

describe("getAllBlacksWins", () => {
  test("Throws an error for invalid matchData", () => {
    const matches = {};
    const year = 2022;
    expect(() => getAllBlacksWins(matches, year)).toThrow(
      "Match data not provided."
    );
  });

  test("Throws an error for invalid year", () => {
    expect(() => getAllBlacksWins(matchData, "2012")).toThrow(
      "Year must be a number."
    );
  });

  test("Happy path 2012 12 wins", () => {
    const result = getAllBlacksWins(matchData, 2012);
    expect(result).toBe(12);
  });

  test("Negative path for data not available", () => {
    const result = getAllBlacksWins(matchData, 2000);
    expect(result).toBe(0);
  });

  test.each([
    [2012, 12],
    [2013, 14],
    [2014, 12],
    [2015, 11],
    [2016, 13],
    [2017, 11],
    [2018, 12],
    [2019, 8],
    [2020, 3]
  ])(
    "getAllBlackWins will get the appropriate number of wins for the year",
    (year, wins) => {
      const expected = wins;
      const result = getAllBlacksWins(matchData, year);
      expect(result).toBe(expected);
    }
  );
});
