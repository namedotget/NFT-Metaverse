import Button from "../UI/Button";
import classes from "./login.module.scss";
import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import ConnectWallet from "./ConnectWallet";
import { useEffect } from "react";

export default function Login(props) {
  const [verified, setVerified] = useState(false);
  async function isVerified(address) {
    const [account] = await window?.web3.eth.getAccounts();
    if (account === address) {
      setVerified(true);
    }
  }

  return (
    <>
      {verified ? (
        props.children
      ) : (
        <div className={classes.login}>
          <Canvas>
            <ambientLight color={"white"} intensity={0.025} />
            <spotLight
              position={[0, -25, 3]}
              color={"orange"}
              intensity={1}
              lookAt={[0, 0, 0]}
            />
            <spotLight
              position={[0, -30, 50]}
              color={"red"}
              intensity={1.1}
              lookAt={[0, 0, 0]}
            />

            <spotLight
              position={[0, 50, -30]}
              color={"purple"}
              intensity={0.9}
            />
            <ConnectWallet isVerified={isVerified} />
          </Canvas>
        </div>
      )}
    </>
  );
}
