"use client";

import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBalanceScale, faLightbulb, faRulerHorizontal, faSync, faTemperatureHigh } from '@fortawesome/free-solid-svg-icons';

type UnitCategory = "length" | "weight" | "temperature" | "volume";

interface ConversionUnit {
  label: string;
  toBase: (value: number) => number;
  fromBase: (value: number) => number;
}

const units: Record<UnitCategory, Record<string, ConversionUnit>> = {
  length: {
    km: { label: "Kilomètres (km)", toBase: (v) => v * 1000, fromBase: (v) => v / 1000 },
    m: { label: "Mètres (m)", toBase: (v) => v, fromBase: (v) => v },
    cm: { label: "Centimètres (cm)", toBase: (v) => v / 100, fromBase: (v) => v * 100 },
    mm: { label: "Millimètres (mm)", toBase: (v) => v / 1000, fromBase: (v) => v * 1000 },
    miles: { label: "Miles (mi)", toBase: (v) => v * 1609.344, fromBase: (v) => v / 1609.344 },
    feet: { label: "Pieds (ft)", toBase: (v) => v * 0.3048, fromBase: (v) => v / 0.3048 },
    inches: { label: "Pouces (in)", toBase: (v) => v * 0.0254, fromBase: (v) => v / 0.0254 },
  },
  weight: {
    kg: { label: "Kilogrammes (kg)", toBase: (v) => v, fromBase: (v) => v },
    g: { label: "Grammes (g)", toBase: (v) => v / 1000, fromBase: (v) => v * 1000 },
    lb: { label: "Livres (lb)", toBase: (v) => v * 0.453592, fromBase: (v) => v / 0.453592 },
    oz: { label: "Onces (oz)", toBase: (v) => v * 0.0283495, fromBase: (v) => v / 0.0283495 },
  },
  temperature: {
    celsius: {
      label: "Celsius (°C)",
      toBase: (v) => v,
      fromBase: (v) => v,
    },
    fahrenheit: {
      label: "Fahrenheit (°F)",
      toBase: (v) => ((v - 32) * 5) / 9,
      fromBase: (v) => (v * 9) / 5 + 32,
    },
    kelvin: {
      label: "Kelvin (K)",
      toBase: (v) => v - 273.15,
      fromBase: (v) => v + 273.15,
    },
  },
  volume: {
    liters: { label: "Litres (L)", toBase: (v) => v, fromBase: (v) => v },
    ml: { label: "Millilitres (mL)", toBase: (v) => v / 1000, fromBase: (v) => v * 1000 },
    gallons: { label: "Gallons (gal)", toBase: (v) => v * 3.78541, fromBase: (v) => v / 3.78541 },
    cups: { label: "Tasses (cup)", toBase: (v) => v * 0.236588, fromBase: (v) => v / 0.236588 },
  },
};

export default function UnitConverter() {
  const [category, setCategory] = useState<UnitCategory>("length");
  const [fromUnit, setFromUnit] = useState<string>("m");
  const [toUnit, setToUnit] = useState<string>("feet");
  const [inputValue, setInputValue] = useState<string>("");
  const [result, setResult] = useState<string>("");

  const handleConvert = () => {
    const value = parseFloat(inputValue);
    if (isNaN(value)) {
      setResult("");
      return;
    }

    const fromConversion = units[category][fromUnit];
    const toConversion = units[category][toUnit];

    const baseValue = fromConversion.toBase(value);
    const convertedValue = toConversion.fromBase(baseValue);

    setResult(convertedValue.toFixed(6).replace(/\.?0+$/, ""));
  };

  const handleCategoryChange = (newCategory: UnitCategory) => {
    setCategory(newCategory);
    const unitKeys = Object.keys(units[newCategory]);
    setFromUnit(unitKeys[0]);
    setToUnit(unitKeys[1] || unitKeys[0]);
    setResult("");
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(result).then(
      () => alert("Résultat copié!"),
      () => alert("Erreur lors de la copie.")
    );
  };

  const swapUnits = () => {
    const tempUnit = fromUnit;
    setFromUnit(toUnit);
    setToUnit(tempUnit);
    
    // Swap values and recalculate
    if (result) {
      setInputValue(result);
      // Calculate reverse conversion
      const value = parseFloat(result);
      if (!isNaN(value)) {
        const fromConversion = units[category][toUnit]; // Note: using swapped units
        const toConversion = units[category][tempUnit];
        const baseValue = fromConversion.toBase(value);
        const convertedValue = toConversion.fromBase(baseValue);
        setResult(convertedValue.toFixed(6).replace(/\.?0+$/, ""));
      }
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2">Catégorie</label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {(["length", "weight", "temperature", "volume"] as UnitCategory[]).map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                category === cat
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
              }`}
            >
              {cat === "length"
                ? <><FontAwesomeIcon icon={faRulerHorizontal} className="inline" /> Longueur</>
                : cat === "weight"
                ? <><FontAwesomeIcon icon={faBalanceScale} className="inline" /> Poids</>
                : cat === "temperature"
                ? <><FontAwesomeIcon icon={faTemperatureHigh} className="inline" /> Température</>
                : "🥤 Volume"}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">De</label>
          <select
            value={fromUnit}
            onChange={(e) => setFromUnit(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
          >
            {Object.entries(units[category]).map(([key, unit]) => (
              <option key={key} value={key}>
                {unit.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Vers</label>
          <select
            value={toUnit}
            onChange={(e) => setToUnit(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
          >
            {Object.entries(units[category]).map(([key, unit]) => (
              <option key={key} value={key}>
                {unit.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <div className="flex-1">
          <label className="block text-sm font-medium mb-2">Valeur</label>
          <input
            type="number"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleConvert()}
            placeholder="Entrez une valeur"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
          />
        </div>
        <button
          onClick={swapUnits}
          className="mt-7 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
          title="Inverser les unités"
        >
          <FontAwesomeIcon icon={faSync} className="inline" />
        </button>
      </div>

      <button
        onClick={handleConvert}
        className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
      >
        <FontAwesomeIcon icon={faSync} className="inline" /> Convertir
      </button>

      {result && (
        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-green-700 dark:text-green-300 mb-1">
                Résultat
              </p>
              <p className="text-3xl font-bold text-green-900 dark:text-green-100">
                {result} {units[category][toUnit].label.match(/\(([^)]+)\)/)?.[1]}
              </p>
            </div>
            <button
              onClick={copyToClipboard}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              title="Copier le résultat"
            >
              📋
            </button>
          </div>
        </div>
      )}

      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
        <h4 className="font-semibold mb-2 text-blue-900 dark:text-blue-100">
          <FontAwesomeIcon icon={faLightbulb} className="inline" /> Conseils d&apos;utilisation
        </h4>
        <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
          <li>Sélectionnez la catégorie d&apos;unité que vous souhaitez convertir</li>
          <li>Choisissez les unités source et cible</li>
          <li>Utilisez le bouton <FontAwesomeIcon icon={faSync} className="inline" /> pour inverser rapidement les unités</li>
          <li>Appuyez sur Entrée ou cliquez sur Convertir pour obtenir le résultat</li>
        </ul>
      </div>
    </div>
  );
}
