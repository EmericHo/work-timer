"use client";

import Link from "next/link";
import CSSGradientGenerator from "@/components/CSSGradientGenerator";

export default function CSSGradientGeneratorPage() {
  return (
    <div className="min-h-screen flex flex-col p-4 sm:p-6 md:p-8">
      <header className="flex-shrink-0 mb-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-3">
          Générateur de Gradient CSS en Ligne Gratuit
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-400 text-sm sm:text-base max-w-3xl mx-auto">
          Créez des dégradés CSS personnalisés (linear-gradient, radial-gradient) visuellement et copiez 
          le code prêt à l&apos;emploi. Outil gratuit pour des backgrounds modernes et attractifs.
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
          <CSSGradientGenerator />
        </div>

        {/* SEO Content */}
        <section className="mt-8 space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Les gradients CSS expliqués</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Les gradients (ou dégradés) CSS permettent de créer des transitions douces entre deux ou plusieurs 
              couleurs, sans recourir à des images. Introduits avec CSS3, ils sont désormais universellement 
              supportés par tous les navigateurs modernes. Un gradient est techniquement une image générée par 
              le navigateur, ce qui signifie qu&apos;il peut être utilisé partout où vous utiliseriez une image 
              de fond (background-image, mais aussi sur border-image ou list-style-image).
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Les gradients CSS présentent de nombreux avantages par rapport aux images traditionnelles : ils 
              sont parfaitement nets sur tous les écrans (y compris Retina), ne nécessitent aucun téléchargement 
              supplémentaire (réduisant ainsi le temps de chargement), sont facilement modifiables via le code, 
              et peuvent être animés avec des transitions CSS. De plus, leur taille de fichier est nulle puisque 
              c&apos;est du code pur.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Notre générateur vous permet de créer visuellement des gradients linéaires et radiaux, d&apos;ajuster 
              les couleurs, les positions des arrêts de couleur (color stops), l&apos;angle ou la direction, et 
              de copier instantanément le code CSS optimisé. Parfait pour créer des backgrounds modernes, des 
              boutons stylisés, des overlays sur images, ou des effets visuels sophistiqués sans Photoshop.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Types de gradients CSS</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="text-xl font-semibold mb-2">📐 Linear Gradient (Dégradé linéaire)</h3>
                <p className="mb-2">
                  Transition en ligne droite entre les couleurs, selon un angle ou une direction :
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Syntaxe : <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">linear-gradient(angle, color1, color2, ...)</code></li>
                  <li>Direction : to right, to bottom, to top right, ou angle en degrés (0deg = vers le haut)</li>
                  <li>Exemple : <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">background: linear-gradient(90deg, #667eea 0%, #764ba2 100%)</code></li>
                  <li>Idéal pour les headers, boutons, et backgrounds de section</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">⭕ Radial Gradient (Dégradé radial)</h3>
                <p className="mb-2">
                  Transition circulaire ou elliptique partant d&apos;un point central :
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Syntaxe : <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">radial-gradient(shape at position, color1, color2, ...)</code></li>
                  <li>Forme : circle ou ellipse (par défaut)</li>
                  <li>Position : center, top left, 60% 40%, etc.</li>
                  <li>Parfait pour les effets de spotlight, vignettes, ou fonds organiques</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🔄 Conic Gradient (Dégradé conique)</h3>
                <p className="mb-2">
                  Transition en rotation autour d&apos;un point central (comme une tarte) :
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Syntaxe : <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">conic-gradient(from angle at position, color1, color2, ...)</code></li>
                  <li>Moins utilisé mais puissant pour les graphiques circulaires (pie charts)</li>
                  <li>Exemple : <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">conic-gradient(red, yellow, lime, cyan, blue, magenta, red)</code></li>
                  <li>Support navigateur : moderne (IE non supporté)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🔁 Repeating Gradients</h3>
                <p className="mb-2">
                  Versions répétitives des gradients pour créer des motifs :
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">repeating-linear-gradient()</code> et <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">repeating-radial-gradient()</code></li>
                  <li>Créez des rayures, motifs géométriques, ou textures</li>
                  <li>Exemple rayures : <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded text-xs">repeating-linear-gradient(45deg, #000 0px, #000 10px, #fff 10px, #fff 20px)</code></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Color stops et contrôle avancé</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="text-xl font-semibold mb-2">🎯 Arrêts de couleur (Color Stops)</h3>
                <p className="mb-2">
                  Définissez précisément où chaque couleur commence et se termine :
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Syntaxe : <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">color position</code> (ex: <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">#ff0000 30%</code>)</li>
                  <li>Position en % (relatif à la taille de l&apos;élément) ou unités absolues (px, em)</li>
                  <li>Plusieurs stops pour une couleur créent des bandes de couleur solide</li>
                  <li>Exemple transition brutale : <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded text-xs">#f00 50%, #00f 50%</code></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🌈 Gradients multi-couleurs</h3>
                <p className="mb-2">
                  Combinez plus de deux couleurs pour des effets riches :
                </p>
                <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded text-sm mt-2">
                  <pre className="overflow-x-auto">{`background: linear-gradient(
  90deg,
  #ff0000 0%,
  #ff7f00 20%,
  #ffff00 40%,
  #00ff00 60%,
  #0000ff 80%,
  #8b00ff 100%
);`}</pre>
                </div>
                <p className="mt-2 text-sm">Cet exemple crée un dégradé arc-en-ciel avec 6 couleurs réparties uniformément.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">💫 Transparence et rgba()</h3>
                <p className="mb-2">
                  Utilisez des couleurs transparentes pour des overlays élégants :
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Syntaxe : <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">rgba(r, g, b, alpha)</code> où alpha va de 0 (transparent) à 1 (opaque)</li>
                  <li>Exemple overlay : <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded text-xs">linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5))</code></li>
                  <li>Parfait pour assombrir une image de fond et améliorer la lisibilité du texte</li>
                  <li>Fade-out : <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded text-xs">linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,1))</code></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Cas d&apos;usage pratiques des gradients</h2>
            <div className="space-y-3 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="font-semibold mb-1">🖼️ Overlay sur images pour lisibilité</h3>
                <p className="text-sm mb-2">
                  Appliquez un gradient semi-transparent au-dessus d&apos;images pour garantir la lisibilité du texte :
                </p>
                <pre className="bg-gray-900 text-gray-100 p-3 rounded text-xs overflow-x-auto">
{`.hero {
  background-image: 
    linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),
    url('hero.jpg');
  background-size: cover;
}`}
                </pre>
              </div>
              <div>
                <h3 className="font-semibold mb-1">🎨 Boutons modernes et CTA accrocheurs</h3>
                <p className="text-sm mb-2">
                  Les boutons avec gradients attirent plus l&apos;attention que les couleurs solides :
                </p>
                <pre className="bg-gray-900 text-gray-100 p-3 rounded text-xs overflow-x-auto">
{`.btn-gradient {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  transition: transform 0.2s;
}
.btn-gradient:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(102,126,234,0.4);
}`}
                </pre>
              </div>
              <div>
                <h3 className="font-semibold mb-1">✨ Texte avec gradient (Gradient Text)</h3>
                <p className="text-sm mb-2">
                  Créez des titres colorés avec des dégradés :
                </p>
                <pre className="bg-gray-900 text-gray-100 p-3 rounded text-xs overflow-x-auto">
{`.gradient-text {
  background: linear-gradient(90deg, #ff6b6b, #4ecdc4, #45b7d1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}`}
                </pre>
              </div>
              <div>
                <h3 className="font-semibold mb-1">🌅 Backgrounds de sections</h3>
                <p className="text-sm">
                  Utilisez des gradients subtils pour différencier visuellement les sections de votre site. 
                  Les gradients très légers (avec des couleurs proches) créent de la profondeur sans surcharger. 
                  Exemple : un gradient blanc vers un gris très pâle (#ffffff vers #f8f9fa) ajoute de la dimension 
                  tout en restant minimaliste.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">🔲 Bordures et séparateurs créatifs</h3>
                <p className="text-sm">
                  Avec <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded text-xs">border-image</code>, créez 
                  des bordures colorées : <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded text-xs">border-image: linear-gradient(45deg, gold, deeppink) 1</code>. 
                  Ou utilisez un pseudo-élément avec gradient en background pour des séparateurs stylisés entre sections.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Performance et bonnes pratiques</h2>
            <div className="space-y-3 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="font-semibold mb-1">⚡ Performance des gradients</h3>
                <p className="text-sm">
                  Les gradients CSS sont très performants car générés par le GPU. Cependant, des gradients 
                  complexes avec de nombreux color stops ou des animations peuvent impacter les performances 
                  sur mobile. Préférez des gradients simples (2-4 couleurs) et évitez d&apos;animer directement 
                  le gradient (animez plutôt l&apos;opacité ou la position).
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">🎯 Compatibilité navigateurs</h3>
                <p className="text-sm">
                  Les gradients linéaires et radiaux sont supportés par tous les navigateurs modernes (y compris 
                  IE10+). Pour un support étendu, fournissez une couleur de fallback : 
                  <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded text-xs ml-1">background: #667eea; background: linear-gradient(...);</code>. 
                  Les préfixes vendors (-webkit-, -moz-) ne sont plus nécessaires depuis 2015.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">🌐 Outils de génération et inspiration</h3>
                <p className="text-sm">
                  Outre notre outil, explorez CSS Gradient (cssgradient.io), uiGradients pour des presets populaires, 
                  Gradient Hunt pour découvrir des palettes communautaires, et WebGradients pour des collections 
                  prêtes à l&apos;emploi. Analysez les sites que vous admirez avec DevTools pour voir comment 
                  ils utilisent les gradients.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">♿ Accessibilité</h3>
                <p className="text-sm">
                  Assurez-vous que le texte sur fond gradient maintient un contraste suffisant (ratio 4.5:1 minimum). 
                  Testez avec des outils comme WebAIM. Si le gradient rend le contraste variable, ajoutez un overlay 
                  semi-transparent uniforme pour garantir la lisibilité sur toute la surface. N&apos;utilisez jamais 
                  uniquement un gradient pour transmettre une information critique.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Questions fréquentes sur les gradients CSS</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Puis-je animer un gradient CSS ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Les gradients ne peuvent pas être animés directement avec CSS transitions car ce sont des images. 
                  Cependant, vous pouvez créer des animations en : 1) animant l&apos;opacité entre plusieurs 
                  gradients superposés, 2) animant la position d&apos;un gradient via background-position avec 
                  background-size supérieur à 100%, ou 3) utilisant des variables CSS custom properties (mais 
                  support limité). Les animations CSS @keyframes fonctionnent aussi.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Comment combiner plusieurs gradients ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Utilisez plusieurs gradients séparés par des virgules dans background-image. Ils se superposent 
                  (le premier est au-dessus). Exemple : 
                  <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded text-xs ml-1">background-image: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), linear-gradient(45deg, red, blue);</code>. 
                  Utile pour ajouter un overlay sombre tout en conservant un gradient coloré.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Quelle est la différence entre background et background-image ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">background</code> est une propriété 
                  raccourcie qui réinitialise toutes les sous-propriétés (background-color, background-image, 
                  background-position, etc.). <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">background-image</code> 
                  définit uniquement l&apos;image/gradient sans affecter les autres propriétés. Préférez background-image 
                  pour ajouter un gradient en préservant d&apos;autres réglages existants.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Les gradients impactent-ils le SEO ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Non, les gradients CSS n&apos;ont aucun impact direct sur le SEO. Cependant, ils améliorent 
                  indirectement le référencement en réduisant le poids de la page (vs. images lourdes), en 
                  accélérant le chargement, et en créant des designs attrayants qui améliorent l&apos;engagement 
                  utilisateur. Des métriques UX positives (temps sur page, taux de rebond) influencent favorablement 
                  le classement Google.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
