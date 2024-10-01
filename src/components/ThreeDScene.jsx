"use client";
import { Canvas } from "@react-three/fiber";
import { Environment, CameraControls, Gltf } from "@react-three/drei";

export const ThreeDScene = ({ scenes, currentSceneIndex }) => {
  return (
    <div className="w-full h-screen">
      <Canvas camera={{ position: [0, 0, 0.0001] }}>
        <CameraManager />
        <Environment preset="sunset" />
        <ambientLight intensity={0.8} color="pink" />
        <Gltf
          src={scenes[currentSceneIndex].modelPath}
          position={[0.2, -1.7, -2]}
        />
      </Canvas>
    </div>
  );
};

const CameraManager = () => {
  return (
    <CameraControls
      minZoom={1}
      maxZoom={3}
      polarRotateSpeed={-0.3}
      azimuthRotateSpeed={-0.3}
      // mouseButtons={{
      //   left: 1,
      //   wheel: 16,
      // }}
      touches={{
        one: 31,
        two: 512,
      }}
    />
  );
};