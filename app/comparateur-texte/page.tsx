"use client";

import Link from "next/link";
import TextDiffChecker from "@/components/TextDiffChecker";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBalanceScale, faBook, faCheck, faCog, faFileAlt, faGlobe, faLaptop, faSearch } from '@fortawesome/free-solid-svg-icons';

export default function TextDiffCheckerPage() {
  return (
    <div className="min-h-screen flex flex-col p-4 sm:p-6 md:p-8">
      <header className="flex-shrink-0 mb-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-3">
          Comparateur de Texte en Ligne
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-400 text-sm sm:text-base max-w-3xl mx-auto">
          Comparez deux textes et visualisez les différences ligne par ligne.
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
          <TextDiffChecker />
        </div>

        {/* SEO Content */}
        <section className="mt-8 space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Qu&apos;est-ce qu&apos;un comparateur de texte ?</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Un comparateur de texte, également appelé outil de diff ou comparateur de différences, est 
              un utilitaire en ligne qui permet de comparer deux textes côte à côte et d&apos;identifier 
              visuellement toutes les différences entre eux. Chaque ligne ajoutée, supprimée ou modifiée 
              est mise en évidence avec des couleurs distinctives pour faciliter la lecture.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Cet outil est indispensable pour les développeurs qui comparent des versions de code, les 
              rédacteurs qui suivent les modifications de documents, les traducteurs qui vérifient des 
              textes parallèles, et les professionnels qui doivent analyser les changements entre deux 
              versions d&apos;un même document.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Notre comparateur utilise un algorithme de différenciation intelligent qui détecte non 
              seulement les lignes entièrement différentes, mais aussi les modifications partielles au 
              sein d&apos;une même ligne, offrant ainsi une analyse précise et détaillée des changements.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Comment utiliser le comparateur de texte ?</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</span>
                <div>
                  <h3 className="font-semibold mb-1">Collez le texte original</h3>
                  <p>Dans le panneau de gauche, collez ou saisissez votre texte original, c&apos;est-à-dire la version de référence à laquelle vous souhaitez comparer les modifications.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">2</span>
                <div>
                  <h3 className="font-semibold mb-1">Collez le texte modifié</h3>
                  <p>Dans le panneau de droite, collez ou saisissez le texte modifié, c&apos;est-à-dire la nouvelle version que vous voulez comparer à l&apos;original.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">3</span>
                <div>
                  <h3 className="font-semibold mb-1">Analysez les différences</h3>
                  <p>La comparaison se fait instantanément. Les lignes supprimées apparaissent en rouge, les lignes ajoutées en vert, et les lignes modifiées sont surlignées pour montrer exactement ce qui a changé.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">4</span>
                <div>
                  <h3 className="font-semibold mb-1">Naviguez entre les différences</h3>
                  <p>Pour les longs documents, utilisez la navigation pour sauter rapidement d&apos;une différence à l&apos;autre sans avoir à faire défiler manuellement tout le texte.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Cas d&apos;usage du comparateur de texte</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faLaptop} className="inline" /> Développement logiciel</h3>
                <p>
                  Les développeurs utilisent cet outil pour comparer des versions de code source, identifier 
                  les modifications apportées lors d&apos;une mise à jour, vérifier les différences entre branches 
                  Git, ou analyser les changements avant un merge. Essentiel pour la revue de code et le 
                  débogage.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faFileAlt} className="inline" /> Rédaction et édition</h3>
                <p>
                  Les rédacteurs, éditeurs et auteurs comparent différentes versions d&apos;articles, de rapports 
                  ou de manuscrits pour suivre les révisions. Identifiez rapidement ce qui a été ajouté, 
                  supprimé ou modifié entre deux versions d&apos;un document.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faBalanceScale} className="inline" /> Juridique et contrats</h3>
                <p>
                  Les avocats et juristes utilisent ce comparateur pour analyser les modifications entre 
                  différentes versions de contrats, accords ou documents légaux. Assurez-vous qu&apos;aucun 
                  changement critique n&apos;a été apporté sans votre approbation.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faGlobe} className="inline" /> Traduction</h3>
                <p>
                  Les traducteurs comparent le texte source et la traduction côte à côte, vérifient les 
                  révisions d&apos;une traduction, ou analysent différentes versions linguistiques d&apos;un même 
                  document pour assurer la cohérence.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faBook} className="inline" /> Recherche académique</h3>
                <p>
                  Les chercheurs et universitaires comparent différentes versions d&apos;articles scientifiques, 
                  suivent les modifications suggérées par les pairs reviewers, ou analysent les variations 
                  entre différentes sources textuelles.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faSearch} className="inline" /> Détection de plagiat</h3>
                <p>
                  Comparez deux textes pour identifier des similitudes suspectes ou vérifier si du contenu 
                  a été copié sans attribution. Utile pour les enseignants, éditeurs et créateurs de contenu 
                  protégeant leur propriété intellectuelle.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faCog} className="inline" /> Configuration système</h3>
                <p>
                  Les administrateurs système comparent des fichiers de configuration avant et après des 
                  modifications, vérifient les changements dans les logs système, ou analysent les 
                  différences entre environnements (dev, staging, production).
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Code couleur des différences</h2>
            <div className="space-y-3 text-gray-700 dark:text-gray-300">
              <div className="border-l-4 border-red-500 pl-4 bg-red-50 dark:bg-red-900/20 p-3 rounded">
                <h3 className="font-semibold text-red-700 dark:text-red-300">🔴 Lignes supprimées (Rouge)</h3>
                <p className="text-sm">
                  Les lignes mises en évidence en rouge existaient dans le texte original mais ont été 
                  supprimées dans la version modifiée. Elles n&apos;apparaissent que dans le panneau de gauche.
                </p>
              </div>
              <div className="border-l-4 border-green-500 pl-4 bg-green-50 dark:bg-green-900/20 p-3 rounded">
                <h3 className="font-semibold text-green-700 dark:text-green-300">🟢 Lignes ajoutées (Vert)</h3>
                <p className="text-sm">
                  Les lignes mises en évidence en vert sont nouvelles et n&apos;existaient pas dans le texte 
                  original. Elles n&apos;apparaissent que dans le panneau de droite (version modifiée).
                </p>
              </div>
              <div className="border-l-4 border-yellow-500 pl-4 bg-yellow-50 dark:bg-yellow-900/20 p-3 rounded">
                <h3 className="font-semibold text-yellow-700 dark:text-yellow-300">🟡 Lignes modifiées (Jaune/Surligné)</h3>
                <p className="text-sm">
                  Les lignes partiellement modifiées sont surlignées pour montrer exactement quels mots ou 
                  caractères ont été changés. Ces lignes apparaissent dans les deux panneaux avec les 
                  modifications mises en évidence.
                </p>
              </div>
              <div className="border-l-4 border-gray-300 pl-4 bg-gray-50 dark:bg-gray-700/20 p-3 rounded">
                <h3 className="font-semibold">⚪ Lignes identiques (Pas de couleur)</h3>
                <p className="text-sm">
                  Les lignes qui n&apos;ont subi aucune modification apparaissent sans mise en évidence 
                  particulière. Elles sont identiques dans les deux versions du texte.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Conseils pour une comparaison efficace</h2>
            <div className="space-y-3 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="font-semibold mb-1"><FontAwesomeIcon icon={faCheck} className="inline" /> Respectez la structure originale</h3>
                <p className="text-sm">
                  Pour une comparaison optimale, conservez la même structure de paragraphes et de sauts de 
                  ligne dans les deux textes. Les différences de formatage peuvent rendre la comparaison 
                  moins lisible.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1"><FontAwesomeIcon icon={faCheck} className="inline" /> Nettoyez vos textes</h3>
                <p className="text-sm">
                  Supprimez les espaces superflus, les tabulations inutiles et les caractères invisibles 
                  qui pourraient créer de fausses différences. Normalisez les sauts de ligne (LF vs CRLF) 
                  si nécessaire.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1"><FontAwesomeIcon icon={faCheck} className="inline" /> Comparez versions similaires</h3>
                <p className="text-sm">
                  Pour un résultat pertinent, comparez des versions proches du même document. Comparer deux 
                  textes complètement différents donnera un résultat où presque tout est en rouge/vert, 
                  peu utile pour l&apos;analyse.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1"><FontAwesomeIcon icon={faCheck} className="inline" /> Utilisez pour le versioning</h3>
                <p className="text-sm">
                  Avant de valider des modifications importantes, utilisez le comparateur pour revoir tous 
                  les changements. C&apos;est une excellente pratique pour éviter des erreurs involontaires ou 
                  des suppressions accidentelles.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1"><FontAwesomeIcon icon={faCheck} className="inline" /> Attention à la casse et la ponctuation</h3>
                <p className="text-sm">
                  Le comparateur est sensible à la casse (majuscules/minuscules) et à la ponctuation. 
                  &quot;Bonjour&quot; et &quot;bonjour&quot; seront considérés comme différents. Soyez-en conscient lors de 
                  l&apos;analyse des résultats.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1"><FontAwesomeIcon icon={faCheck} className="inline" /> Sauvegardez vos résultats</h3>
                <p className="text-sm">
                  Si vous devez conserver trace de la comparaison, faites une capture d&apos;écran ou copiez 
                  les textes ailleurs. L&apos;outil ne sauvegarde pas automatiquement vos comparaisons.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1"><FontAwesomeIcon icon={faCheck} className="inline" /> Vérifiez les encodages</h3>
                <p className="text-sm">
                  Assurez-vous que les deux textes utilisent le même encodage de caractères (UTF-8 recommandé). 
                  Des encodages différents peuvent causer des problèmes d&apos;affichage, notamment pour les 
                  caractères accentués.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Questions fréquentes</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Quelle est la taille maximale de texte supportée ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  L&apos;outil peut gérer des textes de plusieurs milliers de lignes. Cependant, pour des 
                  performances optimales dans le navigateur, il est recommandé de limiter à quelques milliers 
                  de lignes. Pour des fichiers très volumineux, utilisez des outils desktop spécialisés.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Mes textes sont-ils envoyés à un serveur ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Non, absolument pas. La comparaison s&apos;effectue entièrement dans votre navigateur en 
                  JavaScript. Vos textes ne quittent jamais votre ordinateur, garantissant une 
                  confidentialité totale.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Puis-je comparer des fichiers directement ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Actuellement, l&apos;outil nécessite de copier-coller le contenu texte. Ouvrez vos fichiers 
                  dans un éditeur de texte, copiez leur contenu, puis collez-le dans les panneaux du 
                  comparateur.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  L&apos;outil fonctionne-t-il avec du code source ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Oui, parfaitement. Le comparateur fonctionne avec tout type de texte, y compris le code 
                  source dans n&apos;importe quel langage de programmation (JavaScript, Python, Java, HTML, CSS, 
                  etc.). L&apos;indentation et les espaces sont respectés.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Comment gérer les grands fichiers ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Pour les très gros fichiers, considérez comparer section par section plutôt que le fichier 
                  entier. Ou utilisez des outils de ligne de commande comme &quot;diff&quot; sur Linux/Mac ou des 
                  logiciels desktop spécialisés.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Puis-je inverser les deux panneaux ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Vous pouvez simplement copier le contenu d&apos;un panneau vers l&apos;autre et vice versa. Le 
                  résultat sera inversé : ce qui était en rouge deviendra vert et inversement, mais 
                  l&apos;information reste la même.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Y a-t-il un mode d&apos;affichage unifié ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  L&apos;outil utilise une vue côte à côte (split view) qui est généralement plus claire pour 
                  visualiser les différences. C&apos;est le mode privilégié par la plupart des développeurs et 
                  professionnels pour les comparaisons de texte.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  L&apos;outil est-il gratuit ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Oui, le comparateur de texte est 100% gratuit, sans limitation d&apos;usage, sans inscription 
                  requise et sans publicité intrusive. Utilisez-le autant que nécessaire pour tous vos 
                  besoins professionnels et personnels.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Avantages de notre comparateur</h2>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Comparaison instantanée</strong> - Résultats en temps réel dès la saisie
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Visualisation claire</strong> - Code couleur intuitif pour identifier les différences
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>100% privé</strong> - Traitement local, aucune donnée envoyée au serveur
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Vue côte à côte</strong> - Affichage parallèle pour faciliter la lecture
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Gratuit et illimité</strong> - Aucune restriction d&apos;usage ou de taille
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Multi-usage</strong> - Code, texte, documents, configuration
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Aucune installation</strong> - Fonctionne directement dans le navigateur
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Compatible tous appareils</strong> - PC, Mac, tablette, smartphone
                </span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
