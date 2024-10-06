"use client";
import { Canvas } from "@react-three/fiber";
import { CameraControls, Gltf } from "@react-three/drei";
import { Cubohueco2 } from "@/components/Cubohueco2";

export const ThreeDScene = ({ scenes, currentSceneIndex }) => {
  return (
    <div className="w-full h-screen">
      <Canvas camera={{ position: [0, 0, 0.0001] }}>
        <CameraManager />
        <ambientLight intensity={1.5} />
        <Cubohueco2 position={[0.2, -1.7, -2]} />
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
      mouseButtons={{
        left: 1,
        wheel: 16,
      }}
      touches={{
        one: 31,
        two: 512,
      }}
    />
  );
};