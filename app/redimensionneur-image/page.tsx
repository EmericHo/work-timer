"use client";

import Link from "next/link";
import ImageResizer from "@/components/ImageResizer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faBullseye, faChartLine, faCheck, faEnvelope, faExclamationTriangle, faFileAlt, faFilm, faGlobe, faImage, faLightbulb, faMobileAlt, faPalette, faRocket, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export default function ImageResizerPage() {
  return (
    <div className="min-h-screen flex flex-col p-4 sm:p-6 md:p-8">
      <header className="flex-shrink-0 mb-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-3">
          Redimensionneur d&apos;Image en Ligne
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-400 text-sm sm:text-base max-w-3xl mx-auto">
          Redimensionnez vos images facilement et gratuitement.
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
          <ImageResizer />
        </div>

        {/* SEO Content */}
        <section className="mt-8 space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Pourquoi redimensionner vos images ?</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Le redimensionnement d&apos;images est une opération fondamentale dans la gestion de contenu web et 
              numérique. Les images haute résolution provenant des appareils photo modernes ou des smartphones 
              sont souvent beaucoup trop grandes pour une utilisation web optimale, avec des dimensions de 4000x3000 
              pixels ou plus et des tailles de fichier dépassant 5-10 Mo.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Ces images surdimensionnées créent plusieurs problèmes : temps de chargement excessifs sur les sites 
              web, consommation inutile de bande passante, espace de stockage gaspillé, et mauvaise expérience 
              utilisateur notamment sur mobile. Une image optimisée pour le web devrait rarement dépasser 1920 
              pixels de largeur et 200-500 Ko de taille de fichier.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Notre outil de redimensionnement d&apos;images en ligne vous permet de réduire rapidement et facilement 
              les dimensions de vos photos tout en maintenant une qualité visuelle excellente. Que vous prépariez 
              des images pour votre site web, vos réseaux sociaux, votre portfolio, ou simplement pour économiser 
              de l&apos;espace de stockage, notre redimensionneur traite vos images instantanément dans votre navigateur.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              <strong>Bonus :</strong> Contrairement aux logiciels lourds comme Photoshop qui nécessitent une 
              installation et un apprentissage, notre outil est immédiat, gratuit, et fonctionne sur n&apos;importe 
              quel appareil avec un navigateur web moderne. Vos images restent privées car tout le traitement 
              s&apos;effectue localement sur votre appareil.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Comment utiliser le redimensionneur d&apos;images ?</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</span>
                <div>
                  <h3 className="font-semibold mb-1">Téléchargez votre image</h3>
                  <p>Cliquez sur le bouton de téléchargement ou glissez-déposez votre image (JPG, PNG, WebP). 
                  L&apos;outil accepte les images jusqu&apos;à 50 Mo.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">2</span>
                <div>
                  <h3 className="font-semibold mb-1">Choisissez vos dimensions</h3>
                  <p>Entrez la largeur ou la hauteur souhaitée. L&apos;autre dimension s&apos;ajuste automatiquement 
                  pour conserver les proportions, ou désactivez le verrouillage pour un redimensionnement libre.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">3</span>
                <div>
                  <h3 className="font-semibold mb-1">Ajustez la qualité</h3>
                  <p>Sélectionnez le niveau de compression (0-100%). Plus le pourcentage est élevé, meilleure est 
                  la qualité mais plus le fichier est lourd. 80-85% offre un excellent compromis.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">4</span>
                <div>
                  <h3 className="font-semibold mb-1">Téléchargez le résultat</h3>
                  <p>Prévisualisez l&apos;image redimensionnée, puis téléchargez-la. Vous pouvez choisir le format 
                  de sortie (JPG, PNG, WebP) selon vos besoins.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Cas d&apos;usage du redimensionnement d&apos;images</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faGlobe} className="inline" /> Optimisation web et SEO</h3>
                <p>
                  Les images trop grandes sont la cause n°1 de sites web lents. Google pénalise les sites lents 
                  dans son classement. En redimensionnant vos images aux dimensions réellement affichées (par 
                  exemple 800x600 pour une image de blog), vous pouvez réduire la taille de fichier de 80-90%. 
                  Un site plus rapide = meilleur SEO + meilleure expérience utilisateur + plus de conversions.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faMobileAlt} className="inline" /> Réseaux sociaux</h3>
                <p>
                  Chaque plateforme sociale a ses dimensions optimales : Instagram (1080x1080 pour carré, 
                  1080x1350 pour portrait), Facebook (1200x630 pour partages), Twitter (1200x675), LinkedIn 
                  (1200x627). Redimensionner aux bonnes dimensions assure que vos visuels s&apos;affichent parfaitement 
                  sans être recadrés ou pixelisés.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faEnvelope} className="inline" /> Emails et newsletters</h3>
                <p>
                  Les clients email limitent souvent la taille des images. Des images trop grandes peuvent faire 
                  atterrir votre email dans les spams ou ne pas s&apos;afficher correctement. Redimensionnez à 
                  600-800 pixels de largeur maximum pour des emails qui se chargent rapidement sur tous les appareils.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faShoppingCart} className="inline" /> E-commerce</h3>
                <p>
                  Les boutiques en ligne nécessitent différentes tailles d&apos;images : miniatures (200x200), images 
                  produits moyennes (800x800), zoom haute résolution (1500x1500). Optimiser chaque taille améliore 
                  considérablement les performances du site et réduit les coûts d&apos;hébergement et de CDN.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faBriefcase} className="inline" /> Documents professionnels</h3>
                <p>
                  Intégrer des images haute résolution dans des présentations PowerPoint, des PDFs ou des documents 
                  Word peut créer des fichiers de plusieurs centaines de Mo impossibles à envoyer par email. 
                  Redimensionnez d&apos;abord vos images pour des documents légers et partageables.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">📸 Portfolio et galeries</h3>
                <p>
                  Les portfolios de photographes ou artistes nécessitent un équilibre délicat entre qualité visuelle 
                  et performance. Créez différentes versions : miniatures pour la navigation (400x300), taille 
                  moyenne pour l&apos;affichage lightbox (1200x900), originaux pour le téléchargement client.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">💾 Économie d&apos;espace de stockage</h3>
                <p>
                  Les bibliothèques photo peuvent rapidement occuper des dizaines ou centaines de Go. Si vous 
                  n&apos;avez pas besoin de qualité d&apos;impression professionnelle, redimensionner vos archives à 
                  2000-2500 pixels conserve une excellente qualité d&apos;affichage tout en réduisant l&apos;espace de 
                  70-80%.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faMobileAlt} className="inline" /> Applications mobiles</h3>
                <p>
                  Les apps mobiles doivent être légères. Des images trop grandes augmentent la taille de l&apos;APK/IPA, 
                  le temps de téléchargement depuis le store, et la consommation de mémoire. Utilisez des images 
                  adaptées à chaque densité d&apos;écran (1x, 2x, 3x).
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Dimensions recommandées par usage</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold text-lg mb-1"><FontAwesomeIcon icon={faGlobe} className="inline" /> Bannières de site web</h3>
                <p className="text-sm">
                  Full width : 1920x600 à 1920x1080 px • Header : 1200x400 px • Slider : 1200x600 px
                </p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-semibold text-lg mb-1"><FontAwesomeIcon icon={faFileAlt} className="inline" /> Images de blog</h3>
                <p className="text-sm">
                  Featured image : 1200x630 px • In-article : 800x600 px • Thumbnail : 400x300 px
                </p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="font-semibold text-lg mb-1">📷 Instagram</h3>
                <p className="text-sm">
                  Carré : 1080x1080 px • Portrait : 1080x1350 px • Paysage : 1080x566 px • Stories : 1080x1920 px
                </p>
              </div>
              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="font-semibold text-lg mb-1">👔 Facebook</h3>
                <p className="text-sm">
                  Post photo : 1200x630 px • Couverture : 820x312 px • Story : 1080x1920 px • Événement : 1920x1005 px
                </p>
              </div>
              <div className="border-l-4 border-red-500 pl-4">
                <h3 className="font-semibold text-lg mb-1">🐦 Twitter/X</h3>
                <p className="text-sm">
                  Post : 1200x675 px • Header : 1500x500 px • Profile : 400x400 px
                </p>
              </div>
              <div className="border-l-4 border-yellow-500 pl-4">
                <h3 className="font-semibold text-lg mb-1"><FontAwesomeIcon icon={faBriefcase} className="inline" /> LinkedIn</h3>
                <p className="text-sm">
                  Post : 1200x627 px • Couverture personnelle : 1584x396 px • Couverture entreprise : 1128x191 px
                </p>
              </div>
              <div className="border-l-4 border-pink-500 pl-4">
                <h3 className="font-semibold text-lg mb-1">📺 YouTube</h3>
                <p className="text-sm">
                  Miniature : 1280x720 px • Bannière : 2560x1440 px • Logo : 800x800 px
                </p>
              </div>
              <div className="border-l-4 border-indigo-500 pl-4">
                <h3 className="font-semibold text-lg mb-1">🛒 E-commerce</h3>
                <p className="text-sm">
                  Produit principal : 1000x1000 à 1500x1500 px • Galerie : 800x800 px • Miniature : 200x200 px
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Comprendre les formats d&apos;image</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faImage} className="inline" /> JPEG / JPG</h3>
                <p className="mb-2">
                  <strong>Meilleur pour :</strong> Photos, images avec beaucoup de couleurs et dégradés
                </p>
                <p className="text-sm">
                  Le format JPEG utilise une compression avec perte qui réduit considérablement la taille de 
                  fichier tout en maintenant une qualité visuelle acceptable. Idéal pour les photos de produits, 
                  images de blog, galleries photo. Ne supporte pas la transparence. Qualité recommandée : 80-85%.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faPalette} className="inline" /> PNG</h3>
                <p className="mb-2">
                  <strong>Meilleur pour :</strong> Logos, icônes, graphiques avec transparence
                </p>
                <p className="text-sm">
                  PNG utilise une compression sans perte et supporte la transparence (canal alpha). Parfait pour 
                  les logos, icônes, screenshots, graphiques avec texte ou lignes nettes. Fichiers plus lourds 
                  que JPEG. PNG-8 pour images simples (256 couleurs), PNG-24 pour images complexes avec transparence.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faRocket} className="inline" /> WebP</h3>
                <p className="mb-2">
                  <strong>Meilleur pour :</strong> Usage web moderne, tous types d&apos;images
                </p>
                <p className="text-sm">
                  Format moderne de Google offrant une compression supérieure (25-35% plus petit que JPEG/PNG) 
                  avec qualité comparable. Supporte la transparence et l&apos;animation. Supporté par tous les 
                  navigateurs modernes (Chrome, Firefox, Edge, Safari 14+). Idéal pour optimiser les performances web.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faFilm} className="inline" /> GIF</h3>
                <p className="mb-2">
                  <strong>Meilleur pour :</strong> Animations simples, images très basiques
                </p>
                <p className="text-sm">
                  Format ancien limité à 256 couleurs. Utilisé principalement pour les animations courtes et 
                  memes. Pour les photos, préférez JPEG. Pour les logos, préférez PNG. Pour les animations 
                  complexes, préférez les vidéos MP4.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faBullseye} className="inline" /> Quel format choisir ?</h3>
                <ul className="list-disc list-inside space-y-2 text-sm ml-4">
                  <li><strong>Photos réalistes</strong> → JPEG (80-85% qualité) ou WebP</li>
                  <li><strong>Logos/icônes avec transparence</strong> → PNG ou WebP</li>
                  <li><strong>Screenshots de logiciels</strong> → PNG</li>
                  <li><strong>Optimisation web maximale</strong> → WebP avec fallback JPEG/PNG</li>
                  <li><strong>Impression professionnelle</strong> → PNG ou TIFF non compressé</li>
                  <li><strong>Animation</strong> → GIF (simple) ou MP4/WebM (complexe)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Bonnes pratiques de redimensionnement</h2>
            <div className="space-y-3 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="font-semibold mb-1"><FontAwesomeIcon icon={faCheck} className="inline" /> Conservez les proportions (aspect ratio)</h3>
                <p className="text-sm">
                  Sauf besoin spécifique, gardez toujours le ratio largeur/hauteur original pour éviter la 
                  déformation. Une photo 4:3 redimensionnée en 16:9 semblera étirée et peu professionnelle.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1"><FontAwesomeIcon icon={faCheck} className="inline" /> Ne jamais agrandir une image</h3>
                <p className="text-sm">
                  Agrandir une petite image la rend floue et pixelisée. Vous ne pouvez pas créer de détails qui 
                  n&apos;existent pas. Toujours partir d&apos;une image haute résolution et réduire. Si vous devez 
                  agrandir, utilisez des outils d&apos;upscaling IA spécialisés.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1"><FontAwesomeIcon icon={faCheck} className="inline" /> Gardez l&apos;original en haute résolution</h3>
                <p className="text-sm">
                  Conservez toujours une copie de l&apos;image originale non modifiée. Travaillez sur des copies pour 
                  le redimensionnement. Vous pourriez avoir besoin de l&apos;original pour d&apos;autres formats ou 
                  l&apos;impression.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1"><FontAwesomeIcon icon={faCheck} className="inline" /> Optimisez pour le contexte d&apos;utilisation</h3>
                <p className="text-sm">
                  Une image de fond de site peut être à 70% de qualité, personne ne remarquera. Une photo de 
                  produit e-commerce devrait être à 85-90%. Les portraits professionnels méritent 90-95%. 
                  Adaptez la qualité au contexte.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1"><FontAwesomeIcon icon={faCheck} className="inline" /> Utilisez un bon algorithme de redimensionnement</h3>
                <p className="text-sm">
                  Les algorithmes bicubique et Lanczos produisent les meilleurs résultats lors de la réduction. 
                  Évitez le &quot;nearest neighbor&quot; qui crée des images pixelisées. Notre outil utilise 
                  automatiquement les meilleurs algorithmes.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1"><FontAwesomeIcon icon={faCheck} className="inline" /> Testez sur différents appareils</h3>
                <p className="text-sm">
                  Vérifiez le rendu de vos images redimensionnées sur desktop, tablette et mobile. Ce qui semble 
                  parfait sur un grand écran peut être trop détaillé (ou pas assez) sur un smartphone.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1"><FontAwesomeIcon icon={faCheck} className="inline" /> Ajoutez du responsive design</h3>
                <p className="text-sm">
                  Utilisez les attributs srcset et sizes en HTML pour servir différentes tailles d&apos;images selon 
                  l&apos;appareil. Créez 3-4 versions de chaque image (mobile, tablette, desktop, retina) pour une 
                  expérience optimale.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1"><FontAwesomeIcon icon={faCheck} className="inline" /> Nommez vos fichiers de manière descriptive</h3>
                <p className="text-sm">
                  Utilisez des noms comme &quot;produit-chaussure-rouge-800x600.jpg&quot; plutôt que &quot;IMG_2024.jpg&quot;. 
                  Cela aide le SEO et facilite l&apos;organisation de votre bibliothèque média.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1"><FontAwesomeIcon icon={faExclamationTriangle} className="inline" /> Attention au sur-compression</h3>
                <p className="text-sm">
                  Une qualité JPEG inférieure à 60% commence à montrer des artefacts visibles (blocs, halos). 
                  Trouvez le sweet spot entre taille de fichier et qualité visuelle. Généralement 75-85% est optimal.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Impact sur les performances web</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faChartLine} className="inline" /> Les chiffres qui comptent</h3>
                <ul className="list-disc list-inside space-y-2 text-sm ml-4">
                  <li>Les images représentent en moyenne <strong>50-60% du poids total</strong> d&apos;une page web</li>
                  <li>Une réduction de 1 seconde du temps de chargement peut améliorer les conversions de <strong>7%</strong></li>
                  <li><strong>53% des visiteurs mobiles</strong> abandonnent si le chargement dépasse 3 secondes</li>
                  <li>Amazon a calculé que <strong>100ms de latence</strong> leur coûte 1% de ventes</li>
                  <li>Google pénalise les sites lents dans son algorithme de classement depuis 2010</li>
                  <li>Les sites dans le top 3 de Google chargent en moyenne en <strong>1.65 secondes</strong></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faBullseye} className="inline" /> Core Web Vitals de Google</h3>
                <p className="mb-2">
                  Google utilise trois métriques clés pour évaluer l&apos;expérience utilisateur (devenues facteur 
                  de classement en 2021) :
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm ml-4">
                  <li><strong>LCP (Largest Contentful Paint)</strong> : Le temps de chargement de l&apos;élément le 
                  plus grand visible (souvent une image). Objectif : &lt; 2.5s. Des images optimisées améliorent 
                  directement cette métrique.</li>
                  <li><strong>FID (First Input Delay)</strong> : Réactivité du site. Des images lourdes qui bloquent 
                  le thread principal dégradent cette métrique.</li>
                  <li><strong>CLS (Cumulative Layout Shift)</strong> : Stabilité visuelle. Spécifier les dimensions 
                  des images redimensionnées prévient les décalages de mise en page.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faLightbulb} className="inline" /> Exemple concret</h3>
                <div className="bg-gray-100 dark:bg-gray-900 p-4 rounded text-sm">
                  <p className="mb-2"><strong>Scénario :</strong> Blog avec 10 images par article</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Image originale : 4000x3000px, 8 Mo chacune = <strong>80 Mo total</strong></li>
                    <li>Image redimensionnée : 800x600px, 150 Ko chacune = <strong>1.5 Mo total</strong></li>
                    <li><strong>Économie : 98%</strong> de la bande passante !</li>
                    <li>Temps de chargement : de 40 secondes (3G) à moins de 1 seconde</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Questions fréquentes</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Le redimensionnement réduit-il la qualité de l&apos;image ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Réduire une image diminue techniquement la &quot;résolution&quot; mais pas nécessairement la qualité 
                  perçue. Si vous redimensionnez de 4000x3000 à 1200x900 avec un bon algorithme, l&apos;image restera 
                  nette et belle pour l&apos;affichage web. La perte de qualité n&apos;est visible que si vous comprimez 
                  trop (qualité JPEG &lt; 60%) ou si vous agrandissez une image.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Quelle est la différence entre redimensionnement et compression ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Le <strong>redimensionnement</strong> change les dimensions physiques (pixels) de l&apos;image. 
                  La <strong>compression</strong> réduit la taille du fichier en supprimant des données (JPEG) 
                  ou en les encodant plus efficacement (PNG). Les deux techniques sont complémentaires : 
                  redimensionnez d&apos;abord aux bonnes dimensions, puis compressez pour optimiser la taille du fichier.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Mes images sont-elles sécurisées avec votre outil ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Oui, totalement. Notre outil fonctionne entièrement dans votre navigateur grâce à JavaScript et 
                  l&apos;API Canvas. Vos images ne sont jamais téléchargées sur nos serveurs. Elles restent sur votre 
                  appareil, sont traitées localement, puis vous les téléchargez directement. Nous ne collectons ni 
                  ne stockons aucune de vos images.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Puis-je redimensionner plusieurs images à la fois ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Actuellement, notre outil traite une image à la fois pour garantir la rapidité et la qualité. 
                  Pour le traitement en lot de nombreuses images, nous recommandons d&apos;utiliser des outils de bureau 
                  comme ImageMagick, Adobe Lightroom, ou des scripts automatisés. Pour quelques images, notre outil 
                  en ligne est le plus rapide et pratique.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Quelle taille maximale d&apos;image est supportée ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Notre outil peut traiter des images jusqu&apos;à 50 Mo et jusqu&apos;à 8000x8000 pixels. Cela couvre 
                  largement les photos de tous les smartphones et appareils photo grand public. Pour des images 
                  encore plus grandes (photos professionnelles RAW de 100+ Mo), utilisez un logiciel de bureau 
                  avec plus de mémoire disponible.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Dois-je redimensionner les images pour l&apos;impression ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Pour l&apos;impression, la règle est différente du web. Vous avez besoin de 300 DPI (dots per inch). 
                  Pour une impression 10x15 cm, calculez : 10cm × 300 DPI ÷ 2.54 = 1181 pixels de largeur. Ne 
                  redimensionnez pas trop petit ou l&apos;impression sera floue. Pour le web, 72 DPI suffit, donc 
                  des images beaucoup plus petites conviennent.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  WebP est-il compatible avec tous les navigateurs ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  WebP est maintenant supporté par tous les navigateurs modernes : Chrome (depuis toujours), 
                  Firefox (depuis 2019), Edge (depuis 2020), et Safari (depuis septembre 2020 avec iOS 14 et 
                  macOS Big Sur). Le support global est maintenant supérieur à 95%. Pour les 5% restants (vieux 
                  navigateurs), utilisez une balise &lt;picture&gt; avec fallback JPEG/PNG.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Comment automatiser le redimensionnement pour mon site ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Pour automatiser, plusieurs solutions : 1) Utilisez un CMS moderne (WordPress avec plugin Smush, 
                  Shopify) qui redimensionne automatiquement. 2) Intégrez un service CDN avec transformation 
                  d&apos;images (Cloudinary, Imgix). 3) Utilisez un script côté serveur (ImageMagick, Sharp pour Node.js). 
                  4) Mettez en place un workflow de build qui optimise au déploiement.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Avantages de notre redimensionneur d&apos;images</h2>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>100% Gratuit et sans limite</strong> - Redimensionnez autant d&apos;images que vous voulez
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Traitement instantané</strong> - Résultats en quelques secondes même pour grandes images
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Confidentialité totale</strong> - Vos images ne quittent jamais votre appareil
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Qualité professionnelle</strong> - Algorithmes de redimensionnement haut de gamme
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Formats multiples</strong> - Support JPEG, PNG, WebP en entrée et sortie
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Prévisualisation en direct</strong> - Voyez le résultat avant de télécharger
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Aucune installation</strong> - Fonctionne directement dans votre navigateur
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Compatible tous appareils</strong> - Desktop, tablette, smartphone
                </span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
