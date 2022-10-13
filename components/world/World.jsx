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
import { Suspense, useRef } from "react";
import { Player2 } from "./prefabs/Player2";
import { Tree4 } from "./prefabs/trees/Tree4";

export default function World(props) {
  const testing = true;
  return (
    <Canvas shadows flat camera={{ position: [0, 5, 10] }}>
      {testing && (
        <>
          <axesHelper args={[2]} />
          <Stats />
          {/* <gridHelper args={[1000, 1000]} /> */}
        </>
      )}
      <Lights />
      <Skybox />
      <Physics
        gravity={[0, -50, 0]}
        tolerance={0}
        iterations={50}
        broadphase={"SAP"}
      >
        <GroundPlane />
        <Crystal
          position={[3, 3, 2]}
          scale={0.5}
          animated
          isTesting={testing}
        />
        <Suspense fallback={null}>
          <Trees count={20} boundary={50} />
        </Suspense>
        <Player />
      </Physics>
      <fogExp2 attach="fog" args={[0xffffff, 0.055]} />
    </Canvas>
  );
}
