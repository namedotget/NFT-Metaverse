import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useHelper } from "@react-three/drei";
import { BoxHelper } from "three";
export function Crystal(props) {
  const { nodes, materials } = useGLTF("/crystal.glb");
  const group = useRef();
  useFrame(({ clock }) => {
    if (props.animated) {
      group.current.rotation.y += 0.0025;
    }
  });

  props.isTesting && useHelper(group, BoxHelper, "blue");
  return (
    <group {...props} dispose={null} ref={group} onclick castShadow>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pPlatonic1_lambert1_0.geometry}
            material={materials.lambert1}
          />
        </group>
      </group>
    </group>
  );
}
useGLTF.preload("/crystal.glb");
