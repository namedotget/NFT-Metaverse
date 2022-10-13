import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/tree_3.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.p0025_1.geometry}
          material={materials["Standard_00FF00.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.p0025_2.geometry}
          material={materials["Standard_98734B.001"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/tree_3.glb");
