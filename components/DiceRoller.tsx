"use client";

import { useState } from "react";

type DiceType = "d4" | "d6" | "d8" | "d10" | "d12" | "d20" | "d100";

interface DiceRoll {
  dice: DiceType;
  quantity: number;
  modifier: number;
  results: number[];
  total: number;
}

export default function DiceRoller() {
  const [selectedDice, setSelectedDice] = useState<DiceType>("d20");
  const [quantity, setQuantity] = useState<number>(1);
  const [modifier, setModifier] = useState<number>(0);
  const [rollHistory, setRollHistory] = useState<DiceRoll[]>([]);

  const diceOptions: DiceType[] = ["d4", "d6", "d8", "d10", "d12", "d20", "d100"];

  const rollDice = () => {
    const maxValue = parseInt(selectedDice.substring(1));
    const results: number[] = [];

    for (let i = 0; i < quantity; i++) {
      results.push(Math.floor(Math.random() * maxValue) + 1);
    }

    const sum = results.reduce((acc, val) => acc + val, 0);
    const total = sum + modifier;

    const roll: DiceRoll = {
      dice: selectedDice,
      quantity,
      modifier,
      results,
      total,
    };

    setRollHistory([roll, ...rollHistory]);
  };

  const clearHistory = () => {
    setRollHistory([]);
  };

  const getDiceEmoji = (dice: DiceType) => {
    const emojiMap: Record<DiceType, string> = {
      d4: "🔺",
      d6: "🎲",
      d8: "🔷",
      d10: "🔟",
      d12: "🌟",
      d20: "⭐",
      d100: "💯",
    };
    return emojiMap[dice];
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">Type de dé</label>
          <div className="grid grid-cols-4 gap-2">
            {diceOptions.map((dice) => (
              <button
                key={dice}
                onClick={() => setSelectedDice(dice)}
                className={`px-2 py-3 rounded-lg font-bold transition-colors ${
                  selectedDice === dice
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                }`}
                title={dice}
              >
                <div className="text-2xl">{getDiceEmoji(dice)}</div>
                <div className="text-xs mt-1">{dice.toUpperCase()}</div>
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Nombre de dés
          </label>
          <input
            type="number"
            min="1"
            max="100"
            value={quantity}
            onChange={(e) => setQuantity(Math.max(1, Math.min(100, Number(e.target.value))))}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Modificateur (+/-)
          </label>
          <input
            type="number"
            value={modifier}
            onChange={(e) => setModifier(Number(e.target.value))}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
          />
        </div>
      </div>

      <button
        onClick={rollDice}
        className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg"
      >
        🎲 Lancer {quantity > 1 ? `${quantity} ` : ""}
        {selectedDice.toUpperCase()}
        {modifier !== 0 && ` ${modifier > 0 ? "+" : ""}${modifier}`}
      </button>

      {rollHistory.length > 0 && (
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-lg">
              Historique des lancers
            </h3>
            <button
              onClick={clearHistory}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm"
            >
              🗑️ Effacer
            </button>
          </div>

          <div className="space-y-2 max-h-96 overflow-y-auto">
            {rollHistory.map((roll, index) => (
              <div
                key={index}
                className="border border-gray-300 dark:border-gray-600 rounded-lg p-4 bg-white dark:bg-gray-800"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl">{getDiceEmoji(roll.dice)}</span>
                      <span className="font-bold">
                        {roll.quantity > 1 ? `${roll.quantity}×` : ""}
                        {roll.dice.toUpperCase()}
                        {roll.modifier !== 0 && ` ${roll.modifier > 0 ? "+" : ""}${roll.modifier}`}
                      </span>
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Résultats: {roll.results.join(", ")}
                      {roll.modifier !== 0 && (
                        <span> (+ modificateur {roll.modifier > 0 ? "+" : ""}{roll.modifier})</span>
                      )}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                      {roll.total}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      Total
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
        <h4 className="font-semibold mb-2 text-blue-900 dark:text-blue-100">
          💡 Guide des dés
        </h4>
        <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
          <li><strong>D4:</strong> Dé à 4 faces (tétraèdre) - Dégâts légers</li>
          <li><strong>D6:</strong> Dé classique à 6 faces - Usage courant</li>
          <li><strong>D8, D10, D12:</strong> Dégâts moyens à élevés</li>
          <li><strong>D20:</strong> Dé principal dans D&amp;D pour tests et attaques</li>
          <li><strong>D100:</strong> Pourcentage (0-100) pour tables aléatoires</li>
        </ul>
      </div>
    </div>
  );
}
