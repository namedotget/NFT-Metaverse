import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/tree_7.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]} scale={7.96}>
        <group scale={1.32}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.s0072_1.geometry}
            material={materials["Standard_906A40.002"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.s0072_2.geometry}
            material={materials["v2leaves.002"]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/tree_7.glb");

rembrandt;

city;
