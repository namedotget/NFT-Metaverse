import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/tree_9.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.s0172_1.geometry}
          material={materials["Standard_98734B.007"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.s0172_2.geometry}
          material={materials["Standard_0000FF.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.s0172_3.geometry}
          material={materials["Standard_0080FF.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.s0172_4.geometry}
          material={materials.Standard_FFFF00}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/tree_9.glb");
