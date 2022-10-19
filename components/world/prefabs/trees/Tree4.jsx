import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Tree4(props) {
  const { nodes, materials } = useGLTF("/trees/tree_4.glb");
  console.log(materials);
  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <group rotation={[0, 0, 1.55]} scale={5.32}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.s0103_1.geometry}
            material={materials["Standard_906A40.001"]}
          >
            <meshLambertMaterial color={0xbd6844} />
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.s0103_2.geometry}
            material={materials["Standard_00FF00.003"]}
          >
            <meshLambertMaterial color={0x42b34d} />
          </mesh>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/trees/tree_4.glb");
