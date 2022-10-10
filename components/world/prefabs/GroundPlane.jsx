import { usePlane } from "@react-three/cannon";

export function GroundPlane() {
  const [floorRef] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, 0, 0],
    material: {
      friction: 0.1,
    },
  }));
  return (
    <mesh
      position={[0, 0, 0]}
      rotation={[-Math.PI / 2, 0, 0]}
      ref={floorRef}
      receiveShadow
    >
      <planeGeometry args={[1000, 1000]} />
      <meshLambertMaterial color={"darkgreen"} fog={true} />
    </mesh>
  );
}
