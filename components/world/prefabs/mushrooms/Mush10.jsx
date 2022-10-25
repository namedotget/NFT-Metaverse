import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Mush10(props) {
  const { nodes, materials } = useGLTF("/mushrooms/shroom_10.glb");
  return (
    <group {...props} dispose={null} scale={0.3}>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r004_1.geometry}
          material={materials.Standard_727062}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r004_2.geometry}
          material={materials["Standard_FFFFFF.006"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/mushrooms/shroom_10.glb");
