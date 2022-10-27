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
          geometry={nodes.r0263.geometry}
          material={materials.Standard_00509F}
          position={[1.25, 1.24, -10.41]}
          rotation={[-2.12, -1.28, -0.75]}
          scale={4.5}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.s0260.geometry}
          material={materials["STEM.003"]}
          position={[0.02, 0.05, -0.15]}
          rotation={[0, 0, 1.66]}
          scale={6.17}
        />
      </group>
    </group>
  );
}
useGLTF.preload("/mushrooms/shroom_4.glb");
