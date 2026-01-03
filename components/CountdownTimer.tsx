"use client";

import { useState, useEffect, useRef } from "react";

export default function CountdownTimer() {
  const [hours, setHours] = useState("0");
  const [minutes, setMinutes] = useState("0");
  const [timeLeft, setTimeLeft] = useState(0); // Time left in seconds
  const [isRunning, setIsRunning] = useState(false);
  const [isConfiguring, setIsConfiguring] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Load state from localStorage on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedHours = localStorage.getItem("countdownHours");
      const savedMinutes = localStorage.getItem("countdownMinutes");
      const savedTimeLeft = localStorage.getItem("countdownTimeLeft");
      const savedIsRunning = localStorage.getItem("countdownIsRunning");
      const savedIsConfiguring = localStorage.getItem("countdownIsConfiguring");

      if (savedHours) setHours(savedHours);
      if (savedMinutes) setMinutes(savedMinutes);
      if (savedTimeLeft) {
        const parsedTimeLeft = parseInt(savedTimeLeft, 10);
        if (!isNaN(parsedTimeLeft)) setTimeLeft(parsedTimeLeft);
      }
      if (savedIsRunning === "true") setIsRunning(true);
      if (savedIsConfiguring) setIsConfiguring(savedIsConfiguring === "true");
    }
  }, []);

  // Save state to localStorage whenever it changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("countdownHours", hours);
      localStorage.setItem("countdownMinutes", minutes);
      localStorage.setItem("countdownTimeLeft", timeLeft.toString());
      localStorage.setItem("countdownIsRunning", isRunning.toString());
      localStorage.setItem("countdownIsConfiguring", isConfiguring.toString());
    }
  }, [hours, minutes, timeLeft, isRunning, isConfiguring]);

  // Timer countdown logic
  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      intervalRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            setIsRunning(false);
            // Show notification when countdown reaches 0
            if (typeof window !== "undefined" && "Notification" in window && Notification.permission === "granted") {
              new Notification("Temps écoulé !", {
                body: "Votre compte à rebours est terminé.",
                icon: "/icon-192x192.png",
              });
            }
            return 0;
          }
          return prev - 1;
        });
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
  }, [isRunning, timeLeft]);

  const formatTime = (seconds: number): string => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, "0")}:${m
      .toString()
      .padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  const handleStart = () => {
    if (isConfiguring) {
      // Initialize countdown from input values
      const h = parseInt(hours, 10);
      const m = parseInt(minutes, 10);
      
      // Validate input values
      if (isNaN(h) || isNaN(m) || h < 0 || m < 0) {
        return; // Don't start with invalid values
      }
      
      const totalSeconds = h * 3600 + m * 60;
      
      if (totalSeconds > 0) {
        setTimeLeft(totalSeconds);
        setIsConfiguring(false);
        setIsRunning(true);
      }
    } else {
      // Resume countdown
      setIsRunning(true);
    }
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTimeLeft(0);
    setIsConfiguring(true);
    setHours("0");
    setMinutes("0");
  };

  return (
    <div className="space-y-6">
      {isConfiguring ? (
        <>
          <div className="text-center mb-4">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Configurez la durée souhaitée pour votre compte à rebours
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 max-w-xs mx-auto">
            <div>
              <label
                htmlFor="countdownHours"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Heures
              </label>
              <input
                type="number"
                id="countdownHours"
                value={hours}
                onChange={(e) => setHours(e.target.value)}
                min="0"
                max="23"
                className="w-full px-4 py-2 text-center text-2xl font-mono border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                aria-label="Nombre d'heures"
              />
            </div>

            <div>
              <label
                htmlFor="countdownMinutes"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Minutes
              </label>
              <input
                type="number"
                id="countdownMinutes"
                value={minutes}
                onChange={(e) => setMinutes(e.target.value)}
                min="0"
                max="59"
                className="w-full px-4 py-2 text-center text-2xl font-mono border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                aria-label="Nombre de minutes"
              />
            </div>
          </div>
        </>
      ) : (
        <div
          className="text-4xl sm:text-5xl lg:text-6xl font-mono font-bold text-center mb-4 text-purple-600 dark:text-purple-400"
          aria-live="polite"
          aria-atomic="true"
          role="timer"
          aria-label={`Temps restant: ${formatTime(timeLeft)}`}
        >
          {formatTime(timeLeft)}
        </div>
      )}

      <div className="flex flex-wrap gap-3 justify-center">
        {isConfiguring ? (
          <button
            onClick={handleStart}
            className="px-6 py-3 text-base font-semibold rounded-lg bg-green-600 text-white hover:bg-green-700 transition-colors focus-visible:outline-2 focus-visible:outline-green-600"
            aria-label="Démarrer le compte à rebours"
          >
            Démarrer
          </button>
        ) : (
          <>
            {isRunning ? (
              <button
                onClick={handlePause}
                className="px-6 py-3 text-base font-semibold rounded-lg bg-yellow-600 text-white hover:bg-yellow-700 transition-colors focus-visible:outline-2 focus-visible:outline-yellow-600"
                aria-label="Mettre en pause"
              >
                Pause
              </button>
            ) : (
              <button
                onClick={handleStart}
                disabled={timeLeft === 0}
                className="px-6 py-3 text-base font-semibold rounded-lg bg-green-600 text-white hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors focus-visible:outline-2 focus-visible:outline-green-600"
                aria-label="Reprendre le compte à rebours"
              >
                Reprendre
              </button>
            )}
            <button
              onClick={handleReset}
              className="px-6 py-3 text-base font-semibold rounded-lg bg-gray-600 text-white hover:bg-gray-700 transition-colors focus-visible:outline-2 focus-visible:outline-gray-600"
              aria-label="Réinitialiser le compte à rebours"
            >
              Réinitialiser
            </button>
          </>
        )}
      </div>

      {timeLeft === 0 && !isConfiguring && (
        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4 text-center">
          <p className="text-lg font-semibold text-green-700 dark:text-green-300">
            ✓ Temps écoulé !
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            Votre session de travail est terminée
          </p>
        </div>
      )}

      <div className="text-sm text-gray-600 dark:text-gray-400">
        <p className="mb-2">
          <strong>Compte à rebours :</strong>
        </p>
        <ul className="list-disc list-inside space-y-1 ml-2">
          <li>Définissez la durée de votre session</li>
          <li>Le timer décompte jusqu&apos;à 0</li>
          <li>Mettez en pause à tout moment</li>
        </ul>
      </div>
    </div>
  );
}
