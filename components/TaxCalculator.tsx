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

/**
 * Comparison result between France and Luxembourg tax calculations
 * @property france - Tax calculation result for France
 * @property luxembourg - Tax calculation result for Luxembourg
 * @property difference - Net annual difference (Luxembourg - France) in euros
 * @property differencePercent - Percentage difference relative to France's net final
 */
interface ComparisonResult {
  france: CalculationResult;
  luxembourg: CalculationResult;
  difference: number;
  differencePercent: number;
}

const TAX_BRACKETS_FRANCE_2025: TaxBracket[] = [
  { ceiling: 11497, rate: 0 },
  { ceiling: 29315, rate: 0.11 },
  { ceiling: 83823, rate: 0.30 },
  { ceiling: 180294, rate: 0.41 },
  { ceiling: Infinity, rate: 0.45 },
];

// Luxembourg tax brackets (16 tranches) for Class 1 (célibataire)
const TAX_BRACKETS_LUXEMBOURG_CLASS1: TaxBracket[] = [
  { ceiling: 12438, rate: 0 },
  { ceiling: 14508, rate: 0.08 },
  { ceiling: 16578, rate: 0.09 },
  { ceiling: 18648, rate: 0.10 },
  { ceiling: 20718, rate: 0.11 },
  { ceiling: 22788, rate: 0.12 },
  { ceiling: 24858, rate: 0.14 },
  { ceiling: 26928, rate: 0.16 },
  { ceiling: 28998, rate: 0.18 },
  { ceiling: 31068, rate: 0.20 },
  { ceiling: 33138, rate: 0.22 },
  { ceiling: 35208, rate: 0.24 },
  { ceiling: 37278, rate: 0.26 },
  { ceiling: 39348, rate: 0.28 },
  { ceiling: 41418, rate: 0.30 },
  { ceiling: 200004, rate: 0.39 },
  { ceiling: Infinity, rate: 0.40 },
];

// Luxembourg Class 2 (marié) - double the 0% threshold
const TAX_BRACKETS_LUXEMBOURG_CLASS2: TaxBracket[] = [
  { ceiling: 24876, rate: 0 }, // Double of Class 1
  { ceiling: 29016, rate: 0.08 },
  { ceiling: 33156, rate: 0.09 },
  { ceiling: 37296, rate: 0.10 },
  { ceiling: 41436, rate: 0.11 },
  { ceiling: 45576, rate: 0.12 },
  { ceiling: 49716, rate: 0.14 },
  { ceiling: 53856, rate: 0.16 },
  { ceiling: 57996, rate: 0.18 },
  { ceiling: 62136, rate: 0.20 },
  { ceiling: 66276, rate: 0.22 },
  { ceiling: 70416, rate: 0.24 },
  { ceiling: 74556, rate: 0.26 },
  { ceiling: 78696, rate: 0.28 },
  { ceiling: 82836, rate: 0.30 },
  { ceiling: 400008, rate: 0.39 },
  { ceiling: Infinity, rate: 0.40 },
];

const SOCIAL_CONTRIBUTION_RATE_FRANCE = 0.23;
const SOCIAL_CONTRIBUTION_RATE_LUXEMBOURG = 0.1575; // 15.75%
const PROFESSIONAL_DEDUCTION_RATE = 0.10;
const PROFESSIONAL_DEDUCTION_MAX = 7600;
const FRANCE_MIN_TAX_THRESHOLD = 8; // Tax amounts below 8€ are waived in France

const FAMILY_QUOTIENT: FamilyQuotient = {
  single: 1,
  married: 2,
  child1: 0.5,
  child2: 0.5,
  child3: 1,
  child4: 1,
};

export default function TaxCalculator() {
  const [country, setCountry] = useState<"france" | "luxembourg" | "compare">("france");
  const [inputType, setInputType] = useState<"gross" | "net">("gross");
  const [periodType, setPeriodType] = useState<"annual" | "monthly">("monthly");
  const [amount, setAmount] = useState<string>("");
  const [maritalStatus, setMaritalStatus] = useState<"single" | "married">("single");
  const [children, setChildren] = useState<number>(0);
  const [luxembourgClass, setLuxembourgClass] = useState<1 | 2>(1);
  const [useRealExpenses, setUseRealExpenses] = useState<boolean>(false);
  const [realExpenses, setRealExpenses] = useState<string>("");
  const [result, setResult] = useState<CalculationResult | null>(null);
  const [comparisonResult, setComparisonResult] = useState<ComparisonResult | null>(null);

  const calculateFamilyParts = (status: "single" | "married", childCount: number): number => {
    let parts = status === "single" ? FAMILY_QUOTIENT.single : FAMILY_QUOTIENT.married;
    
    if (childCount >= 1) parts += FAMILY_QUOTIENT.child1;
    if (childCount >= 2) parts += FAMILY_QUOTIENT.child2;
    if (childCount >= 3) parts += FAMILY_QUOTIENT.child3 * (childCount - 2);
    
    return parts;
  };

  const calculateIRPP = (taxableIncome: number, familyParts: number, brackets: TaxBracket[]): { total: number; details: Array<{ tranche: string; amount: number; rate: number; tax: number }> } => {
    const quotient = taxableIncome / familyParts;
    const details: Array<{ tranche: string; amount: number; rate: number; tax: number }> = [];
    let totalTax = 0;
    let previousCeiling = 0;

    for (const bracket of brackets) {
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

    // If tax is less than 8€, it's 0 (France only)
    if (brackets === TAX_BRACKETS_FRANCE_2025 && totalTax < FRANCE_MIN_TAX_THRESHOLD) totalTax = 0;

    return { total: totalTax, details };
  };

  const calculateGrossToNet = (grossAnnual: number, countryCode: "france" | "luxembourg", luxClass: 1 | 2 = 1): CalculationResult => {
    // Step 1: Calculate social contributions
    const socialRate = countryCode === "france" ? SOCIAL_CONTRIBUTION_RATE_FRANCE : SOCIAL_CONTRIBUTION_RATE_LUXEMBOURG;
    const socialContributions = grossAnnual * socialRate;
    const netSocial = grossAnnual - socialContributions;

    // Step 2: Calculate professional deduction (France only)
    let professionalDeduction = 0;
    if (countryCode === "france") {
      if (useRealExpenses && realExpenses) {
        professionalDeduction = parseFloat(realExpenses);
      } else {
        professionalDeduction = Math.min(netSocial * PROFESSIONAL_DEDUCTION_RATE, PROFESSIONAL_DEDUCTION_MAX);
      }
    }

    const taxableIncome = netSocial - professionalDeduction;

    // Step 3: Calculate family parts and quotient
    // Luxembourg doesn't use family quotient like France, but uses tax classes
    const familyParts = countryCode === "france" ? calculateFamilyParts(maritalStatus, children) : 1;
    const quotient = taxableIncome / familyParts;

    // Step 4: Calculate IRPP with appropriate brackets
    let brackets: TaxBracket[];
    if (countryCode === "france") {
      brackets = TAX_BRACKETS_FRANCE_2025;
    } else {
      brackets = luxClass === 2 ? TAX_BRACKETS_LUXEMBOURG_CLASS2 : TAX_BRACKETS_LUXEMBOURG_CLASS1;
    }
    
    const { total: irpp, details: bracketDetails } = calculateIRPP(taxableIncome, familyParts, brackets);

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
    // Approximate calculation - uses France rate as default
    // Note: For more accurate Luxembourg net-to-gross, use Luxembourg-specific estimation
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
    // Use appropriate social contribution rate based on country
    const socialRate = country === "luxembourg" ? SOCIAL_CONTRIBUTION_RATE_LUXEMBOURG : SOCIAL_CONTRIBUTION_RATE_FRANCE;
    const grossAnnual = netSocial / (1 - socialRate);
    
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
      // Net to Gross conversion - simplified for both countries
      const netMonthly = periodType === "monthly" ? parseFloat(amount) : parseFloat(amount) / 12;
      grossAnnual = calculateNetToGross(netMonthly);
    }

    if (country === "compare") {
      // Calculate for both countries
      const franceResult = calculateGrossToNet(grossAnnual, "france", 1);
      const luxembourgResult = calculateGrossToNet(grossAnnual, "luxembourg", luxembourgClass);
      const difference = luxembourgResult.netFinalAnnual - franceResult.netFinalAnnual;
      const differencePercent = franceResult.netFinalAnnual > 0 
        ? (difference / franceResult.netFinalAnnual) * 100 
        : 0;
      
      setComparisonResult({
        france: franceResult,
        luxembourg: luxembourgResult,
        difference,
        differencePercent,
      });
      setResult(null);
    } else {
      // Calculate for single country
      const calculationResult = calculateGrossToNet(
        grossAnnual, 
        country,
        country === "luxembourg" ? luxembourgClass : 1
      );
      setResult(calculationResult);
      setComparisonResult(null);
    }
  };

  return (
    <div className="space-y-6">
      {/* Input Form */}
      <div className="bg-gray-50 dark:bg-gray-700 p-4 sm:p-6 rounded-lg space-y-4">
        {/* Country Selector */}
        <div>
          <label className="block text-sm font-medium mb-2">Pays / Comparaison</label>
          <div className="grid grid-cols-3 gap-2">
            <button
              onClick={() => setCountry("france")}
              className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                country === "france"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300"
              }`}
            >
              🇫🇷 France
            </button>
            <button
              onClick={() => setCountry("luxembourg")}
              className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                country === "luxembourg"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300"
              }`}
            >
              🇱🇺 Luxembourg
            </button>
            <button
              onClick={() => setCountry("compare")}
              className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                country === "compare"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300"
              }`}
            >
              🇫🇷🇱🇺 Comparer
            </button>
          </div>
        </div>

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

          {country !== "france" && (
            <div>
              <label className="block text-sm font-medium mb-2">Classe fiscale (Luxembourg)</label>
              <select
                value={luxembourgClass}
                onChange={(e) => setLuxembourgClass(parseInt(e.target.value) as 1 | 2)}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500"
              >
                <option value={1}>Classe 1 (Célibataire)</option>
                <option value={2}>Classe 2 (Marié/e)</option>
              </select>
            </div>
          )}

          {country === "france" && (
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
          )}
        </div>

        {country === "france" && (
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
        )}

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
              {country === "france" ? "🇫🇷" : "🇱🇺"} FISCALBOT - 2025/2026
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {country === "luxembourg" ? `Classe ${luxembourgClass}` : `${maritalStatus === "single" ? "Célibataire" : "Marié(e)/Pacsé(e)"} - ${children} enfant(s)`}
            </p>
          </div>

          <div className="space-y-2 text-sm sm:text-base font-mono">
            <div className="flex justify-between">
              <span>BRUT ANNUEL :</span>
              <span className="font-bold">{result.grossAnnual.toLocaleString("fr-FR", { maximumFractionDigits: 0 })} €</span>
            </div>
            <div className="flex justify-between text-red-600 dark:text-red-400">
              <span>- Cotisations ({country === "france" ? "~23%" : "~15.75%"}) :</span>
              <span>-{result.socialContributions.toLocaleString("fr-FR", { maximumFractionDigits: 0 })} €</span>
            </div>
            <div className="border-t border-gray-300 dark:border-gray-600 my-2"></div>
            <div className="flex justify-between font-semibold">
              <span>= NET SOCIAL :</span>
              <span>{result.netSocial.toLocaleString("fr-FR", { maximumFractionDigits: 0 })} €</span>
            </div>
            {country === "france" && result.professionalDeduction > 0 && (
              <div className="flex justify-between text-red-600 dark:text-red-400">
                <span>- Abattement {useRealExpenses ? "(frais réels)" : "10%"} :</span>
                <span>-{result.professionalDeduction.toLocaleString("fr-FR", { maximumFractionDigits: 0 })} €</span>
              </div>
            )}
            <div className="border-t border-gray-300 dark:border-gray-600 my-2"></div>
            <div className="flex justify-between font-semibold">
              <span>= IMPOSABLE :</span>
              <span>{result.taxableIncome.toLocaleString("fr-FR", { maximumFractionDigits: 0 })} €</span>
            </div>
            {country === "france" && (
              <div className="flex justify-between text-sm">
                <span>Parts fiscales :</span>
                <span>{result.familyParts}</span>
              </div>
            )}
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
            <p>Pour déclaration officielle : {country === "france" 
              ? <a href="https://www.impots.gouv.fr" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 underline">impots.gouv.fr</a>
              : <a href="https://guichet.public.lu" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 underline">guichet.lu</a>
            }</p>
          </div>
        </div>
      )}

      {/* Comparison Results Display */}
      {comparisonResult && (
        <div className="bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 p-4 sm:p-6 rounded-lg border-2 border-blue-600 space-y-6">
          <div className="text-center mb-4">
            <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              🇫🇷🇱🇺 FISCALBOT 2025-2026 - COMPARAISON FR/LUX
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {comparisonResult.france.grossAnnual.toLocaleString("fr-FR", { maximumFractionDigits: 0 })} € brut/an
            </p>
          </div>

          {/* Summary Comparison Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm sm:text-base font-mono border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-400 dark:border-gray-600">
                  <th className="text-left py-2 px-2"></th>
                  <th className="text-center py-2 px-2 bg-blue-100 dark:bg-blue-900/30">🇫🇷 FRANCE</th>
                  <th className="text-center py-2 px-2 bg-green-100 dark:bg-green-900/30">🇱🇺 LUXEMBOURG</th>
                </tr>
              </thead>
              <tbody className="text-center">
                <tr className="border-b border-gray-300 dark:border-gray-600">
                  <td className="text-left py-2 px-2">Cotisations</td>
                  <td className="py-2 px-2 bg-blue-50 dark:bg-blue-900/10">
                    {comparisonResult.france.socialContributions.toLocaleString("fr-FR", { maximumFractionDigits: 0 })} €
                    <div className="text-xs text-gray-600 dark:text-gray-400">(23%)</div>
                  </td>
                  <td className="py-2 px-2 bg-green-50 dark:bg-green-900/10">
                    {comparisonResult.luxembourg.socialContributions.toLocaleString("fr-FR", { maximumFractionDigits: 0 })} €
                    <div className="text-xs text-gray-600 dark:text-gray-400">(15.75%)</div>
                  </td>
                </tr>
                <tr className="border-b border-gray-300 dark:border-gray-600">
                  <td className="text-left py-2 px-2 font-semibold">Net social</td>
                  <td className="py-2 px-2 bg-blue-50 dark:bg-blue-900/10 font-semibold">
                    {comparisonResult.france.netSocial.toLocaleString("fr-FR", { maximumFractionDigits: 0 })} €
                  </td>
                  <td className="py-2 px-2 bg-green-50 dark:bg-green-900/10 font-semibold">
                    {comparisonResult.luxembourg.netSocial.toLocaleString("fr-FR", { maximumFractionDigits: 0 })} €
                  </td>
                </tr>
                <tr className="border-b border-gray-300 dark:border-gray-600">
                  <td className="text-left py-2 px-2">Impôt</td>
                  <td className="py-2 px-2 bg-blue-50 dark:bg-blue-900/10 text-red-600 dark:text-red-400">
                    {comparisonResult.france.irpp.toLocaleString("fr-FR", { maximumFractionDigits: 0 })} €
                  </td>
                  <td className="py-2 px-2 bg-green-50 dark:bg-green-900/10 text-red-600 dark:text-red-400">
                    {comparisonResult.luxembourg.irpp.toLocaleString("fr-FR", { maximumFractionDigits: 0 })} €
                  </td>
                </tr>
                <tr className="border-t-2 border-gray-400 dark:border-gray-600 font-bold text-lg">
                  <td className="text-left py-3 px-2">NET FINAL</td>
                  <td className="py-3 px-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                    {comparisonResult.france.netFinalAnnual.toLocaleString("fr-FR", { maximumFractionDigits: 0 })} €
                    <div className="text-sm font-normal">
                      {comparisonResult.france.netMonthly.toLocaleString("fr-FR", { maximumFractionDigits: 0 })} €/mois
                    </div>
                  </td>
                  <td className="py-3 px-2 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400">
                    {comparisonResult.luxembourg.netFinalAnnual.toLocaleString("fr-FR", { maximumFractionDigits: 0 })} €
                    <div className="text-sm font-normal">
                      {comparisonResult.luxembourg.netMonthly.toLocaleString("fr-FR", { maximumFractionDigits: 0 })} €/mois
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Difference Highlight */}
          <div className={`p-4 rounded-lg border-2 ${
            comparisonResult.difference > 0 
              ? "bg-green-100 dark:bg-green-900/20 border-green-600" 
              : comparisonResult.difference < 0
              ? "bg-red-100 dark:bg-red-900/20 border-red-600"
              : "bg-gray-100 dark:bg-gray-700 border-gray-600"
          }`}>
            <div className="text-center">
              <p className="text-lg font-bold mb-2">
                💡 AVANTAGE : {comparisonResult.difference > 0 ? "🇱🇺 LUXEMBOURG" : comparisonResult.difference < 0 ? "🇫🇷 FRANCE" : "ÉQUIVALENT"}
              </p>
              <p className="text-2xl font-bold">
                {Math.abs(comparisonResult.difference).toLocaleString("fr-FR", { maximumFractionDigits: 0 })} € /an
                <span className="text-base font-normal ml-2">
                  ({Math.abs(comparisonResult.difference / 12).toLocaleString("fr-FR", { maximumFractionDigits: 0 })} €/mois)
                </span>
              </p>
              <p className="text-sm mt-2">
                {comparisonResult.difference > 0 ? "+" : ""}{comparisonResult.differencePercent.toFixed(1)}% par rapport à {comparisonResult.difference > 0 ? "la France" : "le Luxembourg"}
              </p>
            </div>
          </div>

          {/* Detailed Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* France Details */}
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <h4 className="font-semibold mb-2 text-blue-600 dark:text-blue-400">📊 DÉCOMPOSITION FRANCE :</h4>
              <div className="space-y-1 text-xs sm:text-sm">
                <p>• Cotisations 23% : {comparisonResult.france.socialContributions.toLocaleString("fr-FR", { maximumFractionDigits: 0 })} €</p>
                <p>• Abattement 10% : {comparisonResult.france.professionalDeduction.toLocaleString("fr-FR", { maximumFractionDigits: 0 })} €</p>
                <p>• Parts fiscales : {comparisonResult.france.familyParts}</p>
                <p>• IRPP : {comparisonResult.france.irpp.toLocaleString("fr-FR", { maximumFractionDigits: 0 })} €</p>
                <p>• Taux effectif : {comparisonResult.france.effectiveRate.toFixed(1)}%</p>
              </div>
            </div>

            {/* Luxembourg Details */}
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
              <h4 className="font-semibold mb-2 text-green-600 dark:text-green-400">📊 DÉCOMPOSITION LUXEMBOURG :</h4>
              <div className="space-y-1 text-xs sm:text-sm">
                <p>• Cotisations 15.75% : {comparisonResult.luxembourg.socialContributions.toLocaleString("fr-FR", { maximumFractionDigits: 0 })} €</p>
                <p>• Classe impôt : {luxembourgClass}</p>
                <p>• Pas d&apos;abattement 10%</p>
                <p>• Impôt : {comparisonResult.luxembourg.irpp.toLocaleString("fr-FR", { maximumFractionDigits: 0 })} €</p>
                <p>• Taux effectif : {comparisonResult.luxembourg.effectiveRate.toFixed(1)}%</p>
              </div>
            </div>
          </div>

          {/* Conseils */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-400 dark:border-yellow-600 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">💡 CONSEILS PERSONNALISÉS :</h4>
            <div className="space-y-2 text-xs sm:text-sm">
              {comparisonResult.difference > 0 && (
                <>
                  <p>• Le Luxembourg offre un avantage net de {Math.abs(comparisonResult.differencePercent).toFixed(1)}%</p>
                  <p>• Cotisations sociales plus faibles au Luxembourg (15.75% vs 23%)</p>
                  {luxembourgClass === 1 && maritalStatus === "married" && (
                    <p>• Envisagez la Classe 2 (marié) pour optimiser davantage</p>
                  )}
                </>
              )}
              {comparisonResult.difference < 0 && (
                <>
                  <p>• La France offre un avantage net de {Math.abs(comparisonResult.differencePercent).toFixed(1)}%</p>
                  {children > 0 && (
                    <p>• Le quotient familial français est avantageux avec {children} enfant(s)</p>
                  )}
                </>
              )}
              <p>• Pensez aux frais de transport transfrontalier</p>
              <p>• Vérifiez les conventions fiscales FR-LUX</p>
            </div>
          </div>

          <div className="mt-4 p-3 bg-yellow-100 dark:bg-yellow-900/20 border border-yellow-400 dark:border-yellow-600 rounded text-xs sm:text-sm">
            <p className="font-semibold">⚠️ ATTENTION :</p>
            <p>Calculs indicatifs basés sur barèmes 2025-2026</p>
            <p>France : <a href="https://www.impots.gouv.fr" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 underline">impots.gouv.fr</a> | Luxembourg : <a href="https://guichet.public.lu" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 underline">guichet.lu</a></p>
          </div>
        </div>
      )}
    </div>
  );
}
