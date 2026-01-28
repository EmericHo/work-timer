"use client";

import Link from "next/link";
import JSONFormatter from "@/components/JSONFormatter";

export default function JSONFormatterPage() {
  return (
    <div className="min-h-screen flex flex-col p-4 sm:p-6 md:p-8">
      <header className="flex-shrink-0 mb-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-3">
          JSON Formatter - Beautifier et Validateur JSON en Ligne
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-400 text-sm sm:text-base max-w-3xl mx-auto">
          Formatez, validez et minifiez vos données JSON gratuitement. Outil en ligne pour beautifier, 
          indenter et valider la syntaxe de vos fichiers JSON.
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

      <div className="flex-1 max-w-5xl mx-auto w-full">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <JSONFormatter />
        </div>

        {/* SEO Content */}
        <section className="mt-8 space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Qu&apos;est-ce que JSON ?</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              JSON (JavaScript Object Notation) est un format de données léger et facile à lire pour l&apos;échange 
              de données. Il est devenu le standard de facto pour les APIs web modernes, remplaçant en grande partie 
              XML. JSON est à la fois lisible par les humains et facile à parser par les machines.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Le format JSON organise les données sous forme de paires clé-valeur et de tableaux ordonnés. Sa 
              simplicité et sa flexibilité en font le choix préféré des développeurs pour la configuration 
              d&apos;applications, les APIs REST, le stockage de données NoSQL et bien d&apos;autres usages.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Notre JSON formatter en ligne vous permet de valider, formatter et minifier vos données JSON 
              instantanément. L&apos;outil détecte automatiquement les erreurs de syntaxe et vous aide à 
              maintenir un code JSON propre et lisible.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Pourquoi utiliser un JSON Formatter ?</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="text-xl font-semibold mb-2">📖 Améliorer la lisibilité</h3>
                <p>
                  Le JSON minifié est difficile à lire pour les humains. Notre formatter ajoute une indentation 
                  appropriée et des sauts de ligne, transformant une ligne dense en une structure claire et 
                  hiérarchique facile à comprendre et à déboguer.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">✅ Valider la syntaxe</h3>
                <p>
                  L&apos;outil vérifie automatiquement que votre JSON est valide selon les spécifications. 
                  Il détecte les virgules manquantes, les accolades non fermées, les guillemets incorrects et 
                  autres erreurs de syntaxe courantes.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🗜️ Minifier pour la production</h3>
                <p>
                  La minification supprime tous les espaces et sauts de ligne inutiles, réduisant la taille du 
                  fichier pour optimiser les performances réseau. Idéal avant de déployer vos configurations en 
                  production.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🔍 Déboguer rapidement</h3>
                <p>
                  En formatant le JSON, vous pouvez rapidement identifier les structures de données, comprendre 
                  la hiérarchie des objets imbriqués et localiser les problèmes dans vos données.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Cas d&apos;usage courants</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="text-xl font-semibold mb-2">🌐 Développement d&apos;API</h3>
                <p>
                  Lors du développement et du test d&apos;APIs REST, vous devez souvent inspecter et valider 
                  les réponses JSON. Notre outil permet de formatter rapidement les réponses pour les analyser 
                  et identifier les problèmes.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">⚙️ Fichiers de configuration</h3>
                <p>
                  De nombreuses applications modernes utilisent JSON pour la configuration (package.json, 
                  tsconfig.json, etc.). Formatter ces fichiers améliore leur maintenabilité et facilite les 
                  revues de code.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">📊 Manipulation de données</h3>
                <p>
                  Lorsque vous travaillez avec des bases de données NoSQL comme MongoDB ou lors de l&apos;export 
                  de données, le JSON est omniprésent. Formatter ces données facilite leur analyse et leur 
                  traitement.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🔧 Débogage d&apos;applications</h3>
                <p>
                  Les logs d&apos;application et les dumps de données sont souvent en JSON. Un formatter permet 
                  de les rendre lisibles pour comprendre rapidement ce qui se passe dans votre application.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Syntaxe JSON - Guide rapide</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">Types de données supportés</h3>
                <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
{`{
  "string": "Chaîne de caractères",
  "number": 42,
  "float": 3.14,
  "boolean": true,
  "null": null,
  "array": [1, 2, 3],
  "object": {
    "nested": "valeur"
  }
}`}
                </pre>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">Règles importantes</h3>
                <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1 list-disc pl-6">
                  <li>Les clés doivent toujours être entre guillemets doubles</li>
                  <li>Les chaînes de caractères utilisent des guillemets doubles, pas simples</li>
                  <li>Pas de virgule après le dernier élément d&apos;un objet ou tableau</li>
                  <li>Pas de commentaires autorisés dans le JSON standard</li>
                  <li>Les nombres ne peuvent pas commencer par zéro (sauf 0 lui-même)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Questions fréquentes</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Mes données JSON sont-elles envoyées à un serveur ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Non, tout le traitement se fait localement dans votre navigateur. Vos données JSON ne quittent 
                  jamais votre appareil, garantissant une confidentialité totale.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Quelle est la différence entre formatter et minifier ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Formatter ajoute des espaces et des sauts de ligne pour rendre le JSON lisible. Minifier fait 
                  l&apos;inverse : il supprime tous les espaces superflus pour réduire la taille du fichier.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  L&apos;outil supporte-t-il les gros fichiers JSON ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Oui, l&apos;outil peut traiter des fichiers JSON de plusieurs mégaoctets. Cependant, pour des 
                  fichiers très volumineux, le traitement peut prendre quelques secondes.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Puis-je utiliser cet outil pour du JSONL ou JSON Lines ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Cet outil est conçu pour le JSON standard. Pour JSONL (plusieurs objets JSON séparés par des 
                  retours à la ligne), vous devrez traiter chaque ligne individuellement.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Erreurs JSON courantes et solutions</h2>
            <div className="space-y-3 text-gray-700 dark:text-gray-300">
              <div className="bg-gray-50 dark:bg-gray-900 p-3 rounded">
                <p className="font-semibold text-red-600 dark:text-red-400">
                  ❌ Unexpected token } in JSON
                </p>
                <p className="text-sm mt-1">
                  Solution : Virgule en trop après le dernier élément d&apos;un objet ou d&apos;un tableau
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-900 p-3 rounded">
                <p className="font-semibold text-red-600 dark:text-red-400">
                  ❌ Unexpected token ' in JSON
                </p>
                <p className="text-sm mt-1">
                  Solution : Utilisez des guillemets doubles " au lieu de guillemets simples &apos;
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-900 p-3 rounded">
                <p className="font-semibold text-red-600 dark:text-red-400">
                  ❌ Unexpected end of JSON input
                </p>
                <p className="text-sm mt-1">
                  Solution : Accolade ou crochet non fermé quelque part dans votre JSON
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
