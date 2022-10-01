import classes from "./home.module.scss";
import { useRef } from "react";
import { Canvas, useFrame, useThree, extend } from "@react-three/fiber";
import OrbNav from "./OrbNav";

export default function Home() {
  return (
    <div className={classes.home}>
      <Canvas>
        <spotLight position={[0, 5, 0]} color={"cyan"} intensity={4} />
        <pointLight position={[0, -10, 0]} color={"white"} intensity={1} />
        <spotLight position={[0, 0, -10]} color={"orange"} intensity={0.5} />
        <OrbNav />
      </Canvas>
    </div>
  );
}
