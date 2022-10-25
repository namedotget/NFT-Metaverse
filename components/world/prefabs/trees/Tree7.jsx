import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useSphere } from "@react-three/cannon";
export function Tree7(props) {
  const { rotY } = props;
  const [cubeRef] = useSphere(() => ({
    mass: 1000,
    args: [1.1],
    material: {
      friction: 5,
    },
    position: [props.position[0], 1, props.position[2]],
    rotation: [0, rotY, 0],
    type: "Kinematic",
  }));
  const { nodes, materials } = useGLTF("/trees/tree_7.glb");
  return (
    <group dispose={null} rotation={[0, rotY, 0]}>
      <mesh ref={cubeRef} />
      <group rotation={[Math.PI / 2, 0, 0]} scale={7.96}>
        <group scale={1.32}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.s0072_1.geometry}
            material={materials["Standard_906A40.002"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.s0072_2.geometry}
            material={materials["v2leaves.002"]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/trees/tree_7.glb");
