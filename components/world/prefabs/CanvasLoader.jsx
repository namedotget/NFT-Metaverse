import { useFrame, useThree } from "@react-three/fiber";
export function CanvasLoader() {
  const { viewport } = useThree();
  return (
    <group>
      <mesh position={[0, 0.5, 0]}>
        <sphereGeometry args={[viewport.width / 8.5, 3, 3]} />
        <meshLambertMaterial color={"white"} />
      </mesh>
      <spotLight position={[0, 10, 0]} color={"white"} intensity={4} />
    </group>
  );
}
