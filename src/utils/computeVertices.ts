import { AirplaneParameters } from "../types/Types";
import * as THREE from "three";

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
  totalLength,
}: AirplaneParameters) => {
  const m = new THREE.Vector3(0, 0, totalLength);
  const n = new THREE.Vector3(tailWidth, 0, totalLength);
  const o = new THREE.Vector3(
    0,
    -tailHeight,
    tailHeight / Math.tan(rad(alpha))
  );
  const p = new THREE.Vector3(0, 0, tailLength + totalLength);
  const q = new THREE.Vector3(tailWidth, 0, tailLength + totalLength);
  const r = new THREE.Vector3(
    0,
    -tailHeight,
    tailLength - tailHeight / Math.tan(rad(alpha)) + totalLength
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
