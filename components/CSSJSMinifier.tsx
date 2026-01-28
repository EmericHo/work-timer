"use client";

import { useState, useCallback } from "react";

export default function CSSJSMinifier() {
  const [inputCSS, setInputCSS] = useState<string>("");
  const [outputCSS, setOutputCSS] = useState<string>("");
  const [inputJS, setInputJS] = useState<string>("");
  const [outputJS, setOutputJS] = useState<string>("");
  const [activeTab, setActiveTab] = useState<"css" | "js">("css");

  const minifyCSS = useCallback(() => {
    if (!inputCSS.trim()) {
      alert("Veuillez entrer du CSS à minifier");
      return;
    }

    // Simple CSS minification
    const minified = inputCSS
      .replace(/\/\*[\s\S]*?\*\//g, "") // Remove comments
      .replace(/\s+/g, " ") // Collapse whitespace
      .replace(/\s*([{}:;,])\s*/g, "$1") // Remove spaces around special chars
      .replace(/;}/g, "}") // Remove last semicolon
      .trim();
    
    setOutputCSS(minified);
  }, [inputCSS]);

  const minifyJS = useCallback(() => {
    if (!inputJS.trim()) {
      alert("Veuillez entrer du JavaScript à minifier");
      return;
    }

    // Simple JS minification (basic, not production-grade)
    const minified = inputJS
      .replace(/\/\/.*$/gm, "") // Remove single-line comments
      .replace(/\/\*[\s\S]*?\*\//g, "") // Remove multi-line comments
      .replace(/\s+/g, " ") // Collapse whitespace
      .replace(/\s*([{}();,=+\-*/<>!&|])\s*/g, "$1") // Remove spaces around operators
      .trim();
    
    setOutputJS(minified);
  }, [inputJS]);

  const copyToClipboard = useCallback((text: string) => {
    navigator.clipboard.writeText(text);
    alert("Code copié dans le presse-papiers!");
  }, []);

  const clearCSS = useCallback(() => {
    setInputCSS("");
    setOutputCSS("");
  }, []);

  const clearJS = useCallback(() => {
    setInputJS("");
    setOutputJS("");
  }, []);

  return (
    <div className="space-y-4">
      {/* Tabs */}
      <div className="flex gap-2 border-b border-gray-300 dark:border-gray-600">
        <button
          onClick={() => setActiveTab("css")}
          className={`px-6 py-3 font-semibold transition-colors ${
            activeTab === "css"
              ? "border-b-2 border-blue-600 text-blue-600 dark:text-blue-400"
              : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
          }`}
        >
          📝 CSS
        </button>
        <button
          onClick={() => setActiveTab("js")}
          className={`px-6 py-3 font-semibold transition-colors ${
            activeTab === "js"
              ? "border-b-2 border-blue-600 text-blue-600 dark:text-blue-400"
              : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
          }`}
        >
          ⚙️ JavaScript
        </button>
      </div>

      {/* CSS Tab */}
      {activeTab === "css" && (
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium">Code CSS</label>
            <textarea
              value={inputCSS}
              onChange={(e) => setInputCSS(e.target.value)}
              placeholder=".button { background-color: blue; padding: 10px; }"
              className="w-full h-64 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 font-mono text-sm resize-none"
            />
          </div>

          <div className="flex gap-3">
            <button
              onClick={minifyCSS}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              🗜️ Minifier CSS
            </button>
            <button
              onClick={clearCSS}
              className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors font-semibold"
            >
              🗑️ Effacer
            </button>
          </div>

          {outputCSS && (
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="block text-sm font-medium">
                  CSS Minifié ({outputCSS.length} caractères)
                </label>
                <button
                  onClick={() => copyToClipboard(outputCSS)}
                  className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm"
                >
                  📋 Copier
                </button>
              </div>
              <pre className="w-full h-48 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-mono text-sm overflow-auto">
                {outputCSS}
              </pre>
              <p className="text-sm text-green-600 dark:text-green-400 font-semibold">
                Réduction: {Math.round(((inputCSS.length - outputCSS.length) / inputCSS.length) * 100)}%
              </p>
            </div>
          )}
        </div>
      )}

      {/* JS Tab */}
      {activeTab === "js" && (
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium">Code JavaScript</label>
            <textarea
              value={inputJS}
              onChange={(e) => setInputJS(e.target.value)}
              placeholder="function hello() { console.log('Hello World'); }"
              className="w-full h-64 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 font-mono text-sm resize-none"
            />
          </div>

          <div className="flex gap-3">
            <button
              onClick={minifyJS}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              🗜️ Minifier JavaScript
            </button>
            <button
              onClick={clearJS}
              className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors font-semibold"
            >
              🗑️ Effacer
            </button>
          </div>

          {outputJS && (
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="block text-sm font-medium">
                  JavaScript Minifié ({outputJS.length} caractères)
                </label>
                <button
                  onClick={() => copyToClipboard(outputJS)}
                  className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm"
                >
                  📋 Copier
                </button>
              </div>
              <pre className="w-full h-48 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-mono text-sm overflow-auto">
                {outputJS}
              </pre>
              <p className="text-sm text-green-600 dark:text-green-400 font-semibold">
                Réduction: {Math.round(((inputJS.length - outputJS.length) / inputJS.length) * 100)}%
              </p>
            </div>
          )}
        </div>
      )}

      <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
        <h4 className="font-semibold mb-2 text-yellow-900 dark:text-yellow-100">
          ⚠️ Note importante
        </h4>
        <p className="text-sm text-yellow-800 dark:text-yellow-200">
          Cet outil effectue une minification basique. Pour la production, utilisez des outils professionnels 
          comme Terser (JS), cssnano (CSS) ou Webpack qui offrent une compression optimale et préservent la 
          compatibilité.
        </p>
      </div>
    </div>
  );
}
