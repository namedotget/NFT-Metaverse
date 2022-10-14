import { GroundPlane } from "../prefabs/GroundPlane";
import { WorldCrystal } from "../prefabs/WorldCrystal";
import { Suspense } from "react";
import { Physics, Debug } from "@react-three/cannon";
import { Lights } from "../prefabs/Lights";
import { Skybox } from "../prefabs/Skybox";
import { Trees } from "../prefabs/Trees";

import { Player } from "../prefabs/Player";
import { Room } from "../prefabs/Room";
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
        <Debug>
          <mesh onClick={() => props.goToWorld("main")}>
            <boxGeometry args={[1]} />
          </mesh>
          <GroundPlane args={[50, 50]} color={"grey"} />
          <Suspense fallback={null}>
            <Trees count={10} boundary={10} type={"3"} />
          </Suspense>
          <Player />
        </Debug>
      </Physics>
      <fogExp2 attach="fog" args={[0xffffff, 0.15]} />
    </>
  );
}
