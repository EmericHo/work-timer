"use client";

import Link from "next/link";
import CSSShadowGenerator from "@/components/CSSShadowGenerator";

export default function CSSShadowGeneratorPage() {
  return (
    <div className="min-h-screen flex flex-col p-4 sm:p-6 md:p-8">
      <header className="flex-shrink-0 mb-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-3">
          Générateur de Box Shadow CSS en Ligne
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-400 text-sm sm:text-base max-w-3xl mx-auto">
          Créez des ombres portées CSS personnalisées visuellement et générez le code box-shadow prêt à l&apos;emploi. 
          Ajoutez de la profondeur et du réalisme à vos designs web.
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
          <CSSShadowGenerator />
        </div>

        {/* SEO Content */}
        <section className="mt-8 space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Comprendre la propriété box-shadow</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              La propriété CSS <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">box-shadow</code> permet 
              d&apos;ajouter une ou plusieurs ombres portées autour d&apos;un élément. Elle crée une illusion de 
              profondeur en simulant l&apos;effet d&apos;une source de lumière qui projette l&apos;ombre de 
              l&apos;élément sur l&apos;arrière-plan. Cette propriété est essentielle pour créer des interfaces 
              modernes qui suivent les principes du Material Design ou du neumorphisme.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              La syntaxe complète est : <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded text-sm">
              box-shadow: [inset] offset-x offset-y blur-radius spread-radius color</code>. 
              L&apos;offset-x et offset-y définissent la position de l&apos;ombre (positif = droite/bas, négatif = 
              gauche/haut). Le blur-radius contrôle le flou (0 = ombre nette, plus élevé = ombre diffuse). Le 
              spread-radius étend ou contracte l&apos;ombre. Le mot-clé optionnel <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">inset</code> 
              crée une ombre intérieure.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Notre générateur vous permet d&apos;ajuster visuellement tous ces paramètres en temps réel. Vous 
              pouvez voir immédiatement l&apos;impact de chaque modification et copier le code CSS optimisé. 
              Idéal pour créer des ombres subtiles qui ajoutent de la profondeur sans surcharger visuellement, 
              ou des ombres marquées pour faire ressortir des éléments importants comme les boutons d&apos;appel 
              à l&apos;action.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Anatomie d&apos;une ombre portée CSS</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="text-xl font-semibold mb-2">📍 Offset X et Y (Décalage)</h3>
                <p className="mb-2">
                  Contrôlent la position de l&apos;ombre par rapport à l&apos;élément :
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>Offset-X</strong> : Décalage horizontal (positif = droite, négatif = gauche)</li>
                  <li><strong>Offset-Y</strong> : Décalage vertical (positif = bas, négatif = haut)</li>
                  <li>Exemple : <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded text-xs">box-shadow: 5px 10px ...</code> décale de 5px à droite et 10px vers le bas</li>
                  <li>Des valeurs de 2-8px créent une élévation subtile et naturelle</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🌫️ Blur Radius (Rayon de flou)</h3>
                <p className="mb-2">
                  Détermine la netteté ou diffusion de l&apos;ombre :
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Valeur de 0 = ombre nette et dure (peu naturelle)</li>
                  <li>Valeurs de 10-20px = ombre douce et réaliste (recommandé)</li>
                  <li>Plus la valeur est élevée, plus l&apos;ombre est diffuse et large</li>
                  <li>Une ombre très floue suggère que l&apos;élément est très élevé au-dessus du fond</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">📏 Spread Radius (Rayon d&apos;expansion)</h3>
                <p className="mb-2">
                  Agrandit ou réduit la taille de l&apos;ombre avant le flou :
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Valeur positive : l&apos;ombre grandit dans toutes les directions</li>
                  <li>Valeur négative : l&apos;ombre rétrécit (utile pour des ombres plus douces)</li>
                  <li>Souvent laissé à 0 pour des ombres naturelles</li>
                  <li>Exemple d&apos;usage : créer un contour flou autour d&apos;un élément</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🎨 Couleur de l&apos;ombre</h3>
                <p className="mb-2">
                  La couleur influence fortement le réalisme :
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Évitez le noir pur (#000000) - trop dur et artificiel</li>
                  <li>Préférez rgba(0,0,0,0.1) à rgba(0,0,0,0.3) pour du naturel</li>
                  <li>Les ombres colorées (légèrement bleutées ou violettes) peuvent être plus élégantes</li>
                  <li>Adaptez l&apos;opacité selon la profondeur souhaitée</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Créer de la profondeur avec les ombres</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="text-xl font-semibold mb-2">🏔️ Niveaux d&apos;élévation</h3>
                <p className="mb-2">
                  Le Material Design de Google définit des niveaux d&apos;élévation standardisés :
                </p>
                <div className="space-y-2 text-sm">
                  <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded">
                    <p className="font-semibold mb-1">Niveau 1 (carte) : élévation subtile</p>
                    <code className="text-xs">box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);</code>
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded">
                    <p className="font-semibold mb-1">Niveau 2 (élément survolé) : légèrement élevé</p>
                    <code className="text-xs">box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);</code>
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded">
                    <p className="font-semibold mb-1">Niveau 3 (modal, menu déroulant) : bien élevé</p>
                    <code className="text-xs">box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);</code>
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded">
                    <p className="font-semibold mb-1">Niveau 5 (dialogue) : très élevé</p>
                    <code className="text-xs">box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);</code>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">✨ Ombres multiples</h3>
                <p className="mb-2">
                  Combinez plusieurs ombres pour un réalisme accru (séparées par des virgules) :
                </p>
                <pre className="bg-gray-900 text-gray-100 p-3 rounded text-xs overflow-x-auto mt-2">
{`.realistic-shadow {
  box-shadow:
    0 2px 4px rgba(0,0,0,0.05),    /* ombre proche et légère */
    0 8px 16px rgba(0,0,0,0.1);    /* ombre lointaine et diffuse */
}`}
                </pre>
                <p className="text-sm mt-2">
                  Cette technique simule comment la lumière crée des ombres de différentes intensités à 
                  différentes distances.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🔳 Ombres internes (inset)</h3>
                <p className="mb-2">
                  Le mot-clé <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">inset</code> crée 
                  une ombre à l&apos;intérieur de l&apos;élément :
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Effet d&apos;enfoncement, comme un bouton pressé</li>
                  <li>Utile pour les champs de formulaire (impression de creux)</li>
                  <li>Exemple : <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded text-xs">box-shadow: inset 0 2px 4px rgba(0,0,0,0.1)</code></li>
                  <li>Combinable avec des ombres externes pour des effets complexes</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Ombres et design systems</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="text-xl font-semibold mb-2">🎨 Material Design</h3>
                <p className="mb-2">
                  Le système de Google utilise des ombres pour indiquer la hiérarchie :
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Les éléments plus importants ont des ombres plus prononcées</li>
                  <li>Les ombres s&apos;intensifient au survol pour indiquer l&apos;interactivité</li>
                  <li>Utilise systématiquement deux ombres (proche et lointaine) pour plus de réalisme</li>
                  <li>Cohérence stricte : chaque niveau d&apos;élévation a des valeurs fixes</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">💎 Neumorphism (Soft UI)</h3>
                <p className="mb-2">
                  Tendance récente combinant ombres claires et sombres pour un effet 3D subtil :
                </p>
                <pre className="bg-gray-900 text-gray-100 p-3 rounded text-xs overflow-x-auto mt-2">
{`.neumorphic {
  background: #e0e5ec;
  box-shadow:
    9px 9px 16px rgba(163,177,198,0.6),    /* ombre sombre en bas à droite */
    -9px -9px 16px rgba(255,255,255,0.5);  /* ombre claire en haut à gauche */
  border-radius: 12px;
}`}
                </pre>
                <p className="text-sm mt-2">
                  Attention : le neumorphism peut poser des problèmes d&apos;accessibilité (faible contraste).
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🌓 Ombres en mode sombre</h3>
                <p className="mb-2">
                  En mode sombre, les ombres doivent être adaptées :
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Utilisez des ombres plus intenses (opacité plus élevée)</li>
                  <li>Les ombres noires sur fond sombre sont moins visibles</li>
                  <li>Envisagez des lueurs subtiles (box-shadow avec couleur claire) pour l&apos;élévation</li>
                  <li>Exemple : <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded text-xs">box-shadow: 0 8px 16px rgba(0,0,0,0.4)</code></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Cas d&apos;usage et exemples pratiques</h2>
            <div className="space-y-3 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="font-semibold mb-1">🔘 Boutons avec état hover</h3>
                <p className="text-sm mb-2">
                  Créez des boutons qui réagissent au survol en s&apos;élevant :
                </p>
                <pre className="bg-gray-900 text-gray-100 p-3 rounded text-xs overflow-x-auto">
{`.button {
  box-shadow: 0 2px 5px rgba(0,0,0,0.15);
  transition: all 0.3s ease;
}
.button:hover {
  box-shadow: 0 5px 15px rgba(0,0,0,0.3);
  transform: translateY(-2px);
}`}
                </pre>
              </div>
              <div>
                <h3 className="font-semibold mb-1">🃏 Cartes et containers</h3>
                <p className="text-sm">
                  Les cartes (cards) bénéficient d&apos;ombres légères pour se détacher du fond : 
                  <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded text-xs ml-1">box-shadow: 0 2px 8px rgba(0,0,0,0.1)</code>. 
                  Augmentez l&apos;ombre au survol pour indiquer qu&apos;elles sont cliquables.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">📝 Champs de formulaire</h3>
                <p className="text-sm">
                  Les inputs peuvent avoir une ombre interne au repos et une ombre externe au focus : 
                  <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded text-xs ml-1">box-shadow: inset 0 1px 3px rgba(0,0,0,0.1)</code> 
                  puis <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded text-xs">box-shadow: 0 0 0 3px rgba(66,153,225,0.5)</code> 
                  au focus.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">🖼️ Images et médias</h3>
                <p className="text-sm">
                  Ajoutez une ombre subtile aux images pour les faire ressortir : 
                  <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded text-xs ml-1">box-shadow: 0 4px 12px rgba(0,0,0,0.15)</code>. 
                  Particulièrement efficace pour les photos de produits e-commerce.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">🎯 Effet de glow (lueur)</h3>
                <p className="text-sm">
                  Utilisez une couleur d&apos;ombre pour créer un effet lumineux : 
                  <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded text-xs ml-1">box-shadow: 0 0 20px rgba(66,153,225,0.6)</code>. 
                  Parfait pour attirer l&apos;attention sur des éléments spéciaux ou en promotion.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Performance et bonnes pratiques</h2>
            <div className="space-y-3 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="font-semibold mb-1">⚡ Impact sur les performances</h3>
                <p className="text-sm">
                  Les box-shadow sont rendues par le GPU et généralement performantes. Cependant, des ombres très 
                  floues (blur-radius &#62; 50px) ou de nombreux éléments avec ombres peuvent ralentir le rendu, 
                  surtout sur mobile. Utilisez <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded text-xs">will-change: box-shadow</code> 
                  avec parcimonie pour optimiser les animations.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">🎬 Animations d&apos;ombres</h3>
                <p className="text-sm">
                  Animer box-shadow peut être coûteux. Pour de meilleures performances, animez plutôt transform 
                  et opacity. Si vous devez animer l&apos;ombre, utilisez <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded text-xs">transition: box-shadow 0.3s ease</code> 
                  et évitez les durées longues. Sur mobile, privilégiez des pseudo-éléments avec opacity pour 
                  simuler le changement d&apos;ombre.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">♿ Accessibilité</h3>
                <p className="text-sm">
                  Les ombres ne doivent jamais être le seul moyen de communiquer une information (état actif, 
                  erreur, etc.). Complétez toujours avec des changements de couleur, icônes ou texte. Vérifiez 
                  que les ombres n&apos;interfèrent pas avec la lisibilité du texte. Pour les utilisateurs avec 
                  sensibilité à la lumière, les ombres très contrastées peuvent être inconfortables.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">📱 Responsive et mobile</h3>
                <p className="text-sm">
                  Sur petits écrans, des ombres trop prononcées peuvent sembler lourdes. Réduisez légèrement 
                  l&apos;intensité des ombres sur mobile avec des media queries. Évitez les ombres très floues 
                  qui peuvent causer des problèmes de rendu. Testez toujours sur de vrais appareils, car les 
                  ombres peuvent apparaître différemment selon les écrans.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Questions fréquentes sur box-shadow</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Quelle est la différence entre box-shadow et drop-shadow ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">box-shadow</code> crée une ombre 
                  autour de la boîte rectangulaire de l&apos;élément. <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">filter: drop-shadow()</code> 
                  suit la forme réelle de l&apos;élément, y compris la transparence. Drop-shadow est parfait pour 
                  les PNG avec transparence ou les SVG, mais est plus coûteux en performance. Box-shadow est plus 
                  rapide et suffit pour la plupart des cas.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Combien d&apos;ombres puis-je combiner ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Techniquement, il n&apos;y a pas de limite, mais pour des raisons de performance et de lisibilité, 
                  limitez-vous à 2-3 ombres maximum. La technique des deux ombres (une proche et nette, une lointaine 
                  et floue) offre le meilleur compromis réalisme/performance. Plus de 4 ombres est rarement justifié 
                  et peut ralentir le rendu.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Puis-je utiliser box-shadow sur du texte ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Non, box-shadow s&apos;applique aux boîtes d&apos;éléments. Pour les ombres de texte, utilisez 
                  <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded text-xs ml-1">text-shadow: offset-x offset-y blur-radius color</code>. 
                  La syntaxe est similaire mais sans spread-radius ni inset. Exemple : 
                  <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded text-xs ml-1">text-shadow: 2px 2px 4px rgba(0,0,0,0.5)</code>.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Les ombres fonctionnent-elles sur des éléments transparents ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Oui, mais l&apos;ombre suivra la boîte rectangulaire de l&apos;élément, pas sa transparence. 
                  Si vous avez un PNG transparent et voulez que l&apos;ombre suive la forme visible, utilisez 
                  <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded text-xs ml-1">filter: drop-shadow()</code> 
                  à la place. Box-shadow créera un rectangle d&apos;ombre même si le contenu est partiellement 
                  transparent.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
