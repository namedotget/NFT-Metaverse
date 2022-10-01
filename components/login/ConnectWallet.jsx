import { useRef, useState } from "react";
import { useFrame, useThree, extend } from "@react-three/fiber";
import { RoundedBox } from "@react-three/drei";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import modern from "../../public/Modern.json";
import { useEffect } from "react";
import web3, { initWeb3 } from "../../web3/web3";
extend({ TextGeometry });

export default function ConnectWallet(props) {
  const buttonRef = useRef();
  const textRef = useRef();
  const [hover, setHover] = useState(false);

  const { viewport, mouse } = useThree();
  const font = new FontLoader().parse(modern);

  async function connect() {
    try {
      await initWeb3();
      const [account1] = await window?.web3.eth.getAccounts();
      props.isVerified(account1);
    } catch (err) {
      console.log("No wallet selected", err.message);
    }
  }

  useFrame(({ clock }) => {
    //button hover animation
    const x = buttonRef?.current.scale.x;
    if (hover && x < 1.25) {
      buttonRef.current.scale.x += 0.028 - 0.021 * x;
    } else if (hover && x >= 1.25) "";
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
      onClick={connect}
    >
      <RoundedBox
        args={
          viewport.width > viewport.height
            ? [viewport.width / 3, 2.5, 2]
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
        position={[
          viewport.width > viewport.height
            ? 0 - viewport.width / 8
            : 0 - viewport.width / viewport.width,
          0,
          0,
        ]}
      >
        <textGeometry
          ref={textRef}
          args={[
            "connect",
            {
              font,
              size: viewport.width > viewport.height ? 0.8 : 0.3,
              height: viewport.width > viewport.height ? 1.1 : 0.8,
            },
          ]}
        />
        <meshLambertMaterial attach="material" color={"blue"} />
      </mesh>
    </group>
  );
}
