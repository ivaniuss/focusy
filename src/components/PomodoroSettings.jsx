// PomodoroSettings.js
import React from 'react';
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { SkipBack } from "lucide-react"

export const PomodoroSettings = ({
  pomodoroState,
  pomodoroSettings,
  setPomodoroSettings,
  startPomodoro,
  resetPomodoro,
  activeModal,
  scenes,
  currentSceneIndex,
}) => {
  if (activeModal !== 'pomodoro') return null;

  return (
    <div
      className={`modal absolute right-20 top-1/2 transform -translate-y-1/2 ${scenes[currentSceneIndex].color} bg-opacity-90 backdrop-blur-sm p-6 rounded-2xl shadow-lg text-white`}
    >
      <h3 className="text-2xl font-semibold mb-4">Pomodoro Settings</h3>
      <div className="space-y-4">
        <SettingSlider
          label="Work Duration"
          value={pomodoroSettings.workDuration}
          setValue={(value) =>
            setPomodoroSettings((prev) => ({
              ...prev,
              workDuration: value,
            }))
          }
          max={60}
        />
        <SettingSlider
          label="Break Duration"
          value={pomodoroSettings.breakDuration}
          setValue={(value) =>
            setPomodoroSettings((prev) => ({
              ...prev,
              breakDuration: value,
            }))
          }
          max={30}
        />
        <SettingSlider
          label="Long Break Duration"
          value={pomodoroSettings.longBreakDuration}
          setValue={(value) =>
            setPomodoroSettings((prev) => ({
              ...prev,
              longBreakDuration: value,
            }))
          }
          max={45}
        />
        <SettingSlider
          label="Long Break Interval"
          value={pomodoroSettings.longBreakInterval}
          setValue={(value) =>
            setPomodoroSettings((prev) => ({
              ...prev,
              longBreakInterval: value,
            }))
          }
          max={8}
        />
        <div className="flex space-x-2">
          <Button className="flex-1" onClick={startPomodoro}>
            {pomodoroState.isActive ? 'Restart' : 'Start'} Pomodoro
          </Button>
          <Button className="flex-1" onClick={resetPomodoro}>
            <SkipBack className="h-4 w-4 mr-2" />
            Reset
          </Button>
        </div>
      </div>
    </div>
  );
};

const SettingSlider = ({ label, value, setValue, max }) => (
  <div>
    <label className="block text-sm font-medium mb-1">
      {label}: {value} min
    </label>
    <Slider
      value={[value]}
      onValueChange={([newValue]) => setValue(newValue)}
      max={max}
      step={1}
    />
  </div>
);
