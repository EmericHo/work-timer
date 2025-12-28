"use client";

import { useState, useEffect, useRef } from "react";
import PomodoroFocus from "@/components/PomodoroFocus";
import AdSenseAd from "@/components/AdSenseAd";

export default function TimerPage() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Load state from localStorage on mount
  useEffect(() => {
    const savedTime = localStorage.getItem("timerTime");
    const savedIsRunning = localStorage.getItem("timerIsRunning");
    
    if (savedTime) {
      setTime(parseInt(savedTime, 10));
    }
    if (savedIsRunning === "true") {
      setIsRunning(true);
    }
  }, []);

  // Save state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("timerTime", time.toString());
    localStorage.setItem("timerIsRunning", isRunning.toString());
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
    <div className="min-h-screen p-4 sm:p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8">
          Timer Focus Gratuit pour Travail
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Main content area */}
          <div className="lg:col-span-3 space-y-8">
            {/* Timer Section */}
            <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 sm:p-8">
              <h2 className="text-2xl font-semibold mb-6 text-center">
                Timer Standard
              </h2>
              
              <div
                className="text-6xl sm:text-7xl md:text-8xl font-mono font-bold text-center mb-8 text-blue-600 dark:text-blue-400"
                aria-live="polite"
                aria-atomic="true"
                role="timer"
                aria-label={`Temps écoulé: ${formatTime(time)}`}
              >
                {formatTime(time)}
              </div>

              <div className="flex flex-wrap gap-4 justify-center">
                <button
                  onClick={handleStart}
                  disabled={isRunning}
                  className="px-6 py-3 text-base sm:text-lg font-semibold rounded-lg bg-green-600 text-white hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors focus-visible:outline-2 focus-visible:outline-green-600"
                  aria-label="Démarrer le timer"
                >
                  Démarrer
                </button>
                <button
                  onClick={handleStop}
                  disabled={!isRunning}
                  className="px-6 py-3 text-base sm:text-lg font-semibold rounded-lg bg-red-600 text-white hover:bg-red-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors focus-visible:outline-2 focus-visible:outline-red-600"
                  aria-label="Arrêter le timer"
                >
                  Arrêter
                </button>
                <button
                  onClick={handleReset}
                  className="px-6 py-3 text-base sm:text-lg font-semibold rounded-lg bg-gray-600 text-white hover:bg-gray-700 transition-colors focus-visible:outline-2 focus-visible:outline-gray-600"
                  aria-label="Réinitialiser le timer"
                >
                  Reset
                </button>
              </div>
            </section>

            {/* Pomodoro Section */}
            <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 sm:p-8">
              <h2 className="text-2xl font-semibold mb-6 text-center">
                Mode Pomodoro Focus
              </h2>
              <PomodoroFocus />
            </section>

            {/* Footer Ad */}
            <div className="flex justify-center">
              <AdSenseAd
                slot="footer"
                format="horizontal"
                style={{ width: "728px", height: "90px" }}
              />
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4">
              <h3 className="text-lg font-semibold mb-4">À propos</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Utilisez notre timer pour suivre votre temps de travail et la technique Pomodoro pour améliorer votre concentration.
              </p>
              <AdSenseAd
                slot="sidebar"
                format="rectangle"
                style={{ width: "300px", height: "250px" }}
              />
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
