import { usePlane } from "@react-three/cannon";

export function PhysicPlane(props) {
  const [floorRef] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    material: {
      friction: 0.1,
    },
    ...props,
    type: "Kinematic",
  }));
  return <mesh ref={floorRef} />;
}
