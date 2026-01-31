"use client";

import { useState, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faVolumeUp } from '@fortawesome/free-solid-svg-icons';

const MORSE_CODE: { [key: string]: string } = {
  A: ".-", B: "-...", C: "-.-.", D: "-..", E: ".", F: "..-.",
  G: "--.", H: "....", I: "..", J: ".---", K: "-.-", L: ".-..",
  M: "--", N: "-.", O: "---", P: ".--.", Q: "--.-", R: ".-.",
  S: "...", T: "-", U: "..-", V: "...-", W: ".--", X: "-..-",
  Y: "-.--", Z: "--..",
  "0": "-----", "1": ".----", "2": "..---", "3": "...--", "4": "....-",
  "5": ".....", "6": "-....", "7": "--...", "8": "---..", "9": "----.",
  " ": "/",
};

const MORSE_TO_TEXT: { [key: string]: string } = Object.fromEntries(
  Object.entries(MORSE_CODE).map(([k, v]) => [v, k])
);

export default function MorseCodeConverter() {
  const [mode, setMode] = useState<"toMorse" | "toText">("toMorse");
  const [input, setInput] = useState<string>("");
  const [output, setOutput] = useState<string>("");
  const [copied, setCopied] = useState<boolean>(false);
  const audioContextRef = useRef<AudioContext | null>(null);

  const convert = () => {
    if (!input.trim()) return;

    if (mode === "toMorse") {
      const morse = input
        .toUpperCase()
        .split("")
        .map((char) => MORSE_CODE[char] || char)
        .join(" ");
      setOutput(morse);
    } else {
      const text = input
        .split(" ")
        .map((code) => MORSE_TO_TEXT[code] || "")
        .join("");
      setOutput(text);
    }
  };

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const playMorseCode = () => {
    if (mode !== "toMorse" && !input.trim()) return;

    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    
    const audioContext = audioContextRef.current;
    const dotDuration = 100;
    const dashDuration = dotDuration * 3;
    const gapDuration = dotDuration;
    const letterGap = dotDuration * 3;
    const wordGap = dotDuration * 7;

    let currentTime = audioContext.currentTime;

    const morseToPlay = mode === "toMorse" ? output : input;

    const playBeep = (duration: number) => {
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);

      oscillator.frequency.value = 600;
      gainNode.gain.value = 0.3;

      oscillator.start(currentTime);
      oscillator.stop(currentTime + duration / 1000);

      currentTime += duration / 1000;
    };

    morseToPlay.split(" ").forEach((code, index) => {
      if (code === "/") {
        currentTime += wordGap / 1000;
      } else {
        code.split("").forEach((symbol) => {
          if (symbol === ".") {
            playBeep(dotDuration);
          } else if (symbol === "-") {
            playBeep(dashDuration);
          }
          currentTime += gapDuration / 1000;
        });
        currentTime += letterGap / 1000;
      }
    });
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Morse Code Converter</h2>

      <div className="mb-4 flex gap-2">
        <button
          onClick={() => setMode("toMorse")}
          className={`flex-1 py-2 px-4 rounded-md font-semibold transition-colors ${
            mode === "toMorse"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
          }`}
        >
          Text to Morse
        </button>
        <button
          onClick={() => setMode("toText")}
          className={`flex-1 py-2 px-4 rounded-md font-semibold transition-colors ${
            mode === "toText"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
          }`}
        >
          Morse to Text
        </button>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          {mode === "toMorse" ? "Enter Text" : "Enter Morse Code"}
        </label>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={mode === "toMorse" ? "Type your text here..." : "Enter morse code (e.g., .... . .-.. .-.. -.-)"}
          rows={4}
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
        />
      </div>

      <div className="flex gap-2 mb-6">
        <button
          onClick={convert}
          className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition-colors"
        >
          Convert
        </button>
        {output && (
          <button
            onClick={playMorseCode}
            className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-md transition-colors"
            title="Play Morse Code"
          >
            <FontAwesomeIcon icon={faVolumeUp} className="inline" /> Play
          </button>
        )}
      </div>

      {output && (
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Output
          </label>
          <div className="relative">
            <textarea
              value={output}
              readOnly
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white"
            />
            <button
              onClick={copyToClipboard}
              className="absolute top-2 right-2 px-3 py-1 bg-gray-500 hover:bg-gray-600 text-white text-sm rounded-md transition-colors"
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>
      )}

      <div className="mb-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
        <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Morse Code Reference</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 text-sm">
          {Object.entries(MORSE_CODE)
            .filter(([key]) => key !== " ")
            .map(([char, code]) => (
              <div key={char} className="flex justify-between p-2 bg-white dark:bg-gray-800 rounded">
                <span className="font-semibold text-gray-900 dark:text-white">{char}</span>
                <span className="text-gray-600 dark:text-gray-400 font-mono">{code}</span>
              </div>
            ))}
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
          Note: Use &quot;/&quot; for word spaces in morse code
        </p>
      </div>

      <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
        <h3 className="font-semibold text-blue-900 dark:text-blue-300 mb-2"><FontAwesomeIcon icon={faLightbulb} className="inline" /> Tips</h3>
        <ul className="text-sm text-blue-800 dark:text-blue-300 list-disc list-inside space-y-1">
          <li>Dot (.) represents a short signal</li>
          <li>Dash (-) represents a long signal</li>
          <li>Spaces separate letters, &quot;/&quot; separates words</li>
          <li>Click &quot;Play&quot; to hear the morse code audio</li>
        </ul>
      </div>
    </div>
  );
}
