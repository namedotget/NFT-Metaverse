import { GroundPlane } from "../prefabs/GroundPlane";
import { WorldCrystal } from "../prefabs/WorldCrystal";
import { Suspense } from "react";
import { Physics, Debug } from "@react-three/cannon";
import { Lights } from "../prefabs/Lights";
import { Skybox } from "../prefabs/Skybox";
import { Trees } from "../prefabs/Trees";

import { Player } from "../prefabs/Player";
import { MintNFT } from "../prefabs/thirdweb/MintNFT";
import { EnergyReward } from "../prefabs/thirdweb/EnergyReward";
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
        <Debug>
          <Portal onClick={() => props.goToWorld("room")} text={"room"} />
          <Portal
            onClick={() => props.goToWorld("store")}
            text={"store"}
            position={[3, 0, 3]}
          />
          <GroundPlane args={[250, 250]} color={"green"} />
          <WorldCrystal
            position={[3, 1, 2]}
            scale={0.5}
            animated
            world
            balance={props?.userData?.energyBalance}
            user={user}
          />
          <Suspense fallback={null}>
            <Trees count={10} boundary={10} type={"1"} position={[-10, 0, 0]} />
            <Trees position={[10, 0, 0]} count={10} boundary={10} type={"2"} />
            <Trees position={[0, 0, 10]} count={10} boundary={10} type={"5"} />
          </Suspense>
          <MintNFT position={[1, 0.1, 0]} user={user} />
          <Player />
        </Debug>
      </Physics>
      <fogExp2 attach="fog" args={["black", 0.08]} />
    </>
  );
}
