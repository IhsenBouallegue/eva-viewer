import { Box } from "@mantine/core";
import { useDebouncedValue } from "@mantine/hooks";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useState } from "react";

import { TopPart3D } from "./components/TopPart3D";
import { UserInputForm } from "./components/UserInputForm";
import type { BodyParameters } from "./types/Types";

function App() {
  const [length, setLength] = useState(0);
  const [height, setHeight] = useState(0);
  const defualtBodyParameters: BodyParameters = {
    sigma: 45,
    height: 20,
    slantLength: 20,
    width: 93,
    totalLength: 700,
    bodyHeight: 50,
    alpha: 45,
  };
  const [bodyParameters, setBodyParameters] = useState(defualtBodyParameters);
  const [debouncedBodyParameters] = useDebouncedValue(bodyParameters, 200);
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
          position={[0, height, -length / 2]}
          setLength={setLength}
          setHeight={setHeight}
          {...debouncedBodyParameters}
        />
        <gridHelper args={[1000, 100]} position={[0, 0, 0]} />
      </Canvas>
      <Box sx={{ position: "absolute", left: "1em", top: "1em" }}>
        <UserInputForm
          setBodyParameters={setBodyParameters}
          bodyParameters={debouncedBodyParameters}
        />
      </Box>
    </Box>
  );
}

export default App;
