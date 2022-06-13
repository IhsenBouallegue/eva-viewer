import { useEffect, useLayoutEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { computeVertices } from "../utils/functions";
import {
  mergeBufferGeometries,
  mergeVertices,
} from "three/examples/jsm/utils/BufferGeometryUtils.js";
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

export const TopPart3D = ({
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
}: Props) => {
  const measures = new THREE.Vector3();
  let vertices = computeVertices(
    sigma,
    height,
    slantLength,
    width,
    totalLength,
    bodyHeight,
    alpha
  );
  const mergedGeometry = useMemo(() => {
    const geo1 = new THREE.BufferGeometry();
    geo1.setAttribute("position", new THREE.BufferAttribute(vertices, 3));
    const geo2 = geo1
      .clone()
      .applyMatrix4(new THREE.Matrix4().makeScale(-1, 1, 1));
    const mergedGeometry = mergeVertices(mergeBufferGeometries([geo1, geo2]));
    mergedGeometry.computeBoundingBox();
    mergedGeometry.boundingBox?.getSize(measures);
    setLength(measures.z);
    setHeight(measures.y - height);
    return mergedGeometry;
  }, [sigma, height, slantLength, width, totalLength]);

  return (
    <group position={position}>
      <mesh geometry={mergedGeometry}>
        <meshStandardMaterial
          flatShading={true}
          color="#646572"
          roughness={0.3}
          metalness={0.5}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
};

export default TopPart3D;
