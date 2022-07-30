import { Billboard, Edges, Text as Text3D } from "@react-three/drei";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import {
  mergeBufferGeometries,
  mergeVertices,
} from "three/examples/jsm/utils/BufferGeometryUtils";

import type { AirplaneParameters, Parameters } from "../../types/Types";
import type { Distance } from "../../utils/computeDistance";
import { computeDistance } from "../../utils/computeDistance";
import {
  computeBodyGeometry,
  computeTailGeometry,
} from "../../utils/computeGeometry";

import { WingMesh } from "./WingMesh";

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
  showBodyDistances,
  airplaneColor,
  wingLengthScale,
  wingHeightScale,
  wingSpan,
}: Parameters) {
  const [posLength, setLength] = useState(0);
  const groupMesh = useRef(null);

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
    return mergeVertices(mergeBufferGeometries([geo1, geo2]));
  }, [alpha, bodyHeight, height, sigma, slantLength, totalLength, width]);
  useEffect(() => {
    const aabb = new THREE.Box3();
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    aabb.setFromObject(groupMesh.current!);
    const boundingBox = new THREE.Vector3();
    aabb.getSize(boundingBox);
    setLength(boundingBox.z);
  }, [mergedGeometry, mergedTailGeometry]);

  const distances: Distance[] = useMemo(() => {
    return computeDistance({
      sigma,
      height,
      slantLength,
      width,
      totalLength,
      bodyHeight,
      alpha,
    } as AirplaneParameters);
  }, [alpha, bodyHeight, height, sigma, slantLength, totalLength, width]);

  return (
    <group ref={groupMesh} position={[0, bodyHeight, -posLength / 2]}>
      {showBodyDistances &&
        distances.map((distance) => (
          <Billboard
            key={`${distance.point1 + distance.point2}:${distance.distance}`}
            follow
            position={distance.position}
          >
            <Text3D fontSize={8} color="black" renderOrder={-999}>
              {`${
                distance.point1.toUpperCase() + distance.point2.toUpperCase()
              }: ${distance.distance}`}
              <meshBasicMaterial depthTest={false} />
            </Text3D>
          </Billboard>
        ))}
      <mesh geometry={mergedGeometry}>
        <meshStandardMaterial
          flatShading
          color={airplaneColor}
          roughness={0.3}
          metalness={0.5}
          side={THREE.DoubleSide}
        />
        {showBodyDistances && <Edges scale={1} color="white" />}
      </mesh>
      <mesh geometry={mergedTailGeometry}>
        <meshStandardMaterial
          flatShading
          color={airplaneColor}
          roughness={0.3}
          metalness={0.5}
          side={THREE.DoubleSide}
        />
      </mesh>
      <WingMesh
        wingLengthScale={wingLengthScale}
        wingHeightScale={wingHeightScale}
        wingSpan={wingSpan}
        airplaneColor={airplaneColor}
      />
    </group>
  );
}

export default AirplaneMesh;
