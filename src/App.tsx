import { Box, NumberInput } from "@mantine/core";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import { TopPart3D } from "./components/TopPart3D";

function App() {
  const [length, setLength] = useState(0);
  const [topPartParameters, setTopPartParameters] = useState({
    sigma: 45,
    height: 20,
    slantLength: 20,
    width: 93,
    totalLength: 700,
  });
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
          {...topPartParameters}
        />
        <gridHelper args={[1000, 100]} position={[0, 0, 0]} />
      </Canvas>
      <Box sx={{ position: "absolute", left: "1em", top: "1em" }}>
        <NumberInput
          defaultValue={45}
          placeholder="Sigma"
          label="Sigma"
          required
          value={topPartParameters.sigma}
          onChange={(val: number) => {
            setTopPartParameters({ ...topPartParameters, sigma: val });
          }}
        />
        <NumberInput
          defaultValue={20}
          placeholder="Height"
          label="Height"
          required
          value={topPartParameters.height}
          onChange={(val: number) => {
            setTopPartParameters({ ...topPartParameters, height: val });
          }}
        />
        <NumberInput
          defaultValue={20}
          placeholder="Slant Length"
          label="Slant Length"
          required
          value={topPartParameters.slantLength}
          onChange={(val: number) => {
            setTopPartParameters({ ...topPartParameters, slantLength: val });
          }}
        />
        <NumberInput
          defaultValue={20}
          placeholder="Width"
          label="Width"
          required
          value={topPartParameters.width}
          onChange={(val: number) => {
            setTopPartParameters({ ...topPartParameters, width: val });
          }}
        />
        <NumberInput
          defaultValue={20}
          placeholder="Total Length"
          label="Total Length"
          required
          value={topPartParameters.totalLength}
          onChange={(val: number) => {
            setTopPartParameters({ ...topPartParameters, totalLength: val });
          }}
        />
      </Box>
    </Box>
  );
}

export default App;
