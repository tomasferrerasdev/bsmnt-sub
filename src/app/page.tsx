"use client";

import { Sub } from "@/components/Sub";
import { KeyboardControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Ecctrl from "ecctrl";
import { Physics } from "@react-three/rapier";
import { Teodoro } from "@/components/Teodoro";
import { EffectComposer, Pixelation } from "@react-three/postprocessing";
import { RectAreaLightUniformsLib } from "three/examples/jsm/Addons.js";

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
              springK={2}
              dampingC={0.2}
              maxVelLimit={2}
              autoBalanceSpringK={1}
              autoBalanceDampingC={0.04}
              autoBalanceSpringOnY={0.3}
              autoBalanceDampingOnY={0.05}
            >
              <Teodoro />
            </Ecctrl>
          </KeyboardControls>
        </Physics>
        <ambientLight color={"#B3DEB2"} intensity={0.02} />

        <rectAreaLight
          color="#FFA500"
          intensity={0.3}
          rotation={[0, -1.6, 0]}
          position={[2, 2, -10]}
          width={40}
          height={3}
        />

        <pointLight color="orange" position={[-0.5, 1.7, -2.5]} intensity={8} />
        <pointLight color="white" position={[2.9, 4, -38]} intensity={1.7} />
        <pointLight color="white" position={[2.9, 4, -30]} intensity={1.7} />
        <pointLight color="white" position={[2.9, 4, -4]} intensity={1.7} />
        <pointLight color="white" position={[2.9, 4, -0]} intensity={1.7} />
        <pointLight color="white" position={[2.9, 4, 4]} intensity={1.7} />
        <pointLight color="white" position={[2.9, 4, 8]} intensity={1.7} />
        <EffectComposer>
          <Pixelation granularity={5} />
        </EffectComposer>
      </Canvas>
    </main>
  );
}
