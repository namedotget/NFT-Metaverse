import { useHelper } from "@react-three/drei";
import { useRef } from "react";
import { DirectionalLightHelper } from "three";
export function Lights() {
  const lightRef1 = useRef();

  useHelper(lightRef1, DirectionalLightHelper, 5, "red");
  return (
    <>
      <ambientLight intensity={0.1} />
      <directionalLight
        color={"yellow"}
        intensity={0.7}
        position={[5, 5, 0]}
        ref={lightRef1}
        castShadow
        shadow-mapSize-height={1000}
        shadow-mapSize-width={1000}
        shadow-camera-left={-20}
        shadow-camera-right={20}
        shadow-camera-top={20}
        shadow-camera-bottom={-20}
      />
      <hemisphereLight args={["purple", "green", 0.7]} />
    </>
  );
}
