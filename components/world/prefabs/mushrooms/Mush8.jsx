import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Mush8(props) {
  const { nodes, materials } = useGLTF("/mushrooms/shroom_8.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]} scale={5.48}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.p0129.geometry}
          material={materials["Standard_FFFFFF.004"]}
          position={[0.01, 0, -0.16]}
          rotation={[0, 0, -2.38]}
          scale={0.35}
        />
        <group
          position={[0.01, 0, -1.7]}
          rotation={[Math.PI / 2, 0.7, -Math.PI]}
          scale={0.67}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.r0132_1.geometry}
            material={materials["Standard_FF0000.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.r0132_2.geometry}
            material={materials["Standard_FFFFFF.005"]}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.s0113.geometry}
          material={materials["Standard_FF0000.001"]}
          position={[0.02, 0, -0.01]}
          rotation={[0, 0, 1.2]}
          scale={1.07}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/mushrooms/shroom_8.glb");
