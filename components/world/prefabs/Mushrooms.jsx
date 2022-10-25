import { Detailed } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useEffect, useState } from "react";
import { Mush1 } from "./mushrooms/Mush1";
import { Mush2 } from "./mushrooms/Mush2";
import { Mush3 } from "./mushrooms/Mush3";
import { Mush4 } from "./mushrooms/Mush4";
import { Mush5 } from "./mushrooms/Mush5";
import { Mush6 } from "./mushrooms/Mush6";
import { Mush7 } from "./mushrooms/Mush7";
import { Mush8 } from "./mushrooms/Mush8";

export function Mushrooms(props) {
  const { count, boundary, type } = props;
  const parentPosition = props.position || [0, 0, 0];
  const [mushrooms, setmushrooms] = useState([]);
  const { camera, scene } = useThree();

  function MushType(MushProps) {
    let { pos } = MushProps;
    const rotationY = Math.PI / pos[0] / pos[2];
    const types = {
      1: <Mush1 position={pos} rotY={rotationY} />,
      2: <Mush2 position={pos} rotY={rotationY} />,
      3: <Mush3 position={pos} rotY={rotationY} />,
      4: <Mush4 position={pos} rotY={rotationY} />,
      5: <Mush5 position={pos} rotY={rotationY} />,
      6: <Mush6 position={pos} rotY={rotationY} />,
      7: <Mush7 position={pos} rotY={rotationY} />,
      8: <Mush8 position={pos} rotY={rotationY} />,
    };
    return types[type];
  }
  function boxIntersects(
    minAx,
    minAz,
    maxAx,
    maxAz,
    minBx,
    minBz,
    maxBx,
    maxBz
  ) {
    let aLeftOfB = maxAx < minBx;
    let aRightOfB = minAx > maxBx;
    let aAboveB = minAz > maxBz;
    let aBelowB = maxAz < minBz;

    return !(aLeftOfB || aRightOfB || aAboveB || aBelowB);
  }

  function isOverlapping(index, Mush, mushrooms) {
    const minTargetX = Mush.position.x - Mush.box / 2;
    const maxTargetX = Mush.position.x + Mush.box / 2;
    const minTargetZ = Mush.position.z - Mush.box / 2;
    const maxTargetZ = Mush.position.z + Mush.box / 2;
    for (let i = 0; i < index; i++) {
      let minChildX = mushrooms[i].position.x - mushrooms[i].box / 2;
      let maxChildX = mushrooms[i].position.x + mushrooms[i].box / 2;
      let minChildZ = mushrooms[i].position.x - mushrooms[i].box / 2;
      let maxChildZ = mushrooms[i].position.x + mushrooms[i].box / 2;
      if (
        boxIntersects(
          minTargetX,
          minTargetZ,
          maxTargetX,
          maxTargetZ,
          minChildX,
          minChildZ,
          maxChildX,
          maxChildZ
        )
      ) {
        return true;
      }
    }
    return false;
  }

  function newPosition(box, boundary) {
    return (
      boundary / 2 -
      box / 2 -
      ((boundary - box) * Math.round(Math.random() * 100)) / 100
    );
  }

  function updatePosition(MushArr, boundary) {
    MushArr.forEach((Mush, i) => {
      do {
        Mush.position.x = newPosition(Mush.box, boundary);
        Mush.position.z = newPosition(Mush.box, boundary);
      } while (isOverlapping(i, Mush, MushArr));
    });
    setmushrooms(MushArr);
  }

  useEffect(() => {
    const tempMushes = [];
    for (let i = 0; i < count; i++) {
      tempMushes.push({
        position: { x: 0, y: 0 },
        box: 0.5,
      });
      updatePosition(tempMushes, boundary);
    }
  }, [boundary, count]);

  return (
    <group position={props.position}>
      {mushrooms.map((mush, i) => (
        <Detailed
          key={`mushDetail${i}`}
          distances={[0, 25]}
          position={[mush.position.x, 0, mush.position.z]}
          parent={scene}
        >
          <MushType
            key={`mush${i}`}
            id={i}
            pos={[
              mush.position.x + parentPosition[0],
              0,
              mush.position.z + parentPosition[2],
            ]}
          />
          <mesh key={`mushHidden${i}`} />
        </Detailed>
      ))}
    </group>
  );
}
