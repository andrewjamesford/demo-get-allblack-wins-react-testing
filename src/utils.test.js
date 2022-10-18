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

  test("Throw an error for invalid year", () => {
    const year = "";
    expect(() => getAllBlacksWins(matchData, year)).toThrow(
      "Invalid year provided."
    );
  });

  test("Returns 12 wins for 2012", () => {
    const result = getAllBlacksWins(matchData, 2012);
    expect(result).toBe(12);
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
    [2020, 3],
  ])("getAllBlacksWins get year %p and wins %p", (year, expected) => {
    const result = getAllBlacksWins(matchData, year);
    expect(result).toBe(expected);
  });

  test.each([
    [-2012, 0],
    [20130, 0],
    [1999, 0],
    [1, 0],
  ])("getAllBlacksWins get year %p and wins %p", (year, expected) => {
    const result = getAllBlacksWins(matchData, year);
    expect(result).toBe(expected);
  });

  test("Returns 0 wins for 2022", () => {
    const result = getAllBlacksWins(matchData, 2022);
    expect(result).toBe(0);
  });

  test("Returns 0 wins for '2022'", () => {
    expect(() => getAllBlacksWins(matchData, "2022")).toThrow(
      "Year must be a number."
    );
  });

  test("Returns 0 wins for 'twenty twenty two'", () => {
    expect(() => getAllBlacksWins(matchData, "twenty twenty two")).toThrow(
      "Year must be a number."
    );
  });
});
