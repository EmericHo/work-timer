"use client";

import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faTimes } from '@fortawesome/free-solid-svg-icons';

export default function RegexTester() {
  const [pattern, setPattern] = useState<string>("");
  const [testString, setTestString] = useState<string>("");
  const [flags, setFlags] = useState({
    g: true,
    i: false,
    m: false,
    s: false,
    u: false,
    y: false,
  });
  const [matches, setMatches] = useState<RegExpMatchArray[]>([]);
  const [error, setError] = useState<string>("");
  const [matchPositions, setMatchPositions] = useState<{ start: number; end: number }[]>([]);

  useEffect(() => {
    if (!pattern || !testString) {
      setMatches([]);
      setError("");
      setMatchPositions([]);
      return;
    }

    try {
      const flagString = Object.entries(flags)
        .filter(([_, enabled]) => enabled)
        .map(([flag]) => flag)
        .join("");
      
      const regex = new RegExp(pattern, flagString);
      const allMatches: RegExpMatchArray[] = [];
      const positions: { start: number; end: number }[] = [];
      
      if (flags.g) {
        let match;
        const globalRegex = new RegExp(pattern, flagString);
        while ((match = globalRegex.exec(testString)) !== null) {
          allMatches.push(match);
          if (match.index !== undefined) {
            positions.push({
              start: match.index,
              end: match.index + match[0].length,
            });
          }
          if (match.index === globalRegex.lastIndex) {
            globalRegex.lastIndex++;
          }
        }
      } else {
        const match = testString.match(regex);
        if (match && match.index !== undefined) {
          allMatches.push(match);
          positions.push({
            start: match.index,
            end: match.index + match[0].length,
          });
        }
      }

      setMatches(allMatches);
      setMatchPositions(positions);
      setError("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Invalid regex pattern");
      setMatches([]);
      setMatchPositions([]);
    }
  }, [pattern, testString, flags]);

  const renderHighlightedText = () => {
    if (!testString || matchPositions.length === 0) {
      return testString;
    }

    const parts: React.ReactNode[] = [];
    let lastIndex = 0;

    matchPositions.forEach((pos, idx) => {
      // Add text before match
      if (pos.start > lastIndex) {
        parts.push(
          <span key={`text-${idx}`}>{testString.substring(lastIndex, pos.start)}</span>
        );
      }
      // Add highlighted match
      parts.push(
        <mark key={`mark-${idx}`} className="bg-yellow-300 dark:bg-yellow-600">
          {testString.substring(pos.start, pos.end)}
        </mark>
      );
      lastIndex = pos.end;
    });

    // Add remaining text
    if (lastIndex < testString.length) {
      parts.push(<span key="text-end">{testString.substring(lastIndex)}</span>);
    }

    return parts;
  };

  const toggleFlag = (flag: keyof typeof flags) => {
    setFlags((prev) => ({ ...prev, [flag]: !prev[flag] }));
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(
      () => alert("Copié dans le presse-papiers!"),
      () => alert("Erreur lors de la copie.")
    );
  };

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2">
          Pattern Regex
        </label>
        <input
          type="text"
          value={pattern}
          onChange={(e) => setPattern(e.target.value)}
          placeholder="Ex: \d{3}-\d{3}-\d{4}"
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 font-mono"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Flags</label>
        <div className="flex flex-wrap gap-3">
          {Object.entries(flags).map(([flag, enabled]) => (
            <button
              key={flag}
              onClick={() => toggleFlag(flag as keyof typeof flags)}
              className={`px-4 py-2 rounded-lg font-mono font-bold transition-colors ${
                enabled
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
              }`}
              title={
                flag === "g"
                  ? "Global"
                  : flag === "i"
                  ? "Case insensitive"
                  : flag === "m"
                  ? "Multiline"
                  : flag === "s"
                  ? "Dotall"
                  : flag === "u"
                  ? "Unicode"
                  : "Sticky"
              }
            >
              {flag}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">
          Test String
        </label>
        <textarea
          value={testString}
          onChange={(e) => setTestString(e.target.value)}
          placeholder="Entrez le texte à tester..."
          rows={6}
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 font-mono"
        />
      </div>

      {error && (
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
          <p className="text-red-800 dark:text-red-200 font-semibold">
            <FontAwesomeIcon icon={faTimes} className="inline" /> Erreur: {error}
          </p>
        </div>
      )}

      {!error && testString && (
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="block text-sm font-medium">
              Résultat ({matches.length} correspondance{matches.length !== 1 ? "s" : ""})
            </label>
          </div>
          <div className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 font-mono whitespace-pre-wrap min-h-[150px]">
            {renderHighlightedText()}
          </div>
        </div>
      )}

      {matches.length > 0 && (
        <div className="space-y-3">
          <h3 className="font-semibold text-lg">Correspondances détaillées</h3>
          <div className="space-y-2 max-h-64 overflow-y-auto border border-gray-300 dark:border-gray-600 rounded-lg p-4 bg-gray-50 dark:bg-gray-900">
            {matches.map((match, index) => (
              <div
                key={index}
                className="flex items-center justify-between gap-3 p-3 bg-white dark:bg-gray-800 rounded border border-gray-200 dark:border-gray-700"
              >
                <div className="flex-1">
                  <code className="text-sm font-mono block">
                    Match {index + 1}: &quot;{match[0]}&quot;
                  </code>
                  {match.index !== undefined && (
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      Position: {match.index}
                    </span>
                  )}
                </div>
                <button
                  onClick={() => copyToClipboard(match[0])}
                  className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors text-sm flex-shrink-0"
                  title="Copier"
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
          <FontAwesomeIcon icon={faLightbulb} className="inline" /> Guide rapide Regex
        </h4>
        <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
          <li><strong>\d</strong> - Chiffre (0-9)</li>
          <li><strong>\w</strong> - Caractère alphanumérique</li>
          <li><strong>\s</strong> - Espace blanc</li>
          <li><strong>+</strong> - Un ou plusieurs | <strong>*</strong> - Zéro ou plusieurs | <strong>?</strong> - Optionnel</li>
          <li><strong>[abc]</strong> - a, b ou c | <strong>[^abc]</strong> - Tout sauf a, b, c</li>
          <li><strong>^</strong> - Début de ligne | <strong>$</strong> - Fin de ligne</li>
        </ul>
      </div>
    </div>
  );
}
