import { Canvas } from "@react-three/fiber";
import { Stats } from "@react-three/drei";
import { useEffect, useRef, useState, Suspense } from "react";
import { MainScene } from "./scenes/MainScene";
import { RoomScene } from "./scenes/RoomScene";
import LoadingScreen from "../UI/LoadingScreen";
export default function World(props) {
  const { user } = props;
  const [userData, setUserData] = useState(null);
  const [scene, setScene] = useState("room");
  const testing = true;

  useEffect(() => {
    setUserData(JSON.parse(localStorage.getItem("user")));
  }, []);

  function goToWorld(scene) {
    setScene(scene);
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
