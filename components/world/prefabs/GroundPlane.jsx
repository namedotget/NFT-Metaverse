import { usePlane } from "@react-three/cannon";
import { useLoader } from "@react-three/fiber";
import { Plane } from "@react-three/drei";
import * as THREE from "three";
export function GroundPlane(props) {
  const [baseMap, dispMap, normMap, roughMap, aOMap] = useLoader(
    THREE.TextureLoader,
    [
      "/images/textures/grass/base.jpg",
      "/images/textures/grass/disp.png",
      "/images/textures/grass/norm.jpg",
      "/images/textures/grass/rough.jpg",
      "/images/textures/grass/ao.jpg",
    ]
  );
  const repeatX = props.args[0] / 3;
  const repeatY = props.args[1] / 3;
  baseMap.wrapS = baseMap.wrapT = THREE.RepeatWrapping;
  baseMap.repeat.set(repeatX, repeatY);
  dispMap.wrapS = dispMap.wrapT = THREE.RepeatWrapping;
  dispMap.repeat.set(repeatX, repeatY);
  normMap.wrapS = normMap.wrapT = THREE.RepeatWrapping;
  normMap.repeat.set(repeatX, repeatY);
  roughMap.wrapS = roughMap.wrapT = THREE.RepeatWrapping;
  roughMap.repeat.set(repeatX, repeatY);
  aOMap.wrapS = aOMap.wrapT = THREE.RepeatWrapping;
  aOMap.repeat.set(repeatX, repeatY);

  const [floorRef] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, 0, 0],
    material: {
      friction: 0.1,
    },
  }));
  return (
    <Plane rotation={[-Math.PI / 2, 0, 0]} args={props.args}>
      <meshStandardMaterial
        attach={"material"}
        color="white"
        map={baseMap}
        normalMap={normMap}
        displacementMap={dispMap}
        displacementScale={0.5}
        roughnessMap={roughMap}
        roughness={0.05}
        aoMap={aOMap}
      />
    </Plane>
  );
}
