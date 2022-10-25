import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Mush6(props) {
  const { nodes, materials } = useGLTF("/mushrooms/shroom_6.glb");
  return (
    <group {...props} dispose={null} scale={0.5}>
      <group rotation={[Math.PI / 2, 0, 0]} scale={5.48}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.s0005_1.geometry}
          material={materials.Standard_6263CA}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.s0005_2.geometry}
          material={materials["Standard_FFFFFF.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.s0005_3.geometry}
          material={materials["Standard_0080FF.001"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/mushrooms/shroom_6.glb");
