"use client";

import { useState, useEffect } from "react";

export default function WorkCalculator() {
  const [startTime, setStartTime] = useState("");
  const [breakStart, setBreakStart] = useState("");
  const [breakEnd, setBreakEnd] = useState("");
  const [endTime, setEndTime] = useState("");
  const [dailyHoursTarget, setDailyHoursTarget] = useState("7");
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update current time every minute for real-time calculations when no end time is set
  useEffect(() => {
    if (!endTime && startTime) {
      const interval = setInterval(() => {
        setCurrentTime(new Date());
      }, 60000); // Update every minute

      return () => clearInterval(interval);
    }
  }, [endTime, startTime]);

  // Load from localStorage on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedStartTime = localStorage.getItem("workCalcStartTime");
      const savedBreakStart = localStorage.getItem("workCalcBreakStart");
      const savedBreakEnd = localStorage.getItem("workCalcBreakEnd");
      const savedEndTime = localStorage.getItem("workCalcEndTime");
      const savedDailyTarget = localStorage.getItem("workCalcDailyTarget");

      if (savedStartTime) setStartTime(savedStartTime);
      if (savedBreakStart) setBreakStart(savedBreakStart);
      if (savedBreakEnd) setBreakEnd(savedBreakEnd);
      if (savedEndTime) setEndTime(savedEndTime);
      if (savedDailyTarget) setDailyHoursTarget(savedDailyTarget);
    }
  }, []);

  // Save to localStorage whenever values change
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("workCalcStartTime", startTime);
      localStorage.setItem("workCalcBreakStart", breakStart);
      localStorage.setItem("workCalcBreakEnd", breakEnd);
      localStorage.setItem("workCalcEndTime", endTime);
      localStorage.setItem("workCalcDailyTarget", dailyHoursTarget);
    }
  }, [startTime, breakStart, breakEnd, endTime, dailyHoursTarget]);

  // Convert time string (HH:MM) to minutes since midnight
  const timeToMinutes = (time: string): number => {
    if (!time || !time.includes(":")) return 0;
    const parts = time.split(":");
    if (parts.length !== 2) return 0;
    const hours = parseInt(parts[0], 10);
    const minutes = parseInt(parts[1], 10);
    if (isNaN(hours) || isNaN(minutes)) return 0;
    return hours * 60 + minutes;
  };

  // Convert minutes to HH:MM format
  const minutesToTime = (minutes: number): string => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours.toString().padStart(2, "0")}:${mins.toString().padStart(2, "0")}`;
  };

  // Format duration in hours and minutes
  const formatDuration = (minutes: number): string => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins.toString().padStart(2, "0")}min`;
  };

  // Calculate work time
  const calculateWorkTime = () => {
    const start = timeToMinutes(startTime);
    const pauseStart = timeToMinutes(breakStart);
    const pauseEnd = timeToMinutes(breakEnd);
    const end = timeToMinutes(endTime);

    let workedMinutes = 0;
    let pauseMinutes = 0;

    // Calculate based on what times are available
    if (start && endTime) {
      // Full calculation with end time
      workedMinutes = end - start;
      if (breakStart && breakEnd) {
        pauseMinutes = pauseEnd - pauseStart;
        workedMinutes -= pauseMinutes;
      }
    } else if (start) {
      // Calculate current work time (without end time)
      const currentMinutes = currentTime.getHours() * 60 + currentTime.getMinutes();
      workedMinutes = currentMinutes - start;
      
      if (breakStart && breakEnd) {
        pauseMinutes = pauseEnd - pauseStart;
        workedMinutes -= pauseMinutes;
      } else if (breakStart) {
        // Currently on break
        workedMinutes = pauseStart - start;
      }
    }

    return Math.max(0, workedMinutes);
  };

  // Default break duration assumption for ongoing breaks (in minutes)
  const DEFAULT_BREAK_DURATION = 60;

  // Get validated daily target in minutes
  const getValidatedDailyTarget = (): number => {
    const target = parseFloat(dailyHoursTarget);
    if (isNaN(target) || target <= 0) {
      return 7 * 60; // Default to 7 hours
    }
    return target * 60;
  };

  // Calculate target completion time
  const calculateTargetTime = () => {
    const targetMinutes = getValidatedDailyTarget();
    const start = timeToMinutes(startTime);
    const pauseStart = timeToMinutes(breakStart);
    const pauseEnd = timeToMinutes(breakEnd);

    if (!start) return null;

    let targetCompletionMinutes = start + targetMinutes;

    // Add break time if both start and end are set
    if (breakStart && breakEnd) {
      const pauseMinutes = pauseEnd - pauseStart;
      targetCompletionMinutes += pauseMinutes;
    } else if (breakStart) {
      // If break has started but not ended, assume default break duration for estimation
      targetCompletionMinutes += DEFAULT_BREAK_DURATION;
    }

    return targetCompletionMinutes;
  };

  // Calculate remaining time
  const calculateRemainingTime = () => {
    const workedMinutes = calculateWorkTime();
    const targetMinutes = getValidatedDailyTarget();
    return Math.max(0, targetMinutes - workedMinutes);
  };

  const workedMinutes = calculateWorkTime();
  const targetTime = calculateTargetTime();
  const remainingMinutes = calculateRemainingTime();
  const targetMinutes = getValidatedDailyTarget();
  const targetReached = remainingMinutes === 0 && workedMinutes >= targetMinutes;

  return (
    <div className="space-y-3">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        <div>
          <label
            htmlFor="startTime"
            className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            Heure de début
          </label>
          <input
            type="time"
            id="startTime"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            className="w-full px-2 py-1 text-sm border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            aria-label="Heure de début de travail"
          />
        </div>

        <div>
          <label
            htmlFor="breakStart"
            className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            Début de pause
          </label>
          <input
            type="time"
            id="breakStart"
            value={breakStart}
            onChange={(e) => setBreakStart(e.target.value)}
            className="w-full px-2 py-1 text-sm border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            aria-label="Heure de début de pause"
          />
        </div>

        <div>
          <label
            htmlFor="breakEnd"
            className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            Fin de pause (reprise)
          </label>
          <input
            type="time"
            id="breakEnd"
            value={breakEnd}
            onChange={(e) => setBreakEnd(e.target.value)}
            className="w-full px-2 py-1 text-sm border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            aria-label="Heure de fin de pause"
          />
        </div>

        <div>
          <label
            htmlFor="endTime"
            className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            Heure de fin (optionnel)
          </label>
          <input
            type="time"
            id="endTime"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
            className="w-full px-2 py-1 text-sm border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            aria-label="Heure de fin de travail"
          />
        </div>

        <div>
          <label
            htmlFor="dailyTarget"
            className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            Objectif journalier (heures)
          </label>
          <input
            type="number"
            id="dailyTarget"
            value={dailyHoursTarget}
            onChange={(e) => setDailyHoursTarget(e.target.value)}
            min="0"
            max="24"
            step="0.25"
            className="w-full px-2 py-1 text-sm border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            aria-label="Objectif d'heures de travail journalières"
          />
        </div>
      </div>

      {startTime && (
        <div className="border-t border-gray-200 dark:border-gray-700 pt-3 space-y-2">
          <h3 className="text-base font-semibold text-center mb-2">
            Résumé
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-2">
              <div className="text-xs text-gray-600 dark:text-gray-400 mb-0.5">
                Temps travaillé
              </div>
              <div className="text-lg font-bold text-blue-600 dark:text-blue-400">
                {formatDuration(workedMinutes)}
              </div>
            </div>

            {targetTime !== null && (
              <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-2">
                <div className="text-xs text-gray-600 dark:text-gray-400 mb-0.5">
                  Objectif atteint à
                </div>
                <div className="text-lg font-bold text-green-600 dark:text-green-400">
                  {minutesToTime(targetTime)}
                </div>
              </div>
            )}

            <div className={`${
              targetReached
                ? "bg-green-50 dark:bg-green-900/20"
                : "bg-orange-50 dark:bg-orange-900/20"
            } rounded-lg p-2`}>
              <div className="text-xs text-gray-600 dark:text-gray-400 mb-0.5">
                {targetReached ? "Objectif atteint !" : "Temps restant"}
              </div>
              <div className={`text-lg font-bold ${
                targetReached
                  ? "text-green-600 dark:text-green-400"
                  : "text-orange-600 dark:text-orange-400"
              }`}>
                {targetReached ? "✓ Terminé" : formatDuration(remainingMinutes)}
              </div>
            </div>
          </div>

          {!endTime && (
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-2">
              <p className="text-xs text-gray-700 dark:text-gray-300">
                <strong>Note :</strong> Sans heure de fin, le calcul se base sur l&apos;heure actuelle.
              </p>
            </div>
          )}
        </div>
      )}

      {!startTime && (
        <div className="text-center text-gray-500 dark:text-gray-400 py-4 text-sm">
          Entrez une heure de début pour commencer le calcul
        </div>
      )}
    </div>
  );
}
