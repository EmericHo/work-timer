"use client";

import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faCompressAlt, faExclamationTriangle, faTrash } from '@fortawesome/free-solid-svg-icons';

export default function HTMLMinifier() {
  const [input, setInput] = useState<string>("");
  const [output, setOutput] = useState<string>("");
  const [stats, setStats] = useState({ original: 0, minified: 0, saved: 0 });

  const minifyHTML = () => {
    if (!input.trim()) {
      alert("Veuillez saisir du code HTML");
      return;
    }

    let minified = input
      .replace(/<!--[\s\S]*?-->/g, "")
      .replace(/>\s+</g, "><")
      .replace(/\s{2,}/g, " ")
      .replace(/\s*=\s*/g, "=")
      .replace(/\s*{\s*/g, "{")
      .replace(/\s*}\s*/g, "}")
      .replace(/;\s*/g, ";")
      .replace(/:\s*/g, ":")
      .trim();

    const originalSize = new Blob([input]).size;
    const minifiedSize = new Blob([minified]).size;
    const saved = ((1 - minifiedSize / originalSize) * 100).toFixed(1);

    setOutput(minified);
    setStats({ original: originalSize, minified: minifiedSize, saved: parseFloat(saved) });
  };

  const copyToClipboard = () => {
    if (!output) return;
    navigator.clipboard.writeText(output).then(
      () => alert("Code minifié copié!"),
      () => alert("Erreur lors de la copie")
    );
  };

  const clear = () => {
    setInput("");
    setOutput("");
    setStats({ original: 0, minified: 0, saved: 0 });
  };

  return (
    <div className="space-y-6">
      <div>
        <label htmlFor="input" className="block text-sm font-medium mb-2">
          Code HTML à minifier:
        </label>
        <textarea
          id="input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Collez votre code HTML ici..."
          className="w-full h-64 p-4 border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 resize-y font-mono text-sm"
        />
      </div>

      <div className="flex gap-3">
        <button
          onClick={minifyHTML}
          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
        >
          <FontAwesomeIcon icon={faCompressAlt} className="inline" /> Minifier le HTML
        </button>
        {output && (
          <button
            onClick={clear}
            className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            <FontAwesomeIcon icon={faTrash} className="inline" />
          </button>
        )}
      </div>

      {output && (
        <>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
              <div className="text-2xl font-bold text-blue-700 dark:text-blue-300">
                {stats.original} o
              </div>
              <div className="text-sm text-blue-600 dark:text-blue-400">Taille originale</div>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
              <div className="text-2xl font-bold text-green-700 dark:text-green-300">
                {stats.minified} o
              </div>
              <div className="text-sm text-green-600 dark:text-green-400">Taille minifiée</div>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
              <div className="text-2xl font-bold text-purple-700 dark:text-purple-300">
                {stats.saved}%
              </div>
              <div className="text-sm text-purple-600 dark:text-purple-400">Économisé</div>
            </div>
          </div>

          <div>
            <label htmlFor="output" className="block text-sm font-medium mb-2">
              Code HTML minifié:
            </label>
            <div className="relative">
              <textarea
                id="output"
                value={output}
                readOnly
                className="w-full h-64 p-4 border-2 border-green-300 dark:border-green-600 rounded-lg bg-green-50 dark:bg-green-900/20 resize-y font-mono text-sm"
              />
              <button
                onClick={copyToClipboard}
                className="absolute top-2 right-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm"
              >
                📋 Copier
              </button>
            </div>
          </div>
        </>
      )}

      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
        <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2"><FontAwesomeIcon icon={faCog} className="inline" /> Optimisations</h3>
        <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
          <li>• Suppression des commentaires HTML</li>
          <li>• Suppression des espaces inutiles entre les balises</li>
          <li>• Réduction des espaces multiples en un seul</li>
          <li>• Optimisation des espaces autour des attributs</li>
          <li>• <FontAwesomeIcon icon={faExclamationTriangle} className="inline" /> Ne minifie pas le CSS/JS inline (utilisez les outils dédiés)</li>
        </ul>
      </div>
    </div>
  );
}
