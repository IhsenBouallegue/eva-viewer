import { Box } from "@mantine/core";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import { AirplaneMesh } from "./components/Meshes/AirplaneMesh";
import InputForm from "./components/InputForm";
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
        <PerspectiveCamera makeDefault position={[0, 1000, 0]} far={10000} />
        <OrbitControls />
        <gridHelper args={[1000, 100]} position={[0, 0, 0]} />
        <AirplaneMesh {...context} />
      </Canvas>
      <Box sx={{ position: "absolute", left: "1em", top: "1em" }}>
        <InputForm />
      </Box>
    </Box>
  );
}

export default App;
