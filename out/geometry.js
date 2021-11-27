"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.areaOfTriangle = void 0;
var areaOfTriangle = function (p1, p2, p3) {
    var a = distanceBetweenPoints(p1, p2);
    var b = distanceBetweenPoints(p2, p3);
    var c = distanceBetweenPoints(p1, p3);
    var s = (a + b + c) / 2;
    return Number(Math.sqrt(s * (s - a) * (s - b) * (s - c)).toFixed(1));
};
exports.areaOfTriangle = areaOfTriangle;
var distanceBetweenPoints = function (p1, p2) {
    var xDiff = p1.x - p2.x;
    var yDiff = p1.y - p2.y;
    var distance = Math.sqrt(xDiff * xDiff + yDiff * yDiff);
    return distance;
};
