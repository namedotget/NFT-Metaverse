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

import { PhysicCube } from "../prefabs/PhysicCube";
import { VendingMachine } from "../prefabs/VendingMachine";
export function StoreScene(props) {
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
          <PhysicCube args={[10, 10]} />
          <VendingMachine position={[0, 0, 4]} user={props.user} />
          <Portal onClick={() => props.goToWorld("main")} text={"main"} />
          <GroundPlane args={[10, 10]} color={"grey"} />
          <Player />
        </Debug>
      </Physics>
    </>
  );
}
