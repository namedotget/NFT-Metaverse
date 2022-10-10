import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { Detailed } from "@react-three/drei";
import { useBox } from "@react-three/cannon";
export function Tree(props) {
  const [cubeRef] = useBox((props) => ({
    mass: 1,
    args: [1, 4, 1],
    material: {
      friction: 1,
      restitution: 0,
    },
    type: "static",
    ...props,
  }));
  const { nodes, materials } = useGLTF("/hill_top_tree.glb");
  return (
    <group {...props} dispose={null} scale={0.01} ref={cubeRef}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group
            position={[49.55, 414.03, 54.94]}
            rotation={[-Math.PI / 2, -0.7, 0]}
            scale={[0.59, 0.59, 0.56]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Branch_Small_A019_14_-_Bark_0"].geometry}
              material={materials["14_-_Bark"]}
            />
          </group>
          <group
            position={[77.04, 383.45, 47.17]}
            rotation={[-Math.PI / 2, 0.17, -3.05]}
            scale={[0.59, 0.59, 0.56]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Branch_Small_A020_14_-_Bark_0"].geometry}
              material={materials["14_-_Bark"]}
            />
          </group>
          <group
            position={[169.57, 240.96, 2.59]}
            rotation={[-Math.PI / 2, 0, 0]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Canopy_1_15_-_Default_0"].geometry}
              material={materials["15_-_Default"]}
            />
          </group>
          <group position={[-3, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Spline_Branch_E001_14_-_Bark_0"].geometry}
              material={materials["14_-_Bark"]}
            />
          </group>
          <group position={[-3, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Spline_Branch_A001_14_-_Bark_0"].geometry}
              material={materials["14_-_Bark"]}
            />
          </group>
          <group position={[-3, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Spline_Branch_C001_14_-_Bark_0"].geometry}
              material={materials["14_-_Bark"]}
            />
          </group>
          <group position={[-3, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Spline_Branch_D001_14_-_Bark_0"].geometry}
              material={materials["14_-_Bark"]}
            />
          </group>
          <group
            position={[162.28, 285.76, -108.46]}
            rotation={[-2.61, -0.15, -1.48]}
            scale={[0.59, 0.59, 0.56]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Branch_Small_A040_14_-_Bark_0"].geometry}
              material={materials["14_-_Bark"]}
            />
          </group>
          <group
            position={[183.84, 291.36, -145.36]}
            rotation={[-1.83, 0.19, 0.71]}
            scale={[0.59, 0.59, 0.56]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Branch_Small_A041_14_-_Bark_0"].geometry}
              material={materials["14_-_Bark"]}
            />
          </group>
          <group
            position={[173.17, 289.37, -129.16]}
            rotation={[-2.6, 1.41, 3]}
            scale={[0.59, 0.59, 0.56]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Branch_Small_A042_14_-_Bark_0"].geometry}
              material={materials["14_-_Bark"]}
            />
          </group>
          <group
            position={[154.45, 273.44, -86.08]}
            rotation={[-1, 1.01, 0.89]}
            scale={[0.59, 0.59, 0.56]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Branch_Small_A043_14_-_Bark_0"].geometry}
              material={materials["14_-_Bark"]}
            />
          </group>
          <group
            position={[159.57, 281.04, -100.41]}
            rotation={[-1.73, 0.15, 1.09]}
            scale={[0.59, 0.59, 0.56]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Branch_Small_A044_14_-_Bark_0"].geometry}
              material={materials["14_-_Bark"]}
            />
          </group>
          <group
            position={[149.2, 263.43, -64.45]}
            rotation={[2.99, 0.13, 0.07]}
            scale={[0.59, 0.59, 0.56]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Branch_Small_A045_14_-_Bark_0"].geometry}
              material={materials["14_-_Bark"]}
            />
          </group>
          <group
            position={[144.44, 255.77, -58.8]}
            rotation={[-1.41, -0.27, 1.28]}
            scale={[0.59, 0.59, 0.56]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Branch_Small_A046_14_-_Bark_0"].geometry}
              material={materials["14_-_Bark"]}
            />
          </group>
          <group
            position={[137, 250.63, -52.89]}
            rotation={[2.89, 1, -1.35]}
            scale={[0.59, 0.59, 0.56]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Branch_Small_A047_14_-_Bark_0"].geometry}
              material={materials["14_-_Bark"]}
            />
          </group>
          <group
            position={[131.57, 243.19, -47.77]}
            rotation={[-1.27, 0.42, 1.24]}
            scale={[0.59, 0.59, 0.56]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Branch_Small_A048_14_-_Bark_0"].geometry}
              material={materials["14_-_Bark"]}
            />
          </group>
          <group
            position={[115.49, 225.95, -30.3]}
            rotation={[-2.27, -0.15, -0.18]}
            scale={[0.59, 0.59, 0.56]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Branch_Small_A049_14_-_Bark_0"].geometry}
              material={materials["14_-_Bark"]}
            />
          </group>
          <group
            position={[-8.36, 322.71, -71.92]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[0.59, 0.59, 0.56]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Branch_Small_A050_14_-_Bark_0"].geometry}
              material={materials["14_-_Bark"]}
            />
          </group>
          <group
            position={[-10.5, 332.19, -77.77]}
            rotation={[-Math.PI / 2, -Math.PI / 6, 0]}
            scale={[0.59, 0.59, 0.56]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Branch_Small_A051_14_-_Bark_0"].geometry}
              material={materials["14_-_Bark"]}
            />
          </group>
          <group
            position={[-10.57, 332.58, -77.07]}
            rotation={[-2.58, -0.5, -1.2]}
            scale={[0.59, 0.59, 0.56]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Branch_Small_A052_14_-_Bark_0"].geometry}
              material={materials["14_-_Bark"]}
            />
          </group>
          <group
            position={[6.44, 272.63, -54.63]}
            rotation={[-2.29, -1.03, -1.68]}
            scale={[0.59, 0.59, 0.56]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Branch_Small_A053_14_-_Bark_0"].geometry}
              material={materials["14_-_Bark"]}
            />
          </group>
          <group
            position={[8.06, 263.23, -55.77]}
            rotation={[-0.91, -0.26, -1.84]}
            scale={[0.59, 0.59, 0.56]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Branch_Small_A054_14_-_Bark_0"].geometry}
              material={materials["14_-_Bark"]}
            />
          </group>
          <group
            position={[29.2, 221.18, -42.48]}
            rotation={[-2.27, 0.02, 1.52]}
            scale={[0.59, 0.59, 0.56]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Branch_Small_A055_14_-_Bark_0"].geometry}
              material={materials["14_-_Bark"]}
            />
          </group>
          <group
            position={[25.08, 229.01, -45.68]}
            rotation={[-3.02, -0.58, 1.37]}
            scale={[0.59, 0.59, 0.56]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Branch_Small_A056_14_-_Bark_0"].geometry}
              material={materials["14_-_Bark"]}
            />
          </group>
          <group
            position={[83.53, 302.34, 43.72]}
            rotation={[-0.68, 0.22, -2.7]}
            scale={[0.59, 0.59, 0.56]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Branch_Small_A060_14_-_Bark_0"].geometry}
              material={materials["14_-_Bark"]}
            />
          </group>
          <group
            position={[73.4, 268.23, 33.5]}
            rotation={[-1.55, 0.54, 3.08]}
            scale={[0.59, 0.59, 0.56]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Branch_Small_A061_14_-_Bark_0"].geometry}
              material={materials["14_-_Bark"]}
            />
          </group>
          <group
            position={[59.26, 233.65, 32]}
            rotation={[-0.57, 0.62, 3.07]}
            scale={[0.59, 0.59, 0.56]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Branch_Small_A062_14_-_Bark_0"].geometry}
              material={materials["14_-_Bark"]}
            />
          </group>
          <group
            position={[72.05, 262.18, 33.11]}
            rotation={[-0.98, -0.54, 2.28]}
            scale={[0.59, 0.59, 0.56]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Branch_Small_A063_14_-_Bark_0"].geometry}
              material={materials["14_-_Bark"]}
            />
          </group>
          <group
            position={[177.52, 312.44, 70.57]}
            rotation={[-1.28, 0.2, 2.15]}
            scale={[0.59, 0.59, 0.56]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Branch_Small_A064_14_-_Bark_0"].geometry}
              material={materials["14_-_Bark"]}
            />
          </group>
          <group
            position={[177.04, 312.81, 70.09]}
            rotation={[-0.55, 0.43, 0.91]}
            scale={[0.59, 0.59, 0.56]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Branch_Small_A065_14_-_Bark_0"].geometry}
              material={materials["14_-_Bark"]}
            />
          </group>
          <group
            position={[135.19, 258.99, 23.74]}
            rotation={[-1.44, 0.81, 0.28]}
            scale={[0.59, 0.59, 0.56]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Branch_Small_A066_14_-_Bark_0"].geometry}
              material={materials["14_-_Bark"]}
            />
          </group>
          <group
            position={[117.04, 228.22, 4.69]}
            rotation={[-1.69, 1.33, 0.66]}
            scale={[0.59, 0.59, 0.56]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Branch_Small_A067_14_-_Bark_0"].geometry}
              material={materials["14_-_Bark"]}
            />
          </group>
          <group
            position={[38.3, 203.5, -37.22]}
            rotation={[-0.78, -0.55, 2.54]}
            scale={[0.59, 0.59, 0.56]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Branch_Small_A068_14_-_Bark_0"].geometry}
              material={materials["14_-_Bark"]}
            />
          </group>
          <group
            position={[59.38, 206.43, 21.28]}
            rotation={[-1.84, 0.07, -0.07]}
            scale={[0.59, 0.59, 0.56]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Branch_Small_A069_14_-_Bark_0"].geometry}
              material={materials["14_-_Bark"]}
            />
          </group>
          <group
            position={[157.07, 343.96, 0.97]}
            rotation={[-2.82, -0.58, -1.31]}
            scale={[0.59, 0.59, 0.56]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Branch_Small_A070_14_-_Bark_0"].geometry}
              material={materials["14_-_Bark"]}
            />
          </group>
          <group
            position={[156.54, 343.31, 0.32]}
            rotation={[-1.89, -0.14, -0.95]}
            scale={[0.59, 0.59, 0.56]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Branch_Small_A071_14_-_Bark_0"].geometry}
              material={materials["14_-_Bark"]}
            />
          </group>
          <group
            position={[155.75, 318.92, 0.02]}
            rotation={[-1.91, 0.78, -1.83]}
            scale={[0.59, 0.59, 0.56]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Branch_Small_A072_14_-_Bark_0"].geometry}
              material={materials["14_-_Bark"]}
            />
          </group>
          <group position={[-2.25, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Spline_Branch_B001_14_-_Bark_0"].geometry}
              material={materials["14_-_Bark"]}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/hill_top_tree.glb");
