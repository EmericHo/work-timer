"use client";

import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar, faLightbulb } from '@fortawesome/free-solid-svg-icons';

export default function TipCalculator() {
  const [billAmount, setBillAmount] = useState<string>("");
  const [tipPercentage, setTipPercentage] = useState<number>(15);
  const [numberOfPeople, setNumberOfPeople] = useState<number>(1);
  const [tipAmount, setTipAmount] = useState<number>(0);
  const [totalAmount, setTotalAmount] = useState<number>(0);
  const [perPersonAmount, setPerPersonAmount] = useState<number>(0);

  useEffect(() => {
    const bill = parseFloat(billAmount) || 0;
    const tip = (bill * tipPercentage) / 100;
    const total = bill + tip;
    const perPerson = total / numberOfPeople;

    setTipAmount(tip);
    setTotalAmount(total);
    setPerPersonAmount(perPerson);
  }, [billAmount, tipPercentage, numberOfPeople]);

  const quickTipButtons = [10, 15, 18, 20, 25, 30];

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(
      () => alert("Montant copié!"),
      () => alert("Erreur lors de la copie.")
    );
  };

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2">
          Montant de l&apos;addition (€)
        </label>
        <input
          type="number"
          value={billAmount}
          onChange={(e) => setBillAmount(e.target.value)}
          placeholder="0.00"
          step="0.01"
          min="0"
          className="w-full px-4 py-3 text-2xl border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
        />
      </div>

      <div>
        <div className="flex items-center justify-between mb-2">
          <label className="block text-sm font-medium">
            Pourboire ({tipPercentage}%)
          </label>
          <span className="text-lg font-bold text-blue-600 dark:text-blue-400">
            {tipAmount.toFixed(2)} €
          </span>
        </div>
        <input
          type="range"
          min="0"
          max="30"
          step="1"
          value={tipPercentage}
          onChange={(e) => setTipPercentage(Number(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
        />
        <div className="grid grid-cols-6 gap-2 mt-3">
          {quickTipButtons.map((percent) => (
            <button
              key={percent}
              onClick={() => setTipPercentage(percent)}
              className={`px-2 py-2 rounded-lg font-semibold text-sm transition-colors ${
                tipPercentage === percent
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
              }`}
            >
              {percent}%
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">
          Nombre de personnes
        </label>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setNumberOfPeople(Math.max(1, numberOfPeople - 1))}
            className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors font-bold text-xl"
          >
            -
          </button>
          <input
            type="number"
            value={numberOfPeople}
            onChange={(e) => setNumberOfPeople(Math.max(1, Number(e.target.value)))}
            min="1"
            className="flex-1 px-4 py-2 text-center text-2xl border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 font-bold"
          />
          <button
            onClick={() => setNumberOfPeople(numberOfPeople + 1)}
            className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors font-bold text-xl"
          >
            +
          </button>
        </div>
      </div>

      {billAmount && parseFloat(billAmount) > 0 && (
        <div className="space-y-3">
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-sm text-blue-700 dark:text-blue-300">
                  Total avec pourboire
                </p>
                <p className="text-4xl font-bold text-blue-900 dark:text-blue-100">
                  {totalAmount.toFixed(2)} €
                </p>
              </div>
              <button
                onClick={() => copyToClipboard(totalAmount.toFixed(2))}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                title="Copier le total"
              >
                📋
              </button>
            </div>

            {numberOfPeople > 1 && (
              <div className="pt-4 border-t border-blue-200 dark:border-blue-800">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-blue-700 dark:text-blue-300">
                      Par personne
                    </p>
                    <p className="text-3xl font-bold text-blue-900 dark:text-blue-100">
                      {perPersonAmount.toFixed(2)} €
                    </p>
                  </div>
                  <button
                    onClick={() => copyToClipboard(perPersonAmount.toFixed(2))}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    title="Copier le montant par personne"
                  >
                    📋
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg p-4">
            <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">
              <FontAwesomeIcon icon={faChartBar} className="inline" /> Détail
            </h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Addition:</span>
                <span className="font-semibold">{parseFloat(billAmount).toFixed(2)} €</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">
                  Pourboire ({tipPercentage}%):
                </span>
                <span className="font-semibold text-green-600 dark:text-green-400">
                  +{tipAmount.toFixed(2)} €
                </span>
              </div>
              <div className="flex justify-between pt-2 border-t border-gray-300 dark:border-gray-600">
                <span className="font-semibold">Total:</span>
                <span className="font-bold text-lg">{totalAmount.toFixed(2)} €</span>
              </div>
              {numberOfPeople > 1 && (
                <div className="flex justify-between pt-2 border-t border-gray-300 dark:border-gray-600">
                  <span className="font-semibold">Par personne ({numberOfPeople}):</span>
                  <span className="font-bold text-lg">{perPersonAmount.toFixed(2)} €</span>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
        <h4 className="font-semibold mb-2 text-blue-900 dark:text-blue-100">
          <FontAwesomeIcon icon={faLightbulb} className="inline" /> Guide des pourboires
        </h4>
        <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
          <li><strong>10-15%:</strong> Service standard, satisfaisant</li>
          <li><strong>15-18%:</strong> Bon service, recommandé dans la plupart des cas</li>
          <li><strong>18-20%:</strong> Très bon service, expérience agréable</li>
          <li><strong>20-30%:</strong> Service exceptionnel ou grande table</li>
          <li>Le pourboire reste un geste volontaire pour remercier le service</li>
        </ul>
      </div>
    </div>
  );
}
