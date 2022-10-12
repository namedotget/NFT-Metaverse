import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useBox } from "@react-three/cannon";
export function Crystal(props) {
  const { nodes, materials } = useGLTF("/crystal.glb");

  const [group] = useBox(() => ({
    mass: 500,
    args: [3, 3, 3],
    material: {
      friction: 1,
      restitution: 0,
    },
    ...props,
  }));

  useFrame(({ clock }) => {
    if (props.animated) {
      // group.current.rotation.y += 0.0025;
    }
  });
  return (
    <group {...props} dispose={null} castShadow ref={group}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pPlatonic1_lambert1_0.geometry}
            material={materials.lambert1}
          />
        </group>
      </group>
    </group>
  );
}
useGLTF.preload("/crystal.glb");
