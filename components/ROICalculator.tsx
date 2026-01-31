"use client";

import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar, faChartLine, faLightbulb } from '@fortawesome/free-solid-svg-icons';

export default function ROICalculator() {
  const [initialInvestment, setInitialInvestment] = useState<string>("");
  const [finalValue, setFinalValue] = useState<string>("");
  const [roi, setRoi] = useState<number>(0);
  const [gainLoss, setGainLoss] = useState<number>(0);

  const handleCalculate = () => {
    const initial = parseFloat(initialInvestment);
    const final = parseFloat(finalValue);

    if (!isNaN(initial) && !isNaN(final) && initial > 0) {
      const gain = final - initial;
      const roiValue = (gain / initial) * 100;
      setGainLoss(gain);
      setRoi(roiValue);
    } else {
      setGainLoss(0);
      setRoi(0);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(
      () => alert("Résultat copié!"),
      () => alert("Erreur lors de la copie.")
    );
  };

  const isProfit = gainLoss > 0;
  const isLoss = gainLoss < 0;

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2">
          Investissement initial (€)
        </label>
        <input
          type="number"
          value={initialInvestment}
          onChange={(e) => {
            setInitialInvestment(e.target.value);
            setTimeout(handleCalculate, 0);
          }}
          placeholder="10000"
          step="0.01"
          className="w-full px-4 py-3 text-xl border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">
          Valeur finale / Revenus (€)
        </label>
        <input
          type="number"
          value={finalValue}
          onChange={(e) => {
            setFinalValue(e.target.value);
            setTimeout(handleCalculate, 0);
          }}
          placeholder="15000"
          step="0.01"
          className="w-full px-4 py-3 text-xl border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
        />
      </div>

      {initialInvestment && finalValue && parseFloat(initialInvestment) > 0 && (
        <div className="space-y-3">
          <div className={`border rounded-lg p-6 ${
            isProfit
              ? "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800"
              : isLoss
              ? "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800"
              : "bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700"
          }`}>
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className={`text-sm ${
                  isProfit
                    ? "text-green-700 dark:text-green-300"
                    : isLoss
                    ? "text-red-700 dark:text-red-300"
                    : "text-gray-700 dark:text-gray-300"
                }`}>
                  Retour sur investissement (ROI)
                </p>
                <p className={`text-5xl font-bold ${
                  isProfit
                    ? "text-green-900 dark:text-green-100"
                    : isLoss
                    ? "text-red-900 dark:text-red-100"
                    : "text-gray-900 dark:text-gray-100"
                }`}>
                  {roi > 0 ? "+" : ""}{roi.toFixed(2)}%
                </p>
              </div>
              <button
                onClick={() => copyToClipboard(`ROI: ${roi.toFixed(2)}%`)}
                className={`px-4 py-2 text-white rounded-lg transition-colors ${
                  isProfit
                    ? "bg-green-600 hover:bg-green-700"
                    : isLoss
                    ? "bg-red-600 hover:bg-red-700"
                    : "bg-gray-600 hover:bg-gray-700"
                }`}
                title="Copier le ROI"
              >
                📋
              </button>
            </div>

            <div className={`pt-4 border-t ${
              isProfit
                ? "border-green-200 dark:border-green-800"
                : isLoss
                ? "border-red-200 dark:border-red-800"
                : "border-gray-200 dark:border-gray-700"
            }`}>
              <p className={`text-sm ${
                isProfit
                  ? "text-green-700 dark:text-green-300"
                  : isLoss
                  ? "text-red-700 dark:text-red-300"
                  : "text-gray-700 dark:text-gray-300"
              }`}>
                {isProfit ? "Gain" : isLoss ? "Perte" : "Résultat"}
              </p>
              <p className={`text-3xl font-bold ${
                isProfit
                  ? "text-green-900 dark:text-green-100"
                  : isLoss
                  ? "text-red-900 dark:text-red-100"
                  : "text-gray-900 dark:text-gray-100"
              }`}>
                {gainLoss > 0 ? "+" : ""}{gainLoss.toFixed(2)} €
              </p>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg p-4">
            <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">
              <FontAwesomeIcon icon={faChartBar} className="inline" /> Formule ROI
            </h4>
            <div className="text-sm space-y-2">
              <p className="font-mono bg-white dark:bg-gray-700 p-3 rounded border border-gray-300 dark:border-gray-600">
                ROI = ((Valeur finale - Investissement initial) / Investissement initial) × 100
              </p>
              <p className="font-mono bg-white dark:bg-gray-700 p-3 rounded border border-gray-300 dark:border-gray-600">
                ROI = (({parseFloat(finalValue).toFixed(2)} - {parseFloat(initialInvestment).toFixed(2)}) / {parseFloat(initialInvestment).toFixed(2)}) × 100
              </p>
              <p className="font-mono bg-white dark:bg-gray-700 p-3 rounded border border-gray-300 dark:border-gray-600">
                ROI = ({gainLoss.toFixed(2)} / {parseFloat(initialInvestment).toFixed(2)}) × 100 = {roi.toFixed(2)}%
              </p>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg p-4">
            <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">
              <FontAwesomeIcon icon={faChartLine} className="inline" /> Détails de l&apos;investissement
            </h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Investissement initial:</span>
                <span className="font-semibold">{parseFloat(initialInvestment).toFixed(2)} €</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Valeur finale:</span>
                <span className="font-semibold">{parseFloat(finalValue).toFixed(2)} €</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-gray-300 dark:border-gray-600">
                <span className="font-semibold">{isProfit ? "Gain net:" : "Perte nette:"}</span>
                <span className={`font-bold text-lg ${
                  isProfit ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"
                }`}>
                  {gainLoss > 0 ? "+" : ""}{gainLoss.toFixed(2)} €
                </span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">ROI:</span>
                <span className={`font-bold text-lg ${
                  isProfit ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"
                }`}>
                  {roi > 0 ? "+" : ""}{roi.toFixed(2)}%
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
        <h4 className="font-semibold mb-2 text-blue-900 dark:text-blue-100">
          <FontAwesomeIcon icon={faLightbulb} className="inline" /> Interprétation du ROI
        </h4>
        <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
          <li><strong>ROI positif:</strong> L&apos;investissement a généré des profits</li>
          <li><strong>ROI négatif:</strong> L&apos;investissement a généré des pertes</li>
          <li><strong>ROI = 0%:</strong> Pas de gain ni de perte (point mort)</li>
          <li><strong>ROI &gt; 100%:</strong> Le gain dépasse l&apos;investissement initial</li>
          <li>Le ROI est un indicateur clé pour comparer différents investissements</li>
        </ul>
      </div>
    </div>
  );
}
