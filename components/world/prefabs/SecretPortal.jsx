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
      await spendKey(sdk, user?.address, id);
      const newKeyBalance = await getKeyBalance(sdk, user?.address, id);
      if (newKeyBalance < initialKeyBalance) goToWorld();
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
          text={"use key"}
          size={"0.12"}
          height={"0.05"}
          color={"limegreen"}
        />
      </group>
      <mesh>
        <boxGeometry />
        <meshLambertMaterial />
      </mesh>
    </group>
  );
}
