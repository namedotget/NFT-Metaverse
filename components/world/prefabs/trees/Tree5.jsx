import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useSphere } from "@react-three/cannon";
import { useFrame } from "@react-three/fiber";
export function Tree5(props) {
  const { rotY } = props;
  const leafRef = useRef();
  const { nodes, materials } = useGLTF("/trees/tree_5.glb");
  const [grow, setGrow] = useState(false);

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

  function growLeaves() {
    setGrow(true);
    clearTimeout();
    setTimeout(() => {
      setGrow(false);
    }, 1100);
  }

  useFrame(({ clock }) => {
    if (grow) {
      leafRef.current.position.z +=
        Math.sin(clock.getElapsedTime() * 15) * 0.002;
    }
  });
  return (
    <group dispose={null} rotation={[0, rotY, 0]}>
      <mesh ref={cubeRef} />
      <group rotation={[Math.PI / 2, 0, 0]} scale={7.96}>
        <group scale={0.64}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.s0003_1.geometry}
            material={materials["Standard_98734B.002"]}
          >
            <meshLambertMaterial color={0xbd6844} />
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.s0003_2.geometry}
            material={materials.v2leaves}
            ref={leafRef}
            onClick={growLeaves}
          >
            <meshLambertMaterial color={"hotpink"} />
          </mesh>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/trees/tree_5.glb");
