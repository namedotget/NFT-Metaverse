import { extend } from "@react-three/fiber";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import miso from "../../../public/data/fonts/Miso_Bold.json";

extend({ TextGeometry });

export function Description(props) {
  const font = new FontLoader().parse(miso);
  return (
    <mesh {...props}>
      <textGeometry
        args={[
          props.text,
          { font, size: props.size || 0.6, height: props.height || 0.25 },
        ]}
      />
      <meshPhysicalMaterial attach="material" color={props.color} />
    </mesh>
  );
}
