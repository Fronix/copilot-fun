import { levenshteinDistance } from "../src/levenshteinDistance";

// Copilot, please test the function levenshteinDistance
describe("test levenshteinDistance", () => {
  it("should calculate the levensthein distance", () => {
    expect(levenshteinDistance("kitten", "sitting")).toBe(3);
    expect(levenshteinDistance("abc", "abc")).toBe(0);
    expect(levenshteinDistance("abc", "def")).toBe(3);
    expect(levenshteinDistance("abc", "")).toBe(3);
    expect(levenshteinDistance("", "def")).toBe(3);
    expect(levenshteinDistance("", "")).toBe(0);
    expect(levenshteinDistance("123abc123", "123abcd123")).toBe(1);
  });
});
