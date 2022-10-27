import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Mush6(props) {
  const { nodes, materials } = useGLTF("/mushrooms/shroom_6.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]} scale={3}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r0057.geometry}
          material={materials["Standard_FFFFFF.002"]}
          position={[0.11, -0.03, -0.09]}
          rotation={[1.42, 1.14, -3.06]}
          scale={0.1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r0058.geometry}
          material={materials["Standard_FFFFFF.002"]}
          position={[0.11, -0.03, -0.08]}
          rotation={[1.42, 1.14, -3.06]}
          scale={0.1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r0059.geometry}
          material={materials["Standard_0080FF.001"]}
          position={[0.11, -0.03, -0.09]}
          rotation={[1.42, 1.14, -3.06]}
          scale={0.16}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r0060.geometry}
          material={materials["Standard_FFFFFF.002"]}
          position={[0.11, -0.03, -0.1]}
          rotation={[1.42, 1.14, -3.06]}
          scale={0.1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r0061.geometry}
          material={materials["Standard_FFFFFF.002"]}
          position={[-0.03, -0.13, -0.14]}
          rotation={[1.53, 0.24, 3.12]}
          scale={0.16}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r0062.geometry}
          material={materials["Standard_FFFFFF.002"]}
          position={[-0.03, -0.13, -0.12]}
          rotation={[1.53, 0.24, 3.12]}
          scale={0.16}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r0063.geometry}
          material={materials["Standard_0080FF.001"]}
          position={[-0.03, -0.13, -0.13]}
          rotation={[1.53, 0.24, 3.12]}
          scale={0.26}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r0064.geometry}
          material={materials["Standard_FFFFFF.002"]}
          position={[-0.03, -0.13, -0.16]}
          rotation={[1.53, 0.24, 3.12]}
          scale={0.16}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r0065.geometry}
          material={materials["Standard_FFFFFF.002"]}
          position={[0.06, -0.13, -0.17]}
          rotation={[1.56, 0.68, 3.13]}
          scale={0.21}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r0066.geometry}
          material={materials["Standard_FFFFFF.002"]}
          position={[0.06, -0.13, -0.14]}
          rotation={[1.56, 0.68, 3.13]}
          scale={0.21}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r0067.geometry}
          material={materials["Standard_0080FF.001"]}
          position={[0.06, -0.13, -0.16]}
          rotation={[1.56, 0.68, 3.13]}
          scale={0.35}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r0068.geometry}
          material={materials["Standard_FFFFFF.002"]}
          position={[0.06, -0.13, -0.2]}
          rotation={[1.56, 0.68, 3.13]}
          scale={0.21}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.s0005.geometry}
          material={materials.Standard_6263CA}
          position={[0.04, -0.07, -0.06]}
          rotation={[0, -0.01, 2.29]}
          scale={0.54}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.s0006.geometry}
          material={materials.Standard_6263CA}
          position={[0.06, -0.02, -0.03]}
          rotation={[-0.07, -0.12, 2.95]}
          scale={0.38}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.s0007.geometry}
          material={materials.Standard_6263CA}
          position={[-0.01, -0.07, -0.04]}
          rotation={[-0.07, -0.02, 1.59]}
          scale={0.46}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/mushrooms/shroom_6.glb");
