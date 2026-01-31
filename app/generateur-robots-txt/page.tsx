"use client";

import Link from "next/link";
import RobotsGenerator from "@/components/RobotsGenerator";

export default function RobotsGeneratorPage() {
  return (
    <div className="min-h-screen flex flex-col p-4 sm:p-6 md:p-8">
      <header className="flex-shrink-0 mb-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-3">
          Générateur de Fichier Robots.txt
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-400 text-sm sm:text-base max-w-3xl mx-auto">
          Créez facilement un fichier robots.txt pour votre site web.
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
          <RobotsGenerator />
        </div>

        {/* SEO Content */}
        <section className="mt-8 space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Qu&apos;est-ce qu&apos;un fichier robots.txt ?</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Le fichier robots.txt est un fichier texte simple placé à la racine de votre site web qui indique aux 
              robots d&apos;exploration (crawlers) des moteurs de recherche comme Google, Bing et Yahoo quelles pages 
              ou sections de votre site ils peuvent ou ne peuvent pas explorer et indexer.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Ce fichier fait partie du protocole d&apos;exclusion des robots (Robots Exclusion Protocol), un standard 
              créé en 1994 pour permettre aux webmasters de contrôler comment les robots automatisés interagissent 
              avec leur site. Il est toujours accessible à l&apos;adresse : <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
              https://votresite.com/robots.txt</code>
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Bien que les robots.txt ne soient pas obligatoires, ils sont essentiels pour optimiser votre budget 
              de crawl, protéger certaines sections privées de votre site, et améliorer votre stratégie SEO globale. 
              Un fichier robots.txt bien configuré aide les moteurs de recherche à comprendre la structure de votre 
              site et à prioriser les pages importantes.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              <strong>Important :</strong> Le fichier robots.txt est une recommandation, pas une sécurité. Les robots 
              respectueux (comme Google, Bing) l&apos;honoreront, mais les robots malveillants peuvent l&apos;ignorer. 
              Pour une véritable protection des données sensibles, utilisez l&apos;authentification ou le blocage au 
              niveau du serveur.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Comment utiliser le générateur de robots.txt ?</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</span>
                <div>
                  <h3 className="font-semibold mb-1">Sélectionnez vos paramètres</h3>
                  <p>Choisissez les robots auxquels vous souhaitez donner des instructions spécifiques (Googlebot, 
                  Bingbot, tous les robots, etc.).</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">2</span>
                <div>
                  <h3 className="font-semibold mb-1">Définissez les règles d&apos;accès</h3>
                  <p>Spécifiez les répertoires ou pages à autoriser (Allow) ou à bloquer (Disallow). Vous pouvez 
                  utiliser des wildcards (*) pour des règles plus flexibles.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">3</span>
                <div>
                  <h3 className="font-semibold mb-1">Ajoutez votre sitemap</h3>
                  <p>Indiquez l&apos;URL de votre sitemap XML pour aider les moteurs de recherche à découvrir toutes 
                  vos pages importantes rapidement.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">4</span>
                <div>
                  <h3 className="font-semibold mb-1">Téléchargez et déployez</h3>
                  <p>Copiez le fichier généré ou téléchargez-le, puis placez-le à la racine de votre site web 
                  (accessible via votresite.com/robots.txt).</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Syntaxe et directives du fichier robots.txt</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="text-xl font-semibold mb-2">User-agent: *</h3>
                <p className="mb-2">
                  Spécifie à quel robot la règle s&apos;applique. L&apos;astérisque (*) signifie &quot;tous les robots&quot;. 
                  Vous pouvez cibler des robots spécifiques comme Googlebot, Bingbot, ou Baiduspider.
                </p>
                <div className="bg-gray-100 dark:bg-gray-900 p-3 rounded font-mono text-sm">
                  User-agent: Googlebot<br/>
                  User-agent: Bingbot<br/>
                  User-agent: *
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Disallow: /chemin/</h3>
                <p className="mb-2">
                  Interdit l&apos;exploration d&apos;un répertoire, d&apos;une page ou d&apos;un type de fichier spécifique. 
                  Les chemins sont relatifs à la racine du domaine.
                </p>
                <div className="bg-gray-100 dark:bg-gray-900 p-3 rounded font-mono text-sm">
                  Disallow: /admin/<br/>
                  Disallow: /private/<br/>
                  Disallow: /*.pdf$
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Allow: /chemin/</h3>
                <p className="mb-2">
                  Autorise explicitement l&apos;exploration d&apos;un répertoire ou d&apos;une page, même si un Disallow 
                  plus général pourrait le bloquer. Les règles Allow ont priorité sur Disallow.
                </p>
                <div className="bg-gray-100 dark:bg-gray-900 p-3 rounded font-mono text-sm">
                  Disallow: /admin/<br/>
                  Allow: /admin/public/
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Sitemap: URL</h3>
                <p className="mb-2">
                  Indique l&apos;emplacement de votre sitemap XML. Vous pouvez spécifier plusieurs sitemaps si nécessaire.
                </p>
                <div className="bg-gray-100 dark:bg-gray-900 p-3 rounded font-mono text-sm">
                  Sitemap: https://www.exemple.com/sitemap.xml<br/>
                  Sitemap: https://www.exemple.com/sitemap-images.xml
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Crawl-delay: nombre</h3>
                <p className="mb-2">
                  Définit un délai (en secondes) entre les requêtes du robot. Utilisé pour limiter la charge serveur. 
                  Notez que Google ignore cette directive.
                </p>
                <div className="bg-gray-100 dark:bg-gray-900 p-3 rounded font-mono text-sm">
                  Crawl-delay: 10
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Caractères spéciaux (wildcards)</h3>
                <p className="mb-2">
                  <strong>*</strong> (astérisque) : correspond à n&apos;importe quelle séquence de caractères<br/>
                  <strong>$</strong> (dollar) : indique la fin de l&apos;URL
                </p>
                <div className="bg-gray-100 dark:bg-gray-900 p-3 rounded font-mono text-sm">
                  Disallow: /*?*    # Bloque toutes les URLs avec paramètres<br/>
                  Disallow: /*.pdf$ # Bloque tous les fichiers PDF
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Exemples de configurations robots.txt</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="text-xl font-semibold mb-2">🌐 Configuration de base (autoriser tout)</h3>
                <p className="text-sm mb-2">Permet à tous les robots d&apos;explorer tout le site.</p>
                <div className="bg-gray-100 dark:bg-gray-900 p-3 rounded font-mono text-sm">
                  User-agent: *<br/>
                  Disallow:<br/>
                  <br/>
                  Sitemap: https://www.votresite.com/sitemap.xml
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🚫 Bloquer tout le site</h3>
                <p className="text-sm mb-2">Interdit l&apos;exploration complète du site (utile pour les sites en développement).</p>
                <div className="bg-gray-100 dark:bg-gray-900 p-3 rounded font-mono text-sm">
                  User-agent: *<br/>
                  Disallow: /
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🔒 Protéger des répertoires spécifiques</h3>
                <p className="text-sm mb-2">Bloque l&apos;accès aux zones d&apos;administration et fichiers privés.</p>
                <div className="bg-gray-100 dark:bg-gray-900 p-3 rounded font-mono text-sm">
                  User-agent: *<br/>
                  Disallow: /admin/<br/>
                  Disallow: /private/<br/>
                  Disallow: /tmp/<br/>
                  Disallow: /cgi-bin/<br/>
                  <br/>
                  Sitemap: https://www.votresite.com/sitemap.xml
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">📁 Bloquer types de fichiers</h3>
                <p className="text-sm mb-2">Empêche l&apos;indexation de certains formats de fichiers.</p>
                <div className="bg-gray-100 dark:bg-gray-900 p-3 rounded font-mono text-sm">
                  User-agent: *<br/>
                  Disallow: /*.pdf$<br/>
                  Disallow: /*.doc$<br/>
                  Disallow: /*.zip$<br/>
                  Disallow: /*.xls$<br/>
                  <br/>
                  Sitemap: https://www.votresite.com/sitemap.xml
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🛒 Configuration e-commerce</h3>
                <p className="text-sm mb-2">Optimisé pour les boutiques en ligne (bloquer panier, recherche interne, paramètres).</p>
                <div className="bg-gray-100 dark:bg-gray-900 p-3 rounded font-mono text-sm">
                  User-agent: *<br/>
                  Disallow: /panier/<br/>
                  Disallow: /checkout/<br/>
                  Disallow: /compte/<br/>
                  Disallow: /recherche/<br/>
                  Disallow: /*?*    # Bloque URLs avec paramètres<br/>
                  Allow: /*?p=      # Autorise pagination<br/>
                  <br/>
                  Sitemap: https://www.votresite.com/sitemap.xml<br/>
                  Sitemap: https://www.votresite.com/sitemap-products.xml
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">📝 Configuration WordPress</h3>
                <p className="text-sm mb-2">Optimisée pour les sites WordPress.</p>
                <div className="bg-gray-100 dark:bg-gray-900 p-3 rounded font-mono text-sm">
                  User-agent: *<br/>
                  Disallow: /wp-admin/<br/>
                  Allow: /wp-admin/admin-ajax.php<br/>
                  Disallow: /wp-includes/<br/>
                  Disallow: /wp-content/plugins/<br/>
                  Disallow: /wp-content/themes/<br/>
                  Disallow: /trackback/<br/>
                  Disallow: /xmlrpc.php<br/>
                  <br/>
                  Sitemap: https://www.votresite.com/sitemap_index.xml
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🤖 Règles spécifiques par robot</h3>
                <p className="text-sm mb-2">Directives différentes selon les moteurs de recherche.</p>
                <div className="bg-gray-100 dark:bg-gray-900 p-3 rounded font-mono text-sm">
                  # Règles pour Google<br/>
                  User-agent: Googlebot<br/>
                  Disallow: /no-google/<br/>
                  <br/>
                  # Règles pour Bing<br/>
                  User-agent: Bingbot<br/>
                  Disallow: /no-bing/<br/>
                  Crawl-delay: 10<br/>
                  <br/>
                  # Bloquer les robots malveillants<br/>
                  User-agent: AhrefsBot<br/>
                  User-agent: SemrushBot<br/>
                  Disallow: /<br/>
                  <br/>
                  # Règles pour tous les autres robots<br/>
                  User-agent: *<br/>
                  Disallow: /admin/<br/>
                  <br/>
                  Sitemap: https://www.votresite.com/sitemap.xml
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Bonnes pratiques pour votre fichier robots.txt</h2>
            <div className="space-y-3 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="font-semibold mb-1">✅ Placez-le à la racine du domaine</h3>
                <p className="text-sm">
                  Le fichier robots.txt doit impérativement être accessible à https://votresite.com/robots.txt. 
                  Il ne fonctionnera pas dans un sous-répertoire ou sous-domaine (sauf si configuré spécifiquement).
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">✅ Utilisez un encodage UTF-8</h3>
                <p className="text-sm">
                  Enregistrez toujours votre fichier robots.txt en UTF-8 pour éviter les problèmes de caractères 
                  spéciaux. N&apos;utilisez pas de BOM (Byte Order Mark).
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">✅ Respectez la casse</h3>
                <p className="text-sm">
                  Les directives dans robots.txt sont sensibles à la casse. /Admin/ est différent de /admin/. 
                  Par convention, utilisez toujours des minuscules pour les chemins.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">✅ Testez votre fichier</h3>
                <p className="text-sm">
                  Utilisez Google Search Console (outil de test robots.txt) ou Bing Webmaster Tools pour vérifier 
                  que votre fichier est correctement formaté et qu&apos;il bloque/autorise les bonnes URLs.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">✅ Ajoutez toujours votre sitemap</h3>
                <p className="text-sm">
                  Incluez la directive Sitemap pour aider les moteurs de recherche à découvrir rapidement toutes 
                  vos pages importantes. Vous pouvez spécifier plusieurs sitemaps si nécessaire.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">✅ Commentez votre code</h3>
                <p className="text-sm">
                  Utilisez le symbole # pour ajouter des commentaires expliquant vos règles. Cela facilite la 
                  maintenance future : # Bloquer l&apos;accès au panneau d&apos;administration
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">✅ Soyez spécifique avant général</h3>
                <p className="text-sm">
                  Les règles plus spécifiques doivent précéder les règles générales. Les robots appliquent 
                  généralement la règle la plus longue qui correspond.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">✅ Vérifiez régulièrement</h3>
                <p className="text-sm">
                  Auditez votre robots.txt au moins une fois par trimestre pour vous assurer qu&apos;il est toujours 
                  à jour avec la structure de votre site et vos objectifs SEO.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">⚠️ N&apos;utilisez pas pour cacher des données sensibles</h3>
                <p className="text-sm">
                  Le fichier robots.txt est public et accessible à tous. Ne l&apos;utilisez pas comme mesure de 
                  sécurité. Les robots malveillants l&apos;ignoreront. Utilisez l&apos;authentification ou .htaccess.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">⚠️ Attention aux erreurs de syntaxe</h3>
                <p className="text-sm">
                  Une simple faute de frappe peut bloquer l&apos;indexation de tout votre site. Vérifiez toujours 
                  la syntaxe avant de déployer et testez dans Google Search Console.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Erreurs courantes à éviter</h2>
            <div className="space-y-3 text-gray-700 dark:text-gray-300">
              <div className="flex items-start gap-3">
                <span className="text-red-600 text-xl">❌</span>
                <div>
                  <h3 className="font-semibold mb-1">Bloquer accidentellement tout le site</h3>
                  <p className="text-sm">
                    <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">Disallow: /</code> bloque 
                    tout le site. Vérifiez toujours que c&apos;est intentionnel. Cette erreur a causé des pertes 
                    de trafic massives pour de nombreuses entreprises.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-red-600 text-xl">❌</span>
                <div>
                  <h3 className="font-semibold mb-1">Bloquer CSS et JavaScript</h3>
                  <p className="text-sm">
                    Google a besoin d&apos;accéder aux fichiers CSS et JS pour comprendre comment votre page s&apos;affiche. 
                    Ne bloquez jamais /css/, /js/ ou /assets/ sauf raison exceptionnelle.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-red-600 text-xl">❌</span>
                <div>
                  <h3 className="font-semibold mb-1">Oublier le trailing slash</h3>
                  <p className="text-sm">
                    <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">Disallow: /admin</code> bloque 
                    /admin, /admin.html, /administrator mais pas /admin/. Utilisez 
                    <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">Disallow: /admin/</code> pour 
                    bloquer le répertoire entier.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-red-600 text-xl">❌</span>
                <div>
                  <h3 className="font-semibold mb-1">Multiples User-agent pour une même règle</h3>
                  <p className="text-sm">
                    Chaque bloc User-agent doit avoir ses propres directives. Les directives ne se cumulent pas 
                    entre différents User-agent consécutifs.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-red-600 text-xl">❌</span>
                <div>
                  <h3 className="font-semibold mb-1">Utiliser Allow seul sans Disallow</h3>
                  <p className="text-sm">
                    Allow ne fonctionne que pour outrepasser un Disallow existant. Tout est autorisé par défaut, 
                    donc Allow seul n&apos;a aucun effet.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-red-600 text-xl">❌</span>
                <div>
                  <h3 className="font-semibold mb-1">Bloquer des pages déjà indexées</h3>
                  <p className="text-sm">
                    Robots.txt empêche l&apos;exploration, pas la suppression de l&apos;index. Pour supprimer des pages 
                    indexées, utilisez la balise noindex ou supprimez-les via Search Console.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-red-600 text-xl">❌</span>
                <div>
                  <h3 className="font-semibold mb-1">Fichier robots.txt trop volumineux</h3>
                  <p className="text-sm">
                    Google limite la taille du fichier robots.txt à 500 Ko. Un fichier trop complexe peut aussi 
                    ralentir l&apos;exploration. Restez simple et concis.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Robots.txt et stratégie SEO</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="text-xl font-semibold mb-2">💰 Optimiser le budget de crawl</h3>
                <p>
                  Chaque moteur de recherche alloue un &quot;budget de crawl&quot; limité à votre site - le nombre de pages 
                  qu&apos;il explorera lors d&apos;une visite. En bloquant les pages sans valeur SEO (pages de compte utilisateur, 
                  résultats de recherche interne, pages dupliquées), vous permettez aux robots de se concentrer sur 
                  vos pages importantes qui génèrent du trafic.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🎯 Éviter le contenu dupliqué</h3>
                <p>
                  Bloquez les versions alternatives de vos pages (paramètres de tri, filtres, sessions) qui créent 
                  du contenu dupliqué. Par exemple, /produits?tri=prix et /produits?tri=nom affichent le même 
                  contenu et peuvent diluer votre autorité SEO.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🔍 Contrôler l&apos;indexation stratégique</h3>
                <p>
                  Guidez les moteurs vers vos pages stratégiques (pages produits, articles de blog, pages de 
                  services) plutôt que vers des pages techniques (CGU, mentions légales, pages de remerciement) 
                  qui n&apos;apportent pas de valeur SEO.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">⚡ Améliorer les performances du site</h3>
                <p>
                  En réduisant la charge d&apos;exploration des robots, vous diminuez la charge serveur et libérez 
                  des ressources pour vos visiteurs humains, améliorant ainsi les temps de réponse et l&apos;expérience 
                  utilisateur.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🛡️ Protéger les informations sensibles</h3>
                <p>
                  Bien que ce ne soit pas une mesure de sécurité complète, robots.txt empêche l&apos;indexation 
                  accidentelle de pages en développement, pages de test, ou sections destinées uniquement aux 
                  utilisateurs connectés. Combinez toujours avec une vraie authentification.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Questions fréquentes sur robots.txt</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Est-ce que robots.txt est obligatoire pour mon site ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Non, robots.txt n&apos;est pas obligatoire. Si vous n&apos;avez pas de fichier robots.txt, les moteurs 
                  de recherche exploreront et indexeront toutes les pages accessibles de votre site. Cependant, 
                  il est fortement recommandé d&apos;en avoir un, ne serait-ce que pour indiquer l&apos;emplacement de 
                  votre sitemap et optimiser le crawl.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Robots.txt supprime-t-il les pages de l&apos;index Google ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Non. Robots.txt empêche l&apos;exploration (crawling) mais pas l&apos;indexation. Une page déjà indexée 
                  peut rester dans les résultats de recherche même si vous la bloquez dans robots.txt. Pour 
                  supprimer une page de l&apos;index, utilisez la balise meta &quot;noindex&quot; ou l&apos;outil de suppression 
                  d&apos;URL dans Google Search Console.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Combien de temps faut-il pour que les changements prennent effet ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Les robots des moteurs de recherche ne vérifient pas robots.txt en temps réel. Google met 
                  généralement à jour sa copie du fichier dans les 24 heures. Pour forcer une mise à jour rapide, 
                  utilisez l&apos;outil de test robots.txt dans Google Search Console qui permet de recharger le fichier 
                  immédiatement.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Puis-je avoir plusieurs fichiers robots.txt ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Vous ne pouvez avoir qu&apos;un seul fichier robots.txt par domaine/sous-domaine, et il doit être 
                  à la racine. Chaque sous-domaine (blog.exemple.com, shop.exemple.com) peut avoir son propre 
                  robots.txt distinct. Les sous-répertoires ne peuvent pas avoir leur propre fichier robots.txt.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Dois-je bloquer les mauvais robots dans robots.txt ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Les robots malveillants ou les scrapers agressifs ignorent souvent robots.txt. Au lieu de les 
                  bloquer dans robots.txt (ce qui ne fonctionne pas), utilisez votre fichier .htaccess, firewall, 
                  ou des services comme Cloudflare pour bloquer leurs adresses IP. Vous pouvez toutefois bloquer 
                  les robots légitimes mais indésirables (AhrefsBot, SemrushBot) qui respectent généralement les 
                  règles.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Que faire si je bloque accidentellement tout mon site ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Si vous avez accidentellement mis &quot;Disallow: /&quot;, corrigez immédiatement le fichier et utilisez 
                  Google Search Console pour soumettre un nouveau sitemap et demander une réindexation. La 
                  récupération complète peut prendre de quelques jours à quelques semaines selon la taille de 
                  votre site et votre fréquence de crawl habituelle.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Robots.txt protège-t-il mes données personnelles ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Absolument pas. Le fichier robots.txt est public et peut révéler la structure de votre site. 
                  Les hackers consultent souvent robots.txt pour découvrir des répertoires sensibles. N&apos;y listez 
                  jamais des URLs que vous voulez garder secrètes. Utilisez l&apos;authentification, HTTPS, et des 
                  permissions serveur appropriées pour la vraie sécurité.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Comment tester si mon robots.txt fonctionne ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Utilisez l&apos;outil gratuit de test robots.txt dans Google Search Console. Entrez une URL de 
                  votre site et l&apos;outil vous dira si elle est bloquée ou autorisée. Vous pouvez aussi tester 
                  différents User-agents. Bing Webmaster Tools offre un outil similaire.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Avantages de notre générateur robots.txt</h2>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>100% Gratuit</strong> - Aucun frais, aucune limitation, aucune inscription requise
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Interface intuitive</strong> - Créez votre fichier sans connaissances techniques
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Syntaxe validée</strong> - Génère un fichier conforme aux standards et sans erreurs
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Prévisualisation en temps réel</strong> - Voyez le fichier final avant téléchargement
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Templates prédéfinis</strong> - Configurations optimisées pour différents types de sites
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Copie en un clic</strong> - Copiez le contenu directement dans votre presse-papiers
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>SEO optimisé</strong> - Bonnes pratiques intégrées pour maximiser votre référencement
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Compatible tous CMS</strong> - WordPress, Shopify, Wix, sites personnalisés
                </span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
