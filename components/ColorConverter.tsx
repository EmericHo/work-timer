"use client";

import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';

export default function ColorConverter() {
  const [hex, setHex] = useState<string>("#3b82f6");
  const [rgb, setRgb] = useState({ r: 59, g: 130, b: 246 });
  const [hsl, setHsl] = useState({ h: 217, s: 91, l: 60 });

  const hexToRgb = (hexValue: string): { r: number; g: number; b: number } | null => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexValue);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : null;
  };

  const rgbToHex = (r: number, g: number, b: number): string => {
    return "#" + [r, g, b].map((x) => {
      const hex = x.toString(16);
      return hex.length === 1 ? "0" + hex : hex;
    }).join("");
  };

  const rgbToHsl = (r: number, g: number, b: number): { h: number; s: number; l: number } => {
    r /= 255;
    g /= 255;
    b /= 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h = 0;
    let s = 0;
    const l = (max + min) / 2;

    if (max !== min) {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

      switch (max) {
        case r:
          h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
          break;
        case g:
          h = ((b - r) / d + 2) / 6;
          break;
        case b:
          h = ((r - g) / d + 4) / 6;
          break;
      }
    }

    return {
      h: Math.round(h * 360),
      s: Math.round(s * 100),
      l: Math.round(l * 100),
    };
  };

  const hslToRgb = (h: number, s: number, l: number): { r: number; g: number; b: number } => {
    h /= 360;
    s /= 100;
    l /= 100;

    let r, g, b;

    if (s === 0) {
      r = g = b = l;
    } else {
      const hue2rgb = (p: number, q: number, t: number) => {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1 / 6) return p + (q - p) * 6 * t;
        if (t < 1 / 2) return q;
        if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
        return p;
      };

      const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      const p = 2 * l - q;

      r = hue2rgb(p, q, h + 1 / 3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1 / 3);
    }

    return {
      r: Math.round(r * 255),
      g: Math.round(g * 255),
      b: Math.round(b * 255),
    };
  };

  const updateFromHex = (newHex: string) => {
    setHex(newHex);
    const rgbValue = hexToRgb(newHex);
    if (rgbValue) {
      setRgb(rgbValue);
      setHsl(rgbToHsl(rgbValue.r, rgbValue.g, rgbValue.b));
    }
  };

  const updateFromRgb = (r: number, g: number, b: number) => {
    setRgb({ r, g, b });
    setHex(rgbToHex(r, g, b));
    setHsl(rgbToHsl(r, g, b));
  };

  const updateFromHsl = (h: number, s: number, l: number) => {
    setHsl({ h, s, l });
    const rgbValue = hslToRgb(h, s, l);
    setRgb(rgbValue);
    setHex(rgbToHex(rgbValue.r, rgbValue.g, rgbValue.b));
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text).then(
      () => alert(`${label} copié: ${text}`),
      () => alert("Erreur lors de la copie")
    );
  };

  return (
    <div className="space-y-6">
      {/* Color Preview */}
      <div className="space-y-3">
        <div
          className="w-full h-32 rounded-lg border-4 border-gray-300 dark:border-gray-600 shadow-lg"
          style={{ backgroundColor: hex }}
        />
        <div className="text-center text-sm text-gray-600 dark:text-gray-400">
          Prévisualisation de la couleur
        </div>
      </div>

      {/* HEX Input */}
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border-2 border-gray-200 dark:border-gray-700">
        <label className="block text-sm font-medium mb-2">HEX</label>
        <div className="flex gap-2">
          <input
            type="text"
            value={hex}
            onChange={(e) => updateFromHex(e.target.value)}
            className="flex-1 p-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 font-mono"
            placeholder="#3b82f6"
          />
          <button
            onClick={() => copyToClipboard(hex, "HEX")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 rounded-lg transition-colors"
          >
            📋
          </button>
        </div>
      </div>

      {/* RGB Input */}
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border-2 border-gray-200 dark:border-gray-700">
        <label className="block text-sm font-medium mb-3">RGB</label>
        <div className="space-y-3">
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm text-red-600 dark:text-red-400 font-medium">R: {rgb.r}</span>
            </div>
            <input
              type="range"
              min="0"
              max="255"
              value={rgb.r}
              onChange={(e) => updateFromRgb(parseInt(e.target.value), rgb.g, rgb.b)}
              className="w-full h-2 bg-red-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm text-green-600 dark:text-green-400 font-medium">G: {rgb.g}</span>
            </div>
            <input
              type="range"
              min="0"
              max="255"
              value={rgb.g}
              onChange={(e) => updateFromRgb(rgb.r, parseInt(e.target.value), rgb.b)}
              className="w-full h-2 bg-green-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">B: {rgb.b}</span>
            </div>
            <input
              type="range"
              min="0"
              max="255"
              value={rgb.b}
              onChange={(e) => updateFromRgb(rgb.r, rgb.g, parseInt(e.target.value))}
              className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>
          <button
            onClick={() => copyToClipboard(`rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`, "RGB")}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-colors font-mono text-sm"
          >
            📋 rgb({rgb.r}, {rgb.g}, {rgb.b})
          </button>
        </div>
      </div>

      {/* HSL Input */}
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border-2 border-gray-200 dark:border-gray-700">
        <label className="block text-sm font-medium mb-3">HSL</label>
        <div className="space-y-3">
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium">Teinte (H): {hsl.h}°</span>
            </div>
            <input
              type="range"
              min="0"
              max="360"
              value={hsl.h}
              onChange={(e) => updateFromHsl(parseInt(e.target.value), hsl.s, hsl.l)}
              className="w-full h-2 rounded-lg appearance-none cursor-pointer"
              style={{
                background: "linear-gradient(to right, hsl(0, 100%, 50%), hsl(60, 100%, 50%), hsl(120, 100%, 50%), hsl(180, 100%, 50%), hsl(240, 100%, 50%), hsl(300, 100%, 50%), hsl(360, 100%, 50%))"
              }}
            />
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium">Saturation (S): {hsl.s}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={hsl.s}
              onChange={(e) => updateFromHsl(hsl.h, parseInt(e.target.value), hsl.l)}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium">Luminosité (L): {hsl.l}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={hsl.l}
              onChange={(e) => updateFromHsl(hsl.h, hsl.s, parseInt(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>
          <button
            onClick={() => copyToClipboard(`hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`, "HSL")}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-colors font-mono text-sm"
          >
            📋 hsl({hsl.h}, {hsl.s}%, {hsl.l}%)
          </button>
        </div>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
        <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
          <FontAwesomeIcon icon={faLightbulb} className="inline" /> Formats de couleurs
        </h3>
        <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
          <li>• <strong>HEX</strong>: Format hexadécimal (#RRGGBB), le plus utilisé en web</li>
          <li>• <strong>RGB</strong>: Rouge, Vert, Bleu (0-255 pour chaque canal)</li>
          <li>• <strong>HSL</strong>: Teinte, Saturation, Luminosité (plus intuitif pour ajuster les couleurs)</li>
        </ul>
      </div>
    </div>
  );
}
