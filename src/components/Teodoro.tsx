import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { CapsuleCollider } from "@react-three/rapier";
import { useEffect, useState, Suspense } from "react";

import * as THREE from "three";

export const Teodoro = () => {
  const group = useRef<any>();
  const { nodes, materials, animations }: any = useGLTF("/models/teodoro.glb");
  const { actions } = useAnimations(animations, group);
  const [isShiftPressed, setIsShiftPressed] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Shift") {
        setIsShiftPressed(true);
      }
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      if (event.key === "Shift") {
        setIsShiftPressed(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  useEffect(() => {
    if (actions["Common-Walking"]) {
      actions["Common-Walking"].play();
      actions["Common-Walking"].timeScale = isShiftPressed ? 1.3 : 1;
    }
  }, [actions, isShiftPressed]);

  const glassMaterial = new THREE.MeshPhysicalMaterial({
    color: 0xffffff,
    metalness: 0.8,
    roughness: 0.05,
    transmission: 1.0,
    opacity: 0.25,
    transparent: true,
    clearcoat: 1.0,
    clearcoatRoughness: 0.5,
  });

  return (
    <Suspense fallback={<capsuleGeometry args={[0.3, 0.7]} />}>
      <CapsuleCollider args={[0.3, 0.4]} />
      <group ref={group} dispose={null} position={[0, -0.9, 0]}>
        <group name="Scene">
          <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.013}>
            <primitive object={nodes.mixamorigHips} />
          </group>
          <group name="Pokedex" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <skinnedMesh
              name="Cube"
              geometry={nodes.Cube.geometry}
              material={materials.PaletteMaterial001}
              skeleton={nodes.Cube.skeleton}
            />
            <skinnedMesh
              name="Cube_1"
              geometry={nodes.Cube_1.geometry}
              material={materials.PaletteMaterial001}
              skeleton={nodes.Cube_1.skeleton}
            />
          </group>
          <group name="Teodoro" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <skinnedMesh
              name="Teodoro001"
              geometry={nodes.Teodoro001.geometry}
              material={materials.PaletteMaterial002}
              skeleton={nodes.Teodoro001.skeleton}
            />
            <skinnedMesh
              name="Teodoro001_1"
              geometry={nodes.Teodoro001_1.geometry}
              material={materials.PaletteMaterial003}
              skeleton={nodes.Teodoro001_1.skeleton}
            />
            <skinnedMesh
              name="Teodoro001_2"
              geometry={nodes.Teodoro001_2.geometry}
              material={materials.PaletteMaterial004}
              skeleton={nodes.Teodoro001_2.skeleton}
            />
            <skinnedMesh
              name="Teodoro001_3"
              geometry={nodes.Teodoro001_3.geometry}
              material={materials.BODY}
              skeleton={nodes.Teodoro001_3.skeleton}
            />
            <skinnedMesh
              name="Teodoro001_4"
              geometry={nodes.Teodoro001_4.geometry}
              material={materials.SKIN}
              skeleton={nodes.Teodoro001_4.skeleton}
            />
            <skinnedMesh
              name="Teodoro001_5"
              geometry={nodes.Teodoro001_5.geometry}
              material={materials.PaletteMaterial005}
              skeleton={nodes.Teodoro001_5.skeleton}
            />
            <skinnedMesh
              name="Teodoro001_6"
              geometry={nodes.Teodoro001_6.geometry}
              material={glassMaterial}
              skeleton={nodes.Teodoro001_6.skeleton}
            />
          </group>
        </group>
      </group>
    </Suspense>
  );
};

useGLTF.preload("/models/teodoro.glb");
