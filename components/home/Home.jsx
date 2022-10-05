import classes from "./home.module.scss";
import { Suspense, useRef, useState } from "react";
import { Canvas, useFrame, useThree, extend } from "@react-three/fiber";
import OrbNav from "../world/prefabs/OrbNav";
import CanvasLoader from "../world/prefabs/CanvasLoader";
import { CrystalRock } from "../world/prefabs/CrystalRock";
import { Crystal } from "../world/prefabs/Crystal";

export default function Home() {
  return (
    <div className={classes.home}>
      <Canvas>
        <spotLight position={[0, 5, 0]} color={"cyan"} intensity={10} />
        <pointLight position={[0, -10, 0]} color={"white"} intensity={3} />
        <pointLight position={[0, 2, 1]} color={"yellow"} intensity={0.8} />
        <ambientLight color={"white"} intensity={0.7} />
        <Crystal scale={0.5} position={[0, -1.25, 0]} />
      </Canvas>
    </div>
  );
}
