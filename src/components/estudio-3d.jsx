"use client";

import { useState, useRef, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF } from "@react-three/drei";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import {
  Clock,
  Music,
  Image,
  Volume2,
  Play,
  Pause,
  ChevronLeft,
  ChevronRight,
  SkipBack,
} from "lucide-react";

const scenes = [
  { name: "Study Room", path: "/duck.glb" },
  { name: "Nature", path: "/ducky.glb" },
  { name: "Cafe", path: "/duck.glb" },
  { name: "Library", path: "/duk.glb" },
];

function Scene({ scenePath }) {
  const { scene } = useGLTF(scenePath);
  return <primitive object={scene} />;
}
function CameraController() {
  const { camera } = useThree();
  useFrame(() => {
    camera.position.lerp({ x: 0, y: 0, z: 5 }, 0.1);
  });
  return null;
}

export function Estudio_3d() {
  const [activeModal, setActiveModal] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);
  const [pomodoroSettings, setPomodoroSettings] = useState({
    workDuration: 25,
    breakDuration: 5,
    longBreakDuration: 15,
    longBreakInterval: 4,
  });
  const [pomodoroState, setPomodoroState] = useState({
    isActive: false,
    timeLeft: pomodoroSettings.workDuration * 60,
    isBreak: false,
    cyclesCompleted: 0,
  });
  const [currentSceneIndex, setCurrentSceneIndex] = useState(0);
  const [ambientSounds, setAmbientSounds] = useState({
    rain: { volume: 0, audio: "" },
    forest: { volume: 0, audio: "" },
    cafe: { volume: 0, audio: "" },
    ocean: { volume: 0, audio: "" },
  });
  const audioRef = useRef(null);
  const pomodoroIntervalRef = useRef(null);

  const toggleModal = (modalName) => {
    if (activeModal === modalName) {
      setActiveModal('');
    } else {
      setActiveModal(modalName);
    }
  };

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

  const startPomodoro = () => {
    setPomodoroState((prev) => ({
      ...prev,
      isActive: true,
      timeLeft: pomodoroSettings.workDuration * 60,
      isBreak: false,
    }));
    if (pomodoroIntervalRef.current) clearInterval(pomodoroIntervalRef.current);
    pomodoroIntervalRef.current = setInterval(updatePomodoroTime, 1000);
  };

  const updatePomodoroTime = () => {
    setPomodoroState((prev) => {
      if (prev.timeLeft <= 1) {
        const newCyclesCompleted = prev.isBreak
          ? prev.cyclesCompleted
          : prev.cyclesCompleted + 1;
        const isLongBreak =
          newCyclesCompleted % pomodoroSettings.longBreakInterval === 0;
        const newIsBreak = !prev.isBreak;
        const newTimeLeft = newIsBreak
          ? (isLongBreak
              ? pomodoroSettings.longBreakDuration
              : pomodoroSettings.breakDuration) * 60
          : pomodoroSettings.workDuration * 60;

        return {
          ...prev,
          timeLeft: newTimeLeft,
          isBreak: newIsBreak,
          cyclesCompleted: newCyclesCompleted,
        };
      }
      return { ...prev, timeLeft: prev.timeLeft - 1 };
    });
  };

  const resetPomodoro = () => {
    if (pomodoroIntervalRef.current) clearInterval(pomodoroIntervalRef.current);
    setPomodoroState({
      isActive: false,
      timeLeft: pomodoroSettings.workDuration * 60,
      isBreak: false,
      cyclesCompleted: 0,
    });
  };

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

  useEffect(() => {
    return () => {
      if (pomodoroIntervalRef.current)
        clearInterval(pomodoroIntervalRef.current);
      // Object.values(ambientSounds).forEach(sound => sound.audio.pause())
    };
  }, []);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className="relative w-full h-screen bg-gray-900">
      <Canvas>
        <CameraController />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <Scene scenePath={scenes[currentSceneIndex].path} />
        <OrbitControls enableZoom={false} enablePan={false} />
        <Environment preset="sunset" background />
      </Canvas>

      {/* Left Sidebar */}
      <div className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-70 backdrop-blur-sm rounded-2xl p-3">
        <div className="flex flex-col space-y-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => toggleModal("gallery")}
            className="sidebar-button text-gray-200 hover:text-white hover:bg-gray-700 focus:ring-2 focus:ring-white"
          >
            <Image className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => toggleModal("sounds")}
            className="sidebar-button text-gray-200 hover:text-white hover:bg-gray-700 focus:ring-2 focus:ring-white"
          >
            <Volume2 className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => toggleModal("music")}
            className="sidebar-button text-gray-200 hover:text-white hover:bg-gray-700 focus:ring-2 focus:ring-white"
          >
            <Music className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-70 backdrop-blur-sm rounded-2xl p-3">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => toggleModal("pomodoro")}
          className="sidebar-button text-gray-200 hover:text-white hover:bg-gray-700 focus:ring-2 focus:ring-white"
        >
          <Clock className="h-6 w-6" />
        </Button>
      </div>

      {/* Scene Change Arrows */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-16">
        <ChevronLeft
          onClick={() => changeScene("prev")}
          className="h-12 w-12 text-gray-200 cursor-pointer hover:text-white transition-colors"
        />
        <ChevronRight
          onClick={() => changeScene("next")}
          className="h-12 w-12 text-gray-200 cursor-pointer hover:text-white transition-colors"
        />
      </div>

      {/* Pomodoro Timer */}
      {pomodoroState.isActive && (
        <div
          className={`absolute top-6 left-1/2 transform -translate-x-1/2 bg-gray-800 bg-opacity-70 text-white text-4xl font-bold rounded-2xl px-6 py-2 ${
            pomodoroState.isBreak ? "border-green-500" : "border-red-500"
          } border-4`}
        >
          <div className="text-sm font-normal mb-1 text-center">
            {pomodoroState.isBreak ? "Break Time" : "Work Time"}
          </div>
          {formatTime(pomodoroState.timeLeft)}
        </div>
      )}

      {/* Pomodoro Settings */}
      {activeModal === "pomodoro" && (
        <div className="modal absolute right-20 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-90 backdrop-blur-sm p-6 rounded-2xl shadow-lg text-white">
          <h3 className="text-2xl font-semibold mb-4">Pomodoro Settings</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Work Duration: {pomodoroSettings.workDuration} min
              </label>
              <Slider
                value={[pomodoroSettings.workDuration]}
                onValueChange={([value]) =>
                  setPomodoroSettings((prev) => ({
                    ...prev,
                    workDuration: value,
                  }))
                }
                max={60}
                step={1}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Break Duration: {pomodoroSettings.breakDuration} min
              </label>
              <Slider
                value={[pomodoroSettings.breakDuration]}
                onValueChange={([value]) =>
                  setPomodoroSettings((prev) => ({
                    ...prev,
                    breakDuration: value,
                  }))
                }
                max={30}
                step={1}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Long Break Duration: {pomodoroSettings.longBreakDuration} min
              </label>
              <Slider
                value={[pomodoroSettings.longBreakDuration]}
                onValueChange={([value]) =>
                  setPomodoroSettings((prev) => ({
                    ...prev,
                    longBreakDuration: value,
                  }))
                }
                max={45}
                step={1}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Long Break Interval: Every {pomodoroSettings.longBreakInterval}{" "}
                sessions
              </label>
              <Slider
                value={[pomodoroSettings.longBreakInterval]}
                onValueChange={([value]) =>
                  setPomodoroSettings((prev) => ({
                    ...prev,
                    longBreakInterval: value,
                  }))
                }
                max={8}
                step={1}
              />
            </div>
            <div className="flex space-x-2">
              <Button className="flex-1" onClick={startPomodoro}>
                {pomodoroState.isActive ? "Restart" : "Start"} Pomodoro
              </Button>
              <Button className="flex-1" onClick={resetPomodoro}>
                <SkipBack className="h-4 w-4 mr-2" />
                Reset
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Gallery */}
      {activeModal === "gallery" && (
        <div className="modal absolute left-20 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-90 backdrop-blur-sm p-6 rounded-2xl shadow-lg text-white">
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
      )}

      {/* Ambient Sounds */}
      {activeModal === "sounds" && (
        <div className="modal absolute left-20 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-90 backdrop-blur-sm p-6 rounded-2xl shadow-lg text-white">
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
      )}

      {/* Music Player */}
      {activeModal === "music" && (
        <div className="modal absolute left-20 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-90 backdrop-blur-sm p-6 rounded-2xl shadow-lg text-white">
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
      )}
    </div>
  );
}