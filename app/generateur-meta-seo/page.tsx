"use client";

import Link from "next/link";
import SEOMetaTagGenerator from "@/components/SEOMetaTagGenerator";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faCheck, faGlobe, faPalette } from '@fortawesome/free-solid-svg-icons';

export default function SEOMetaTagGeneratorPage() {
  return (
    <div className="min-h-screen flex flex-col p-4 sm:p-6 md:p-8">
      <header className="flex-shrink-0 mb-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-3">
          Générateur de Balises Meta SEO
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-400 text-sm sm:text-base max-w-3xl mx-auto">
          Créez facilement des balises meta pour optimiser votre référencement.
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
          <SEOMetaTagGenerator />
        </div>

        {/* SEO Content */}
        <section className="mt-8 space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Qu&apos;est-ce que les balises meta SEO ?</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Les balises meta sont des éléments HTML placés dans la section &lt;head&gt; d&apos;une page web qui 
              fournissent des informations structurées aux moteurs de recherche et aux réseaux sociaux. Bien 
              qu&apos;invisibles pour les visiteurs, ces balises sont cruciales pour le référencement (SEO) et 
              déterminent comment votre contenu apparaît dans les résultats de recherche et les partages sociaux.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Les principales balises incluent la meta description (résumé affiché sous le titre dans Google), 
              le titre (title tag), les balises Open Graph (pour Facebook, LinkedIn), Twitter Cards (pour Twitter/X), 
              et d&apos;autres métadonnées importantes comme les robots, canonical, viewport, etc.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Notre générateur vous aide à créer rapidement toutes les balises meta essentielles, optimisées 
              selon les meilleures pratiques SEO actuelles. Copiez-collez simplement le code généré dans le 
              &lt;head&gt; de vos pages HTML ou intégrez-le dans votre CMS (WordPress, Shopify, etc.).
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Comment utiliser le générateur de balises meta ?</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</span>
                <div>
                  <h3 className="font-semibold mb-1">Remplissez les informations de base</h3>
                  <p>Entrez le titre de votre page (50-60 caractères), une description claire et engageante (150-160 caractères), l&apos;URL complète de la page et les mots-clés pertinents.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">2</span>
                <div>
                  <h3 className="font-semibold mb-1">Ajoutez les informations Open Graph</h3>
                  <p>Pour optimiser le partage sur Facebook et LinkedIn, renseignez le titre, la description, le type de contenu (article, website, product) et l&apos;URL de l&apos;image de prévisualisation (1200x630px recommandé).</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">3</span>
                <div>
                  <h3 className="font-semibold mb-1">Configurez Twitter Cards</h3>
                  <p>Choisissez le type de carte Twitter (summary ou summary_large_image), ajoutez le titre, la description et l&apos;image spécifique pour Twitter/X.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">4</span>
                <div>
                  <h3 className="font-semibold mb-1">Copiez le code généré</h3>
                  <p>Le générateur produit automatiquement tout le code HTML optimisé. Copiez-le et insérez-le dans la section &lt;head&gt; de votre page HTML, ou utilisez les champs appropriés de votre CMS.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Balises meta essentielles expliquées</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="text-xl font-semibold mb-2">&lt;title&gt; - Titre de la page</h3>
                <p>
                  Le titre apparaît dans l&apos;onglet du navigateur et comme titre cliquable dans les résultats 
                  Google. Limité à 50-60 caractères pour éviter la troncature. Doit être unique pour chaque 
                  page, inclure le mot-clé principal, et être attractif pour inciter au clic.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">&lt;meta name=&quot;description&quot;&gt;</h3>
                <p>
                  La description s&apos;affiche sous le titre dans les résultats de recherche. Limitée à 150-160 
                  caractères. Doit résumer le contenu de la page, inclure les mots-clés secondaires, et donner 
                  envie de cliquer. Google l&apos;utilise souvent comme snippet.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Open Graph (og:)</h3>
                <p>
                  Protocole créé par Facebook pour contrôler l&apos;apparence des liens partagés sur les réseaux 
                  sociaux. Inclut og:title, og:description, og:image (1200x630px), og:url, og:type. LinkedIn, 
                  WhatsApp et autres plateformes l&apos;utilisent aussi.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Twitter Cards</h3>
                <p>
                  Format spécifique à Twitter/X pour les aperçus enrichis. &quot;summary&quot; affiche une petite image, 
                  &quot;summary_large_image&quot; une grande image. Indépendant des balises Open Graph mais souvent 
                  similaire. L&apos;image recommandée est 1200x628px.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">&lt;meta name=&quot;robots&quot;&gt;</h3>
                <p>
                  Indique aux moteurs de recherche comment indexer la page. &quot;index, follow&quot; = indexer et 
                  suivre les liens, &quot;noindex&quot; = ne pas indexer, &quot;nofollow&quot; = ne pas suivre les liens. 
                  Important pour gérer les pages privées ou en double.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">&lt;link rel=&quot;canonical&quot;&gt;</h3>
                <p>
                  Indique l&apos;URL canonique (version préférée) d&apos;une page pour éviter le contenu dupliqué. 
                  Crucial si la même page est accessible via plusieurs URLs (avec/sans www, paramètres, etc.). 
                  Aide Google à consolider le classement.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Cas d&apos;usage des balises meta</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faGlobe} className="inline" /> Sites web et blogs</h3>
                <p>
                  Optimisez chaque article de blog, page produit ou page de service pour les moteurs de recherche. 
                  Des balises meta bien rédigées augmentent le taux de clic depuis les résultats de recherche, 
                  générant plus de trafic organique qualifié vers votre site.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🛒 E-commerce</h3>
                <p>
                  Pour chaque fiche produit, créez des balises optimisées incluant le nom du produit, les 
                  caractéristiques clés et un appel à l&apos;action. Les images Open Graph améliorent significativement 
                  les partages sur les réseaux sociaux, augmentant la visibilité de vos produits.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">📰 Médias et actualités</h3>
                <p>
                  Les sites d&apos;actualités nécessitent des balises meta soigneusement rédigées pour maximiser les 
                  partages sociaux et les clics. Le bon titre et la bonne image peuvent faire la différence entre 
                  un article viral et un article ignoré.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faBriefcase} className="inline" /> Sites d&apos;entreprise</h3>
                <p>
                  Landing pages, pages de services, études de cas : chaque page B2B doit avoir des balises meta 
                  professionnelles qui communiquent clairement votre proposition de valeur et incitent à l&apos;action.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faPalette} className="inline" /> Portfolios créatifs</h3>
                <p>
                  Les designers, photographes et artistes peuvent optimiser chaque projet pour le partage social. 
                  Des images Open Graph attrayantes garantissent que votre travail s&apos;affiche magnifiquement 
                  sur Pinterest, Instagram, LinkedIn et autres plateformes.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Meilleures pratiques SEO</h2>
            <div className="space-y-3 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="font-semibold mb-1"><FontAwesomeIcon icon={faCheck} className="inline" /> Respectez les longueurs optimales</h3>
                <p className="text-sm">
                  Titre : 50-60 caractères (maximum 70). Meta description : 150-160 caractères (maximum 155). 
                  Au-delà, Google tronque avec &quot;...&quot;. Comptez les caractères, pas les mots. Incluez les 
                  mots-clés importants au début.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1"><FontAwesomeIcon icon={faCheck} className="inline" /> Rendez chaque titre et description unique</h3>
                <p className="text-sm">
                  Chaque page de votre site doit avoir un titre et une description uniques. Les duplicatas 
                  confondent les moteurs de recherche et diluent votre SEO. Personnalisez selon le contenu 
                  spécifique de chaque page.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1"><FontAwesomeIcon icon={faCheck} className="inline" /> Incluez vos mots-clés stratégiquement</h3>
                <p className="text-sm">
                  Placez le mot-clé principal dans le titre (idéalement au début) et la description. Mais 
                  restez naturel et lisible pour les humains. Le bourrage de mots-clés (keyword stuffing) 
                  est pénalisé par Google.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1"><FontAwesomeIcon icon={faCheck} className="inline" /> Utilisez des images optimisées</h3>
                <p className="text-sm">
                  Dimensions recommandées : 1200x630px pour Open Graph et Twitter. Format JPG ou PNG, taille 
                  &lt; 1MB. Incluez texte lisible si pertinent (mais pas trop). Testez avec les validateurs 
                  Facebook et Twitter avant publication.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1"><FontAwesomeIcon icon={faCheck} className="inline" /> Rédigez pour les humains, pas les robots</h3>
                <p className="text-sm">
                  Vos meta descriptions doivent donner envie de cliquer. Utilisez un appel à l&apos;action, 
                  créez de la curiosité, montrez la valeur. &quot;Découvrez comment...&quot;, &quot;Obtenez...&quot;, 
                  &quot;Téléchargez gratuitement...&quot; fonctionnent bien.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Questions fréquentes</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Les balises meta influencent-elles le classement Google ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  La meta description n&apos;est pas un facteur de classement direct, mais elle influence le taux 
                  de clic (CTR), qui lui est un facteur indirect. Le titre (&lt;title&gt;) est un facteur de 
                  classement important. Les mots-clés meta (keywords) sont ignorés par Google depuis 2009.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Google utilise-t-il toujours ma meta description ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Non, Google peut choisir d&apos;afficher un extrait de votre contenu plutôt que votre meta 
                  description s&apos;il le juge plus pertinent pour la requête. Écrivez quand même une bonne 
                  description car Google l&apos;utilise souvent, surtout pour les recherches générales.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Dois-je créer des balises pour chaque page de mon site ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Idéalement oui, chaque page indexable devrait avoir un titre et une description uniques et 
                  optimisés. Pour les grands sites, priorisez les pages importantes (accueil, landing pages, 
                  articles principaux). Les CMS modernes facilitent cette tâche avec des templates.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Où placer exactement ces balises dans mon code ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Toutes les balises meta doivent être placées dans la section &lt;head&gt; de votre HTML, 
                  après la déclaration &lt;!DOCTYPE&gt; et &lt;html&gt;, mais avant &lt;body&gt;. L&apos;ordre 
                  exact importe peu, mais conventionnellement le &lt;title&gt; vient en premier.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Comment tester l&apos;apparence de mes partages sociaux ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Facebook : developers.facebook.com/tools/debug/ | Twitter : cards-dev.twitter.com/validator | 
                  LinkedIn : linkedin.com/post-inspector/ | Ces outils affichent l&apos;aperçu et signalent les 
                  erreurs de balises. Testez avant de partager publiquement.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Puis-je avoir des balises différentes pour Google et les réseaux sociaux ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Oui, absolument ! C&apos;est même recommandé. Votre titre SEO peut être optimisé pour les 
                  moteurs de recherche, tandis que og:title peut être plus accrocheur pour les réseaux sociaux. 
                  Même principe pour les descriptions et images.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Les balises meta sont-elles compatibles avec tous les CMS ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Oui, les balises meta sont du HTML standard supporté par tous les CMS. WordPress : utilisez 
                  Yoast SEO ou Rank Math. Shopify : champs SEO intégrés. Wix/Squarespace : sections SEO dédiées. 
                  Pour HTML statique, collez directement dans &lt;head&gt;.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Avantages de notre générateur</h2>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Complet</strong> - Génère toutes les balises essentielles (SEO + réseaux sociaux)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Validation en temps réel</strong> - Vérifie les longueurs et signale les dépassements
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Code prêt à l&apos;emploi</strong> - Copier-coller directement dans votre site
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Bonnes pratiques intégrées</strong> - Suit les recommandations SEO actuelles
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>100% gratuit</strong> - Sans limitation ni inscription requise
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Interface intuitive</strong> - Simple même pour les débutants en SEO
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Gain de temps</strong> - Plus besoin de mémoriser la syntaxe HTML
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Confidentiel</strong> - Aucune donnée collectée ou stockée
                </span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
