import { useThree, useLoader, useFrame } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { useRef } from "react";
export default function OrbNav() {
  const { viewport } = useThree();
  const orbRef = useRef();

  const [diffMap, dispMap, normMap, roughMap] = useLoader(TextureLoader, [
    "/diff.jpg",
    "/disp.png",
    "/norm.png",
    "/rough.jpg",
  ]);

  useFrame(({ clock }) => {
    orbRef.current.rotation.y += 0.003;
  });

  return (
    <group
      position={viewport.width > viewport.height ? [0, 0.5, 0] : [0, 0, 0]}
      ref={orbRef}
      rotation={
        viewport.width > viewport.height ? [0, 0, 0] : [Math.PI / 6, 0, 0]
      }
    >
      <mesh>
        <sphereGeometry
          args={
            viewport.width > viewport.height
              ? [viewport.width / 10, 3, 3]
              : [1, 3, 3]
          }
        />
        <meshStandardMaterial
          map={diffMap}
          displacementScale={0.5}
          displacementMap={dispMap}
          normalMap={normMap}
          roughnessMap={roughMap}
          roughness={0.1}
          color={"white"}
        />
      </mesh>
    </group>
  );
}
