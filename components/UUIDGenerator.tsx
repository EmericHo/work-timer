"use client";

import { useState, useCallback } from "react";

export default function UUIDGenerator() {
  const [uuids, setUuids] = useState<string[]>([]);
  const [count, setCount] = useState<number>(1);
  const [version, setVersion] = useState<"v4" | "v1">("v4");

  const generateUUIDv4 = (): string => {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
      const r = (Math.random() * 16) | 0;
      const v = c === "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  };

  const generateUUIDv1 = (): string => {
    // Simplified UUID v1 (timestamp-based)
    const now = Date.now();
    const timeHex = now.toString(16).padStart(12, "0");
    const random = Math.random().toString(16).substring(2, 14);
    return `${timeHex.substring(0, 8)}-${timeHex.substring(8, 12)}-1${random.substring(0, 3)}-${random.substring(3, 7)}-${random.substring(7, 19)}`;
  };

  const generateUUIDs = useCallback(() => {
    const newUUIDs: string[] = [];
    for (let i = 0; i < count; i++) {
      newUUIDs.push(version === "v4" ? generateUUIDv4() : generateUUIDv1());
    }
    setUuids(newUUIDs);
  }, [count, version]);

  const copyToClipboard = useCallback((text: string) => {
    navigator.clipboard.writeText(text);
    alert("UUID copié dans le presse-papiers!");
  }, []);

  const copyAllToClipboard = useCallback(() => {
    navigator.clipboard.writeText(uuids.join("\n"));
    alert("Tous les UUIDs copiés dans le presse-papiers!");
  }, [uuids]);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">
            Version UUID
          </label>
          <select
            value={version}
            onChange={(e) => setVersion(e.target.value as "v4" | "v1")}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
          >
            <option value="v4">UUID v4 (Random)</option>
            <option value="v1">UUID v1 (Timestamp)</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Nombre d&apos;UUIDs à générer
          </label>
          <input
            type="number"
            min="1"
            max="100"
            value={count}
            onChange={(e) => setCount(Math.min(100, Math.max(1, Number(e.target.value))))}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
          />
        </div>
      </div>

      <button
        onClick={generateUUIDs}
        className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
      >
        🎲 Générer UUID{count > 1 ? "s" : ""}
      </button>

      {uuids.length > 0 && (
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-lg">
              {uuids.length} UUID{uuids.length > 1 ? "s" : ""} généré{uuids.length > 1 ? "s" : ""}
            </h3>
            <button
              onClick={copyAllToClipboard}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm"
            >
              📋 Copier tout
            </button>
          </div>

          <div className="space-y-2 max-h-96 overflow-y-auto border border-gray-300 dark:border-gray-600 rounded-lg p-4 bg-gray-50 dark:bg-gray-900">
            {uuids.map((uuid, index) => (
              <div
                key={index}
                className="flex items-center justify-between gap-3 p-3 bg-white dark:bg-gray-800 rounded border border-gray-200 dark:border-gray-700"
              >
                <code className="text-sm font-mono flex-1 break-all">
                  {uuid}
                </code>
                <button
                  onClick={() => copyToClipboard(uuid)}
                  className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors text-sm flex-shrink-0"
                  title="Copier cet UUID"
                >
                  📋
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
        <h4 className="font-semibold mb-2 text-blue-900 dark:text-blue-100">
          💡 À propos des UUIDs
        </h4>
        <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
          <li><strong>UUID v4:</strong> Généré aléatoirement, idéal pour la plupart des cas d&apos;usage</li>
          <li><strong>UUID v1:</strong> Basé sur l&apos;horodatage, contient des informations temporelles</li>
          <li><strong>Universellement unique:</strong> Probabilité de collision quasi nulle (1 sur 10³⁸)</li>
          <li><strong>Format standard:</strong> 32 caractères hexadécimaux séparés par des tirets</li>
        </ul>
      </div>
    </div>
  );
}
