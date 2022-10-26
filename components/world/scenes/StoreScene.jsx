import { GroundPlane } from "../prefabs/GroundPlane";
import { Physics, Debug } from "@react-three/cannon";
import { Lights } from "../prefabs/Lights";
import { Player } from "../prefabs/Player";
import { Portal } from "../prefabs/Portal";

import { PhysicCube } from "../prefabs/PhysicCube";
import { VendingMachine } from "../prefabs/VendingMachine";
export function StoreScene(props) {
  const { notification } = props;
  return (
    <>
      <Physics
        gravity={[0, -50, 0]}
        tolerance={1}
        iterations={50}
        broadphase={"SAP"}
      >
        <Debug>
          <GroundPlane args={[10, 10]} color={"grey"} />

          <pointLight position={[0, 15, 0]} intensity={1} />
          <Lights />
          <PhysicCube args={[10, 10]} />
          <VendingMachine
            position={[0, 0, 4]}
            user={props.user}
            notification={notification}
          />
          <Portal onClick={() => props.goToWorld("main")} text={"main"} />
          <Player />
        </Debug>
      </Physics>
    </>
  );
}
