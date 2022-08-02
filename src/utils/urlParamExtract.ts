import type { Parameters } from "../types/Types";

export function urlParamExtract({
  airplaneColor,
  alpha,
  sigma,
  height,
  slantLength,
  width,
  totalLength,
  bodyHeight,
  tailLength,
  tailWidth,
  tailHeight,
  wingLength,
  wingHeight,
  wingSpan,
}: Parameters) {
  return {
    airplaneColor,
    alpha: Number(alpha),
    sigma: Number(sigma),
    height: Number(height),
    slantLength: Number(slantLength),
    width: Number(width),
    totalLength: Number(totalLength),
    bodyHeight: Number(bodyHeight),
    tailLength: Number(tailLength),
    tailWidth: Number(tailWidth),
    tailHeight: Number(tailHeight),
    wingLength: Number(wingLength),
    wingHeight: Number(wingHeight),
    wingSpan: Number(wingSpan),
  };
}
