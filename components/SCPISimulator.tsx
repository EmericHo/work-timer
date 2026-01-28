"use client";

import { useState, useEffect } from "react";

interface YearlyBreakdown {
  year: number;
  startingCapital: number;
  monthlyContributions: number;
  totalInvested: number;
  returns: number;
  taxOnReturns: number;
  netReturns: number;
  endingCapital: number;
  monthlyIncome: number;
}

interface SimulationResult {
  totalInvested: number;
  totalReturnsBeforeTax: number;
  totalTax: number;
  totalNetReturns: number;
  finalValue: number;
  averageMonthlyIncome: number;
  yearlyBreakdown: YearlyBreakdown[];
}

export default function SCPISimulator() {
  const [initialInvestment, setInitialInvestment] = useState<string>("10000");
  const [monthlyInvestment, setMonthlyInvestment] = useState<string>("200");
  const [investmentPeriod, setInvestmentPeriod] = useState<string>("10");
  const [annualReturnRate, setAnnualReturnRate] = useState<string>("4.5");
  const [taxRate, setTaxRate] = useState<string>("30");
  const [result, setResult] = useState<SimulationResult | null>(null);

  // Load from localStorage on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = {
        initial: localStorage.getItem("scpi_initial"),
        monthly: localStorage.getItem("scpi_monthly"),
        period: localStorage.getItem("scpi_period"),
        returnRate: localStorage.getItem("scpi_returnRate"),
        tax: localStorage.getItem("scpi_tax"),
      };

      if (saved.initial) setInitialInvestment(saved.initial);
      if (saved.monthly) setMonthlyInvestment(saved.monthly);
      if (saved.period) setInvestmentPeriod(saved.period);
      if (saved.returnRate) setAnnualReturnRate(saved.returnRate);
      if (saved.tax) setTaxRate(saved.tax);
    }
  }, []);

  // Save to localStorage whenever values change
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("scpi_initial", initialInvestment);
      localStorage.setItem("scpi_monthly", monthlyInvestment);
      localStorage.setItem("scpi_period", investmentPeriod);
      localStorage.setItem("scpi_returnRate", annualReturnRate);
      localStorage.setItem("scpi_tax", taxRate);
    }
  }, [initialInvestment, monthlyInvestment, investmentPeriod, annualReturnRate, taxRate]);

  const calculateSCPI = () => {
    const initial = parseFloat(initialInvestment) || 0;
    const monthly = parseFloat(monthlyInvestment) || 0;
    const years = parseInt(investmentPeriod) || 0;
    const returnRate = (parseFloat(annualReturnRate) || 0) / 100;
    const tax = (parseFloat(taxRate) || 0) / 100;

    if (initial < 0 || monthly < 0 || years <= 0 || returnRate < 0 || tax < 0 || tax > 1) {
      alert("Veuillez entrer des valeurs valides.");
      return;
    }

    const yearlyBreakdown: YearlyBreakdown[] = [];
    let currentCapital = initial;
    let totalInvested = initial;
    let totalReturnsBeforeTax = 0;
    let totalTax = 0;

    for (let year = 1; year <= years; year++) {
      const startingCapital = currentCapital;
      const monthlyContributions = monthly * 12;
      
      // Add monthly contributions throughout the year
      // We calculate returns on the average capital during the year
      const averageCapital = currentCapital + (monthlyContributions / 2);
      const returns = averageCapital * returnRate;
      const taxOnReturns = returns * tax;
      const netReturns = returns - taxOnReturns;
      
      // Update capital
      currentCapital += monthlyContributions + netReturns;
      totalInvested += monthlyContributions;
      totalReturnsBeforeTax += returns;
      totalTax += taxOnReturns;

      // Calculate monthly income projection
      const monthlyIncome = (currentCapital * returnRate) / 12;

      yearlyBreakdown.push({
        year,
        startingCapital,
        monthlyContributions,
        totalInvested,
        returns,
        taxOnReturns,
        netReturns,
        endingCapital: currentCapital,
        monthlyIncome,
      });
    }

    const totalNetReturns = totalReturnsBeforeTax - totalTax;
    const finalValue = currentCapital;
    const averageMonthlyIncome = (finalValue * returnRate) / 12;

    setResult({
      totalInvested,
      totalReturnsBeforeTax,
      totalTax,
      totalNetReturns,
      finalValue,
      averageMonthlyIncome,
      yearlyBreakdown,
    });
  };

  const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat("fr-FR", {
      style: "currency",
      currency: "EUR",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  };

  const formatPercent = (value: number): string => {
    return `${value.toFixed(2)}%`;
  };

  const resetForm = () => {
    setInitialInvestment("10000");
    setMonthlyInvestment("200");
    setInvestmentPeriod("10");
    setAnnualReturnRate("4.5");
    setTaxRate("30");
    setResult(null);
  };

  return (
    <div className="space-y-6">
      {/* Input Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Initial Investment */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Investissement initial (€)
            <span 
              className="ml-2 text-blue-600 dark:text-blue-400 cursor-help"
              title="Montant que vous investissez au départ dans la SCPI"
            >
              ℹ️
            </span>
          </label>
          <input
            type="number"
            value={initialInvestment}
            onChange={(e) => setInitialInvestment(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            min="0"
            step="1000"
          />
        </div>

        {/* Monthly Investment */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Investissement mensuel (€)
            <span 
              className="ml-2 text-blue-600 dark:text-blue-400 cursor-help"
              title="Montant que vous investissez chaque mois dans la SCPI"
            >
              ℹ️
            </span>
          </label>
          <input
            type="number"
            value={monthlyInvestment}
            onChange={(e) => setMonthlyInvestment(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            min="0"
            step="50"
          />
        </div>

        {/* Investment Period */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Durée d&apos;investissement (années)
            <span 
              className="ml-2 text-blue-600 dark:text-blue-400 cursor-help"
              title="Nombre d'années pendant lesquelles vous investissez"
            >
              ℹ️
            </span>
          </label>
          <input
            type="number"
            value={investmentPeriod}
            onChange={(e) => setInvestmentPeriod(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            min="1"
            max="50"
          />
        </div>

        {/* Annual Return Rate */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Taux de rendement annuel (%)
            <span 
              className="ml-2 text-blue-600 dark:text-blue-400 cursor-help"
              title="Rendement annuel moyen attendu de la SCPI (généralement entre 4% et 6%)"
            >
              ℹ️
            </span>
          </label>
          <input
            type="number"
            value={annualReturnRate}
            onChange={(e) => setAnnualReturnRate(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            min="0"
            max="20"
            step="0.1"
          />
        </div>

        {/* Tax Rate */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Taux d&apos;imposition (%)
            <span 
              className="ml-2 text-blue-600 dark:text-blue-400 cursor-help"
              title="Votre taux d'imposition sur les revenus fonciers (TMI + prélèvements sociaux, environ 30% à 47%)"
            >
              ℹ️
            </span>
          </label>
          <input
            type="number"
            value={taxRate}
            onChange={(e) => setTaxRate(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            min="0"
            max="100"
            step="1"
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-4 flex-wrap">
        <button
          onClick={calculateSCPI}
          className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
        >
          Calculer
        </button>
        <button
          onClick={resetForm}
          className="px-6 py-2 bg-gray-500 hover:bg-gray-600 text-white font-medium rounded-lg transition-colors"
        >
          Réinitialiser
        </button>
      </div>

      {/* Results Section */}
      {result && (
        <div className="space-y-6 mt-8">
          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
              <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
                Total investi
              </h3>
              <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                {formatCurrency(result.totalInvested)}
              </p>
            </div>

            <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg">
              <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
                Valeur finale
              </h3>
              <p className="text-2xl font-bold text-green-600 dark:text-green-400">
                {formatCurrency(result.finalValue)}
              </p>
            </div>

            <div className="bg-purple-50 dark:bg-purple-900/30 p-4 rounded-lg">
              <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
                Plus-value nette
              </h3>
              <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                {formatCurrency(result.totalNetReturns)}
              </p>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-lg">
              <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
                Revenus bruts
              </h3>
              <p className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">
                {formatCurrency(result.totalReturnsBeforeTax)}
              </p>
            </div>

            <div className="bg-red-50 dark:bg-red-900/30 p-4 rounded-lg">
              <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
                Total impôts
              </h3>
              <p className="text-2xl font-bold text-red-600 dark:text-red-400">
                {formatCurrency(result.totalTax)}
              </p>
            </div>

            <div className="bg-indigo-50 dark:bg-indigo-900/30 p-4 rounded-lg">
              <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
                Revenu mensuel moyen
              </h3>
              <p className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                {formatCurrency(result.averageMonthlyIncome)}
              </p>
            </div>
          </div>

          {/* Performance Summary */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-bold mb-4">Récapitulatif de performance</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-gray-600 dark:text-gray-400">Taux de croissance total :</span>
                <span className="ml-2 font-semibold">
                  {formatPercent(((result.finalValue - result.totalInvested) / result.totalInvested) * 100)}
                </span>
              </div>
              <div>
                <span className="text-gray-600 dark:text-gray-400">Rendement annuel moyen :</span>
                <span className="ml-2 font-semibold">{annualReturnRate}%</span>
              </div>
              <div>
                <span className="text-gray-600 dark:text-gray-400">Durée de l&apos;investissement :</span>
                <span className="ml-2 font-semibold">{investmentPeriod} ans</span>
              </div>
              <div>
                <span className="text-gray-600 dark:text-gray-400">Taux d&apos;imposition effectif :</span>
                <span className="ml-2 font-semibold">
                  {formatPercent((result.totalTax / result.totalReturnsBeforeTax) * 100)}
                </span>
              </div>
            </div>
          </div>

          {/* Yearly Breakdown Table */}
          <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
            <h3 className="text-xl font-bold p-6 pb-4">Détail année par année</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th className="px-4 py-3 text-left font-medium">Année</th>
                    <th className="px-4 py-3 text-right font-medium">Capital début</th>
                    <th className="px-4 py-3 text-right font-medium">Apports annuels</th>
                    <th className="px-4 py-3 text-right font-medium">Rendements bruts</th>
                    <th className="px-4 py-3 text-right font-medium">Impôts</th>
                    <th className="px-4 py-3 text-right font-medium">Rendements nets</th>
                    <th className="px-4 py-3 text-right font-medium">Capital fin</th>
                    <th className="px-4 py-3 text-right font-medium">Revenu mensuel</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {result.yearlyBreakdown.map((row) => (
                    <tr key={row.year} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                      <td className="px-4 py-3 font-medium">{row.year}</td>
                      <td className="px-4 py-3 text-right">{formatCurrency(row.startingCapital)}</td>
                      <td className="px-4 py-3 text-right">{formatCurrency(row.monthlyContributions)}</td>
                      <td className="px-4 py-3 text-right text-green-600 dark:text-green-400">
                        {formatCurrency(row.returns)}
                      </td>
                      <td className="px-4 py-3 text-right text-red-600 dark:text-red-400">
                        {formatCurrency(row.taxOnReturns)}
                      </td>
                      <td className="px-4 py-3 text-right text-blue-600 dark:text-blue-400">
                        {formatCurrency(row.netReturns)}
                      </td>
                      <td className="px-4 py-3 text-right font-semibold">
                        {formatCurrency(row.endingCapital)}
                      </td>
                      <td className="px-4 py-3 text-right text-purple-600 dark:text-purple-400">
                        {formatCurrency(row.monthlyIncome)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
            <p className="text-sm text-yellow-800 dark:text-yellow-200">
              ⚠️ <strong>Avertissement :</strong> Cette simulation est fournie à titre indicatif uniquement. 
              Les rendements passés ne préjugent pas des rendements futurs. Les SCPI sont des investissements 
              de long terme dont la valeur et les revenus peuvent fluctuer. Consultez un conseiller financier 
              avant de prendre toute décision d&apos;investissement.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
