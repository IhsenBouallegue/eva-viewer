import { Box } from "@mantine/core";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useState } from "react";

import { TopPart3D } from "./components/AirplaneMesh";
import { UserInputForm } from "./components/UserInputForm";
import { useEvaViewerContext } from "./EvaViewerContext";

function App() {
  const [posLength, setLength] = useState(0);
  const [posHeight, setHeight] = useState(0);
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
        <TopPart3D
          position={[0, posHeight, -posLength / 2]}
          setLength={setLength}
          setHeight={setHeight}
          {...context}
        />
        <gridHelper args={[1000, 100]} position={[0, 0, 0]} />
      </Canvas>
      <Box sx={{ position: "absolute", left: "1em", top: "1em" }}>
        <UserInputForm />
      </Box>
    </Box>
  );
}

export default App;
