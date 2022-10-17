import { GroundPlane } from "../prefabs/GroundPlane";
import { WorldCrystal } from "../prefabs/WorldCrystal";
import { Suspense } from "react";
import { Physics, Debug } from "@react-three/cannon";
import { Lights } from "../prefabs/Lights";
import { Skybox } from "../prefabs/Skybox";
import { Trees } from "../prefabs/Trees";

import { Player } from "../prefabs/Player";
import { Room } from "../prefabs/Room";
import { Portal } from "../prefabs/Portal";
export function RoomScene(props) {
  return (
    <>
      <Lights />
      <Physics
        gravity={[0, -50, 0]}
        tolerance={1}
        iterations={50}
        broadphase={"SAP"}
      >
        <Room args={[50, 50]} color={"black"} />
        <Portal onClick={() => props.goToWorld("main")} text={"main"} />

        <GroundPlane args={[50, 50]} color={"grey"} />
        <Suspense fallback={null}>
          <Trees count={10} boundary={10} type={"3"} />
        </Suspense>
        <Player />
      </Physics>
      <fogExp2 attach="fog" args={["black", 0.15]} />
    </>
  );
}
