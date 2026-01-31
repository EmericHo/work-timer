"use client";

import Link from "next/link";
import RegexTester from "@/components/RegexTester";

export default function RegexTesterPage() {
  return (
    <div className="min-h-screen flex flex-col p-4 sm:p-6 md:p-8">
      <header className="flex-shrink-0 mb-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-3">
          Testeur d&apos;Expressions Régulières (Regex) en Ligne
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-400 text-sm sm:text-base max-w-3xl mx-auto">
          Testez et validez vos expressions régulières en temps réel. Outil gratuit avec coloration syntaxique, 
          explications des correspondances et support complet des flags regex.
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
          <RegexTester />
        </div>

        {/* SEO Content */}
        <section className="mt-8 space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Qu&apos;est-ce qu&apos;une expression régulière ?</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Une expression régulière (regex ou regexp) est une séquence de caractères qui forme un motif de 
              recherche. Les regex sont utilisées pour rechercher, valider et manipuler du texte selon des 
              patterns complexes. Elles sont un outil puissant pour les développeurs, permettant de traiter 
              des chaînes de caractères de manière sophistiquée avec une syntaxe compacte.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Par exemple, l&apos;expression <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">\d{'{3}'}-\d{'{2}'}-\d{'{4}'}</code> 
              peut valider un numéro de sécurité sociale au format 123-45-6789. Les regex supportent des 
              métacaractères spéciaux comme . (n&apos;importe quel caractère), * (zéro ou plus), + (un ou plus), 
              ? (zéro ou un), et bien d&apos;autres pour créer des patterns flexibles.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Notre testeur de regex vous permet de développer et tester vos expressions régulières en temps réel, 
              avec visualisation des correspondances et support des différents flags pour personnaliser le comportement 
              de la recherche.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Syntaxe de base des regex</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="text-xl font-semibold mb-2">📝 Caractères littéraux</h3>
                <p className="mb-2">
                  Les caractères normaux correspondent à eux-mêmes. Par exemple, <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">cat</code> 
                  trouve &quot;cat&quot; dans le texte. Les caractères spéciaux (. * + ? [ ] {'{}'} ( ) ^ $ | \) doivent 
                  être échappés avec \ pour être recherchés littéralement.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🎯 Classes de caractères</h3>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li><code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">[abc]</code> - Correspond à a, b ou c</li>
                  <li><code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">[a-z]</code> - Correspond à toute lettre minuscule</li>
                  <li><code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">[^abc]</code> - Correspond à tout sauf a, b ou c</li>
                  <li><code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">\d</code> - Chiffre (équivalent à [0-9])</li>
                  <li><code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">\w</code> - Mot (lettres, chiffres, underscore)</li>
                  <li><code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">\s</code> - Espace blanc (espace, tab, saut de ligne)</li>
                  <li><code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">.</code> - N&apos;importe quel caractère (sauf saut de ligne)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🔢 Quantificateurs</h3>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li><code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">*</code> - Zéro ou plus d&apos;occurrences</li>
                  <li><code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">+</code> - Une ou plus d&apos;occurrences</li>
                  <li><code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">?</code> - Zéro ou une occurrence (optionnel)</li>
                  <li><code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">{'{n}'}</code> - Exactement n occurrences</li>
                  <li><code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">{'{n,}'}</code> - Au moins n occurrences</li>
                  <li><code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">{'{n,m}'}</code> - Entre n et m occurrences</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">⚓ Ancres et limites</h3>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li><code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">^</code> - Début de ligne</li>
                  <li><code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">$</code> - Fin de ligne</li>
                  <li><code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">\b</code> - Limite de mot</li>
                  <li><code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">\B</code> - Non-limite de mot</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Les flags regex expliqués</h2>
            <div className="space-y-3 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="font-semibold mb-1">🌐 g (global)</h3>
                <p className="text-sm">
                  Trouve toutes les correspondances dans le texte, pas seulement la première. Sans ce flag, la 
                  recherche s&apos;arrête après la première correspondance trouvée.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">🔤 i (insensitive)</h3>
                <p className="text-sm">
                  Rend la recherche insensible à la casse (majuscules/minuscules). Par exemple, 
                  <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">/hello/i</code> trouvera &quot;Hello&quot;, 
                  &quot;HELLO&quot; et &quot;hello&quot;.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">📄 m (multiline)</h3>
                <p className="text-sm">
                  Modifie le comportement de ^ et $ pour qu&apos;ils correspondent au début/fin de chaque ligne plutôt 
                  qu&apos;au début/fin de toute la chaîne. Utile pour traiter du texte multi-lignes.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">🔍 s (dotAll)</h3>
                <p className="text-sm">
                  Permet au point . de correspondre aussi aux sauts de ligne. Par défaut, le point correspond à 
                  tout sauf aux retours à la ligne (\n).
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">🌍 u (unicode)</h3>
                <p className="text-sm">
                  Active le mode Unicode, permettant de travailler correctement avec les caractères Unicode, 
                  emojis et caractères spéciaux. Recommandé pour un traitement moderne du texte.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Patterns regex courants</h2>
            <div className="space-y-3 text-gray-700 dark:text-gray-300">
              <div className="text-sm">
                <p className="font-semibold">📧 Email :</p>
                <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded block mt-1">
                  [a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{'{2,}'}
                </code>
              </div>
              <div className="text-sm">
                <p className="font-semibold">🔗 URL :</p>
                <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded block mt-1">
                  https?://[^\s]+
                </code>
              </div>
              <div className="text-sm">
                <p className="font-semibold">📱 Téléphone français :</p>
                <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded block mt-1">
                  0[1-9]([0-9]{'{2}'}{'}'}){'{4}'}
                </code>
              </div>
              <div className="text-sm">
                <p className="font-semibold">🎨 Couleur HEX :</p>
                <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded block mt-1">
                  #[0-9A-Fa-f]{'{6}'}
                </code>
              </div>
              <div className="text-sm">
                <p className="font-semibold">📅 Date (JJ/MM/AAAA) :</p>
                <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded block mt-1">
                  \d{'{2}'}/\d{'{2}'}/\d{'{4}'}
                </code>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Avantages de notre testeur de regex</h2>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Test en temps réel</strong> - Voyez instantanément les correspondances pendant que vous tapez
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Coloration syntaxique</strong> - Les correspondances sont mises en évidence dans le texte
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Support complet des flags</strong> - Testez avec g, i, m, s, u et leurs combinaisons
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>100% Gratuit</strong> - Utilisez sans limite pour développer vos regex
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Traitement local</strong> - Votre texte reste privé dans votre navigateur
                </span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
