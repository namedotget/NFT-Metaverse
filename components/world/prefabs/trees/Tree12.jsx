import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/tree_12.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <group rotation={[0, 0, 2.89]} scale={6.52}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.s004_1.geometry}
            material={materials["Standard_906A40.003"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.s004_2.geometry}
            material={materials.Standard_FF00FF}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.s004_3.geometry}
            material={materials.Standard_FD82FF}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.s004_4.geometry}
            material={materials.Standard_FF0080}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/tree_12.glb");
