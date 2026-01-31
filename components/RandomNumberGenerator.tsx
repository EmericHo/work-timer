"use client";

import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDice, faLightbulb, faTimes } from '@fortawesome/free-solid-svg-icons';

export default function RandomNumberGenerator() {
  const [min, setMin] = useState<number>(1);
  const [max, setMax] = useState<number>(100);
  const [quantity, setQuantity] = useState<number>(1);
  const [allowDuplicates, setAllowDuplicates] = useState<boolean>(true);
  const [sortNumbers, setSortNumbers] = useState<boolean>(false);
  const [numbers, setNumbers] = useState<number[]>([]);
  const [error, setError] = useState<string>("");

  const generateNumbers = () => {
    if (min >= max) {
      setError("Le minimum doit être inférieur au maximum");
      return;
    }

    if (!allowDuplicates && quantity > max - min + 1) {
      setError("Impossible de générer autant de nombres uniques dans cette plage");
      return;
    }

    setError("");
    const generated: number[] = [];
    const range = max - min + 1;

    if (allowDuplicates) {
      for (let i = 0; i < quantity; i++) {
        const randomNum = Math.floor(Math.random() * range) + min;
        generated.push(randomNum);
      }
    } else {
      const available = Array.from({ length: range }, (_, i) => min + i);
      for (let i = 0; i < quantity; i++) {
        const randomIndex = Math.floor(Math.random() * available.length);
        generated.push(available[randomIndex]);
        available.splice(randomIndex, 1);
      }
    }

    if (sortNumbers) {
      generated.sort((a, b) => a - b);
    }

    setNumbers(generated);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(numbers.join(", ")).then(
      () => alert("Nombres copiés dans le presse-papiers!"),
      () => alert("Erreur lors de la copie.")
    );
  };

  const copyNumber = (num: number) => {
    navigator.clipboard.writeText(num.toString()).then(
      () => alert("Nombre copié!"),
      () => alert("Erreur lors de la copie.")
    );
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">Minimum</label>
          <input
            type="number"
            value={min}
            onChange={(e) => setMin(Number(e.target.value))}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Maximum</label>
          <input
            type="number"
            value={max}
            onChange={(e) => setMax(Number(e.target.value))}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Quantité</label>
          <input
            type="number"
            min="1"
            max="1000"
            value={quantity}
            onChange={(e) => setQuantity(Math.max(1, Math.min(1000, Number(e.target.value))))}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
          />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <label className="flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={allowDuplicates}
            onChange={(e) => setAllowDuplicates(e.target.checked)}
            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          <span className="ml-2 text-sm font-medium">
            Autoriser les doublons
          </span>
        </label>

        <label className="flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={sortNumbers}
            onChange={(e) => setSortNumbers(e.target.checked)}
            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          <span className="ml-2 text-sm font-medium">
            Trier par ordre croissant
          </span>
        </label>
      </div>

      <button
        onClick={generateNumbers}
        className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
      >
        <FontAwesomeIcon icon={faDice} className="inline" /> Générer les nombres
      </button>

      {error && (
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
          <p className="text-red-800 dark:text-red-200 font-semibold">
            <FontAwesomeIcon icon={faTimes} className="inline" /> {error}
          </p>
        </div>
      )}

      {numbers.length > 0 && (
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-lg">
              {numbers.length} nombre{numbers.length > 1 ? "s" : ""} généré{numbers.length > 1 ? "s" : ""}
            </h3>
            <button
              onClick={copyToClipboard}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm"
            >
              📋 Copier tout
            </button>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 max-h-96 overflow-y-auto border border-gray-300 dark:border-gray-600 rounded-lg p-4 bg-gray-50 dark:bg-gray-900">
            {numbers.map((num, index) => (
              <button
                key={index}
                onClick={() => copyNumber(num)}
                className="px-3 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors text-center font-mono font-bold"
                title="Cliquer pour copier"
              >
                {num}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
        <h4 className="font-semibold mb-2 text-blue-900 dark:text-blue-100">
          <FontAwesomeIcon icon={faLightbulb} className="inline" /> Conseils d&apos;utilisation
        </h4>
        <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
          <li><strong>Plage:</strong> Définissez le minimum et maximum pour votre génération</li>
          <li><strong>Doublons:</strong> Décochez pour garantir des nombres uniques</li>
          <li><strong>Tri:</strong> Activez pour obtenir les nombres par ordre croissant</li>
          <li><strong>Usage:</strong> Loteries, tirages au sort, tests, simulations, etc.</li>
        </ul>
      </div>
    </div>
  );
}
