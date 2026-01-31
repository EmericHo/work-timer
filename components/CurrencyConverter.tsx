"use client";

import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar, faExclamationTriangle, faLightbulb } from '@fortawesome/free-solid-svg-icons';

export default function CurrencyConverter() {
  const currencies = {
    EUR: 1,
    USD: 1.10,
    GBP: 0.86,
    JPY: 159,
    CHF: 0.95,
    CAD: 1.48,
    AUD: 1.65,
    CNY: 7.85,
  };

  const [fromCurrency, setFromCurrency] = useState<string>("EUR");
  const [toCurrency, setToCurrency] = useState<string>("USD");
  const [amount, setAmount] = useState<string>("");
  const [result, setResult] = useState<number>(0);

  const handleConvert = () => {
    if (!amount || isNaN(parseFloat(amount))) return;
    const amountValue = parseFloat(amount);
    const fromRate = currencies[fromCurrency as keyof typeof currencies];
    const toRate = currencies[toCurrency as keyof typeof currencies];
    const converted = (amountValue / fromRate) * toRate;
    setResult(converted);
  };

  const handleSwap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    if (amount) {
      const amountValue = parseFloat(amount);
      const fromRate = currencies[toCurrency as keyof typeof currencies];
      const toRate = currencies[fromCurrency as keyof typeof currencies];
      const converted = (amountValue / fromRate) * toRate;
      setResult(converted);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(
      () => alert("Montant copié!"),
      () => alert("Erreur lors de la copie.")
    );
  };

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2">Montant</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => {
            setAmount(e.target.value);
            const amountValue = parseFloat(e.target.value);
            if (!isNaN(amountValue)) {
              const fromRate = currencies[fromCurrency as keyof typeof currencies];
              const toRate = currencies[toCurrency as keyof typeof currencies];
              setResult((amountValue / fromRate) * toRate);
            }
          }}
          placeholder="0.00"
          step="0.01"
          className="w-full px-4 py-3 text-2xl border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
        />
      </div>

      <div className="grid grid-cols-[1fr,auto,1fr] gap-3 items-end">
        <div>
          <label className="block text-sm font-medium mb-2">De</label>
          <select
            value={fromCurrency}
            onChange={(e) => {
              setFromCurrency(e.target.value);
              if (amount) handleConvert();
            }}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
          >
            {Object.keys(currencies).map((curr) => (
              <option key={curr} value={curr}>
                {curr}
              </option>
            ))}
          </select>
        </div>

        <button
          onClick={handleSwap}
          className="px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-xl"
          title="Inverser les devises"
        >
          ⇄
        </button>

        <div>
          <label className="block text-sm font-medium mb-2">Vers</label>
          <select
            value={toCurrency}
            onChange={(e) => {
              setToCurrency(e.target.value);
              if (amount) handleConvert();
            }}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
          >
            {Object.keys(currencies).map((curr) => (
              <option key={curr} value={curr}>
                {curr}
              </option>
            ))}
          </select>
        </div>
      </div>

      {amount && parseFloat(amount) > 0 && (
        <div className="space-y-3">
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-blue-700 dark:text-blue-300">Résultat</p>
                <p className="text-4xl font-bold text-blue-900 dark:text-blue-100">
                  {result.toFixed(2)} {toCurrency}
                </p>
              </div>
              <button
                onClick={() => copyToClipboard(result.toFixed(2))}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                title="Copier le résultat"
              >
                📋
              </button>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg p-4">
            <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">
              <FontAwesomeIcon icon={faChartBar} className="inline" /> Formule de conversion
            </h4>
            <div className="text-sm space-y-2">
              <p className="font-mono bg-white dark:bg-gray-700 p-3 rounded border border-gray-300 dark:border-gray-600">
                {amount} {fromCurrency} × {(currencies[toCurrency as keyof typeof currencies] / currencies[fromCurrency as keyof typeof currencies]).toFixed(4)} = {result.toFixed(2)} {toCurrency}
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                1 {fromCurrency} = {(currencies[toCurrency as keyof typeof currencies] / currencies[fromCurrency as keyof typeof currencies]).toFixed(4)} {toCurrency}
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                1 {toCurrency} = {(currencies[fromCurrency as keyof typeof currencies] / currencies[toCurrency as keyof typeof currencies]).toFixed(4)} {fromCurrency}
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
        <h4 className="font-semibold mb-2 text-yellow-900 dark:text-yellow-100">
          <FontAwesomeIcon icon={faExclamationTriangle} className="inline" /> Note importante
        </h4>
        <p className="text-sm text-yellow-800 dark:text-yellow-200">
          Taux de change approximatifs, non contractuels. Ces taux sont fournis à titre indicatif et peuvent ne pas refléter les taux réels du marché. Pour des transactions réelles, consultez votre banque ou un service de change officiel.
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
        <h4 className="font-semibold mb-2 text-blue-900 dark:text-blue-100">
          <FontAwesomeIcon icon={faLightbulb} className="inline" /> À propos des devises
        </h4>
        <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
          <li><strong>EUR:</strong> Euro - Union européenne</li>
          <li><strong>USD:</strong> Dollar américain - États-Unis</li>
          <li><strong>GBP:</strong> Livre sterling - Royaume-Uni</li>
          <li><strong>JPY:</strong> Yen - Japon</li>
          <li><strong>CHF:</strong> Franc suisse - Suisse</li>
          <li><strong>CAD:</strong> Dollar canadien - Canada</li>
          <li><strong>AUD:</strong> Dollar australien - Australie</li>
          <li><strong>CNY:</strong> Yuan - Chine</li>
        </ul>
      </div>
    </div>
  );
}
