"use client";
import { Canvas } from "@react-three/fiber";
// import { CameraControls, Gltf } from "@react-three/drei";
// import { CameraControls } from "@react-three/drei";
import { Cubohueco2 } from "@/components/Cubohueco2";
import { OrbitControls } from "@react-three/drei";

// export const ThreeDScene = ({ scenes, currentSceneIndex }) => {
export const ThreeDScene = () => {
  return (
    <div className="w-full h-screen">
      <Canvas camera={{ position: [0, 0, 0.0001] }}>
      <mesh>
      <Cubohueco2 position={[0.2, -1.7, -2]} />
      <OrbitControls />
      </mesh>
      </Canvas>
    </div>
  );
};

// const CameraManager = () => {
//   return (
//     <CameraControls
//       minZoom={1}
//       maxZoom={3}
//       polarRotateSpeed={-0.3}
//       azimuthRotateSpeed={-0.3}
//       mouseButtons={{
//         left: 1,
//         wheel: 16,
//       }}
//       touches={{
//         one: 31,
//         two: 512,
//       }}
//     />
//   );
// };