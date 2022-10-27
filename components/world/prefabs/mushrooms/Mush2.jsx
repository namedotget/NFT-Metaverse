import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Mush2(props) {
  const { nodes, materials } = useGLTF("/mushrooms/shroom_2.glb");
  return (
    <group {...props} dispose={null} scale={0.6}>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.s0003_1.geometry}
          material={materials["STEM.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.s0003_2.geometry}
          material={materials.Standard_8100CD}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.s0003_3.geometry}
          material={materials["Standard_FFFFFF.001"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/mushrooms/shroom_2.glb");
