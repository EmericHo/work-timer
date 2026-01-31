"use client";

import Link from "next/link";
import TextRepeater from "@/components/TextRepeater";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faBullseye, faChartBar, faDatabase, faFileAlt, faGamepad, faHashtag, faLaptop, faPalette, faPen } from '@fortawesome/free-solid-svg-icons';

export default function TextRepeaterPage() {
  return (
    <div className="min-h-screen flex flex-col p-4 sm:p-6 md:p-8">
      <header className="flex-shrink-0 mb-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-3">
          Répéteur de Texte en Ligne Gratuit
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-400 text-sm sm:text-base max-w-3xl mx-auto">
          Répétez n&apos;importe quel texte un nombre illimité de fois instantanément. Outil gratuit pour 
          générer du contenu de test, créer des motifs, ou automatiser la répétition de texte.
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
          <TextRepeater />
        </div>

        {/* SEO Content */}
        <section className="mt-8 space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">À quoi sert un répéteur de texte ?</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Un répéteur de texte est un outil simple mais étonnamment utile qui duplique n&apos;importe quelle 
              chaîne de caractères le nombre de fois souhaité. Bien que cela puisse sembler basique, cet outil 
              trouve de nombreuses applications pratiques dans le développement web, le design, les tests logiciels, 
              la création de contenu et même l&apos;éducation. Il permet d&apos;économiser un temps considérable 
              en automatisant une tâche répétitive qui serait fastidieuse manuellement.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Dans le développement web et le design, les répéteurs de texte sont essentiels pour générer du 
              contenu fictif (lorem ipsum n&apos;est pas toujours adapté), tester le comportement d&apos;interfaces 
              avec différentes longueurs de texte, créer des datasets de test, ou générer rapidement du code 
              répétitif. Par exemple, si vous devez créer 100 lignes de données CSV pour tester l&apos;import 
              d&apos;un fichier, ou générer des éléments de liste HTML identiques, un répéteur vous fait gagner 
              des heures.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Notre répéteur de texte en ligne est optimisé pour gérer de grandes quantités de répétitions sans 
              ralentir votre navigateur. Vous pouvez personnaliser le séparateur entre chaque répétition (retour 
              à la ligne, espace, virgule, ou aucun), copier le résultat en un clic, et même télécharger le texte 
              répété dans un fichier. L&apos;outil fonctionne entièrement dans votre navigateur, garantissant la 
              confidentialité de votre contenu.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Cas d&apos;usage en développement web</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faLaptop} className="inline" /> Tests d&apos;interfaces utilisateur</h3>
                <p className="mb-2">
                  Testez comment vos designs réagissent à différentes quantités de contenu :
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Générez des titres très longs pour vérifier le comportement du text-overflow</li>
                  <li>Créez des listes avec des centaines d&apos;éléments pour tester la pagination</li>
                  <li>Simulez des commentaires ou des posts utilisateurs de longueurs variables</li>
                  <li>Vérifiez le responsive design avec des paragraphes de différentes tailles</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faDatabase} className="inline" /> Génération de données de test</h3>
                <p className="mb-2">
                  Créez rapidement des jeux de données pour vos tests unitaires ou d&apos;intégration :
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Générez des lignes CSV identiques pour tester l&apos;import de fichiers</li>
                  <li>Créez des tableaux JSON avec des données répétitives</li>
                  <li>Produisez des requêtes SQL INSERT multiples pour peupler une base de test</li>
                  <li>Fabriquez des fichiers de logs volumineux pour tester les performances</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faPalette} className="inline" /> Création de motifs HTML/CSS</h3>
                <p className="mb-2">
                  Générez du code répétitif rapidement :
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Créez 50 divs identiques pour tester une grille CSS</li>
                  <li>Générez des éléments de liste &lt;li&gt; pour une navigation</li>
                  <li>Produisez des colonnes de tableau &lt;td&gt; pour un design responsive</li>
                  <li>Dupliquez des composants pour tester la performance du rendu</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faFileAlt} className="inline" /> Placeholder et contenu factice</h3>
                <p className="mb-2">
                  Créez du contenu temporaire plus varié que le lorem ipsum :
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Répétez &quot;Texte de démonstration&quot; pour un prototype réaliste</li>
                  <li>Générez des noms d&apos;utilisateurs fictifs (User1, User2, ... User100)</li>
                  <li>Créez des titres d&apos;articles de blog pour visualiser une liste</li>
                  <li>Produisez des tags ou catégories pour tester leur affichage</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Applications créatives et éducatives</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faPen} className="inline" /> Écriture et typographie</h3>
                <p className="mb-2">
                  Utilisations créatives pour les auteurs et designers :
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Créez des effets poétiques avec la répétition (technique littéraire anaphore)</li>
                  <li>Testez différentes polices avec le même texte répété</li>
                  <li>Générez des motifs textuels pour des designs graphiques</li>
                  <li>Créez des backgrounds textuels artistiques</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faBook} className="inline" /> Éducation et apprentissage</h3>
                <p className="mb-2">
                  Applications pédagogiques du répéteur de texte :
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Créez des exercices de frappe avec le même mot répété</li>
                  <li>Générez des listes de vocabulaire pour des flashcards</li>
                  <li>Produisez des lignes d&apos;écriture pour pratiquer la calligraphie</li>
                  <li>Fabriquez des exercices de copie pour l&apos;apprentissage de langues</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faGamepad} className="inline" /> Gaming et Discord</h3>
                <p className="mb-2">
                  Usages populaires dans les communautés en ligne :
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Créez des messages d&apos;emphase avec des emojis répétés (à utiliser avec modération !)</li>
                  <li>Générez des séparateurs visuels pour les messages Discord</li>
                  <li>Fabriquez des ASCII art répétitifs</li>
                  <li>Créez des messages de spam pour tester la modération (dans un contexte contrôlé)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faChartBar} className="inline" /> Tableurs et traitement de données</h3>
                <p className="mb-2">
                  Gagnez du temps dans vos manipulations de données :
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Remplissez rapidement des colonnes Excel/Google Sheets avec la même valeur</li>
                  <li>Créez des templates de factures avec des lignes identiques</li>
                  <li>Générez des formules répétitives à coller dans un tableur</li>
                  <li>Produisez des séquences pour le publipostage (mailing)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Astuces et techniques avancées</h2>
            <div className="space-y-3 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="font-semibold mb-1"><FontAwesomeIcon icon={faHashtag} className="inline" /> Créer des séquences numérotées</h3>
                <p className="text-sm">
                  Pour créer &quot;Item 1, Item 2, Item 3...&quot;, répétez votre texte puis utilisez un éditeur 
                  de texte avec recherche/remplacement par expressions régulières, ou un script. Certains outils 
                  avancés offrent cette fonctionnalité native. Astuce : dans Excel/Sheets, utilisez la poignée de 
                  recopie avec incrément automatique.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">📋 Combiner avec d&apos;autres outils</h3>
                <p className="text-sm">
                  Utilisez le répéteur en combinaison avec d&apos;autres outils : générateurs de lorem ipsum pour 
                  varier le contenu, générateurs d&apos;UUID pour créer des identifiants uniques, ou convertisseurs 
                  de format. Workflow : générer du texte → répéter → formater → exporter.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1"><FontAwesomeIcon icon={faBullseye} className="inline" /> Optimiser les performances</h3>
                <p className="text-sm">
                  Pour des répétitions très importantes (plus de 100 000), utilisez un séparateur vide ou un espace 
                  plutôt que des retours à la ligne (plus légers en mémoire). Téléchargez le résultat plutôt que 
                  de le copier si le texte dépasse plusieurs Mo. Les navigateurs modernes gèrent bien jusqu&apos;à 
                  1 million de répétitions courtes.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">🔤 Travailler avec des caractères spéciaux</h3>
                <p className="text-sm">
                  Vous pouvez répéter n&apos;importe quel caractère Unicode : emojis 🎉, symboles mathématiques ∑, 
                  caractères de dessin ─, ou caractères invisibles. Utile pour créer des séparateurs visuels, 
                  des motifs ASCII art, ou des espaces insécables multiples pour forcer un espacement.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">💾 Sauvegarder vos patterns fréquents</h3>
                <p className="text-sm">
                  Si vous répétez souvent les mêmes textes (templates de code, structures HTML, etc.), sauvegardez-les 
                  dans un fichier texte ou utilisez des snippets dans votre éditeur de code (VS Code, Sublime Text). 
                  Créez une bibliothèque de patterns réutilisables pour gagner encore plus de temps.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Alternatives programmatiques</h2>
            <div className="space-y-3 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="font-semibold mb-1">JavaScript</h3>
                <pre className="bg-gray-900 text-gray-100 p-3 rounded text-xs overflow-x-auto mt-2">
{`// Méthode simple
const repeated = "Hello ".repeat(5); // "Hello Hello Hello Hello Hello "

// Avec séparateur personnalisé
const text = Array(5).fill("Item").join(", "); // "Item, Item, Item, Item, Item"

// Avec numérotation
const numbered = Array.from({length: 5}, (_, i) => \`Item \${i+1}\`).join("\\n");`}
                </pre>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Python</h3>
                <pre className="bg-gray-900 text-gray-100 p-3 rounded text-xs overflow-x-auto mt-2">
{`# Méthode simple
repeated = "Hello " * 5

# Avec séparateur
text = ", ".join(["Item"] * 5)

# Avec numérotation
numbered = "\\n".join([f"Item {i+1}" for i in range(5)])`}
                </pre>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Bash / Terminal</h3>
                <pre className="bg-gray-900 text-gray-100 p-3 rounded text-xs overflow-x-auto mt-2">
{`# Avec seq et xargs
seq 5 | xargs -I {} echo "Hello"

# Avec printf
printf 'Hello\\n%.0s' {1..5}

# Avec yes (jusqu'à interruption Ctrl+C)
yes "Hello" | head -n 5`}
                </pre>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Questions fréquentes sur le répéteur de texte</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Y a-t-il une limite au nombre de répétitions ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Notre outil peut techniquement gérer des millions de répétitions, mais la limite pratique dépend 
                  de votre navigateur et de la RAM disponible. Pour du texte court, 100 000 répétitions fonctionnent 
                  sans problème. Pour du texte long, limitez-vous à quelques milliers. Si le navigateur ralentit ou 
                  plante, réduisez le nombre de répétitions ou téléchargez le résultat par lots.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Mon texte répété est-il sauvegardé ou envoyé quelque part ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Non, absolument pas. Notre répéteur de texte fonctionne entièrement dans votre navigateur côté 
                  client. Aucune donnée n&apos;est envoyée à nos serveurs. Vous pouvez même utiliser l&apos;outil 
                  hors ligne une fois la page chargée. Votre contenu reste 100% confidentiel et privé.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Puis-je répéter du texte avec des sauts de ligne ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Oui ! L&apos;outil préserve tous les caractères de votre texte original, y compris les sauts de 
                  ligne, tabulations, espaces multiples, etc. Si vous collez un paragraphe avec des retours à la 
                  ligne, chaque répétition conservera cette structure. Choisissez ensuite le séparateur approprié 
                  entre les répétitions (généralement un double retour à la ligne pour séparer les blocs).
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Comment répéter du code avec indentation ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Collez votre code dans le champ de texte (l&apos;indentation sera préservée), spécifiez le nombre 
                  de répétitions, et choisissez le séparateur approprié (généralement un retour à la ligne). Le 
                  résultat conservera l&apos;espacement et les tabulations. Pour du code avec numérotation 
                  automatique (ligne 1, ligne 2...), vous devrez utiliser un script ou un éditeur avec macro.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
