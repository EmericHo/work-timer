"use client";

import { useState } from "react";

export default function URLEncoderDecoder() {
  const [mode, setMode] = useState<string>("encode");
  const [input, setInput] = useState<string>("");
  const [output, setOutput] = useState<string>("");

  const handleProcess = () => {
    if (!input.trim()) {
      setOutput("");
      return;
    }

    try {
      if (mode === "encode") {
        setOutput(encodeURIComponent(input));
      } else {
        setOutput(decodeURIComponent(input));
      }
    } catch (error) {
      setOutput(`Erreur: ${error instanceof Error ? error.message : "Impossible de décoder"}`);
    }
  };

  const copyToClipboard = () => {
    if (!output) return;
    navigator.clipboard.writeText(output).then(
      () => alert("Résultat copié!"),
      () => alert("Erreur lors de la copie.")
    );
  };

  const handleClear = () => {
    setInput("");
    setOutput("");
  };

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2">Mode</label>
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => {
              setMode("encode");
              setOutput("");
            }}
            className={`px-4 py-3 rounded-lg font-semibold transition-colors ${
              mode === "encode"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
            }`}
          >
            🔒 Encoder
          </button>
          <button
            onClick={() => {
              setMode("decode");
              setOutput("");
            }}
            className={`px-4 py-3 rounded-lg font-semibold transition-colors ${
              mode === "decode"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
            }`}
          >
            🔓 Décoder
          </button>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">
          {mode === "encode" ? "Texte à encoder" : "URL encodée à décoder"}
        </label>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={
            mode === "encode"
              ? "Exemple: Hello World! Comment ça va?"
              : "Exemple: Hello%20World%21%20Comment%20%C3%A7a%20va%3F"
          }
          rows={6}
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 resize-none font-mono text-sm"
        />
      </div>

      <div className="flex gap-3">
        <button
          onClick={handleProcess}
          disabled={!input.trim()}
          className="flex-1 px-6 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {mode === "encode" ? "🔒 Encoder" : "🔓 Décoder"}
        </button>
        <button
          onClick={handleClear}
          className="px-6 py-4 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors font-semibold"
        >
          🗑️
        </button>
      </div>

      {output && (
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
            value={output}
            readOnly
            rows={6}
            className={`w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg ${
              output.startsWith("Erreur:")
                ? "bg-red-50 dark:bg-red-900/20 text-red-900 dark:text-red-100"
                : "bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            } resize-none font-mono text-sm`}
          />
        </div>
      )}

      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
        <h4 className="font-semibold mb-2 text-blue-900 dark:text-blue-100">
          💡 Qu&apos;est-ce que l&apos;encodage URL ?
        </h4>
        <p className="text-sm text-blue-800 dark:text-blue-200 mb-3">
          L&apos;encodage URL (aussi appelé pourcentage d&apos;encodage) convertit les caractères spéciaux en une forme sûre pour les URLs. Les caractères sont remplacés par % suivi de leur code hexadécimal.
        </p>
        <div className="space-y-2 text-sm">
          <div className="bg-white dark:bg-blue-950/30 p-3 rounded border border-blue-200 dark:border-blue-700">
            <p className="font-semibold text-blue-900 dark:text-blue-100 mb-1">Exemples courants:</p>
            <div className="space-y-1 font-mono text-xs text-blue-800 dark:text-blue-200">
              <div className="flex justify-between">
                <span>Espace</span>
                <span className="font-bold">%20</span>
              </div>
              <div className="flex justify-between">
                <span>!</span>
                <span className="font-bold">%21</span>
              </div>
              <div className="flex justify-between">
                <span>?</span>
                <span className="font-bold">%3F</span>
              </div>
              <div className="flex justify-between">
                <span>&amp;</span>
                <span className="font-bold">%26</span>
              </div>
              <div className="flex justify-between">
                <span>=</span>
                <span className="font-bold">%3D</span>
              </div>
              <div className="flex justify-between">
                <span>é</span>
                <span className="font-bold">%C3%A9</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
        <h4 className="font-semibold mb-2 text-green-900 dark:text-green-100">
          ✅ Quand utiliser l&apos;encodage URL ?
        </h4>
        <ul className="text-sm text-green-800 dark:text-green-200 space-y-1">
          <li><strong>Paramètres d&apos;URL:</strong> Pour passer des valeurs dans les query strings</li>
          <li><strong>APIs REST:</strong> Pour encoder les données envoyées dans les URLs</li>
          <li><strong>Recherche:</strong> Pour encoder les termes de recherche dans les URLs</li>
          <li><strong>Liens:</strong> Pour créer des liens avec des caractères spéciaux</li>
          <li><strong>Formulaires:</strong> Les navigateurs encodent automatiquement les données de formulaire</li>
        </ul>
      </div>

      <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4">
        <h4 className="font-semibold mb-2 text-purple-900 dark:text-purple-100">
          🔧 Caractères réservés en URL
        </h4>
        <p className="text-sm text-purple-800 dark:text-purple-200 mb-2">
          Ces caractères ont une signification spéciale dans les URLs et doivent être encodés:
        </p>
        <div className="font-mono text-sm text-purple-900 dark:text-purple-100 bg-white dark:bg-purple-950/30 p-3 rounded border border-purple-200 dark:border-purple-700">
          : / ? # [ ] @ ! $ &amp; &apos; ( ) * + , ; =
        </div>
      </div>
    </div>
  );
}
