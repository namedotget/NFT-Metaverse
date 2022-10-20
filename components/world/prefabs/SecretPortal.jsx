import { useState } from "react";
import { spendKey } from "../../../web3/thirdweb";
import { PhysicCube } from "./PhysicCube";
import { useSDK } from "@thirdweb-dev/react";
export function SecretPortal(props) {
  const { user, id } = props;
  const sdk = useSDK();
  const [locked, setLocked] = useState(true);
  const [doorIsOpen, setDoorIsOpen] = useState(false);

  async function unlockDoor() {
    const burn = await spendKey(sdk, user.address, id);
    if (burn) props.goToWorld("worldOneSecret");
    console.log("door has been unlocked!!!");
  }

  function openDoor() {
    if (locked) return console.log("door is locked, use a key");
    console.log("the door has been opened!!!");
  }

  return (
    <group {...props}>
      <mesh onClick={openDoor}>
        <boxGeometry args={[1, 2, 0.25]} />
        <meshLambertMaterial />
      </mesh>
    </group>
  );
}
