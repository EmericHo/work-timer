"use client";

import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faPlay, faStop, faVolumeUp } from '@fortawesome/free-solid-svg-icons';

export default function TextToSpeech() {
  const [text, setText] = useState<string>("");
  const [rate, setRate] = useState<number>(1);
  const [pitch, setPitch] = useState<number>(1);
  const [voice, setVoice] = useState<string>("");
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  useState(() => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      const loadVoices = () => {
        const availableVoices = window.speechSynthesis.getVoices();
        const frenchVoices = availableVoices.filter(v => v.lang.startsWith("fr"));
        setVoices(frenchVoices.length > 0 ? frenchVoices : availableVoices);
      };
      loadVoices();
      window.speechSynthesis.onvoiceschanged = loadVoices;
    }
  });

  const speak = () => {
    if (!text.trim()) {
      alert("Veuillez saisir du texte");
      return;
    }

    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = rate;
      utterance.pitch = pitch;
      
      if (voice) {
        const selectedVoice = voices.find(v => v.name === voice);
        if (selectedVoice) utterance.voice = selectedVoice;
      }

      utterance.onstart = () => setIsPlaying(true);
      utterance.onend = () => setIsPlaying(false);
      utterance.onerror = () => setIsPlaying(false);

      window.speechSynthesis.speak(utterance);
    } else {
      alert("La synthèse vocale n'est pas supportée par votre navigateur");
    }
  };

  const stop = () => {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <label htmlFor="text-input" className="block text-sm font-medium mb-2">
          Texte à lire:
        </label>
        <textarea
          id="text-input"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Saisissez le texte que vous souhaitez entendre..."
          className="w-full h-40 p-4 border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 resize-y"
          maxLength={500}
        />
        <div className="text-sm text-gray-500 mt-1">{text.length}/500 caractères</div>
      </div>

      {voices.length > 0 && (
        <div>
          <label htmlFor="voice" className="block text-sm font-medium mb-2">
            Voix:
          </label>
          <select
            id="voice"
            value={voice}
            onChange={(e) => setVoice(e.target.value)}
            className="w-full p-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800"
          >
            <option value="">Voix par défaut</option>
            {voices.map((v) => (
              <option key={v.name} value={v.name}>
                {v.name} ({v.lang})
              </option>
            ))}
          </select>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">Vitesse: {rate.toFixed(1)}x</label>
          <input
            type="range"
            min="0.5"
            max="2"
            step="0.1"
            value={rate}
            onChange={(e) => setRate(parseFloat(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Tonalité: {pitch.toFixed(1)}</label>
          <input
            type="range"
            min="0.5"
            max="2"
            step="0.1"
            value={pitch}
            onChange={(e) => setPitch(parseFloat(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>
      </div>

      <div className="flex gap-3">
        <button
          onClick={speak}
          disabled={isPlaying}
          className="flex-1 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
        >
          {isPlaying ? <><FontAwesomeIcon icon={faVolumeUp} className="inline" /> En cours...</> : <><FontAwesomeIcon icon={faPlay} className="inline" /> Lire le Texte</>}
        </button>
        {isPlaying && (
          <button
            onClick={stop}
            className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            <FontAwesomeIcon icon={faStop} className="inline" /> Arrêter
          </button>
        )}
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
        <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2"><FontAwesomeIcon icon={faLightbulb} className="inline" /> Utilisations</h3>
        <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
          <li>• Accessibilité: écouter du texte pour les personnes malvoyantes</li>
          <li>• Apprentissage: pratiquer la prononciation et l&apos;écoute</li>
          <li>• Productivité: écouter des articles pendant d&apos;autres tâches</li>
          <li>• Vérification: entendre comment un texte sonne à l&apos;oral</li>
          <li>• Limite de 500 caractères par lecture pour des raisons de performance</li>
        </ul>
      </div>
    </div>
  );
}
