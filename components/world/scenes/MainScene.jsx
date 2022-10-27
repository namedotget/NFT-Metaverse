import { GroundPlane } from "../prefabs/GroundPlane";
import { WorldCrystal } from "../prefabs/WorldCrystal";
import { Suspense } from "react";
import { Physics, Debug } from "@react-three/cannon";
import { Lights } from "../prefabs/Lights";
import { Skybox } from "../prefabs/Skybox";
import { Trees } from "../prefabs/Trees";

import { Player } from "../prefabs/Player";
import { Portal } from "../prefabs/Portal";
import { Mush1 } from "../prefabs/mushrooms/Mush1";
import { Mush6 } from "../prefabs/mushrooms/Mush6";
import { Mush2 } from "../prefabs/mushrooms/Mush2";
import { Mush3 } from "../prefabs/mushrooms/Mush3";
import { Mush4 } from "../prefabs/mushrooms/Mush4";
import { Mush5 } from "../prefabs/mushrooms/Mush5";
import { Mush7 } from "../prefabs/mushrooms/Mush7";
import { Mush8 } from "../prefabs/mushrooms/Mush8";
import { Mush9 } from "../prefabs/mushrooms/Mush9";
import { Mush10 } from "../prefabs/mushrooms/Mush10";
import { Mush11 } from "../prefabs/mushrooms/Mush11";
import { Mush12 } from "../prefabs/mushrooms/Mush12";
import { Tree1 } from "../prefabs/trees/Tree1";
import { Mushrooms } from "../prefabs/Mushrooms";
export function MainScene(props) {
  const { user } = props;
  return (
    <>
      <Physics
        gravity={[0, -50, 0]}
        tolerance={1}
        iterations={50}
        broadphase={"SAP"}
      >
        <Debug>
          <GroundPlane args={[100, 100]} color={"green"} />
          <Lights />
          <Skybox />
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
          <WorldCrystal
            position={[3, 1, 2]}
            scale={0.5}
            animated
            world
            balance={props?.userData?.energyBalance}
            user={user}
          />
          <Mushrooms position={[0, 0, -2.5]} boundary={1} count={1} type={1} />
          <Mush2 position={[2, 0, -5]} />
          <Mush3 position={[4, 0, -5]} />
          <Mush4 position={[0, 0, -10]} />
          <Mush5 position={[2, 0, -10]} />
          <Mush6 position={[4, 0, -10]} />
          <Mush7 position={[0, 0, -15]} />
          <Mush8 position={[2, 0, -15]} />
          <Mush9 position={[4, 0, -15]} />
          <Mush10 position={[0, 0, -20]} />
          <Mush11 position={[2, 0, -20]} />
          <Mush12 position={[4, 0, -20]} />
          <Trees position={[-5, 0, 0]} boundary={2} count={1} type={"1"} />
          <Trees position={[-5, 0, -3]} boundary={1} count={1} type={"2"} />
          <Trees position={[-5, 0, -6]} boundary={2} count={1} type={"3"} />
          <Trees position={[-10, 0, 0]} boundary={2} count={1} type={"4"} />
          <Trees position={[-10, 0, -3]} boundary={2} count={1} type={"5"} />
          <Trees position={[-10, 0, -6]} boundary={2} count={1} type={"6"} />
          <Trees position={[-15, 0, 0]} boundary={2} count={1} type={"7"} />
          <Trees position={[-15, 0, -3]} boundary={2} count={1} type={"8"} />

          <Player />
        </Debug>
      </Physics>
      <fogExp2 attach="fog" args={["black", 0.08]} />
    </>
  );
}
