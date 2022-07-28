import * as THREE from "three";

export const vector3toFace = (
  vectors1: THREE.Vector3,
  vectors2: THREE.Vector3,
  vectors3: THREE.Vector3,
  vectors4: THREE.Vector3
) => [
  ...vectors1.toArray(),
  ...vectors2.toArray(),
  ...vectors3.toArray(),
  ...vectors3.toArray(),
  ...vectors4.toArray(),
  ...vectors1.toArray(),
];
