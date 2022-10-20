import React, { useEffect, useRef, useState } from "react";
import { useGLTF, RoundedBox } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { Crystal } from "./Crystal";
import { Description } from "./Description";
import { buyKey, REWARDS } from "../../../web3/thirdweb";
import { useSDK } from "@thirdweb-dev/react";
export function VendingMachine(props) {
  const { user } = props;
  const group = useRef();
  const nextBtn = useRef();
  const prevBtn = useRef();
  const buyBtn = useRef();
  const imgRef = useRef();
  const [curItem, setCurItem] = useState(0);
  const { nodes, materials } = useGLTF(
    "/images/textures/vending_machine__vgdc.glb"
  );
  const sdk = useSDK();
  const keys = useLoader(TextureLoader, [REWARDS[0].image, REWARDS[1].image]);

  function next() {
    if (curItem >= keys.length - 1) return;
    setCurItem(curItem + 1);
  }

  function prev() {
    if (curItem === 0) return;
    setCurItem(curItem - 1);
  }

  async function buy() {
    if (curItem === 1) return;
    await buyKey(sdk, user.address, curItem + 1);
  }

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      rotation={[0, Math.PI, 0]}
      scale={0.58}
    >
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          {/* custom-screen */}
          <group>
            <mesh position={[-0.025, -0.5, 2.35]}>
              <boxGeometry args={[1.1, 0.25, 2.5]} />
              <meshPhongMaterial color={0xacfcfb} />
            </mesh>
            <mesh
              position={[-0.025, -0.627, 3]}
              rotation={[Math.PI / 2, 0, 0]}
              ref={imgRef}
            >
              <planeGeometry args={[0.75, 0.75]} />
              <meshStandardMaterial map={keys[curItem]} />
            </mesh>
            <Crystal
              scale={0.08}
              position={[0.2, -0.7, 2]}
              rotation={[Math.PI / 2, 0, 0]}
              animated
            />
            <Description
              position={[-0.35, -0.627, 2.05]}
              rotation={[Math.PI / 2, 0, 0]}
              text={"5"}
              size={"0.4"}
              height={0.05}
              color={"darkslateblue"}
            />

            {/* custom pagination */}
            <group position={[-0.25, -0.6, 1.6]}>
              <group ref={prevBtn} onClick={prev}>
                <RoundedBox args={[0.4, 0.1, 0.4]}>
                  <meshPhongMaterial />
                </RoundedBox>
                <Description
                  rotation={[Math.PI / 2, 0, 0]}
                  text={"<"}
                  size={0.25}
                  height={0.1}
                  color={"darkslateblue"}
                  position={[-0.06, 0, -0.09]}
                />
              </group>
              <group ref={nextBtn} onClick={next}>
                <RoundedBox position={[0.45, 0, 0]} args={[0.4, 0.1, 0.4]}>
                  <meshPhongMaterial />
                </RoundedBox>
                <Description
                  rotation={[Math.PI / 2, 0, 0]}
                  text={">"}
                  size={0.25}
                  height={0.1}
                  color={"darkslateblue"}
                  position={[0.38, 0, -0.09]}
                />
              </group>
            </group>
          </group>
          {/* custom small  screen */}
          <group>
            <mesh position={[-1.05, -0.35, 2.45]}>
              <boxGeometry args={[0.5, 0.25, 0.75]} />
              <meshPhongMaterial color={0xacfcfb} />
            </mesh>
            {/* custom buy button */}
            <group position={[-1.05, -0.31, 2.45]} ref={buyBtn} onClick={buy}>
              <RoundedBox args={[0.4, 0.4, 0.5]}>
                <meshPhongMaterial color={"lightgreen"} />
              </RoundedBox>
              <Description
                position={[-0.15, -0.155, -0.05]}
                rotation={[Math.PI / 2, 0, 0]}
                text={"buy"}
                size={"0.2"}
                height={"0.05"}
              />
            </group>
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
