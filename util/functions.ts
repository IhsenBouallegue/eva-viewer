export const Vector3toFace = (
  vectors1: THREE.Vector3,
  vectors2: THREE.Vector3,
  vectors3: THREE.Vector3,
  vectors4: THREE.Vector3
) => {
  return [
    ...vectors1.toArray(),
    ...vectors2.toArray(),
    ...vectors3.toArray(),
    ...vectors3.toArray(),
    ...vectors4.toArray(),
    ...vectors1.toArray(),
  ];
};
