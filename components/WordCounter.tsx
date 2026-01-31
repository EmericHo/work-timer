"use client";

import { useState, useEffect } from "react";

export default function WordCounter() {
  const [text, setText] = useState<string>("");
  const [stats, setStats] = useState({
    characters: 0,
    charactersNoSpaces: 0,
    words: 0,
    sentences: 0,
    paragraphs: 0,
    readingTime: 0,
    speakingTime: 0,
  });

  useEffect(() => {
    const characters = text.length;
    const charactersNoSpaces = text.replace(/\s/g, "").length;
    
    // Count words
    const words = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
    
    // Count sentences
    const sentences = text.trim() === "" ? 0 : text.split(/[.!?]+/).filter(s => s.trim().length > 0).length;
    
    // Count paragraphs
    const paragraphs = text.trim() === "" ? 0 : text.split(/\n\n+/).filter(p => p.trim().length > 0).length;
    
    // Calculate reading time (average 200 words per minute)
    const readingTime = Math.ceil(words / 200);
    
    // Calculate speaking time (average 150 words per minute)
    const speakingTime = Math.ceil(words / 150);

    setStats({
      characters,
      charactersNoSpaces,
      words,
      sentences,
      paragraphs,
      readingTime,
      speakingTime,
    });
  }, [text]);

  const clearText = () => {
    setText("");
  };

  return (
    <div className="space-y-6">
      <div>
        <label htmlFor="text-input" className="block text-sm font-medium mb-2">
          Saisissez ou collez votre texte:
        </label>
        <textarea
          id="text-input"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Commencez à écrire ou collez votre texte ici..."
          className="w-full h-64 p-4 border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 resize-y"
        />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 p-4 rounded-lg border border-blue-200 dark:border-blue-700">
          <div className="text-3xl font-bold text-blue-700 dark:text-blue-300">{stats.words}</div>
          <div className="text-sm text-blue-600 dark:text-blue-400 font-medium">Mots</div>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/30 p-4 rounded-lg border border-green-200 dark:border-green-700">
          <div className="text-3xl font-bold text-green-700 dark:text-green-300">{stats.characters}</div>
          <div className="text-sm text-green-600 dark:text-green-400 font-medium">Caractères</div>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/30 p-4 rounded-lg border border-purple-200 dark:border-purple-700">
          <div className="text-3xl font-bold text-purple-700 dark:text-purple-300">{stats.charactersNoSpaces}</div>
          <div className="text-sm text-purple-600 dark:text-purple-400 font-medium">Sans espaces</div>
        </div>

        <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/30 dark:to-orange-800/30 p-4 rounded-lg border border-orange-200 dark:border-orange-700">
          <div className="text-3xl font-bold text-orange-700 dark:text-orange-300">{stats.sentences}</div>
          <div className="text-sm text-orange-600 dark:text-orange-400 font-medium">Phrases</div>
        </div>

        <div className="bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-900/30 dark:to-teal-800/30 p-4 rounded-lg border border-teal-200 dark:border-teal-700">
          <div className="text-3xl font-bold text-teal-700 dark:text-teal-300">{stats.paragraphs}</div>
          <div className="text-sm text-teal-600 dark:text-teal-400 font-medium">Paragraphes</div>
        </div>

        <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-900/30 dark:to-indigo-800/30 p-4 rounded-lg border border-indigo-200 dark:border-indigo-700">
          <div className="text-3xl font-bold text-indigo-700 dark:text-indigo-300">{stats.readingTime}</div>
          <div className="text-sm text-indigo-600 dark:text-indigo-400 font-medium">Min lecture</div>
        </div>

        <div className="bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-900/30 dark:to-pink-800/30 p-4 rounded-lg border border-pink-200 dark:border-pink-700">
          <div className="text-3xl font-bold text-pink-700 dark:text-pink-300">{stats.speakingTime}</div>
          <div className="text-sm text-pink-600 dark:text-pink-400 font-medium">Min parole</div>
        </div>

        <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800/30 dark:to-gray-700/30 p-4 rounded-lg border border-gray-200 dark:border-gray-600">
          <div className="text-3xl font-bold text-gray-700 dark:text-gray-300">
            {stats.words > 0 ? (stats.characters / stats.words).toFixed(1) : 0}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Moy. car/mot</div>
        </div>
      </div>

      {text && (
        <button
          onClick={clearText}
          className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
        >
          🗑️ Effacer le texte
        </button>
      )}

      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
        <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
          💡 Informations utiles
        </h3>
        <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
          <li>• Temps de lecture basé sur 200 mots/minute (lecture moyenne)</li>
          <li>• Temps de parole basé sur 150 mots/minute (discours moyen)</li>
          <li>• Les statistiques se mettent à jour en temps réel pendant la saisie</li>
          <li>• Idéal pour les articles, essais, présentations et contenus web</li>
        </ul>
      </div>
    </div>
  );
}
