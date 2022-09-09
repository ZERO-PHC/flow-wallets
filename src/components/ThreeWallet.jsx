import React, { useRef } from "react";
import { useGLTF, PerspectiveCamera } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF(props.path);
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <group position={[-17.50274277, 7745.72949219, 1.83024216]}>
          <group
            position={[4.50706195, 56.33671272, 10.38306888]}
            rotation={[0, 0.84540615, 0]}
          >
            <mesh
              geometry={nodes.walletgreen_2.geometry}
              material={materials["Aluminum Polished #1"]}
            />
            <mesh
              geometry={nodes.walletgreen_4.geometry}
              material={materials.presilha}
            />
            <mesh
              geometry={nodes.walletgreen_3.geometry}
              material={materials["Glass Basic Black #5"]}
            />
            <mesh
              geometry={nodes.walletgreen_5.geometry}
              material={materials.finoa}
              position={[0.7, 0, 0]}
              scale={[0.9, 1, 1]}
            />
          </group>
        </group>
      </group>
      <PerspectiveCamera
        makeDefault={false}
        far={159.92210388}
        near={128.05561829}
        fov={19.23856735}
        position={[-0.86010452, 78.37266113, 1.29377975]}
        rotation={[0.00342424, -0.56536329, 0.00183426]}
        scale={0.01}
      />
    </group>
  );
}

useGLTF.preload("/wallet_lilico.glb");