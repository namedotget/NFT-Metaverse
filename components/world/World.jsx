import { Canvas } from "@react-three/fiber";
import { Stats } from "@react-three/drei";
import { useEffect, useRef, useState, Suspense } from "react";
import { Notification } from "../UI/Notification";
import { MainScene } from "./scenes/MainScene";
import { WorldOne } from "./scenes/WorldOne";
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
  const [notification, setNotification] = useState({});
  const testing = true;
  const sdk = useSDK();
  //change scene/world
  async function goToWorld(scene) {
    if (scene === "worldOne") {
      const pass1Balance = await getPassBalance(sdk, user.address, 1);
      if (pass1Balance > 0) setScene(scene);
      else handleNotification("error", "🎫 pass 1 is required");
    }
    if (scene === "main" || scene === "store") setScene(scene);
  }

  function handleNotification(type, message) {
    clearTimeout(timer);
    setNotification({
      type,
      message,
    });
    const timer = setTimeout(() => {
      setNotification({});
    }, 4800);
  }

  return (
    <>
      {notification.message && <Notification args={notification} />}
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
            <MainScene
              userData={userData}
              user={user}
              goToWorld={goToWorld}
              notification={handleNotification}
            />
          )}
          {scene === "worldOne" && (
            <WorldOne
              userData={userData}
              user={user}
              goToWorld={goToWorld}
              notification={handleNotification}
            />
          )}
          {scene === "store" && (
            <StoreScene
              userData={userData}
              user={user}
              goToWorld={goToWorld}
              notification={handleNotification}
            />
          )}
        </Suspense>
      </Canvas>
    </>
  );
}
