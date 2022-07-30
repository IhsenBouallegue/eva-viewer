import { Billboard, Text } from "@react-three/drei";

import type { Distance } from "./computeDistance";

export function DistanceLabel({
  point1,
  point2,
  position,
  distance,
}: Distance): JSX.Element {
  return (
    <Billboard
      key={`${point1 + point2}:${distance}`}
      follow
      position={position}
    >
      <Text fontSize={8} color="black" renderOrder={-999}>
        {`${point1.toUpperCase() + point2.toUpperCase()}: ${distance}`}
        <meshBasicMaterial depthTest={false} />
      </Text>
    </Billboard>
  );
}

export default DistanceLabel;
