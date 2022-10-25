import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Mush11(props) {
  const { nodes, materials } = useGLTF("/mushrooms/shroom_11.glb");
  return (
    <group {...props} dispose={null} scale={0.3}>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.s0017_1.geometry}
          material={materials["Standard_FFFFFF.007"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.s0017_2.geometry}
          material={materials.Standard_00D7FF}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/mushrooms/shroom_11.glb");
