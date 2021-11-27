// Copilot, please calculate the area of a triangle

type Point = { x: number; y: number };

const areaOfTriangle = (p1: Point, p2: Point, p3: Point) => {
  const a = distanceBetweenPoints(p1, p2);
  const b = distanceBetweenPoints(p2, p3);
  const c = distanceBetweenPoints(p1, p3);
  const s = (a + b + c) / 2;
  return Number(Math.sqrt(s * (s - a) * (s - b) * (s - c)).toFixed(1));
};

const distanceBetweenPoints = (p1: Point, p2: Point) => {
  const xDiff = p1.x - p2.x;
  const yDiff = p1.y - p2.y;
  const distance = Math.sqrt(xDiff * xDiff + yDiff * yDiff);
  return distance;
};

export { areaOfTriangle };
