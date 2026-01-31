"use client";

import { useState, useCallback } from "react";

export default function PasswordGenerator() {
  const [password, setPassword] = useState<string>("");
  const [length, setLength] = useState<number>(16);
  const [includeUppercase, setIncludeUppercase] = useState<boolean>(true);
  const [includeLowercase, setIncludeLowercase] = useState<boolean>(true);
  const [includeNumbers, setIncludeNumbers] = useState<boolean>(true);
  const [includeSymbols, setIncludeSymbols] = useState<boolean>(true);
  const [passwordStrength, setPasswordStrength] = useState<string>("");

  const calculateStrength = (pwd: string): string => {
    let strength = 0;
    if (pwd.length >= 8) strength++;
    if (pwd.length >= 12) strength++;
    if (pwd.length >= 16) strength++;
    if (/[a-z]/.test(pwd)) strength++;
    if (/[A-Z]/.test(pwd)) strength++;
    if (/[0-9]/.test(pwd)) strength++;
    if (/[^a-zA-Z0-9]/.test(pwd)) strength++;

    if (strength <= 2) return "Faible";
    if (strength <= 4) return "Moyen";
    if (strength <= 6) return "Fort";
    return "Très Fort";
  };

  const generatePassword = useCallback(() => {
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+-=[]{}|;:,.<>?";

    let charset = "";
    if (includeUppercase) charset += uppercase;
    if (includeLowercase) charset += lowercase;
    if (includeNumbers) charset += numbers;
    if (includeSymbols) charset += symbols;

    if (charset === "") {
      alert("Veuillez sélectionner au moins un type de caractère");
      return;
    }

    let newPassword = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      newPassword += charset[randomIndex];
    }

    setPassword(newPassword);
    setPasswordStrength(calculateStrength(newPassword));
  }, [length, includeUppercase, includeLowercase, includeNumbers, includeSymbols]);

  const copyToClipboard = useCallback(() => {
    if (!password) {
      alert("Générez d'abord un mot de passe!");
      return;
    }
    navigator.clipboard.writeText(password).then(
      () => {
        alert("Mot de passe copié dans le presse-papiers!");
      },
      () => {
        alert("Erreur lors de la copie. Veuillez réessayer.");
      }
    );
  }, [password]);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold mb-4">Options du mot de passe</h2>
        
        <div className="space-y-4">
          <div>
            <label htmlFor="length" className="block text-sm font-medium mb-2">
              Longueur: {length}
            </label>
            <input
              id="length"
              type="range"
              min="4"
              max="64"
              value={length}
              onChange={(e) => setLength(parseInt(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>4</span>
              <span>64</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={includeUppercase}
                onChange={(e) => setIncludeUppercase(e.target.checked)}
                className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
              />
              <span className="text-sm">Majuscules (A-Z)</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={includeLowercase}
                onChange={(e) => setIncludeLowercase(e.target.checked)}
                className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
              />
              <span className="text-sm">Minuscules (a-z)</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={includeNumbers}
                onChange={(e) => setIncludeNumbers(e.target.checked)}
                className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
              />
              <span className="text-sm">Chiffres (0-9)</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={includeSymbols}
                onChange={(e) => setIncludeSymbols(e.target.checked)}
                className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
              />
              <span className="text-sm">Symboles (!@#$...)</span>
            </label>
          </div>
        </div>
      </div>

      <button
        onClick={generatePassword}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
      >
        Générer un Mot de Passe
      </button>

      {password && (
        <div className="space-y-3">
          <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Mot de passe généré:
              </span>
              <span className={`text-sm font-semibold ${
                passwordStrength === "Faible" ? "text-red-600" :
                passwordStrength === "Moyen" ? "text-yellow-600" :
                passwordStrength === "Fort" ? "text-green-600" :
                "text-emerald-600"
              }`}>
                {passwordStrength}
              </span>
            </div>
            <div className="font-mono text-lg break-all bg-white dark:bg-gray-800 p-3 rounded border-2 border-gray-300 dark:border-gray-600">
              {password}
            </div>
          </div>

          <button
            onClick={copyToClipboard}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
          >
            📋 Copier le Mot de Passe
          </button>
        </div>
      )}

      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
        <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
          💡 Conseils de sécurité
        </h3>
        <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
          <li>• Utilisez au moins 12 caractères pour une sécurité optimale</li>
          <li>• Activez tous les types de caractères pour plus de complexité</li>
          <li>• Ne réutilisez jamais le même mot de passe sur plusieurs sites</li>
          <li>• Changez vos mots de passe régulièrement</li>
          <li>• Utilisez un gestionnaire de mots de passe pour les stocker</li>
        </ul>
      </div>
    </div>
  );
}
