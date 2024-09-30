'use client';
import React, { useRef, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import {
  Play,
  Pause,
} from "lucide-react";
export const MusicPlayer = ({ activeModal, scenes, currentSceneIndex }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  if (activeModal !== "music") return null;

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className={`modal absolute left-20 top-1/2 transform -translate-y-1/2 ${scenes[currentSceneIndex].color} bg-opacity-90 backdrop-blur-sm p-6 rounded-2xl shadow-lg text-white`}>
      <h3 className="text-2xl font-semibold mb-4">Music Player</h3>
      <div className="space-y-4">
        <audio ref={audioRef} src="/path-to-your-audio-file.mp3" />
        <Button
          variant="outline"
          className="w-full focus:ring-2 bg-gray-800 bg-opacity-70 backdrop-blur-sm"
          onClick={togglePlayPause}
        >
          {isPlaying ? (
            <Pause className="h-4 w-4 mr-2" />
          ) : (
            <Play className="h-4 w-4 mr-2" />
          )}
          {isPlaying ? "Pause" : "Play"}
        </Button>
        <Slider defaultValue={[50]} max={100} step={1} />
      </div>
    </div>
  );
};