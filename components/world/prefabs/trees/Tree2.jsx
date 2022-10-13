import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useBox } from "@react-three/cannon";
export function Tree2(props) {
  const { nodes, materials } = useGLTF("/trees/tree_2.glb");
  const [cubeRef] = useBox(() => ({
    mass: 500,
    args: [2.5, 3, 1],
    material: {
      friction: 5,
    },
    position: [props.position[0] - 0.8, 2, props.position[2] + 0],
  }));
  return (
    <group dispose={null}>
      <mesh ref={cubeRef} />
      <group rotation={[Math.PI / 2, 0, 0]}>
        <group scale={6.96}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.s0028_1.geometry}
            material={materials["Standard_98734B.003"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.s0028_2.geometry}
            material={materials["Standard_00FF00.001"]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/tree_2.glb");
