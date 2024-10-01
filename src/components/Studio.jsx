"use client";
import { useState, useEffect } from "react";
import { Sidebar } from "@/components/Sidebar";
import { SceneChanger } from "@/components/SceneChanger";
import { SceneGallery } from "@/components/SceneGallery";
import { AmbientSounds } from "@/components/AmbientSounds";
import { MusicPlayer } from "@/components/MusicPlayer";
import { Pomodoro } from "@/components/Pomodoro";
import { ThreeDScene } from "@/components/ThreeDScene";

const scenes = [
  { name: "Study Room", modelPath: "/classroom_default.glb" , color: "bg-blue-500" },
  { name: "Library", modelPath: "/duk.glb", color: "bg-yellow-500" },
  { name: "Kitchen", modelPath: "/blendercubo.glb", color: "bg-red-500" },
];

export function Studio() {
  const [activeModal, setActiveModal] = useState("");

  const [currentSceneIndex, setCurrentSceneIndex] = useState(0);
  
  const changeScene = (direction) => {
    setCurrentSceneIndex((prevIndex) => {
      if (direction === "next") {
        return (prevIndex + 1) % scenes.length;
      } else {
        return prevIndex === 0 ? scenes.length - 1 : prevIndex - 1;
      }
    });
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !event.target.closest(".modal") &&
        !event.target.closest(".sidebar-button")
      ) {
        setActiveModal(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative w-full h-screen bg-gray-900">

      {/* 3D Scene */}
      <ThreeDScene
        scenes={scenes}
        currentSceneIndex={currentSceneIndex}
      />

      {/* Sidebar */}
      <Sidebar
        activeModal={activeModal}
        setActiveModal={setActiveModal}
        scenes={scenes}
        currentSceneIndex={currentSceneIndex}
      />
      
      {/* Scene Change Arrows */}
      <SceneChanger changeScene={changeScene} />

      {/* Pomodoro */}
      <Pomodoro 
        color={scenes[currentSceneIndex].color}
        currentSceneIndex={currentSceneIndex}
        activeModal={activeModal}
        scenes={scenes}
      />

      {/* Scene Gallery */}
      <SceneGallery
        activeModal={activeModal}
        scenes={scenes}
        currentSceneIndex={currentSceneIndex}
        setCurrentSceneIndex={setCurrentSceneIndex}
      />

      {/* Ambient Sounds */}
      <AmbientSounds
        activeModal={activeModal}
        currentSceneColor={scenes[currentSceneIndex].color}
      />

      {/* Music Player */}
      <MusicPlayer
        activeModal={activeModal}
        scenes={scenes}
        currentSceneIndex={currentSceneIndex}
      />
    </div>
  );
}
