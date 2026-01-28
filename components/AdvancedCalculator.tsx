"use client";

import { useState, useCallback } from "react";

export default function AdvancedCalculator() {
  const [display, setDisplay] = useState<string>("0");
  const [memory, setMemory] = useState<number>(0);
  const [history, setHistory] = useState<string[]>([]);

  const handleNumberClick = useCallback((num: string) => {
    setDisplay((prev) => (prev === "0" ? num : prev + num));
  }, []);

  const handleOperatorClick = useCallback((op: string) => {
    setDisplay((prev) => prev + " " + op + " ");
  }, []);

  const handleClear = useCallback(() => {
    setDisplay("0");
  }, []);

  const handleBackspace = useCallback(() => {
    setDisplay((prev) => (prev.length > 1 ? prev.slice(0, -1) : "0"));
  }, []);

  const handleEquals = useCallback(() => {
    try {
      // Secure calculation using Function constructor with limited scope
      // Only allow basic math operations
      const sanitized = display
        .replace(/×/g, "*")
        .replace(/÷/g, "/")
        .replace(/[^0-9+\-*/().\s]/g, ""); // Remove any non-math characters
      
      // Use Function constructor with limited scope (safer than eval)
      const calculate = new Function('return (' + sanitized + ')');
      const result = calculate();
      
      if (!isFinite(result)) {
        setDisplay("Erreur");
        return;
      }
      
      setHistory((prev) => [`${display} = ${result}`, ...prev].slice(0, 10));
      setDisplay(String(result));
    } catch (error) {
      setDisplay("Erreur");
    }
  }, [display]);

  const handleScientific = useCallback((func: string) => {
    try {
      const num = parseFloat(display);
      let result: number;
      
      switch(func) {
        case "sin": result = Math.sin(num); break;
        case "cos": result = Math.cos(num); break;
        case "tan": result = Math.tan(num); break;
        case "√": result = Math.sqrt(num); break;
        case "x²": result = num * num; break;
        case "x³": result = num * num * num; break;
        case "ln": result = Math.log(num); break;
        case "log": result = Math.log10(num); break;
        case "1/x": result = 1 / num; break;
        case "π": result = Math.PI; break;
        case "e": result = Math.E; break;
        default: return;
      }
      
      setHistory((prev) => [`${func}(${num}) = ${result}`, ...prev].slice(0, 10));
      setDisplay(String(result));
    } catch (error) {
      setDisplay("Erreur");
    }
  }, [display]);

  const handleMemory = useCallback((action: string) => {
    const num = parseFloat(display);
    switch(action) {
      case "MC": setMemory(0); break;
      case "MR": setDisplay(String(memory)); break;
      case "M+": setMemory((prev) => prev + num); break;
      case "M-": setMemory((prev) => prev - num); break;
      case "MS": setMemory(num); break;
    }
  }, [display, memory]);

  const buttonClass = "px-4 py-3 rounded-lg font-semibold transition-colors text-sm";
  const numberClass = `${buttonClass} bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-gray-100`;
  const operatorClass = `${buttonClass} bg-blue-600 hover:bg-blue-700 text-white`;
  const scientificClass = `${buttonClass} bg-purple-600 hover:bg-purple-700 text-white`;
  const memoryClass = `${buttonClass} bg-green-600 hover:bg-green-700 text-white`;

  return (
    <div className="space-y-4">
      {/* Display */}
      <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4">
        <div className="text-right text-3xl font-mono font-bold text-gray-900 dark:text-gray-100 min-h-[3rem] break-all">
          {display}
        </div>
        {memory !== 0 && (
          <div className="text-right text-sm text-gray-600 dark:text-gray-400 mt-1">
            M: {memory}
          </div>
        )}
      </div>

      {/* Memory Functions */}
      <div className="grid grid-cols-5 gap-2">
        {["MC", "MR", "M+", "M-", "MS"].map((btn) => (
          <button
            key={btn}
            onClick={() => handleMemory(btn)}
            className={memoryClass}
          >
            {btn}
          </button>
        ))}
      </div>

      {/* Scientific Functions */}
      <div className="grid grid-cols-4 gap-2">
        {["sin", "cos", "tan", "√"].map((btn) => (
          <button
            key={btn}
            onClick={() => handleScientific(btn)}
            className={scientificClass}
          >
            {btn}
          </button>
        ))}
        {["x²", "x³", "ln", "log"].map((btn) => (
          <button
            key={btn}
            onClick={() => handleScientific(btn)}
            className={scientificClass}
          >
            {btn}
          </button>
        ))}
        {["1/x", "π", "e", "("].map((btn) => (
          <button
            key={btn}
            onClick={() => btn === "π" || btn === "e" ? handleScientific(btn) : handleNumberClick(btn)}
            className={scientificClass}
          >
            {btn}
          </button>
        ))}
      </div>

      {/* Standard Calculator */}
      <div className="grid grid-cols-4 gap-2">
        <button onClick={handleClear} className={`${operatorClass} bg-red-600 hover:bg-red-700`}>
          C
        </button>
        <button onClick={handleBackspace} className={operatorClass}>
          ⌫
        </button>
        <button onClick={() => handleNumberClick(")")} className={numberClass}>
          )
        </button>
        <button onClick={() => handleOperatorClick("÷")} className={operatorClass}>
          ÷
        </button>

        {["7", "8", "9"].map((num) => (
          <button key={num} onClick={() => handleNumberClick(num)} className={numberClass}>
            {num}
          </button>
        ))}
        <button onClick={() => handleOperatorClick("×")} className={operatorClass}>
          ×
        </button>

        {["4", "5", "6"].map((num) => (
          <button key={num} onClick={() => handleNumberClick(num)} className={numberClass}>
            {num}
          </button>
        ))}
        <button onClick={() => handleOperatorClick("-")} className={operatorClass}>
          −
        </button>

        {["1", "2", "3"].map((num) => (
          <button key={num} onClick={() => handleNumberClick(num)} className={numberClass}>
            {num}
          </button>
        ))}
        <button onClick={() => handleOperatorClick("+")} className={operatorClass}>
          +
        </button>

        <button onClick={() => handleNumberClick("0")} className={`${numberClass} col-span-2`}>
          0
        </button>
        <button onClick={() => handleNumberClick(".")} className={numberClass}>
          .
        </button>
        <button onClick={handleEquals} className={`${operatorClass} bg-green-600 hover:bg-green-700`}>
          =
        </button>
      </div>

      {/* History */}
      {history.length > 0 && (
        <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
          <h3 className="font-semibold mb-2 text-sm">Historique</h3>
          <div className="space-y-1 max-h-40 overflow-y-auto">
            {history.map((item, idx) => (
              <div key={idx} className="text-sm text-gray-700 dark:text-gray-300 font-mono">
                {item}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
