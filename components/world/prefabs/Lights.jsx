import { useHelper } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { DirectionalLightHelper } from "three";
export function Lights() {
  const lightRef1 = useRef();
  const { camera } = useThree();
  useHelper(lightRef1, DirectionalLightHelper, 5, "red");

  useFrame(() => {
    lightRef1.current.position.set(
      camera.position.x + 10,
      10,
      camera.position.z
    );
  });
  return (
    <>
      <ambientLight intensity={0.1} />
      <directionalLight
        target={camera}
        color={"yellow"}
        intensity={0.7}
        ref={lightRef1}
        castShadow
        shadow-mapSize-height={1000}
        shadow-mapSize-width={1000}
        shadow-camera-left={-30}
        shadow-camera-right={30}
        shadow-camera-top={30}
        shadow-camera-bottom={-30}
      />
      <hemisphereLight args={["purple", "green", 0.7]} />
    </>
  );
}
