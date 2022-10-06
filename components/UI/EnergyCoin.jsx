import { Canvas } from "@react-three/fiber";
import { Crystal } from "../world/prefabs/Crystal";
export default function EnergyCoin() {
  return (
    <Canvas>
      <spotLight position={[0, 10, 5]} color={"white"} intensity={5} />
      <Crystal scale={0.5} />
    </Canvas>
  );
}
