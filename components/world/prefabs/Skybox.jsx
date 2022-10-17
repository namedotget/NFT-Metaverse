import React, { useEffect } from "react";
import { useThree } from "@react-three/fiber";
import { CubeTextureLoader } from "three";

export const Skybox = () => {
  const { scene } = useThree();

  useEffect(() => {
    scene.background = new CubeTextureLoader()
      .setPath("/images/skybox/")
      .load([
        "left.png",
        "right.png",
        "top.png",
        "bot.png",
        "back.png",
        "front.png",
      ]);
  }, [scene]);

  return <></>;
};
