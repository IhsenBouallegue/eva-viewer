import { Box } from "@mantine/core";
import { PresentationControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import { TopPart3D } from "../components/TopPart3D";

function App() {
  const [length, setLength] = useState(0);

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
          <TopPart3D position={[0, 0, -length / 2]} setLength={setLength} />
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
