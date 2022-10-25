import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Mush4(props) {
  const { nodes, materials } = useGLTF("/mushrooms/shroom_4.glb");
  return (
    <group {...props} dispose={null} scale={0.35}>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.s0260_1.geometry}
          material={materials["STEM.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.s0260_2.geometry}
          material={materials.Standard_00509F}
        />
      </group>
    </group>
  );
}
useGLTF.preload("/mushrooms/shroom_4.glb");
