import React, { useEffect, useRef, useState, useMemo } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import Link from "next/link";
import { useConvexPolyhedron, useTrimesh } from "@react-three/cannon";

export function EnergyReward(props) {
  const meshRef = useRef();
  const orbRef = useRef();
  const orbRef2 = useRef();
  const { nodes, materials } = useGLTF("/crystal.glb");
  useFrame(({ clock }) => {
    let tick = clock.getElapsedTime() * 5;
    meshRef.current.rotation.y += 0.01;
    orbRef.current.position.y += Math.sin(tick) * 0.015;
    orbRef2.current.position.y += Math.cos(tick) * 0.015;
  });

  return (
    <group {...props} dispose={null} castShadow ref={meshRef}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group ref={orbRef}>
            <mesh position={[0.5, 0.4, 0]}>
              <sphereGeometry args={[0.05]} />
              <meshPhongMaterial color={"cyan"} opacity={0.65} transparent />
            </mesh>
            <mesh position={[-0.5, 0.4, 0]}>
              <sphereGeometry args={[0.1]} />
              <meshPhongMaterial color={"cyan"} opacity={0.65} transparent />
            </mesh>
          </group>
          <group ref={orbRef2}>
            <mesh position={[0, 0.4, -0.5]}>
              <sphereGeometry args={[0.07]} />
              <meshPhongMaterial color={"cyan"} opacity={0.65} transparent />
            </mesh>
            <mesh position={[0, 0.4, 0.5]}>
              <sphereGeometry args={[0.07]} />
              <meshPhongMaterial color={"cyan"} opacity={0.65} transparent />
            </mesh>
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pPlatonic1_lambert1_0.geometry}
            scale={0.1}
            material={materials.lambert1}
          />
        </group>
      </group>
    </group>
  );
}
useGLTF.preload("/crystal.glb");
