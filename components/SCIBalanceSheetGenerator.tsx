"use client";

import { useState, useRef } from "react";
import Papa from "papaparse";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

interface Transaction {
  date: string;
  type: "Recette" | "Dépense";
  category: string;
  description: string;
  amount: number;
}

interface BalanceSheet {
  revenues: { [key: string]: number };
  expenses: { [key: string]: number };
  totalRevenues: number;
  totalExpenses: number;
  netResult: number;
}

export default function SCIBalanceSheetGenerator() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [balanceSheet, setBalanceSheet] = useState<BalanceSheet | null>(null);
  const [fileName, setFileName] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Download template CSV
  const downloadTemplate = () => {
    const link = document.createElement("a");
    link.href = "/template-bilan-sci.csv";
    link.download = "template-bilan-sci.csv";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Parse CSV file
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setFileName(file.name);
    setError("");
    setLoading(true);

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        try {
          const parsed: Transaction[] = results.data.map((row: any) => {
            // Handle different column name variations
            const date = row.Date || row.date || "";
            const type = row.Type || row.type || "";
            const category = row.Catégorie || row.Categorie || row.category || "";
            const description = row.Description || row.description || "";
            const amount = parseFloat(
              (row.Montant || row.montant || row.amount || "0")
                .toString()
                .replace(",", ".")
            );

            if (!date || !type || !category || !description || isNaN(amount)) {
              throw new Error(
                "Format CSV invalide. Assurez-vous que toutes les colonnes sont présentes et correctement remplies."
              );
            }

            if (type !== "Recette" && type !== "Dépense") {
              throw new Error(
                `Type invalide: "${type}". Utilisez "Recette" ou "Dépense".`
              );
            }

            return { date, type, category, description, amount };
          });

          if (parsed.length === 0) {
            throw new Error("Le fichier CSV est vide ou mal formaté.");
          }

          setTransactions(parsed);
          calculateBalanceSheet(parsed);
          setLoading(false);
        } catch (err: any) {
          setError(err.message || "Erreur lors de l'analyse du fichier CSV");
          setTransactions([]);
          setBalanceSheet(null);
          setLoading(false);
        }
      },
      error: () => {
        setError("Erreur lors de la lecture du fichier CSV");
        setLoading(false);
      },
    });
  };

  // Calculate balance sheet
  const calculateBalanceSheet = (data: Transaction[]) => {
    const revenues: { [key: string]: number } = {};
    const expenses: { [key: string]: number } = {};
    let totalRevenues = 0;
    let totalExpenses = 0;

    data.forEach((transaction) => {
      if (transaction.type === "Recette") {
        revenues[transaction.category] =
          (revenues[transaction.category] || 0) + transaction.amount;
        totalRevenues += transaction.amount;
      } else {
        expenses[transaction.category] =
          (expenses[transaction.category] || 0) + transaction.amount;
        totalExpenses += transaction.amount;
      }
    });

    const netResult = totalRevenues - totalExpenses;

    setBalanceSheet({
      revenues,
      expenses,
      totalRevenues,
      totalExpenses,
      netResult,
    });
  };

  // Generate PDF
  const generatePDF = () => {
    if (!balanceSheet) return;

    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const currentYear = new Date().getFullYear();

    // Title
    doc.setFontSize(18);
    doc.setFont("helvetica", "bold");
    doc.text("BILAN COMPTABLE SCI", pageWidth / 2, 20, { align: "center" });

    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.text(
      `Exercice ${currentYear} - Société Civile Immobilière`,
      pageWidth / 2,
      28,
      { align: "center" }
    );

    doc.setFontSize(10);
    doc.text(
      `Généré le ${new Date().toLocaleDateString("fr-FR")}`,
      pageWidth / 2,
      35,
      { align: "center" }
    );

    let yPosition = 45;

    // Revenues section
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("PRODUITS (Recettes)", 14, yPosition);
    yPosition += 5;

    const revenueRows = Object.entries(balanceSheet.revenues).map(
      ([category, amount]) => [category, `${amount.toFixed(2)} €`]
    );
    revenueRows.push([
      "TOTAL PRODUITS",
      `${balanceSheet.totalRevenues.toFixed(2)} €`,
    ]);

    autoTable(doc, {
      startY: yPosition,
      head: [["Catégorie", "Montant"]],
      body: revenueRows,
      theme: "grid",
      headStyles: { fillColor: [34, 197, 94], textColor: 255 },
      footStyles: { fillColor: [240, 240, 240], textColor: 0, fontStyle: "bold" },
      foot: [[{ content: "TOTAL PRODUITS", colSpan: 1 }, `${balanceSheet.totalRevenues.toFixed(2)} €`]],
      margin: { left: 14, right: 14 },
    });

    yPosition = (doc as any).lastAutoTable.finalY + 10;

    // Expenses section
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("CHARGES (Dépenses)", 14, yPosition);
    yPosition += 5;

    const expenseRows = Object.entries(balanceSheet.expenses).map(
      ([category, amount]) => [category, `${amount.toFixed(2)} €`]
    );
    expenseRows.push([
      "TOTAL CHARGES",
      `${balanceSheet.totalExpenses.toFixed(2)} €`,
    ]);

    autoTable(doc, {
      startY: yPosition,
      head: [["Catégorie", "Montant"]],
      body: expenseRows,
      theme: "grid",
      headStyles: { fillColor: [239, 68, 68], textColor: 255 },
      footStyles: { fillColor: [240, 240, 240], textColor: 0, fontStyle: "bold" },
      foot: [[{ content: "TOTAL CHARGES", colSpan: 1 }, `${balanceSheet.totalExpenses.toFixed(2)} €`]],
      margin: { left: 14, right: 14 },
    });

    yPosition = (doc as any).lastAutoTable.finalY + 10;

    // Net result
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    const resultColor = balanceSheet.netResult >= 0 ? [34, 197, 94] : [239, 68, 68];
    doc.setTextColor(resultColor[0], resultColor[1], resultColor[2]);
    doc.text(
      `RÉSULTAT NET: ${balanceSheet.netResult.toFixed(2)} €`,
      pageWidth / 2,
      yPosition,
      { align: "center" }
    );
    doc.setTextColor(0, 0, 0);

    // Footer information
    yPosition += 15;
    doc.setFontSize(9);
    doc.setFont("helvetica", "italic");
    doc.text(
      "Ce document est généré automatiquement et constitue un bilan simplifié.",
      pageWidth / 2,
      yPosition,
      { align: "center" }
    );
    yPosition += 5;
    doc.text(
      "Pour les SCI soumises à l'impôt sur le revenu (IR), ce bilan doit être conservé",
      pageWidth / 2,
      yPosition,
      { align: "center" }
    );
    yPosition += 5;
    doc.text(
      "et peut servir de base pour la déclaration fiscale annuelle (formulaire 2072).",
      pageWidth / 2,
      yPosition,
      { align: "center" }
    );

    // Save PDF
    doc.save(`bilan-sci-${currentYear}.pdf`);
  };

  // Reset form
  const resetForm = () => {
    setTransactions([]);
    setBalanceSheet(null);
    setFileName("");
    setError("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="space-y-6">
      {/* Instructions */}
      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-300 dark:border-blue-700 p-4 rounded-lg">
        <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">
          📋 Comment utiliser cet outil ?
        </h3>
        <ol className="list-decimal list-inside space-y-2 text-sm text-blue-800 dark:text-blue-200">
          <li>Téléchargez le modèle Excel CSV ci-dessous</li>
          <li>Remplissez-le avec vos dépenses et recettes</li>
          <li>Importez le fichier CSV complété</li>
          <li>Générez votre bilan au format PDF</li>
        </ol>
      </div>

      {/* Template download */}
      <div className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-3">1️⃣ Télécharger le modèle</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Téléchargez le modèle Excel CSV pré-formaté pour commencer.
        </p>
        <button
          onClick={downloadTemplate}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2"
        >
          📥 Télécharger le modèle CSV
        </button>
      </div>

      {/* CSV Format info */}
      <div className="bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-3">📄 Format attendu</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-3">
          Le fichier CSV doit contenir les colonnes suivantes :
        </p>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm border border-gray-300 dark:border-gray-700">
            <thead className="bg-gray-200 dark:bg-gray-800">
              <tr>
                <th className="border border-gray-300 dark:border-gray-700 px-3 py-2">
                  Colonne
                </th>
                <th className="border border-gray-300 dark:border-gray-700 px-3 py-2">
                  Description
                </th>
                <th className="border border-gray-300 dark:border-gray-700 px-3 py-2">
                  Exemple
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-3 py-2 font-semibold">
                  Date
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-3 py-2">
                  Date de la transaction
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-3 py-2">
                  2024-01-15
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-3 py-2 font-semibold">
                  Type
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-3 py-2">
                  &quot;Recette&quot; ou &quot;Dépense&quot;
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-3 py-2">
                  Recette
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-3 py-2 font-semibold">
                  Catégorie
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-3 py-2">
                  Type de recette/dépense
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-3 py-2">
                  Loyer, Charges, Travaux...
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-3 py-2 font-semibold">
                  Description
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-3 py-2">
                  Détails de la transaction
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-3 py-2">
                  Loyer mensuel appartement 1
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-3 py-2 font-semibold">
                  Montant
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-3 py-2">
                  Montant en euros
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-3 py-2">
                  1200.00
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* File upload */}
      <div className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-3">2️⃣ Importer vos données</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Importez votre fichier CSV complété pour générer le bilan.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            ref={fileInputRef}
            type="file"
            accept=".csv"
            onChange={handleFileUpload}
            className="flex-1 text-sm text-gray-600 dark:text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700 file:cursor-pointer border border-gray-300 dark:border-gray-700 rounded-lg p-2"
          />
          {fileName && (
            <button
              onClick={resetForm}
              className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
            >
              Réinitialiser
            </button>
          )}
        </div>
        {loading && (
          <p className="mt-3 text-blue-600 dark:text-blue-400">
            Chargement du fichier...
          </p>
        )}
        {fileName && !error && (
          <p className="mt-3 text-green-600 dark:text-green-400">
            ✓ Fichier chargé : {fileName} ({transactions.length} transactions)
          </p>
        )}
        {error && (
          <div className="mt-3 bg-red-50 dark:bg-red-900/20 border border-red-300 dark:border-red-700 p-3 rounded-lg">
            <p className="text-red-800 dark:text-red-200 font-semibold">
              ❌ Erreur :
            </p>
            <p className="text-red-700 dark:text-red-300 text-sm mt-1">{error}</p>
          </div>
        )}
      </div>

      {/* Balance sheet preview */}
      {balanceSheet && (
        <div className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">3️⃣ Aperçu du bilan</h3>

          {/* Revenues */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-green-700 dark:text-green-400 mb-3">
              📈 Produits (Recettes)
            </h4>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm border border-gray-300 dark:border-gray-700">
                <thead className="bg-green-100 dark:bg-green-900/30">
                  <tr>
                    <th className="border border-gray-300 dark:border-gray-700 px-3 py-2 text-left">
                      Catégorie
                    </th>
                    <th className="border border-gray-300 dark:border-gray-700 px-3 py-2 text-right">
                      Montant
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(balanceSheet.revenues).map(
                    ([category, amount]) => (
                      <tr key={category}>
                        <td className="border border-gray-300 dark:border-gray-700 px-3 py-2">
                          {category}
                        </td>
                        <td className="border border-gray-300 dark:border-gray-700 px-3 py-2 text-right">
                          {amount.toFixed(2)} €
                        </td>
                      </tr>
                    )
                  )}
                  <tr className="bg-green-50 dark:bg-green-900/20 font-bold">
                    <td className="border border-gray-300 dark:border-gray-700 px-3 py-2">
                      TOTAL PRODUITS
                    </td>
                    <td className="border border-gray-300 dark:border-gray-700 px-3 py-2 text-right">
                      {balanceSheet.totalRevenues.toFixed(2)} €
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Expenses */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-red-700 dark:text-red-400 mb-3">
              📉 Charges (Dépenses)
            </h4>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm border border-gray-300 dark:border-gray-700">
                <thead className="bg-red-100 dark:bg-red-900/30">
                  <tr>
                    <th className="border border-gray-300 dark:border-gray-700 px-3 py-2 text-left">
                      Catégorie
                    </th>
                    <th className="border border-gray-300 dark:border-gray-700 px-3 py-2 text-right">
                      Montant
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(balanceSheet.expenses).map(
                    ([category, amount]) => (
                      <tr key={category}>
                        <td className="border border-gray-300 dark:border-gray-700 px-3 py-2">
                          {category}
                        </td>
                        <td className="border border-gray-300 dark:border-gray-700 px-3 py-2 text-right">
                          {amount.toFixed(2)} €
                        </td>
                      </tr>
                    )
                  )}
                  <tr className="bg-red-50 dark:bg-red-900/20 font-bold">
                    <td className="border border-gray-300 dark:border-gray-700 px-3 py-2">
                      TOTAL CHARGES
                    </td>
                    <td className="border border-gray-300 dark:border-gray-700 px-3 py-2 text-right">
                      {balanceSheet.totalExpenses.toFixed(2)} €
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Net result */}
          <div
            className={`p-4 rounded-lg border-2 ${
              balanceSheet.netResult >= 0
                ? "bg-green-50 dark:bg-green-900/20 border-green-500"
                : "bg-red-50 dark:bg-red-900/20 border-red-500"
            }`}
          >
            <div className="flex justify-between items-center">
              <span className="text-lg font-bold">RÉSULTAT NET :</span>
              <span
                className={`text-2xl font-bold ${
                  balanceSheet.netResult >= 0
                    ? "text-green-700 dark:text-green-400"
                    : "text-red-700 dark:text-red-400"
                }`}
              >
                {balanceSheet.netResult.toFixed(2)} €
              </span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              {balanceSheet.netResult >= 0
                ? "✓ Votre SCI est bénéficiaire"
                : "⚠️ Votre SCI est déficitaire"}
            </p>
          </div>

          {/* Generate PDF button */}
          <div className="mt-6 flex justify-center">
            <button
              onClick={generatePDF}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2 text-lg"
            >
              📄 Générer le bilan PDF
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
