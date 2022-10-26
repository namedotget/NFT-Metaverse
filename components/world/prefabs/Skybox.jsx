import React, { useEffect } from "react";
import { useThree } from "@react-three/fiber";
import { CubeTextureLoader } from "three";

export const Skybox = () => {
  const { scene } = useThree();

  useEffect(() => {
    scene.background = new CubeTextureLoader()
      .setPath("/images/skybox/")
      .load([
        "right.png",
        "left.png",
        "top.png",
        "bot.png",
        "front.png",
        "back.png",
      ]);
  }, [scene]);

  return <></>;
};
