import React, { useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import Link from "next/link";
export function Crystal(props) {
  const meshRef = useRef();
  const { nodes, materials } = useGLTF("/crystal.glb");

  useFrame(({ clock }) => {
    if (props.animated) {
      meshRef.current.rotation.y += 0.0025;
    }
  });
  return (
    <group {...props} dispose={null} castShadow ref={meshRef}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pPlatonic1_lambert1_0.geometry}
            material={materials.lambert1}
            onClick={props?.route}
          />
        </group>
      </group>
    </group>
  );
}
useGLTF.preload("/crystal.glb");
