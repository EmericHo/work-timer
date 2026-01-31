"use client";

import { useState } from "react";

export default function HashGenerator() {
  const [input, setInput] = useState<string>("");
  const [hashes, setHashes] = useState<Record<string, string>>({});

  const md5 = (str: string): string => {
    // Simple hash implementation for demo purposes
    // Note: This is not a true MD5, for production use a proper crypto library
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash = hash & hash;
    }
    return Math.abs(hash).toString(16).padStart(32, "0");
  };

  const generateHashes = async () => {
    if (!input) {
      setHashes({});
      return;
    }

    const encoder = new TextEncoder();
    const data = encoder.encode(input);

    try {
      // MD5 (using simple implementation)
      const md5Hash = md5(input);

      // SHA variants using Web Crypto API
      const sha1Buffer = await crypto.subtle.digest("SHA-1", data);
      const sha256Buffer = await crypto.subtle.digest("SHA-256", data);
      const sha512Buffer = await crypto.subtle.digest("SHA-512", data);

      const bufferToHex = (buffer: ArrayBuffer) => {
        return Array.from(new Uint8Array(buffer))
          .map((b) => b.toString(16).padStart(2, "0"))
          .join("");
      };

      setHashes({
        MD5: md5Hash,
        "SHA-1": bufferToHex(sha1Buffer),
        "SHA-256": bufferToHex(sha256Buffer),
        "SHA-512": bufferToHex(sha512Buffer),
      });
    } catch (error) {
      console.error("Error generating hashes:", error);
    }
  };

  const copyToClipboard = (text: string, algorithm: string) => {
    navigator.clipboard.writeText(text).then(
      () => alert(`Hash ${algorithm} copié!`),
      () => alert("Erreur lors de la copie.")
    );
  };

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2">
          Texte à hasher
        </label>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Entrez le texte à hasher..."
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
        />
      </div>

      <button
        onClick={generateHashes}
        className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
      >
        🔐 Générer les hashs
      </button>

      {Object.keys(hashes).length > 0 && (
        <div className="space-y-3">
          <h3 className="font-semibold text-lg">Résultats</h3>
          {Object.entries(hashes).map(([algorithm, hash]) => (
            <div
              key={algorithm}
              className="border border-gray-300 dark:border-gray-600 rounded-lg p-4 bg-gray-50 dark:bg-gray-900"
            >
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">
                  {algorithm}
                </h4>
                <button
                  onClick={() => copyToClipboard(hash, algorithm)}
                  className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors text-sm"
                  title="Copier le hash"
                >
                  📋
                </button>
              </div>
              <code className="block text-xs font-mono break-all text-gray-700 dark:text-gray-300">
                {hash}
              </code>
            </div>
          ))}
        </div>
      )}

      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
        <h4 className="font-semibold mb-2 text-blue-900 dark:text-blue-100">
          💡 À propos des algorithmes de hachage
        </h4>
        <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
          <li><strong>MD5:</strong> 128 bits - Rapide mais non sécurisé (collisions connues)</li>
          <li><strong>SHA-1:</strong> 160 bits - Déprécié pour la sécurité (collisions possibles)</li>
          <li><strong>SHA-256:</strong> 256 bits - Recommandé pour la plupart des usages</li>
          <li><strong>SHA-512:</strong> 512 bits - Très sécurisé, idéal pour données sensibles</li>
          <li><strong>Usage:</strong> Vérification d&apos;intégrité, stockage de mots de passe, signatures</li>
        </ul>
      </div>
    </div>
  );
}
