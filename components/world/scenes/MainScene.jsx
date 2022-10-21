import { GroundPlane } from "../prefabs/GroundPlane";
import { WorldCrystal } from "../prefabs/WorldCrystal";
import { Suspense } from "react";
import { Physics, Debug } from "@react-three/cannon";
import { Lights } from "../prefabs/Lights";
import { Skybox } from "../prefabs/Skybox";
import { Trees } from "../prefabs/Trees";

import { Player } from "../prefabs/Player";
import { Portal } from "../prefabs/Portal";
export function MainScene(props) {
  const { user } = props;
  console.log(props.userData);
  return (
    <>
      <Lights />
      <Skybox />
      <Physics
        gravity={[0, -50, 0]}
        tolerance={1}
        iterations={50}
        broadphase={"SAP"}
      >
        <Portal
          onClick={() => props.goToWorld("worldOne")}
          text={"world one"}
          position={[2, 0, -2]}
        />
        <Portal
          onClick={() => props.goToWorld("store")}
          text={"store"}
          position={[-2, 0, 3]}
        />
        <GroundPlane args={[100, 100]} color={"green"} />
        <WorldCrystal
          position={[3, 1, 2]}
          scale={0.5}
          animated
          world
          balance={props?.userData?.energyBalance}
          user={user}
        />
        <Suspense fallback={null}>
          <Trees count={10} boundary={15} type={"1"} position={[-10, 0, 0]} />
          <Trees position={[10, 0, 0]} count={10} boundary={10} type={"2"} />
          <Trees position={[0, 0, 10]} count={10} boundary={15} type={"5"} />
        </Suspense>
        <Player />
      </Physics>
      <fogExp2 attach="fog" args={["black", 0.08]} />
    </>
  );
}
