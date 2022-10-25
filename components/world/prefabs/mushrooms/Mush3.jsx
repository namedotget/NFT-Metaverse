import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Mush3(props) {
  const { nodes, materials } = useGLTF("/mushrooms/shroom_3.glb");
  return (
    <group {...props} dispose={null} scale={0.4}>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.s0079_1.geometry}
          material={materials["STEM.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.s0079_2.geometry}
          material={materials.Standard_006000}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.s0079_3.geometry}
          material={materials.Standard_FFFF00}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.s0079_4.geometry}
          material={materials.Standard_0000FF}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.s0079_5.geometry}
          material={materials.Standard_0080FF}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.s0079_6.geometry}
          material={materials.Standard_FF00FF}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.s0079_7.geometry}
          material={materials["Standard_FFFF00.001"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/mushrooms/shroom_3.glb");
