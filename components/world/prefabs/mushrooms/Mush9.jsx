import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Mush9(props) {
  const { nodes, materials } = useGLTF("/mushrooms/shroom_9.glb");
  return (
    <group {...props} dispose={null} scale={1}>
      <group rotation={[Math.PI / 2, 0, 0]} position={[0, 0.25, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.p0088_1.geometry}
          material={materials.Standard_00FF00}
        />

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.p0088_2.geometry}
          material={materials["Standard_00FF00.001"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/mushrooms/shroom_9.glb");
