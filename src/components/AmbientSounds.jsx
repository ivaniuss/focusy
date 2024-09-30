'use client';
import { useState } from 'react';
import { Slider } from "@/components/ui/slider";

export const AmbientSounds = ({ activeModal, currentSceneColor }) => {
  const [ambientSounds, setAmbientSounds] = useState({
    rain: { volume: 0, audio: "" },
    forest: { volume: 0, audio: "" },
    cafe: { volume: 0, audio: "" },
    ocean: { volume: 0, audio: "" },
  });
  
  if (activeModal !== "sounds") return null;
  
  const handleAmbientSoundVolume = (sound, volume) => {
    setAmbientSounds((prev) => {
      const newSounds = { ...prev };
      newSounds[sound].volume = volume;
      // newSounds[sound].audio.volume = volume / 100
      if (volume > 0 && newSounds[sound].audio.paused) {
        newSounds[sound].audio.play();
      } else if (volume === 0 && !newSounds[sound].audio.paused) {
        newSounds[sound].audio.pause();
      }
      return newSounds;
    });
  };

  return (
    <div className={`modal absolute left-20 top-1/2 transform -translate-y-1/2 ${currentSceneColor} bg-opacity-90 backdrop-blur-sm p-6 rounded-2xl shadow-lg text-white`}>
      <h3 className="text-2xl font-semibold mb-4">Ambient Sounds</h3>
      <div className="space-y-4">
        {Object.entries(ambientSounds).map(([sound, { volume }]) => (
          <div key={sound} className="flex items-center justify-between">
            <span className="capitalize text-lg">{sound}</span>
            <Slider
              value={[volume]}
              onValueChange={([newVolume]) =>
                handleAmbientSoundVolume(sound, newVolume)
              }
              max={100}
              step={1}
              className="w-48"
            />
          </div>
        ))}
      </div>
    </div>
  );
};