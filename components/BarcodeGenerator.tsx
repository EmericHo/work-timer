"use client";

import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

type BarcodeFormat = "Code128" | "EAN13" | "UPC" | "Code39";

export default function BarcodeGenerator() {
  const [text, setText] = useState<string>("");
  const [format, setFormat] = useState<BarcodeFormat>("Code128");
  const [width, setWidth] = useState<number>(2);
  const [height, setHeight] = useState<number>(100);
  const [barcode, setBarcode] = useState<string>("");
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const validateInput = (input: string, format: BarcodeFormat): boolean => {
    switch (format) {
      case "EAN13":
        return /^\d{13}$/.test(input);
      case "UPC":
        return /^\d{12}$/.test(input);
      case "Code39":
        return /^[A-Z0-9\-. $/+%]+$/.test(input);
      case "Code128":
        return input.length > 0;
      default:
        return true;
    }
  };

  const generateSimplifiedBarcode = () => {
    if (!text || !validateInput(text, format)) {
      let errorMsg = `Entrée invalide pour le format ${format}.`;
      if (format === "EAN13") errorMsg += " EAN13 nécessite exactement 13 chiffres.";
      if (format === "UPC") errorMsg += " UPC nécessite exactement 12 chiffres.";
      if (format === "Code39") errorMsg += " Code39 accepte les lettres majuscules, les chiffres et -.$/+%";
      alert(errorMsg);
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const barWidth = width;
    const barHeight = height;
    const numBars = text.length * 10;

    canvas.width = numBars * barWidth + 40;
    canvas.height = barHeight + 40;

    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "black";
    let x = 20;

    for (let i = 0; i < text.length; i++) {
      const charCode = text.charCodeAt(i);
      const pattern = charCode % 2 === 0 ? [1, 0, 1, 1, 0] : [1, 1, 0, 1, 0];

      for (let j = 0; j < pattern.length; j++) {
        if (pattern[j] === 1) {
          ctx.fillRect(x, 20, barWidth, barHeight);
        }
        x += barWidth * 2;
      }
    }

    ctx.fillStyle = "black";
    ctx.font = "14px monospace";
    ctx.textAlign = "center";
    ctx.fillText(text, canvas.width / 2, canvas.height - 10);

    setBarcode(canvas.toDataURL("image/png"));
  };

  const downloadBarcode = () => {
    if (!barcode) return;
    const link = document.createElement("a");
    link.href = barcode;
    link.download = `barcode-${format}-${text}.png`;
    link.click();
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Barcode Generator</h2>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Text/Number
        </label>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter text or number"
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Barcode Format
        </label>
        <select
          value={format}
          onChange={(e) => setFormat(e.target.value as BarcodeFormat)}
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
        >
          <option value="Code128">Code128</option>
          <option value="EAN13">EAN13 (13 digits)</option>
          <option value="UPC">UPC (12 digits)</option>
          <option value="Code39">Code39 (A-Z, 0-9, -.$/+%)</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Bar Width: {width}px
          </label>
          <input
            type="range"
            min="1"
            max="5"
            value={width}
            onChange={(e) => setWidth(Number(e.target.value))}
            className="w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Height: {height}px
          </label>
          <input
            type="range"
            min="50"
            max="200"
            value={height}
            onChange={(e) => setHeight(Number(e.target.value))}
            className="w-full"
          />
        </div>
      </div>

      <button
        onClick={generateSimplifiedBarcode}
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition-colors mb-6"
      >
        Generate Barcode
      </button>

      <canvas ref={canvasRef} className="hidden" />

      {barcode && (
        <div className="mb-6">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Generated Barcode</h3>
          <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-4 mb-4 bg-white flex justify-center">
            <img src={barcode} alt="Generated barcode" className="max-w-full h-auto" />
          </div>
          <button
            onClick={downloadBarcode}
            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md transition-colors"
          >
            Download as PNG
          </button>
        </div>
      )}

      <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
        <h3 className="font-semibold text-yellow-900 dark:text-yellow-300 mb-2"><FontAwesomeIcon icon={faExclamationTriangle} className="inline" /> Validation Notes</h3>
        <ul className="text-sm text-yellow-800 dark:text-yellow-300 list-disc list-inside space-y-1">
          <li>EAN13 requires exactly 13 digits</li>
          <li>UPC requires exactly 12 digits</li>
          <li>Code39 accepts uppercase letters, numbers, and special characters (-.$/+%)</li>
          <li>Code128 accepts any text input</li>
          <li>This is a simplified barcode generator for demonstration purposes</li>
        </ul>
      </div>
    </div>
  );
}
