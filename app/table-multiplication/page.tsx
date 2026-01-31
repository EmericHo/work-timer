"use client";

import Link from "next/link";
import MultiplicationTable from "@/components/MultiplicationTable";

export default function MultiplicationTablePage() {
  return (
    <div className="min-h-screen flex flex-col p-4 sm:p-6 md:p-8">
      <header className="flex-shrink-0 mb-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-3">
          Table de Multiplication en Ligne
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-400 text-sm sm:text-base max-w-3xl mx-auto">
          Apprenez et pratiquez les tables de multiplication facilement.
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
          <MultiplicationTable />
        </div>

        {/* SEO Content */}
        <section className="mt-8 space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Pourquoi apprendre les tables de multiplication ?</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Les tables de multiplication sont la fondation des mathématiques. Maîtriser ces tables par cœur 
              permet aux enfants (et adultes !) de calculer rapidement et efficacement dans la vie quotidienne, 
              de résoudre des problèmes mathématiques plus complexes, et de développer leur confiance en calcul mental.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Les études en neurosciences cognitives montrent que mémoriser les tables de multiplication libère 
              la mémoire de travail du cerveau, permettant de se concentrer sur la résolution de problèmes plus 
              complexes plutôt que sur les calculs de base. Un élève qui connaît ses tables par cœur peut se 
              concentrer sur la logique d&apos;un problème de division, de fraction, ou d&apos;algèbre sans perdre 
              de l&apos;énergie mentale sur les calculs simples.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Dans la vie réelle, les tables de multiplication sont omniprésentes : calculer un prix en multipliant 
              quantité × tarif unitaire, comprendre les proportions en cuisine (doubler une recette), évaluer des 
              distances (vitesse × temps), calculer des surfaces (longueur × largeur), gérer un budget, comprendre 
              les pourcentages et les réductions... Un adulte qui hésite sur 7×8 perdra du temps et de la confiance 
              dans ces situations quotidiennes.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Notre outil interactif de tables de multiplication rend l&apos;apprentissage ludique et progressif. 
              Que vous soyez parent aidant votre enfant, enseignant préparant des exercices, ou adulte souhaitant 
              rafraîchir vos connaissances, notre application vous permet de pratiquer efficacement avec un retour 
              immédiat sur vos réponses et un suivi de progression.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Comment utiliser notre outil de tables de multiplication ?</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</span>
                <div>
                  <h3 className="font-semibold mb-1">Choisissez votre mode</h3>
                  <p>Sélectionnez entre le mode apprentissage (affichage des tables complètes), le mode pratique 
                  (quiz interactif), ou le mode révision (fiches à imprimer).</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">2</span>
                <div>
                  <h3 className="font-semibold mb-1">Sélectionnez les tables</h3>
                  <p>Choisissez une table spécifique (ex: table de 7) ou mélangez plusieurs tables pour un 
                  entraînement varié. Commencez par les tables simples (2, 5, 10) puis progressez vers les plus 
                  difficiles (7, 8, 9).</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">3</span>
                <div>
                  <h3 className="font-semibold mb-1">Pratiquez et progressez</h3>
                  <p>Répondez aux questions de multiplication. L&apos;outil vous donne un retour instantané (correct/incorrect) 
                  et suit votre score. Répétez les exercices jusqu&apos;à obtenir 100% de bonnes réponses.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">4</span>
                <div>
                  <h3 className="font-semibold mb-1">Suivez vos progrès</h3>
                  <p>Consultez vos statistiques : temps de réponse moyen, taux de réussite par table, points 
                  faibles à travailler. L&apos;outil identifie automatiquement les multiplications qui vous posent 
                  le plus de difficultés.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Méthodes efficaces pour mémoriser les tables</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="text-xl font-semibold mb-2">🎯 Commencez par les tables faciles</h3>
                <p className="mb-2">
                  Créez une base solide avec les tables les plus simples :
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm ml-4">
                  <li><strong>Table de 0</strong> : Tout nombre × 0 = 0 (concept important à comprendre)</li>
                  <li><strong>Table de 1</strong> : Tout nombre × 1 = le nombre lui-même</li>
                  <li><strong>Table de 2</strong> : Doubler un nombre (addition répétée)</li>
                  <li><strong>Table de 5</strong> : Toujours termine par 0 ou 5, lié aux minutes de l&apos;horloge</li>
                  <li><strong>Table de 10</strong> : Ajouter simplement un zéro</li>
                </ul>
                <p className="text-sm mt-2">
                  La maîtrise de ces tables donne confiance et représente déjà 50% des multiplications à connaître !
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🔄 Utilisez la commutativité</h3>
                <p>
                  Propriété magique : 3×7 = 7×3. Cela réduit de moitié le nombre de multiplications à mémoriser ! 
                  Si vous connaissez 4×8=32, vous connaissez automatiquement 8×4=32. Au lieu de mémoriser 100 
                  multiplications (de 1×1 à 10×10), vous n&apos;en avez réellement que 55 à apprendre.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🎵 Utilisez des comptines et rythmes</h3>
                <p className="mb-2">
                  Le cerveau retient mieux l&apos;information rythmée et musicale. Créez des comptines :
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm ml-4">
                  <li>&quot;Deux fois huit seize, trois fois huit vingt-quatre&quot; (rythme régulier)</li>
                  <li>&quot;Sept fois huit cinquante-six, comme les départements de la France !&quot; (association mnémotechnique)</li>
                  <li>&quot;Six fois sept quarante-deux, la réponse à la vie selon Douglas Adams&quot; (référence culturelle)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">✋ La table de 9 avec les doigts</h3>
                <p className="mb-2">
                  Technique visuelle géniale pour la table de 9 :
                </p>
                <ol className="list-decimal list-inside space-y-1 text-sm ml-4">
                  <li>Tendez vos 10 doigts devant vous</li>
                  <li>Pour 9×3, baissez le 3ème doigt (à partir de la gauche)</li>
                  <li>Comptez les doigts : 2 à gauche, 7 à droite = 27</li>
                  <li>Ça marche pour tous les multiplications de 9×1 à 9×10 !</li>
                </ol>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🧮 Décomposez les nombres</h3>
                <p className="mb-2">
                  Si 7×8 est difficile, décomposez :
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm ml-4">
                  <li>7×8 = 7×(5+3) = (7×5) + (7×3) = 35 + 21 = 56</li>
                  <li>Ou : 7×8 = (5×8) + (2×8) = 40 + 16 = 56</li>
                </ul>
                <p className="text-sm mt-2">
                  Cette technique développe aussi la compréhension de la distributivité.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🎨 Visualisation et associations</h3>
                <p>
                  Créez des images mentales : 8×8=64 ressemble à un échiquier (8×8 cases). 6×6=36 : deux chiffres 
                  pairs consécutifs descendant (6 puis 3, 6 puis 6 = 36). 7×7=49 : deux sept côte à côte ressemblent 
                  à 77, mais c&apos;est 49. Ces associations bizarres rendent la mémorisation plus efficace.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">⏱️ Pratique espacée et répétition</h3>
                <p>
                  La mémorisation à long terme nécessite de la répétition espacée. Pratiquez 10-15 minutes par 
                  jour plutôt que 2 heures une fois par semaine. Revoyez les tables apprises après 1 jour, 3 jours, 
                  1 semaine, 1 mois. C&apos;est la technique des flashcards et de la méthode Leitner.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Astuces par table de multiplication</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold text-lg mb-1">Table de 2 - Doubler</h3>
                <p className="text-sm">
                  La plus simple ! C&apos;est comme additionner un nombre à lui-même. 2×6 = 6+6. Comptez de 2 en 2 : 
                  2, 4, 6, 8, 10, 12, 14, 16, 18, 20. Tous les résultats sont pairs.
                </p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-semibold text-lg mb-1">Table de 3 - Somme des chiffres</h3>
                <p className="text-sm">
                  Astuce : La somme des chiffres d&apos;un multiple de 3 est toujours divisible par 3. Exemple : 
                  3×4=12 (1+2=3), 3×8=24 (2+4=6). Pour vérifier vos réponses !
                </p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="font-semibold text-lg mb-1">Table de 4 - Doubler puis doubler</h3>
                <p className="text-sm">
                  Table de 4 = Table de 2 × 2. Pour 4×7 : doublez 7 (=14), puis doublez à nouveau (=28). 
                  Ou comptez de 4 en 4 : 4, 8, 12, 16, 20, 24, 28, 32, 36, 40.
                </p>
              </div>
              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="font-semibold text-lg mb-1">Table de 5 - L&apos;horloge</h3>
                <p className="text-sm">
                  Tous les résultats se terminent par 0 ou 5, alternativement. Lié aux minutes : 5 minutes, 
                  10 minutes, 15 minutes... Si pair×5, termine par 0. Si impair×5, termine par 5.
                </p>
              </div>
              <div className="border-l-4 border-red-500 pl-4">
                <h3 className="font-semibold text-lg mb-1">Table de 6 - Pair + Pair + Pair</h3>
                <p className="text-sm">
                  Combinez tables de 5 et 1 : 6×8 = (5×8) + (1×8) = 40+8 = 48. Astuce de terminaison : 
                  6×pair = résultat se terminant par le même chiffre (6×4=24, 6×6=36, 6×8=48).
                </p>
              </div>
              <div className="border-l-4 border-yellow-500 pl-4">
                <h3 className="font-semibold text-lg mb-1">Table de 7 - La plus difficile</h3>
                <p className="text-sm">
                  Considérée la plus dure. Technique : 7×8 = 56 (5, 6, 7, 8 sont consécutifs !). 
                  Ou décomposez : 7×8 = (7×7) + 7 = 49+7 = 56. Ou : 7×8 = 8×8 - 8 = 64-8 = 56.
                </p>
              </div>
              <div className="border-l-4 border-pink-500 pl-4">
                <h3 className="font-semibold text-lg mb-1">Table de 8 - Doubler 3 fois</h3>
                <p className="text-sm">
                  Table de 8 = 2×2×2. Pour 8×5 : doublez 5 (=10), doublez 10 (=20), doublez 20 (=40). 
                  Comptez de 8 en 8 : 8, 16, 24, 32, 40, 48, 56, 64, 72, 80. Tous pairs.
                </p>
              </div>
              <div className="border-l-4 border-indigo-500 pl-4">
                <h3 className="font-semibold text-lg mb-1">Table de 9 - Magie des doigts</h3>
                <p className="text-sm">
                  Utilisez la technique des doigts (voir plus haut). Ou : La somme des chiffres = toujours 9 ! 
                  9×2=18 (1+8=9), 9×5=45 (4+5=9), 9×8=72 (7+2=9). Premier chiffre = n-1, deuxième = 9-(n-1).
                </p>
              </div>
              <div className="border-l-4 border-teal-500 pl-4">
                <h3 className="font-semibold text-lg mb-1">Table de 10 - Ajouter un zéro</h3>
                <p className="text-sm">
                  La plus facile après le 1 et 0 ! Ajoutez simplement un zéro à la fin du nombre. 
                  10×6=60, 10×9=90. Compréhension importante du système décimal.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Programme d&apos;apprentissage progressif (4 semaines)</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded">
                <h3 className="text-xl font-semibold mb-2">📅 Semaine 1 : Les bases</h3>
                <ul className="list-disc list-inside space-y-1 text-sm ml-4">
                  <li><strong>Jour 1-2</strong> : Tables de 0, 1, 10 (très faciles, boost de confiance)</li>
                  <li><strong>Jour 3-4</strong> : Table de 2 (doubler, addition répétée)</li>
                  <li><strong>Jour 5-6</strong> : Table de 5 (liens avec l&apos;horloge)</li>
                  <li><strong>Jour 7</strong> : Révision et quiz mélangé des tables 0, 1, 2, 5, 10</li>
                </ul>
                <p className="text-sm mt-2 italic">Objectif : 100% de bonnes réponses en moins de 3 secondes par question</p>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded">
                <h3 className="text-xl font-semibold mb-2">📅 Semaine 2 : Progression</h3>
                <ul className="list-disc list-inside space-y-1 text-sm ml-4">
                  <li><strong>Jour 1-2</strong> : Table de 3 (introduction des nombres impairs)</li>
                  <li><strong>Jour 3-4</strong> : Table de 4 (doubler la table de 2)</li>
                  <li><strong>Jour 5-6</strong> : Table de 6 (combinaison 5+1)</li>
                  <li><strong>Jour 7</strong> : Révision complète des tables 1-6 + quiz chronométré</li>
                </ul>
                <p className="text-sm mt-2 italic">Objectif : 90% de bonnes réponses en moins de 4 secondes</p>
              </div>
              <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded">
                <h3 className="text-xl font-semibold mb-2">📅 Semaine 3 : Les difficiles</h3>
                <ul className="list-disc list-inside space-y-1 text-sm ml-4">
                  <li><strong>Jour 1-3</strong> : Table de 7 (la plus difficile, prenez votre temps)</li>
                  <li><strong>Jour 4-5</strong> : Table de 8 (doublez 3 fois)</li>
                  <li><strong>Jour 6</strong> : Table de 9 (technique des doigts, somme = 9)</li>
                  <li><strong>Jour 7</strong> : Révision intensive 7, 8, 9 + astuces mnémotechniques</li>
                </ul>
                <p className="text-sm mt-2 italic">Objectif : 85% de bonnes réponses, se concentrer sur les erreurs récurrentes</p>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded">
                <h3 className="text-xl font-semibold mb-2">📅 Semaine 4 : Maîtrise et rapidité</h3>
                <ul className="list-disc list-inside space-y-1 text-sm ml-4">
                  <li><strong>Jour 1-2</strong> : Quiz mélangés toutes tables, identifier les faiblesses</li>
                  <li><strong>Jour 3-4</strong> : Exercices ciblés sur les 5 multiplications les plus ratées</li>
                  <li><strong>Jour 5-6</strong> : Challenges de rapidité, viser moins de 2 secondes par réponse</li>
                  <li><strong>Jour 7</strong> : Test final complet, célébrez la réussite !</li>
                </ul>
                <p className="text-sm mt-2 italic">Objectif final : 95-100% de bonnes réponses en moins de 2-3 secondes</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Conseils pour les parents et enseignants</h2>
            <div className="space-y-3 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="font-semibold mb-1">👨‍👩‍👧‍👦 Créez une routine quotidienne</h3>
                <p className="text-sm">
                  10-15 minutes chaque jour à heure fixe (après le goûter, avant le dîner) sont plus efficaces 
                  que des séances longues et irrégulières. La régularité crée l&apos;habitude et facilite la 
                  mémorisation à long terme.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">🎮 Gamifiez l&apos;apprentissage</h3>
                <p className="text-sm">
                  Créez des défis, des points, des récompenses. Utilisez un tableau de progression avec autocollants. 
                  Organisez des &quot;tournois&quot; familiaux. L&apos;aspect ludique réduit le stress et augmente la 
                  motivation. Notre outil inclut un système de score et de badges.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">🌟 Encouragez et célébrez les progrès</h3>
                <p className="text-sm">
                  Focalisez sur les progrès, pas la perfection. &quot;Tu as amélioré ton temps de 5 secondes !&quot; 
                  plutôt que &quot;Tu as encore raté 3 questions&quot;. Les erreurs sont des opportunités d&apos;apprentissage. 
                  Célébrez chaque table maîtrisée comme une victoire.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">🎯 Respectez le rythme de l&apos;enfant</h3>
                <p className="text-sm">
                  Chaque enfant apprend différemment. Certains maîtriseront toutes les tables en 2 semaines, 
                  d&apos;autres auront besoin de 2-3 mois. C&apos;est normal. Ne comparez pas et n&apos;ajoutez pas de pression 
                  excessive qui créerait de l&apos;anxiété mathématique.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">🔄 Variez les approches</h3>
                <p className="text-sm">
                  Alternez entre applications numériques, flashcards papier, jeux de société (Multiplicados, 
                  Times Tables Rock Stars), chansons, manipulation d&apos;objets concrets. Les multi-sensoriels 
                  renforcent la mémorisation.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">📚 Intégrez dans le quotidien</h3>
                <p className="text-sm">
                  &quot;Nous achetons 4 paquets de 6 yaourts, ça fait combien ?&quot; &quot;La recette nécessite 3 œufs, 
                  si on la double ?&quot; &quot;Tu cours 8 tours de 400m, quelle distance totale ?&quot; Les applications 
                  concrètes montrent l&apos;utilité réelle des mathématiques.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">⏰ Utilisez les temps morts</h3>
                <p className="text-sm">
                  Dans la voiture, dans la file d&apos;attente, avant le coucher : &quot;Quiz rapide ! 7×8 ?&quot; 
                  Ces micro-sessions de révision espacées sont très efficaces pour ancrer la mémoire à long terme.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">🎓 Donnez l&apos;exemple</h3>
                <p className="text-sm">
                  Montrez que vous utilisez les mathématiques vous-même : &quot;J&apos;ai acheté 6 articles à 8€, 
                  ça fait 48€&quot;. Calculez mentalement devant l&apos;enfant. Valorisez les mathématiques comme une 
                  compétence utile et valorisante, pas une corvée.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Multiplication dans le monde réel</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="text-xl font-semibold mb-2">🛒 Achats et budget</h3>
                <p>
                  Au supermarché : &quot;3 bouteilles à 4€ l&apos;unité = 12€&quot;. Restaurant : &quot;4 menus à 15€ = 60€&quot;. 
                  Carburant : &quot;45 litres × 1,80€ ≈ 81€&quot;. Comprendre ces calculs rapidement aide à gérer son 
                  budget, comparer les offres, et éviter les mauvaises surprises en caisse.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🍳 Cuisine et recettes</h3>
                <p>
                  Une recette pour 4 personnes que vous doublez : tous les ingrédients ×2. Triple une recette : 
                  tout ×3. Diviser une recette par 2 nécessite aussi de comprendre la multiplication. &quot;200g de 
                  farine pour 4 personnes, donc 100g pour 2 personnes&quot; (division = multiplication inverse).
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🏃 Sport et fitness</h3>
                <p>
                  Course à pied : &quot;5 tours de 400m = 2000m = 2km&quot;. Musculation : &quot;4 séries de 12 répétitions = 
                  48 mouvements au total&quot;. Natation : &quot;8 longueurs de 25m = 200m&quot;. Suivre ses performances 
                  nécessite ces calculs constants.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🏠 Bricolage et aménagement</h3>
                <p>
                  Calculer la surface d&apos;une pièce : 5m × 4m = 20m². Nombre de carreaux nécessaires : 
                  20m² × 10 carreaux/m² = 200 carreaux. Volume d&apos;une boîte : longueur × largeur × hauteur. 
                  Quantité de peinture : surface × nombre de couches.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">💰 Finances et économies</h3>
                <p>
                  Épargne mensuelle : &quot;50€ par mois × 12 mois = 600€ par an&quot;. Investissement : comprendre les 
                  intérêts composés nécessite de maîtriser la multiplication. Pourcentages : &quot;30% de réduction 
                  sur 80€&quot; = calculer 0,3 × 80 = 24€ de réduction.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">⏱️ Temps et planification</h3>
                <p>
                  &quot;Réunion de 45 minutes × 6 réunions = 270 minutes = 4h30&quot;. &quot;Film de 2h20 = 140 minutes&quot;. 
                  &quot;Trajet de 35 minutes × 2 (aller-retour) × 5 jours = 350 minutes = 5h50 par semaine&quot;. 
                  Gérer son temps efficacement.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Questions fréquentes</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  À quel âge doit-on apprendre les tables de multiplication ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  En France, les tables de multiplication sont introduites en CE1 (7-8 ans) avec les tables de 2, 
                  3, 4 et 5, puis complétées en CE2 (8-9 ans) avec toutes les tables jusqu&apos;à 10. Cependant, 
                  chaque enfant progresse à son rythme. L&apos;important est la compréhension du concept de 
                  multiplication (addition répétée) avant la mémorisation par cœur.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Combien de temps faut-il pour apprendre toutes les tables ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Avec une pratique régulière (15 minutes par jour), la plupart des enfants maîtrisent toutes les 
                  tables en 4-8 semaines. Les tables faciles (2, 5, 10) peuvent être apprises en quelques jours. 
                  Les plus difficiles (7, 8, 9) nécessitent 1-2 semaines de pratique intensive. La clé est la 
                  régularité et la répétition espacée.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Mon enfant bloque sur certaines multiplications, que faire ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  C&apos;est normal ! Les multiplications &quot;difficiles&quot; comme 7×8, 6×7, 8×9 posent problème à presque 
                  tous les élèves. Identifiez les 3-5 multiplications les plus problématiques et créez des astuces 
                  spécifiques pour chacune. Par exemple, 7×8=56 : &quot;5,6,7,8 sont consécutifs&quot;. Pratiquez-les 
                  séparément jusqu&apos;à les automatiser. Soyez patient et encourageant.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Les calculatrices ont-elles rendu les tables obsolètes ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Absolument pas ! Maîtriser les tables libère la mémoire de travail pour résoudre des problèmes 
                  complexes. C&apos;est comme l&apos;alphabet pour la lecture : on ne peut pas sortir son smartphone à 
                  chaque mot. De plus, la compréhension intuitive des nombres (ordre de grandeur, estimation) 
                  nécessite de connaître les tables. Les calculatrices sont des outils, mais la compréhension 
                  mentale reste essentielle.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Faut-il apprendre au-delà de 10×10 ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Les tables jusqu&apos;à 10×10 sont le standard scolaire et suffisantes pour la vie quotidienne. 
                  Certains pays enseignent jusqu&apos;à 12×12 ou 15×15. Maîtriser 10×10 parfaitement est plus 
                  important que connaître vaguement 15×15. Une fois les tables de base solides, l&apos;enfant peut 
                  naturellement explorer au-delà s&apos;il le souhaite, mais ce n&apos;est pas prioritaire.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Comment maintenir les tables à long terme ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  L&apos;utilisation régulière est clé. Même après maîtrise, faites des révisions mensuelles (5-10 
                  minutes de quiz). Encouragez l&apos;enfant à les utiliser dans la vie quotidienne. Si les tables 
                  ne sont pas utilisées pendant plusieurs mois (vacances d&apos;été), une révision rapide en début 
                  d&apos;année scolaire est recommandée. C&apos;est comme faire du vélo : ça ne s&apos;oublie pas vraiment, mais 
                  un rappel aide.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Les adultes peuvent-ils encore apprendre les tables ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Absolument ! Le cerveau adulte peut apprendre à tout âge. Les adultes ont même l&apos;avantage de 
                  meilleures stratégies d&apos;apprentissage et plus de motivation contextualisée. Si vous avez 
                  toujours hésité sur certaines multiplications, 2-3 semaines de pratique avec notre outil peuvent 
                  combler ces lacunes. Beaucoup d&apos;adultes témoignent d&apos;une confiance accrue dans leur vie 
                  professionnelle après avoir renforcé leurs bases mathématiques.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Votre outil fonctionne-t-il hors ligne ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Notre application web nécessite une connexion internet initiale pour charger. Une fois chargée, 
                  toutes les fonctionnalités de quiz et de pratique fonctionnent localement dans votre navigateur. 
                  Pour un usage 100% hors ligne, vous pouvez imprimer nos fiches de révision PDF disponibles en 
                  téléchargement gratuit.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Avantages de notre outil de tables de multiplication</h2>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>100% Gratuit</strong> - Accès illimité sans frais ni inscription
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Apprentissage progressif</strong> - Du niveau débutant au niveau expert
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Retour instantané</strong> - Correction immédiate pour un apprentissage efficace
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Suivi de progression</strong> - Statistiques détaillées et historique des performances
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Modes d&apos;entraînement variés</strong> - Apprentissage, quiz, défis chronométrés
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Interface ludique</strong> - Design attrayant pour motiver les enfants
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Compatible tous appareils</strong> - Ordinateur, tablette, smartphone
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Fiches imprimables</strong> - PDF à télécharger pour révisions offline
                </span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
