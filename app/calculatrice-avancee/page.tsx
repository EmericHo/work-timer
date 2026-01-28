"use client";

import Link from "next/link";
import AdvancedCalculator from "@/components/AdvancedCalculator";

export default function AdvancedCalculatorPage() {
  return (
    <div className="min-h-screen flex flex-col p-4 sm:p-6 md:p-8">
      <header className="flex-shrink-0 mb-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-3">
          Calculatrice Scientifique Avancée Gratuite en Ligne
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-400 text-sm sm:text-base max-w-3xl mx-auto">
          Effectuez des calculs mathématiques complexes avec fonctions trigonométriques, logarithmes, 
          exponentielles et bien plus. Outil parfait pour étudiants, ingénieurs et professionnels.
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
          <AdvancedCalculator />
        </div>

        {/* SEO Content */}
        <section className="mt-8 space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Pourquoi utiliser une calculatrice scientifique ?</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Une calculatrice scientifique est un outil indispensable pour effectuer des calculs mathématiques 
              complexes allant bien au-delà des opérations arithmétiques de base. Contrairement aux calculatrices 
              standard, les calculatrices scientifiques offrent des fonctions avancées essentielles pour les 
              mathématiques supérieures, la physique, la chimie, l&apos;ingénierie et de nombreuses autres disciplines 
              scientifiques et techniques.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Les étudiants en sciences, technologie, ingénierie et mathématiques (STEM) utilisent quotidiennement 
              des calculatrices scientifiques pour résoudre des équations, calculer des fonctions trigonométriques, 
              logarithmiques et exponentielles, et effectuer des conversions d&apos;unités. Les professionnels comme 
              les ingénieurs, architectes, physiciens et statisticiens s&apos;appuient également sur ces outils pour 
              leurs calculs quotidiens et la vérification de leurs résultats.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Notre calculatrice scientifique en ligne gratuite vous offre toutes les fonctionnalités d&apos;une 
              calculatrice physique professionnelle, directement dans votre navigateur. Plus besoin d&apos;acheter 
              un appareil coûteux ou d&apos;installer un logiciel. L&apos;interface intuitive vous permet d&apos;effectuer 
              rapidement des calculs complexes avec précision. L&apos;historique des calculs vous aide à suivre vos 
              opérations et à vérifier vos résultats.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Que vous prépariez un examen, travailliez sur un projet d&apos;ingénierie, ou ayez simplement besoin 
              de calculer des fonctions mathématiques avancées, cette calculatrice en ligne est accessible 
              gratuitement 24/7, depuis n&apos;importe quel appareil connecté à internet. Elle fonctionne sur 
              ordinateur, tablette et smartphone, vous permettant d&apos;effectuer vos calculs où que vous soyez.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Comment utiliser la calculatrice scientifique ?</h2>
            <ol className="list-decimal list-inside space-y-3 text-gray-700 dark:text-gray-300">
              <li className="pl-2">
                <strong>Saisissez votre calcul</strong> - Utilisez les boutons à l&apos;écran ou tapez directement 
                depuis votre clavier pour entrer les nombres et opérateurs
              </li>
              <li className="pl-2">
                <strong>Choisissez vos fonctions</strong> - Cliquez sur les boutons de fonctions (sin, cos, tan, 
                log, ln, etc.) pour appliquer des opérations avancées
              </li>
              <li className="pl-2">
                <strong>Utilisez les parenthèses</strong> - Pour des calculs complexes, utilisez les parenthèses 
                pour définir la priorité des opérations
              </li>
              <li className="pl-2">
                <strong>Consultez l&apos;historique</strong> - Visualisez tous vos calculs précédents et leurs 
                résultats pour référence
              </li>
              <li className="pl-2">
                <strong>Utilisez la mémoire</strong> - Stockez des valeurs intermédiaires avec les fonctions 
                mémoire (M+, M-, MR, MC) pour des calculs en plusieurs étapes
              </li>
            </ol>
            <p className="text-gray-700 dark:text-gray-300 mt-4">
              La calculatrice respecte l&apos;ordre standard des opérations (priorité des opérateurs) et affiche 
              les résultats avec une précision élevée. Vous pouvez basculer entre degrés et radians pour les 
              fonctions trigonométriques selon vos besoins.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Fonctions de la calculatrice scientifique</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="text-xl font-semibold mb-2">🔢 Opérations arithmétiques de base</h3>
                <p>
                  Addition (+), soustraction (-), multiplication (× ou *), division (÷ ou /), et modulo (%). 
                  Ces opérations fondamentales sont la base de tous les calculs. La calculatrice gère également 
                  les nombres décimaux avec une grande précision et peut travailler avec de très grands ou très 
                  petits nombres en notation scientifique.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">📐 Fonctions trigonométriques</h3>
                <p>
                  Sinus (sin), cosinus (cos), tangente (tan) et leurs inverses (arcsin, arccos, arctan). Ces 
                  fonctions sont essentielles en géométrie, physique et ingénierie. La calculatrice permet de 
                  travailler en degrés ou en radians selon votre préférence. Les fonctions hyperboliques (sinh, 
                  cosh, tanh) sont également disponibles pour les calculs avancés.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">📊 Logarithmes et exponentielles</h3>
                <p>
                  Logarithme naturel (ln), logarithme base 10 (log), exponentielle (exp ou e^x), et puissance 
                  (x^y). Ces fonctions sont cruciales en sciences naturelles, économie et statistiques. Le 
                  logarithme aide à résoudre des équations exponentielles et à travailler avec des ordres de 
                  grandeur très différents.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">√ Racines et puissances</h3>
                <p>
                  Racine carrée (√), racine cubique (∛), racine n-ième (ⁿ√), carré (x²), cube (x³), et puissance 
                  quelconque (x^y). Ces opérations sont fondamentales en algèbre et sont utilisées pour résoudre 
                  des équations polynomiales, calculer des distances, et bien plus encore.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🎲 Fonctions spéciales</h3>
                <p>
                  Factorielle (n!), valeur absolue (|x|), constantes mathématiques (π, e), et fonctions de 
                  parenthésage pour contrôler l&apos;ordre des opérations. La factorielle est particulièrement 
                  utile en combinatoire et probabilités. Les constantes mathématiques sont fournies avec une 
                  grande précision.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Applications des calculatrices scientifiques</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="text-xl font-semibold mb-2">🎓 Éducation et études</h3>
                <p>
                  Les étudiants du lycée et de l&apos;université utilisent des calculatrices scientifiques pour 
                  leurs cours de mathématiques, physique, chimie et statistiques. Elles sont autorisées dans 
                  la plupart des examens standardisés comme le baccalauréat. La calculatrice aide à vérifier 
                  les résultats des exercices, à résoudre rapidement des problèmes complexes et à se concentrer 
                  sur la compréhension des concepts plutôt que sur les calculs manuels fastidieux.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🏗️ Ingénierie et architecture</h3>
                <p>
                  Les ingénieurs de toutes disciplines utilisent quotidiennement des calculatrices scientifiques 
                  pour des calculs de structures, d&apos;électricité, de mécanique des fluides et de thermodynamique. 
                  Les architectes s&apos;en servent pour calculer des angles, des surfaces, des volumes et vérifier 
                  les proportions. La précision des calculs est critique pour la sécurité et la conformité aux 
                  normes.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🔬 Recherche scientifique</h3>
                <p>
                  Physiciens, chimistes et biologistes utilisent des calculatrices scientifiques pour analyser 
                  des données expérimentales, calculer des concentrations, convertir des unités et effectuer 
                  des calculs statistiques rapides. Même avec des logiciels sophistiqués, une calculatrice 
                  scientifique reste un outil essentiel pour les vérifications rapides et les estimations.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">💼 Finance et économie</h3>
                <p>
                  Les professionnels de la finance utilisent des calculatrices scientifiques pour les calculs 
                  d&apos;intérêts composés, de taux de croissance, d&apos;amortissements et d&apos;analyses statistiques. 
                  Les fonctions logarithmiques et exponentielles sont particulièrement utiles pour modéliser 
                  la croissance économique et évaluer les investissements.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">📈 Statistiques et analyse de données</h3>
                <p>
                  Bien que des logiciels spécialisés existent, les calculatrices scientifiques restent utiles 
                  pour des calculs statistiques rapides : moyennes, écarts-types, permutations, combinaisons. 
                  Elles sont parfaites pour vérifier des résultats ou faire des estimations rapides sans 
                  démarrer un logiciel complet.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Avantages de notre calculatrice en ligne</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="text-xl font-semibold mb-2">💰 Gratuit et sans limites</h3>
                <p>
                  Contrairement aux calculatrices physiques qui peuvent coûter entre 20 et 150 euros, notre 
                  calculatrice en ligne est entièrement gratuite. Pas d&apos;abonnement, pas de frais cachés, pas 
                  de publicités intrusives. Vous pouvez l&apos;utiliser autant que vous le souhaitez, pour autant 
                  de calculs que nécessaire.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🌐 Accessible partout</h3>
                <p>
                  Oubliée votre calculatrice à la maison ? Pas de problème. Notre calculatrice en ligne est 
                  accessible depuis n&apos;importe quel appareil avec un navigateur internet : ordinateur, tablette, 
                  smartphone. Que vous soyez à l&apos;école, à la bibliothèque, au travail ou en déplacement, vos 
                  outils de calcul sont toujours à portée de main.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">📝 Historique des calculs</h3>
                <p>
                  Un avantage majeur par rapport aux calculatrices physiques : l&apos;historique complet de vos 
                  calculs est conservé pendant votre session. Vous pouvez revenir en arrière, vérifier vos 
                  opérations précédentes, repérer des erreurs et copier des résultats. C&apos;est particulièrement 
                  utile pour les longues séries de calculs ou lors de la résolution de problèmes complexes.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">⚡ Mise à jour constante</h3>
                <p>
                  Les calculatrices physiques deviennent obsolètes et ne reçoivent jamais de mises à jour. 
                  Notre calculatrice en ligne est continuellement améliorée avec de nouvelles fonctionnalités, 
                  corrections de bugs et optimisations de performance. Vous bénéficiez toujours de la dernière 
                  version sans rien faire.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🖥️ Interface moderne</h3>
                <p>
                  Interface claire et intuitive, optimisée pour les écrans tactiles et les claviers. Support 
                  du mode sombre pour travailler confortablement en toutes conditions. Affichage responsive 
                  qui s&apos;adapte à la taille de votre écran. L&apos;expérience utilisateur est prioritaire.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Conseils pour utiliser efficacement une calculatrice scientifique</h2>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Vérifiez le mode angle</strong> - Assurez-vous d&apos;être en mode degrés ou radians 
                  selon votre besoin avant d&apos;utiliser les fonctions trigonométriques
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Utilisez les parenthèses</strong> - Pour des calculs complexes, utilisez généreusement 
                  les parenthèses pour éviter les erreurs d&apos;ordre des opérations
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Exploitez la mémoire</strong> - Stockez les résultats intermédiaires en mémoire pour 
                  éviter de les resaisir
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Vérifiez vos résultats</strong> - Pour les calculs importants, effectuez une 
                  vérification ou utilisez une méthode alternative
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Comprenez les fonctions</strong> - Assurez-vous de comprendre ce que fait chaque 
                  fonction avant de l&apos;utiliser
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Utilisez la notation scientifique</strong> - Pour les très grands ou très petits 
                  nombres, la notation scientifique évite les erreurs
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Exemples de calculs scientifiques courants</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="text-xl font-semibold mb-2">📏 Calcul de distances et angles</h3>
                <p className="mb-2">
                  En géométrie et trigonométrie, calculer la longueur d&apos;un côté d&apos;un triangle rectangle :
                </p>
                <p className="bg-gray-100 dark:bg-gray-700 p-3 rounded font-mono text-sm">
                  Si vous connaissez l&apos;hypoténuse (10 m) et un angle (30°), le côté opposé = 10 × sin(30°) = 5 m
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🧪 Calculs chimiques</h3>
                <p className="mb-2">
                  Calcul du pH d&apos;une solution à partir de la concentration en ions H+ :
                </p>
                <p className="bg-gray-100 dark:bg-gray-700 p-3 rounded font-mono text-sm">
                  pH = -log₁₀([H+]) = -log₁₀(0.001) = 3
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">⚡ Calculs électriques</h3>
                <p className="mb-2">
                  Calcul de la puissance électrique avec la loi d&apos;Ohm :
                </p>
                <p className="bg-gray-100 dark:bg-gray-700 p-3 rounded font-mono text-sm">
                  P = V² / R = 230² / 50 = 1058 watts
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">💰 Intérêts composés</h3>
                <p className="mb-2">
                  Calcul du montant final avec intérêts composés :
                </p>
                <p className="bg-gray-100 dark:bg-gray-700 p-3 rounded font-mono text-sm">
                  Montant = Capital × (1 + taux)^années = 1000 × (1.05)^10 = 1628.89 €
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🌍 Calculs de croissance</h3>
                <p className="mb-2">
                  Calcul du temps de doublement avec une croissance exponentielle :
                </p>
                <p className="bg-gray-100 dark:bg-gray-700 p-3 rounded font-mono text-sm">
                  Temps = ln(2) / ln(1 + taux) = 0.693 / ln(1.07) ≈ 10.24 ans pour un taux de 7%
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Ordre des opérations (priorité)</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              La calculatrice scientifique respecte l&apos;ordre standard des opérations mathématiques (PEMDAS/BODMAS) :
            </p>
            <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li><strong>P</strong>arenthèses - Les expressions entre parenthèses en premier</li>
              <li><strong>E</strong>xposants - Puissances et racines</li>
              <li><strong>M</strong>ultiplication et <strong>D</strong>ivision - De gauche à droite</li>
              <li><strong>A</strong>ddition et <strong>S</strong>oustraction - De gauche à droite</li>
            </ol>
            <p className="text-gray-700 dark:text-gray-300 mt-4">
              Exemple : 2 + 3 × 4² = 2 + 3 × 16 = 2 + 48 = 50 (pas 80 ni 400)
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Questions fréquentes sur les calculatrices scientifiques</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Quelle est la différence entre une calculatrice standard et scientifique ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Une calculatrice standard ne fait que les opérations de base (+, -, ×, ÷). Une calculatrice 
                  scientifique offre des fonctions avancées : trigonométrie, logarithmes, exponentielles, 
                  racines, statistiques, et gère la priorité des opérations complexes.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Quelle est la précision des calculs ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Notre calculatrice utilise le format de nombres à virgule flottante double précision de 
                  JavaScript, offrant environ 15-17 chiffres significatifs de précision. C&apos;est largement 
                  suffisant pour la grande majorité des applications scientifiques et d&apos;ingénierie.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Puis-je utiliser le clavier de mon ordinateur ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Oui, la calculatrice accepte les entrées depuis votre clavier physique. Les chiffres, 
                  opérateurs de base, parenthèses et la touche Entrée fonctionnent comme attendu. C&apos;est 
                  souvent plus rapide que de cliquer sur les boutons.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Comment effacer l&apos;historique ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  L&apos;historique est stocké uniquement pendant votre session active. Il sera automatiquement 
                  effacé lorsque vous fermez ou rechargez la page. Pour une confidentialité maximale, utilisez 
                  le mode navigation privée de votre navigateur.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  La calculatrice fonctionne-t-elle hors ligne ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Une fois la page chargée, tous les calculs se font localement dans votre navigateur. 
                  Cependant, vous avez besoin d&apos;une connexion internet pour charger initialement la page. 
                  Pour un usage totalement hors ligne, téléchargez une application de calculatrice.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
