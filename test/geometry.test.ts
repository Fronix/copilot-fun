import { areaOfTriangle } from "../src/geometry";

// Copilot please test the function areaOfTriangle

describe("Test AreaOfTriangle function", () => {
  test("should return the area of a triangle", () => {
    expect(areaOfTriangle({ x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 })).toBe(
      0
    );
    expect(areaOfTriangle({ x: 0, y: 0 }, { x: 0, y: 0 }, { x: 1, y: 1 })).toBe(
      0
    );
    expect(areaOfTriangle({ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 0, y: 1 })).toBe(
      0.5
    );
    expect(areaOfTriangle({ x: 5, y: 1 }, { x: 1, y: 3 }, { x: 2, y: 1 })).toBe(
      3
    );
  });
});
