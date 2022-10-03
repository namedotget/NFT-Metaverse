import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function CrystalRock(props) {
  const { nodes, materials } = useGLTF("/crystal_stone_rock.glb");
  const group = useRef();
  useFrame(() => {
    group.current.rotation.y += 0.0025;
  });

  return (
    <group {...props} dispose={null} ref={group}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.45}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Stone_low_1_Stone_low_1_0.geometry}
            material={materials.Stone_low_1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pPlane1_lambert1_0.geometry}
            material={materials.lambert1}
          />
        </group>
      </group>
    </group>
  );
}
useGLTF.preload("/crystal_stone_rock.glb");
