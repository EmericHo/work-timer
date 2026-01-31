"use client";

import { useState } from "react";

export default function CSSGradientGenerator() {
  const [color1, setColor1] = useState<string>("#667eea");
  const [color2, setColor2] = useState<string>("#764ba2");
  const [direction, setDirection] = useState<string>("to right");
  const [gradientType, setGradientType] = useState<string>("linear");
  const [additionalStops, setAdditionalStops] = useState<string[]>([]);

  const directions = {
    "to right": "Vers la droite →",
    "to left": "Vers la gauche ←",
    "to bottom": "Vers le bas ↓",
    "to top": "Vers le haut ↑",
    "to bottom right": "Diagonale ↘",
    "to bottom left": "Diagonale ↙",
    "to top right": "Diagonale ↗",
    "to top left": "Diagonale ↖",
  };

  const generateCSS = () => {
    if (gradientType === "radial") {
      const stops = [color1, ...additionalStops, color2].join(", ");
      return `background: radial-gradient(circle, ${stops});`;
    } else {
      const stops = [color1, ...additionalStops, color2].join(", ");
      return `background: linear-gradient(${direction}, ${stops});`;
    }
  };

  const getGradientStyle = () => {
    if (gradientType === "radial") {
      const stops = [color1, ...additionalStops, color2].join(", ");
      return { background: `radial-gradient(circle, ${stops})` };
    } else {
      const stops = [color1, ...additionalStops, color2].join(", ");
      return { background: `linear-gradient(${direction}, ${stops})` };
    }
  };

  const copyToClipboard = () => {
    const css = generateCSS();
    navigator.clipboard.writeText(css).then(
      () => alert("Code CSS copié!"),
      () => alert("Erreur lors de la copie.")
    );
  };

  const addColorStop = () => {
    if (additionalStops.length < 3) {
      setAdditionalStops([...additionalStops, "#999999"]);
    }
  };

  const updateColorStop = (index: number, value: string) => {
    const newStops = [...additionalStops];
    newStops[index] = value;
    setAdditionalStops(newStops);
  };

  const removeColorStop = (index: number) => {
    setAdditionalStops(additionalStops.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2">Type de dégradé</label>
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => setGradientType("linear")}
            className={`px-4 py-3 rounded-lg font-semibold transition-colors ${
              gradientType === "linear"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
            }`}
          >
            Linéaire
          </button>
          <button
            onClick={() => setGradientType("radial")}
            className={`px-4 py-3 rounded-lg font-semibold transition-colors ${
              gradientType === "radial"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
            }`}
          >
            Radial
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">Couleur de début</label>
          <div className="flex gap-2">
            <input
              type="color"
              value={color1}
              onChange={(e) => setColor1(e.target.value)}
              className="w-16 h-12 rounded border border-gray-300 dark:border-gray-600 cursor-pointer"
            />
            <input
              type="text"
              value={color1}
              onChange={(e) => setColor1(e.target.value)}
              className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 font-mono"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Couleur de fin</label>
          <div className="flex gap-2">
            <input
              type="color"
              value={color2}
              onChange={(e) => setColor2(e.target.value)}
              className="w-16 h-12 rounded border border-gray-300 dark:border-gray-600 cursor-pointer"
            />
            <input
              type="text"
              value={color2}
              onChange={(e) => setColor2(e.target.value)}
              className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 font-mono"
            />
          </div>
        </div>
      </div>

      {additionalStops.length > 0 && (
        <div className="space-y-3">
          <label className="block text-sm font-medium">Étapes intermédiaires</label>
          {additionalStops.map((stop, index) => (
            <div key={index} className="flex gap-2">
              <input
                type="color"
                value={stop}
                onChange={(e) => updateColorStop(index, e.target.value)}
                className="w-16 h-12 rounded border border-gray-300 dark:border-gray-600 cursor-pointer"
              />
              <input
                type="text"
                value={stop}
                onChange={(e) => updateColorStop(index, e.target.value)}
                className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 font-mono"
              />
              <button
                onClick={() => removeColorStop(index)}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}

      {additionalStops.length < 3 && (
        <button
          onClick={addColorStop}
          className="w-full px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
        >
          + Ajouter une étape
        </button>
      )}

      {gradientType === "linear" && (
        <div>
          <label className="block text-sm font-medium mb-2">Direction</label>
          <select
            value={direction}
            onChange={(e) => setDirection(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
          >
            {Object.entries(directions).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </div>
      )}

      <div className="bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg p-4">
        <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">
          🎨 Aperçu
        </h4>
        <div
          className="w-full h-48 rounded-lg border-2 border-gray-300 dark:border-gray-600"
          style={getGradientStyle()}
        />
      </div>

      <div className="bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg p-4">
        <div className="flex items-center justify-between mb-3">
          <h4 className="font-semibold text-gray-900 dark:text-gray-100">
            💻 Code CSS
          </h4>
          <button
            onClick={copyToClipboard}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            📋 Copier
          </button>
        </div>
        <pre className="bg-white dark:bg-gray-700 p-4 rounded-lg border border-gray-300 dark:border-gray-600 overflow-x-auto">
          <code className="text-sm font-mono text-gray-900 dark:text-gray-100">
            {generateCSS()}
          </code>
        </pre>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
        <h4 className="font-semibold mb-2 text-blue-900 dark:text-blue-100">
          💡 Utilisation
        </h4>
        <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
          <li>Choisissez entre dégradé linéaire ou radial</li>
          <li>Sélectionnez vos couleurs avec les color pickers</li>
          <li>Ajoutez des étapes intermédiaires pour des transitions plus complexes</li>
          <li>Pour les dégradés linéaires, choisissez la direction</li>
          <li>Copiez le code CSS et utilisez-le dans votre projet</li>
        </ul>
      </div>

      <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4">
        <h4 className="font-semibold mb-2 text-purple-900 dark:text-purple-100">
          🎨 Conseils dégradés
        </h4>
        <ul className="text-sm text-purple-800 dark:text-purple-200 space-y-1">
          <li>Évitez les dégradés trop contrastés pour un rendu harmonieux</li>
          <li>Les dégradés subtils fonctionnent mieux pour les arrière-plans</li>
          <li>Utilisez des couleurs de la même famille pour un effet doux</li>
          <li>Les dégradés radiaux sont parfaits pour les effets de spotlight</li>
          <li>Testez toujours la lisibilité du texte sur vos dégradés</li>
        </ul>
      </div>
    </div>
  );
}
