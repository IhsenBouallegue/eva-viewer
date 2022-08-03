import { Anchor, Box, Image, Text } from "@mantine/core";
import {
  ContactShadows,
  Environment,
  Float,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { InputForm } from "./components/InputForm";
import { AirplaneMesh } from "./components/Meshes/AirplaneMesh";
import { useEvaViewerContext } from "./context/EvaViewerContext";
import type { Parameters } from "./types/Types";
import { urlParamExtract } from "./utils/urlParamExtract";

function App() {
  const context = useEvaViewerContext();

  const [searchParams] = useSearchParams();
  useEffect(() => {
    const params: Parameters = Object.fromEntries(
      searchParams.entries()
    ) as unknown as Parameters;
    if (searchParams.toString()) context.setParameters(urlParamExtract(params));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box id="canvas-container" sx={{ height: "100vh", position: "relative" }}>
      <Canvas shadows>
        <directionalLight position={[0, 300, 150]} />
        <directionalLight position={[0, -300, 150]} />
        <spotLight
          position={[0, 200, -800]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2.5]}
          angle={1}
          penumbra={1}
          castShadow
          intensity={1}
          color="gold"
          shadow-bias={-0.0001}
        />
        <mesh
          scale={550}
          position={[0, -1.161, 0]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        >
          <ringGeometry args={[0.9, 1, 4, 1]} />
          <meshStandardMaterial color="#fcfa9c" roughness={0.75} />
        </mesh>
        <mesh
          scale={500}
          position={[0, -1.161, 0]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        >
          <ringGeometry args={[0.9, 1, 3, 1]} />
          <meshStandardMaterial color="#fcfa9c" roughness={0.75} />
        </mesh>
        <PerspectiveCamera
          makeDefault
          position={[-800, 300, -800]}
          far={10000}
        />
        <OrbitControls />
        <Float
          speed={10}
          rotationIntensity={0}
          floatIntensity={1}
          floatingRange={[0, 5]}
        >
          <AirplaneMesh {...context} />
        </Float>
        <ContactShadows
          resolution={1024}
          position={[0, 0, 0]}
          scale={1000}
          blur={2}
          opacity={0.5}
          far={100}
        />
        <Environment preset="warehouse" />
      </Canvas>
      <Box sx={{ position: "absolute", left: "1em", top: "1em" }}>
        <div
          style={{
            width: 150,
            marginLeft: "auto",
            marginRight: "auto",
            marginBottom: "1em",
          }}
        >
          <Image src="./src/assets/logo/eva_logo.svg" />
        </div>
        <InputForm />
      </Box>
      <Box sx={{ position: "absolute", right: "1em", bottom: "1em" }}>
        <Text align="center">Eva Viewer Version 0.1.0</Text>
        <Text align="center">
          Author:{" "}
          <Anchor href="https://ihsen.me/" target="_blank">
            Ihsen Bouallegue
          </Anchor>
        </Text>
      </Box>
    </Box>
  );
}

export default App;
