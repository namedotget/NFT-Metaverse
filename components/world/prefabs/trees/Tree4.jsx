import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useSphere } from "@react-three/cannon";
export function Tree4(props) {
  const { nodes, materials } = useGLTF("/trees/tree_4.glb");

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
  return (
    <group dispose={null} rotation={[0, rotY, 0]}>
      <mesh ref={cubeRef} />
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
