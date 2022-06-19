import { useMemo } from "react";
import * as THREE from "three";
import {
  mergeBufferGeometries,
  mergeVertices,
} from "three/examples/jsm/utils/BufferGeometryUtils";

import { computeVertices } from "../utils/functions";

interface Props {
  setLength: any;
  setHeight: any;
  position: any;
  sigma: number;
  height: number;
  slantLength: number;
  width: number;
  totalLength: number;
  bodyHeight: number;
  alpha: number;
}

export function TopPart3D({
  setLength,
  setHeight,
  position,
  sigma,
  height,
  slantLength,
  width,
  totalLength,
  bodyHeight,
  alpha,
}: Props) {
  const mergedGeometry = useMemo(() => {
    const vertices = computeVertices(
      sigma,
      height,
      slantLength,
      width,
      totalLength,
      bodyHeight,
      alpha
    );
    const geo1 = new THREE.BufferGeometry();
    geo1.setAttribute("position", new THREE.BufferAttribute(vertices, 3));
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
    <group position={position}>
      <mesh geometry={mergedGeometry}>
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

export default TopPart3D;
