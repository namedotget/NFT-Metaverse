import { useSphere } from "@react-three/cannon";
import React, { useEffect, useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Vector3 } from "three";
import { Raycaster } from "three";
import { useInput } from "../hooks/useInput";
/** Player movement constants */
const speed = 150;
const bulletSpeed = 30;
const bulletCoolDown = 300;
const jumpSpeed = 5;
const jumpCoolDown = 4;

export const Player2 = () => {
  /** Player collider */
  const [sphereRef, api] = useSphere(() => ({
    mass: 100,
    fixedRotation: true,
    position: [0, 1, 0],
    args: [0.5],
    material: {
      friction: 0,
    },
  }));
  const { forward, backward, left, right, jump, shift } = useInput();

  const playerPosition = useRef([0, 1, 0]);
  /** Player movement constants */
  const { camera, scene } = useThree();

  /** Player state */
  const state = useRef({
    timeToShoot: 0,
    timeTojump: 0,
    vel: [0, 0, 0],
    jumping: false,
  });

  useEffect(() => {
    api.velocity.subscribe((v) => (state.current.vel = v));
    api.position.subscribe((v) => (playerPosition.current = v), []);
  }, [api]);

  /** Player loop */
  useFrame((_, delta) => {
    /** Handles movement */
    let velocity = new Vector3(0, 0, 0);
    let cameraDirection = new Vector3();
    camera.getWorldDirection(cameraDirection);

    let forward = new Vector3();
    forward.setFromMatrixColumn(camera.matrix, 0);
    forward.crossVectors(camera.up, forward);

    let right = new Vector3();
    right.setFromMatrixColumn(camera.matrix, 0);

    let [horizontal, vertical] = [0, 0];

    if (forward) {
      vertical += 1;
    }
    if (backward) {
      vertical -= 1;
    }
    if (right) {
      horizontal += 1;
    }
    if (left) {
      horizontal -= 1;
    }

    if (horizontal !== 0 && vertical !== 0) {
      velocity
        .add(forward.clone().multiplyScalar(speed * vertical))
        .add(right.clone().multiplyScalar(speed * horizontal));
      velocity.clampLength(-speed, speed);
    } else if (horizontal !== 0) {
      velocity.add(right.clone().multiplyScalar(speed * horizontal));
    } else if (vertical !== 0) {
      velocity.add(forward.clone().multiplyScalar(speed * vertical));
    }

    /** Updates player velocity */
    api.velocity.set(
      velocity.x * delta,
      state.current.vel[1],
      velocity.z * delta
    );
    /** Updates camera position */
    camera.position.set(
      playerPosition.current[0],
      playerPosition.current[1] + 1,
      playerPosition.current[2]
    );

    /** Handles jumping */
    if (state.current.jumping && state.current.vel[1] < 0) {
      /** Ground check */
      const raycaster = new Raycaster(
        sphereRef.current.position,
        new Vector3(0, -1, 0),
        0,
        0.2
      );
      const intersects = raycaster.intersectObjects(scene.children);
      if (intersects.length !== 0) {
        state.current.jumping = false;
      }
    }

    if (space && !state.current.jumping) {
      const now = Date.now();
      if (now > state.current.timeTojump) {
        state.current.timeTojump = now + jumpCoolDown;
        state.current.jumping = true;
        api.velocity.set(state.current.vel[0], jumpSpeed, state.current.vel[2]);
      }
    }

    /** Handles shooting */
    const bulletDirection = cameraDirection.clone().multiplyScalar(bulletSpeed);
    const bulletPosition = camera.position
      .clone()
      .add(cameraDirection.clone().multiplyScalar(2));

    if (mouseInput.current.right) {
      const now = Date.now();
      if (now >= state.current.timeToShoot) {
        state.current.timeToShoot = now + bulletCoolDown;
        setBullets((bullets) => [
          ...bullets,
          {
            id: now,
            position: [bulletPosition.x, bulletPosition.y, bulletPosition.z],
            forward: [bulletDirection.x, bulletDirection.y, bulletDirection.z],
          },
        ]);
      }
    }
  });

  return <></>;
};