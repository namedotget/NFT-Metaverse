import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useBox } from "@react-three/cannon";
export function Tree1(props) {
  const { nodes, materials } = useGLTF("/trees/tree_1.glb");
  const [cubeRef] = useBox(() => ({
    mass: 500,
    args: [2, 3, 2],
    material: {
      friction: 5,
    },
    position: [props.position[0], 2, props.position[2]],
  }));
  return (
    <group dispose={null}>
      <mesh ref={cubeRef} />
      <group rotation={[Math.PI / 2, 0, 0]}>
        <group scale={7.76}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.s0038_1.geometry}
            material={materials.Standard_98734B}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.s0038_2.geometry}
            material={materials.Standard_00FF00}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.s0038_3.geometry}
            material={materials.Standard_906A40}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/tree_1.glb");
