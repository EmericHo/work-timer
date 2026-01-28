"use client";

import { useState, useEffect } from "react";

type LoanType = "auto" | "mortgage";

interface MonthlyPayment {
  month: number;
  principal: number;
  interest: number;
  insurance: number;
  remainingBalance: number;
  totalPayment: number;
}

interface LoanResult {
  monthlyPayment: number;
  totalPaid: number;
  totalInterest: number;
  totalInsurance: number;
  amortizationSchedule: MonthlyPayment[];
}

export default function LoanCalculator() {
  const [loanType, setLoanType] = useState<LoanType>("auto");
  const [loanAmount, setLoanAmount] = useState<string>("25000");
  const [interestRate, setInterestRate] = useState<string>("3.5");
  const [loanTermYears, setLoanTermYears] = useState<string>("5");
  const [downPayment, setDownPayment] = useState<string>("0");
  const [insuranceRate, setInsuranceRate] = useState<string>("0");
  const [result, setResult] = useState<LoanResult | null>(null);
  const [showFullSchedule, setShowFullSchedule] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = {
        type: localStorage.getItem("loan_type"),
        amount: localStorage.getItem("loan_amount"),
        rate: localStorage.getItem("loan_interest"),
        term: localStorage.getItem("loan_term"),
        down: localStorage.getItem("loan_down"),
        insurance: localStorage.getItem("loan_insurance"),
      };

      if (saved.type) setLoanType(saved.type as LoanType);
      if (saved.amount) setLoanAmount(saved.amount);
      if (saved.rate) setInterestRate(saved.rate);
      if (saved.term) setLoanTermYears(saved.term);
      if (saved.down) setDownPayment(saved.down);
      if (saved.insurance) setInsuranceRate(saved.insurance);
    }
  }, []);

  // Save to localStorage whenever values change
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("loan_type", loanType);
      localStorage.setItem("loan_amount", loanAmount);
      localStorage.setItem("loan_interest", interestRate);
      localStorage.setItem("loan_term", loanTermYears);
      localStorage.setItem("loan_down", downPayment);
      localStorage.setItem("loan_insurance", insuranceRate);
    }
  }, [loanType, loanAmount, interestRate, loanTermYears, downPayment, insuranceRate]);

  const calculateLoan = () => {
    const amount = parseFloat(loanAmount) || 0;
    const down = parseFloat(downPayment) || 0;
    const principal = amount - down;
    const monthlyRate = (parseFloat(interestRate) || 0) / 100 / 12;
    const termMonths = (parseFloat(loanTermYears) || 0) * 12;
    const insuranceMonthlyRate = (parseFloat(insuranceRate) || 0) / 100 / 12;

    if (principal <= 0 || termMonths <= 0 || monthlyRate < 0) {
      alert("Veuillez entrer des valeurs valides.");
      return;
    }

    // Calculate monthly payment using the formula: M = P * [r(1+r)^n] / [(1+r)^n - 1]
    let monthlyPrincipalInterest = 0;
    if (monthlyRate === 0) {
      monthlyPrincipalInterest = principal / termMonths;
    } else {
      monthlyPrincipalInterest =
        (principal * monthlyRate * Math.pow(1 + monthlyRate, termMonths)) /
        (Math.pow(1 + monthlyRate, termMonths) - 1);
    }

    // Calculate insurance based on initial principal
    const monthlyInsurance = principal * insuranceMonthlyRate;
    const totalMonthlyPayment = monthlyPrincipalInterest + monthlyInsurance;

    // Generate amortization schedule
    const schedule: MonthlyPayment[] = [];
    let remainingBalance = principal;
    let totalInterest = 0;
    let totalInsurance = 0;

    for (let month = 1; month <= termMonths; month++) {
      const interestPayment = remainingBalance * monthlyRate;
      const principalPayment = monthlyPrincipalInterest - interestPayment;
      remainingBalance -= principalPayment;
      
      if (remainingBalance < 0.01) remainingBalance = 0;

      totalInterest += interestPayment;
      totalInsurance += monthlyInsurance;

      schedule.push({
        month,
        principal: principalPayment,
        interest: interestPayment,
        insurance: monthlyInsurance,
        remainingBalance,
        totalPayment: monthlyPrincipalInterest + monthlyInsurance,
      });
    }

    const totalPaid = totalMonthlyPayment * termMonths;

    setResult({
      monthlyPayment: totalMonthlyPayment,
      totalPaid,
      totalInterest,
      totalInsurance,
      amortizationSchedule: schedule,
    });
  };

  useEffect(() => {
    calculateLoan();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("fr-FR", {
      style: "currency",
      currency: "EUR",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  };

  const handleLoanTypeChange = (type: LoanType) => {
    setLoanType(type);
    // Set default values based on loan type
    if (type === "auto") {
      setLoanAmount("25000");
      setInterestRate("3.5");
      setLoanTermYears("5");
      setDownPayment("5000");
      setInsuranceRate("0.4");
    } else {
      setLoanAmount("200000");
      setInterestRate("2.5");
      setLoanTermYears("20");
      setDownPayment("40000");
      setInsuranceRate("0.3");
    }
  };

  const scheduleToDisplay = showFullSchedule
    ? result?.amortizationSchedule
    : result?.amortizationSchedule.slice(0, 12);

  return (
    <div className="space-y-6">
      {/* Loan Type Toggle */}
      <div className="flex gap-2 justify-center">
        <button
          onClick={() => handleLoanTypeChange("auto")}
          className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
            loanType === "auto"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
          }`}
        >
          🚗 Crédit Auto
        </button>
        <button
          onClick={() => handleLoanTypeChange("mortgage")}
          className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
            loanType === "mortgage"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
          }`}
        >
          🏠 Crédit Immobilier
        </button>
      </div>

      {/* Input Form */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium mb-2">
            Montant du prêt (€)
          </label>
          <input
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700"
            placeholder="25000"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Taux d&apos;intérêt annuel (%)
          </label>
          <input
            type="number"
            step="0.01"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700"
            placeholder="3.5"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Durée du prêt (années)
          </label>
          <input
            type="number"
            value={loanTermYears}
            onChange={(e) => setLoanTermYears(e.target.value)}
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700"
            placeholder="5"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Apport personnel (€) - optionnel
          </label>
          <input
            type="number"
            value={downPayment}
            onChange={(e) => setDownPayment(e.target.value)}
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700"
            placeholder="0"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Taux d&apos;assurance annuel (%) - optionnel
          </label>
          <input
            type="number"
            step="0.01"
            value={insuranceRate}
            onChange={(e) => setInsuranceRate(e.target.value)}
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700"
            placeholder="0.4"
          />
        </div>
      </div>

      <button
        onClick={calculateLoan}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
      >
        Calculer les mensualités
      </button>

      {/* Results */}
      {result && (
        <div className="space-y-6">
          {/* Summary Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <div className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-1">
                Mensualité
              </div>
              <div className="text-2xl font-bold text-blue-900 dark:text-blue-100">
                {formatCurrency(result.monthlyPayment)}
              </div>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
              <div className="text-sm text-green-600 dark:text-green-400 font-medium mb-1">
                Coût total du crédit
              </div>
              <div className="text-2xl font-bold text-green-900 dark:text-green-100">
                {formatCurrency(result.totalPaid)}
              </div>
            </div>

            <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-4">
              <div className="text-sm text-orange-600 dark:text-orange-400 font-medium mb-1">
                Intérêts totaux
              </div>
              <div className="text-2xl font-bold text-orange-900 dark:text-orange-100">
                {formatCurrency(result.totalInterest)}
              </div>
            </div>

            <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4">
              <div className="text-sm text-purple-600 dark:text-purple-400 font-medium mb-1">
                Assurance totale
              </div>
              <div className="text-2xl font-bold text-purple-900 dark:text-purple-100">
                {formatCurrency(result.totalInsurance)}
              </div>
            </div>
          </div>

          {/* Visual Representation */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
            <h3 className="text-lg font-bold mb-4">Répartition du coût</h3>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Capital emprunté</span>
                  <span className="font-semibold">
                    {formatCurrency(
                      parseFloat(loanAmount) - parseFloat(downPayment)
                    )}
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                  <div
                    className="bg-blue-600 h-3 rounded-full"
                    style={{
                      width: `${
                        ((parseFloat(loanAmount) - parseFloat(downPayment)) /
                          result.totalPaid) *
                        100
                      }%`,
                    }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Intérêts</span>
                  <span className="font-semibold">
                    {formatCurrency(result.totalInterest)}
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                  <div
                    className="bg-orange-500 h-3 rounded-full"
                    style={{
                      width: `${(result.totalInterest / result.totalPaid) * 100}%`,
                    }}
                  />
                </div>
              </div>

              {result.totalInsurance > 0 && (
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Assurance</span>
                    <span className="font-semibold">
                      {formatCurrency(result.totalInsurance)}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                    <div
                      className="bg-purple-500 h-3 rounded-full"
                      style={{
                        width: `${
                          (result.totalInsurance / result.totalPaid) * 100
                        }%`,
                      }}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Amortization Schedule */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
            <h3 className="text-lg font-bold mb-4">Tableau d&apos;amortissement</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-300 dark:border-gray-600">
                    <th className="text-left py-2 px-2">Mois</th>
                    <th className="text-right py-2 px-2">Capital</th>
                    <th className="text-right py-2 px-2">Intérêts</th>
                    <th className="text-right py-2 px-2">Assurance</th>
                    <th className="text-right py-2 px-2">Mensualité</th>
                    <th className="text-right py-2 px-2">Reste dû</th>
                  </tr>
                </thead>
                <tbody>
                  {scheduleToDisplay?.map((payment) => (
                    <tr
                      key={payment.month}
                      className="border-b border-gray-200 dark:border-gray-700"
                    >
                      <td className="py-2 px-2">{payment.month}</td>
                      <td className="text-right py-2 px-2">
                        {formatCurrency(payment.principal)}
                      </td>
                      <td className="text-right py-2 px-2">
                        {formatCurrency(payment.interest)}
                      </td>
                      <td className="text-right py-2 px-2">
                        {formatCurrency(payment.insurance)}
                      </td>
                      <td className="text-right py-2 px-2 font-semibold">
                        {formatCurrency(payment.totalPayment)}
                      </td>
                      <td className="text-right py-2 px-2">
                        {formatCurrency(payment.remainingBalance)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {result.amortizationSchedule.length > 12 && (
              <button
                onClick={() => setShowFullSchedule(!showFullSchedule)}
                className="mt-4 text-blue-600 dark:text-blue-400 hover:underline font-medium"
              >
                {showFullSchedule
                  ? "Afficher uniquement les 12 premiers mois"
                  : `Afficher tous les ${result.amortizationSchedule.length} mois`}
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
