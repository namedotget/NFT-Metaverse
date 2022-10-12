import { Detailed } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useEffect, useState } from "react";
import { Tree } from "./Tree";
import { Raycaster } from "three/src/core/Raycaster";
import { useBox } from "@react-three/cannon";

export function Trees(props) {
  const { count, boundary } = props;
  const [trees, setTrees] = useState([]);
  const { camera, scene } = useThree();

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

  function isOverlapping(index, tree, trees) {
    const minTargetX = tree.position.x - tree.box / 2;
    const maxTargetX = tree.position.x + tree.box / 2;
    const minTargetZ = tree.position.z - tree.box / 2;
    const maxTargetZ = tree.position.z + tree.box / 2;
    for (let i = 0; i < index; i++) {
      let minChildX = trees[i].position.x - trees[i].box / 2;
      let maxChildX = trees[i].position.x + trees[i].box / 2;
      let minChildZ = trees[i].position.x - trees[i].box / 2;
      let maxChildZ = trees[i].position.x + trees[i].box / 2;
      if (
        boxIntersects(
          minTargetX,
          minTargetZ,
          maxTargetX,
          maxTargetX,
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

  function updatePosition(treeArr, boundary) {
    treeArr.forEach((tree, i) => {
      do {
        tree.position.x = newPosition(tree.box, boundary);
        tree.position.z = newPosition(tree.box, boundary);
      } while (isOverlapping(i, tree, treeArr));
    });
    setTrees(treeArr);
  }

  useEffect(() => {
    const tempTrees = [];
    for (let i = 0; i < count; i++) {
      tempTrees.push({
        position: { x: 0, y: 0 },
        box: 0.5,
      });
      updatePosition(tempTrees, boundary);
    }
  }, [boundary, count]);

  return (
    <group>
      {trees.map((tree, i) => (
        <Detailed
          key={i}
          distances={[0, 50, 60]}
          position={[tree.position.x, 0, tree.position.z]}
          parent={scene}
          {...props}
        >
          <Tree position={[tree.position.x, 0, tree.position.z]} />
          <mesh>
            <boxGeometry args={[1, 8, 1]} />
            <meshLambertMaterial color={"green"} />
          </mesh>
          <mesh />
        </Detailed>
      ))}
    </group>
  );
}
