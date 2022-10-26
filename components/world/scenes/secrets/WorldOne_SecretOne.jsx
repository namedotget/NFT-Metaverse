import { GroundPlane } from "../../prefabs/GroundPlane";
import { Suspense, useRef } from "react";
import { Lights } from "../../prefabs/Lights";
import { Trees } from "../../prefabs/Trees";
import { Player } from "../../prefabs/Player";
import { Portal } from "../../prefabs/Portal";
import { PhysicCube } from "../../prefabs/PhysicCube";
import { useFrame } from "@react-three/fiber";
import { Mushrooms } from "../../prefabs/Mushrooms";
import { Physics, Debug } from "@react-three/cannon";
import { PhysicPlane } from "../../prefabs/PhysicPlane";
export function WorldOne_SecretOne(props) {
  const { user } = props;
  const treesRef = useRef();
  const treesRef2 = useRef();

  useFrame(() => {
    if (treesRef.current) {
      treesRef.current.rotation.z += 0.0075;
      treesRef.current.rotation.x += 0.01;
    }
    if (treesRef2.current) treesRef2.current.rotation.x += 0.01;
  });
  return (
    <>
      <Physics
        gravity={[0, -50, 0]}
        tolerance={1}
        iterations={50}
        broadphase={"SAP"}
      >
        <pointLight position={[0, 15, 0]} intensity={1} />
        <Lights />
        <PhysicCube args={[7, 7]} />
        <PhysicPlane args={[7, 7]} />
        <Portal
          position={[2, 0, 0]}
          onClick={() => props.goToWorld("worldOne")}
          text={"exit"}
        />

        <group ref={treesRef}>
          <Mushrooms
            position={[0, 0, 0.255]}
            boundary={20}
            count={100}
            type={4}
          />
          <Mushrooms position={[0, 0, 0.5]} boundary={10} count={10} type={7} />
          <Mushrooms position={[0, 0, 0]} boundary={10} count={10} type={9} />
        </group>
        <group ref={treesRef2}>
          <Mushrooms
            position={[0, 0, -2.5]}
            boundary={10}
            count={10}
            type={1}
          />
          <Mushrooms position={[0, 0, -1]} boundary={10} count={20} type={2} />
          <Mushrooms position={[0, 0, -1]} boundary={10} count={20} type={5} />
        </group>
        <Player />
      </Physics>
      <fogExp2 attach="fog" args={["lightblue", 0.15]} />
    </>
  );
}
