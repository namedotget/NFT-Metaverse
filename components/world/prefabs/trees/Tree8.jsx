import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useSphere } from "@react-three/cannon";
export function Tree8(props) {
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
  const { nodes, materials } = useGLTF("/trees/tree_8.glb");
  return (
    <group dispose={null} rotation={[0, rotY, 0]}>
      <mesh ref={cubeRef} />
      <group rotation={[Math.PI / 2, 0, 0]} scale={7.96}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.s0114_1.geometry}
          material={materials["Standard_98734B.005"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.s0114_2.geometry}
          material={materials["Standard_98734B.006"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.s0114_3.geometry}
          material={materials["Standard_00FF00.004"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/trees/tree_8.glb");
