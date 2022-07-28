import { AirplaneParameters } from "../types/Types";
import { vector3toFace } from "./helpers";
import { computeBodyVertices, computeTailVertices } from "./computeVertices";

export function computeTailGeometry({
  tailHeight,
  tailWidth,
  tailLength,
  alpha,
  totalLength,
}: AirplaneParameters) {
  let vertices = new Float32Array();
  const { m, n, o, p, q, r } = computeTailVertices({
    alpha,
    tailHeight,
    tailWidth,
    tailLength,
    totalLength,
  } as AirplaneParameters);
  const face1 = vector3toFace(n, q, r, o);
  const face2 = vector3toFace(m, p, q, n);

  vertices = new Float32Array([
    ...m.toArray(),
    ...n.toArray(),
    ...o.toArray(),
    ...r.toArray(),
    ...q.toArray(),
    ...p.toArray(),
    ...face1,
    ...face2,
  ]);
  return vertices;
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
  let vertices = new Float32Array();
  const { a, b, c, d, e, f, g, h, k, l } = computeBodyVertices({
    sigma,
    height,
    slantLength,
    width,
    totalLength,
    bodyHeight,
    alpha,
  } as AirplaneParameters);

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
