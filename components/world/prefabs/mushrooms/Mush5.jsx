import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Mush5(props) {
  const { nodes, materials } = useGLTF("/mushrooms/shroom_5.glb");
  return (
    <group {...props} dispose={null} scale={0.35}>
      <group rotation={[Math.PI / 2, 0, 0]} scale={5.48}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.s0092_1.geometry}
          material={materials.Standard_009F9F}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.s0092_2.geometry}
          material={materials.Standard_6FB651}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.s0092_3.geometry}
          material={materials["Standard_6FB651.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.s0092_4.geometry}
          material={materials["Standard_6FB651.001"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/mushrooms/shroom_5.glb");
