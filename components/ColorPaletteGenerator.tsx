"use client";

import { useState } from "react";

export default function ColorPaletteGenerator() {
  const [palette, setPalette] = useState<string[]>([]);
  const [lockedColors, setLockedColors] = useState<boolean[]>([false, false, false, false, false]);
  const [copied, setCopied] = useState<number | null>(null);

  const generateRandomColor = (): string => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const generatePalette = () => {
    const newPalette = palette.length === 0 ? Array(5).fill("") : [...palette];
    for (let i = 0; i < 5; i++) {
      if (!lockedColors[i]) {
        newPalette[i] = generateRandomColor();
      }
    }
    setPalette(newPalette);
  };

  const toggleLock = (index: number) => {
    const newLocked = [...lockedColors];
    newLocked[index] = !newLocked[index];
    setLockedColors(newLocked);
  };

  const copyColor = (color: string, index: number) => {
    navigator.clipboard.writeText(color).then(() => {
      setCopied(index);
      setTimeout(() => setCopied(null), 2000);
    });
  };

  const exportAsCSSVariables = () => {
    const cssVars = palette
      .map((color, i) => `  --color-${i + 1}: ${color};`)
      .join("\n");
    const css = `:root {\n${cssVars}\n}`;
    navigator.clipboard.writeText(css).then(
      () => alert("Variables CSS copiées!"),
      () => alert("Erreur lors de la copie.")
    );
  };

  const exportAsTailwind = () => {
    const tailwindConfig = palette
      .map((color, i) => `        'color-${i + 1}': '${color}',`)
      .join("\n");
    const config = `module.exports = {\n  theme: {\n    extend: {\n      colors: {\n${tailwindConfig}\n      }\n    }\n  }\n}`;
    navigator.clipboard.writeText(config).then(
      () => alert("Config Tailwind copiée!"),
      () => alert("Erreur lors de la copie.")
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex gap-3">
        <button
          onClick={generatePalette}
          className="flex-1 px-6 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg"
        >
          🎨 {palette.length === 0 ? "Générer une palette" : "Nouvelle palette"}
        </button>
        {palette.length > 0 && (
          <button
            onClick={() => {
              setPalette([]);
              setLockedColors([false, false, false, false, false]);
            }}
            className="px-6 py-4 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors font-semibold"
          >
            🔄
          </button>
        )}
      </div>

      {palette.length > 0 && (
        <div className="space-y-3">
          <div className="grid grid-cols-5 gap-3">
            {palette.map((color, index) => (
              <div key={index} className="space-y-2">
                <div
                  className="h-32 rounded-lg border-2 border-gray-300 dark:border-gray-600 cursor-pointer relative group"
                  style={{ backgroundColor: color }}
                  onClick={() => copyColor(color, index)}
                >
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleLock(index);
                    }}
                    className="absolute top-2 right-2 w-8 h-8 bg-white/90 dark:bg-gray-800/90 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    title={lockedColors[index] ? "Déverrouiller" : "Verrouiller"}
                  >
                    {lockedColors[index] ? "🔒" : "🔓"}
                  </button>
                  {copied === index && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-lg text-white font-semibold">
                      ✓ Copié
                    </div>
                  )}
                </div>
                <div className="text-center">
                  <p className="font-mono text-sm font-semibold">{color}</p>
                  {lockedColors[index] && (
                    <p className="text-xs text-gray-500 dark:text-gray-400">🔒 Verrouillé</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg p-4">
            <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">
              📋 Exporter la palette
            </h4>
            <div className="flex gap-3">
              <button
                onClick={exportAsCSSVariables}
                className="flex-1 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                CSS Variables
              </button>
              <button
                onClick={exportAsTailwind}
                className="flex-1 px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors"
              >
                Tailwind Config
              </button>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg p-4">
            <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">
              🎨 Codes couleurs
            </h4>
            <div className="space-y-2 font-mono text-sm">
              {palette.map((color, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-2 bg-white dark:bg-gray-700 rounded border border-gray-300 dark:border-gray-600"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-8 h-8 rounded border-2 border-gray-300 dark:border-gray-500"
                      style={{ backgroundColor: color }}
                    />
                    <span className="font-semibold">{color}</span>
                    {lockedColors[index] && <span className="text-xs">🔒</span>}
                  </div>
                  <button
                    onClick={() => copyColor(color, index)}
                    className="px-3 py-1 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors text-xs"
                  >
                    📋 Copier
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg p-4">
            <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">
              🖼️ Aperçu de la palette
            </h4>
            <div className="flex h-16 rounded-lg overflow-hidden border-2 border-gray-300 dark:border-gray-600">
              {palette.map((color, index) => (
                <div
                  key={index}
                  className="flex-1"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
        <h4 className="font-semibold mb-2 text-blue-900 dark:text-blue-100">
          💡 Utilisation
        </h4>
        <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
          <li>Cliquez sur &quot;Générer une palette&quot; pour créer 5 couleurs aléatoires</li>
          <li>Cliquez sur une couleur pour copier son code HEX</li>
          <li>Utilisez 🔒 pour verrouiller une couleur et la conserver lors de la régénération</li>
          <li>Exportez votre palette en CSS Variables ou Tailwind Config</li>
          <li>Parfait pour démarrer un projet web avec une palette harmonieuse</li>
        </ul>
      </div>

      <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4">
        <h4 className="font-semibold mb-2 text-purple-900 dark:text-purple-100">
          🎨 Conseils design
        </h4>
        <ul className="text-sm text-purple-800 dark:text-purple-200 space-y-1">
          <li><strong>60-30-10:</strong> Utilisez la règle 60% couleur dominante, 30% secondaire, 10% accent</li>
          <li><strong>Contraste:</strong> Assurez-vous d&apos;un bon contraste texte/fond (WCAG AA minimum)</li>
          <li><strong>Cohérence:</strong> Limitez-vous à 3-5 couleurs principales dans votre design</li>
          <li><strong>Accessibilité:</strong> Testez vos combinaisons pour les daltoniens</li>
        </ul>
      </div>
    </div>
  );
}
