import * as THREE from "three";

export const vector3toFace = (
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

export const calculateTopPart = (
  sigma: number,
  height: number,
  slantLength: number,
  width: number,
  totalLength: number,
  bodyHeight: number,
  alpha: number
) => {
  const rad = (angleInDegrees: number) => {
    return (angleInDegrees * Math.PI) / 180;
  };
  const a = new THREE.Vector3(0, height, slantLength / Math.cos(rad(sigma)));
  const b = new THREE.Vector3(
    width - slantLength,
    height,
    (width - slantLength) / Math.tan(rad(sigma)) +
      slantLength / Math.cos(rad(sigma))
  );
  const c = new THREE.Vector3(0, 0, 0);
  const d = new THREE.Vector3(width, 0, width);

  const e = new THREE.Vector3(0, height, totalLength);
  const f = new THREE.Vector3(width - slantLength, height, totalLength);
  const g = new THREE.Vector3(0, 0, totalLength);
  const h = new THREE.Vector3(width, 0, totalLength);

  const k = new THREE.Vector3(
    0,
    -bodyHeight,
    totalLength + bodyHeight / Math.tan(rad(alpha))
  );
  const l = new THREE.Vector3(
    0,
    -bodyHeight,
    bodyHeight / Math.tan(rad(alpha))
  );

  return { a, b, c, d, e, f, g, h, k, l };
};

export function computeVertices(
  sigma: number,
  height: number,
  slantLength: number,
  width: number,
  totalLength: number,
  bodyHeight: number,
  alpha: number
) {
  let vertices = new Float32Array();
  const { a, b, c, d, e, f, g, h, k, l } = calculateTopPart(
    sigma,
    height,
    slantLength,
    width,
    totalLength,
    bodyHeight,
    alpha
  );

  const face1 = vector3toFace(c, a, b, d);
  const face2 = vector3toFace(h, d, b, f);
  const face3 = vector3toFace(b, a, e, f);
  const face4 = vector3toFace(h, f, e, g);
  const face5 = vector3toFace(d, h, k, l);
  vertices = new Float32Array([
    ...face1,
    ...face2,
    ...face3,
    ...face4,
    ...face5,
    ...d.toArray(),
    ...l.toArray(),
    ...c.toArray(),
    ...h.toArray(),
    ...k.toArray(),
    ...g.toArray(),
  ]);
  return vertices;
}
