"use client";

import Link from "next/link";
import FormulaCalculator from "@/components/FormulaCalculator";

export default function FormulaCalculatorPage() {
  return (
    <div className="min-h-screen flex flex-col p-4 sm:p-6 md:p-8">
      <header className="flex-shrink-0 mb-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-3">
          Calculateur de Formules en Ligne
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-400 text-sm sm:text-base max-w-3xl mx-auto">
          Calculez des formules mathématiques et scientifiques courantes facilement.
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
          <FormulaCalculator />
        </div>

        {/* SEO Content */}
        <section className="mt-8 space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Qu&apos;est-ce qu&apos;un calculateur de formules ?</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Un calculateur de formules en ligne est un outil puissant qui permet d&apos;effectuer des calculs 
              mathématiques, géométriques, physiques et scientifiques courantes sans avoir à se souvenir des 
              formules complexes. Cet outil est indispensable pour les étudiants, enseignants, ingénieurs, 
              architectes et professionnels de tous secteurs.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Que vous ayez besoin de calculer l&apos;aire d&apos;un cercle, le volume d&apos;une sphère, le théorème 
              de Pythagore, des conversions d&apos;unités ou des formules physiques, notre calculateur simplifie 
              ces opérations en vous guidant étape par étape avec des champs de saisie intuitifs.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              L&apos;outil regroupe des dizaines de formules essentielles organisées par catégories (géométrie, 
              algèbre, physique, chimie, finance) et effectue les calculs instantanément avec une précision 
              maximale. Fini les erreurs de calcul manuel ou les formules oubliées.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Comment utiliser le calculateur de formules ?</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</span>
                <div>
                  <h3 className="font-semibold mb-1">Choisissez votre catégorie</h3>
                  <p>Sélectionnez la catégorie de formules qui correspond à votre besoin : géométrie plane, géométrie dans l&apos;espace, algèbre, physique, chimie, ou finance.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">2</span>
                <div>
                  <h3 className="font-semibold mb-1">Sélectionnez la formule</h3>
                  <p>Parcourez la liste des formules disponibles dans la catégorie choisie et sélectionnez celle dont vous avez besoin (aire du cercle, volume du cylindre, équation du second degré, etc.).</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">3</span>
                <div>
                  <h3 className="font-semibold mb-1">Entrez vos valeurs</h3>
                  <p>Remplissez les champs requis avec vos données. L&apos;interface vous indique clairement quelles valeurs sont nécessaires (rayon, longueur, hauteur, etc.) et les unités attendues.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">4</span>
                <div>
                  <h3 className="font-semibold mb-1">Obtenez le résultat instantané</h3>
                  <p>Le calcul s&apos;effectue automatiquement et le résultat s&apos;affiche immédiatement avec la formule utilisée et les étapes de calcul pour votre compréhension.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Catégories de formules disponibles</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="text-xl font-semibold mb-2">📐 Géométrie plane</h3>
                <p className="mb-2">
                  Calculez les aires, périmètres et propriétés des figures 2D : carré, rectangle, triangle, 
                  cercle, trapèze, parallélogramme, losange, polygones réguliers. Idéal pour les devoirs de 
                  mathématiques, l&apos;aménagement d&apos;espaces et les calculs de surface.
                </p>
                <p className="text-sm italic">
                  Exemples : Aire du cercle (πr²), Périmètre du rectangle (2L + 2l), Aire du triangle (base × hauteur ÷ 2)
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">📦 Géométrie dans l&apos;espace</h3>
                <p className="mb-2">
                  Calculez les volumes, surfaces et propriétés des solides 3D : cube, parallélépipède, cylindre, 
                  cône, sphère, pyramide, prisme. Essentiel pour l&apos;architecture, l&apos;ingénierie et la construction.
                </p>
                <p className="text-sm italic">
                  Exemples : Volume de la sphère (4/3 × πr³), Surface du cylindre (2πrh + 2πr²), Volume du cône (1/3 × πr²h)
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🔢 Algèbre et équations</h3>
                <p className="mb-2">
                  Résolvez les équations du premier et second degré, calculez les racines carrées et cubiques, 
                  les puissances, les logarithmes, et appliquez le théorème de Pythagore. Parfait pour les 
                  étudiants du secondaire et du supérieur.
                </p>
                <p className="text-sm italic">
                  Exemples : Équation du 2nd degré (ax² + bx + c = 0), Pythagore (a² + b² = c²), Puissances (aⁿ)
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">⚛️ Physique</h3>
                <p className="mb-2">
                  Calculez la vitesse, l&apos;accélération, la force (F = ma), l&apos;énergie cinétique, l&apos;énergie 
                  potentielle, la pression, le travail, la puissance et bien d&apos;autres grandeurs physiques. 
                  Indispensable pour les étudiants en sciences et les professionnels.
                </p>
                <p className="text-sm italic">
                  Exemples : Énergie cinétique (½mv²), Force (F = m × a), Pression (P = F/S)
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🧪 Chimie</h3>
                <p className="mb-2">
                  Effectuez des calculs de concentration molaire, de masse molaire, de conversions entre moles 
                  et grammes, calculez le pH, les dilutions et les équilibres chimiques. Utile pour les 
                  laboratoires et les cours de chimie.
                </p>
                <p className="text-sm italic">
                  Exemples : Concentration (C = n/V), Masse (m = n × M), Dilution (C₁V₁ = C₂V₂)
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">💰 Finance</h3>
                <p className="mb-2">
                  Calculez les intérêts simples et composés, les mensualités de prêt, les rendements 
                  d&apos;investissement, les pourcentages d&apos;augmentation ou de réduction, et les taux de croissance. 
                  Pratique pour la gestion personnelle et professionnelle.
                </p>
                <p className="text-sm italic">
                  Exemples : Intérêts composés (A = P(1+r)ⁿ), Pourcentage (x% de y), TVA (prix HT × 1.20)
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Cas d&apos;usage du calculateur de formules</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="text-xl font-semibold mb-2">🎓 Éducation et devoirs</h3>
                <p>
                  Les étudiants utilisent ce calculateur pour vérifier leurs devoirs de mathématiques, physique 
                  et chimie. Entrez vos valeurs, comparez avec vos calculs manuels et comprenez les étapes de 
                  résolution. Idéal pour l&apos;apprentissage et la révision avant les examens.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">👨‍🏫 Enseignement</h3>
                <p>
                  Les enseignants peuvent créer rapidement des exemples avec résultats corrects, préparer des 
                  exercices variés et démontrer les formules en classe. Gagnez du temps dans la préparation 
                  de vos cours et assurez l&apos;exactitude de vos corrections.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🏗️ Construction et architecture</h3>
                <p>
                  Calculez rapidement les surfaces de plancher, les volumes de béton nécessaires, les quantités 
                  de matériaux, les dimensions d&apos;éléments structurels. Essentiel pour l&apos;estimation des coûts 
                  et la planification de projets de construction.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">⚙️ Ingénierie</h3>
                <p>
                  Les ingénieurs utilisent ces formules pour les calculs de résistance des matériaux, les 
                  dimensionnements de pièces mécaniques, les calculs de forces et de pressions. Validation 
                  rapide des calculs préliminaires et vérification de conception.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🏡 Bricolage et rénovation</h3>
                <p>
                  Calculez la quantité de peinture nécessaire (surface des murs), le volume de terre pour un 
                  jardin, les dimensions de découpe pour des projets DIY. Évitez le gaspillage en achetant 
                  exactement ce dont vous avez besoin.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">📊 Gestion et finance</h3>
                <p>
                  Effectuez des calculs financiers rapides : intérêts de prêt, rendement d&apos;investissement, 
                  calculs de pourcentages pour remises et marges commerciales. Prenez des décisions éclairées 
                  basées sur des chiffres précis.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Conseils pour utiliser efficacement les formules</h2>
            <div className="space-y-3 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="font-semibold mb-1">✅ Vérifiez les unités</h3>
                <p className="text-sm">
                  Assurez-vous d&apos;utiliser les bonnes unités (mètres, centimètres, litres, etc.). La plupart 
                  des formules requièrent des unités cohérentes. Convertissez si nécessaire avant d&apos;entrer 
                  vos valeurs.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">✅ Comprenez la formule</h3>
                <p className="text-sm">
                  Ne vous contentez pas d&apos;entrer des chiffres. Lisez l&apos;explication de la formule pour 
                  comprendre ce que vous calculez. Cela vous aidera à détecter les erreurs et à mieux 
                  retenir les concepts.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">✅ Testez avec des valeurs simples</h3>
                <p className="text-sm">
                  Pour vous familiariser avec une formule, commencez par des valeurs simples dont vous 
                  connaissez le résultat (par exemple, l&apos;aire d&apos;un carré de côté 10 = 100). Cela vous 
                  assure que vous utilisez l&apos;outil correctement.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">✅ Gardez trace de vos calculs</h3>
                <p className="text-sm">
                  Notez les résultats importants dans un document séparé. L&apos;outil ne sauvegarde pas 
                  l&apos;historique, donc prenez des notes pour vos projets complexes nécessitant plusieurs 
                  calculs.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">✅ Arrondissez judicieusement</h3>
                <p className="text-sm">
                  Pour les calculs intermédiaires, gardez plusieurs décimales. N&apos;arrondissez qu&apos;au résultat 
                  final pour éviter l&apos;accumulation d&apos;erreurs. En construction, arrondissez toujours au-dessus 
                  pour les matériaux.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">✅ Vérifiez la cohérence du résultat</h3>
                <p className="text-sm">
                  Un résultat aberrant indique souvent une erreur de saisie. Si vous calculez l&apos;aire d&apos;une 
                  pièce et obtenez 10 000 m², vérifiez vos valeurs. Le bon sens est votre meilleur allié.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">✅ Utilisez π avec précision</h3>
                <p className="text-sm">
                  Notre calculateur utilise π avec une grande précision (3.14159...). Ne remplacez pas par 
                  3.14 pour les calculs importants, car cela peut créer des écarts significatifs sur de 
                  grandes valeurs.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Questions fréquentes</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Le calculateur est-il adapté pour les examens ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Cet outil est parfait pour vérifier vos réponses à la maison ou pendant les révisions. 
                  Cependant, vous devez maîtriser les formules et les calculs manuels pour les examens où 
                  les calculatrices en ligne ne sont pas autorisées.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Quelle est la précision des calculs ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Les calculs sont effectués avec une précision de plusieurs décimales (généralement 10-15 
                  chiffres significatifs selon la formule). Cette précision dépasse largement les besoins 
                  de la plupart des applications pratiques.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Puis-je utiliser des virgules ou des points ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Le calculateur accepte généralement les deux formats (selon votre configuration régionale). 
                  En français, on utilise traditionnellement la virgule (3,14), mais le point (3.14) 
                  fonctionne aussi dans la plupart des cas.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Les formules sont-elles vérifiées ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Oui, toutes les formules implémentées sont mathématiquement correctes et suivent les 
                  standards scientifiques internationaux. Elles ont été testées avec de nombreux cas pour 
                  garantir leur exactitude.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Puis-je suggérer d&apos;ajouter une formule ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Nous enrichissons régulièrement notre base de formules. Si une formule courante manque, 
                  n&apos;hésitez pas à nous le signaler. Nous priorisons les formules les plus demandées par 
                  les utilisateurs.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  L&apos;outil fonctionne-t-il sur smartphone ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Oui, le calculateur est entièrement responsive et optimisé pour les smartphones et 
                  tablettes. L&apos;interface s&apos;adapte à la taille de votre écran pour une utilisation 
                  confortable sur tous les appareils.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Y a-t-il une limite au nombre de calculs ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Non, vous pouvez effectuer autant de calculs que vous le souhaitez, gratuitement et sans 
                  limitation. L&apos;outil est conçu pour une utilisation intensive sans restriction d&apos;accès.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Les données sont-elles sauvegardées ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Non, pour des raisons de confidentialité, aucune donnée n&apos;est sauvegardée. Tous les 
                  calculs sont effectués localement dans votre navigateur et rien n&apos;est envoyé à nos 
                  serveurs.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Avantages de notre calculateur de formules</h2>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Bibliothèque complète</strong> - Des dizaines de formules dans toutes les disciplines
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Interface guidée</strong> - Savoir quelle valeur entrer et dans quel champ
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Résultats instantanés</strong> - Calculs immédiats avec précision maximale
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Explications claires</strong> - Comprendre la formule utilisée et son application
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>100% gratuit</strong> - Accès illimité sans frais ni inscription
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Multi-disciplines</strong> - Math, physique, chimie, finance en un seul endroit
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Validation en temps réel</strong> - Détection des erreurs de saisie
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Accessible partout</strong> - Sur ordinateur, tablette et smartphone
                </span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
