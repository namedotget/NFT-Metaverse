import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useBox } from "@react-three/cannon";
import { useFrame } from "@react-three/fiber";
export function Tree6(props) {
  const { rotY } = props;
  const leafRef = useRef();
  const [spin, setSpin] = useState(false);
  const { nodes, materials } = useGLTF("/trees/tree_6.glb");
  const [cubeRef] = useBox(() => ({
    mass: 1000,
    args: [0.3, 2, 1.25],
    material: {
      friction: 5,
    },
    position: [props.position[0], 1, props.position[2]],
    rotation: [0, rotY, 0],
    type: "Kinematic",
  }));

  function spinLeaves() {
    setSpin(true);
    clearTimeout();
    setTimeout(() => {
      setSpin(false);
    }, 1100);
  }

  useFrame(({ clock }) => {
    if (spin) {
      leafRef.current.rotation.z +=
        Math.sin(clock.getElapsedTime() * 10) * 0.0015;
    }
  });
  return (
    <group dispose={null} rotation={[0, rotY, 0]}>
      <mesh ref={cubeRef} />
      <group
        rotation={[Math.PI / 2, 0, 0]}
        scale={7.96}
        position={[0.2, 0, -0.4]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.s0061_1.geometry}
          material={materials["Standard_98734B.004"]}
        >
          <meshLambertMaterial color={0xbd6844} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.s0061_2.geometry}
          material={materials["v2leaves.001"]}
          ref={leafRef}
          onClick={spinLeaves}
        >
          <meshPhongMaterial color={"limegreen"} />
        </mesh>
      </group>
    </group>
  );
}

useGLTF.preload("/trees/tree_6.glb");
