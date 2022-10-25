import { GroundPlane } from "../prefabs/GroundPlane";
import { Suspense, useRef } from "react";
import { Physics, Debug } from "@react-three/cannon";
import { Lights } from "../prefabs/Lights";
import { Trees } from "../prefabs/Trees";
import { Player } from "../prefabs/Player";
import { Room } from "../prefabs/Room";
import { Portal } from "../prefabs/Portal";
import { PhysicCube } from "../../prefabs/PhysicCube";

export function WorldOne_SecretOne(props) {
  const { user } = props;
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
          <PhysicCube  args={[20, 20]} />
          <Portal onClick={() => props.goToWorld("WorldOne")} text={"WorldOne"} />
          <GroundPlane args={[50, 50]} color={"grey"} />
          <SecretPortal position={[0, 0, -5]} notification={notification} />
          <Suspense fallback={null}>
            <Trees position={[15, 0, 0]} count={20} boundary={15} type={"3"} />
            <Trees position={[-15, 0, 0]} count={20} boundary={15} type={"3"} />
          </Suspense>
          <Player />
        </Debug>
      </Physics>
      <fogExp2 attach="fog" args={["lightblue", 0.15]} />
    </>
  );
}
