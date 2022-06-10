import { Box } from "@mantine/core";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import { TopPart3D } from "./components/TopPart3D";

function App() {
  const [length, setLength] = useState(0);
  return (
    <Box id="canvas-container" sx={{ height: "100vh", position: "relative" }}>
      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight position={[50, 50, -100]} />
        <PerspectiveCamera makeDefault position={[0, 1000, 0]} far={10000} />
        <OrbitControls />
        <TopPart3D
          position={[0, 0, -length / 2]}
          setLength={setLength}
          sigma={45}
          height={20}
          slantLength={20}
          width={93}
          totalLength={700}
        />
        <gridHelper args={[1000, 100]} position={[0, 0, 0]} />
      </Canvas>
      <Box sx={{ position: "absolute", left: "1em", top: "1em" }}>foo</Box>
    </Box>
  );
}

export default App;
