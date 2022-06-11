import { useEffect, useLayoutEffect, useRef } from "react";
import * as THREE from "three";
import { CalculateTopPart, Vector3toFace } from "../utils/functions";

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

function computeVertices(
  sigma: number,
  height: number,
  slantLength: number,
  width: number,
  totalLength: number
) {
  let vertices = new Float32Array();
  const { a, b, c, d, e, f, g, h } = CalculateTopPart(
    sigma,
    height,
    slantLength,
    width,
    totalLength
  );

  const face1 = Vector3toFace(c, a, b, d);
  const face2 = Vector3toFace(h, d, b, f);
  const face3 = Vector3toFace(b, a, e, f);
  const face4 = Vector3toFace(h, f, e, g);
  vertices = new Float32Array([...face1, ...face2, ...face3, ...face4]);
  return vertices;
}
