"use client";

import { useState } from "react";

interface DiffResult {
  type: "added" | "removed" | "unchanged";
  value: string;
}

export default function TextDiffChecker() {
  const [originalText, setOriginalText] = useState<string>("");
  const [modifiedText, setModifiedText] = useState<string>("");
  const [diff, setDiff] = useState<DiffResult[]>([]);
  const [stats, setStats] = useState<{
    added: number;
    removed: number;
    unchanged: number;
  } | null>(null);

  const compareTexts = () => {
    const originalWords = originalText.split(/(\s+)/);
    const modifiedWords = modifiedText.split(/(\s+)/);

    const results: DiffResult[] = [];
    const maxLength = Math.max(originalWords.length, modifiedWords.length);

    let added = 0;
    let removed = 0;
    let unchanged = 0;

    let i = 0;
    let j = 0;

    while (i < originalWords.length || j < modifiedWords.length) {
      if (i >= originalWords.length) {
        results.push({ type: "added", value: modifiedWords[j] });
        added++;
        j++;
      } else if (j >= modifiedWords.length) {
        results.push({ type: "removed", value: originalWords[i] });
        removed++;
        i++;
      } else if (originalWords[i] === modifiedWords[j]) {
        results.push({ type: "unchanged", value: originalWords[i] });
        unchanged++;
        i++;
        j++;
      } else {
        const foundInModified = modifiedWords.slice(j).indexOf(originalWords[i]);
        const foundInOriginal = originalWords.slice(i).indexOf(modifiedWords[j]);

        if (foundInModified !== -1 && (foundInOriginal === -1 || foundInModified < foundInOriginal)) {
          for (let k = 0; k < foundInModified; k++) {
            results.push({ type: "added", value: modifiedWords[j + k] });
            added++;
          }
          j += foundInModified;
        } else if (foundInOriginal !== -1) {
          for (let k = 0; k < foundInOriginal; k++) {
            results.push({ type: "removed", value: originalWords[i + k] });
            removed++;
          }
          i += foundInOriginal;
        } else {
          results.push({ type: "removed", value: originalWords[i] });
          results.push({ type: "added", value: modifiedWords[j] });
          removed++;
          added++;
          i++;
          j++;
        }
      }
    }

    setDiff(results);
    setStats({ added, removed, unchanged });
  };

  const getCharCount = (type: "added" | "removed") => {
    return diff
      .filter((d) => d.type === type)
      .reduce((sum, d) => sum + d.value.length, 0);
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Text Difference Checker</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Original Text
          </label>
          <textarea
            value={originalText}
            onChange={(e) => setOriginalText(e.target.value)}
            placeholder="Paste your original text here..."
            rows={10}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white font-mono text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Modified Text
          </label>
          <textarea
            value={modifiedText}
            onChange={(e) => setModifiedText(e.target.value)}
            placeholder="Paste your modified text here..."
            rows={10}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white font-mono text-sm"
          />
        </div>
      </div>

      <button
        onClick={compareTexts}
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition-colors mb-6"
      >
        Compare Texts
      </button>

      {stats && (
        <div className="mb-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Statistics</h3>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-md">
              <p className="text-sm text-green-800 dark:text-green-300">Added</p>
              <p className="text-2xl font-bold text-green-900 dark:text-green-200">{stats.added}</p>
              <p className="text-xs text-green-700 dark:text-green-400">
                {getCharCount("added")} chars
              </p>
            </div>
            <div className="p-3 bg-red-100 dark:bg-red-900/30 rounded-md">
              <p className="text-sm text-red-800 dark:text-red-300">Removed</p>
              <p className="text-2xl font-bold text-red-900 dark:text-red-200">{stats.removed}</p>
              <p className="text-xs text-red-700 dark:text-red-400">
                {getCharCount("removed")} chars
              </p>
            </div>
            <div className="p-3 bg-gray-200 dark:bg-gray-600 rounded-md">
              <p className="text-sm text-gray-800 dark:text-gray-300">Unchanged</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-gray-200">{stats.unchanged}</p>
            </div>
          </div>
        </div>
      )}

      {diff.length > 0 && (
        <div className="mb-6">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Differences</h3>
          <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg overflow-auto max-h-96">
            <div className="font-mono text-sm whitespace-pre-wrap break-words">
              {diff.map((item, index) => (
                <span
                  key={index}
                  className={
                    item.type === "added"
                      ? "bg-green-200 dark:bg-green-900/50 text-green-900 dark:text-green-200"
                      : item.type === "removed"
                      ? "bg-red-200 dark:bg-red-900/50 text-red-900 dark:text-red-200 line-through"
                      : "text-gray-700 dark:text-gray-300"
                  }
                >
                  {item.value}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-3 flex gap-2 text-sm">
            <span className="px-2 py-1 bg-green-200 dark:bg-green-900/50 text-green-900 dark:text-green-200 rounded">
              Added
            </span>
            <span className="px-2 py-1 bg-red-200 dark:bg-red-900/50 text-red-900 dark:text-red-200 rounded line-through">
              Removed
            </span>
            <span className="px-2 py-1 bg-gray-200 dark:bg-gray-600 text-gray-900 dark:text-gray-200 rounded">
              Unchanged
            </span>
          </div>
        </div>
      )}

      <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
        <h3 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">💡 Use Cases</h3>
        <ul className="text-sm text-blue-800 dark:text-blue-300 list-disc list-inside space-y-1">
          <li>Code review and tracking changes</li>
          <li>Document comparison and version control</li>
          <li>Content editing and proofreading</li>
          <li>Contract and agreement comparison</li>
        </ul>
      </div>
    </div>
  );
}
