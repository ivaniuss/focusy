// PomodoroTimer.js
import React from 'react';

export const PomodoroTimer = ({ isActive, isBreak, timeLeft, color }) => {
  if (!isActive) return null;

  return (
    <div
      className={`absolute top-6 left-1/2 transform -translate-x-1/2 ${color} bg-opacity-70 text-white text-4xl font-bold rounded-2xl px-6 py-2 border-4 ${
        isBreak ? 'border-green-500' : 'border-red-500'
      }`}
    >
      <div className="text-sm font-normal mb-1 text-center">
        {isBreak ? 'Break Time' : 'Work Time'}
      </div>
      {formatTime(timeLeft)}
    </div>
  );
};

// Format time helper function (assuming it's used in this component)
const formatTime = (seconds) => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
};
