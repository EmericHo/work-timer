"use client";

import { useState } from "react";

type Operation = "+" | "-" | "*" | "/" | "^" | "sqrt" | "abs";

export default function FormulaCalculator() {
  const [formula, setFormula] = useState<string>("");
  const [variables, setVariables] = useState<Record<string, number>>({});
  const [result, setResult] = useState<string>("");
  const [error, setError] = useState<string>("");

  const extractVariables = (expr: string): string[] => {
    const matches = expr.match(/[a-z]/gi) || [];
    return [...new Set(matches)];
  };

  const handleFormulaChange = (newFormula: string) => {
    setFormula(newFormula);
    const vars = extractVariables(newFormula);
    const newVars: Record<string, number> = {};
    vars.forEach(v => {
      newVars[v] = variables[v] || 0;
    });
    setVariables(newVars);
    setResult("");
    setError("");
  };

  const calculate = () => {
    try {
      setError("");
      let expression = formula;
      
      Object.entries(variables).forEach(([key, value]) => {
        expression = expression.replace(new RegExp(key, 'g'), value.toString());
      });

      expression = expression.replace(/\^/g, '**');
      expression = expression.replace(/sqrt\(([^)]+)\)/g, 'Math.sqrt($1)');
      expression = expression.replace(/abs\(([^)]+)\)/g, 'Math.abs($1)');
      expression = expression.replace(/π/g, 'Math.PI');
      expression = expression.replace(/pi/gi, 'Math.PI');

      if (!/^[\d\s+\-*/(). Math.sqrt Math.abs Math.PI Math.pow]+$/.test(expression.replace(/\*\*/g, ''))) {
        throw new Error("Expression invalide");
      }

      const calculatedResult = eval(expression);
      
      if (typeof calculatedResult !== 'number' || !isFinite(calculatedResult)) {
        throw new Error("Résultat invalide");
      }

      setResult(calculatedResult.toFixed(6).replace(/\.?0+$/, ''));
    } catch (err) {
      setError("Erreur de calcul. Vérifiez votre formule.");
      setResult("");
    }
  };

  const examples: Array<{ label: string; formula: string; vars: Record<string, number> }> = [
    { label: "Aire cercle", formula: "π * r^2", vars: { r: 5 } },
    { label: "Volume sphère", formula: "(4/3) * π * r^3", vars: { r: 3 } },
    { label: "Pythagore", formula: "sqrt(a^2 + b^2)", vars: { a: 3, b: 4 } },
    { label: "Quadratique", formula: "a*x^2 + b*x + c", vars: { a: 1, b: -3, c: 2, x: 2 } },
  ];

  const loadExample = (formula: string, vars: Record<string, number>) => {
    setFormula(formula);
    setVariables(vars);
    setResult("");
    setError("");
  };

  return (
    <div className="space-y-6">
      <div>
        <label htmlFor="formula" className="block text-sm font-medium mb-2">
          Formule mathématique:
        </label>
        <input
          id="formula"
          type="text"
          value={formula}
          onChange={(e) => handleFormulaChange(e.target.value)}
          placeholder="Exemple: a*x^2 + b*x + c ou π*r^2"
          className="w-full p-4 border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 font-mono text-lg"
        />
        <div className="text-xs text-gray-500 mt-1">
          Opérateurs: + - * / ^ (puissance) sqrt() abs() π
        </div>
      </div>

      {Object.keys(variables).length > 0 && (
        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border-2 border-gray-200 dark:border-gray-700">
          <h3 className="font-semibold mb-3">Variables:</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {Object.entries(variables).map(([key, value]) => (
              <div key={key}>
                <label className="block text-sm font-medium mb-1">{key}  =</label>
                <input
                  type="number"
                  step="any"
                  value={value}
                  onChange={(e) =>
                    setVariables({ ...variables, [key]: parseFloat(e.target.value) || 0 })
                  }
                  className="w-full p-2 border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      <button
        onClick={calculate}
        disabled={!formula.trim()}
        className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
      >
        🧮 Calculer
      </button>

      {error && (
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
          <p className="text-red-800 dark:text-red-200">{error}</p>
        </div>
      )}

      {result && (
        <div className="bg-green-50 dark:bg-green-900/20 border-2 border-green-500 rounded-lg p-6">
          <div className="text-center">
            <div className="text-sm text-green-700 dark:text-green-300 mb-2">Résultat:</div>
            <div className="text-4xl font-bold text-green-600 dark:text-green-400">{result}</div>
          </div>
        </div>
      )}

      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
        <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-3">📌 Exemples:</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {examples.map((ex, i) => (
            <button
              key={i}
              onClick={() => loadExample(ex.formula, ex.vars)}
              className="text-left p-3 bg-white dark:bg-gray-800 rounded-lg border border-blue-200 dark:border-blue-700 hover:border-blue-400 transition-colors"
            >
              <div className="font-semibold text-sm text-blue-700 dark:text-blue-300">{ex.label}</div>
              <div className="text-xs font-mono text-gray-600 dark:text-gray-400">{ex.formula}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
