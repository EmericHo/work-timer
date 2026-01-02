"use client";

import { useState, useEffect, useRef } from "react";
import PomodoroFocus from "@/components/PomodoroFocus";
import WorkCalculator from "@/components/WorkCalculator";

export default function TimerPage() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Load state from localStorage on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedTime = localStorage.getItem("timerTime");
      const savedIsRunning = localStorage.getItem("timerIsRunning");
      
      if (savedTime) {
        setTime(parseInt(savedTime, 10));
      }
      if (savedIsRunning === "true") {
        setIsRunning(true);
      }
    }
  }, []);

  // Save state to localStorage whenever it changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("timerTime", time.toString());
      localStorage.setItem("timerIsRunning", isRunning.toString());
    }
  }, [time, isRunning]);

  // Timer logic
  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning]);

  const formatTime = (seconds: number): string => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  return (
    <div className="h-screen flex flex-col p-4 sm:p-6 overflow-hidden">
      <div className="flex-shrink-0 mb-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-center">
          Timer Focus Gratuit pour Travail
        </h1>
      </div>

      <div className="flex-1 overflow-hidden">
        <div className="h-full grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Work Calculator Section - Position 1 (Top, Full Width on Large Screens) */}
          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 flex flex-col overflow-hidden lg:col-span-2">
            <h2 className="text-xl font-semibold mb-3 text-center flex-shrink-0">
              Calculateur de Temps de Travail
            </h2>
            <div className="flex-1 overflow-y-auto min-h-0">
              <WorkCalculator />
            </div>
          </section>

          {/* Timer Section - Position 2 (Bottom Left) */}
          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 flex flex-col overflow-hidden">
            <h2 className="text-xl font-semibold mb-3 text-center flex-shrink-0">
              Timer Standard
            </h2>
            
            <div className="flex-1 flex flex-col justify-center items-center min-h-0">
              <div
                className="text-4xl sm:text-5xl lg:text-6xl font-mono font-bold text-center mb-4 text-blue-600 dark:text-blue-400"
                aria-live="polite"
                aria-atomic="true"
                role="timer"
                aria-label={`Temps écoulé: ${formatTime(time)}`}
              >
                {formatTime(time)}
              </div>

              <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
                <button
                  onClick={handleStart}
                  disabled={isRunning}
                  className="px-4 py-2 text-sm sm:text-base font-semibold rounded-lg bg-green-600 text-white hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors focus-visible:outline-2 focus-visible:outline-green-600"
                  aria-label="Démarrer le timer"
                >
                  Démarrer
                </button>
                <button
                  onClick={handleStop}
                  disabled={!isRunning}
                  className="px-4 py-2 text-sm sm:text-base font-semibold rounded-lg bg-red-600 text-white hover:bg-red-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors focus-visible:outline-2 focus-visible:outline-red-600"
                  aria-label="Arrêter le timer"
                >
                  Arrêter
                </button>
                <button
                  onClick={handleReset}
                  className="px-4 py-2 text-sm sm:text-base font-semibold rounded-lg bg-gray-600 text-white hover:bg-gray-700 transition-colors focus-visible:outline-2 focus-visible:outline-gray-600"
                  aria-label="Réinitialiser le timer"
                >
                  Réinitialiser
                </button>
              </div>
            </div>
          </section>

          {/* Pomodoro Section - Position 3 (Bottom Right) */}
          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 flex flex-col overflow-hidden">
            <h2 className="text-xl font-semibold mb-3 text-center flex-shrink-0">
              Mode Pomodoro Focus
            </h2>
            <div className="flex-1 overflow-y-auto min-h-0">
              <PomodoroFocus />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
