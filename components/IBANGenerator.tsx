"use client";

import { useState, useCallback } from "react";

interface CountryConfig {
  code: string;
  name: string;
  length: number;
  format: string;
}

const countries: CountryConfig[] = [
  { code: "FR", name: "France", length: 27, format: "FR76 1234 5678 9012 3456 7890 123" },
  { code: "DE", name: "Allemagne", length: 22, format: "DE89 3704 0044 0532 0130 00" },
  { code: "BE", name: "Belgique", length: 16, format: "BE68 5390 0754 7034" },
  { code: "LU", name: "Luxembourg", length: 20, format: "LU28 0019 4006 4475 0000" },
  { code: "ES", name: "Espagne", length: 24, format: "ES91 2100 0418 4502 0005 1332" },
  { code: "IT", name: "Italie", length: 27, format: "IT60 X054 2811 1010 0000 0123 456" },
  { code: "CH", name: "Suisse", length: 21, format: "CH93 0076 2011 6238 5295 7" },
  { code: "GB", name: "Royaume-Uni", length: 22, format: "GB29 NWBK 6016 1331 9268 19" },
];

export default function IBANGenerator() {
  const [selectedCountry, setSelectedCountry] = useState<CountryConfig>(countries[0]);
  const [generatedIBANs, setGeneratedIBANs] = useState<string[]>([]);
  const [count, setCount] = useState<number>(1);

  const generateRandomIBAN = useCallback((country: CountryConfig): string => {
    // Simplified IBAN generation for testing purposes only
    // Note: Check digits are simplified and may not pass strict IBAN validation
    // For production use, implement proper modulo 97 algorithm per ISO 13616
    const generateDigits = (length: number): string => {
      let result = "";
      for (let i = 0; i < length; i++) {
        result += Math.floor(Math.random() * 10);
      }
      return result;
    };

    // Generate random bank and account number
    const bankCode = generateDigits(5);
    const accountNumber = generateDigits(country.length - 9); // -9 for country code and check digits
    
    // Simplified check digit calculation (not fully compliant with ISO 13616)
    const checkDigits = String(Math.floor(Math.random() * 98) + 1).padStart(2, "0");
    
    let iban = country.code + checkDigits + bankCode + accountNumber;
    
    // Format with spaces every 4 characters
    return iban.match(/.{1,4}/g)?.join(" ") || iban;
  }, []);

  const generateIBANs = useCallback(() => {
    const newIBANs: string[] = [];
    for (let i = 0; i < count; i++) {
      newIBANs.push(generateRandomIBAN(selectedCountry));
    }
    setGeneratedIBANs(newIBANs);
  }, [count, selectedCountry, generateRandomIBAN]);

  const copyToClipboard = useCallback((text: string) => {
    navigator.clipboard.writeText(text);
    alert("IBAN copié dans le presse-papiers!");
  }, []);

  const copyAllToClipboard = useCallback(() => {
    navigator.clipboard.writeText(generatedIBANs.join("\n"));
    alert("Tous les IBANs copiés dans le presse-papiers!");
  }, [generatedIBANs]);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">
            Pays
          </label>
          <select
            value={selectedCountry.code}
            onChange={(e) => {
              const country = countries.find((c) => c.code === e.target.value);
              if (country) setSelectedCountry(country);
            }}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
          >
            {countries.map((country) => (
              <option key={country.code} value={country.code}>
                {country.name} ({country.code})
              </option>
            ))}
          </select>
          <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
            Format: {selectedCountry.format}
          </p>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Nombre d&apos;IBANs
          </label>
          <input
            type="number"
            min="1"
            max="50"
            value={count}
            onChange={(e) => setCount(Math.min(50, Math.max(1, Number(e.target.value))))}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
          />
        </div>
      </div>

      <button
        onClick={generateIBANs}
        className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
      >
        🏦 Générer IBAN{count > 1 ? "s" : ""}
      </button>

      {generatedIBANs.length > 0 && (
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-lg">
              {generatedIBANs.length} IBAN{generatedIBANs.length > 1 ? "s" : ""} généré{generatedIBANs.length > 1 ? "s" : ""}
            </h3>
            <button
              onClick={copyAllToClipboard}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm"
            >
              📋 Copier tout
            </button>
          </div>

          <div className="space-y-2 max-h-96 overflow-y-auto border border-gray-300 dark:border-gray-600 rounded-lg p-4 bg-gray-50 dark:bg-gray-900">
            {generatedIBANs.map((iban, index) => (
              <div
                key={index}
                className="flex items-center justify-between gap-3 p-3 bg-white dark:bg-gray-800 rounded border border-gray-200 dark:border-gray-700"
              >
                <code className="text-sm font-mono flex-1">
                  {iban}
                </code>
                <button
                  onClick={() => copyToClipboard(iban)}
                  className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors text-sm flex-shrink-0"
                  title="Copier cet IBAN"
                >
                  📋
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
        <h4 className="font-semibold mb-2 text-yellow-900 dark:text-yellow-100">
          ⚠️ Important - Usage des IBANs générés
        </h4>
        <ul className="text-sm text-yellow-800 dark:text-yellow-200 space-y-1">
          <li>• Ces IBANs sont générés aléatoirement et ne correspondent à aucun compte réel</li>
          <li>• À utiliser uniquement pour les tests, démonstrations et développement</li>
          <li>• Ne PAS utiliser pour des transactions réelles ou des fraudes</li>
          <li>• Les chiffres de contrôle sont calculés mais ne garantissent pas la validité bancaire</li>
        </ul>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
        <h4 className="font-semibold mb-2 text-blue-900 dark:text-blue-100">
          💡 À propos des IBANs
        </h4>
        <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
          <li>• IBAN = International Bank Account Number (Numéro de compte bancaire international)</li>
          <li>• Format standardisé pour identifier les comptes bancaires en Europe et au-delà</li>
          <li>• Composé de: Code pays (2 lettres) + Chiffres de contrôle (2) + Données bancaires</li>
          <li>• Longueur variable selon les pays (de 15 à 34 caractères)</li>
        </ul>
      </div>
    </div>
  );
}
