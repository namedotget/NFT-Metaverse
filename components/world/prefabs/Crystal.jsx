import React, { useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useBox } from "@react-three/cannon";
import { Text } from "./Text";
import { getEnergyBalance } from "../../../web3/thirdweb";
import { useSDK } from "@thirdweb-dev/react";

export function Crystal(props) {
  const { balance } = props;
  const meshRef = useRef();
  const { nodes, materials } = useGLTF("/crystal.glb");

  useFrame(({ clock }) => {
    if (props.animated) {
      meshRef.current.rotation.y += 0.0025;
    }
  });
  if (!props.world)
    return (
      <group {...props} dispose={null} castShadow ref={meshRef}>
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
  else {
    const [group] = useBox(() => ({
      mass: 500,
      args: [2, 2, 2],
      material: {
        friction: 1,
        restitution: 0,
      },
      ...props,
      type: "Kinematic",
    }));
    return (
      <group {...props} dispose={null} castShadow ref={group}>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <group ref={meshRef}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pPlatonic1_lambert1_0.geometry}
                material={materials.lambert1}
              />
              <Text position={[-1, 2.75, 1]} text={balance} />
              <Text
                position={[1, 2.75, -2]}
                rotation={[0, Math.PI, 0]}
                text={balance}
              />
            </group>
          </group>
        </group>
      </group>
    );
  }
}
useGLTF.preload("/crystal.glb");
