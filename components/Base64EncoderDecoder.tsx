"use client";

import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faTrash, faUnlock } from '@fortawesome/free-solid-svg-icons';

export default function Base64EncoderDecoder() {
  const [mode, setMode] = useState<"encode" | "decode">("encode");
  const [input, setInput] = useState<string>("");
  const [output, setOutput] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleEncode = () => {
    try {
      setError("");
      // Modern approach using TextEncoder
      const utf8Bytes = new TextEncoder().encode(input);
      const binaryString = Array.from(utf8Bytes, byte => String.fromCharCode(byte)).join('');
      const encoded = btoa(binaryString);
      setOutput(encoded);
    } catch (err) {
      setError("Erreur lors de l'encodage. Vérifiez votre texte.");
      setOutput("");
    }
  };

  const handleDecode = () => {
    try {
      setError("");
      // Modern approach using TextDecoder
      const binaryString = atob(input);
      const bytes = Uint8Array.from(binaryString, char => char.charCodeAt(0));
      const decoded = new TextDecoder().decode(bytes);
      setOutput(decoded);
    } catch (err) {
      setError("Erreur lors du décodage. Vérifiez que le texte est bien encodé en Base64.");
      setOutput("");
    }
  };

  const handleProcess = () => {
    if (!input.trim()) {
      setError("Veuillez saisir du texte");
      return;
    }
    
    if (mode === "encode") {
      handleEncode();
    } else {
      handleDecode();
    }
  };

  const copyToClipboard = () => {
    if (!output) return;
    navigator.clipboard.writeText(output).then(
      () => alert("Copié dans le presse-papiers!"),
      () => alert("Erreur lors de la copie")
    );
  };

  const swapInputOutput = () => {
    setInput(output);
    setOutput("");
    setMode(mode === "encode" ? "decode" : "encode");
  };

  const clear = () => {
    setInput("");
    setOutput("");
    setError("");
  };

  return (
    <div className="space-y-6">
      <div className="flex gap-4 justify-center">
        <button
          onClick={() => setMode("encode")}
          className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
            mode === "encode"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
          }`}
        >
          Encoder
        </button>
        <button
          onClick={() => setMode("decode")}
          className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
            mode === "decode"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
          }`}
        >
          Décoder
        </button>
      </div>

      <div>
        <label htmlFor="input" className="block text-sm font-medium mb-2">
          {mode === "encode" ? "Texte à encoder:" : "Texte Base64 à décoder:"}
        </label>
        <textarea
          id="input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={
            mode === "encode"
              ? "Saisissez le texte à encoder en Base64..."
              : "Collez le texte Base64 à décoder..."
          }
          className="w-full h-40 p-4 border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 resize-y font-mono text-sm"
        />
      </div>

      <div className="flex gap-3 flex-wrap">
        <button
          onClick={handleProcess}
          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
        >
          {mode === "encode" ? <><FontAwesomeIcon icon={faLock} className="inline" /> Encoder</> : <><FontAwesomeIcon icon={faUnlock} className="inline" /> Décoder</>}
        </button>
        
        {output && (
          <>
            <button
              onClick={swapInputOutput}
              className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              title="Inverser entrée/sortie"
            >
              ⇅
            </button>
            <button
              onClick={clear}
              className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              <FontAwesomeIcon icon={faTrash} className="inline" />
            </button>
          </>
        )}
      </div>

      {error && (
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
          <p className="text-red-800 dark:text-red-200">{error}</p>
        </div>
      )}

      {output && (
        <div>
          <label htmlFor="output" className="block text-sm font-medium mb-2">
            Résultat:
          </label>
          <div className="relative">
            <textarea
              id="output"
              value={output}
              readOnly
              className="w-full h-40 p-4 border-2 border-green-300 dark:border-green-600 rounded-lg bg-green-50 dark:bg-green-900/20 resize-y font-mono text-sm"
            />
            <button
              onClick={copyToClipboard}
              className="absolute top-2 right-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors text-sm font-semibold"
            >
              📋 Copier
            </button>
          </div>
        </div>
      )}

      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
        <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
          📖 À propos du Base64
        </h3>
        <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
          <li>• Format d&apos;encodage qui convertit des données binaires en texte ASCII</li>
          <li>• Utilisé pour transmettre des données dans des contextes textuels (emails, JSON, URLs)</li>
          <li>• Augmente la taille des données d&apos;environ 33%</li>
          <li>• Idéal pour encoder des images dans du CSS ou HTML (Data URLs)</li>
          <li>• Supporte les caractères UTF-8 et les emojis</li>
        </ul>
      </div>
    </div>
  );
}
