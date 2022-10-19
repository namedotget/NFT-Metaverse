import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { Crystal } from "./Crystal";
import { Description } from "./Description";
export function VendingMachine(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "/images/textures/vending_machine__vgdc.glb"
  );
  const { actions } = useAnimations(animations, group);
  const reward = useLoader(TextureLoader, "/images/reward.png");
  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      rotation={[0, Math.PI, 0]}
      scale={0.55}
    >
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          {/* custom-screen */}
          <group>
            <mesh position={[-0.025, -0.5, 2.35]}>
              <boxGeometry args={[1, 0.25, 2.5]} />
            </mesh>
            <mesh position={[-0.025, -0.627, 3]} rotation={[Math.PI / 2, 0, 0]}>
              <planeGeometry args={[0.75, 0.75]} />
              <meshStandardMaterial map={reward} />
            </mesh>
            <Crystal
              scale={0.08}
              position={[-0.025, -0.7, 2]}
              rotation={[Math.PI / 2, 0, 0]}
              animated
            />
            <Description text={"10"} />
          </group>
          <group
            name="f5833519466d4505af1c001c07b37ec3fbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="Screen"
                  position={[-2.82, 201.03, -1.96]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
                <group
                  name="Cube042"
                  position={[-2.82, 201.03, -1.96]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
                <group
                  name="Armature"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <group name="Object_7">
                    <primitive object={nodes._rootJoint} />
                    <group
                      name="Object_9"
                      position={[-2.82, 201.03, -1.96]}
                      rotation={[-Math.PI / 2, 0, 0]}
                      scale={100}
                    />
                    <group
                      name="Object_11"
                      position={[-2.82, 201.03, -1.96]}
                      rotation={[-Math.PI / 2, 0, 0]}
                      scale={100}
                    />
                    <skinnedMesh
                      name="Object_10"
                      geometry={nodes.Object_10.geometry}
                      material={materials.Screen}
                      skeleton={nodes.Object_10.skeleton}
                    />
                    <skinnedMesh
                      name="Object_12"
                      geometry={nodes.Object_12.geometry}
                      material={materials.Vending}
                      skeleton={nodes.Object_12.skeleton}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/images/textures/vending_machine__vgdc.glb");
