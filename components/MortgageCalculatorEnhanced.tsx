"use client";

import { useState, useMemo } from "react";

export default function MortgageCalculatorEnhanced() {
  const [loanAmount, setLoanAmount] = useState<string>("");
  const [interestRate, setInterestRate] = useState<string>("");
  const [loanTerm, setLoanTerm] = useState<string>("");
  const [downPayment, setDownPayment] = useState<string>("");
  const [propertyTax, setPropertyTax] = useState<string>("");
  const [insurance, setInsurance] = useState<string>("");

  const {
    monthlyPayment,
    monthlyPrincipalInterest,
    monthlyTax,
    monthlyInsurance,
    totalPayment,
    totalInterest,
  } = useMemo(() => {
    const loan = parseFloat(loanAmount);
    const down = parseFloat(downPayment) || 0;
    const rate = parseFloat(interestRate);
    const years = parseFloat(loanTerm);
    const tax = parseFloat(propertyTax) || 0;
    const ins = parseFloat(insurance) || 0;

    if (isNaN(loan) || isNaN(rate) || isNaN(years) || loan <= 0 || years <= 0) {
      return {
        monthlyPayment: 0,
        monthlyPrincipalInterest: 0,
        monthlyTax: 0,
        monthlyInsurance: 0,
        totalPayment: 0,
        totalInterest: 0,
      };
    }

    const principal = loan - down;
    const monthlyRate = rate / 100 / 12;
    const numberOfPayments = years * 12;

    let monthlyPI = 0;
    if (monthlyRate === 0) {
      monthlyPI = principal / numberOfPayments;
    } else {
      monthlyPI = principal * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    }

    const annualTax = (loan * tax) / 100;
    const monthlyTaxAmount = annualTax / 12;

    const annualIns = (loan * ins) / 100;
    const monthlyInsAmount = annualIns / 12;

    const totalMonthly = monthlyPI + monthlyTaxAmount + monthlyInsAmount;
    const totalPaid = totalMonthly * numberOfPayments;
    const totalInt = (monthlyPI * numberOfPayments) - principal;

    return {
      monthlyPayment: totalMonthly,
      monthlyPrincipalInterest: monthlyPI,
      monthlyTax: monthlyTaxAmount,
      monthlyInsurance: monthlyInsAmount,
      totalPayment: totalPaid + down,
      totalInterest: totalInt,
    };
  }, [loanAmount, downPayment, interestRate, loanTerm, propertyTax, insurance]);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(
      () => alert("Montant copié!"),
      () => alert("Erreur lors de la copie.")
    );
  };

  const principalAmount = (parseFloat(loanAmount) || 0) - (parseFloat(downPayment) || 0);

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">
            Prix du bien (€)
          </label>
          <input
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
            placeholder="300000"
            step="1000"
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Apport personnel (€)
          </label>
          <input
            type="number"
            value={downPayment}
            onChange={(e) => setDownPayment(e.target.value)}
            placeholder="60000"
            step="1000"
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">
            Taux d&apos;intérêt annuel (%)
          </label>
          <input
            type="number"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            placeholder="3.5"
            step="0.1"
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Durée du prêt (années)
          </label>
          <input
            type="number"
            value={loanTerm}
            onChange={(e) => setLoanTerm(e.target.value)}
            placeholder="25"
            step="1"
            min="1"
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">
            Taxe foncière annuelle (% du prix)
          </label>
          <input
            type="number"
            value={propertyTax}
            onChange={(e) => setPropertyTax(e.target.value)}
            placeholder="0.5"
            step="0.1"
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Assurance annuelle (% du prix)
          </label>
          <input
            type="number"
            value={insurance}
            onChange={(e) => setInsurance(e.target.value)}
            placeholder="0.36"
            step="0.01"
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
          />
        </div>
      </div>

      {loanAmount && interestRate && loanTerm && parseFloat(loanAmount) > 0 && parseFloat(loanTerm) > 0 && (
        <div className="space-y-3">
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-sm text-blue-700 dark:text-blue-300">
                  Mensualité totale
                </p>
                <p className="text-5xl font-bold text-blue-900 dark:text-blue-100">
                  {monthlyPayment.toFixed(2)} €
                </p>
              </div>
              <button
                onClick={() => copyToClipboard(monthlyPayment.toFixed(2))}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                title="Copier la mensualité"
              >
                📋
              </button>
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-blue-700 dark:text-blue-300">Capital + Intérêts:</span>
                <span className="font-semibold text-blue-900 dark:text-blue-100">
                  {monthlyPrincipalInterest.toFixed(2)} €
                </span>
              </div>
              {monthlyTax > 0 && (
                <div className="flex justify-between">
                  <span className="text-blue-700 dark:text-blue-300">Taxe foncière:</span>
                  <span className="font-semibold text-blue-900 dark:text-blue-100">
                    {monthlyTax.toFixed(2)} €
                  </span>
                </div>
              )}
              {monthlyInsurance > 0 && (
                <div className="flex justify-between">
                  <span className="text-blue-700 dark:text-blue-300">Assurance:</span>
                  <span className="font-semibold text-blue-900 dark:text-blue-100">
                    {monthlyInsurance.toFixed(2)} €
                  </span>
                </div>
              )}
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg p-4">
            <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">
              📊 Récapitulatif du prêt
            </h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Prix du bien:</span>
                <span className="font-semibold">{parseFloat(loanAmount).toFixed(2)} €</span>
              </div>
              {downPayment && parseFloat(downPayment) > 0 && (
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Apport personnel:</span>
                  <span className="font-semibold text-green-600 dark:text-green-400">
                    -{parseFloat(downPayment).toFixed(2)} €
                  </span>
                </div>
              )}
              <div className="flex justify-between pt-2 border-t border-gray-300 dark:border-gray-600">
                <span className="font-semibold">Montant emprunté:</span>
                <span className="font-bold">{principalAmount.toFixed(2)} €</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Taux d&apos;intérêt:</span>
                <span className="font-semibold">{parseFloat(interestRate).toFixed(2)}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Durée:</span>
                <span className="font-semibold">{parseFloat(loanTerm)} ans ({parseFloat(loanTerm) * 12} mois)</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg p-4">
            <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">
              💰 Coûts totaux
            </h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Total des mensualités:</span>
                <span className="font-semibold">{(monthlyPayment * parseFloat(loanTerm) * 12).toFixed(2)} €</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Intérêts totaux:</span>
                <span className="font-semibold text-red-600 dark:text-red-400">
                  +{totalInterest.toFixed(2)} €
                </span>
              </div>
              {downPayment && parseFloat(downPayment) > 0 && (
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Apport initial:</span>
                  <span className="font-semibold">+{parseFloat(downPayment).toFixed(2)} €</span>
                </div>
              )}
              <div className="flex justify-between pt-2 border-t border-gray-300 dark:border-gray-600">
                <span className="font-bold text-lg">Coût total:</span>
                <span className="font-bold text-xl text-red-600 dark:text-red-400">
                  {totalPayment.toFixed(2)} €
                </span>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg p-4">
            <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">
              📈 Amortissement
            </h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Capital emprunté:</span>
                <span className="font-semibold">{principalAmount.toFixed(2)} €</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Part des intérêts:</span>
                <span className="font-semibold">
                  {((totalInterest / (totalInterest + principalAmount)) * 100).toFixed(1)}%
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Part du capital:</span>
                <span className="font-semibold">
                  {((principalAmount / (totalInterest + principalAmount)) * 100).toFixed(1)}%
                </span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4 mt-3">
                <div
                  className="bg-blue-600 h-4 rounded-full"
                  style={{ width: `${(principalAmount / (totalInterest + principalAmount)) * 100}%` }}
                />
              </div>
              <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
                <span>Capital</span>
                <span>Intérêts</span>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
        <h4 className="font-semibold mb-2 text-blue-900 dark:text-blue-100">
          💡 Conseils pour votre prêt immobilier
        </h4>
        <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
          <li>Un apport personnel de 10-20% est généralement recommandé</li>
          <li>La mensualité ne devrait pas dépasser 33% de vos revenus</li>
          <li>Comparez les taux et frais de plusieurs banques</li>
          <li>N&apos;oubliez pas d&apos;inclure les frais de notaire (7-8% de l&apos;ancien, 2-3% du neuf)</li>
          <li>L&apos;assurance emprunteur est obligatoire mais peut être négociée</li>
        </ul>
      </div>
    </div>
  );
}
