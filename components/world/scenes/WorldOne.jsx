import { GroundPlane } from "../prefabs/GroundPlane";
import { WorldCrystal } from "../prefabs/WorldCrystal";
import { Suspense, useRef } from "react";
import { Physics, Debug } from "@react-three/cannon";
import { Lights } from "../prefabs/Lights";
import { Skybox } from "../prefabs/Skybox";
import { Trees } from "../prefabs/Trees";

import { Player } from "../prefabs/Player";
import { Room } from "../prefabs/Room";
import { Portal } from "../prefabs/Portal";
import { useThree, useFrame } from "@react-three/fiber";
import { SecretPortal } from "../prefabs/SecretPortal";
export function WorldOne(props) {
  return (
    <>
      <pointLight position={[0, 15, 0]} intensity={1} />
      <Lights />
      <Physics
        gravity={[0, -50, 0]}
        tolerance={1}
        iterations={50}
        broadphase={"SAP"}
      >
        <Debug>
          <Room args={[50, 50]} color={"black"} />
          <Portal onClick={() => props.goToWorld("main")} text={"main"} />
          <GroundPlane args={[50, 50]} color={"grey"} />
          <SecretPortal position={[0, 0, -5]} />
          <Suspense fallback={null}>
            <Trees position={[10, 0, 0]} count={20} boundary={15} type={"3"} />
            <Trees position={[-10, 0, 0]} count={20} boundary={15} type={"3"} />
          </Suspense>
          <Player />
        </Debug>
      </Physics>
      <fogExp2 attach="fog" args={["lightblue", 0.15]} />
    </>
  );
}
