import { usePlane } from "@react-three/cannon";
import { useLoader } from "@react-three/fiber";
import * as THREE from "three";
export function GroundPlane() {
  const [diffMap, dispMap, normMap, roughMap] = useLoader(THREE.TextureLoader, [
    "/diff.jpg",
    "/disp.png",
    "/norm.png",
    "/rough.jpg",
  ]);
  const repeatX = 4;
  const repeatY = 2;
  diffMap.wrapS = diffMap.wrapT = THREE.RepeatWrapping;
  diffMap.repeat.set(repeatX, repeatY);
  dispMap.wrapS = diffMap.wrapT = THREE.RepeatWrapping;
  dispMap.repeat.set(repeatX, repeatY);
  normMap.wrapS = normMap.wrapT = THREE.RepeatWrapping;
  normMap.repeat.set(repeatX, repeatY);
  roughMap.wrapS = roughMap.wrapT = THREE.RepeatWrapping;
  roughMap.repeat.set(repeatX, repeatY);

  const [floorRef] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, 0, 0],
    material: {
      friction: 0.1,
    },
  }));
  return (
    <mesh ref={floorRef} receiveShadow>
      <planeGeometry args={[500, 500]} />
      <meshLambertMaterial color={"green"} />
    </mesh>
  );
}
