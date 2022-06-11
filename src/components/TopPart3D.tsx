import { useLayoutEffect, useRef } from "react";
import * as THREE from "three";
import { computeVertices } from "../utils/functions";

export const TopPart3D = ({
  setLength,
  position,
  sigma,
  height,
  slantLength,
  width,
  totalLength,
}: {
  setLength: any;
  position: any;
  sigma: number;
  height: number;
  slantLength: number;
  width: number;
  totalLength: number;
}) => {
  const measures = new THREE.Vector3();
  const mesh = useRef<THREE.Mesh>(null!);
  const mirrorMesh = useRef<THREE.Mesh>(null!);
  let vertices = computeVertices(
    sigma,
    height,
    slantLength,
    width,
    totalLength
  );
  console.log(vertices);
  useLayoutEffect(() => {
    mesh.current.geometry.attributes.position.needsUpdate = true;
    mirrorMesh.current.applyMatrix4(new THREE.Matrix4().makeScale(-1, 1, 1));
    mirrorMesh.current.geometry.attributes.position.needsUpdate = true;
    new THREE.Box3().setFromObject(mirrorMesh.current).getSize(measures);
    setLength(measures.z);
  }, [sigma, height, slantLength, width, totalLength]);
  return (
    <group position={position}>
      <mesh ref={mesh}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={24}
            array={vertices}
            itemSize={3}
          />
        </bufferGeometry>
        <meshStandardMaterial
          flatShading={true}
          color="#646572"
          roughness={0.3}
          metalness={0.5}
        />
      </mesh>
      <mesh ref={mirrorMesh}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={24}
            array={vertices}
            itemSize={3}
          />
        </bufferGeometry>
        <meshStandardMaterial
          flatShading={true}
          color="#646572"
          roughness={0.3}
          metalness={0.5}
        />
      </mesh>
    </group>
  );
};

export default TopPart3D;
