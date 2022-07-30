import { Edges } from "@react-three/drei";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import {
  mergeBufferGeometries,
  mergeVertices,
} from "three/examples/jsm/utils/BufferGeometryUtils";

import type { AirplaneParameters, Parameters } from "../../types/Types";
import type { Distance } from "../../utils/computeDistance";
import {
  computeTailDistance,
  computeDistance,
} from "../../utils/computeDistance";
import {
  computeBodyGeometry,
  computeTailGeometry,
} from "../../utils/computeGeometry";
import { DistanceLabel } from "../../utils/distanceLabel";

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
  showTailDistances,
  airplaneColor,
  wingLength,
  wingHeight,
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

  const bodyDistances: Distance[] = useMemo(() => {
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

  const tailDistances: Distance[] = useMemo(() => {
    return computeTailDistance({
      alpha,
      tailHeight,
      tailWidth,
      tailLength,
      totalLength,
    } as AirplaneParameters);
  }, [alpha, tailHeight, tailWidth, tailLength, totalLength]);

  return (
    <group ref={groupMesh} position={[0, bodyHeight, -posLength / 2]}>
      {showBodyDistances &&
        bodyDistances.map((distance) => DistanceLabel(distance))}
      {showTailDistances && (
        <group position={[0, 0, totalLength]}>
          {tailDistances.map((distance) => DistanceLabel(distance))}
        </group>
      )}
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
      <mesh geometry={mergedTailGeometry} position={[0, 0, totalLength]}>
        <meshStandardMaterial
          flatShading
          color={airplaneColor}
          roughness={0.3}
          metalness={0.5}
          side={THREE.DoubleSide}
        />
        {showTailDistances && <Edges scale={1} color="white" />}
      </mesh>
      <WingMesh
        wingLength={wingLength}
        wingHeight={wingHeight}
        wingSpan={wingSpan}
        airplaneColor={airplaneColor}
      />
    </group>
  );
}

export default AirplaneMesh;
