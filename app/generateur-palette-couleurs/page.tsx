"use client";

import Link from "next/link";
import ColorPaletteGenerator from "@/components/ColorPaletteGenerator";

export default function ColorPaletteGeneratorPage() {
  return (
    <div className="min-h-screen flex flex-col p-4 sm:p-6 md:p-8">
      <header className="flex-shrink-0 mb-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-3">
          Générateur de Palette de Couleurs en Ligne
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-400 text-sm sm:text-base max-w-3xl mx-auto">
          Créez des palettes de couleurs harmonieuses pour vos projets web, graphiques et de design. 
          Générez des combinaisons basées sur la théorie des couleurs et exportez facilement vos palettes.
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
          <ColorPaletteGenerator />
        </div>

        {/* SEO Content */}
        <section className="mt-8 space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">L&apos;importance des couleurs dans le design</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Les couleurs jouent un rôle fondamental dans la perception et l&apos;expérience utilisateur. Elles 
              influencent les émotions, guident l&apos;attention, établissent une hiérarchie visuelle et renforcent 
              l&apos;identité d&apos;une marque. Une palette de couleurs bien choisie peut augmenter la 
              reconnaissance de marque de 80% et améliorer la compréhension jusqu&apos;à 73% selon les études 
              en psychologie des couleurs.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Chaque couleur véhicule des significations culturelles et psychologiques spécifiques. Le bleu inspire 
              confiance et professionnalisme (d&apos;où sa popularité chez les banques et réseaux sociaux), le rouge 
              évoque l&apos;urgence et la passion (utilisé par les marques énergétiques), le vert symbolise la nature 
              et la santé, tandis que le violet suggère le luxe et la créativité. Comprendre ces associations permet 
              de communiquer efficacement avec votre audience cible.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Notre générateur de palette utilise les principes de la théorie des couleurs pour créer des 
              combinaisons harmonieuses. Que vous optiez pour un schéma monochromatique (variations d&apos;une 
              même teinte), complémentaire (couleurs opposées sur le cercle chromatique), analogue (couleurs 
              adjacentes) ou triadique (trois couleurs équidistantes), l&apos;outil garantit un équilibre visuel 
              professionnel pour vos projets de branding, web design ou illustration.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Théorie des couleurs et harmonies</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="text-xl font-semibold mb-2">🎨 Le cercle chromatique</h3>
                <p className="mb-2">
                  Inventé par Isaac Newton, le cercle chromatique organise les couleurs selon leurs relations :
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>Couleurs primaires</strong> : Rouge, Bleu, Jaune (base de toutes les autres couleurs)</li>
                  <li><strong>Couleurs secondaires</strong> : Orange, Vert, Violet (mélange de deux primaires)</li>
                  <li><strong>Couleurs tertiaires</strong> : Rouge-orange, Jaune-vert, etc. (primaire + secondaire)</li>
                  <li>Comprendre ces relations aide à créer des palettes équilibrées et visuellement agréables</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🔄 Schémas de couleurs classiques</h3>
                <div className="space-y-2">
                  <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded">
                    <p className="font-semibold mb-1">Monochromatique</p>
                    <p className="text-sm">Variations d&apos;une seule teinte (en jouant sur saturation et luminosité). 
                    Élégant et cohérent mais peut manquer de contraste.</p>
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded">
                    <p className="font-semibold mb-1">Analogue</p>
                    <p className="text-sm">Couleurs adjacentes sur le cercle (ex: bleu, bleu-vert, vert). Harmonieux 
                    et apaisant, parfait pour les designs naturels.</p>
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded">
                    <p className="font-semibold mb-1">Complémentaire</p>
                    <p className="text-sm">Couleurs opposées (ex: bleu et orange). Contraste maximal et dynamique, 
                    idéal pour faire ressortir des éléments clés.</p>
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded">
                    <p className="font-semibold mb-1">Triadique</p>
                    <p className="text-sm">Trois couleurs équidistantes (ex: rouge, jaune, bleu). Vibrant et équilibré, 
                    offre variété tout en maintenant l&apos;harmonie.</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">💡 Teinte, Saturation, Luminosité (HSL)</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>Teinte (Hue)</strong> : La couleur pure (0-360° sur le cercle chromatique)</li>
                  <li><strong>Saturation</strong> : Intensité de la couleur (0% = gris, 100% = couleur pure)</li>
                  <li><strong>Luminosité</strong> : Clarté (0% = noir, 50% = couleur pure, 100% = blanc)</li>
                  <li>Maîtriser HSL permet de créer des variations subtiles et professionnelles</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Couleurs de marque et identité visuelle</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="text-xl font-semibold mb-2">🎯 Choisir les couleurs de votre marque</h3>
                <p className="mb-2">
                  Les couleurs de marque doivent refléter votre personnalité et vos valeurs :
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>Bleu</strong> : Confiance, sécurité (Facebook, Twitter, LinkedIn, IBM)</li>
                  <li><strong>Rouge</strong> : Énergie, passion, urgence (Coca-Cola, YouTube, Netflix)</li>
                  <li><strong>Jaune</strong> : Optimisme, jeunesse, accessibilité (McDonald&apos;s, Snapchat)</li>
                  <li><strong>Vert</strong> : Nature, croissance, santé (Starbucks, Spotify, Whole Foods)</li>
                  <li><strong>Noir</strong> : Luxe, élégance, sophistication (Chanel, Apple, Nike)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">📐 La règle 60-30-10</h3>
                <p className="mb-2">
                  Principe de répartition des couleurs dans un design équilibré :
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>60%</strong> : Couleur dominante (généralement neutre : blanc, gris, beige)</li>
                  <li><strong>30%</strong> : Couleur secondaire (souvent la couleur principale de la marque)</li>
                  <li><strong>10%</strong> : Couleur d&apos;accent (pour les CTA et éléments importants)</li>
                  <li>Cette répartition crée un équilibre visuel naturel et guide l&apos;œil efficacement</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">✨ Cohérence multi-supports</h3>
                <p className="mb-2">
                  Assurez la cohérence de vos couleurs sur tous les supports :
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Créez un guide de style (brand guidelines) avec les codes exacts (HEX, RGB, CMYK)</li>
                  <li>Testez sur différents écrans et conditions d&apos;éclairage</li>
                  <li>Prévoyez des versions pour print (CMYK) et digital (RGB/HEX)</li>
                  <li>Définissez des variations pour modes clair et sombre</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Couleurs et accessibilité web</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="text-xl font-semibold mb-2">♿ Normes WCAG pour le contraste</h3>
                <p className="mb-2">
                  Les Web Content Accessibility Guidelines définissent des ratios de contraste minimaux :
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>AA (standard)</strong> : 4.5:1 pour le texte normal, 3:1 pour le texte large</li>
                  <li><strong>AAA (renforcé)</strong> : 7:1 pour le texte normal, 4.5:1 pour le texte large</li>
                  <li>Utilisez des outils de vérification comme WebAIM Contrast Checker</li>
                  <li>Le texte gris clair sur fond blanc échoue souvent ces tests</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🎨 Daltonisme et perception des couleurs</h3>
                <p className="mb-2">
                  Environ 8% des hommes et 0,5% des femmes souffrent de daltonisme :
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Ne vous fiez pas uniquement à la couleur pour transmettre l&apos;information</li>
                  <li>Ajoutez des icônes, motifs ou texte pour renforcer le message</li>
                  <li>Évitez les combinaisons rouge/vert (confusion la plus courante)</li>
                  <li>Testez avec des simulateurs de daltonisme (ColorOracle, Chrome DevTools)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🌙 Mode sombre et clair</h3>
                <p className="mb-2">
                  De plus en plus d&apos;utilisateurs adoptent le mode sombre :
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Ne vous contentez pas d&apos;inverser les couleurs (résultat souvent médiocre)</li>
                  <li>En mode sombre : utilisez des gris profonds (#121212) plutôt que du noir pur</li>
                  <li>Réduisez la saturation et luminosité des couleurs vives</li>
                  <li>Maintenez un contraste suffisant tout en évitant la fatigue oculaire</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Outils et ressources pour designers</h2>
            <div className="space-y-3 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="font-semibold mb-1">🔧 Extensions et plugins utiles</h3>
                <p className="text-sm">
                  ColorZilla (pipette de couleurs pour navigateur), Coolors (générateur de palettes rapide), 
                  Adobe Color (création et exploration de thèmes), Paletton (schémas de couleurs avancés avec 
                  simulation de daltonisme).
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">📚 S&apos;inspirer des palettes existantes</h3>
                <p className="text-sm">
                  Dribbble et Behance pour voir les tendances design, Color Hunt et Coolors pour des palettes 
                  pré-créées, Adobe Color Trends pour les palettes populaires par secteur, Pinterest avec des 
                  recherches comme &quot;color palette&quot; + votre thème.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">🎓 Apprendre la théorie des couleurs</h3>
                <p className="text-sm">
                  &quot;Interaction of Color&quot; de Josef Albers (classique incontournable), cours Skillshare 
                  et Domestika sur la couleur, chaîne YouTube de Blender Guru sur la théorie des couleurs pour 
                  le 3D, articles de Smashing Magazine et A List Apart sur les couleurs en web design.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">🖼️ Extraction de couleurs depuis images</h3>
                <p className="text-sm">
                  Importez une photo dans Adobe Color, Coolors ou Canva pour extraire automatiquement une palette. 
                  Parfait pour créer une cohérence visuelle avec vos photos de produits ou pour s&apos;inspirer 
                  d&apos;œuvres d&apos;art, de paysages naturels ou de designs que vous admirez.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Questions fréquentes sur les palettes de couleurs</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Combien de couleurs doit contenir une palette ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Une palette efficace contient généralement 3 à 5 couleurs : une couleur principale, 1-2 couleurs 
                  secondaires, 1-2 couleurs d&apos;accent, plus les neutres (blanc, noir, gris). Trop de couleurs 
                  créent de la confusion et diluent l&apos;identité de marque. Les grandes marques (Apple, Google) 
                  utilisent souvent seulement 2-3 couleurs primaires.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Comment choisir entre couleurs chaudes et froides ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Les couleurs chaudes (rouge, orange, jaune) sont énergiques, stimulantes et attirent l&apos;attention 
                  - idéales pour les appels à l&apos;action et marques jeunes. Les couleurs froides (bleu, vert, 
                  violet) sont apaisantes, professionnelles et inspirent confiance - parfaites pour les services 
                  financiers, santé et B2B. Combinez-les pour équilibre et contraste.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Les tendances couleurs sont-elles importantes ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Soyez conscient des tendances (Pantone Color of the Year, palettes populaires sur Dribbble) 
                  sans les suivre aveuglément. Une identité de marque forte transcende les modes. Cependant, 
                  pour des projets ponctuels (campagnes saisonnières, sites événementiels), s&apos;aligner sur 
                  les tendances peut créer un sentiment de modernité et de pertinence.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Comment tester mes couleurs avant de les valider ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Créez des mockups de vos designs (sites web, cartes de visite, packaging) avec vos couleurs. 
                  Testez sur différents écrans et conditions d&apos;éclairage. Demandez des retours à votre 
                  audience cible via des sondages. Vérifiez l&apos;accessibilité avec des outils de contraste. 
                  Vivez avec vos couleurs quelques jours avant de finaliser - l&apos;enthousiasme initial peut 
                  s&apos;estomper.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
