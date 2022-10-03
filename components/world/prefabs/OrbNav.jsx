import { useThree, useLoader, useFrame } from "@react-three/fiber";

import { TextureLoader } from "three/src/loaders/TextureLoader";
import * as THREE from "three";
import { Suspense, useRef } from "react";
import CanvasLoader from "./CanvasLoader";
export default function OrbNav() {
  const { viewport } = useThree();
  const orbRef = useRef();
  const [diffMap, normMap, roughMap] = useLoader(TextureLoader, [
    "/diff.jpg",
    "/norm.png",
    "/rough.jpg",
  ]);
  const repeatX = 4;
  const repeatY = 2;
  diffMap.wrapS = diffMap.wrapT = THREE.RepeatWrapping;
  diffMap.repeat.set(repeatX, repeatY);
  normMap.wrapS = normMap.wrapT = THREE.RepeatWrapping;
  normMap.repeat.set(repeatX, repeatY);
  roughMap.wrapS = roughMap.wrapT = THREE.RepeatWrapping;
  roughMap.repeat.set(repeatX, repeatY);

  useFrame(({ clock }) => {
    orbRef.current.rotation.y += 0.003;
  });

  return (
    <mesh
      position={viewport.width > viewport.height ? [0, 0.75, 0] : [0, 0, 0]}
      ref={orbRef}
      rotation={
        viewport.width > viewport.height ? [0, 0, 0] : [Math.PI / 6, 0, 0]
      }
    >
      <sphereGeometry
        args={
          viewport.width > viewport.height
            ? [viewport.width / 8.5, 3, 3]
            : [1, 3, 3]
        }
      />
      <meshStandardMaterial
        map={diffMap}
        displacementScale={0}
        normalMap={normMap}
        normalScale={1}
        roughnessMap={roughMap}
        roughness={0.6}
        color={"white"}
      />
    </mesh>
  );
}
