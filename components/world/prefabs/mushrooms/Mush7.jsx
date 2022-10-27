import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Mush7(props) {
  const { nodes, materials } = useGLTF("/mushrooms/shroom_7.glb");
  return (
    <group {...props} dispose={null} scale={0.4}>
      <group rotation={[Math.PI / 2, 0, 0]} scale={5.48}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.s0069_1.geometry}
          material={materials["Standard_FFFFFF.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.s0069_2.geometry}
          material={materials.Standard_595959}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.s0069_3.geometry}
          material={materials.Standard_ADAF27}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.s0069_4.geometry}
          material={materials.Standard_DDFF26}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.s0069_5.geometry}
          material={materials.Standard_76781A}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/mushrooms/shroom_7.glb");
