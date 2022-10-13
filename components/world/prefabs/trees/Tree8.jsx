import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/tree_8.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]} scale={7.96}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.s0114_1.geometry}
          material={materials["Standard_98734B.005"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.s0114_2.geometry}
          material={materials["Standard_98734B.006"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.s0114_3.geometry}
          material={materials["Standard_00FF00.004"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/tree_8.glb");
