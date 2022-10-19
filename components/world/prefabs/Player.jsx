import React, { useRef, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useInput } from "../hooks/useInput";
import { useEffect } from "react";
import { OrbitControls } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { useBox, useSphere, useCylinder } from "@react-three/cannon";
let walkDirection = new THREE.Vector3();
let rotateAngle = new THREE.Vector3(0, 1, 0);
let rotateQuarternion = new THREE.Quaternion();
let cameraTarget = new THREE.Vector3();

function directionOffset({ forward, backward, left, right }) {
  let directionOffset = 0; //w

  if (forward) {
    if (left) {
      directionOffset = Math.PI / 4; //w+a
    } else if (right) {
      directionOffset = -Math.PI / 4; //w+d
    }
  } else if (backward) {
    if (left) {
      directionOffset = Math.PI / 4 + Math.PI / 2; //s+a
    } else if (right) {
      directionOffset = -Math.PI / 4 - Math.PI / 2; //s+d
    } else {
      directionOffset = Math.PI; //s
    }
  } else if (left) {
    directionOffset = Math.PI / 2; // a
  } else if (right) {
    directionOffset = -Math.PI / 2; // d
  }

  return directionOffset;
}

export function Player(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/testPlayer.glb");
  const { actions } = useAnimations(animations, group);
  const { forward, backward, left, right, jump, shift } = useInput();
  const currentAction = useRef("");
  const playerPosition = useRef([0, 0, 0]);
  const velocity = useRef([0, 0, 0]);
  const controlsRef = useRef(<OrbitControls />);
  const { camera, scene } = useThree();

  const [sphereRef, api] = useCylinder(() => ({
    mass: 100,
    fixedRotation: true,
    args: [0.1, 0.22, 1, 7],
    material: {
      friction: 0,
    },
    position: [0, 0, 0],
  }));

  function updateCameraTarget(moveX, moveZ) {
    // if (
    //   Math.abs(velocity.current[0]) > 0.9 ||
    //   Math.abs(velocity.current[2] > 0.9)
    // ) {
    //   camera.position.x += moveX;
    //   camera.position.z += moveZ;
    // }
    //update camera target
    cameraTarget.x = group.current.position.x;
    cameraTarget.y = group.current.position.y + 1;
    cameraTarget.z = group.current.position.z;
    if (controlsRef.current) controlsRef.current.target = cameraTarget;
  }

  useEffect(() => {
    updateCameraTarget();
    let action = "";
    if (forward || backward || left || right) {
      action = "walking";
      if (shift) action = "running";
    } else if (jump) {
      action = "jump";
    } else {
      action = "idle";
    }

    if (currentAction.current != action) {
      const nextActionToPlay = actions[action];
      const current = actions[currentAction.current];
      current?.fadeOut(0.2);
      nextActionToPlay?.reset().fadeIn(0.2).play();
      currentAction.current = action;
    }
    api.velocity.subscribe((v) => {
      velocity.current = v;
    });
    api.position.subscribe((v) => (playerPosition.current = v));
    api.position.subscribe((v) => {
      group?.current?.position.set(v[0], v[1] - 0.5, v[2]);
    });
  }, [forward, backward, left, right, jump, shift, api, group]);

  useFrame((state, delta) => {
    if (
      currentAction.current === "running" ||
      currentAction.current === "walking"
    ) {
      // calculate towards camera direction
      let angleYCameraDirection = Math.atan2(
        camera.position.x - playerPosition.current[0],
        camera.position.z - playerPosition.current[2]
      );

      let newDirectionOffset = directionOffset({
        forward,
        backward,
        left,
        right,
      });
      // rotate model
      rotateQuarternion.setFromAxisAngle(
        rotateAngle,
        angleYCameraDirection + newDirectionOffset
      );
      group.current.quaternion.rotateTowards(rotateQuarternion, 0.2);

      // calculate direction
      camera.getWorldDirection(walkDirection);
      walkDirection.y = 0;
      walkDirection.normalize();
      walkDirection.applyAxisAngle(rotateAngle, newDirectionOffset);

      // run/walk velocity
      const velocity = currentAction.current == "running" ? 14 : 7;
      const moveX = walkDirection.x * velocity * delta;
      const moveZ = walkDirection.z * velocity * delta;
      api.velocity.set(moveX * 20, 0, moveZ * 20);
      updateCameraTarget(moveX, moveZ);
      // group.current.position.set(
      //   playerPosition.current[0],
      //   playerPosition.current[1] - 0.75,
      //   playerPosition.current[2]
      // );
    } else {
      api.velocity.set(0, 0, 0);
    }
  });
  return (
    <>
      <OrbitControls
        ref={controlsRef}
        enablePan={false}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 2.1}
        minDistance={1}
        maxDistance={1}
        dampingFactor={0.5}
      />
      <group dispose={null} ref={group}>
        <group name="Scene">
          <mesh ref={sphereRef} />
          <group name="Armature" rotation={[0, Math.PI, 0]} scale={0.6}>
            <primitive object={nodes.mixamorigHips} />
            <primitive object={nodes.Ctrl_ArmPole_IK_Left} />
            <primitive object={nodes.Ctrl_Hand_IK_Left} />
            <primitive object={nodes.Ctrl_ArmPole_IK_Right} />
            <primitive object={nodes.Ctrl_Hand_IK_Right} />
            <primitive object={nodes.Ctrl_Foot_IK_Left} />
            <primitive object={nodes.Ctrl_LegPole_IK_Left} />
            <primitive object={nodes.Ctrl_Foot_IK_Right} />
            <primitive object={nodes.Ctrl_LegPole_IK_Right} />
            <primitive object={nodes.Ctrl_Master} />
            <skinnedMesh
              name="vanguard_Mesh"
              geometry={nodes.vanguard_Mesh.geometry}
              material={materials.VanguardBodyMat}
              skeleton={nodes.vanguard_Mesh.skeleton}
            />
          </group>
        </group>
      </group>
    </>
  );
}

useGLTF.preload("/testPlayer.glb");
