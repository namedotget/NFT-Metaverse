import classes from "./login.module.scss";
import { Canvas } from "@react-three/fiber";
import ConnectWallet from "./ConnectWallet";
export default function Login(props) {
  return (
    <div className="pgContain">
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

          <spotLight position={[0, 50, -30]} color={"purple"} intensity={0.9} />
          <ConnectWallet />
        </Canvas>
      </div>
    </div>
  );
}
