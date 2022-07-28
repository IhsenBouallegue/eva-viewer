import { useMemo, useState } from "react";
import * as THREE from "three";
import {
  mergeBufferGeometries,
  mergeVertices,
} from "three/examples/jsm/utils/BufferGeometryUtils";

import type { AirplaneParameters } from "../../types/Types";
import {
  computeBodyGeometry,
  computeTailGeometry,
} from "../../utils/computeGeometry";

export function AirplaneMesh({
  sigma,
  height,
  slantLength,
  width,
  bodyHeight,
  alpha,
  tailHeight,
  tailLength,
  tailWidth,
  totalLength,
}: AirplaneParameters) {
  const [posLength, setLength] = useState(0);
  const [posHeight, setHeight] = useState(0);
  const mergedTailGeometry = useMemo(() => {
    const tailVertices = computeTailGeometry({
      alpha,
      tailHeight,
      tailLength,
      tailWidth,
      totalLength,
    } as AirplaneParameters);
    const tail1 = new THREE.BufferGeometry();
    tail1.setAttribute("position", new THREE.BufferAttribute(tailVertices, 3));
    const tail2 = tail1
      .clone()
      .applyMatrix4(new THREE.Matrix4().makeScale(-1, 1, 1));
    return mergeVertices(mergeBufferGeometries([tail1, tail2]));
  }, [alpha, tailHeight, tailLength, tailWidth, totalLength]);
  const mergedGeometry = useMemo(() => {
    const bodyVertices = computeBodyGeometry({
      sigma,
      height,
      slantLength,
      width,
      totalLength,
      bodyHeight,
      alpha,
    } as AirplaneParameters);
    const geo1 = new THREE.BufferGeometry();
    geo1.setAttribute("position", new THREE.BufferAttribute(bodyVertices, 3));
    const geo2 = geo1
      .clone()
      .applyMatrix4(new THREE.Matrix4().makeScale(-1, 1, 1));
    const result = mergeVertices(mergeBufferGeometries([geo1, geo2]));
    result.computeBoundingBox();
    const measures = new THREE.Vector3();
    result.boundingBox?.getSize(measures);
    setLength(measures.z);
    setHeight(measures.y - height);
    return result;
  }, [
    alpha,
    bodyHeight,
    height,
    setHeight,
    setLength,
    sigma,
    slantLength,
    totalLength,
    width,
  ]);
  return (
    <group position={[0, posHeight, -posLength / 2]}>
      <mesh geometry={mergedGeometry}>
        <meshStandardMaterial
          flatShading
          color="#646572"
          roughness={0.3}
          metalness={0.5}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh geometry={mergedTailGeometry}>
        <meshStandardMaterial
          flatShading
          color="#646572"
          roughness={0.3}
          metalness={0.5}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
}

export default AirplaneMesh;
