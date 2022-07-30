import { Box, Image, Text } from "@mantine/core";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import { InputForm } from "./components/InputForm";
import { AirplaneMesh } from "./components/Meshes/AirplaneMesh";
import { useEvaViewerContext } from "./context/EvaViewerContext";

function App() {
  const context = useEvaViewerContext();
  return (
    <Box id="canvas-container" sx={{ height: "100vh", position: "relative" }}>
      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight position={[0, 300, 150]} />
        <directionalLight position={[0, -300, 150]} />
        <ambientLight intensity={0.05} />
        <PerspectiveCamera
          makeDefault
          position={[-800, 300, -800]}
          far={10000}
        />
        <OrbitControls />
        <gridHelper args={[1000, 100]} position={[0, 0, 0]} />
        <AirplaneMesh {...context} />
      </Canvas>
      <Box sx={{ position: "absolute", left: "1em", top: "1em" }}>
        <InputForm />
      </Box>
      <Box sx={{ position: "absolute", right: "1em", bottom: "1em" }}>
        <Image width={150} src="./assets/logo/eva_logo.svg" />
        <Text align="center">Version 0.1.0</Text>
      </Box>
    </Box>
  );
}

export default App;
