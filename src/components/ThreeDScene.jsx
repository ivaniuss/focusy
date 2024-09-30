import { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Environment,
  CameraControls,
  PerspectiveCamera,
  OrbitControls,
} from "@react-three/drei";
import * as THREE from "three";
import { Room } from "./Room";

// import { Level, Sudo, Camera, Cactus, Box } from './Scene'
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

// <Canvas flat>
//       <Suspense fallback={null}>
//         <CameraControls minPolarAngle={0} maxPolarAngle={Math.PI / 1.6} />
//         <ambientLight intensity={Math.PI / 2} />
//         <mesh scale={4} position={[-1, -4, 7]} rotation={[0, -0.95, 0]}>
//         <Level modelPath = {scenes[currentSceneIndex].modelPath} />
//         <meshStandardMaterial color="lightgray" side={THREE.BackSide} />
//         </mesh>
//         <Environment preset="city" background blur={1} />
//         <PerspectiveCamera
//           makeDefault
//           position={[0, 0, 5]}
//           fov={20}
//         />
//       </Suspense>
//     </Canvas>
