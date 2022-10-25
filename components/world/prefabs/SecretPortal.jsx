import { useRef, useState } from "react";
import { getKeyBalance, spendKey } from "../../../web3/thirdweb";
import { useSDK } from "@thirdweb-dev/react";
import { RoundedBox } from "@react-three/drei";
import { Description } from "./Description";
import assert from "assert";
export function SecretPortal(props) {
  const { user, id, goToWorld } = props;
  const buttonRef = useRef();
  const sdk = useSDK();
  const [locked, setLocked] = useState(true);
  const [loading, setLoading] = useState(false);
  async function unlockDoor(id) {
    if (loading) return;
    try {
      setLoading(true);
      const initialKeyBalance = await getKeyBalance(sdk, user?.address, id);
      assert(initialKeyBalance > 0);
      const spend = await spendKey(sdk, user?.address, id);
      const newKeyBalance = await getKeyBalance(sdk, user?.address, id);
      if (newKeyBalance < initialKeyBalance) setLocked(false);
    } catch (err) {
      if ((err.message = "false == true")) {
        props?.notification("error", "need 🔑1 to unlock");
      }
      console.log(err.message);
    }
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }

  function openDoor() {
    // if (locked) return console.log("door is locked, use a key");
    // else
    goToWorld("worldOne", "secretOne");
  }

  return (
    <group {...props}>
      <group
        ref={buttonRef}
        position={[0, 1, 0]}
        onClick={() => unlockDoor("1")}
      >
        <RoundedBox args={[0.5, 0.4, 0.2]}>
          <meshLambertMaterial />
        </RoundedBox>
        <Description
          position={[-0.22, -0.03, 0.075]}
          text={"unlock"}
          size={"0.15"}
          height={"0.05"}
          color={"limegreen"}
        />
        <Description
          position={[-0.5, 0.5, 0]}
          text={locked ? "locked" : "open"}
          size={0.35}
          color={"cyan"}
        />
      </group>

      <mesh onClick={openDoor}>
        <boxGeometry />
        <meshLambertMaterial />
      </mesh>
    </group>
  );
}
