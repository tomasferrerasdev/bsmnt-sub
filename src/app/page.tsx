"use client";

import { KeyboardControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Ecctrl from "ecctrl";
import { Physics } from "@react-three/rapier";
import { EffectComposer, Pixelation } from "@react-three/postprocessing";
import { RectAreaLightUniformsLib } from "three/examples/jsm/Addons.js";
import { Sub } from "@/components/Sub";
import { Teodoro } from "@/components/Teodoro";
import { Legs } from "@/components/Legs";

const keyboardMap = [
  { name: "forward", keys: ["ArrowUp", "KeyW"] },
  { name: "backward", keys: ["ArrowDown", "KeyS"] },
  { name: "leftward", keys: ["ArrowLeft", "KeyA"] },
  { name: "rightward", keys: ["ArrowRight", "KeyD"] },
  { name: "jump", keys: ["Space"] },
  { name: "run", keys: ["Shift"] },
];
RectAreaLightUniformsLib.init();

export default function Home() {
  return (
    <main className="h-screen w-full">
      <Canvas>
        <Physics>
          <Sub />
          <KeyboardControls map={keyboardMap}>
            <Ecctrl
              position={[0, 4, 0]}
              animated
              followLight
              springK={0.1}
              dampingC={0.1}
              maxVelLimit={1.6}
              autoBalanceSpringK={0.3}
              autoBalanceDampingC={0.03}
              autoBalanceSpringOnY={0.3}
              autoBalanceDampingOnY={0.03}
            >
              <Legs />
            </Ecctrl>
          </KeyboardControls>
        </Physics>
        <ambientLight color={"#B3DEB2"} intensity={0.01} />

        <rectAreaLight
          color="#FFA500"
          intensity={0.3}
          rotation={[0, -1.6, 0]}
          position={[2, 2, -10]}
          width={40}
          height={3}
        />

        <pointLight color="orange" position={[-0.5, 1.7, -2.5]} intensity={5} />
        <pointLight color="white" position={[2.9, 4, -38]} intensity={0.7} />
        <pointLight color="white" position={[2.9, 4, -30]} intensity={0.7} />
        <pointLight color="white" position={[2.9, 4, -4]} intensity={0.7} />
        <pointLight color="white" position={[2.9, 4, -0]} intensity={0.7} />
        <pointLight color="white" position={[2.9, 4, 4]} intensity={0.7} />
        <pointLight color="white" position={[2.9, 4, 8]} intensity={0.7} />
        {/* <EffectComposer>
          <Pixelation granularity={4} />
        </EffectComposer> */}
      </Canvas>
    </main>
  );
}
