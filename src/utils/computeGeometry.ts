import type { AirplaneParameters } from "../types/Types";

import { computeBodyVertices, computeTailVertices } from "./computeVertices";
import { vector3toFace } from "./helpers";

export function computeTailGeometry({
  tailHeight,
  tailWidth,
  tailLength,
  alpha,
  totalLength,
}: AirplaneParameters) {
  const { m, n, o, p, q, r } = computeTailVertices({
    alpha,
    tailHeight,
    tailWidth,
    tailLength,
    totalLength,
  } as AirplaneParameters);

  return new Float32Array([
    ...m.toArray(),
    ...n.toArray(),
    ...o.toArray(),
    ...r.toArray(),
    ...q.toArray(),
    ...p.toArray(),
    ...vector3toFace(n, q, r, o),
    ...vector3toFace(m, p, q, n),
  ]);
}

export function computeBodyGeometry({
  sigma,
  height,
  slantLength,
  width,
  totalLength,
  bodyHeight,
  alpha,
}: AirplaneParameters) {
  const { a, b, c, d, e, f, g, h, k, l } = computeBodyVertices({
    sigma,
    height,
    slantLength,
    width,
    totalLength,
    bodyHeight,
    alpha,
  } as AirplaneParameters);

  return new Float32Array([
    ...vector3toFace(c, a, b, d),
    ...vector3toFace(h, d, b, f),
    ...vector3toFace(b, a, e, f),
    ...vector3toFace(h, f, e, g),
    ...vector3toFace(d, h, k, l),
    ...d.toArray(),
    ...l.toArray(),
    ...c.toArray(),
    ...h.toArray(),
    ...k.toArray(),
    ...g.toArray(),
  ]);
}
