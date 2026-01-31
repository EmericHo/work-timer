"use client";

import Link from "next/link";
import ColorConverter from "@/components/ColorConverter";

export default function ColorConverterPage() {
  return (
    <div className="min-h-screen flex flex-col p-4 sm:p-6 md:p-8">
      <header className="flex-shrink-0 mb-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-3">
          Convertisseur de Couleur HEX RGB HSL Gratuit
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-400 text-sm sm:text-base max-w-3xl mx-auto">
          Convertissez instantanément entre les formats de couleur HEX, RGB, HSL et HSV. 
          Outil gratuit pour designers et développeurs web avec aperçu visuel des couleurs.
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
          <ColorConverter />
        </div>

        {/* SEO Content */}
        <section className="mt-8 space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Les différents formats de couleur expliqués</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Les couleurs numériques peuvent être représentées de plusieurs façons, chacune ayant ses avantages 
              selon le contexte d&apos;utilisation. Comprendre ces différents formats vous aide à choisir le plus 
              approprié pour vos projets de design et de développement web.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Tous ces formats décrivent la même chose - une couleur - mais de manières différentes. Certains sont 
              plus intuitifs pour les designers (HSL), d&apos;autres plus compacts pour le code (HEX), et d&apos;autres 
              plus flexibles pour les manipulations programmatiques (RGB).
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Notre convertisseur de couleur vous permet de passer facilement d&apos;un format à l&apos;autre, avec 
              un aperçu visuel en temps réel pour vérifier que vous obtenez exactement la teinte désirée.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Formats de couleur en détail</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="text-xl font-semibold mb-2">🎨 HEX (Hexadécimal)</h3>
                <p className="mb-2">
                  Format le plus utilisé en CSS et HTML. Une couleur HEX commence par # suivi de 6 caractères 
                  hexadécimaux (0-9, A-F) représentant les composantes Rouge, Vert, Bleu. Exemple : #FF5733
                </p>
                <p className="text-sm">
                  <strong>Avantages :</strong> Compact, largement supporté, facile à copier-coller. 
                  <strong> Inconvénients :</strong> Peu intuitif, difficile de comprendre la couleur juste en 
                  lisant le code.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🔴 RGB (Red Green Blue)</h3>
                <p className="mb-2">
                  Basé sur le modèle additif de couleur. Chaque composante (Rouge, Vert, Bleu) varie de 0 à 255. 
                  Exemple : rgb(255, 87, 51). Supporte aussi la transparence avec RGBA : rgba(255, 87, 51, 0.8)
                </p>
                <p className="text-sm">
                  <strong>Avantages :</strong> Intuitif, permet la transparence (RGBA), facile à manipuler en JavaScript. 
                  <strong> Inconvénients :</strong> Plus verbeux que HEX.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🌈 HSL (Hue Saturation Lightness)</h3>
                <p className="mb-2">
                  Représente les couleurs de manière plus intuitive : Teinte (0-360°), Saturation (0-100%), 
                  Luminosité (0-100%). Exemple : hsl(9, 100%, 60%). Supporte aussi HSLA pour la transparence.
                </p>
                <p className="text-sm">
                  <strong>Avantages :</strong> Très intuitif pour les designers, facile de créer des variations 
                  (éclaircir/assombrir). <strong>Inconvénients :</strong> Moins universel que HEX et RGB.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">💡 HSV/HSB (Hue Saturation Value/Brightness)</h3>
                <p className="mb-2">
                  Similaire à HSL mais utilise Value/Brightness au lieu de Lightness. Populaire dans les logiciels 
                  de design comme Photoshop. Exemple : hsv(9°, 80%, 100%)
                </p>
                <p className="text-sm">
                  <strong>Avantages :</strong> Utilisé par de nombreux outils de design, intuitif pour la sélection 
                  de couleurs. <strong>Inconvénients :</strong> Moins supporté en CSS natif.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Quand utiliser chaque format ?</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="text-xl font-semibold mb-2">🌐 Développement web (CSS/HTML)</h3>
                <p>
                  <strong>HEX</strong> reste le format le plus courant et le plus compact pour le CSS. Utilisez 
                  <strong> RGB/RGBA</strong> quand vous avez besoin de transparence ou de manipulations dynamiques 
                  en JavaScript. <strong>HSL</strong> est excellent pour créer des palettes cohérentes.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🎨 Design et interfaces graphiques</h3>
                <p>
                  <strong>HSL et HSV</strong> sont préférés par les designers car ils permettent de raisonner 
                  intuitivement sur les couleurs. Il&apos;est facile de créer des variantes en ajustant la 
                  luminosité ou la saturation sans affecter la teinte.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">💻 Programmation et manipulation</h3>
                <p>
                  <strong>RGB</strong> est idéal pour les calculs et manipulations de couleurs en code. Les 
                  bibliothèques de traitement d&apos;image et les algorithmes de couleur travaillent généralement 
                  en RGB car c&apos;est le format natif des écrans.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">📊 Data visualization et graphiques</h3>
                <p>
                  <strong>HSL</strong> facilite la génération de palettes de couleurs harmonieuses en code. Par 
                  exemple, garder la même saturation et luminosité tout en variant la teinte crée automatiquement 
                  une palette équilibrée.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Conseils pour choisir les bonnes couleurs</h2>
            <div className="space-y-3 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="font-semibold mb-1">🎯 Contraste et accessibilité</h3>
                <p className="text-sm">
                  Assurez-vous d&apos;un contraste suffisant entre le texte et l&apos;arrière-plan. Le WCAG recommande 
                  un ratio de contraste d&apos;au moins 4.5:1 pour le texte normal et 3:1 pour le texte large. 
                  Utilisez des outils de vérification de contraste pour valider vos choix.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">🌈 Théorie des couleurs</h3>
                <p className="text-sm">
                  Utilisez la roue chromatique pour créer des palettes harmonieuses : complémentaires (opposées), 
                  analogues (adjacentes), triadiques (espacées de 120°). HSL facilite ces calculs en travaillant 
                  directement avec les degrés de teinte.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">🎨 Cohérence de la palette</h3>
                <p className="text-sm">
                  Maintenez une saturation et une luminosité constantes dans votre palette pour un look cohérent. 
                  Variez principalement la teinte pour différencier les éléments tout en gardant une harmonie visuelle.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">🖥️ Testez sur différents écrans</h3>
                <p className="text-sm">
                  Les couleurs peuvent apparaître différemment selon les écrans et leurs calibrations. Testez vos 
                  choix sur plusieurs appareils (desktop, mobile, tablette) et dans différentes conditions d&apos;éclairage.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Avantages de notre convertisseur de couleur</h2>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Multi-format</strong> - Conversion entre HEX, RGB, HSL et HSV
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Aperçu visuel</strong> - Voyez instantanément la couleur résultante
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>100% Gratuit</strong> - Conversions illimitées sans inscription
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Copie rapide</strong> - Copiez les valeurs dans tous les formats en un clic
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Interface intuitive</strong> - Design simple et efficace pour travailler rapidement
                </span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
