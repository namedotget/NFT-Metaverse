import { useHelper } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { DirectionalLightHelper } from "three";
export function Lights() {
  const lightRef1 = useRef();
  const { camera } = useThree();
  // useHelper(lightRef1, DirectionalLightHelper, 5, "red");

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
        color={"lightblue"}
        intensity={1.5}
        ref={lightRef1}
        castShadow
        shadow-mapSize-height={2000}
        shadow-mapSize-width={2000}
        shadow-camera-left={-25}
        shadow-camera-right={25}
        shadow-camera-top={25}
        shadow-camera-bottom={-25}
      />
      <hemisphereLight args={["cyan", "green", 0.4]} />
    </>
  );
}
