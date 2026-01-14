"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import PomodoroFocus from "@/components/PomodoroFocus";
import WorkCalculator from "@/components/WorkCalculator";
import CountdownTimer from "@/components/CountdownTimer";

// Note: Client components can't export metadata directly
// Metadata is defined in layout.tsx or a separate metadata file

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
    <div className="min-h-screen flex flex-col p-4 sm:p-6 md:p-8">
      <header className="flex-shrink-0 mb-4 sm:mb-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">
          Timer Focus Gratuit pour Travail - Pomodoro en Ligne
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-400 mt-2 text-sm sm:text-base">
          Gérez votre temps avec notre chronomètre, timer Pomodoro et calculateur de productivité
        </p>
        <div className="text-center mt-3">
          <Link 
            href="/guide" 
            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline text-sm sm:text-base"
          >
            📖 Consulter le guide complet de productivité
          </Link>
        </div>
      </header>

      <div className="flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 max-w-7xl mx-auto">
          {/* Work Calculator Section - Position 1 */}
          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 sm:p-6 flex flex-col">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-center flex-shrink-0">
              Calculateur de Temps de Travail
            </h2>
            <div className="flex-1">
              <WorkCalculator />
            </div>
          </section>

          {/* Timer Section - Position 2 */}
          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 sm:p-6 flex flex-col">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-center flex-shrink-0">
              Timer Standard
            </h2>
            
            <div className="flex-1 flex flex-col justify-center items-center">
              <div
                className="text-4xl sm:text-5xl md:text-6xl font-mono font-bold text-center mb-6 text-blue-600 dark:text-blue-400"
                aria-live="polite"
                aria-atomic="true"
                role="timer"
                aria-label={`Temps écoulé: ${formatTime(time)}`}
              >
                {formatTime(time)}
              </div>

              <div className="flex flex-wrap gap-3 justify-center">
                <button
                  onClick={handleStart}
                  disabled={isRunning}
                  className="px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-semibold rounded-lg bg-green-600 text-white hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors focus-visible:outline-2 focus-visible:outline-green-600"
                  aria-label="Démarrer le timer"
                >
                  Démarrer
                </button>
                <button
                  onClick={handleStop}
                  disabled={!isRunning}
                  className="px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-semibold rounded-lg bg-red-600 text-white hover:bg-red-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors focus-visible:outline-2 focus-visible:outline-red-600"
                  aria-label="Arrêter le timer"
                >
                  Arrêter
                </button>
                <button
                  onClick={handleReset}
                  className="px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-semibold rounded-lg bg-gray-600 text-white hover:bg-gray-700 transition-colors focus-visible:outline-2 focus-visible:outline-gray-600"
                  aria-label="Réinitialiser le timer"
                >
                  Réinitialiser
                </button>
              </div>
            </div>
          </section>

          {/* Countdown Timer Section - Position 3 */}
          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 sm:p-6 flex flex-col">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-center flex-shrink-0">
              Compte à Rebours
            </h2>
            <div className="flex-1">
              <CountdownTimer />
            </div>
          </section>

          {/* Pomodoro Section - Position 4 */}
          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 sm:p-6 flex flex-col">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-center flex-shrink-0">
              Mode Pomodoro Focus
            </h2>
            <div className="flex-1">
              <PomodoroFocus />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
