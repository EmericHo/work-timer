"use client";

import { useState } from "react";

interface Video {
  id: number;
  name: string;
  duration: string;
  seconds: number;
}

export default function VideoDurationCalculator() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [videoName, setVideoName] = useState<string>("");
  const [hours, setHours] = useState<string>("0");
  const [minutes, setMinutes] = useState<string>("0");
  const [seconds, setSeconds] = useState<string>("0");
  const [nextId, setNextId] = useState<number>(1);

  const timeToSeconds = (h: number, m: number, s: number): number => {
    return h * 3600 + m * 60 + s;
  };

  const secondsToTime = (totalSeconds: number): string => {
    const h = Math.floor(totalSeconds / 3600);
    const m = Math.floor((totalSeconds % 3600) / 60);
    const s = totalSeconds % 60;
    return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  };

  const addVideo = () => {
    const h = parseInt(hours) || 0;
    const m = parseInt(minutes) || 0;
    const s = parseInt(seconds) || 0;

    if (h === 0 && m === 0 && s === 0) {
      alert("Please enter a valid duration");
      return;
    }

    const totalSeconds = timeToSeconds(h, m, s);
    const duration = secondsToTime(totalSeconds);
    const name = videoName.trim() || `Video ${nextId}`;

    setVideos([...videos, { id: nextId, name, duration, seconds: totalSeconds }]);
    setNextId(nextId + 1);
    setVideoName("");
    setHours("0");
    setMinutes("0");
    setSeconds("0");
  };

  const removeVideo = (id: number) => {
    setVideos(videos.filter((v) => v.id !== id));
  };

  const getTotalSeconds = (): number => {
    return videos.reduce((sum, video) => sum + video.seconds, 0);
  };

  const getTotalDuration = (): string => {
    return secondsToTime(getTotalSeconds());
  };

  const getAverageDuration = (): string => {
    if (videos.length === 0) return "00:00:00";
    return secondsToTime(Math.floor(getTotalSeconds() / videos.length));
  };

  const formatDuration = (totalSeconds: number) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor(totalSeconds / 60);
    return { seconds: totalSeconds, minutes, hours };
  };

  const totalDurationFormatted = formatDuration(getTotalSeconds());

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Video Duration Calculator</h2>

      <div className="mb-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
        <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Add Video</h3>
        
        <div className="mb-3">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Video Name (optional)
          </label>
          <input
            type="text"
            value={videoName}
            onChange={(e) => setVideoName(e.target.value)}
            placeholder="Enter video name"
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          />
        </div>

        <div className="grid grid-cols-3 gap-3 mb-3">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Hours
            </label>
            <input
              type="number"
              min="0"
              value={hours}
              onChange={(e) => setHours(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Minutes
            </label>
            <input
              type="number"
              min="0"
              max="59"
              value={minutes}
              onChange={(e) => setMinutes(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Seconds
            </label>
            <input
              type="number"
              min="0"
              max="59"
              value={seconds}
              onChange={(e) => setSeconds(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            />
          </div>
        </div>

        <button
          onClick={addVideo}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition-colors"
        >
          Add Video
        </button>
      </div>

      {videos.length > 0 && (
        <>
          <div className="mb-6">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Video List</h3>
            <div className="space-y-2">
              {videos.map((video) => (
                <div
                  key={video.id}
                  className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-md"
                >
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">{video.name}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{video.duration}</p>
                  </div>
                  <button
                    onClick={() => removeVideo(video.id)}
                    className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white text-sm rounded-md transition-colors"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
            <h3 className="font-semibold text-green-900 dark:text-green-300 mb-3">Summary</h3>
            <div className="space-y-2 text-gray-900 dark:text-white">
              <p className="text-lg">
                <span className="font-semibold">Total Duration:</span> {getTotalDuration()}
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                • {totalDurationFormatted.seconds} seconds
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                • {totalDurationFormatted.minutes} minutes
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                • {totalDurationFormatted.hours.toFixed(2)} hours
              </p>
              <p className="text-lg mt-3">
                <span className="font-semibold">Average Duration:</span> {getAverageDuration()}
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                • Total Videos: {videos.length}
              </p>
            </div>
          </div>
        </>
      )}

      <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
        <h3 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">💡 Use Cases</h3>
        <ul className="text-sm text-blue-800 dark:text-blue-300 list-disc list-inside space-y-1">
          <li>Content creators planning video series</li>
          <li>Video editors estimating project duration</li>
          <li>Course creators organizing educational content</li>
          <li>Event planners scheduling video presentations</li>
        </ul>
      </div>
    </div>
  );
}
