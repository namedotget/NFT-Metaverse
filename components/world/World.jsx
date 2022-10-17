import { Canvas } from "@react-three/fiber";
import { Stats } from "@react-three/drei";
import { useEffect, useRef, useState, Suspense } from "react";
import { MainScene } from "./scenes/MainScene";
import { RoomScene } from "./scenes/RoomScene";
import LoadingScreen from "../UI/LoadingScreen";
import { getEnergyBalance, rewardsOwned } from "../../web3/thirdweb";
import { useSDK } from "@thirdweb-dev/react";
export default function World(props) {
  const { user, userData } = props;
  const [scene, setScene] = useState("main");
  const testing = true;
  const sdk = useSDK();
  //change scene/world
  async function goToWorld(scene) {
    if (scene === "room") {
      const energyBalance = await getEnergyBalance(sdk, user.address);
      if (energyBalance >= 10) setScene(scene);
    }
    if (scene === "pixel") {
      const rewardBalance = await rewardsOwned(sdk, user.address);
      if (rewardBalance >= 1) setScene(scene);
    }
    if (scene === "main") setScene(scene);
  }

  return (
    <Canvas shadows flat camera={{ position: [0, 5, 10] }}>
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
        {scene === "room" && (
          <RoomScene userData={userData} user={user} goToWorld={goToWorld} />
        )}
      </Suspense>
    </Canvas>
  );
}
