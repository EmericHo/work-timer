"use client";

import { useState } from "react";

interface FlipResult {
  result: "heads" | "tails";
  timestamp: Date;
}

export default function CoinFlip() {
  const [isFlipping, setIsFlipping] = useState(false);
  const [currentResult, setCurrentResult] = useState<"heads" | "tails" | null>(null);
  const [history, setHistory] = useState<FlipResult[]>([]);

  const flipCoin = () => {
    setIsFlipping(true);
    setCurrentResult(null);

    // Simulate coin flip animation duration
    setTimeout(() => {
      const result = Math.random() < 0.5 ? "heads" : "tails";
      setCurrentResult(result);
      setIsFlipping(false);
      
      setHistory([
        { result, timestamp: new Date() },
        ...history.slice(0, 49), // Keep last 50 flips
      ]);
    }, 1000);
  };

  const clearHistory = () => {
    setHistory([]);
  };

  const stats = {
    heads: history.filter((h) => h.result === "heads").length,
    tails: history.filter((h) => h.result === "tails").length,
    total: history.length,
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col items-center justify-center py-8">
        <div
          className={`w-48 h-48 rounded-full flex items-center justify-center text-6xl font-bold shadow-lg transition-all duration-1000 ${
            isFlipping
              ? "animate-spin bg-gradient-to-br from-yellow-400 to-yellow-600"
              : currentResult === "heads"
              ? "bg-gradient-to-br from-yellow-400 to-yellow-600 text-white"
              : currentResult === "tails"
              ? "bg-gradient-to-br from-gray-400 to-gray-600 text-white"
              : "bg-gradient-to-br from-blue-400 to-blue-600 text-white"
          }`}
        >
          {isFlipping ? (
            "💫"
          ) : currentResult === "heads" ? (
            <div className="text-center">
              <div className="text-7xl">👤</div>
              <div className="text-lg mt-2">Face</div>
            </div>
          ) : currentResult === "tails" ? (
            <div className="text-center">
              <div className="text-7xl">🔢</div>
              <div className="text-lg mt-2">Pile</div>
            </div>
          ) : (
            "?"
          )}
        </div>

        <button
          onClick={flipCoin}
          disabled={isFlipping}
          className={`mt-8 px-8 py-4 rounded-lg font-semibold text-lg transition-colors ${
            isFlipping
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700 text-white"
          }`}
        >
          {isFlipping ? "🔄 Lancement..." : "🪙 Lancer la pièce"}
        </button>
      </div>

      {history.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 text-center">
            <div className="text-4xl mb-2">👤</div>
            <div className="text-2xl font-bold text-yellow-900 dark:text-yellow-100">
              {stats.heads}
            </div>
            <div className="text-sm text-yellow-700 dark:text-yellow-300">
              Face ({stats.total > 0 ? ((stats.heads / stats.total) * 100).toFixed(1) : 0}%)
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 text-center">
            <div className="text-4xl mb-2">🎲</div>
            <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              {stats.total}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Total lancers
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 text-center">
            <div className="text-4xl mb-2">🔢</div>
            <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              {stats.tails}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Pile ({stats.total > 0 ? ((stats.tails / stats.total) * 100).toFixed(1) : 0}%)
            </div>
          </div>
        </div>
      )}

      {history.length > 0 && (
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-lg">
              Historique ({history.length} lancer{history.length > 1 ? "s" : ""})
            </h3>
            <button
              onClick={clearHistory}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm"
            >
              🗑️ Effacer
            </button>
          </div>

          <div className="flex flex-wrap gap-2 max-h-48 overflow-y-auto border border-gray-300 dark:border-gray-600 rounded-lg p-4 bg-gray-50 dark:bg-gray-900">
            {history.map((flip, index) => (
              <div
                key={index}
                className={`px-3 py-2 rounded-lg font-semibold text-sm ${
                  flip.result === "heads"
                    ? "bg-yellow-200 dark:bg-yellow-800 text-yellow-900 dark:text-yellow-100"
                    : "bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                }`}
                title={flip.timestamp.toLocaleTimeString()}
              >
                {flip.result === "heads" ? "👤 Face" : "🔢 Pile"}
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
        <h4 className="font-semibold mb-2 text-blue-900 dark:text-blue-100">
          💡 À propos du pile ou face
        </h4>
        <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
          <li><strong>Probabilité:</strong> 50% de chances pour chaque face</li>
          <li><strong>Usage:</strong> Prise de décision rapide, choix aléatoire</li>
          <li><strong>Statistiques:</strong> Sur un grand nombre de lancers, les résultats tendent vers 50/50</li>
          <li><strong>Historique:</strong> Permet de suivre vos résultats et vérifier l&apos;équilibre</li>
        </ul>
      </div>
    </div>
  );
}
