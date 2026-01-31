"use client";

import { useState } from "react";

interface TimeZone {
  name: string;
  offset: number;
  city: string;
}

const TIME_ZONES: TimeZone[] = [
  { name: "UTC", offset: 0, city: "UTC" },
  { name: "Europe/Paris", offset: 1, city: "Paris" },
  { name: "Europe/London", offset: 0, city: "London" },
  { name: "America/New_York", offset: -5, city: "New York" },
  { name: "America/Los_Angeles", offset: -8, city: "Los Angeles" },
  { name: "America/Chicago", offset: -6, city: "Chicago" },
  { name: "Asia/Tokyo", offset: 9, city: "Tokyo" },
  { name: "Asia/Shanghai", offset: 8, city: "Shanghai" },
  { name: "Asia/Dubai", offset: 4, city: "Dubai" },
  { name: "Asia/Singapore", offset: 8, city: "Singapore" },
  { name: "Australia/Sydney", offset: 10, city: "Sydney" },
  { name: "Pacific/Auckland", offset: 12, city: "Auckland" },
];

interface ConvertedTime {
  timezone: TimeZone;
  time: string;
  date: string;
}

export default function TimeZoneConverter() {
  const [sourceTime, setSourceTime] = useState<string>("12:00");
  const [sourceDate, setSourceDate] = useState<string>(
    new Date().toISOString().split("T")[0]
  );
  const [sourceTimezone, setSourceTimezone] = useState<string>("UTC");
  const [targetTimezones, setTargetTimezones] = useState<string[]>(["Europe/Paris", "America/New_York"]);
  const [convertedTimes, setConvertedTimes] = useState<ConvertedTime[]>([]);

  const getTimezoneByName = (name: string): TimeZone => {
    return TIME_ZONES.find((tz) => tz.name === name) || TIME_ZONES[0];
  };

  const convertTime = () => {
    if (!sourceTime) {
      alert("Please enter a time");
      return;
    }

    const [hours, minutes] = sourceTime.split(":").map(Number);
    const sourceDateObj = new Date(`${sourceDate}T${sourceTime}:00`);
    const sourceTz = getTimezoneByName(sourceTimezone);

    const results: ConvertedTime[] = [];

    targetTimezones.forEach((targetTzName) => {
      const targetTz = getTimezoneByName(targetTzName);
      const offsetDiff = targetTz.offset - sourceTz.offset;
      
      const targetDate = new Date(sourceDateObj.getTime() + offsetDiff * 60 * 60 * 1000);
      
      const timeString = targetDate.toTimeString().slice(0, 5);
      const dateString = targetDate.toLocaleDateString("en-US", {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric",
      });

      results.push({
        timezone: targetTz,
        time: timeString,
        date: dateString,
      });
    });

    setConvertedTimes(results);
  };

  const addTargetTimezone = () => {
    if (targetTimezones.length < 3) {
      const available = TIME_ZONES.find(
        (tz) => !targetTimezones.includes(tz.name) && tz.name !== sourceTimezone
      );
      if (available) {
        setTargetTimezones([...targetTimezones, available.name]);
      }
    }
  };

  const removeTargetTimezone = (index: number) => {
    setTargetTimezones(targetTimezones.filter((_, i) => i !== index));
  };

  const updateTargetTimezone = (index: number, value: string) => {
    const newTargets = [...targetTimezones];
    newTargets[index] = value;
    setTargetTimezones(newTargets);
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Time Zone Converter</h2>

      <div className="mb-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
        <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Source Time</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Date
            </label>
            <input
              type="date"
              value={sourceDate}
              onChange={(e) => setSourceDate(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Time
            </label>
            <input
              type="time"
              value={sourceTime}
              onChange={(e) => setSourceTime(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Time Zone
            </label>
            <select
              value={sourceTimezone}
              onChange={(e) => setSourceTimezone(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            >
              {TIME_ZONES.map((tz) => (
                <option key={tz.name} value={tz.name}>
                  {tz.city} (UTC{tz.offset >= 0 ? "+" : ""}{tz.offset})
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold text-gray-900 dark:text-white">Target Time Zones</h3>
          {targetTimezones.length < 3 && (
            <button
              onClick={addTargetTimezone}
              className="px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white text-sm rounded-md transition-colors"
            >
              + Add Zone
            </button>
          )}
        </div>

        <div className="space-y-2">
          {targetTimezones.map((tzName, index) => (
            <div key={index} className="flex gap-2">
              <select
                value={tzName}
                onChange={(e) => updateTargetTimezone(index, e.target.value)}
                className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              >
                {TIME_ZONES.map((tz) => (
                  <option key={tz.name} value={tz.name}>
                    {tz.city} (UTC{tz.offset >= 0 ? "+" : ""}{tz.offset})
                  </option>
                ))}
              </select>
              <button
                onClick={() => removeTargetTimezone(index)}
                className="px-3 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md transition-colors"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={convertTime}
        className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md transition-colors mb-6"
      >
        Convert Time
      </button>

      {convertedTimes.length > 0 && (
        <div className="mb-6">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Converted Times</h3>
          <div className="space-y-3">
            {convertedTimes.map((result, index) => (
              <div
                key={index}
                className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg border border-blue-200 dark:border-blue-700"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {result.timezone.city}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      UTC{result.timezone.offset >= 0 ? "+" : ""}{result.timezone.offset}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                      {result.time}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {result.date}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
        <h3 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">💡 Use Cases</h3>
        <ul className="text-sm text-blue-800 dark:text-blue-300 list-disc list-inside space-y-1">
          <li>Schedule international meetings and calls</li>
          <li>Coordinate with remote team members</li>
          <li>Plan travel and flight connections</li>
          <li>Manage global project deadlines</li>
          <li>Stream or attend online events across time zones</li>
        </ul>
      </div>
    </div>
  );
}
