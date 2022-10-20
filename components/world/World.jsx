import { Canvas } from "@react-three/fiber";
import { Stats } from "@react-three/drei";
import { useEffect, useRef, useState, Suspense } from "react";
import { MainScene } from "./scenes/MainScene";
import { WorldOne } from "./scenes/WorldOne";
import LoadingScreen from "../UI/LoadingScreen";
import {
  getEnergyBalance,
  getPassBalance,
  rewardsOwned,
} from "../../web3/thirdweb";
import { useSDK } from "@thirdweb-dev/react";
import { StoreScene } from "./scenes/StoreScene";
export default function World(props) {
  const { user, userData } = props;
  const [scene, setScene] = useState("main");
  const testing = true;
  const sdk = useSDK();
  //change scene/world
  async function goToWorld(scene) {
    if (scene === "worldOne") {
      const pass1Balance = await getPassBalance(sdk, user.address, 1);
      if (pass1Balance > 0) setScene(scene);
    }
    if (scene === "pixel") {
      const rewardBalance = await rewardsOwned(sdk, user.address);
      if (rewardBalance >= 1) setScene(scene);
    }
    if (scene === "main" || scene === "store") setScene(scene);
  }

  return (
    <Canvas
      shadows
      flat
      camera={{ position: [0, 5, 10] }}
      style={{ background: "black" }}
    >
      {testing && (
        <>
          <Stats />
          {/* <gridHelper args={[1000, 1000]} /> */}
        </>
      )}
      <Suspense fallback={<mesh />}>
        {scene === "main" && (
          <MainScene userData={userData} user={user} goToWorld={goToWorld} />
        )}
        {scene === "worldOne" && (
          <WorldOne userData={userData} user={user} goToWorld={goToWorld} />
        )}
        {scene === "store" && (
          <StoreScene userData={userData} user={user} goToWorld={goToWorld} />
        )}
      </Suspense>
    </Canvas>
  );
}
