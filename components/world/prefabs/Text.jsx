import { extend } from "@react-three/fiber";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import modern from "../../../public/Modern.json";

extend({ TextGeometry });

export function Text(props) {
  const font = new FontLoader().parse(modern);
  return (
    <mesh {...props}>
      <textGeometry
        args={[
          props.text,
          { font, size: props.size, height: props.height || 0.25 },
        ]}
      />
      <meshPhysicalMaterial attach="material" color={"cyan"} />
    </mesh>
  );
}
