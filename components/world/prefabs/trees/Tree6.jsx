import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/tree_6.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]} scale={7.96}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.s0061_1.geometry}
          material={materials["Standard_98734B.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.s0061_2.geometry}
          material={materials["v2leaves.001"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/tree_6.glb");
