import { Box } from "@mantine/core";
import { Canvas } from "@react-three/fiber";

function App() {
  return (
    <Box id="canvas-container" sx={{ height: "100vh" }}>
      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />
        <mesh>
          <boxGeometry />
          <meshStandardMaterial />
        </mesh>
      </Canvas>
    </Box>
  );
}

export default App;
