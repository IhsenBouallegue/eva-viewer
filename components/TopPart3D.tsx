import { useEffect, useRef } from "react";
import * as THREE from "three";
import { Vector3toFace } from "../util/functions";

export const TopPart3D = ({
  setLength,
  ...props
}: {
  setLength: (x: any) => void;
}) => {
  const measures = new THREE.Vector3();
  const ref = useRef<THREE.Mesh>(null!);
  const a = new THREE.Vector3(0, 20, 28.28);
  const b = new THREE.Vector3(10, 20, 38.38);
  const c = new THREE.Vector3(0, 0, 0);
  const d = new THREE.Vector3(30, 0, 30);
  const e = new THREE.Vector3(0, 20, 100);
  const f = new THREE.Vector3(10, 20, 100);
  const g = new THREE.Vector3(0, 0, 100);
  const h = new THREE.Vector3(30, 0, 100);
  const face1 = Vector3toFace(c, a, b, d);
  const face2 = Vector3toFace(h, d, b, f);
  const face3 = Vector3toFace(b, a, e, f);
  const face4 = Vector3toFace(h, f, e, g);
  const vertices = new Float32Array([...face1, ...face2, ...face3, ...face4]);
  useEffect(() => {
    ref.current.applyMatrix4(new THREE.Matrix4().makeScale(-1, 1, 1));
    new THREE.Box3().setFromObject(ref.current).getSize(measures);
    setLength(measures.z);
  }, []);
  return (
    <group {...props}>
      <mesh>
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
      <mesh ref={ref}>
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
