"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else if (!isRunning && time !== 0) {
      if (interval) clearInterval(interval);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning, time]);

  const formatTime = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleStartStop = () => {
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 md:p-12 max-w-md w-full mx-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800 dark:text-white">
          Work Timer
        </h1>
        
        <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl p-8 mb-8 shadow-lg">
          <div className="text-6xl font-mono font-bold text-center text-white">
            {formatTime(time)}
          </div>
        </div>
        
        <div className="flex gap-4">
          <button
            onClick={handleStartStop}
            className={`flex-1 py-4 px-6 rounded-lg font-semibold text-white transition-all duration-200 shadow-lg hover:shadow-xl ${
              isRunning
                ? "bg-red-500 hover:bg-red-600"
                : "bg-green-500 hover:bg-green-600"
            }`}
          >
            {isRunning ? "Pause" : "Start"}
          </button>
          
          <button
            onClick={handleReset}
            className="flex-1 py-4 px-6 rounded-lg font-semibold text-white bg-gray-500 hover:bg-gray-600 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Reset
          </button>
        </div>
        
        <p className="text-center mt-8 text-gray-600 dark:text-gray-400 text-sm">
          Track your work sessions effectively
        </p>
      </div>
    </div>
  );
}
