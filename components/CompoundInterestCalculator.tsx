"use client";

import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar, faChartLine, faLightbulb } from '@fortawesome/free-solid-svg-icons';

export default function CompoundInterestCalculator() {
  const [principal, setPrincipal] = useState<string>("");
  const [rate, setRate] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const [frequency, setFrequency] = useState<number>(1);
  const [finalAmount, setFinalAmount] = useState<number>(0);
  const [totalInterest, setTotalInterest] = useState<number>(0);
  const [yearlyGrowth, setYearlyGrowth] = useState<Array<{year: number, amount: number}>>([]);

  const frequencies = {
    1: "Annuellement",
    2: "Semestriellement",
    4: "Trimestriellement",
    12: "Mensuellement",
    365: "Quotidiennement",
  };

  const handleCalculate = () => {
    const p = parseFloat(principal);
    const r = parseFloat(rate) / 100;
    const t = parseFloat(time);
    const n = frequency;

    if (isNaN(p) || isNaN(r) || isNaN(t) || p <= 0 || t <= 0) {
      setFinalAmount(0);
      setTotalInterest(0);
      setYearlyGrowth([]);
      return;
    }

    const final = p * Math.pow(1 + r / n, n * t);
    const interest = final - p;

    setFinalAmount(final);
    setTotalInterest(interest);

    const growth: Array<{year: number, amount: number}> = [];
    for (let year = 1; year <= Math.min(t, 20); year++) {
      const amount = p * Math.pow(1 + r / n, n * year);
      growth.push({ year, amount });
    }
    setYearlyGrowth(growth);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(
      () => alert("Résultat copié!"),
      () => alert("Erreur lors de la copie.")
    );
  };

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2">
          Capital initial (€)
        </label>
        <input
          type="number"
          value={principal}
          onChange={(e) => {
            setPrincipal(e.target.value);
            setTimeout(handleCalculate, 0);
          }}
          placeholder="10000"
          step="0.01"
          className="w-full px-4 py-3 text-xl border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">
          Taux d&apos;intérêt annuel (%)
        </label>
        <input
          type="number"
          value={rate}
          onChange={(e) => {
            setRate(e.target.value);
            setTimeout(handleCalculate, 0);
          }}
          placeholder="5"
          step="0.1"
          className="w-full px-4 py-3 text-xl border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">
          Période (années)
        </label>
        <input
          type="number"
          value={time}
          onChange={(e) => {
            setTime(e.target.value);
            setTimeout(handleCalculate, 0);
          }}
          placeholder="10"
          step="1"
          min="1"
          className="w-full px-4 py-3 text-xl border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">
          Fréquence de capitalisation
        </label>
        <select
          value={frequency}
          onChange={(e) => {
            setFrequency(Number(e.target.value));
            setTimeout(handleCalculate, 0);
          }}
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
        >
          {Object.entries(frequencies).map(([value, label]) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </div>

      {principal && rate && time && parseFloat(principal) > 0 && parseFloat(time) > 0 && (
        <div className="space-y-3">
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-sm text-green-700 dark:text-green-300">
                  Montant final
                </p>
                <p className="text-4xl font-bold text-green-900 dark:text-green-100">
                  {finalAmount.toFixed(2)} €
                </p>
              </div>
              <button
                onClick={() => copyToClipboard(finalAmount.toFixed(2))}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                title="Copier le montant"
              >
                📋
              </button>
            </div>

            <div className="pt-4 border-t border-green-200 dark:border-green-800">
              <p className="text-sm text-green-700 dark:text-green-300">
                Intérêts totaux gagnés
              </p>
              <p className="text-3xl font-bold text-green-900 dark:text-green-100">
                +{totalInterest.toFixed(2)} €
              </p>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg p-4">
            <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">
              <FontAwesomeIcon icon={faChartBar} className="inline" /> Formule des intérêts composés
            </h4>
            <div className="text-sm space-y-2">
              <p className="font-mono bg-white dark:bg-gray-700 p-3 rounded border border-gray-300 dark:border-gray-600 text-xs">
                A = P × (1 + r/n)^(n×t)
              </p>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>
                  <span className="text-gray-600 dark:text-gray-400">A =</span> Montant final
                </div>
                <div>
                  <span className="text-gray-600 dark:text-gray-400">P =</span> Capital initial
                </div>
                <div>
                  <span className="text-gray-600 dark:text-gray-400">r =</span> Taux annuel
                </div>
                <div>
                  <span className="text-gray-600 dark:text-gray-400">n =</span> Fréquence
                </div>
                <div className="col-span-2">
                  <span className="text-gray-600 dark:text-gray-400">t =</span> Temps (années)
                </div>
              </div>
              <p className="font-mono bg-white dark:bg-gray-700 p-3 rounded border border-gray-300 dark:border-gray-600 text-xs break-all">
                {finalAmount.toFixed(2)} = {parseFloat(principal).toFixed(2)} × (1 + {parseFloat(rate).toFixed(2)}/100/{frequency})^({frequency}×{parseFloat(time)})
              </p>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg p-4">
            <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">
              <FontAwesomeIcon icon={faChartLine} className="inline" /> Croissance par année
            </h4>
            <div className="space-y-2 text-sm max-h-64 overflow-y-auto">
              <div className="grid grid-cols-3 gap-2 font-semibold pb-2 border-b border-gray-300 dark:border-gray-600 sticky top-0 bg-gray-50 dark:bg-gray-800">
                <span>Année</span>
                <span>Montant</span>
                <span>Intérêts</span>
              </div>
              {yearlyGrowth.map(({ year, amount }) => (
                <div key={year} className="grid grid-cols-3 gap-2">
                  <span className="text-gray-600 dark:text-gray-400">{year}</span>
                  <span className="font-semibold">{amount.toFixed(2)} €</span>
                  <span className="text-green-600 dark:text-green-400">
                    +{(amount - parseFloat(principal)).toFixed(2)} €
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg p-4">
            <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">
              📋 Récapitulatif
            </h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Capital initial:</span>
                <span className="font-semibold">{parseFloat(principal).toFixed(2)} €</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Taux annuel:</span>
                <span className="font-semibold">{parseFloat(rate).toFixed(2)}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Période:</span>
                <span className="font-semibold">{parseFloat(time)} ans</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Capitalisation:</span>
                <span className="font-semibold">{frequencies[frequency as keyof typeof frequencies]}</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-gray-300 dark:border-gray-600">
                <span className="font-semibold">Intérêts gagnés:</span>
                <span className="font-bold text-lg text-green-600 dark:text-green-400">
                  +{totalInterest.toFixed(2)} €
                </span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Montant final:</span>
                <span className="font-bold text-lg">{finalAmount.toFixed(2)} €</span>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
        <h4 className="font-semibold mb-2 text-blue-900 dark:text-blue-100">
          <FontAwesomeIcon icon={faLightbulb} className="inline" /> Les intérêts composés
        </h4>
        <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
          <li>Les intérêts composés sont les intérêts calculés sur le capital initial et les intérêts accumulés</li>
          <li>Plus la fréquence de capitalisation est élevée, plus le rendement est important</li>
          <li>Le temps est un facteur crucial : plus la période est longue, plus l&apos;effet est significatif</li>
          <li>C&apos;est le principe de &quot;l&apos;effet boule de neige&quot; en finance</li>
        </ul>
      </div>
    </div>
  );
}
