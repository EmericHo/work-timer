"use client";

import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faChartBar } from '@fortawesome/free-solid-svg-icons';

export default function MultiplicationTable() {
  const [number, setNumber] = useState<number>(7);
  const [range, setRange] = useState<number>(10);
  const [showAll, setShowAll] = useState<boolean>(false);

  const generateTable = (n: number) => {
    return Array.from({ length: range }, (_, i) => ({
      multiplier: i + 1,
      result: n * (i + 1),
    }));
  };

  return (
    <div className="space-y-6">
      {!showAll ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                Table de multiplication: {number}
              </label>
              <input
                type="range"
                min="1"
                max="20"
                value={number}
                onChange={(e) => setNumber(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Jusqu&apos;à: {range}
              </label>
              <input
                type="range"
                min="5"
                max="20"
                value={range}
                onChange={(e) => setRange(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border-2 border-blue-500">
            <h3 className="text-2xl font-bold text-center mb-6 text-blue-600 dark:text-blue-400">
              Table de {number}
            </h3>
            <div className="space-y-3">
              {generateTable(number).map((row) => (
                <div
                  key={row.multiplier}
                  className="flex justify-between items-center p-3 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg border border-blue-200 dark:border-blue-700"
                >
                  <span className="text-lg font-medium">
                    {number} × {row.multiplier}
                  </span>
                  <span className="text-xl font-bold text-blue-600 dark:text-blue-400">
                    = {row.result}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => setShowAll(true)}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            <FontAwesomeIcon icon={faChartBar} className="inline" /> Voir toutes les tables (1-10)
          </button>
        </>
      ) : (
        <>
          <button
            onClick={() => setShowAll(false)}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            ← Retour à une table
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
              <div
                key={n}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 border-2 border-gray-300 dark:border-gray-600"
              >
                <h4 className="text-lg font-bold text-center mb-3 text-blue-600 dark:text-blue-400">
                  Table de {n}
                </h4>
                <div className="space-y-2 text-sm">
                  {generateTable(n).slice(0, 10).map((row) => (
                    <div key={row.multiplier} className="flex justify-between">
                      <span>{n} × {row.multiplier}</span>
                      <span className="font-bold">= {row.result}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
        <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
          <FontAwesomeIcon icon={faBook} className="inline" /> Apprendre les tables
        </h3>
        <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
          <li>• Commencez par les tables de 1, 2, 5 et 10 (les plus faciles)</li>
          <li>• Apprenez ensuite les tables de 3, 4, 6, 7, 8 et 9</li>
          <li>• Utilisez des astuces: 9×n = (10×n) - n</li>
          <li>• Pratiquez régulièrement pour mémoriser durablement</li>
          <li>• La commutativité: 3×4 = 4×3, donc moins à apprendre!</li>
        </ul>
      </div>
    </div>
  );
}
