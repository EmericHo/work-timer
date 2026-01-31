"use client";

import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

type Category = "Work" | "School" | "Social" | "General";

const EXCUSES: Record<Category, string[]> = {
  Work: [
    "My internet connection was down all morning.",
    "I was stuck in an unexpected meeting that ran over.",
    "My computer crashed and I lost all my work.",
    "There was a family emergency I had to attend to.",
    "I wasn't feeling well and needed to rest.",
    "My alarm didn't go off this morning.",
    "I had a doctor's appointment that took longer than expected.",
    "There was heavy traffic due to an accident.",
    "My car wouldn't start this morning.",
    "I was helping a colleague with an urgent issue.",
    "My phone died and I didn't see the notification.",
    "I thought the meeting was tomorrow.",
    "I've been working on a different priority task.",
    "My email went to spam and I didn't see it.",
    "I had to take care of a home maintenance emergency.",
  ],
  School: [
    "My dog ate my homework (classic but timeless!).",
    "My printer ran out of ink at the last minute.",
    "I accidentally submitted the wrong file.",
    "My computer froze and I lost everything.",
    "I was sick and couldn't finish the assignment.",
    "I thought it was due next week.",
    "My internet went down and I couldn't access the materials.",
    "I had a family obligation I couldn't avoid.",
    "My textbook had the wrong information.",
    "I was helping another student and ran out of time.",
    "The file got corrupted when I tried to save it.",
    "I misread the assignment instructions.",
    "My younger sibling deleted my work by accident.",
    "I had a sports practice that went late.",
    "The power went out and I couldn't charge my laptop.",
  ],
  Social: [
    "I'm not feeling well and need to stay home.",
    "Something urgent came up at work.",
    "I have a family commitment I forgot about.",
    "My car broke down on the way.",
    "I'm stuck at home waiting for a repair person.",
    "I have to help a friend with an emergency.",
    "I'm exhausted and need to catch up on sleep.",
    "I double-booked myself by accident.",
    "My pet isn't feeling well and I need to watch them.",
    "I have a massive headache and need to rest.",
    "I forgot I had a prior engagement.",
    "The weather is terrible and I don't want to drive.",
    "I need to finish an important project.",
    "I'm having internet issues and can't join virtually.",
    "I just need some alone time to recharge.",
  ],
  General: [
    "I lost track of time.",
    "My phone died and I couldn't check the time.",
    "I got the date mixed up.",
    "I was dealing with an unexpected situation.",
    "I'm not feeling like myself today.",
    "Something important came up.",
    "I need to take care of a personal matter.",
    "I had technical difficulties.",
    "I forgot to set a reminder.",
    "I've been overwhelmed lately.",
    "I made a scheduling error.",
    "I need a mental health day.",
    "I have to stay home for a delivery.",
    "I'm waiting for an important phone call.",
    "I need to focus on my wellbeing today.",
  ],
};

export default function ExcuseGenerator() {
  const [category, setCategory] = useState<Category>("Work");
  const [currentExcuse, setCurrentExcuse] = useState<string>("");
  const [history, setHistory] = useState<string[]>([]);
  const [copied, setCopied] = useState<boolean>(false);

  const generateExcuse = () => {
    const excuses = EXCUSES[category];
    const randomExcuse = excuses[Math.floor(Math.random() * excuses.length)];
    setCurrentExcuse(randomExcuse);

    setHistory((prev) => {
      const newHistory = [randomExcuse, ...prev];
      return newHistory.slice(0, 5);
    });
  };

  const copyExcuse = async () => {
    if (!currentExcuse) return;
    await navigator.clipboard.writeText(currentExcuse);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Excuse Generator</h2>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Category
        </label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value as Category)}
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
        >
          <option value="Work">Work</option>
          <option value="School">School</option>
          <option value="Social">Social</option>
          <option value="General">General</option>
        </select>
      </div>

      <button
        onClick={generateExcuse}
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition-colors mb-6"
      >
        Generate Excuse
      </button>

      {currentExcuse && (
        <div className="mb-6 p-4 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg border-2 border-purple-200 dark:border-purple-700">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Your Excuse:</h3>
          <p className="text-lg text-gray-900 dark:text-white mb-4 italic">&quot;{currentExcuse}&quot;</p>
          <button
            onClick={copyExcuse}
            className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded-md transition-colors"
          >
            {copied ? "Copied!" : "Copy Excuse"}
          </button>
        </div>
      )}

      {history.length > 0 && (
        <div className="mb-6">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Recent History</h3>
          <div className="space-y-2">
            {history.map((excuse, index) => (
              <div
                key={index}
                className="p-3 bg-gray-50 dark:bg-gray-700 rounded-md text-sm text-gray-700 dark:text-gray-300"
              >
                {excuse}
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
        <h3 className="font-semibold text-yellow-900 dark:text-yellow-300 mb-2"><FontAwesomeIcon icon={faExclamationTriangle} className="inline" /> Disclaimer</h3>
        <p className="text-sm text-yellow-800 dark:text-yellow-300">
          <strong>Pour divertissement uniquement!</strong> This tool is meant for fun and humor. 
          We encourage honesty and transparency in all your interactions. Use responsibly! 😊
        </p>
      </div>
    </div>
  );
}
