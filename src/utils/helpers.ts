import type { Vector3 } from "three";

export const vector3toFace = (
  vectors1: Vector3,
  vectors2: Vector3,
  vectors3: Vector3,
  vectors4: Vector3
) => [
  ...vectors1.toArray(),
  ...vectors2.toArray(),
  ...vectors3.toArray(),
  ...vectors3.toArray(),
  ...vectors4.toArray(),
  ...vectors1.toArray(),
];
