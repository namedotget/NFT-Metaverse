import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
export default function CanvasLoader() {
  const loaderRef = useRef();
  const { viewport } = useThree();
  useFrame(({ clock }) => {
    loaderRef.current.rotation.y += clock.getElapsedTime() * 0.025;
  });

  return (
    <group>
      <mesh ref={loaderRef} position={[0, 0.5, 0]}>
        <sphereGeometry args={[viewport.width / 8.5, 3, 3]} />
        <meshLambertMaterial color={"white"} />
      </mesh>
      <spotLight position={[0, 10, 0]} color={"white"} intensity={4} />
    </group>
  );
}
