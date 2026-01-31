"use client";

import Link from "next/link";
import DiceRoller from "@/components/DiceRoller";

export default function DiceRollerPage() {
  return (
    <div className="min-h-screen flex flex-col p-4 sm:p-6 md:p-8">
      <header className="flex-shrink-0 mb-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-3">
          Lanceur de Dés en Ligne pour Jeux de Rôle D&D
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-400 text-sm sm:text-base max-w-3xl mx-auto">
          Lancez des dés virtuels pour vos parties de D&D, Pathfinder et autres jeux de rôle. 
          Outil gratuit avec support de tous les dés : D4, D6, D8, D10, D12, D20, D100.
        </p>
        <div className="text-center mt-3">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline text-sm"
          >
            ← Retour à l&apos;accueil
          </Link>
        </div>
      </header>

      <div className="flex-1 max-w-4xl mx-auto w-full">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <DiceRoller />
        </div>

        {/* SEO Content */}
        <section className="mt-8 space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Les dés dans les jeux de rôle</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Les dés polyédriques sont au cœur des jeux de rôle comme Donjons et Dragons (D&D), Pathfinder, 
              et de nombreux autres systèmes de jeu. Contrairement aux jeux classiques qui utilisent uniquement 
              des dés à 6 faces, les jeux de rôle utilisent un ensemble de dés de formes différentes pour générer 
              de l&apos;aléatoire avec diverses distributions de probabilités.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Chaque type de dé a un usage spécifique dans le jeu : le D20 détermine le succès ou l&apos;échec 
              des actions, les dés de dégâts (D4, D6, D8, D10, D12) calculent les points de dégâts infligés 
              par les armes et sorts, et le D100 (ou deux D10) est utilisé pour les tables de rencontre aléatoire 
              et autres événements avec 100 possibilités.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Notre lanceur de dés virtuel vous permet de lancer n&apos;importe quelle combinaison de dés 
              instantanément, parfait pour les parties en ligne, quand vous avez oublié vos dés physiques, ou 
              simplement pour la praticité d&apos;avoir tous vos lancers enregistrés.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Types de dés et leurs usages</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="text-xl font-semibold mb-2">🎲 D4 (Tétraèdre - 4 faces)</h3>
                <p className="mb-2">
                  Le plus petit dé, en forme de pyramide. Utilisé pour les dégâts d&apos;armes légères comme les 
                  dagues, ainsi que certains sorts de faible puissance. Sa forme unique le rend parfois difficile 
                  à lire, d&apos;où l&apos;utilité d&apos;un lanceur virtuel.
                </p>
                <p className="text-sm">
                  <strong>Exemples :</strong> Dague (1d4), Dard de rayon de givre (1d4 froid)
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🎲 D6 (Cube - 6 faces)</h3>
                <p className="mb-2">
                  Le dé classique que tout le monde connaît. En JDR, il est utilisé pour diverses armes et sorts 
                  de niveau moyen. Certains systèmes comme Shadowrun utilisent exclusivement des D6.
                </p>
                <p className="text-sm">
                  <strong>Exemples :</strong> Épée courte (1d6), Boule de feu (8d6)
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🎲 D8 (Octaèdre - 8 faces)</h3>
                <p className="mb-2">
                  Dé à 8 faces utilisé pour les armes moyennes et certains sorts. Les classes comme le clerc 
                  ou le moine utilisent souvent des dés de vie en D8.
                </p>
                <p className="text-sm">
                  <strong>Exemples :</strong> Épée longue (1d8), Mains brûlantes (variante), Dés de vie de clerc
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🎲 D10 (Pentagonale - 10 faces)</h3>
                <p className="mb-2">
                  Utilisé pour des dégâts plus importants et comme composant du D100. Deux D10 de couleurs 
                  différentes (un pour les dizaines, un pour les unités) permettent de générer un nombre de 1 à 100.
                </p>
                <p className="text-sm">
                  <strong>Exemples :</strong> Pique (1d10), D100 (percentile dice)
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🎲 D12 (Dodécaèdre - 12 faces)</h3>
                <p className="mb-2">
                  Rarement utilisé mais impressionnant. Principalement pour les grandes armes à deux mains et 
                  les dés de vie de barbares. Sa rareté d&apos;utilisation en fait le moins populaire du set.
                </p>
                <p className="text-sm">
                  <strong>Exemples :</strong> Grande hache (1d12), Dés de vie de barbare
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🎲 D20 (Icosaèdre - 20 faces)</h3>
                <p className="mb-2">
                  Le dé iconique de D&D ! Utilisé pour tous les jets d&apos;attaque, de compétence et de 
                  sauvegarde. Le cœur du système d20. Un 20 naturel est un succès critique, un 1 naturel est 
                  un échec critique.
                </p>
                <p className="text-sm">
                  <strong>Exemples :</strong> Jets d&apos;attaque, tests de compétence, jets de sauvegarde
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🎲 D100 (Percentile - 100 valeurs)</h3>
                <p className="mb-2">
                  Créé en lançant deux D10 (un pour les dizaines, un pour les unités). Utilisé pour les tables 
                  de rencontre aléatoire, les effets de magie sauvage, et tout événement nécessitant 100 
                  possibilités différentes.
                </p>
                <p className="text-sm">
                  <strong>Exemples :</strong> Tables de rencontre, effets de magie sauvage, butins aléatoires
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Notation des dés en JDR</h2>
            <div className="space-y-3 text-gray-700 dark:text-gray-300">
              <p>
                La notation standard pour les lancers de dés suit le format <strong>XdY+Z</strong> où :
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>X</strong> = nombre de dés à lancer (ex: 2 signifie lancer 2 dés)
                </li>
                <li>
                  <strong>d</strong> = le mot &quot;dé&quot; ou &quot;dice&quot; en anglais
                </li>
                <li>
                  <strong>Y</strong> = nombre de faces du dé (ex: d6 = dé à 6 faces)
                </li>
                <li>
                  <strong>+Z</strong> = modificateur optionnel à ajouter au total (ex: +3)
                </li>
              </ul>
              <div className="mt-4 space-y-2 text-sm">
                <p><strong>Exemples de notation :</strong></p>
                <ul className="list-disc pl-6 space-y-1">
                  <li><code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">1d20</code> - Lance un dé à 20 faces</li>
                  <li><code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">2d6</code> - Lance deux dés à 6 faces et additionne les résultats</li>
                  <li><code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">1d20+5</code> - Lance un D20 et ajoute 5 au résultat</li>
                  <li><code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">3d8+4</code> - Lance trois D8, additionne-les et ajoute 4</li>
                  <li><code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">1d100</code> - Lance un percentile (ou deux D10)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Jeux de rôle populaires utilisant ces dés</h2>
            <div className="space-y-3 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="font-semibold mb-1">🐉 Dungeons & Dragons (D&D)</h3>
                <p className="text-sm">
                  Le plus célèbre jeu de rôle au monde. Utilise tous les types de dés polyédriques, avec le D20 
                  comme dé principal. Les éditions 3.5, 4e et 5e utilisent le système d20.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">⚔️ Pathfinder</h3>
                <p className="text-sm">
                  Héritier spirituel de D&D 3.5, utilise le même système de dés. Très populaire auprès des 
                  vétérans des JDR. Pathfinder 2e a modernisé le système tout en gardant les mêmes dés.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">🎭 Call of Cthulhu</h3>
                <p className="text-sm">
                  Utilise principalement le D100 (système percentile) pour résoudre les actions. Les compétences 
                  sont exprimées en pourcentage, et on lance un D100 pour voir si on réussit.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">🌟 Star Wars RPG</h3>
                <p className="text-sm">
                  Selon la version, utilise soit le système d20 (comme D&D), soit des dés spéciaux narratifs. 
                  Les versions plus anciennes utilisaient le D6 exclusivement.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">🦹 Mutants & Masterminds</h3>
                <p className="text-sm">
                  JDR de super-héros utilisant le système d20. Principalement basé sur le D20 pour toutes les 
                  résolutions d&apos;actions.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Avantages du lanceur de dés virtuel</h2>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Tous les dés en un</strong> - D4, D6, D8, D10, D12, D20, D100 disponibles
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Lancers multiples</strong> - Lancez plusieurs dés simultanément
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Historique des lancers</strong> - Gardez une trace de tous vos résultats
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Parties en ligne</strong> - Parfait pour les sessions Discord, Roll20 ou Foundry VTT
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>100% Gratuit</strong> - Lancers illimités sans inscription
                </span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
