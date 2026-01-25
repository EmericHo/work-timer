"use client";

import { useState, useEffect } from "react";

interface TaxBracket {
  ceiling: number;
  rate: number;
}

interface FamilyQuotient {
  single: number;
  married: number;
  child1: number;
  child2: number;
  child3: number;
  child4: number;
}

interface CalculationResult {
  grossAnnual: number;
  socialContributions: number;
  netSocial: number;
  professionalDeduction: number;
  taxableIncome: number;
  familyParts: number;
  quotient: number;
  irpp: number;
  netFinalAnnual: number;
  netMonthly: number;
  effectiveRate: number;
  bracketDetails: Array<{ tranche: string; amount: number; rate: number; tax: number }>;
}

const TAX_BRACKETS_2025: TaxBracket[] = [
  { ceiling: 11497, rate: 0 },
  { ceiling: 29315, rate: 0.11 },
  { ceiling: 83823, rate: 0.30 },
  { ceiling: 180294, rate: 0.41 },
  { ceiling: Infinity, rate: 0.45 },
];

const SOCIAL_CONTRIBUTION_RATE = 0.23;
const PROFESSIONAL_DEDUCTION_RATE = 0.10;
const PROFESSIONAL_DEDUCTION_MAX = 7600;

const FAMILY_QUOTIENT: FamilyQuotient = {
  single: 1,
  married: 2,
  child1: 0.5,
  child2: 1,
  child3: 2,
  child4: 2.5,
};

export default function TaxCalculator() {
  const [inputType, setInputType] = useState<"gross" | "net">("gross");
  const [periodType, setPeriodType] = useState<"annual" | "monthly">("monthly");
  const [amount, setAmount] = useState<string>("");
  const [maritalStatus, setMaritalStatus] = useState<"single" | "married">("single");
  const [children, setChildren] = useState<number>(0);
  const [useRealExpenses, setUseRealExpenses] = useState<boolean>(false);
  const [realExpenses, setRealExpenses] = useState<string>("");
  const [result, setResult] = useState<CalculationResult | null>(null);

  const calculateFamilyParts = (status: "single" | "married", childCount: number): number => {
    let parts = status === "single" ? FAMILY_QUOTIENT.single : FAMILY_QUOTIENT.married;
    
    if (childCount >= 1) parts += FAMILY_QUOTIENT.child1;
    if (childCount >= 2) parts += FAMILY_QUOTIENT.child2;
    if (childCount >= 3) parts += FAMILY_QUOTIENT.child3;
    if (childCount >= 4) parts += FAMILY_QUOTIENT.child4;
    
    return parts;
  };

  const calculateIRPP = (taxableIncome: number, familyParts: number): { total: number; details: Array<{ tranche: string; amount: number; rate: number; tax: number }> } => {
    const quotient = taxableIncome / familyParts;
    const details: Array<{ tranche: string; amount: number; rate: number; tax: number }> = [];
    let totalTax = 0;
    let previousCeiling = 0;

    for (const bracket of TAX_BRACKETS_2025) {
      if (quotient <= previousCeiling) break;

      const taxableAmount = Math.min(quotient, bracket.ceiling) - previousCeiling;
      const tax = taxableAmount * bracket.rate;

      if (taxableAmount > 0) {
        const ceilingText = bracket.ceiling === Infinity ? "+∞" : `${bracket.ceiling.toLocaleString("fr-FR")}€`;
        details.push({
          tranche: `${previousCeiling.toLocaleString("fr-FR")}€ - ${ceilingText}`,
          amount: taxableAmount,
          rate: bracket.rate * 100,
          tax: tax,
        });
        totalTax += tax;
      }

      previousCeiling = bracket.ceiling;
    }

    // Apply family parts multiplier
    totalTax *= familyParts;

    // If tax is less than 8€, it's 0
    if (totalTax < 8) totalTax = 0;

    return { total: totalTax, details };
  };

  const calculateGrossToNet = (grossAnnual: number): CalculationResult => {
    // Step 1: Calculate social contributions
    const socialContributions = grossAnnual * SOCIAL_CONTRIBUTION_RATE;
    const netSocial = grossAnnual - socialContributions;

    // Step 2: Calculate professional deduction
    let professionalDeduction = 0;
    if (useRealExpenses && realExpenses) {
      professionalDeduction = parseFloat(realExpenses);
    } else {
      professionalDeduction = Math.min(netSocial * PROFESSIONAL_DEDUCTION_RATE, PROFESSIONAL_DEDUCTION_MAX);
    }

    const taxableIncome = netSocial - professionalDeduction;

    // Step 3: Calculate family parts and quotient
    const familyParts = calculateFamilyParts(maritalStatus, children);
    const quotient = taxableIncome / familyParts;

    // Step 4: Calculate IRPP
    const { total: irpp, details: bracketDetails } = calculateIRPP(taxableIncome, familyParts);

    // Step 5: Calculate net final
    const netFinalAnnual = netSocial - irpp;
    const netMonthly = netFinalAnnual / 12;

    // Step 6: Calculate effective rate
    const effectiveRate = grossAnnual > 0 ? (irpp / grossAnnual) * 100 : 0;

    return {
      grossAnnual,
      socialContributions,
      netSocial,
      professionalDeduction,
      taxableIncome,
      familyParts,
      quotient,
      irpp,
      netFinalAnnual,
      netMonthly,
      effectiveRate,
      bracketDetails,
    };
  };

  const calculateNetToGross = (netMonthly: number): number => {
    // Approximate calculation
    const netAnnual = netMonthly * 12;
    // Net social is approximately net annual + IRPP estimate
    // For simplification, we assume an average IRPP rate based on income level
    let estimatedIRPPRate = 0;
    if (netAnnual < 15000) estimatedIRPPRate = 0;
    else if (netAnnual < 30000) estimatedIRPPRate = 0.05;
    else if (netAnnual < 50000) estimatedIRPPRate = 0.10;
    else if (netAnnual < 80000) estimatedIRPPRate = 0.15;
    else estimatedIRPPRate = 0.20;

    const netSocial = netAnnual / (1 - estimatedIRPPRate);
    const grossAnnual = netSocial / (1 - SOCIAL_CONTRIBUTION_RATE);
    
    return grossAnnual;
  };

  const handleCalculate = () => {
    if (!amount || parseFloat(amount) <= 0) {
      alert("Veuillez entrer un montant valide");
      return;
    }

    let grossAnnual = 0;

    if (inputType === "gross") {
      if (periodType === "monthly") {
        grossAnnual = parseFloat(amount) * 12;
      } else {
        grossAnnual = parseFloat(amount);
      }
    } else {
      // Net to Gross conversion
      const netMonthly = periodType === "monthly" ? parseFloat(amount) : parseFloat(amount) / 12;
      grossAnnual = calculateNetToGross(netMonthly);
    }

    const calculationResult = calculateGrossToNet(grossAnnual);
    setResult(calculationResult);
  };

  return (
    <div className="space-y-6">
      {/* Input Form */}
      <div className="bg-gray-50 dark:bg-gray-700 p-4 sm:p-6 rounded-lg space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Type de salaire</label>
            <div className="flex gap-2">
              <button
                onClick={() => setInputType("gross")}
                className={`flex-1 px-4 py-2 rounded-lg font-semibold transition-colors ${
                  inputType === "gross"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300"
                }`}
              >
                Brut
              </button>
              <button
                onClick={() => setInputType("net")}
                className={`flex-1 px-4 py-2 rounded-lg font-semibold transition-colors ${
                  inputType === "net"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300"
                }`}
              >
                Net
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Période</label>
            <div className="flex gap-2">
              <button
                onClick={() => setPeriodType("monthly")}
                className={`flex-1 px-4 py-2 rounded-lg font-semibold transition-colors ${
                  periodType === "monthly"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300"
                }`}
              >
                Mensuel
              </button>
              <button
                onClick={() => setPeriodType("annual")}
                className={`flex-1 px-4 py-2 rounded-lg font-semibold transition-colors ${
                  periodType === "annual"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300"
                }`}
              >
                Annuel
              </button>
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Montant ({inputType === "gross" ? "Brut" : "Net"} - {periodType === "monthly" ? "Mensuel" : "Annuel"})
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Ex: 3500"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Situation familiale</label>
            <select
              value={maritalStatus}
              onChange={(e) => setMaritalStatus(e.target.value as "single" | "married")}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500"
            >
              <option value="single">Célibataire</option>
              <option value="married">Marié(e) / Pacsé(e)</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Nombre d&apos;enfants</label>
            <input
              type="number"
              min="0"
              max="10"
              value={children}
              onChange={(e) => setChildren(parseInt(e.target.value) || 0)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div>
          <label className="flex items-center gap-2 text-sm font-medium">
            <input
              type="checkbox"
              checked={useRealExpenses}
              onChange={(e) => setUseRealExpenses(e.target.checked)}
              className="w-4 h-4"
            />
            Utiliser frais réels (au lieu de l&apos;abattement de 10%)
          </label>
          {useRealExpenses && (
            <input
              type="number"
              value={realExpenses}
              onChange={(e) => setRealExpenses(e.target.value)}
              placeholder="Montant des frais réels annuels"
              className="w-full mt-2 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500"
            />
          )}
        </div>

        <button
          onClick={handleCalculate}
          className="w-full px-6 py-3 text-base font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors focus-visible:outline-2 focus-visible:outline-blue-600"
        >
          Calculer
        </button>
      </div>

      {/* Results Display */}
      {result && (
        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 sm:p-6 rounded-lg border-2 border-blue-600 space-y-4">
          <div className="text-center mb-4">
            <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              FISCALBOT - 2025/2026
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Situation : {maritalStatus === "single" ? "Célibataire" : "Marié(e)/Pacsé(e)"} - {children} enfant(s)
            </p>
          </div>

          <div className="space-y-2 text-sm sm:text-base font-mono">
            <div className="flex justify-between">
              <span>BRUT ANNUEL :</span>
              <span className="font-bold">{result.grossAnnual.toLocaleString("fr-FR", { maximumFractionDigits: 0 })} €</span>
            </div>
            <div className="flex justify-between text-red-600 dark:text-red-400">
              <span>- Cotisations (~23%) :</span>
              <span>-{result.socialContributions.toLocaleString("fr-FR", { maximumFractionDigits: 0 })} €</span>
            </div>
            <div className="border-t border-gray-300 dark:border-gray-600 my-2"></div>
            <div className="flex justify-between font-semibold">
              <span>= NET SOCIAL :</span>
              <span>{result.netSocial.toLocaleString("fr-FR", { maximumFractionDigits: 0 })} €</span>
            </div>
            <div className="flex justify-between text-red-600 dark:text-red-400">
              <span>- Abattement {useRealExpenses ? "(frais réels)" : "10%"} :</span>
              <span>-{result.professionalDeduction.toLocaleString("fr-FR", { maximumFractionDigits: 0 })} €</span>
            </div>
            <div className="border-t border-gray-300 dark:border-gray-600 my-2"></div>
            <div className="flex justify-between font-semibold">
              <span>= IMPOSABLE :</span>
              <span>{result.taxableIncome.toLocaleString("fr-FR", { maximumFractionDigits: 0 })} €</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Parts fiscales :</span>
              <span>{result.familyParts}</span>
            </div>
            <div className="flex justify-between text-red-600 dark:text-red-400 font-semibold">
              <span>IRPP calculé :</span>
              <span>-{result.irpp.toLocaleString("fr-FR", { maximumFractionDigits: 0 })} €</span>
            </div>
            <div className="border-t-2 border-blue-600 my-2"></div>
            <div className="flex justify-between text-lg font-bold text-blue-600 dark:text-blue-400">
              <span>NET FINAL ANNUEL :</span>
              <span>{result.netFinalAnnual.toLocaleString("fr-FR", { maximumFractionDigits: 0 })} €</span>
            </div>
            <div className="flex justify-between text-lg font-bold text-blue-600 dark:text-blue-400">
              <span>NET MENSUEL :</span>
              <span>{result.netMonthly.toLocaleString("fr-FR", { maximumFractionDigits: 0 })} €</span>
            </div>
            <div className="flex justify-between">
              <span>TAUX EFFECTIF :</span>
              <span>{result.effectiveRate.toFixed(1)}%</span>
            </div>
          </div>

          {/* Bracket Details */}
          {result.bracketDetails.length > 0 && (
            <div className="mt-4 pt-4 border-t border-blue-300 dark:border-blue-700">
              <h4 className="font-semibold mb-2">📊 DÉTAIL BARÈME :</h4>
              <div className="space-y-1 text-xs sm:text-sm">
                {result.bracketDetails.map((bracket, index) => (
                  <div key={index} className="flex justify-between">
                    <span>{bracket.tranche} : {bracket.amount.toLocaleString("fr-FR", { maximumFractionDigits: 0 })}€ à {bracket.rate}%</span>
                    <span className="font-semibold">= {bracket.tax.toLocaleString("fr-FR", { maximumFractionDigits: 0 })}€</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="mt-4 p-3 bg-yellow-100 dark:bg-yellow-900/20 border border-yellow-400 dark:border-yellow-600 rounded text-xs sm:text-sm">
            <p className="font-semibold">⚠️ ATTENTION :</p>
            <p>Calcul indicatif basé sur barèmes 2025-2026.</p>
            <p>Pour déclaration officielle : <a href="https://www.impots.gouv.fr" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 underline">impots.gouv.fr</a></p>
          </div>
        </div>
      )}
    </div>
  );
}
