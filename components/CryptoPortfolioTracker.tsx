"use client";

import { useState, useEffect } from "react";

interface CryptoHolding {
  id: string;
  crypto: string;
  amount: number;
  purchasePrice: number;
  currentPrice: number;
}

const STORAGE_KEY = "crypto-portfolio-data";

const CRYPTO_OPTIONS = [
  "Bitcoin (BTC)",
  "Ethereum (ETH)",
  "BNB (BNB)",
  "Cardano (ADA)",
  "Solana (SOL)",
  "XRP (XRP)",
  "Polkadot (DOT)",
  "Dogecoin (DOGE)",
  "Avalanche (AVAX)",
  "Polygon (MATIC)",
  "Chainlink (LINK)",
  "Litecoin (LTC)",
  "Uniswap (UNI)",
  "Cosmos (ATOM)",
  "Algorand (ALGO)",
];

export default function CryptoPortfolioTracker() {
  const [holdings, setHoldings] = useState<CryptoHolding[]>([]);
  const [formData, setFormData] = useState({
    crypto: CRYPTO_OPTIONS[0],
    amount: "",
    purchasePrice: "",
    currentPrice: "",
  });
  const [editingId, setEditingId] = useState<string | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setHoldings(parsed);
      } catch (e) {
        console.error("Error loading crypto portfolio data:", e);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(holdings));
  }, [holdings]);

  const addHolding = () => {
    if (!formData.amount || !formData.purchasePrice || !formData.currentPrice) {
      return;
    }

    const amount = parseFloat(formData.amount);
    const purchasePrice = parseFloat(formData.purchasePrice);
    const currentPrice = parseFloat(formData.currentPrice);

    if (isNaN(amount) || isNaN(purchasePrice) || isNaN(currentPrice) || amount <= 0 || purchasePrice < 0 || currentPrice < 0) {
      return;
    }

    const newHolding: CryptoHolding = {
      id: Date.now().toString(),
      crypto: formData.crypto,
      amount,
      purchasePrice,
      currentPrice,
    };

    setHoldings((prev) => [...prev, newHolding]);
    setFormData({
      crypto: CRYPTO_OPTIONS[0],
      amount: "",
      purchasePrice: "",
      currentPrice: "",
    });
  };

  const deleteHolding = (id: string) => {
    setHoldings((prev) => prev.filter((h) => h.id !== id));
  };

  const startEdit = (holding: CryptoHolding) => {
    setEditingId(holding.id);
    setFormData({
      crypto: holding.crypto,
      amount: holding.amount.toString(),
      purchasePrice: holding.purchasePrice.toString(),
      currentPrice: holding.currentPrice.toString(),
    });
  };

  const updateHolding = () => {
    if (!editingId || !formData.amount || !formData.purchasePrice || !formData.currentPrice) {
      return;
    }

    const amount = parseFloat(formData.amount);
    const purchasePrice = parseFloat(formData.purchasePrice);
    const currentPrice = parseFloat(formData.currentPrice);

    if (isNaN(amount) || isNaN(purchasePrice) || isNaN(currentPrice) || amount <= 0 || purchasePrice < 0 || currentPrice < 0) {
      return;
    }

    setHoldings((prev) =>
      prev.map((h) =>
        h.id === editingId
          ? { ...h, crypto: formData.crypto, amount, purchasePrice, currentPrice }
          : h
      )
    );

    setEditingId(null);
    setFormData({
      crypto: CRYPTO_OPTIONS[0],
      amount: "",
      purchasePrice: "",
      currentPrice: "",
    });
  };

  const cancelEdit = () => {
    setEditingId(null);
    setFormData({
      crypto: CRYPTO_OPTIONS[0],
      amount: "",
      purchasePrice: "",
      currentPrice: "",
    });
  };

  const totalInvested = holdings.reduce(
    (sum, h) => sum + h.amount * h.purchasePrice,
    0
  );

  const currentValue = holdings.reduce(
    (sum, h) => sum + h.amount * h.currentPrice,
    0
  );

  const totalProfitLoss = currentValue - totalInvested;
  const totalProfitLossPercent = totalInvested > 0 ? (totalProfitLoss / totalInvested) * 100 : 0;

  const exportToCSV = () => {
    const headers = ["Crypto", "Quantité", "Prix d'achat (€)", "Prix actuel (€)", "Valeur d'achat (€)", "Valeur actuelle (€)", "Profit/Perte (€)", "Profit/Perte (%)"];
    const rows = holdings.map((h) => {
      const purchaseValue = h.amount * h.purchasePrice;
      const currentVal = h.amount * h.currentPrice;
      const profitLoss = currentVal - purchaseValue;
      const profitLossPercent = purchaseValue > 0 ? (profitLoss / purchaseValue) * 100 : 0;

      return [
        h.crypto,
        h.amount,
        h.purchasePrice.toFixed(2),
        h.currentPrice.toFixed(2),
        purchaseValue.toFixed(2),
        currentVal.toFixed(2),
        profitLoss.toFixed(2),
        profitLossPercent.toFixed(2) + "%",
      ];
    });

    const csvContent = [
      headers.join(","),
      ...rows.map((row) => row.join(",")),
      "",
      `Total investi,${totalInvested.toFixed(2)}€`,
      `Valeur actuelle,${currentValue.toFixed(2)}€`,
      `Profit/Perte total,${totalProfitLoss.toFixed(2)}€ (${totalProfitLossPercent.toFixed(2)}%)`,
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", `crypto-portfolio-${new Date().toISOString().split("T")[0]}.csv`);
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const clearAll = () => {
    if (confirm("Êtes-vous sûr de vouloir effacer tout votre portfolio ?")) {
      setHoldings([]);
    }
  };

  return (
    <div className="space-y-6">
      {/* Form */}
      <div className="bg-gray-50 dark:bg-gray-700 p-4 sm:p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          {editingId ? "✏️ Modifier une position" : "➕ Ajouter une position crypto"}
        </h3>
        
        <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-300 dark:border-yellow-700 p-3 rounded-lg mb-4">
          <p className="text-sm text-yellow-800 dark:text-yellow-300">
            ⚠️ <strong>Note importante :</strong> Les prix doivent être saisis manuellement. Mettez à jour les prix actuels régulièrement pour un suivi précis de votre portfolio.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Cryptomonnaie
            </label>
            <select
              value={formData.crypto}
              onChange={(e) => setFormData({ ...formData, crypto: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
            >
              {CRYPTO_OPTIONS.map((crypto) => (
                <option key={crypto} value={crypto}>
                  {crypto}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Quantité détenue
            </label>
            <input
              type="number"
              step="any"
              min="0"
              value={formData.amount}
              onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
              placeholder="Ex: 0.5"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Prix d&apos;achat unitaire (€)
            </label>
            <input
              type="number"
              step="any"
              min="0"
              value={formData.purchasePrice}
              onChange={(e) => setFormData({ ...formData, purchasePrice: e.target.value })}
              placeholder="Ex: 35000"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Prix actuel unitaire (€)
            </label>
            <input
              type="number"
              step="any"
              min="0"
              value={formData.currentPrice}
              onChange={(e) => setFormData({ ...formData, currentPrice: e.target.value })}
              placeholder="Ex: 40000"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
            />
          </div>
        </div>

        <div className="flex gap-2 flex-wrap">
          {editingId ? (
            <>
              <button
                onClick={updateHolding}
                className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors"
              >
                ✓ Mettre à jour
              </button>
              <button
                onClick={cancelEdit}
                className="px-6 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg font-medium transition-colors"
              >
                ✗ Annuler
              </button>
            </>
          ) : (
            <button
              onClick={addHolding}
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
            >
              ➕ Ajouter au portfolio
            </button>
          )}
        </div>
      </div>

      {/* Summary Metrics */}
      {holdings.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-300 dark:border-blue-700">
            <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">💰 Total investi</div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">
              {totalInvested.toFixed(2)} €
            </div>
          </div>

          <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-300 dark:border-purple-700">
            <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">📊 Valeur actuelle</div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">
              {currentValue.toFixed(2)} €
            </div>
          </div>

          <div className={`p-4 rounded-lg border ${
            totalProfitLoss >= 0
              ? "bg-green-50 dark:bg-green-900/20 border-green-300 dark:border-green-700"
              : "bg-red-50 dark:bg-red-900/20 border-red-300 dark:border-red-700"
          }`}>
            <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
              {totalProfitLoss >= 0 ? "📈 Profit total" : "📉 Perte totale"}
            </div>
            <div className={`text-2xl font-bold ${
              totalProfitLoss >= 0 ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"
            }`}>
              {totalProfitLoss >= 0 ? "+" : ""}{totalProfitLoss.toFixed(2)} €
              <span className="text-lg ml-2">
                ({totalProfitLoss >= 0 ? "+" : ""}{totalProfitLossPercent.toFixed(2)}%)
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Holdings Table */}
      {holdings.length > 0 ? (
        <>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-100 dark:bg-gray-700">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">Crypto</th>
                  <th className="px-4 py-3 text-right font-semibold text-gray-900 dark:text-white">Quantité</th>
                  <th className="px-4 py-3 text-right font-semibold text-gray-900 dark:text-white">Valeur d&apos;achat</th>
                  <th className="px-4 py-3 text-right font-semibold text-gray-900 dark:text-white">Valeur actuelle</th>
                  <th className="px-4 py-3 text-right font-semibold text-gray-900 dark:text-white">Profit/Perte</th>
                  <th className="px-4 py-3 text-center font-semibold text-gray-900 dark:text-white">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {holdings.map((holding) => {
                  const purchaseValue = holding.amount * holding.purchasePrice;
                  const currentVal = holding.amount * holding.currentPrice;
                  const profitLoss = currentVal - purchaseValue;
                  const profitLossPercent = purchaseValue > 0 ? (profitLoss / purchaseValue) * 100 : 0;

                  return (
                    <tr key={holding.id} className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-750">
                      <td className="px-4 py-3 font-medium text-gray-900 dark:text-white">
                        {holding.crypto}
                      </td>
                      <td className="px-4 py-3 text-right text-gray-700 dark:text-gray-300">
                        {holding.amount}
                      </td>
                      <td className="px-4 py-3 text-right text-gray-700 dark:text-gray-300">
                        {purchaseValue.toFixed(2)} €
                        <div className="text-xs text-gray-500">
                          ({holding.purchasePrice.toFixed(2)} €/unité)
                        </div>
                      </td>
                      <td className="px-4 py-3 text-right text-gray-700 dark:text-gray-300">
                        {currentVal.toFixed(2)} €
                        <div className="text-xs text-gray-500">
                          ({holding.currentPrice.toFixed(2)} €/unité)
                        </div>
                      </td>
                      <td className={`px-4 py-3 text-right font-semibold ${
                        profitLoss >= 0 ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"
                      }`}>
                        {profitLoss >= 0 ? "+" : ""}{profitLoss.toFixed(2)} €
                        <div className="text-xs">
                          ({profitLoss >= 0 ? "+" : ""}{profitLossPercent.toFixed(2)}%)
                        </div>
                      </td>
                      <td className="px-4 py-3 text-center">
                        <div className="flex gap-2 justify-center">
                          <button
                            onClick={() => startEdit(holding)}
                            className="px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white text-xs rounded transition-colors"
                          >
                            ✏️ Modifier
                          </button>
                          <button
                            onClick={() => deleteHolding(holding.id)}
                            className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white text-xs rounded transition-colors"
                          >
                            🗑️ Supprimer
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="flex gap-2 flex-wrap justify-end">
            <button
              onClick={exportToCSV}
              className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors"
            >
              📥 Exporter en CSV
            </button>
            <button
              onClick={clearAll}
              className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-colors"
            >
              🗑️ Tout effacer
            </button>
          </div>
        </>
      ) : (
        <div className="text-center py-12 bg-gray-50 dark:bg-gray-700 rounded-lg">
          <p className="text-gray-500 dark:text-gray-400 text-lg">
            📊 Aucune position crypto dans votre portfolio
          </p>
          <p className="text-gray-400 dark:text-gray-500 text-sm mt-2">
            Ajoutez votre première cryptomonnaie pour commencer le suivi
          </p>
        </div>
      )}
    </div>
  );
}
