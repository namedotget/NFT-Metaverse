import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Mush12(props) {
  const { nodes, materials } = useGLTF("/mushrooms/shroom_12.glb");
  return (
    <group {...props} dispose={null} scale={0.35}>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r0019_1.geometry}
          material={materials["Standard_00D7FF.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r0019_2.geometry}
          material={materials["Standard_00D7FF.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r0019_3.geometry}
          material={materials.Standard_000000}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/mushrooms/shroom_12.glb");
