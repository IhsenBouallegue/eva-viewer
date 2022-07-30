import * as THREE from "three";

import type { AirplaneParameters } from "../types/Types";

import { computeBodyVertices, computeTailVertices } from "./computeVertices";

export interface Distance {
  point1: string;
  point2: string;
  position: THREE.Vector3;
  distance: string;
}

function calculateDistance(
  p1: THREE.Vector3,
  p2: THREE.Vector3,
  p1Name?: string,
  p2Name?: string
): Distance {
  const p3 = new THREE.Vector3();
  p3.add(p2);
  p3.add(p1);
  return {
    point1: p1Name ?? "",
    point2: p2Name ?? "",
    position: p3.divideScalar(2),
    distance: p1.distanceTo(p2).toFixed(1),
  };
}

export function computeDistance({
  sigma,
  height,
  slantLength,
  width,
  totalLength,
  bodyHeight,
  alpha,
}: AirplaneParameters): Distance[] {
  const { a, b, c, d, e, f, g, h, k, l } = computeBodyVertices({
    sigma,
    height,
    slantLength,
    width,
    totalLength,
    bodyHeight,
    alpha,
  } as AirplaneParameters);

  return [
    calculateDistance(a, b, "a", "b"),
    calculateDistance(a, c, "a", "c"),
    calculateDistance(d, c, "d", "c"),
    calculateDistance(d, b, "b", "d"),
    calculateDistance(b, f, "b", "f"),
    calculateDistance(d, h, "d", "h"),
    calculateDistance(a, e, "a", "e"),
    calculateDistance(c, l, "c", "l"),
    calculateDistance(d, l, "d", "l"),
    calculateDistance(h, f, "h", "f"),
    calculateDistance(h, g, "h", "g"),
    calculateDistance(h, k, "h", "k"),
    calculateDistance(e, g, "e", "g"),
    calculateDistance(e, f, "e", "f"),
    calculateDistance(k, l, "k", "l"),
  ];
}

export function computeTailDistance({
  tailHeight,
  tailWidth,
  tailLength,
  alpha,
  totalLength,
}: AirplaneParameters): Distance[] {
  const { m, n, o, p, q, r } = computeTailVertices({
    alpha,
    tailHeight,
    tailWidth,
    tailLength,
    totalLength,
  } as AirplaneParameters);

  return [
    calculateDistance(m, n, "m", "n"),
    calculateDistance(m, o, "m", "o"),
    calculateDistance(m, p, "m", "p"),
    calculateDistance(p, q, "p", "q"),
    calculateDistance(p, r, "p", "r"),
    calculateDistance(r, o, "r", "o"),
    calculateDistance(n, o, "n", "o"),
    calculateDistance(q, r, "q", "r"),
  ];
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getVerteciesMap({
  sigma,
  height,
  slantLength,
  width,
  totalLength,
  bodyHeight,
  alpha,
}: AirplaneParameters) {
  const points = computeBodyVertices({
    sigma,
    height,
    slantLength,
    width,
    totalLength,
    bodyHeight,
    alpha,
  } as AirplaneParameters);
  return Object.entries(points).map(([key, value]) => {
    return { name: key, pos: value };
  });
}

export default computeDistance;
