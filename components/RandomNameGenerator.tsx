"use client";

import { useState } from "react";

const firstNames = {
  male: ["Alexandre", "Antoine", "Arthur", "Baptiste", "Benjamin", "Charles", "Clément", "Gabriel", "Hugo", "Jules", "Louis", "Lucas", "Mathis", "Nathan", "Nicolas", "Pierre", "Raphaël", "Thomas", "Théo", "Victor"],
  female: ["Amélie", "Camille", "Charlotte", "Chloé", "Clara", "Emma", "Jade", "Julie", "Léa", "Lisa", "Louise", "Manon", "Marie", "Nina", "Océane", "Sarah", "Sophie", "Valentine", "Zoé", "Élise"]
};

const lastNames = ["Bernard", "Dubois", "Durand", "Fournier", "Garcia", "Lambert", "Laurent", "Lefebvre", "Leroy", "Martin", "Moreau", "Petit", "Richard", "Robert", "Roux", "Simon", "Thomas"];

export default function RandomNameGenerator() {
  const [names, setNames] = useState<string[]>([]);
  const [count, setCount] = useState<number>(5);
  const [type, setType] = useState<"full" | "first" | "last" | "username">("full");
  const [gender, setGender] = useState<"male" | "female" | "mixed">("mixed");

  const generateRandomName = (): string => {
    if (type === "last") {
      return lastNames[Math.floor(Math.random() * lastNames.length)];
    }
    
    let firstName = "";
    if (type === "first" || type === "full") {
      if (gender === "mixed") {
        const allFirstNames = [...firstNames.male, ...firstNames.female];
        firstName = allFirstNames[Math.floor(Math.random() * allFirstNames.length)];
      } else {
        firstName = firstNames[gender][Math.floor(Math.random() * firstNames[gender].length)];
      }
      
      if (type === "first") return firstName;
    }
    
    if (type === "username") {
      const allFirstNames = gender === "mixed" 
        ? [...firstNames.male, ...firstNames.female]
        : firstNames[gender];
      firstName = allFirstNames[Math.floor(Math.random() * allFirstNames.length)];
      const number = Math.floor(Math.random() * 9999);
      return `${firstName.toLowerCase()}${number}`;
    }
    
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    return `${firstName} ${lastName}`;
  };

  const generateNames = () => {
    const newNames: string[] = [];
    for (let i = 0; i < count; i++) {
      newNames.push(generateRandomName());
    }
    setNames(newNames);
  };

  const copyName = (name: string) => {
    navigator.clipboard.writeText(name).then(
      () => alert(`"${name}" copié!`),
      () => alert("Erreur lors de la copie")
    );
  };

  const copyAll = () => {
    navigator.clipboard.writeText(names.join("\n")).then(
      () => alert("Tous les noms copiés!"),
      () => alert("Erreur lors de la copie")
    );
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">Type de nom:</label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value as any)}
            className="w-full p-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800"
          >
            <option value="full">Prénom + Nom</option>
            <option value="first">Prénom uniquement</option>
            <option value="last">Nom uniquement</option>
            <option value="username">Pseudo (prénom + chiffres)</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Genre:</label>
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value as any)}
            className="w-full p-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800"
            disabled={type === "last"}
          >
            <option value="mixed">Mixte</option>
            <option value="male">Masculin</option>
            <option value="female">Féminin</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Nombre de noms: {count}</label>
        <input
          type="range"
          min="1"
          max="50"
          value={count}
          onChange={(e) => setCount(parseInt(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />
      </div>

      <button
        onClick={generateNames}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
      >
        🎲 Générer des Noms
      </button>

      {names.length > 0 && (
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold">Noms générés ({names.length}):</h3>
            <button
              onClick={copyAll}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm"
            >
              📋 Tout copier
            </button>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border-2 border-gray-200 dark:border-gray-700 max-h-96 overflow-y-auto">
            {names.map((name, index) => (
              <div
                key={index}
                className="flex justify-between items-center py-2 px-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
              >
                <span className="font-medium">{name}</span>
                <button
                  onClick={() => copyName(name)}
                  className="text-blue-600 hover:text-blue-700 dark:text-blue-400 text-sm"
                >
                  📋
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
        <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">💡 Utilisations</h3>
        <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
          <li>• Personnages de fiction (romans, jeux de rôle, scénarios)</li>
          <li>• Données de test pour applications et bases de données</li>
          <li>• Pseudonymes pour forums ou jeux en ligne</li>
          <li>• Inspiration pour noms de personnages</li>
          <li>• Tests unitaires nécessitant des noms aléatoires</li>
        </ul>
      </div>
    </div>
  );
}
