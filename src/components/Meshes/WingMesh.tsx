import * as THREE from "three";
import { Shape } from "three";

import type { Parameters } from "../../types/Types";

export function WingMesh({
  wingLengthScale = 0,
  wingHeightScale = 0,
  wingSpan = 0,
  airplaneColor,
}: Partial<Parameters>) {
  const shape = new Shape();

  shape.moveTo(200.0, 0.68);
  shape.lineTo(200.0, 0.68);
  shape.lineTo(190.0, 3.48);
  shape.lineTo(180.0, 5.92);
  shape.lineTo(160.0, 10.2);
  shape.lineTo(140.0, 14.24);
  shape.lineTo(120.0, 17.48);
  shape.lineTo(100.0, 20.2);
  shape.lineTo(80.0, 21.76);
  shape.lineTo(60.0, 22.48);
  shape.lineTo(40.0, 21.92);
  shape.lineTo(30.0, 20.44);
  shape.lineTo(20.0, 18.28);
  shape.lineTo(15.0, 16.84);
  shape.lineTo(10.0, 14.76);
  shape.lineTo(5.0, 11.88);
  shape.lineTo(2.5, 9.84);
  shape.lineTo(0.0, 6.0);
  shape.lineTo(2.5, 3.16);
  shape.lineTo(5.0, 2.28);
  shape.lineTo(10.0, 1.36);
  shape.lineTo(15.0, 0.84);
  shape.lineTo(20.0, 0.52);
  shape.lineTo(30.0, 0.0);
  shape.lineTo(40.0, 0.0);
  shape.lineTo(60.0, 0.04);
  shape.lineTo(80.0, 0.12);
  shape.lineTo(100.0, 0.24);
  shape.lineTo(120.0, 0.28);
  shape.lineTo(140.0, 0.2);
  shape.lineTo(160.0, 0.16);
  shape.lineTo(180.0, 0.08);
  shape.lineTo(190.0, 0.04);
  shape.lineTo(200.0, 0.0);

  const extrudeSettings = {
    curveSegments: 1,
    steps: 1,
    depth: wingSpan,
    bevelEnabled: false,
  };

  return (
    <mesh
      position={[wingSpan / 2, 0, 200]}
      rotation={[0, -Math.PI / 2, 0]}
      scale={[wingLengthScale, wingHeightScale, 1]}
    >
      <extrudeBufferGeometry
        attach="geometry"
        args={[shape, extrudeSettings]}
      />
      <meshStandardMaterial
        flatShading
        color={airplaneColor}
        roughness={0.3}
        metalness={0.5}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

export default WingMesh;
