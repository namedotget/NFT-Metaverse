import { GroundPlane } from "../prefabs/GroundPlane";
import { Suspense, useRef } from "react";
import { Physics, Debug } from "@react-three/cannon";
import { Lights } from "../prefabs/Lights";
import { Trees } from "../prefabs/Trees";
import { Player } from "../prefabs/Player";
import { Room } from "../prefabs/Room";
import { Portal } from "../prefabs/Portal";
import { SecretPortal } from "../prefabs/SecretPortal";
export function WorldOne(props) {
  const { user, notification } = props;
  return (
    <>
      <Physics
        gravity={[0, -50, 0]}
        tolerance={1}
        iterations={50}
        broadphase={"SAP"}
      >
        <Debug>
          <GroundPlane args={[50, 50]} color={"grey"} />

          <pointLight position={[0, 15, 0]} intensity={1} />
          <Lights />
          <Room args={[50, 50]} color={"black"} />
          <Portal
            position={[0, 0, 2]}
            onClick={() => props?.goToWorld("main")}
            text={"main"}
          />

          <SecretPortal
            position={[0, 0, -5]}
            notification={notification}
            goToWorld={() => props?.goToWorld("worldOne", "secretOne")}
            user={user}
          />

          <Trees position={[10, 0, 0]} count={10} boundary={15} type={"3"} />
          <Trees position={[-10, 0, 0]} count={10} boundary={15} type={"3"} />
          <Player />
        </Debug>
      </Physics>
      <fogExp2 attach="fog" args={["lightblue", 0.15]} />
    </>
  );
}
