"use client";

import { useState, useCallback } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompressAlt, faLightbulb, faStar, faTimes, faTrash } from '@fortawesome/free-solid-svg-icons';

export default function JSONFormatter() {
  const [input, setInput] = useState<string>("");
  const [output, setOutput] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [indent, setIndent] = useState<number>(2);

  const formatJSON = useCallback(() => {
    setError("");
    setOutput("");
    
    if (!input.trim()) {
      setError("Veuillez entrer du JSON à formatter");
      return;
    }

    try {
      const parsed = JSON.parse(input);
      const formatted = JSON.stringify(parsed, null, indent);
      setOutput(formatted);
    } catch (e) {
      setError(`Erreur de parsing JSON: ${(e as Error).message}`);
    }
  }, [input, indent]);

  const minifyJSON = useCallback(() => {
    setError("");
    setOutput("");
    
    if (!input.trim()) {
      setError("Veuillez entrer du JSON à minifier");
      return;
    }

    try {
      const parsed = JSON.parse(input);
      const minified = JSON.stringify(parsed);
      setOutput(minified);
    } catch (e) {
      setError(`Erreur de parsing JSON: ${(e as Error).message}`);
    }
  }, [input]);

  const copyToClipboard = useCallback(() => {
    navigator.clipboard.writeText(output);
    alert("JSON copié dans le presse-papiers!");
  }, [output]);

  const clearAll = useCallback(() => {
    setInput("");
    setOutput("");
    setError("");
  }, []);

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <label className="block text-sm font-medium">
          Entrée JSON
        </label>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder='{"name": "Example", "value": 123}'
          className="w-full h-64 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 font-mono text-sm resize-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex flex-wrap gap-3">
        <div className="flex items-center gap-2">
          <label className="text-sm font-medium">Indentation:</label>
          <select
            value={indent}
            onChange={(e) => setIndent(Number(e.target.value))}
            className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 text-sm"
          >
            <option value={2}>2 espaces</option>
            <option value={4}>4 espaces</option>
            <option value={0}>Aucune</option>
          </select>
        </div>

        <button
          onClick={formatJSON}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
        >
          <FontAwesomeIcon icon={faStar} className="inline" /> Formatter
        </button>
        
        <button
          onClick={minifyJSON}
          className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-semibold"
        >
          <FontAwesomeIcon icon={faCompressAlt} className="inline" /> Minifier
        </button>

        <button
          onClick={clearAll}
          className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors font-semibold"
        >
          <FontAwesomeIcon icon={faTrash} className="inline" /> Effacer
        </button>
      </div>

      {error && (
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
          <p className="text-red-800 dark:text-red-200 text-sm">
            <FontAwesomeIcon icon={faTimes} className="inline" /> {error}
          </p>
        </div>
      )}

      {output && (
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="block text-sm font-medium">
              Sortie JSON
            </label>
            <button
              onClick={copyToClipboard}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm"
            >
              📋 Copier
            </button>
          </div>
          <pre className="w-full h-64 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-mono text-sm overflow-auto">
            {output}
          </pre>
        </div>
      )}

      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
        <h4 className="font-semibold mb-2 text-blue-900 dark:text-blue-100">
          <FontAwesomeIcon icon={faLightbulb} className="inline" /> Conseils d&apos;utilisation
        </h4>
        <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
          <li>• Collez votre JSON dans le champ d&apos;entrée</li>
          <li>• Cliquez sur &quot;Formatter&quot; pour indenter et rendre lisible</li>
          <li>• Cliquez sur &quot;Minifier&quot; pour compresser en une ligne</li>
          <li>• L&apos;outil valide automatiquement la syntaxe JSON</li>
        </ul>
      </div>
    </div>
  );
}
