"use client";

import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptop, faLightbulb, faPalette } from '@fortawesome/free-solid-svg-icons';

export default function CSSShadowGenerator() {
  const [shadows, setShadows] = useState<Array<{
    horizontal: number;
    vertical: number;
    blur: number;
    spread: number;
    color: string;
    opacity: number;
  }>>([
    { horizontal: 0, vertical: 4, blur: 6, spread: 0, color: "#000000", opacity: 0.1 }
  ]);

  const updateShadow = (index: number, field: string, value: number | string) => {
    const newShadows = [...shadows];
    newShadows[index] = { ...newShadows[index], [field]: value };
    setShadows(newShadows);
  };

  const addShadow = () => {
    setShadows([...shadows, { horizontal: 0, vertical: 2, blur: 4, spread: 0, color: "#000000", opacity: 0.1 }]);
  };

  const removeShadow = (index: number) => {
    if (shadows.length > 1) {
      setShadows(shadows.filter((_, i) => i !== index));
    }
  };

  const generateCSS = () => {
    const shadowStrings = shadows.map(shadow => {
      const hexToRgba = (hex: string, opacity: number) => {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        return `rgba(${r}, ${g}, ${b}, ${opacity})`;
      };
      const colorWithOpacity = hexToRgba(shadow.color, shadow.opacity);
      return `${shadow.horizontal}px ${shadow.vertical}px ${shadow.blur}px ${shadow.spread}px ${colorWithOpacity}`;
    });
    return `box-shadow: ${shadowStrings.join(", ")};`;
  };

  const getBoxShadowStyle = () => {
    const shadowStrings = shadows.map(shadow => {
      const hexToRgba = (hex: string, opacity: number) => {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        return `rgba(${r}, ${g}, ${b}, ${opacity})`;
      };
      const colorWithOpacity = hexToRgba(shadow.color, shadow.opacity);
      return `${shadow.horizontal}px ${shadow.vertical}px ${shadow.blur}px ${shadow.spread}px ${colorWithOpacity}`;
    });
    return { boxShadow: shadowStrings.join(", ") };
  };

  const copyToClipboard = () => {
    const css = generateCSS();
    navigator.clipboard.writeText(css).then(
      () => alert("Code CSS copié!"),
      () => alert("Erreur lors de la copie.")
    );
  };

  const presets = [
    { name: "Aucune ombre", shadows: [{ horizontal: 0, vertical: 0, blur: 0, spread: 0, color: "#000000", opacity: 0 }] },
    { name: "Subtile", shadows: [{ horizontal: 0, vertical: 1, blur: 3, spread: 0, color: "#000000", opacity: 0.12 }] },
    { name: "Moyenne", shadows: [{ horizontal: 0, vertical: 4, blur: 6, spread: -1, color: "#000000", opacity: 0.1 }] },
    { name: "Forte", shadows: [{ horizontal: 0, vertical: 10, blur: 15, spread: -3, color: "#000000", opacity: 0.2 }] },
    { name: "Material", shadows: [
      { horizontal: 0, vertical: 2, blur: 4, spread: 0, color: "#000000", opacity: 0.12 },
      { horizontal: 0, vertical: 4, blur: 8, spread: 0, color: "#000000", opacity: 0.08 }
    ]},
  ];

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2">Préréglages</label>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
          {presets.map((preset) => (
            <button
              key={preset.name}
              onClick={() => setShadows(preset.shadows)}
              className="px-3 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors text-sm"
            >
              {preset.name}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        {shadows.map((shadow, index) => (
          <div key={index} className="bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg p-4 space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-gray-900 dark:text-gray-100">
                Ombre {index + 1}
              </h4>
              {shadows.length > 1 && (
                <button
                  onClick={() => removeShadow(index)}
                  className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition-colors text-sm"
                >
                  ✕ Supprimer
                </button>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Décalage horizontal: {shadow.horizontal}px
              </label>
              <input
                type="range"
                min="-50"
                max="50"
                value={shadow.horizontal}
                onChange={(e) => updateShadow(index, "horizontal", Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Décalage vertical: {shadow.vertical}px
              </label>
              <input
                type="range"
                min="-50"
                max="50"
                value={shadow.vertical}
                onChange={(e) => updateShadow(index, "vertical", Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Flou: {shadow.blur}px
              </label>
              <input
                type="range"
                min="0"
                max="100"
                value={shadow.blur}
                onChange={(e) => updateShadow(index, "blur", Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Étendue: {shadow.spread}px
              </label>
              <input
                type="range"
                min="-50"
                max="50"
                value={shadow.spread}
                onChange={(e) => updateShadow(index, "spread", Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Opacité: {(shadow.opacity * 100).toFixed(0)}%
              </label>
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={shadow.opacity}
                onChange={(e) => updateShadow(index, "opacity", Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Couleur de l&apos;ombre</label>
              <div className="flex gap-2">
                <input
                  type="color"
                  value={shadow.color}
                  onChange={(e) => updateShadow(index, "color", e.target.value)}
                  className="w-16 h-12 rounded border border-gray-300 dark:border-gray-600 cursor-pointer"
                />
                <input
                  type="text"
                  value={shadow.color}
                  onChange={(e) => updateShadow(index, "color", e.target.value)}
                  className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 font-mono"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {shadows.length < 5 && (
        <button
          onClick={addShadow}
          className="w-full px-4 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors font-semibold"
        >
          + Ajouter une ombre
        </button>
      )}

      <div className="bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg p-4">
        <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">
          <FontAwesomeIcon icon={faPalette} className="inline" /> Aperçu
        </h4>
        <div className="bg-white dark:bg-gray-900 p-8 rounded-lg flex items-center justify-center">
          <div
            className="w-48 h-48 bg-white dark:bg-gray-700 rounded-lg"
            style={getBoxShadowStyle()}
          />
        </div>
      </div>

      <div className="bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg p-4">
        <div className="flex items-center justify-between mb-3">
          <h4 className="font-semibold text-gray-900 dark:text-gray-100">
            <FontAwesomeIcon icon={faLaptop} className="inline" /> Code CSS
          </h4>
          <button
            onClick={copyToClipboard}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            📋 Copier
          </button>
        </div>
        <pre className="bg-white dark:bg-gray-700 p-4 rounded-lg border border-gray-300 dark:border-gray-600 overflow-x-auto">
          <code className="text-sm font-mono text-gray-900 dark:text-gray-100 break-all">
            {generateCSS()}
          </code>
        </pre>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
        <h4 className="font-semibold mb-2 text-blue-900 dark:text-blue-100">
          <FontAwesomeIcon icon={faLightbulb} className="inline" /> Paramètres
        </h4>
        <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
          <li><strong>Horizontal/Vertical:</strong> Position de l&apos;ombre (négatif = gauche/haut)</li>
          <li><strong>Flou:</strong> Adoucit les bords de l&apos;ombre (0 = net)</li>
          <li><strong>Étendue:</strong> Agrandit ou rétrécit l&apos;ombre</li>
          <li><strong>Opacité:</strong> Transparence de l&apos;ombre (0 = invisible, 100% = opaque)</li>
          <li>Vous pouvez combiner plusieurs ombres pour des effets complexes</li>
        </ul>
      </div>

      <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4">
        <h4 className="font-semibold mb-2 text-purple-900 dark:text-purple-100">
          <FontAwesomeIcon icon={faPalette} className="inline" /> Conseils d&apos;utilisation
        </h4>
        <ul className="text-sm text-purple-800 dark:text-purple-200 space-y-1">
          <li>Des ombres subtiles (faible opacité) donnent un effet plus professionnel</li>
          <li>Évitez les ombres trop fortes qui peuvent sembler artificielles</li>
          <li>Combinez plusieurs ombres pour un effet Material Design</li>
          <li>Utilisez des valeurs négatives pour créer des effets de lumière intérieure</li>
          <li>Adaptez l&apos;opacité selon le contraste de votre design</li>
        </ul>
      </div>
    </div>
  );
}
