import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useBox } from "@react-three/cannon";
import { useFrame } from "@react-three/fiber";
export function Tree1(props) {
  const swirlRef = useRef();
  const leafRef = useRef();
  const { rotY } = props;
  const { nodes, materials } = useGLTF("/trees/tree_1.glb");
  const [grow, setGrow] = useState(false);
  const [cubeRef] = useBox(() => ({
    mass: 1000,
    args: [0.9, 2, 2],
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
    swirlRef.current.rotation.z += 0.04;
    if (grow) {
      leafRef.current.scale.z =
        1 + Math.sin(clock.getElapsedTime() * 10) * 0.02;
    }
  });
  return (
    <group dispose={null} rotation={[0, rotY, 0]}>
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
            ref={leafRef}
            onClick={growLeaves}
          />
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
