"use client";

import { useState } from "react";

const firstNamesFrench = [
  "Alexandre", "Antoine", "Arthur", "Benjamin", "Charles", "Clément", "Daniel", "David",
  "Édouard", "Émile", "Étienne", "François", "Gabriel", "Henri", "Hugo", "Jacques",
  "Jean", "Julien", "Laurent", "Louis", "Lucas", "Marc", "Mathieu", "Maxime",
  "Nathan", "Nicolas", "Olivier", "Paul", "Pierre", "Raphaël", "Thomas", "Vincent",
  "Amélie", "Anaïs", "Camille", "Charlotte", "Chloé", "Claire", "Élise", "Emma",
  "Isabelle", "Julie", "Léa", "Louise", "Lucie", "Manon", "Marie", "Mathilde",
  "Nathalie", "Nina", "Océane", "Pauline", "Sarah", "Sophie", "Valérie", "Zoé"
];

const firstNamesInternational = [
  "Adrian", "Alexander", "Alexis", "Andrew", "Anthony", "Brandon", "Brian", "Christian",
  "Christopher", "Daniel", "David", "Dylan", "Ethan", "Gabriel", "Henry", "Isaac",
  "Jackson", "Jacob", "James", "John", "Jonathan", "Joseph", "Joshua", "Justin",
  "Kevin", "Liam", "Lucas", "Matthew", "Michael", "Nathan", "Nicholas", "Noah",
  "Oliver", "Oscar", "Patrick", "Peter", "Richard", "Robert", "Ryan", "Samuel",
  "Sebastian", "Simon", "Stephen", "Thomas", "William", "Zachary",
  "Abigail", "Alice", "Amelia", "Anna", "Ashley", "Ava", "Bella", "Chloe",
  "Elizabeth", "Emily", "Emma", "Eva", "Grace", "Hannah", "Isabella", "Jessica",
  "Julia", "Katherine", "Laura", "Lily", "Lucy", "Madison", "Maria", "Mia",
  "Natalie", "Olivia", "Rachel", "Rebecca", "Samantha", "Sarah", "Sophia", "Victoria"
];

const lastNamesFrench = [
  "Bernard", "Blanc", "Bonnet", "Chevalier", "David", "Dubois", "Dumont", "Dupont",
  "Durand", "Faure", "Fontaine", "Fournier", "Garcia", "Garnier", "Girard", "Lambert",
  "Laurent", "Lefebvre", "Leroy", "Martin", "Martinez", "Mercier", "Moreau", "Morel",
  "Nicolas", "Petit", "Richard", "Robert", "Robin", "Roux", "Roy", "Simon",
  "Thomas", "Vincent"
];

const lastNamesInternational = [
  "Anderson", "Baker", "Bennett", "Brooks", "Brown", "Campbell", "Carter", "Clark",
  "Collins", "Cooper", "Davis", "Edwards", "Evans", "Foster", "Garcia", "Gray",
  "Green", "Hall", "Harris", "Hughes", "Jackson", "James", "Johnson", "Jones",
  "King", "Lee", "Lewis", "Martin", "Martinez", "Miller", "Mitchell", "Moore",
  "Morgan", "Morris", "Murphy", "Nelson", "Parker", "Phillips", "Roberts", "Robinson",
  "Rodriguez", "Rogers", "Ross", "Russell", "Scott", "Smith", "Taylor", "Thomas",
  "Thompson", "Turner", "Walker", "Ward", "Watson", "White", "Williams", "Wilson",
  "Wood", "Wright", "Young"
];

interface GeneratedName {
  firstName: string;
  lastName: string;
  fullName: string;
}

export default function CharacterNameGenerator() {
  const [names, setNames] = useState<GeneratedName[]>([]);
  const [count, setCount] = useState(10);
  const [excludeNames, setExcludeNames] = useState("");
  const [copied, setCopied] = useState<string | null>(null);

  const allFirstNames = [...firstNamesFrench, ...firstNamesInternational];
  const allLastNames = [...lastNamesFrench, ...lastNamesInternational];

  const generateName = (excludeList: string[]): GeneratedName => {
    let firstName: string;
    let lastName: string;
    let fullName: string;
    let attempts = 0;
    const maxAttempts = 100;

    do {
      firstName = allFirstNames[Math.floor(Math.random() * allFirstNames.length)];
      lastName = allLastNames[Math.floor(Math.random() * allLastNames.length)];
      fullName = `${firstName} ${lastName}`;
      attempts++;
      
      if (attempts >= maxAttempts) {
        break;
      }
    } while (
      excludeList.some(excluded => 
        fullName.toLowerCase().includes(excluded.toLowerCase()) ||
        firstName.toLowerCase() === excluded.toLowerCase() ||
        lastName.toLowerCase() === excluded.toLowerCase()
      )
    );

    return { firstName, lastName, fullName };
  };

  const generateNames = () => {
    const excludeList = excludeNames
      .split(",")
      .map(name => name.trim())
      .filter(name => name.length > 0);

    const newNames: GeneratedName[] = [];
    const uniqueNames = new Set<string>();

    let attempts = 0;
    const maxAttempts = count * 10;

    while (newNames.length < count && attempts < maxAttempts) {
      const name = generateName(excludeList);
      if (!uniqueNames.has(name.fullName)) {
        uniqueNames.add(name.fullName);
        newNames.push(name);
      }
      attempts++;
    }

    setNames(newNames);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(null), 2000);
  };

  const copyAllNames = () => {
    const allNamesText = names.map(n => n.fullName).join("\n");
    navigator.clipboard.writeText(allNamesText);
    setCopied("all");
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="count" className="block text-sm font-medium mb-2">
            Nombre de noms à générer
          </label>
          <input
            id="count"
            type="number"
            min="1"
            max="50"
            value={count}
            onChange={(e) => setCount(Math.max(1, Math.min(50, parseInt(e.target.value) || 1)))}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="exclude" className="block text-sm font-medium mb-2">
            Noms à exclure (séparés par des virgules)
          </label>
          <input
            id="exclude"
            type="text"
            placeholder="ex: Dupont, Martin, Sophie"
            value={excludeNames}
            onChange={(e) => setExcludeNames(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      <button
        onClick={generateNames}
        className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
      >
        🎭 Générer des noms de personnages
      </button>

      {names.length > 0 && (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">
              {names.length} nom{names.length > 1 ? "s" : ""} généré{names.length > 1 ? "s" : ""}
            </h3>
            <button
              onClick={copyAllNames}
              className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg text-sm font-medium transition-colors"
            >
              {copied === "all" ? "✓ Copié !" : "📋 Copier tout"}
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {names.map((name, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 hover:shadow-md transition-shadow"
              >
                <div className="flex-1">
                  <div className="font-semibold text-lg">{name.fullName}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    Prénom: {name.firstName} · Nom: {name.lastName}
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(name.fullName)}
                  className="ml-3 px-3 py-2 text-sm bg-blue-500 hover:bg-blue-600 text-white rounded transition-colors flex-shrink-0"
                  title="Copier"
                >
                  {copied === name.fullName ? "✓" : "📋"}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
        <h4 className="font-semibold mb-2 text-blue-900 dark:text-blue-100">
          💡 Conseils d&apos;utilisation
        </h4>
        <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
          <li>• Mélange de prénoms et noms français et internationaux</li>
          <li>• Excluez des noms spécifiques pour plus de contrôle</li>
          <li>• Générez jusqu&apos;à 50 noms à la fois</li>
          <li>• Copiez individuellement ou tous en une fois</li>
        </ul>
      </div>
    </div>
  );
}
