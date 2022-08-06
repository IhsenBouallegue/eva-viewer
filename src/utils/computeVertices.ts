import * as THREE from "three";

import type { AirplaneParameters } from "../types/Types";

const rad = (angleInDegrees: number) => (angleInDegrees * Math.PI) / 180;

export const computeBodyVertices = ({
  sigma,
  height,
  slantLength,
  width,
  totalLength,
  bodyHeight,
  alpha,
}: AirplaneParameters) => {
  const a = new THREE.Vector3(0, height, slantLength / Math.cos(rad(sigma)));
  const b = new THREE.Vector3(
    width - slantLength,
    height,
    (width - slantLength) / Math.tan(rad(sigma)) +
      slantLength / Math.cos(rad(sigma))
  );
  const c = new THREE.Vector3(0, 0, 0);
  const d = new THREE.Vector3(width, 0, width);

  const e = new THREE.Vector3(
    0,
    height,
    totalLength - height / Math.tan(rad(alpha))
  );
  const f = new THREE.Vector3(
    width - slantLength,
    height,
    totalLength - height / Math.tan(rad(alpha))
  );
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

  return {
    a,
    b,
    c,
    d,
    e,
    f,
    g,
    h,
    k,
    l,
  };
};

export const computeTailVertices = ({
  tailHeight,
  tailWidth,
  tailLength,
  alpha,
}: AirplaneParameters) => {
  const m = new THREE.Vector3(0, 0, 0);
  const n = new THREE.Vector3(tailWidth, 0, 0);
  const o = new THREE.Vector3(
    0,
    -tailHeight,
    tailHeight / Math.tan(rad(alpha)) + 0
  );
  const p = new THREE.Vector3(0, 0, tailLength + 0);
  const q = new THREE.Vector3(tailWidth, 0, tailLength + 0);
  const r = new THREE.Vector3(
    0,
    -tailHeight,
    tailLength - tailHeight / Math.tan(rad(alpha)) + 0
  );

  return {
    m,
    n,
    o,
    p,
    q,
    r,
  };
};
