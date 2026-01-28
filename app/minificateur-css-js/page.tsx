"use client";

import Link from "next/link";
import CSSJSMinifier from "@/components/CSSJSMinifier";

export default function CSSJSMinifierPage() {
  return (
    <div className="min-h-screen flex flex-col p-4 sm:p-6 md:p-8">
      <header className="flex-shrink-0 mb-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-3">
          Minificateur CSS JavaScript Gratuit en Ligne
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-400 text-sm sm:text-base max-w-3xl mx-auto">
          Compressez et optimisez votre code CSS et JavaScript instantanément. 
          Réduisez la taille de vos fichiers pour améliorer les performances de votre site web.
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
          <CSSJSMinifier />
        </div>

        {/* SEO Content */}
        <section className="mt-8 space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Pourquoi minifier votre code CSS et JavaScript ?</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              La minification du code CSS et JavaScript est une pratique essentielle en développement web moderne. 
              Elle consiste à supprimer tous les caractères inutiles du code source (espaces, sauts de ligne, 
              commentaires) sans altérer sa fonctionnalité. Cette optimisation permet de réduire considérablement 
              la taille des fichiers, ce qui se traduit par des temps de chargement plus rapides et une meilleure 
              expérience utilisateur.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Dans le contexte actuel où les performances web sont un facteur critique pour le référencement SEO 
              et l&apos;engagement des utilisateurs, la minification n&apos;est plus optionnelle. Google et les autres 
              moteurs de recherche favorisent les sites qui se chargent rapidement, en particulier sur mobile. 
              Un fichier JavaScript de 500 Ko peut souvent être réduit à 150-200 Ko après minification, ce qui 
              représente une économie de bande passante de 60-70%.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Notre outil de minification CSS et JavaScript en ligne vous permet d&apos;optimiser votre code 
              instantanément, sans installation de logiciel. Que vous soyez développeur front-end, webmaster ou 
              propriétaire de site web, cet outil gratuit vous aide à améliorer les performances de votre site 
              en quelques clics. Le processus se fait entièrement dans votre navigateur, garantissant la 
              confidentialité de votre code source.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              La minification est particulièrement importante pour les sites à fort trafic où chaque milliseconde 
              compte. Les études montrent qu&apos;un délai d&apos;une seconde dans le temps de chargement peut réduire 
              les conversions de 7%, augmenter le taux de rebond de 11% et diminuer la satisfaction client de 16%. 
              En minifiant vos fichiers CSS et JavaScript, vous contribuez directement à l&apos;amélioration de ces 
              métriques essentielles.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Comment utiliser notre minificateur CSS/JS ?</h2>
            <ol className="list-decimal list-inside space-y-3 text-gray-700 dark:text-gray-300">
              <li className="pl-2">
                <strong>Sélectionnez le type de code</strong> - Choisissez entre CSS ou JavaScript selon le 
                fichier que vous souhaitez minifier
              </li>
              <li className="pl-2">
                <strong>Collez votre code</strong> - Copiez et collez votre code CSS ou JavaScript dans la zone 
                de texte prévue à cet effet
              </li>
              <li className="pl-2">
                <strong>Cliquez sur Minifier</strong> - Lancez le processus de minification en cliquant sur le 
                bouton correspondant
              </li>
              <li className="pl-2">
                <strong>Visualisez les résultats</strong> - Consultez le code minifié et les statistiques de 
                compression (taille originale vs taille minifiée, pourcentage d&apos;économie)
              </li>
              <li className="pl-2">
                <strong>Copiez ou téléchargez</strong> - Copiez le code minifié dans votre presse-papiers ou 
                téléchargez-le comme fichier pour l&apos;utiliser dans votre projet
              </li>
            </ol>
            <p className="text-gray-700 dark:text-gray-300 mt-4">
              Le processus est instantané et ne nécessite aucune configuration. Vous pouvez minifier autant de 
              fichiers que nécessaire sans limitation. L&apos;outil gère automatiquement les spécificités de chaque 
              langage pour garantir que le code minifié reste fonctionnel.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Avantages de la minification CSS et JavaScript</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="text-xl font-semibold mb-2">⚡ Amélioration des performances</h3>
                <p>
                  La réduction de la taille des fichiers CSS et JavaScript diminue le temps de téléchargement et 
                  d&apos;analyse par le navigateur. Les pages se chargent plus rapidement, offrant une expérience 
                  utilisateur plus fluide. Cela est particulièrement important pour les utilisateurs mobiles avec 
                  des connexions limitées. Un site plus rapide améliore également le score Core Web Vitals de 
                  Google, un facteur important pour le SEO.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">💰 Économie de bande passante</h3>
                <p>
                  En réduisant la taille des fichiers de 50 à 70%, vous diminuez considérablement la consommation 
                  de bande passante. Pour un site recevant des millions de visites, cela se traduit par des 
                  économies substantielles sur les coûts d&apos;hébergement et de CDN. Vos utilisateurs consomment 
                  également moins de données mobiles, ce qui est particulièrement apprécié dans les régions où 
                  la data est coûteuse.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🔍 Meilleur référencement SEO</h3>
                <p>
                  Google utilise la vitesse de chargement comme facteur de classement depuis 2010, et cela est 
                  devenu encore plus important avec l&apos;introduction des Core Web Vitals. Un site qui se charge 
                  rapidement grâce à des fichiers minifiés a plus de chances d&apos;apparaître en tête des résultats 
                  de recherche. La minification contribue directement à améliorer les métriques LCP (Largest 
                  Contentful Paint) et FID (First Input Delay).
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🌍 Portée mondiale améliorée</h3>
                <p>
                  Des fichiers plus légers signifient que votre site reste performant même pour les utilisateurs 
                  situés loin de vos serveurs ou ayant des connexions lentes. La minification aide à garantir 
                  que votre contenu est accessible rapidement partout dans le monde, réduisant les disparités 
                  d&apos;expérience entre différentes régions géographiques.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🛡️ Protection du code source</h3>
                <p>
                  Bien que la minification ne soit pas une méthode de sécurité en soi, elle rend votre code plus 
                  difficile à lire et à comprendre pour les personnes non autorisées. Le code minifié perd sa 
                  structure lisible, ce qui peut dissuader certaines tentatives de copie ou d&apos;analyse. Pour 
                  une protection supplémentaire, la minification peut être combinée avec l&apos;obfuscation.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Différences entre minification, compression et obfuscation</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="text-xl font-semibold mb-2">📦 Minification</h3>
                <p>
                  La minification supprime les caractères inutiles (espaces, sauts de ligne, commentaires) et 
                  raccourcit les noms de variables locales. Le code reste fonctionnellement identique et peut 
                  être facilement debuggé avec des source maps. C&apos;est le processus standard pour la production.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🗜️ Compression (Gzip/Brotli)</h3>
                <p>
                  La compression se fait au niveau du serveur web et compresse les fichiers avant leur envoi. 
                  Elle complète la minification et peut réduire encore la taille de 70-90%. Les navigateurs 
                  décompressent automatiquement les fichiers. Gzip et Brotli sont les algorithmes les plus 
                  couramment utilisés.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🔒 Obfuscation</h3>
                <p>
                  L&apos;obfuscation va plus loin que la minification en rendant le code intentionnellement difficile 
                  à comprendre. Elle transforme les noms de variables et fonctions en chaînes cryptiques, ajoute 
                  de la logique trompeuse et restructure le code. Utilisée principalement pour protéger la 
                  propriété intellectuelle, mais peut nuire aux performances.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Meilleures pratiques de minification</h2>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Conservez les fichiers originaux</strong> - Gardez toujours une version non minifiée 
                  de votre code pour le développement et le débogage
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Utilisez des source maps</strong> - Générez des source maps pour faciliter le débogage 
                  du code minifié en production
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Automatisez le processus</strong> - Intégrez la minification dans votre pipeline de 
                  build avec des outils comme Webpack, Gulp ou npm scripts
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Combinez avec la concaténation</strong> - Regroupez plusieurs fichiers avant minification 
                  pour réduire le nombre de requêtes HTTP
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Testez après minification</strong> - Vérifiez toujours que votre site fonctionne 
                  correctement après minification
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Activez la compression serveur</strong> - Combinez la minification avec Gzip ou Brotli 
                  pour des gains maximaux
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Cas d&apos;usage de la minification</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="text-xl font-semibold mb-2">🏪 Sites e-commerce</h3>
                <p>
                  Les boutiques en ligne bénéficient énormément de la minification. Avec souvent des dizaines 
                  de fichiers JavaScript pour gérer le panier, les filtres de produits et les animations, la 
                  réduction de taille améliore considérablement l&apos;expérience d&apos;achat. Des études montrent 
                  qu&apos;une amélioration d&apos;une seconde du temps de chargement peut augmenter les conversions 
                  de 2%.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">📱 Applications web progressives (PWA)</h3>
                <p>
                  Les PWA doivent se charger rapidement, même hors ligne. La minification des assets est 
                  essentielle pour réduire la taille du cache et permettre des installations rapides. Chaque 
                  kilo-octet économisé se traduit par une meilleure expérience utilisateur et une adoption 
                  plus large de l&apos;application.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">📰 Blogs et sites de contenu</h3>
                <p>
                  Même les sites axés sur le contenu utilisent CSS et JavaScript pour les thèmes, les animations 
                  et les fonctionnalités interactives. La minification garantit que le contenu textuel reste 
                  l&apos;élément le plus lourd de la page, améliorant les temps de chargement et le SEO. C&apos;est 
                  particulièrement important pour les sites monétisés par la publicité.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🎮 Jeux HTML5</h3>
                <p>
                  Les jeux basés sur le web utilisent souvent des quantités importantes de JavaScript. La 
                  minification est cruciale pour réduire les temps de chargement initiaux et permettre aux 
                  joueurs de commencer rapidement. Cela peut faire la différence entre un utilisateur qui 
                  attend le chargement et un qui abandonne.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Impact de la minification sur les Core Web Vitals</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Les Core Web Vitals sont des métriques essentielles que Google utilise pour évaluer l&apos;expérience 
              utilisateur. La minification CSS et JavaScript a un impact direct sur plusieurs de ces métriques :
            </p>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="text-xl font-semibold mb-2">⏱️ LCP (Largest Contentful Paint)</h3>
                <p>
                  Le LCP mesure le temps nécessaire pour afficher le plus grand élément visible. Des fichiers 
                  CSS minifiés se chargent et s&apos;appliquent plus rapidement, permettant un rendu plus rapide du 
                  contenu principal. Un bon score LCP est inférieur à 2,5 secondes.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">⚡ FID (First Input Delay)</h3>
                <p>
                  Le FID mesure le temps entre la première interaction de l&apos;utilisateur et la réponse du 
                  navigateur. Des fichiers JavaScript minifiés se parsent plus rapidement, réduisant le temps 
                  où le thread principal est bloqué. Un bon score FID est inférieur à 100 millisecondes.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">📊 CLS (Cumulative Layout Shift)</h3>
                <p>
                  Bien que la minification n&apos;affecte pas directement le CLS, un chargement plus rapide des 
                  fichiers CSS permet d&apos;appliquer les styles plus tôt, réduisant les changements de mise en 
                  page inattendus. Un bon score CLS est inférieur à 0,1.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Questions fréquentes sur la minification CSS/JS</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  La minification peut-elle casser mon code ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Dans la plupart des cas, non. Les minificateurs modernes sont très fiables. Cependant, certains 
                  cas particuliers peuvent poser problème, comme l&apos;utilisation de eval() ou de code qui dépend 
                  de noms de variables spécifiques. Il est recommandé de toujours tester votre code après 
                  minification.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Dois-je minifier également mes bibliothèques tierces ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  La plupart des bibliothèques populaires (React, Vue, jQuery) fournissent déjà des versions 
                  minifiées (souvent avec l&apos;extension .min.js). Utilisez ces versions en production. Si une 
                  bibliothèque ne fournit pas de version minifiée, vous pouvez la minifier vous-même.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Comment déboguer du code minifié ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Utilisez des source maps qui créent un lien entre le code minifié et le code original. Les 
                  outils de développement des navigateurs peuvent alors afficher le code original lors du 
                  débogage, même si le code exécuté est minifié.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Quelle est la différence entre .min.js et .js ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Par convention, les fichiers .min.js sont des versions minifiées des fichiers .js originaux. 
                  Les fichiers .js contiennent le code source formaté et commenté pour le développement, tandis 
                  que les .min.js sont optimisés pour la production.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  La minification suffit-elle pour optimiser mon site ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Non, la minification est une partie importante de l&apos;optimisation mais doit être combinée avec 
                  d&apos;autres techniques : compression Gzip/Brotli, mise en cache, lazy loading, code splitting, 
                  optimisation des images, et utilisation d&apos;un CDN pour des résultats optimaux.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Outils et intégrations pour la minification automatique</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="text-xl font-semibold mb-2">🔧 Build Tools</h3>
                <p className="mb-2">
                  Pour automatiser la minification dans votre workflow de développement, plusieurs outils 
                  populaires sont disponibles :
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>Webpack</strong> - Utilise TerserPlugin pour JavaScript et css-minimizer-webpack-plugin pour CSS</li>
                  <li><strong>Vite</strong> - Minification intégrée avec esbuild, très rapide</li>
                  <li><strong>Gulp</strong> - Plugins gulp-uglify pour JS et gulp-clean-css pour CSS</li>
                  <li><strong>Parcel</strong> - Minification automatique sans configuration</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">☁️ Services en ligne</h3>
                <p>
                  Notre minificateur en ligne est parfait pour des besoins ponctuels ou pour tester rapidement 
                  la compression d&apos;un fichier. Pour une utilisation régulière en production, l&apos;intégration 
                  dans votre pipeline de build est recommandée.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
