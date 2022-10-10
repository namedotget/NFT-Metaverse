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
import { Physics } from "@react-three/cannon";

export default function World(props) {
  const testing = true;

  return (
    <Canvas shadows>
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
        gravity={[0, -9, 0]}
        tolerance={0}
        iterations={50}
        broadphase={"SAP"}
      >
        <GroundPlane />
        <Crystal animated scale={0.5} isTesting={testing} />
        <Detailed distances={[0, 80]}>
          <Trees count={50} boundary={20} />
          <mesh />
        </Detailed>
        <Player position={[3, 0, 0]} />
      </Physics>
      <fogExp2 attach="fog" args={[0xffffff, 0.125]} />
    </Canvas>
  );
}
