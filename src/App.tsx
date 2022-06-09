import { Box } from "@mantine/core";
import { Canvas, useFrame } from "@react-three/fiber";
import { Line, PresentationControls } from "@react-three/drei";
import * as THREE from "three";
import { useEffect, useMemo, useRef, useState } from "react";

const Vector3toFace = (
  vectors1: THREE.Vector3,
  vectors2: THREE.Vector3,
  vectors3: THREE.Vector3,
  vectors4: THREE.Vector3
) => {
  return [
    ...vectors1.toArray(),
    ...vectors2.toArray(),
    ...vectors3.toArray(),
    ...vectors3.toArray(),
    ...vectors4.toArray(),
    ...vectors1.toArray(),
  ];
};

const Box3D = ({ ...props }) => {
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

  const vertices = new Float32Array([...face1, ...face2, ...face3]);
  useEffect(() => {
    ref.current.applyMatrix4(new THREE.Matrix4().makeScale(-1, 1, 1));
  }, []);

  return (
    <group {...props}>
      <mesh>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={18}
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
            count={18}
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

function App() {
  return (
    <Box id="canvas-container" sx={{ height: "100vh" }}>
      <Canvas
        orthographic
        dpr={[1, 2]}
        camera={{ position: [0, 0, 200], zoom: 5 }}
      >
        <ambientLight intensity={0.1} />
        <directionalLight position={[0, 0, 5]} />
        <PresentationControls
          global={true}
          speed={2}
          rotation={[Math.PI / 10, -Math.PI / 4, 0]}
        >
          <Box3D position={[0, 0, 0]} />
          <gridHelper
            args={[200, 20, "#000000", "#000000"]}
            position={[0, 0, 0]}
            rotation={[0, 0, 0]}
          />
        </PresentationControls>
      </Canvas>
    </Box>
  );
}

export default App;
