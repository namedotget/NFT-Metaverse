import React, { useRef, useState } from "react";
import { Detailed, useGLTF } from "@react-three/drei";
import { useBox } from "@react-three/cannon";
import { useFrame } from "@react-three/fiber";
import { EnergyReward } from "../thirdweb/EnergyReward";
export function Tree1(props) {
  const swirlRef = useRef();
  const leafRef = useRef();
  const rewardRef = useRef();
  const { rotY } = props;
  const { nodes, materials } = useGLTF("/trees/tree_1.glb");
  const [grow, setGrow] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [cubeRef] = useBox(() => ({
    mass: 1000,
    args: [0.5, 2, 2],
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
    if (props.reward) {
      if (clicked) return;
      else {
        setClicked(true);
        //send reward coin to user
      }
    }
  }

  useFrame(({ clock }) => {
    swirlRef.current.rotation.z += 0.04;
    if (grow) {
      leafRef.current.scale.z =
        1 + Math.sin(clock.getElapsedTime() * 10) * 0.02;
    }
    if (props.reward && clicked) {
      if (rewardRef.current.position.y < 10)
        rewardRef.current.position.y += 0.015;
      else rewardRef.current.dispose = true;
    }
  });

  return (
    <group dispose={null} rotation={[0, rotY, 0]}>
      {props.reward && clicked && (
        <Detailed distances={[0, 15]}>
          <group ref={rewardRef}>
            <EnergyReward />
          </group>
          <mesh />
        </Detailed>
      )}
      <mesh ref={cubeRef} />
      <group rotation={[Math.PI / 2, 0, 0]}>
        <group scale={7.76}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.s0038_1.geometry}
            material={materials.Standard_98734B}
          >
            <meshLambertMaterial color={0x6e3c16} />
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.s0038_2.geometry}
            // material={materials.Standard_00FF00}
            ref={leafRef}
            onClick={growLeaves}
          >
            <meshLambertMaterial color={0x42b34d} />
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.s0038_3.geometry}
            material={materials.Standard_906A40}
            ref={swirlRef}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/trees/tree_1.glb");
