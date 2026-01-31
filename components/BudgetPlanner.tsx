"use client";

import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullseye, faChartBar, faChartLine, faHome, faMoneyBill, faTrash } from '@fortawesome/free-solid-svg-icons';

interface BudgetItem {
  id: string;
  name: string;
  amount: number;
}

interface BudgetData {
  incomes: BudgetItem[];
  fixedExpenses: BudgetItem[];
  variableExpenses: BudgetItem[];
  savingsGoals: BudgetItem[];
}

const STORAGE_KEY = "budget-planner-data";

export default function BudgetPlanner() {
  const [budgetData, setBudgetData] = useState<BudgetData>({
    incomes: [],
    fixedExpenses: [],
    variableExpenses: [],
    savingsGoals: [],
  });

  const [newItem, setNewItem] = useState<{
    [key: string]: { name: string; amount: string };
  }>({
    incomes: { name: "", amount: "" },
    fixedExpenses: { name: "", amount: "" },
    variableExpenses: { name: "", amount: "" },
    savingsGoals: { name: "", amount: "" },
  });

  // Load data from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setBudgetData(parsed);
      } catch (e) {
        console.error("Error loading budget data:", e);
      }
    }
  }, []);

  // Save to localStorage whenever data changes
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(budgetData));
  }, [budgetData]);

  const addItem = (category: keyof BudgetData) => {
    const item = newItem[category];
    if (!item.name.trim() || !item.amount.trim()) return;

    const amount = parseFloat(item.amount);
    if (isNaN(amount) || amount < 0) return;

    const newBudgetItem: BudgetItem = {
      id: Date.now().toString(),
      name: item.name.trim(),
      amount,
    };

    setBudgetData((prev) => ({
      ...prev,
      [category]: [...prev[category], newBudgetItem],
    }));

    setNewItem((prev) => ({
      ...prev,
      [category]: { name: "", amount: "" },
    }));
  };

  const removeItem = (category: keyof BudgetData, id: string) => {
    setBudgetData((prev) => ({
      ...prev,
      [category]: prev[category].filter((item) => item.id !== id),
    }));
  };

  const updateNewItem = (
    category: keyof BudgetData,
    field: "name" | "amount",
    value: string
  ) => {
    setNewItem((prev) => ({
      ...prev,
      [category]: {
        ...prev[category],
        [field]: value,
      },
    }));
  };

  // Calculations
  const totalIncome = budgetData.incomes.reduce((sum, item) => sum + item.amount, 0);
  const totalFixedExpenses = budgetData.fixedExpenses.reduce((sum, item) => sum + item.amount, 0);
  const totalVariableExpenses = budgetData.variableExpenses.reduce((sum, item) => sum + item.amount, 0);
  const totalSavingsGoals = budgetData.savingsGoals.reduce((sum, item) => sum + item.amount, 0);
  const totalExpenses = totalFixedExpenses + totalVariableExpenses;
  const remainingBalance = totalIncome - totalExpenses - totalSavingsGoals;
  const savingsRate = totalIncome > 0 ? ((totalSavingsGoals / totalIncome) * 100).toFixed(1) : "0";

  // 50/30/20 rule recommendations
  const recommended50 = totalIncome * 0.5; // Needs (fixed expenses)
  const recommended30 = totalIncome * 0.3; // Wants (variable expenses)
  const recommended20 = totalIncome * 0.2; // Savings

  const exportData = () => {
    const csv: string[] = [];
    csv.push("Planificateur de Budget - Export");
    csv.push("");
    csv.push("=== REVENUS ===");
    csv.push("Nom,Montant");
    budgetData.incomes.forEach((item) => csv.push(`${item.name},${item.amount}`));
    csv.push(`Total Revenus,${totalIncome}`);
    csv.push("");
    csv.push("=== DÉPENSES FIXES ===");
    csv.push("Nom,Montant");
    budgetData.fixedExpenses.forEach((item) => csv.push(`${item.name},${item.amount}`));
    csv.push(`Total Dépenses Fixes,${totalFixedExpenses}`);
    csv.push("");
    csv.push("=== DÉPENSES VARIABLES ===");
    csv.push("Nom,Montant");
    budgetData.variableExpenses.forEach((item) => csv.push(`${item.name},${item.amount}`));
    csv.push(`Total Dépenses Variables,${totalVariableExpenses}`);
    csv.push("");
    csv.push("=== OBJECTIFS D'ÉPARGNE ===");
    csv.push("Nom,Montant");
    budgetData.savingsGoals.forEach((item) => csv.push(`${item.name},${item.amount}`));
    csv.push(`Total Épargne,${totalSavingsGoals}`);
    csv.push("");
    csv.push("=== RÉSUMÉ ===");
    csv.push(`Total Revenus,${totalIncome}`);
    csv.push(`Total Dépenses,${totalExpenses}`);
    csv.push(`Total Épargne,${totalSavingsGoals}`);
    csv.push(`Solde Restant,${remainingBalance}`);
    csv.push(`Taux d'Épargne,${savingsRate}%`);

    const blob = new Blob([csv.join("\n")], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", `budget-${new Date().toISOString().split("T")[0]}.csv`);
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const clearAllData = () => {
    if (confirm("Êtes-vous sûr de vouloir effacer toutes les données ?")) {
      setBudgetData({
        incomes: [],
        fixedExpenses: [],
        variableExpenses: [],
        savingsGoals: [],
      });
    }
  };

  const renderCategory = (
    category: keyof BudgetData,
    title: string,
    icon: React.ReactNode,
    color: string
  ) => (
    <div className={`bg-white dark:bg-gray-800 rounded-lg shadow p-4 border-l-4 ${color}`}>
      <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
        <span>{icon}</span>
        {title}
      </h3>

      {/* Add Item Form */}
      <div className="flex flex-col sm:flex-row gap-2 mb-4">
        <input
          type="text"
          placeholder="Nom"
          value={newItem[category].name}
          onChange={(e) => updateNewItem(category, "name", e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && addItem(category)}
          className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
        />
        <input
          type="number"
          placeholder="Montant (€)"
          value={newItem[category].amount}
          onChange={(e) => updateNewItem(category, "amount", e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && addItem(category)}
          className="w-full sm:w-32 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
          min="0"
          step="0.01"
        />
        <button
          onClick={() => addItem(category)}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
        >
          Ajouter
        </button>
      </div>

      {/* Items List */}
      <div className="space-y-2">
        {budgetData[category].length === 0 ? (
          <p className="text-gray-500 dark:text-gray-400 text-sm italic">
            Aucun élément ajouté
          </p>
        ) : (
          budgetData[category].map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center bg-gray-50 dark:bg-gray-700 p-2 rounded"
            >
              <span className="text-gray-900 dark:text-gray-100">{item.name}</span>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-gray-900 dark:text-gray-100">
                  {item.amount.toFixed(2)} €
                </span>
                <button
                  onClick={() => removeItem(category, item.id)}
                  className="text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300"
                  aria-label="Supprimer"
                >
                  ✕
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Action Buttons */}
      <div className="flex flex-wrap gap-3 justify-end">
        <button
          onClick={exportData}
          className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md transition-colors"
        >
          📥 Exporter CSV
        </button>
        <button
          onClick={clearAllData}
          className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md transition-colors"
        >
          <FontAwesomeIcon icon={faTrash} className="inline" /> Effacer tout
        </button>
      </div>

      {/* Budget Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {renderCategory("incomes", "Revenus", <FontAwesomeIcon icon={faMoneyBill} className="inline" />, "border-green-500")}
        {renderCategory("fixedExpenses", "Dépenses Fixes", <FontAwesomeIcon icon={faHome} className="inline" />, "border-red-500")}
        {renderCategory("variableExpenses", "Dépenses Variables", "🛒", "border-orange-500")}
        {renderCategory("savingsGoals", "Objectifs d'Épargne", <FontAwesomeIcon icon={faBullseye} className="inline" />, "border-blue-500")}
      </div>

      {/* Summary Section */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 rounded-lg shadow-lg p-6">
        <h3 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-gray-100">
          <FontAwesomeIcon icon={faChartBar} className="inline" /> Résumé Financier
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Revenus Mensuels</p>
            <p className="text-2xl font-bold text-green-600 dark:text-green-400">
              {totalIncome.toFixed(2)} €
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Dépenses Totales</p>
            <p className="text-2xl font-bold text-red-600 dark:text-red-400">
              {totalExpenses.toFixed(2)} €
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Épargne Prévue</p>
            <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              {totalSavingsGoals.toFixed(2)} €
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Solde Restant</p>
            <p
              className={`text-2xl font-bold ${
                remainingBalance >= 0
                  ? "text-green-600 dark:text-green-400"
                  : "text-red-600 dark:text-red-400"
              }`}
            >
              {remainingBalance.toFixed(2)} €
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Taux d&apos;Épargne</p>
            <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              {savingsRate}%
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Dépenses Fixes</p>
            <p className="text-2xl font-bold text-gray-600 dark:text-gray-400">
              {totalFixedExpenses.toFixed(2)} €
            </p>
          </div>
        </div>

        {/* Expense Breakdown */}
        {totalExpenses > 0 && (
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow mb-6">
            <h4 className="font-semibold mb-4 text-gray-900 dark:text-gray-100">
              Répartition des Dépenses
            </h4>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-700 dark:text-gray-300">Dépenses Fixes</span>
                  <span className="font-semibold text-gray-900 dark:text-gray-100">
                    {((totalFixedExpenses / totalExpenses) * 100).toFixed(1)}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                  <div
                    className="bg-red-500 h-3 rounded-full transition-all duration-300"
                    style={{ width: `${(totalFixedExpenses / totalExpenses) * 100}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-700 dark:text-gray-300">Dépenses Variables</span>
                  <span className="font-semibold text-gray-900 dark:text-gray-100">
                    {((totalVariableExpenses / totalExpenses) * 100).toFixed(1)}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                  <div
                    className="bg-orange-500 h-3 rounded-full transition-all duration-300"
                    style={{ width: `${(totalVariableExpenses / totalExpenses) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 50/30/20 Rule Recommendations */}
        {totalIncome > 0 && (
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
            <h4 className="font-semibold mb-4 text-gray-900 dark:text-gray-100">
              <FontAwesomeIcon icon={faChartLine} className="inline" /> Recommandations selon la règle 50/30/20
            </h4>
            <div className="space-y-3 text-sm">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700 dark:text-gray-300">
                    50% Besoins (Dépenses Fixes)
                  </span>
                  <span className="text-gray-900 dark:text-gray-100">
                    <span className="font-semibold">{totalFixedExpenses.toFixed(2)} €</span>
                    {" / "}
                    <span className="text-gray-600 dark:text-gray-400">
                      {recommended50.toFixed(2)} €
                    </span>
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full transition-all duration-300 ${
                      totalFixedExpenses <= recommended50 ? "bg-green-500" : "bg-red-500"
                    }`}
                    style={{
                      width: `${Math.min((totalFixedExpenses / recommended50) * 100, 100)}%`,
                    }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700 dark:text-gray-300">
                    30% Envies (Dépenses Variables)
                  </span>
                  <span className="text-gray-900 dark:text-gray-100">
                    <span className="font-semibold">{totalVariableExpenses.toFixed(2)} €</span>
                    {" / "}
                    <span className="text-gray-600 dark:text-gray-400">
                      {recommended30.toFixed(2)} €
                    </span>
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full transition-all duration-300 ${
                      totalVariableExpenses <= recommended30 ? "bg-green-500" : "bg-orange-500"
                    }`}
                    style={{
                      width: `${Math.min((totalVariableExpenses / recommended30) * 100, 100)}%`,
                    }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700 dark:text-gray-300">20% Épargne</span>
                  <span className="text-gray-900 dark:text-gray-100">
                    <span className="font-semibold">{totalSavingsGoals.toFixed(2)} €</span>
                    {" / "}
                    <span className="text-gray-600 dark:text-gray-400">
                      {recommended20.toFixed(2)} €
                    </span>
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full transition-all duration-300 ${
                      totalSavingsGoals >= recommended20 ? "bg-green-500" : "bg-blue-500"
                    }`}
                    style={{
                      width: `${Math.min((totalSavingsGoals / recommended20) * 100, 100)}%`,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
