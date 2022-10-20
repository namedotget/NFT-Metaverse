import React, { useRef, useEffect } from "react";
import { usePlane } from "@react-three/cannon";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
export function PhysicCube(props) {
  /** Plane collider */
  const length = props.args[0] / 2;
  const height = props.args[1] / 2.1;
  const [x, y, z] = props.position || [0, 0, 0];
  usePlane(() => ({
    rotation: [0, 0, 0],
    position: [x, y - 0.25, z - length],
    material: {
      friction: 0.1,
    },
  }));
  usePlane(() => ({
    rotation: [0, Math.PI, 0],
    position: [x, y - 0.25, z + length],
    material: {
      friction: 0.1,
    },
  }));
  usePlane(() => ({
    rotation: [0, Math.PI / 2, 0],
    position: [x - length, y - 0.25, z],
    material: {
      friction: 0.1,
    },
  }));
  usePlane(() => ({
    rotation: [0, -Math.PI / 2, 0],
    position: [x + length, y - 0.25, z],
    material: {
      friction: 0.1,
    },
  }));
  usePlane(() => ({
    rotation: [Math.PI / 2, 0, 0],
    position: [x, y + height, z],
    material: {
      friction: 0.1,
    },
  }));
}
