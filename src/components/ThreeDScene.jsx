import { Suspense } from 'react'
import { Canvas } from "@react-three/fiber";
import { Environment, CameraControls, PerspectiveCamera } from "@react-three/drei";
// import { Level, Sudo, Camera, Cactus, Box } from './Scene'
import { Level } from './Scene'

export const ThreeDScene = ({ scenes, currentSceneIndex }) => {
  return (
    <Canvas flat>
      <Suspense fallback={null}>
        <CameraControls minPolarAngle={0} maxPolarAngle={Math.PI / 1.6} />
        <ambientLight intensity={Math.PI / 2} />
        <mesh scale={4} position={[-1, -4, 5]} rotation={[0, -0.95, 0]}>
          <Level modelPath = {scenes[currentSceneIndex].modelPath} />          
          <meshStandardMaterial color="lightgray" />
        </mesh>
        <Environment preset="city" background blur={1} />
        <PerspectiveCamera makeDefault position={[0, 0, 18.5]} />
      </Suspense>
    </Canvas>
  );
};