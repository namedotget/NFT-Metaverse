import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useBox } from "@react-three/cannon";
import { useFrame } from "@react-three/fiber";
export function Tree3(props) {
  const meshRef = useRef();
  const { rotY } = props;
  const { nodes, materials } = useGLTF("/trees/tree_3.glb");
  const [wobble, setWobble] = useState(false);

  function wobbleLeaves() {
    setWobble(true);
    clearTimeout();
    setTimeout(() => {
      setWobble(false);
    }, 1500);
  }
  const [cubeRef] = useBox(() => ({
    mass: 1000,
    args: [1.1, 2, 3.25],
    material: {
      friction: 5,
    },
    position: [props.position[0] + 0.5, 1, props.position[2] + 0.3],
    rotation: [0, rotY, 0],
    type: "Kinematic",
  }));

  useFrame(({ clock }) => {
    if (wobble) {
      meshRef.current.position.z = Math.sin(clock.getElapsedTime() * 10) * 0.05;
    }
  });
  return (
    <group dispose={null} rotation={[0, rotY, 0]}>
      <mesh ref={cubeRef} />
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          ref={meshRef}
          onClick={wobbleLeaves}
          castShadow
          receiveShadow
          geometry={nodes.p0025_1.geometry}
          material={materials["Standard_00FF00.002"]}
        >
          <meshToonMaterial color={"red"} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.p0025_2.geometry}
          material={materials["Standard_98734B.001"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/trees/tree_3.glb");
