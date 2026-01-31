"use client";

import { useState } from "react";

export default function TextRepeater() {
  const [text, setText] = useState<string>("");
  const [repetitions, setRepetitions] = useState<string>("10");
  const [separator, setSeparator] = useState<string>("newline");
  const [customSeparator, setCustomSeparator] = useState<string>("");
  const [result, setResult] = useState<string>("");
  const [charCount, setCharCount] = useState<number>(0);
  const [wordCount, setWordCount] = useState<number>(0);

  const separators = {
    newline: "\n",
    space: " ",
    comma: ", ",
    custom: customSeparator,
  };

  const handleGenerate = () => {
    const reps = parseInt(repetitions);
    if (!text || isNaN(reps) || reps < 1 || reps > 1000) {
      setResult("");
      setCharCount(0);
      setWordCount(0);
      return;
    }

    const sep = separator === "custom" ? customSeparator : separators[separator as keyof typeof separators];
    const repeated = Array(reps).fill(text).join(sep);
    setResult(repeated);
    setCharCount(repeated.length);
    setWordCount(repeated.split(/\s+/).filter(w => w.length > 0).length);
  };

  const copyToClipboard = () => {
    if (!result) return;
    navigator.clipboard.writeText(result).then(
      () => alert("Texte copié!"),
      () => alert("Erreur lors de la copie.")
    );
  };

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2">
          Texte à répéter
        </label>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Entrez le texte à répéter..."
          rows={4}
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 resize-none"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">
          Nombre de répétitions (1-1000)
        </label>
        <input
          type="number"
          value={repetitions}
          onChange={(e) => setRepetitions(e.target.value)}
          min="1"
          max="1000"
          placeholder="10"
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">
          Séparateur
        </label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-3">
          <button
            onClick={() => setSeparator("newline")}
            className={`px-3 py-2 rounded-lg font-semibold transition-colors text-sm ${
              separator === "newline"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
            }`}
          >
            Nouvelle ligne
          </button>
          <button
            onClick={() => setSeparator("space")}
            className={`px-3 py-2 rounded-lg font-semibold transition-colors text-sm ${
              separator === "space"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
            }`}
          >
            Espace
          </button>
          <button
            onClick={() => setSeparator("comma")}
            className={`px-3 py-2 rounded-lg font-semibold transition-colors text-sm ${
              separator === "comma"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
            }`}
          >
            Virgule
          </button>
          <button
            onClick={() => setSeparator("custom")}
            className={`px-3 py-2 rounded-lg font-semibold transition-colors text-sm ${
              separator === "custom"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
            }`}
          >
            Personnalisé
          </button>
        </div>

        {separator === "custom" && (
          <input
            type="text"
            value={customSeparator}
            onChange={(e) => setCustomSeparator(e.target.value)}
            placeholder="Entrez votre séparateur..."
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
          />
        )}
      </div>

      <button
        onClick={handleGenerate}
        disabled={!text || !repetitions}
        className="w-full px-6 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed"
      >
        🔄 Générer le texte répété
      </button>

      {result && (
        <div className="space-y-3">
          <div className="bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-semibold text-gray-900 dark:text-gray-100">
                📄 Résultat
              </h4>
              <button
                onClick={copyToClipboard}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                📋 Copier
              </button>
            </div>
            <textarea
              value={result}
              readOnly
              rows={10}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 resize-none font-mono text-sm"
            />
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
            <h4 className="font-semibold mb-3 text-blue-900 dark:text-blue-100">
              📊 Statistiques
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-blue-900 dark:text-blue-100">
                  {text.length}
                </p>
                <p className="text-sm text-blue-700 dark:text-blue-300">
                  Caractères/répétition
                </p>
              </div>
              <div>
                <p className="text-2xl font-bold text-blue-900 dark:text-blue-100">
                  {parseInt(repetitions)}
                </p>
                <p className="text-sm text-blue-700 dark:text-blue-300">
                  Répétitions
                </p>
              </div>
              <div>
                <p className="text-2xl font-bold text-blue-900 dark:text-blue-100">
                  {charCount.toLocaleString()}
                </p>
                <p className="text-sm text-blue-700 dark:text-blue-300">
                  Caractères totaux
                </p>
              </div>
              <div>
                <p className="text-2xl font-bold text-blue-900 dark:text-blue-100">
                  {wordCount.toLocaleString()}
                </p>
                <p className="text-sm text-blue-700 dark:text-blue-300">
                  Mots totaux
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
        <h4 className="font-semibold mb-2 text-blue-900 dark:text-blue-100">
          💡 Cas d&apos;usage
        </h4>
        <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
          <li><strong>Tests:</strong> Générer des données de test répétitives</li>
          <li><strong>Remplissage:</strong> Créer du texte de remplissage pour des maquettes</li>
          <li><strong>Listes:</strong> Générer des listes d&apos;éléments rapidement</li>
          <li><strong>Formatage:</strong> Créer des patterns ou des motifs de texte</li>
          <li><strong>CSV:</strong> Générer des données séparées par virgules</li>
        </ul>
      </div>

      <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
        <h4 className="font-semibold mb-2 text-yellow-900 dark:text-yellow-100">
          ⚠️ Limites
        </h4>
        <p className="text-sm text-yellow-800 dark:text-yellow-200">
          Le nombre maximum de répétitions est limité à 1000 pour éviter les problèmes de performance du navigateur. Pour de grandes quantités de texte, utilisez plusieurs répétitions.
        </p>
      </div>
    </div>
  );
}
