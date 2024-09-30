import { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Environment,
  PerspectiveCamera,
  OrbitControls,
} from "@react-three/drei";

import { Level } from "./Scene";

export const ThreeDScene = ({ scenes, currentSceneIndex }) => {
  const controlsRef = useRef()
  return (
    <div className="w-full h-screen">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 0]} />
        <OrbitControls
          ref={controlsRef}
          target={[0, 0, -0.1]}
          
          enablePan={false}
          minPolarAngle={Math.PI / 6}
          maxPolarAngle={Math.PI * 5 / 6}
          rotateSpeed={0.5}
        />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Level modelPath = {scenes[currentSceneIndex].modelPath} />
        <Environment preset="city" background blur={1} />
      </Canvas>
    </div>
  );
};