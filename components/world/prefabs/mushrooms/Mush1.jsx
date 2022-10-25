import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Mush1(props) {
  const { rotY } = props;
  const { nodes, materials } = useGLTF("/mushrooms/shroom_1.glb");
  return (
    <group {...props} dispose={null} scale={0.35} rotation={[0, rotY, 0]}>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r0035_1.geometry}
          material={materials.STEM}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r0035_2.geometry}
          material={materials.Standard_FF0000}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r0035_3.geometry}
          material={materials.Standard_FFFFFF}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/mushrooms/shroom_1.glb");
