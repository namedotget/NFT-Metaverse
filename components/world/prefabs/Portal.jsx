import { Description } from "./Description";
import { useThree, useFrame } from "@react-three/fiber";
import { useRef } from "react";
export function Portal(props) {
  const { onClick } = props;
  const { camera } = useThree();
  const textRef = useRef();

  useFrame(() => {
    textRef.current.lookAt(camera.position.x, 0.5, camera.position.z);
  });
  return (
    <group {...props}>
      <mesh onClick={onClick}>
        <boxGeometry args={[1]} />
      </mesh>
      <group ref={textRef}>
        <Description
          position={[-0.75, 2, 0]}
          text={props.text}
          color={"lightblue"}
        />
      </group>
    </group>
  );
}
