import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useInput } from "../hooks/useInput";
import { useEffect } from "react";
import { OrbitControls } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { useBox } from "@react-three/cannon";

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
  const controlsRef = useRef(<OrbitControls />);
  const { camera } = useThree();

  const [cubeRef, api] = useBox(() => ({
    mass: 100,
    args: [1, 4, 1],
    material: {
      friction: 1,
      restitution: 0,
    },
    ...props,
    type: "static",
  }));

  function updateCameraTarget(moveX, moveZ) {
    //move camera
    camera.position.x += moveX;
    camera.position.z += moveZ;

    //update camera target
    cameraTarget.x = group.current.position.x;
    cameraTarget.y = group.current.position.y + 1.9;
    cameraTarget.z = group.current.position.z;
    if (controlsRef.current) controlsRef.current.target = cameraTarget;
  }

  useEffect(() => {
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
  }, [forward, backward, left, right, jump, shift]);

  useFrame((state, delta) => {
    if (
      currentAction.current === "running" ||
      currentAction.current === "walking"
    ) {
      // calculate towards camera direction
      let angleYCameraDirection = Math.atan2(
        camera.position.x - group.current.position.x,
        camera.position.z - group.current.position.z
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
      const velocity = currentAction.current == "running" ? 10 : 5;

      const moveX = walkDirection.x * velocity * delta;
      const moveZ = walkDirection.z * velocity * delta;
      group.current.position.x += moveX;
      group.current.position.z += moveZ;
      updateCameraTarget(moveX, moveZ);
    }
  });
  return (
    <>
      <OrbitControls ref={controlsRef} />
      <group {...props} dispose={null} ref={group}>
        <group name="Scene" rotation={[0, Math.PI, 0]}>
          <group name="Armature">
            <primitive object={nodes.mixamorigHips} />
            <primitive object={nodes.Ctrl_ArmPole_IK_Left} />
            <primitive object={nodes.Ctrl_Hand_IK_Left} />
            <primitive object={nodes.Ctrl_ArmPole_IK_Right} />
            <primitive object={nodes.Ctrl_Hand_IK_Right} />
            <primitive object={nodes.Ctrl_Foot_IK_Left} />
            <primitive object={nodes.Ctrl_LegPole_IK_Left} />
            <primitive object={nodes.Ctrl_Foot_IK_Right} />
            <primitive object={nodes.Ctrl_LegPole_IK_Right} />
            <primitive object={nodes.Ctrl_Master} ref={cubeRef} />
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
