import { Crystal } from "./prefabs/Crystal";
import { Canvas } from "@react-three/fiber";
import {
  Detailed,
  OrbitControls,
  Stats,
  TransformControls,
} from "@react-three/drei";

import { GroundPlane } from "./prefabs/GroundPlane";
import { Lights } from "./prefabs/Lights";
import { Trees } from "./prefabs/Trees";
import { Skybox } from "./prefabs/Skybox";

import { Player } from "./prefabs/Player";
import { Physics, Debug } from "@react-three/cannon";
import { Suspense, useEffect, useRef, useState } from "react";
import { Tree4 } from "./prefabs/trees/Tree4";

export default function World(props) {
  const [userData, setUserData] = useState(null);
  const testing = true;

  useEffect(() => {
    setUserData(JSON.parse(localStorage.getItem("user")));
  }, []);
  return (
    <Canvas shadows flat camera={{ position: [0, 5, 10] }}>
      {testing && (
        <>
          <Stats />
          {/* <gridHelper args={[1000, 1000]} /> */}
        </>
      )}
      <Lights />
      <Skybox />
      <Physics
        gravity={[0, -50, 0]}
        tolerance={1}
        iterations={50}
        broadphase={"SAP"}
      >
        <Debug>
          <GroundPlane />
          <Crystal
            position={[3, 1, 2]}
            scale={0.5}
            animated
            world
            isTesting={testing}
            balance={userData?.energyBalance}
          />
          <Suspense fallback={null}>
            <Trees count={50} boundary={50} type={"3"} />
            <Trees position={[50, 0, 1]} count={50} boundary={50} type={"2"} />
            <Trees position={[0, 0, 50]} count={50} boundary={50} type={"1"} />
          </Suspense>
          <Player />
        </Debug>
      </Physics>
      <fogExp2 attach="fog" args={[0xffffff, 0.09]} />
    </Canvas>
  );
}
