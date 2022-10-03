import { useRef, useState } from "react";
import { useFrame, useThree, extend } from "@react-three/fiber";
import { RoundedBox } from "@react-three/drei";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import modern from "../../public/data/fonts/Miso_Bold.json";
extend({ TextGeometry });

export default function ConnectWallet(props) {
  const buttonRef = useRef();
  const textRef = useRef();
  const [hover, setHover] = useState(false);

  const { viewport, mouse } = useThree();
  const font = new FontLoader().parse(modern);

  useFrame(({ clock }) => {
    //button hover animation
    const x = buttonRef?.current.scale.x;
    if (hover && x < 1.15) {
      buttonRef.current.scale.x += 0.028 - 0.021 * x;
    } else if (hover && x >= 1.15) "";
    if (!hover && x > 1) {
      buttonRef.current.scale.x -= 0.028 - 0.021 * x;
    } else if (!hover && x <= 1) "";
    if (viewport.width > viewport.height) {
      buttonRef.current.rotation.y = mouse.x;
      buttonRef.current.rotation.x = -mouse.y;
    }
  });
  return (
    <group
      rotation={[Math.PI / 10, 0, 0]}
      position={(0, 0, 0)}
      ref={buttonRef}
      onClick={() => {
        initWeb3();
      }}
    >
      <pointLight color={"white"} intensity={3} />
      <RoundedBox
        args={
          viewport.width > viewport.height
            ? [viewport.width / 3.5, 2.5, 2]
            : [viewport.width / 1.25, 1.75, 1.5]
        }
        radius={0.4}
        smoothness={20}
        onPointerOver={() => {
          setHover(true);
        }}
        onPointerLeave={() => {
          setHover(false);
        }}
      >
        <meshLambertMaterial color={"white"} />
      </RoundedBox>
      <mesh
        ref={textRef}
        position={[
          viewport.width > viewport.height
            ? 0 - viewport.width / 17
            : 0 - viewport.width / viewport.width,
          -0.1,
          0,
        ]}
      >
        <textGeometry
          args={[
            "CONNECT",
            {
              font,
              size:
                viewport.width > viewport.height ? viewport.width / 35 : 0.3,
              height: viewport.width > viewport.height ? 1.125 : 0.8,
            },
          ]}
        />
        <meshLambertMaterial attach="material" color={"blue"} />
      </mesh>
    </group>
  );
}
