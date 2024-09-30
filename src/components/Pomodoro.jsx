import { useState, useEffect, useRef } from "react";
import { PomodoroTimer } from "@/components/PomodoroTimer";
import { PomodoroSettings } from "@/components/PomodoroSettings";
export const Pomodoro = ({ color, currentSceneIndex, activeModal, scenes }) => {
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

  const pomodoroIntervalRef = useRef(null); 

  useEffect(() => {
    return () => {
      if (pomodoroIntervalRef.current)
        clearInterval(pomodoroIntervalRef.current);
      // Object.values(ambientSounds).forEach(sound => sound.audio.pause())
    };
  }, []);

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

  const resetPomodoro = () => {
    if (pomodoroIntervalRef.current) clearInterval(pomodoroIntervalRef.current);
    setPomodoroState({
      isActive: false,
      timeLeft: pomodoroSettings.workDuration * 60,
      isBreak: false,
      cyclesCompleted: 0,
    });
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

  return (
    <>
     {/* Pomodoro Timer */}
      <PomodoroTimer
        isActive={pomodoroState.isActive}
        isBreak={pomodoroState.isBreak}
        timeLeft={pomodoroState.timeLeft}
        color={color}
      />

      {/* Pomodoro Settings */}
      <PomodoroSettings
        pomodoroState={pomodoroState}
        pomodoroSettings={pomodoroSettings}
        setPomodoroSettings={setPomodoroSettings}
        startPomodoro={startPomodoro}
        resetPomodoro={resetPomodoro}
        activeModal={activeModal}
        scenes={scenes}
        currentSceneIndex={currentSceneIndex}
      />
    </>
  );
};