"use client";
import { Leva } from "leva";
import Scene from "./Scene";
import { Scene1 } from "./scenes/Scene1";
import Sidebar from "./Sidebar";
import { Image, Volume2, Music, Clock } from "lucide-react";

export const leftButtons = [
  {
    icon: Image,
    modal: "gallery",
    label: "Galería",
  },
  {
    icon: Volume2,
    modal: "sounds",
    label: "Sonidos",
  },
  {
    icon: Music,
    modal: "music",
    label: "Música",
  },
];

export const rightButtons = [
  {
    icon: Clock,
    modal: "pomodoro",
    label: "Pomodoro",
  },
];


export default function StudyRoom() {
  const scenes = [
    {
      name: "Study Room",
      component: (
        <Scene1 position-z={-1} position-x={-1.4} position-y={-3} />
      ),
      color: "bg-red-500",
    },
    { name: "Library", component: "/duk.glb", color: "bg-yellow-500" },
  ];

  return (
    <div className="h-screen w-screen relative">
      <Leva hidden />
      <Sidebar side='left' buttons={leftButtons} />      
      <Sidebar side='right' buttons={rightButtons} />      
      <div className="w-full h-screen">
        <Scene scenes={scenes} />
      </div>
    </div>
  );
}
