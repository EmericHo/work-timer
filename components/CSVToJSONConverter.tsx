"use client";

import { useState, useRef } from "react";

export default function CSVToJSONConverter() {
  const [csvInput, setCsvInput] = useState<string>("");
  const [jsonOutput, setJsonOutput] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const parseCSV = (csv: string) => {
    try {
      const lines = csv.trim().split("\n");
      if (lines.length < 2) {
        throw new Error("Le CSV doit contenir au moins un en-tête et une ligne de données");
      }

      const headers = lines[0].split(",").map((h) => h.trim());
      const result: Record<string, string>[] = [];

      for (let i = 1; i < lines.length; i++) {
        const values = lines[i].split(",").map((v) => v.trim());
        const obj: Record<string, string> = {};
        
        headers.forEach((header, index) => {
          obj[header] = values[index] || "";
        });
        
        result.push(obj);
      }

      setJsonOutput(JSON.stringify(result, null, 2));
      setError("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erreur lors de la conversion");
      setJsonOutput("");
    }
  };

  const handleConvert = () => {
    if (!csvInput.trim()) {
      setError("Veuillez entrer des données CSV");
      return;
    }
    parseCSV(csvInput);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    const file = e.dataTransfer.files[0];
    if (file && file.type === "text/csv") {
      const reader = new FileReader();
      reader.onload = (event) => {
        const text = event.target?.result as string;
        setCsvInput(text);
        parseCSV(text);
      };
      reader.readAsText(file);
    } else {
      setError("Veuillez déposer un fichier CSV valide");
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const text = event.target?.result as string;
        setCsvInput(text);
        parseCSV(text);
      };
      reader.readAsText(file);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(jsonOutput).then(
      () => alert("JSON copié dans le presse-papiers!"),
      () => alert("Erreur lors de la copie.")
    );
  };

  const downloadJSON = () => {
    const blob = new Blob([jsonOutput], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "converted.json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      <div
        className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors ${
          isDragging
            ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
            : "border-gray-300 dark:border-gray-600"
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <p className="text-gray-600 dark:text-gray-400 mb-2">
          📁 Glissez-déposez un fichier CSV ici
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-500 mb-3">ou</p>
        <input
          ref={fileInputRef}
          type="file"
          accept=".csv"
          onChange={handleFileSelect}
          className="hidden"
        />
        <button
          onClick={() => fileInputRef.current?.click()}
          className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
        >
          Sélectionner un fichier
        </button>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">
          CSV Input (séparateur: virgule)
        </label>
        <textarea
          value={csvInput}
          onChange={(e) => setCsvInput(e.target.value)}
          placeholder="name,age,city&#10;John,30,Paris&#10;Jane,25,Lyon"
          rows={8}
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 font-mono text-sm"
        />
      </div>

      <button
        onClick={handleConvert}
        className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
      >
        🔄 Convertir en JSON
      </button>

      {error && (
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
          <p className="text-red-800 dark:text-red-200 font-semibold">
            ❌ {error}
          </p>
        </div>
      )}

      {jsonOutput && (
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <label className="block text-sm font-medium">JSON Output</label>
            <div className="flex gap-2">
              <button
                onClick={copyToClipboard}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm"
              >
                📋 Copier
              </button>
              <button
                onClick={downloadJSON}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
              >
                💾 Télécharger
              </button>
            </div>
          </div>
          <pre className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-mono text-sm overflow-x-auto max-h-96 overflow-y-auto">
            {jsonOutput}
          </pre>
        </div>
      )}

      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
        <h4 className="font-semibold mb-2 text-blue-900 dark:text-blue-100">
          💡 Format CSV attendu
        </h4>
        <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
          <li><strong>Première ligne:</strong> En-têtes des colonnes (séparés par des virgules)</li>
          <li><strong>Lignes suivantes:</strong> Données correspondantes</li>
          <li><strong>Exemple:</strong> name,age,city puis John,30,Paris</li>
          <li>Chaque ligne sera convertie en un objet JSON avec les en-têtes comme clés</li>
        </ul>
      </div>
    </div>
  );
}
