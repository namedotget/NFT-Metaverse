import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/tree_10.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.p0153_1.geometry}
          material={materials.Standard_83C6FF}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.p0153_2.geometry}
          material={materials["Standard_98734B.008"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.p0153_3.geometry}
          material={materials.Standard_0080FF}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.p0153_4.geometry}
          material={materials.Standard_0000FF}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/tree_10.glb");
