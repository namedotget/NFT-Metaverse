import React, { useRef, useEffect } from "react";
import { usePlane } from "@react-three/cannon";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
export function Room(props) {
  /** Plane collider */
  const [left, right, top, front, back] = useLoader(TextureLoader, [
    "/images/skybox/left.png",
    "/images/skybox/right.png",
    "/images/skybox/top.png",
    "/images/skybox/front.png",
    "/images/skybox/back.png",
  ]);

  const { color } = props;

  const [wallRef1] = usePlane(() => ({
    rotation: [0, 0, 0],
    position: [0, -0.25, -25],
    material: {
      friction: 0.1,
    },
  }));
  const [wallRef2] = usePlane(() => ({
    rotation: [0, Math.PI, 0],
    position: [0, -0.25, 25],
    material: {
      friction: 0.1,
    },
  }));
  const [wallRef3] = usePlane(() => ({
    rotation: [0, Math.PI / 2, 0],
    position: [-25, -0.25, 0],
    material: {
      friction: 0.1,
    },
  }));
  const [wallRef4] = usePlane(() => ({
    rotation: [0, -Math.PI / 2, 0],
    position: [25, -0.25, 0],
    material: {
      friction: 0.1,
    },
  }));
  const [ceilRef] = usePlane(() => ({
    rotation: [Math.PI / 2, 0, 0],
    position: [0, 14.75, 0],
    material: {
      friction: 0.1,
    },
  }));

  return (
    <group>
      <mesh
        ref={wallRef1}
        receiveShadow={true}
        rotation={[0, 0, 0]}
        scale={[50, 30, 100]}
      >
        <planeBufferGeometry />
        <meshPhongMaterial map={front} />
      </mesh>
      <mesh
        ref={wallRef2}
        receiveShadow={true}
        rotation={[0, 0, 0]}
        scale={[50, 30, 100]}
      >
        <planeBufferGeometry />
        <meshPhongMaterial color={"red"} />
      </mesh>
      <mesh
        ref={wallRef3}
        receiveShadow={true}
        rotation={[0, 0, 0]}
        scale={[50, 30, 100]}
      >
        <planeBufferGeometry />
        <meshPhongMaterial />
      </mesh>
      <mesh
        ref={wallRef4}
        receiveShadow={true}
        rotation={[0, 0, 0]}
        scale={[50, 30, 100]}
      >
        <planeBufferGeometry />
        <meshPhongMaterial color={color} receiveShadow />
      </mesh>
      <mesh
        ref={ceilRef}
        receiveShadow={true}
        rotation={[0, 0, 0]}
        scale={[50, 50, 100]}
      >
        <planeBufferGeometry />
        <meshPhongMaterial map={top} />
      </mesh>
    </group>
  );
}
