"use client";

import Link from "next/link";
import HTMLMinifier from "@/components/HTMLMinifier";

export default function HTMLMinifierPage() {
  return (
    <div className="min-h-screen flex flex-col p-4 sm:p-6 md:p-8">
      <header className="flex-shrink-0 mb-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-3">
          Minificateur HTML en Ligne
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-400 text-sm sm:text-base max-w-3xl mx-auto">
          Réduisez la taille de votre code HTML pour améliorer les performances.
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
          <HTMLMinifier />
        </div>

        {/* SEO Content */}
        <section className="mt-8 space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Qu&apos;est-ce que la minification HTML ?</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              La minification HTML est le processus d&apos;optimisation du code HTML en supprimant tous les caractères 
              inutiles sans modifier sa fonctionnalité. Cela inclut les espaces blancs, les sauts de ligne, les 
              commentaires et les indentations qui rendent le code plus lisible pour les développeurs mais qui ne 
              sont pas nécessaires pour l&apos;exécution par le navigateur.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Lorsque vous créez du code HTML, vous utilisez naturellement des espaces, des tabulations et des 
              retours à la ligne pour organiser et structurer votre code de manière lisible. Bien que ces éléments 
              soient essentiels pendant le développement, ils augmentent considérablement la taille du fichier 
              final sans apporter de valeur au navigateur qui interprète le code.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Par exemple, un fichier HTML de 100 Ko peut souvent être réduit à 70-80 Ko après minification, 
              soit une réduction de 20-30%. Pour les sites web à fort trafic, cette économie se traduit par des 
              millions de kilo-octets économisés chaque jour, réduisant les coûts de bande passante et améliorant 
              l&apos;expérience utilisateur.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Notre minificateur HTML en ligne effectue ce processus automatiquement, en préservant la structure 
              et la fonctionnalité de votre code tout en maximisant les économies de taille de fichier. L&apos;outil 
              est particulièrement utile avant le déploiement en production pour optimiser les performances de 
              votre site web.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Comment utiliser le minificateur HTML ?</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</span>
                <div>
                  <h3 className="font-semibold mb-1">Collez votre code HTML</h3>
                  <p>Copiez et collez votre code HTML dans la zone de texte de gauche. Vous pouvez coller le 
                  contenu d&apos;un fichier HTML complet ou juste un fragment de code.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">2</span>
                <div>
                  <h3 className="font-semibold mb-1">Configurez les options</h3>
                  <p>Choisissez vos préférences de minification : suppression des commentaires, des espaces blancs, 
                  optimisation des attributs, etc.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">3</span>
                <div>
                  <h3 className="font-semibold mb-1">Minifiez le code</h3>
                  <p>Cliquez sur le bouton &quot;Minifier&quot; et obtenez instantanément votre code HTML optimisé 
                  avec les statistiques de réduction.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">4</span>
                <div>
                  <h3 className="font-semibold mb-1">Copiez ou téléchargez</h3>
                  <p>Copiez le code minifié dans votre presse-papiers ou téléchargez-le comme fichier .html 
                  prêt à être déployé.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Avantages de la minification HTML</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="text-xl font-semibold mb-2">⚡ Temps de chargement plus rapides</h3>
                <p>
                  Des fichiers HTML plus petits se téléchargent plus rapidement, réduisant le temps de chargement 
                  de vos pages. Selon Google, 53% des visiteurs mobiles abandonnent un site qui met plus de 3 
                  secondes à charger. Chaque kilo-octet économisé compte, surtout sur les connexions mobiles lentes.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">📊 Amélioration du SEO</h3>
                <p>
                  La vitesse de chargement est un facteur de classement confirmé par Google. Les sites rapides 
                  obtiennent un meilleur positionnement dans les résultats de recherche. Google&apos;s Core Web Vitals, 
                  qui mesure l&apos;expérience utilisateur, accorde une importance particulière au LCP (Largest 
                  Contentful Paint) que la minification améliore directement.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">💰 Réduction des coûts de bande passante</h3>
                <p>
                  Pour les sites à fort trafic, chaque pourcentage de réduction de taille de fichier se traduit 
                  par des économies substantielles sur les coûts d&apos;hébergement et de CDN. Un site avec 1 million 
                  de pages vues par mois peut économiser plusieurs gigaoctets de transfert de données.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">📱 Meilleure expérience mobile</h3>
                <p>
                  Les utilisateurs mobiles, souvent sur des connexions 3G ou 4G avec data limitée, bénéficient 
                  énormément de fichiers plus légers. La minification réduit la consommation de données et 
                  accélère l&apos;affichage sur les appareils à ressources limitées.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🔄 Optimisation du cache</h3>
                <p>
                  Des fichiers plus petits signifient une utilisation plus efficace du cache du navigateur, 
                  permettant de stocker plus de ressources localement et de réduire les requêtes serveur lors 
                  des visites répétées.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🌍 Accessibilité internationale</h3>
                <p>
                  Pour les utilisateurs dans des régions avec une infrastructure internet limitée, des fichiers 
                  légers peuvent faire la différence entre un site accessible et un site inutilisable. La 
                  minification rend votre contenu accessible à un public mondial.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🎯 Meilleur taux de conversion</h3>
                <p>
                  Des études montrent qu&apos;une amélioration d&apos;une seconde du temps de chargement peut augmenter 
                  les conversions de 7%. Amazon a calculé que chaque 100ms de latence leur coûte 1% de ventes. 
                  La vitesse impacte directement votre chiffre d&apos;affaires.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Que supprime la minification HTML ?</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold text-lg mb-1">Espaces blancs superflus</h3>
                <p className="text-sm mb-2">
                  Tous les espaces multiples, tabulations et indentations sont réduits à un seul espace ou 
                  supprimés complètement quand ils ne sont pas nécessaires pour le rendu.
                </p>
                <div className="bg-gray-100 dark:bg-gray-900 p-2 rounded text-xs font-mono">
                  Avant: &lt;div&gt;{'\n'}    &lt;p&gt;Texte&lt;/p&gt;{'\n'}&lt;/div&gt;<br/>
                  Après: &lt;div&gt;&lt;p&gt;Texte&lt;/p&gt;&lt;/div&gt;
                </div>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-semibold text-lg mb-1">Sauts de ligne et retours chariot</h3>
                <p className="text-sm mb-2">
                  Tous les caractères de nouvelle ligne sont supprimés, transformant le code multi-lignes en 
                  une seule ligne compacte.
                </p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="font-semibold text-lg mb-1">Commentaires HTML</h3>
                <p className="text-sm mb-2">
                  Les commentaires &lt;!-- comme celui-ci --&gt; sont supprimés car ils sont uniquement destinés 
                  aux développeurs et n&apos;affectent pas le rendu de la page.
                </p>
              </div>
              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="font-semibold text-lg mb-1">Balises et attributs optionnels</h3>
                <p className="text-sm mb-2">
                  Certaines balises fermantes optionnelles en HTML5 peuvent être omises (comme &lt;/p&gt; avant 
                  un nouveau &lt;p&gt;), ainsi que certains attributs avec valeurs par défaut.
                </p>
              </div>
              <div className="border-l-4 border-red-500 pl-4">
                <h3 className="font-semibold text-lg mb-1">Guillemets d&apos;attributs inutiles</h3>
                <p className="text-sm mb-2">
                  Les guillemets autour des valeurs d&apos;attributs simples peuvent être supprimés dans certains 
                  cas: class=header au lieu de class=&quot;header&quot;.
                </p>
              </div>
              <div className="border-l-4 border-yellow-500 pl-4">
                <h3 className="font-semibold text-lg mb-1">Attributs booléens simplifiés</h3>
                <p className="text-sm mb-2">
                  Les attributs booléens comme disabled=&quot;disabled&quot; peuvent être réduits à simplement disabled.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Bonnes pratiques de minification</h2>
            <div className="space-y-3 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="font-semibold mb-1">✅ Gardez une version source lisible</h3>
                <p className="text-sm">
                  Conservez toujours votre fichier HTML original, non minifié, pour le développement et la 
                  maintenance. Utilisez la version minifiée uniquement en production. Mettez en place un système 
                  de build qui minifie automatiquement lors du déploiement.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">✅ Testez après minification</h3>
                <p className="text-sm">
                  Vérifiez toujours que votre page s&apos;affiche et fonctionne correctement après minification. 
                  Bien que rare, certains cas particuliers de HTML peuvent être affectés par une minification 
                  agressive.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">✅ Combinez avec gzip/brotli</h3>
                <p className="text-sm">
                  La minification et la compression serveur (gzip ou brotli) sont complémentaires. Activez les 
                  deux pour des gains de performance maximaux. Un fichier minifié se compresse également mieux.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">✅ Minifiez également CSS et JavaScript</h3>
                <p className="text-sm">
                  Pour des performances optimales, minifiez aussi vos fichiers CSS et JavaScript externes. 
                  L&apos;économie cumulée peut être significative, surtout pour les applications web modernes.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">✅ Utilisez des source maps pour le debug</h3>
                <p className="text-sm">
                  Pour faciliter le débogage en production, envisagez d&apos;utiliser des source maps qui permettent 
                  de mapper le code minifié vers le code source original dans les outils de développement.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">✅ Automatisez le processus</h3>
                <p className="text-sm">
                  Intégrez la minification dans votre workflow de build avec des outils comme Webpack, Gulp, 
                  Grunt ou npm scripts. La minification manuelle est sujette aux erreurs et aux oublis.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">⚠️ Attention au contenu inline</h3>
                <p className="text-sm">
                  Si vous avez du JavaScript ou CSS inline dans votre HTML, assurez-vous que le minificateur 
                  les gère correctement. Certains minificateurs peuvent avoir des options spécifiques pour cela.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">⚠️ Préservez les espaces significatifs</h3>
                <p className="text-sm">
                  Dans certains contextes (comme à l&apos;intérieur de balises &lt;pre&gt; ou avec certaines 
                  propriétés CSS white-space), les espaces sont significatifs. Les bons minificateurs les 
                  préservent automatiquement.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Impact sur les performances web</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="text-xl font-semibold mb-2">📈 Métriques de performance</h3>
                <p className="mb-2">
                  La minification HTML impacte directement plusieurs métriques clés de performance web :
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm ml-4">
                  <li><strong>TTFB (Time To First Byte)</strong> : Réduit le temps de transfert initial</li>
                  <li><strong>FCP (First Contentful Paint)</strong> : Accélère l&apos;affichage du premier contenu</li>
                  <li><strong>LCP (Largest Contentful Paint)</strong> : Améliore le temps de rendu du contenu principal</li>
                  <li><strong>TBT (Total Blocking Time)</strong> : Peut aider à réduire le blocage du thread principal</li>
                  <li><strong>CLS (Cumulative Layout Shift)</strong> : Indirectement amélioré par des temps de chargement plus rapides</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🎯 Score PageSpeed Insights</h3>
                <p>
                  Google PageSpeed Insights recommande explicitement la minification des ressources HTML, CSS et 
                  JavaScript. Un code minifié peut améliorer votre score de 5 à 15 points, particulièrement dans 
                  la catégorie &quot;Opportunités&quot; où l&apos;outil mesure les économies potentielles en kilo-octets.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🌐 Réseaux CDN</h3>
                <p>
                  Les CDN (Content Delivery Networks) distribuent vos fichiers depuis des serveurs proches de vos 
                  utilisateurs. Des fichiers HTML minifiés se propagent plus rapidement à travers le réseau CDN 
                  et se servent plus efficacement, multipliant les bénéfices de la minification.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">💻 Cas d&apos;usage spécifiques</h3>
                <p>
                  La minification est particulièrement bénéfique pour :
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm ml-4">
                  <li>Les pages avec beaucoup de contenu HTML (articles longs, tableaux de données)</li>
                  <li>Les Single Page Applications (SPA) avec des templates HTML volumineux</li>
                  <li>Les sites e-commerce avec de nombreuses pages produits</li>
                  <li>Les applications web progressives (PWA) où chaque kilo-octet compte</li>
                  <li>Les sites servant une audience internationale sur réseaux lents</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Minification vs Compression</h2>
            <div className="space-y-3 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="font-semibold mb-2">Quelle est la différence ?</h3>
                <p className="text-sm mb-3">
                  La minification et la compression sont deux techniques d&apos;optimisation complémentaires mais distinctes :
                </p>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded mb-3">
                  <h4 className="font-semibold mb-2">Minification</h4>
                  <p className="text-sm">
                    Processus qui modifie le contenu du fichier en supprimant les éléments inutiles (espaces, 
                    commentaires) tout en préservant la fonctionnalité. C&apos;est une optimisation au niveau du code 
                    source qui produit un fichier texte plus petit.
                  </p>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded">
                  <h4 className="font-semibold mb-2">Compression (gzip/brotli)</h4>
                  <p className="text-sm">
                    Algorithme de compression appliqué par le serveur web au moment de la transmission. Le fichier 
                    est compressé en binaire pour le transfert, puis décompressé par le navigateur. N&apos;affecte 
                    pas le contenu réel du fichier.
                  </p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Utilisez les deux pour des résultats optimaux</h3>
                <p className="text-sm">
                  Un fichier HTML typique de 100 Ko peut être :
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm ml-4 mt-2">
                  <li>Réduit à ~75 Ko avec la minification (25% de gain)</li>
                  <li>Puis compressé à ~20 Ko avec gzip (75% de gain supplémentaire)</li>
                  <li>Ou compressé à ~18 Ko avec brotli (78% de gain supplémentaire)</li>
                </ul>
                <p className="text-sm mt-2">
                  L&apos;économie totale combinée peut atteindre 80-85% de la taille originale !
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Questions fréquentes</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  La minification HTML casse-t-elle mon code ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Non, un bon minificateur HTML préserve toujours la structure et la fonctionnalité de votre code. 
                  Il ne supprime que les éléments qui n&apos;affectent pas le rendu ou le comportement. Cependant, 
                  il est toujours recommandé de tester votre page après minification, surtout si vous avez du code 
                  JavaScript inline ou des cas particuliers.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Dois-je minifier le HTML inline ou dans des fichiers séparés ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Les deux approches ont leurs avantages. Pour le HTML inline dans vos pages, la minification 
                  réduit directement la taille de chaque page servie. Pour les templates ou composants réutilisables, 
                  minifiez-les séparément puis incluez-les. L&apos;idéal est d&apos;intégrer la minification dans votre 
                  processus de build pour automatiser les deux.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Combien de temps dure le processus de minification ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  La minification est quasi instantanée. Même un fichier HTML de plusieurs centaines de kilo-octets 
                  sera minifié en quelques millisecondes. C&apos;est pourquoi elle peut être intégrée dans les pipelines 
                  de build sans impact significatif sur les temps de déploiement.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Est-ce que la minification affecte le SEO ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Oui, positivement ! La minification améliore la vitesse de chargement, qui est un facteur de 
                  classement confirmé par Google. Les moteurs de recherche peuvent parfaitement crawler et indexer 
                  du HTML minifié. En fait, Google recommande explicitement la minification dans ses guidelines 
                  de performance web.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Que faire si j&apos;ai des erreurs après minification ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Si vous rencontrez des problèmes après minification, vérifiez d&apos;abord que votre HTML original 
                  est valide (utilisez le validateur W3C). Les erreurs sont souvent dues à du HTML mal formé qui 
                  fonctionnait par chance avec les espaces mais échoue sans eux. Vous pouvez aussi essayer des 
                  options de minification moins agressives.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Puis-je minifier du HTML avec PHP ou d&apos;autres langages serveur ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Oui, mais soyez prudent. Vous pouvez minifier le HTML généré par PHP, mais assurez-vous de ne 
                  pas minifier le code PHP lui-même. La plupart des frameworks modernes (Laravel, Symfony, WordPress) 
                  ont des packages ou plugins qui gèrent cela automatiquement en séparant le code serveur du HTML 
                  généré.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  La minification est-elle nécessaire avec HTTP/2 ou HTTP/3 ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Oui, absolument ! Même si HTTP/2 et HTTP/3 améliorent les performances de transfert avec la 
                  multiplexation et la compression des en-têtes, des fichiers plus petits se téléchargent toujours 
                  plus vite. La minification reste une optimisation pertinente et recommandée, quel que soit le 
                  protocole HTTP utilisé.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Quels outils puis-je utiliser pour automatiser la minification ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Plusieurs outils populaires : html-minifier (Node.js), HTMLMinifier plugin pour Webpack, 
                  gulp-htmlmin pour Gulp, django-htmlmin pour Django, ou des services en ligne comme notre outil. 
                  Pour WordPress, des plugins comme Autoptimize ou WP Rocket intègrent la minification HTML.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Avantages de notre minificateur HTML</h2>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>100% Gratuit et illimité</strong> - Minifiez autant de code que nécessaire sans frais
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Traitement instantané</strong> - Résultats en quelques millisecondes
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Statistiques détaillées</strong> - Visualisez exactement combien vous économisez
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Préservation de la structure</strong> - Votre code fonctionne exactement comme avant
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Interface intuitive</strong> - Facile à utiliser, même sans connaissances techniques
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Confidentialité totale</strong> - Tout traitement côté client, aucune donnée envoyée
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Copie en un clic</strong> - Copiez le résultat directement dans votre presse-papiers
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Compatible tous navigateurs</strong> - Fonctionne sur Chrome, Firefox, Safari, Edge
                </span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
