"use client";

import Link from "next/link";
import QRCodeGenerator from "@/components/QRCodeGenerator";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBox, faBriefcase, faBuilding, faCheck, faExclamationTriangle, faLock, faMobileAlt, faShieldAlt, faTicketAlt, faUtensils } from '@fortawesome/free-solid-svg-icons';

export default function QRCodeGeneratorPage() {
  return (
    <div className="min-h-screen flex flex-col p-4 sm:p-6 md:p-8">
      <header className="flex-shrink-0 mb-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-3">
          Générateur de QR Code Gratuit en Ligne
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-400 text-sm sm:text-base max-w-3xl mx-auto">
          Créez des QR codes personnalisés instantanément. Gratuit, sans inscription, 
          avec options de couleur et téléchargement en PNG ou SVG.
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
          <QRCodeGenerator />
        </div>

        {/* SEO Content */}
        <section className="mt-8 space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Qu&apos;est-ce qu&apos;un QR Code ?</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Un QR code (Quick Response Code) est un code-barres bidimensionnel qui peut être scanné 
              rapidement avec un smartphone ou une tablette. Inventé en 1994 par Denso Wave au Japon, 
              le QR code est devenu un outil incontournable pour partager des informations de manière 
              instantanée et sans contact.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Contrairement aux codes-barres traditionnels qui ne stockent que quelques dizaines de 
              caractères, un QR code peut contenir jusqu&apos;à 4 296 caractères alphanumériques, permettant 
              de stocker des URLs complètes, du texte, des informations de contact (vCard), des 
              identifiants WiFi, des coordonnées GPS et bien plus encore.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Notre générateur de QR code en ligne vous permet de créer gratuitement des QR codes 
              personnalisés pour tous vos besoins professionnels et personnels. L&apos;outil fonctionne 
              entièrement dans votre navigateur, garantissant la confidentialité de vos données.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Comment utiliser le générateur de QR Code ?</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</span>
                <div>
                  <h3 className="font-semibold mb-1">Entrez votre contenu</h3>
                  <p>Saisissez l&apos;URL, le texte, l&apos;email ou tout autre contenu que vous souhaitez encoder dans le QR code.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">2</span>
                <div>
                  <h3 className="font-semibold mb-1">Personnalisez l&apos;apparence</h3>
                  <p>Choisissez la taille, le niveau de correction d&apos;erreur et les couleurs de votre QR code pour qu&apos;il corresponde à votre charte graphique.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">3</span>
                <div>
                  <h3 className="font-semibold mb-1">Prévisualisez et téléchargez</h3>
                  <p>Visualisez votre QR code en temps réel et téléchargez-le au format PNG pour le web ou SVG pour l&apos;impression haute qualité.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Cas d&apos;usage des QR Codes</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faBriefcase} className="inline" /> Cartes de visite professionnelles</h3>
                <p>
                  Ajoutez un QR code sur vos cartes de visite pour permettre à vos contacts de sauvegarder 
                  instantanément vos coordonnées (vCard) dans leur téléphone. Plus besoin de ressaisir 
                  manuellement nom, email, téléphone et adresse.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faUtensils} className="inline" /> Menus de restaurant</h3>
                <p>
                  Les QR codes sur les tables permettent aux clients de consulter le menu sur leur smartphone 
                  sans contact physique. Idéal pour les restaurants, cafés, bars et food trucks. Mise à jour 
                  du menu instantanée sans réimpression.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faMobileAlt} className="inline" /> Marketing et publicité</h3>
                <p>
                  Intégrez des QR codes dans vos affiches, flyers, emballages produits ou publicités pour 
                  rediriger vers votre site web, une page promo, une vidéo YouTube ou vos réseaux sociaux. 
                  Mesurez l&apos;efficacité de vos campagnes en trackant les scans.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">📶 Partage de WiFi</h3>
                <p>
                  Créez un QR code WiFi pour permettre à vos invités ou clients de se connecter automatiquement 
                  à votre réseau sans avoir à saisir le mot de passe. Format: WIFI:T:WPA;S:NomRéseau;P:MotDePasse;;
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">💳 Paiements mobiles</h3>
                <p>
                  Les QR codes facilitent les paiements sans contact via des applications comme PayPal, Venmo, 
                  ou les systèmes de paiement intégrés. Parfait pour les commerces, les marchés et les événements.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faTicketAlt} className="inline" /> Billetterie et événements</h3>
                <p>
                  Générez des QR codes uniques pour les billets d&apos;événements, concerts, conférences ou 
                  cinémas. Scan rapide à l&apos;entrée pour validation et contrôle d&apos;accès sécurisé.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faBox} className="inline" /> Suivi logistique</h3>
                <p>
                  Utilisez les QR codes pour le suivi des colis, la gestion d&apos;inventaire, l&apos;identification 
                  de produits et la traçabilité. Scan rapide pour accéder aux informations détaillées.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faBuilding} className="inline" /> Immobilier</h3>
                <p>
                  Placez des QR codes sur les panneaux &quot;À vendre&quot; ou &quot;À louer&quot; pour permettre aux 
                  visiteurs d&apos;accéder instantanément aux détails du bien, photos, visite virtuelle et formulaire 
                  de contact.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Bonnes pratiques pour créer des QR Codes efficaces</h2>
            <div className="space-y-3 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="font-semibold mb-1"><FontAwesomeIcon icon={faCheck} className="inline" /> Assurez un contraste suffisant</h3>
                <p className="text-sm">
                  La couleur principale (généralement noire) doit fortement contraster avec le fond (généralement 
                  blanc). Un mauvais contraste peut empêcher la lecture du QR code par certains lecteurs.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1"><FontAwesomeIcon icon={faCheck} className="inline" /> Choisissez la bonne taille</h3>
                <p className="text-sm">
                  Pour l&apos;impression, utilisez au minimum 2x2 cm pour un scan à 10-20 cm de distance. Plus la 
                  distance de scan est grande, plus le QR code doit être grand. Règle générale : taille = 
                  distance de scan ÷ 10.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1"><FontAwesomeIcon icon={faCheck} className="inline" /> Ajustez le niveau de correction d&apos;erreur</h3>
                <p className="text-sm">
                  Le niveau de correction d&apos;erreur détermine combien le QR code peut être endommagé tout en 
                  restant lisible. Niveau Bas (7%) pour QR codes simples, Élevé (25-30%) si le code peut être 
                  partiellement masqué ou si vous ajoutez un logo au centre.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1"><FontAwesomeIcon icon={faCheck} className="inline" /> Laissez une marge blanche (zone silencieuse)</h3>
                <p className="text-sm">
                  Prévoyez au moins 4 modules de marge blanche autour du QR code. Cette zone vierge aide les 
                  lecteurs à identifier clairement les limites du code.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1"><FontAwesomeIcon icon={faCheck} className="inline" /> Testez avant impression</h3>
                <p className="text-sm">
                  Testez toujours votre QR code avec plusieurs applications de lecture (iOS Camera, Google Lens, 
                  apps tierces) sur différents appareils avant l&apos;impression en masse.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1"><FontAwesomeIcon icon={faCheck} className="inline" /> Utilisez des URLs courtes</h3>
                <p className="text-sm">
                  Plus le contenu est court, plus le QR code sera simple et facile à scanner. Utilisez un 
                  raccourcisseur d&apos;URL (bit.ly, tinyurl.com) pour les longues URLs.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1"><FontAwesomeIcon icon={faCheck} className="inline" /> Privilégiez le format SVG pour l&apos;impression</h3>
                <p className="text-sm">
                  Le format SVG est vectoriel et peut être agrandi à l&apos;infini sans perte de qualité. Idéal 
                  pour l&apos;impression professionnelle, affiches grand format et signalétique.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1"><FontAwesomeIcon icon={faCheck} className="inline" /> Ajoutez un appel à l&apos;action</h3>
                <p className="text-sm">
                  Indiquez clairement ce que l&apos;utilisateur obtiendra en scannant : &quot;Scannez pour voir le 
                  menu&quot;, &quot;Scannez pour vous connecter au WiFi&quot;, &quot;Scannez pour plus d&apos;infos&quot;.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Niveaux de correction d&apos;erreur expliqués</h2>
            <div className="space-y-3 text-gray-700 dark:text-gray-300">
              <div className="border-l-4 border-yellow-500 pl-4">
                <h3 className="font-semibold">Niveau L (Low) - ~7%</h3>
                <p className="text-sm">
                  Peut récupérer jusqu&apos;à 7% du code endommagé. Utilisez pour les QR codes simples, 
                  affichés uniquement sur écran, où le risque de dégradation est minimal.
                </p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold">Niveau M (Medium) - ~15%</h3>
                <p className="text-sm">
                  Peut récupérer jusqu&apos;à 15% du code endommagé. Bon compromis pour la plupart des usages 
                  standard (impression sur papier de qualité, affichage numérique).
                </p>
              </div>
              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="font-semibold">Niveau Q (Quartile) - ~25%</h3>
                <p className="text-sm">
                  Peut récupérer jusqu&apos;à 25% du code endommagé. Recommandé pour les environnements où 
                  le QR code peut être partiellement masqué ou sali.
                </p>
              </div>
              <div className="border-l-4 border-red-500 pl-4">
                <h3 className="font-semibold">Niveau H (High) - ~30%</h3>
                <p className="text-sm">
                  Peut récupérer jusqu&apos;à 30% du code endommagé. Idéal pour les QR codes avec logo central, 
                  imprimés sur des supports rugueux, ou exposés aux intempéries.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Questions fréquentes sur les QR Codes</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Les QR codes générés sont-ils gratuits à utiliser ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Oui, tous les QR codes générés sur notre plateforme sont 100% gratuits et libres d&apos;utilisation 
                  commerciale. Il n&apos;y a pas de limite sur le nombre de QR codes que vous pouvez créer, ni de 
                  filigrane ou de logo ajouté.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Quelle est la différence entre PNG et SVG ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  PNG est un format d&apos;image matricielle (pixels) idéal pour le web et les réseaux sociaux. 
                  SVG est un format vectoriel qui peut être agrandi infiniment sans perte de qualité, parfait 
                  pour l&apos;impression professionnelle, les affiches et la signalétique.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Puis-je personnaliser les couleurs du QR code ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Oui, vous pouvez choisir n&apos;importe quelle couleur pour le premier plan et l&apos;arrière-plan. 
                  Assurez-vous simplement qu&apos;il y a un contraste suffisant entre les deux pour que le QR code 
                  reste lisible. Évitez les couleurs claires sur fond clair.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Les QR codes expirent-ils ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Non, les QR codes statiques (comme ceux générés par notre outil) n&apos;expirent jamais. Tant que 
                  le contenu encodé (URL, texte, etc.) reste valide, le QR code fonctionnera indéfiniment. 
                  Cependant, si vous changez l&apos;URL de destination, vous devrez générer un nouveau QR code.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Comment scanner un QR code ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Sur iPhone (iOS 11+), ouvrez simplement l&apos;app Appareil photo et pointez vers le QR code. 
                  Sur Android, utilisez Google Lens ou l&apos;app appareil photo native (selon le fabricant). La 
                  plupart des smartphones modernes peuvent scanner les QR codes nativement sans application tierce.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Puis-je suivre les statistiques de scan de mon QR code ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Les QR codes statiques générés ne permettent pas de tracking natif. Pour suivre les scans, 
                  utilisez un raccourcisseur d&apos;URL avec statistiques (bit.ly, tinyurl.com) ou des services 
                  de QR codes dynamiques spécialisés qui offrent des analytics détaillés.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Quelle taille minimale pour un QR code imprimé ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  La taille minimale recommandée est de 2x2 cm (environ 0.8x0.8 pouces) pour un scan à courte 
                  distance. Pour des distances plus importantes, utilisez la règle : taille QR code = distance 
                  de scan ÷ 10. Par exemple, pour un scan à 1 mètre, le QR code devrait faire 10 cm.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Puis-je ajouter un logo au centre du QR code ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Oui, grâce à la correction d&apos;erreur, vous pouvez masquer jusqu&apos;à 30% du QR code (niveau H) 
                  avec un logo. Assurez-vous que le logo ne couvre pas plus de 20-25% de la surface totale et 
                  testez toujours le scan avant utilisation.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Sécurité et confidentialité</h2>
            <div className="space-y-3 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <span className="text-green-600"><FontAwesomeIcon icon={faLock} className="inline" /></span>
                  Génération côté client
                </h3>
                <p className="text-sm">
                  Tous les QR codes sont générés entièrement dans votre navigateur en JavaScript. Aucune donnée 
                  n&apos;est envoyée à nos serveurs. Vos informations restent 100% privées et confidentielles.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <span className="text-green-600"><FontAwesomeIcon icon={faShieldAlt} className="inline" /></span>
                  Aucun stockage de données
                </h3>
                <p className="text-sm">
                  Nous ne stockons ni ne collectons aucune information sur le contenu de vos QR codes. Dès que 
                  vous fermez la page, toutes les données sont effacées de la mémoire de votre navigateur.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <span className="text-green-600"><FontAwesomeIcon icon={faExclamationTriangle} className="inline" /></span>
                  Attention aux QR codes suspects
                </h3>
                <p className="text-sm">
                  Soyez prudent lorsque vous scannez des QR codes inconnus dans des lieux publics. Un QR code 
                  malveillant peut rediriger vers un site de phishing ou déclencher un téléchargement non désiré. 
                  Vérifiez toujours l&apos;URL avant de valider.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  Open source et transparent
                </h3>
                <p className="text-sm">
                  Notre générateur utilise la bibliothèque open source &quot;qrcode&quot; maintenue par la communauté. 
                  Le code est auditable et ne contient aucune fonction cachée ou de tracking.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Avantages de notre générateur de QR Code</h2>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>100% Gratuit et illimité</strong> - Générez autant de QR codes que nécessaire sans frais
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Personnalisation complète</strong> - Taille, couleurs, niveau de correction d&apos;erreur
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Formats multiples</strong> - Téléchargez en PNG (web) ou SVG (impression haute qualité)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Aperçu en temps réel</strong> - Visualisez instantanément les modifications
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Confidentialité garantie</strong> - Génération côté client, aucune donnée collectée
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Aucune inscription requise</strong> - Utilisez l&apos;outil immédiatement sans compte
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>QR codes permanents</strong> - Vos QR codes n&apos;expirent jamais
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Compatible tous smartphones</strong> - Fonctionne avec iOS, Android et tous les lecteurs
                </span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
