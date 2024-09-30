// SceneGallery.js
import React from 'react';
import { Button } from "@/components/ui/button";

export const SceneGallery = ({ activeModal, scenes, currentSceneIndex, setCurrentSceneIndex }) => {
  if (activeModal !== "gallery") return null;

  return (
    <div
      className={`modal absolute left-20 top-1/2 transform -translate-y-1/2 ${scenes[currentSceneIndex].color} bg-opacity-90 backdrop-blur-sm p-6 rounded-2xl shadow-lg text-white`}
    >
      <h3 className="text-2xl font-semibold mb-4">Scene Gallery</h3>
      <div className="grid grid-cols-2 gap-4">
        {scenes.map((scene, index) => (
          <Button
            key={scene.name}
            variant="outline"
            className={`h-24 w-full ${
              currentSceneIndex === index
                ? "border-blue-500"
                : "border-gray-600"
            } focus:ring-2 bg-gray-800 bg-opacity-70 backdrop-blur-sm`}
            onClick={() => setCurrentSceneIndex(index)}
          >
            {scene.name}
          </Button>
        ))}
      </div>
    </div>
  );
};