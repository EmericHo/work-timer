"use client";

import Link from "next/link";
import BarcodeGenerator from "@/components/BarcodeGenerator";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faBox, faCheck, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export default function BarcodeGeneratorPage() {
  return (
    <div className="min-h-screen flex flex-col p-4 sm:p-6 md:p-8">
      <header className="flex-shrink-0 mb-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-3">
          Générateur de Code-Barres en Ligne
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-400 text-sm sm:text-base max-w-3xl mx-auto">
          Générez des codes-barres pour vos produits et applications.
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
          <BarcodeGenerator />
        </div>

        {/* SEO Content */}
        <section className="mt-8 space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Qu&apos;est-ce qu&apos;un code-barres ?</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Un code-barres est une représentation visuelle de données sous forme de barres parallèles 
              d&apos;épaisseurs et d&apos;espacements variables, lisibles par des scanners optiques. Inventé dans les 
              années 1970, le code-barres a révolutionné la gestion des stocks, la distribution et le commerce 
              de détail en permettant l&apos;identification rapide et automatique des produits.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Il existe plusieurs formats de codes-barres adaptés à différents usages : EAN-13 (produits de 
              grande consommation en Europe), UPC (États-Unis), Code 128 (logistique et transport), Code 39 
              (industrie et militaire), et bien d&apos;autres. Chaque format a ses spécificités en termes de 
              capacité de stockage et d&apos;applications.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Notre générateur vous permet de créer facilement des codes-barres dans différents formats, 
              téléchargeables en haute résolution pour l&apos;impression ou l&apos;intégration numérique. Gratuit, 
              sans inscription, et entièrement fonctionnel dans votre navigateur.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Comment utiliser le générateur de code-barres ?</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</span>
                <div>
                  <h3 className="font-semibold mb-1">Choisissez le format de code-barres</h3>
                  <p>Sélectionnez le type de code-barres adapté à votre usage : EAN-13 pour la vente au détail, Code 128 pour la logistique, Code 39 pour l&apos;industrie, ou d&apos;autres formats selon vos besoins.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">2</span>
                <div>
                  <h3 className="font-semibold mb-1">Entrez les données à encoder</h3>
                  <p>Saisissez le numéro ou texte à encoder. Pour les formats numériques (EAN, UPC), entrez uniquement des chiffres. Pour les formats alphanumériques (Code 128, Code 39), vous pouvez inclure lettres et symboles.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">3</span>
                <div>
                  <h3 className="font-semibold mb-1">Personnalisez l&apos;apparence</h3>
                  <p>Ajustez la taille, la hauteur, l&apos;épaisseur des barres, et choisissez d&apos;afficher ou non le texte sous le code-barres. Prévisualisez en temps réel vos modifications.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">4</span>
                <div>
                  <h3 className="font-semibold mb-1">Téléchargez votre code-barres</h3>
                  <p>Exportez au format PNG ou SVG selon votre usage. PNG pour l&apos;utilisation web et digitale, SVG pour l&apos;impression professionnelle sans perte de qualité.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Types de codes-barres disponibles</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="text-xl font-semibold mb-2">🛒 EAN-13 / EAN-8</h3>
                <p>
                  Le format standard européen pour les produits de grande consommation. EAN-13 contient 13 
                  chiffres (code pays + entreprise + produit + clé de contrôle). Obligatoire pour vendre en 
                  supermarché. EAN-8 est la version courte pour petits produits.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🇺🇸 UPC-A / UPC-E</h3>
                <p>
                  Équivalent américain de l&apos;EAN, avec 12 chiffres. Utilisé principalement en Amérique du 
                  Nord. UPC-A est le format standard, UPC-E la version compressée pour petites surfaces 
                  d&apos;impression.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faBox} className="inline" /> Code 128</h3>
                <p>
                  Format compact et polyvalent, capable d&apos;encoder tout le jeu ASCII (lettres, chiffres, 
                  symboles). Très utilisé en logistique, transport, expédition et gestion d&apos;inventaire. 
                  Haute densité d&apos;information.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🏭 Code 39</h3>
                <p>
                  Format alphanume largement utilisé dans l&apos;industrie, automobile, défense et santé. 
                  Encode lettres majuscules, chiffres et quelques symboles. Robuste et facile à imprimer, 
                  même sur étiquettes de faible qualité.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faBook} className="inline" /> ISBN / ISSN</h3>
                <p>
                  Codes spécifiques pour livres (ISBN) et publications périodiques (ISSN). Basés sur EAN-13 
                  avec un préfixe spécial (978/979 pour ISBN). Essentiels pour l&apos;édition et la distribution 
                  de livres.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">💊 Code 2 de 5 Entrelacé (ITF)</h3>
                <p>
                  Utilisé dans l&apos;industrie pharmaceutique et la logistique. Encode des paires de chiffres 
                  de manière entrelacée, permettant une haute densité. Idéal pour les cartons d&apos;expédition 
                  et palettes.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Cas d&apos;usage des codes-barres</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faShoppingCart} className="inline" /> Commerce et vente au détail</h3>
                <p>
                  Gestion des caisses enregistreuses, suivi des stocks, inventaires automatisés. Le scan 
                  en caisse accélère les transactions et réduit les erreurs de saisie. Permet le suivi des 
                  ventes et la réapprovisionnement automatique.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faBox} className="inline" /> Logistique et transport</h3>
                <p>
                  Traçabilité des colis, gestion d&apos;entrepôt, suivi des expéditions. Chaque article scanné 
                  est enregistré en temps réel, permettant de suivre son parcours de l&apos;expéditeur au 
                  destinataire. Essentiel pour e-commerce.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🏥 Santé et pharmaceutique</h3>
                <p>
                  Identification des médicaments, traçabilité des dispositifs médicaux, gestion des dossiers 
                  patients. Les codes-barres préviennent les erreurs médicales en vérifiant l&apos;administration 
                  des bons médicaments aux bons patients.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faBook} className="inline" /> Bibliothèques et archives</h3>
                <p>
                  Catalogage des livres, gestion des prêts et retours, inventaires. Le code-barres sur chaque 
                  ouvrage permet un système de prêt automatisé rapide et fiable. Suivi de l&apos;emplacement et 
                  de la disponibilité.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🎫 Billetterie et événements</h3>
                <p>
                  Contrôle d&apos;accès aux concerts, cinémas, musées, transports. Le scan du billet vérifie 
                  instantanément sa validité et évite les fraudes. Permet le comptage automatique des entrées 
                  et statistiques de fréquentation.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🏭 Manufacturing et production</h3>
                <p>
                  Suivi des pièces détachées, traçabilité de production, contrôle qualité. Chaque composant 
                  est identifié et tracé tout au long de la chaîne de fabrication. Facilite les rappels 
                  produits si nécessaire.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Bonnes pratiques pour les codes-barres</h2>
            <div className="space-y-3 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="font-semibold mb-1"><FontAwesomeIcon icon={faCheck} className="inline" /> Choisissez la bonne taille</h3>
                <p className="text-sm">
                  Pour l&apos;impression, respectez les tailles minimales : EAN-13 minimum 31.35mm de large, 
                  UPC-A 29.83mm. Une taille trop petite rendra le code illisible. Pour des surfaces réduites, 
                  utilisez EAN-8 ou UPC-E.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1"><FontAwesomeIcon icon={faCheck} className="inline" /> Assurez un contraste suffisant</h3>
                <p className="text-sm">
                  Codes noirs sur fond blanc offrent le meilleur contraste. Évitez les couleurs claires 
                  (jaune, orange) pour les barres. Le rouge est invisible pour certains scanners laser. 
                  Testez toujours avant impression en masse.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1"><FontAwesomeIcon icon={faCheck} className="inline" /> Prévoyez une zone de silence</h3>
                <p className="text-sm">
                  Laissez au moins 3-5mm d&apos;espace vierge de chaque côté du code-barres (zone de silence ou 
                  quiet zone). Cette marge est essentielle pour que le scanner détecte correctement le début 
                  et la fin du code.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1"><FontAwesomeIcon icon={faCheck} className="inline" /> Utilisez une qualité d&apos;impression élevée</h3>
                <p className="text-sm">
                  Minimum 300 DPI pour l&apos;impression. Les impressions de mauvaise qualité causent des barres 
                  floues ou bavées, rendant le code illisible. Préférez les imprimantes thermiques pour les 
                  étiquettes professionnelles.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1"><FontAwesomeIcon icon={faCheck} className="inline" /> Positionnez stratégiquement</h3>
                <p className="text-sm">
                  Placez le code-barres sur une surface plane, évitez les plis, courbes ou zones réfléchissantes. 
                  Sur un emballage cylindrique, orientez les barres parallèlement à l&apos;axe du cylindre pour 
                  faciliter le scan.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1"><FontAwesomeIcon icon={faCheck} className="inline" /> Testez avant production</h3>
                <p className="text-sm">
                  Imprimez un échantillon et testez-le avec plusieurs types de scanners (laser, CCD, mobile). 
                  Vérifiez la lisibilité sous différents angles et éclairages. Un test préventif évite des 
                  milliers d&apos;étiquettes inutilisables.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1"><FontAwesomeIcon icon={faCheck} className="inline" /> Respectez les standards</h3>
                <p className="text-sm">
                  Pour vendre en grande distribution, vos codes EAN/UPC doivent être enregistrés auprès de 
                  GS1 (organisme mondial de standardisation). N&apos;inventez pas vos propres numéros, ils 
                  entreraient en conflit avec d&apos;autres produits.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Questions fréquentes</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Comment obtenir un code EAN pour mon produit ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Vous devez vous inscrire auprès de GS1, l&apos;organisme qui gère les codes EAN/UPC mondialement. 
                  Après paiement d&apos;une cotisation annuelle, vous recevez un préfixe d&apos;entreprise vous 
                  permettant de créer vos propres codes produits. Ne générez jamais de codes aléatoires.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Quelle est la différence entre code-barres et QR code ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Les codes-barres traditionnels sont unidimensionnels (barres horizontales) et contiennent 
                  des données limitées (12-13 chiffres typiquement). Les QR codes sont bidimensionnels et 
                  peuvent stocker beaucoup plus d&apos;informations (plusieurs milliers de caractères, URLs, etc.).
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Puis-je scanner un code-barres avec mon smartphone ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Oui, de nombreuses applications permettent de scanner des codes-barres avec l&apos;appareil 
                  photo d&apos;un smartphone. Google Lens, apps de shopping, et apps dédiées comme &quot;Barcode 
                  Scanner&quot; fonctionnent bien. Certaines apps natives d&apos;appareil photo le supportent aussi.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Les codes-barres peuvent-ils expirer ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Non, un code-barres en lui-même n&apos;expire jamais. Cependant, votre abonnement GS1 pour 
                  utiliser légalement ce code peut expirer. De plus, si un produit est discontinué, son code 
                  peut être réattribué à un autre produit après un délai.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Pourquoi mon code-barres ne scanne pas ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Causes courantes : taille trop petite, mauvais contraste, impression de faible qualité, 
                  surface courbée ou réfléchissante, zone de silence insuffisante, barres endommagées ou 
                  salies. Vérifiez aussi que le format du code correspond au scanner utilisé.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Puis-je utiliser n&apos;importe quel numéro pour mon code EAN ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Non, absolument pas. Les numéros EAN sont régulés par GS1 et doivent être officiellement 
                  attribués à votre entreprise. Utiliser des numéros aléatoires ou appartenant à d&apos;autres 
                  entreprises est illégal et causera des problèmes avec les distributeurs.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Quel format pour l&apos;usage interne d&apos;une entreprise ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Pour un usage interne (inventaire, gestion d&apos;actifs, non destiné à la vente publique), 
                  Code 128 ou Code 39 sont excellents. Vous pouvez créer vos propres numéros sans 
                  enregistrement GS1. Flexibles et capables d&apos;encoder texte et chiffres.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Les codes-barres fonctionnent-ils sur écran ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Oui, les codes-barres peuvent être affichés sur écran et scannés (billets électroniques, 
                  cartes de fidélité digitales). Assurez-vous que l&apos;écran est assez lumineux et non fissuré. 
                  Les écrans OLED fonctionnent mieux que les LCD pour cette application.
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
                  <strong>Formats multiples</strong> - EAN, UPC, Code 128, Code 39 et plus
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Personnalisable</strong> - Taille, couleurs, texte configurable
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Haute qualité</strong> - Export PNG et SVG pour toute utilisation
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Prévisualisation en temps réel</strong> - Voir immédiatement le résultat
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>100% gratuit</strong> - Sans limitation ni inscription
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Conforme aux standards</strong> - Respect des spécifications officielles
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Utilisation simple</strong> - Interface intuitive et rapide
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Aucune donnée collectée</strong> - Génération locale dans le navigateur
                </span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
