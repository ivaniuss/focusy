'use client';
import { Canvas } from "@react-three/fiber";
import { CameraControls } from "@react-three/drei";
import { button, useControls } from "leva";
import { useRef } from "react";

export default function Scene({ scenes }) {
  return (    
    <Canvas
        camera={{
          position: [0.00008582791916069393, 0.000029426162465590862, -0.00004204365891658383],
        }}
      >
      {scenes[0].component}
      <CameraManager />
    </Canvas>
  );
}

const CameraManager = () => {
  const controls = useRef(null);
  useControls("Helper", {
    getCameraPosition: button(() => {
      const position = controls.current.getPosition();
      const zoom = controls.current.camera.zoom;
      console.log([...position], zoom);
    }),
  });

  return (
    <CameraControls
      ref={controls}
      minZoom={1}
      maxZoom={3}
      polarRotateSpeed={-0.3} // REVERSE FOR NATURAL EFFECT
      azimuthRotateSpeed={-0.3} // REVERSE FOR NATURAL EFFECT
      mouseButtons={{
        left: 1, //ACTION.ROTATE
        wheel: 16, //ACTION.ZOOM
      }}
      touches={{
        one: 32, //ACTION.TOUCH_ROTATE
        two: 512, //ACTION.TOUCH_ZOOM
      }}
    />
  )
}