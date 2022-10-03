import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function Crystal(props) {
  const { nodes, materials } = useGLTF("/crystal.glb");
  const group = useRef();
  useFrame(({ clock }) => {
    group.current.rotation.y += 0.0025;
    group.current.rotation.z = Math.sin(clock.getElapsedTime() * 0.9) * 0.125;
  });
  return (
    <group {...props} dispose={null} ref={group} onclick>
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
