import { Box } from "@mantine/core";
import { useDebouncedValue } from "@mantine/hooks";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import { TopPart3D } from "./components/TopPart3D";
import { UserInputForm } from "./components/UserInputForm";

function App() {
  const [length, setLength] = useState(0);
  const [height, setHeight] = useState(0);
  const [topPartParameters, setTopPartParameters] = useState({
    sigma: 45,
    height: 20,
    slantLength: 20,
    width: 93,
    totalLength: 700,
    bodyHeight: 50,
    alpha: 45,
  });
  const [debouncedTopPartParameters] = useDebouncedValue(
    topPartParameters,
    200
  );
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
          {...debouncedTopPartParameters}
        />
        <gridHelper args={[1000, 100]} position={[0, 0, 0]} />
      </Canvas>
      <Box sx={{ position: "absolute", left: "1em", top: "1em" }}>
        <UserInputForm
          setTopPartParameters={setTopPartParameters}
          topPartParameters={debouncedTopPartParameters}
        />
      </Box>
    </Box>
  );
}

export default App;
