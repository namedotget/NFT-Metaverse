import React, { useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useBox, useSphere } from "@react-three/cannon";
import { useFrame } from "@react-three/fiber";
export function Tree2(props) {
  const meshRef = useRef();
  const { rotY } = props;
  const { nodes, materials } = useGLTF("/trees/tree_2.glb");
  const [dropped, setDropped] = useState(false);
  function dropLeaf() {
    setDropped(true);
  }

  const [cubeRef] = useBox(() => ({
    mass: 1000,
    args: [0.5, 2, 0.5],
    material: {
      friction: 5,
    },
    position: [props.position[0] + 0, 1, props.position[2] + 0],
    rotation: [0, rotY, 0],
    type: "Kinematic",
  }));

  useFrame(() => {
    if (dropped && meshRef.current.position.z < 10) {
      meshRef.current.position.z -= 0.01;
    }
  });
  return (
    <group dispose={null} rotation={[0, rotY / 2, 0]}>
      <mesh ref={cubeRef} />
      <group rotation={[Math.PI / 2, 0, 0]}>
        <group scale={6.96}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.s0028_1.geometry}
            material={materials["Standard_98734B.003"]}
          >
            <meshLambertMaterial color={0xbd6844} />
          </mesh>
          <mesh
            onClick={dropLeaf}
            ref={meshRef}
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

useGLTF.preload("/trees/tree_2.glb");
