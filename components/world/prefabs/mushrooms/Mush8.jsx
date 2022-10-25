import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Mush8(props) {
  const { nodes, materials } = useGLTF("/mushrooms/shroom_8.glb");
  return (
    <group {...props} dispose={null} scale={0.45}>
      <group rotation={[Math.PI / 2, 0, 0]} scale={5.48}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.s0113_1.geometry}
          material={materials["Standard_FF0000.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.s0113_2.geometry}
          material={materials["Standard_FFFFFF.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.s0113_3.geometry}
          material={materials["Standard_FFFFFF.005"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/mushrooms/shroom_8.glb");
