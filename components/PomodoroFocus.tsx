"use client";

import { useState, useEffect, useRef, useCallback } from "react";

type PomodoroMode = "work" | "break";

export default function PomodoroFocus() {
  const [mode, setMode] = useState<PomodoroMode>("work");
  const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 minutes in seconds
  const [isRunning, setIsRunning] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Request notification permission on mount
  useEffect(() => {
    if (typeof window !== "undefined" && "Notification" in window) {
      if (Notification.permission === "granted") {
        setNotificationsEnabled(true);
      }
    }
  }, []);

  // Load state from localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedMode = localStorage.getItem("pomodoroMode") as PomodoroMode;
      const savedTimeLeft = localStorage.getItem("pomodoroTimeLeft");
      const savedIsRunning = localStorage.getItem("pomodoroIsRunning");

      if (savedMode) {
        setMode(savedMode);
      }
      if (savedTimeLeft) {
        setTimeLeft(parseInt(savedTimeLeft, 10));
      }
      if (savedIsRunning === "true") {
        setIsRunning(true);
      }
    }
  }, []);

  // Save state to localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("pomodoroMode", mode);
      localStorage.setItem("pomodoroTimeLeft", timeLeft.toString());
      localStorage.setItem("pomodoroIsRunning", isRunning.toString());
    }
  }, [mode, timeLeft, isRunning]);

  const handleTimerComplete = useCallback(() => {
    setIsRunning(false);
    
    if (notificationsEnabled && "Notification" in window) {
      const title = mode === "work" ? "Temps de pause !" : "Retour au travail !";
      const body =
        mode === "work"
          ? "Prenez une pause de 5 minutes."
          : "C'est l'heure de vous remettre au travail.";
      
      new Notification(title, {
        body,
        icon: "/icon-192x192.png",
        badge: "/icon-192x192.png",
      });
    }

    // Switch mode
    if (mode === "work") {
      setMode("break");
      setTimeLeft(5 * 60); // 5 minutes break
    } else {
      setMode("work");
      setTimeLeft(25 * 60); // 25 minutes work
    }
  }, [mode, notificationsEnabled]);

  // Timer logic
  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      intervalRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            handleTimerComplete();
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
  }, [isRunning, timeLeft, handleTimerComplete]);

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    if (mode === "work") {
      setTimeLeft(25 * 60);
    } else {
      setTimeLeft(5 * 60);
    }
  };

  const handleRequestNotifications = async () => {
    if ("Notification" in window) {
      const permission = await Notification.requestPermission();
      if (permission === "granted") {
        setNotificationsEnabled(true);
      }
    }
  };

  const modeColor = mode === "work" ? "text-orange-600 dark:text-orange-400" : "text-green-600 dark:text-green-400";
  const modeLabel = mode === "work" ? "Travail" : "Pause";

  return (
    <div className="space-y-3">
      <div className="text-center">
        <div className={`text-lg font-semibold mb-1 ${modeColor}`}>
          Mode: {modeLabel}
        </div>
        <div
          className="text-3xl sm:text-4xl lg:text-5xl font-mono font-bold text-center mb-3"
          aria-live="polite"
          aria-atomic="true"
          role="timer"
          aria-label={`Temps restant en mode ${modeLabel}: ${formatTime(timeLeft)}`}
        >
          {formatTime(timeLeft)}
        </div>
      </div>

      <div className="flex flex-wrap gap-2 justify-center">
        <button
          onClick={handleStart}
          disabled={isRunning}
          className="px-4 py-2 text-sm font-semibold rounded-lg bg-green-600 text-white hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors focus-visible:outline-2 focus-visible:outline-green-600"
          aria-label="Démarrer le Pomodoro"
        >
          Démarrer
        </button>
        <button
          onClick={handleStop}
          disabled={!isRunning}
          className="px-4 py-2 text-sm font-semibold rounded-lg bg-red-600 text-white hover:bg-red-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors focus-visible:outline-2 focus-visible:outline-red-600"
          aria-label="Arrêter le Pomodoro"
        >
          Arrêter
        </button>
        <button
          onClick={handleReset}
          className="px-4 py-2 text-sm font-semibold rounded-lg bg-gray-600 text-white hover:bg-gray-700 transition-colors focus-visible:outline-2 focus-visible:outline-gray-600"
          aria-label="Réinitialiser le Pomodoro"
        >
          Réinitialiser
        </button>
      </div>

      {!notificationsEnabled && (
        <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-2">
          <p className="text-xs text-gray-700 dark:text-gray-300 mb-1">
            Activez les notifications pour être averti quand votre session se termine.
          </p>
          <button
            onClick={handleRequestNotifications}
            className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-yellow-600 text-white hover:bg-yellow-700 transition-colors focus-visible:outline-2 focus-visible:outline-yellow-600"
            aria-label="Activer les notifications"
          >
            Activer les notifications
          </button>
        </div>
      )}

      <div className="text-xs text-gray-600 dark:text-gray-400">
        <p className="mb-1">
          <strong>Technique Pomodoro:</strong>
        </p>
        <ul className="list-disc list-inside space-y-0.5 ml-2">
          <li>25 minutes de travail concentré</li>
          <li>5 minutes de pause</li>
          <li>Répétez pour rester productif</li>
        </ul>
      </div>
    </div>
  );
}
