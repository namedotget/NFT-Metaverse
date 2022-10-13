import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/tree_11.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <group rotation={[-0.01, 0, 0.25]} scale={5.71}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.s006_1.geometry}
            material={materials["Standard_98734B.009"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.s006_2.geometry}
            material={materials["Standard_83C6FF.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.s006_3.geometry}
            material={materials["Standard_0080FF.002"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.s006_4.geometry}
            material={materials["Standard_0000FF.002"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.s006_5.geometry}
            material={materials.Standard_FF8000}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/tree_11.glb");
