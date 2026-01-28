"use client";

import Link from "next/link";
import IBANGenerator from "@/components/IBANGenerator";

export default function IBANGeneratorPage() {
  return (
    <div className="min-h-screen flex flex-col p-4 sm:p-6 md:p-8">
      <header className="flex-shrink-0 mb-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-3">
          Générateur IBAN Gratuit - Créer IBAN de Test Valides
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-400 text-sm sm:text-base max-w-3xl mx-auto">
          Générez des numéros IBAN de test valides pour tous les pays européens. 
          Outil pour développeurs et testeurs d&apos;applications bancaires et de paiement.
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
          <IBANGenerator />
        </div>

        {/* SEO Content */}
        <section className="mt-8 space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Qu&apos;est-ce qu&apos;un IBAN ?</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              L&apos;IBAN (International Bank Account Number) est un système international de numérotation des 
              comptes bancaires développé par l&apos;Organisation internationale de normalisation (ISO) et le Comité 
              européen de normalisation bancaire (ECBS). Il a été créé pour faciliter les transactions bancaires 
              internationales en Europe et dans de nombreux autres pays à travers le monde, en standardisant 
              l&apos;identification des comptes bancaires.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Un numéro IBAN peut contenir jusqu&apos;à 34 caractères alphanumériques et comprend plusieurs 
              éléments : le code pays (2 lettres), une clé de contrôle (2 chiffres), le code bancaire, le code 
              guichet, et le numéro de compte. La structure exacte varie selon les pays, mais tous les IBAN 
              incluent une clé de contrôle calculée selon un algorithme spécifique (modulo 97) qui permet de 
              vérifier la validité du numéro et de détecter les erreurs de saisie.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Notre générateur IBAN en ligne crée des numéros IBAN de test valides qui respectent la structure 
              et les règles de validation de chaque pays. Ces numéros sont parfaits pour le développement et 
              le test d&apos;applications bancaires, de systèmes de paiement, ou pour des démonstrations. 
              <strong className="text-red-600 dark:text-red-400"> Important : Ces IBAN sont factices et ne 
              correspondent à aucun compte bancaire réel. Ils ne doivent être utilisés qu&apos;à des fins de test 
              et de développement.</strong>
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              L&apos;utilisation de l&apos;IBAN est obligatoire dans tous les pays de l&apos;Union européenne, de 
              l&apos;Espace économique européen, ainsi que dans de nombreux autres pays. En France, depuis le 1er 
              février 2014, l&apos;IBAN et le BIC sont devenus obligatoires pour tous les virements et prélèvements, 
              remplaçant progressivement l&apos;ancien système RIB. Cette harmonisation facilite grandement les 
              transactions transfrontalières et réduit les erreurs de transfert.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Comment utiliser le générateur IBAN ?</h2>
            <ol className="list-decimal list-inside space-y-3 text-gray-700 dark:text-gray-300">
              <li className="pl-2">
                <strong>Sélectionnez un pays</strong> - Choisissez le pays pour lequel vous souhaitez générer 
                un IBAN de test dans la liste déroulante
              </li>
              <li className="pl-2">
                <strong>Cliquez sur Générer</strong> - Lancez la génération d&apos;un ou plusieurs IBAN conformes 
                aux spécifications du pays sélectionné
              </li>
              <li className="pl-2">
                <strong>Copiez l&apos;IBAN</strong> - Utilisez le bouton de copie pour transférer rapidement 
                l&apos;IBAN dans votre presse-papiers
              </li>
              <li className="pl-2">
                <strong>Vérifiez la structure</strong> - L&apos;outil affiche la décomposition de l&apos;IBAN 
                (code pays, clé de contrôle, code banque, etc.)
              </li>
              <li className="pl-2">
                <strong>Utilisez pour vos tests</strong> - Intégrez ces IBAN de test dans vos environnements 
                de développement ou de démonstration
              </li>
            </ol>
            <div className="mt-4 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded">
              <p className="text-sm text-yellow-800 dark:text-yellow-200 font-semibold">
                ⚠️ Avertissement : Les IBAN générés sont uniquement pour des tests et ne doivent jamais être 
                utilisés pour de vraies transactions bancaires. L&apos;utilisation frauduleuse d&apos;IBAN fictifs 
                pour des transactions réelles est illégale.
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Structure d&apos;un IBAN</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="text-xl font-semibold mb-2">🏴 Code pays (2 lettres)</h3>
                <p>
                  Les deux premières lettres identifient le pays selon la norme ISO 3166-1 alpha-2. Exemples : 
                  FR pour France, DE pour Allemagne, ES pour Espagne, IT pour Italie, BE pour Belgique, CH 
                  pour Suisse. Ce code détermine la structure et la longueur du reste de l&apos;IBAN.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">✓ Clé de contrôle (2 chiffres)</h3>
                <p>
                  Les deux chiffres suivants sont la clé de contrôle calculée selon l&apos;algorithme modulo 97. 
                  Cette clé permet de vérifier la validité de l&apos;IBAN et de détecter les erreurs de frappe. 
                  Lorsqu&apos;un IBAN est saisi, sa clé de contrôle est recalculée et comparée à celle fournie. 
                  Si elles ne correspondent pas, l&apos;IBAN est invalide.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🏦 BBAN (Basic Bank Account Number)</h3>
                <p>
                  Le reste de l&apos;IBAN constitue le BBAN, dont la structure varie selon les pays. Il comprend 
                  généralement :
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li><strong>Code banque</strong> : Identifie la banque (5 chiffres en France)</li>
                  <li><strong>Code guichet</strong> : Identifie l&apos;agence bancaire (5 chiffres en France)</li>
                  <li><strong>Numéro de compte</strong> : Identifie le compte client (11 caractères en France)</li>
                  <li><strong>Clé RIB</strong> : Clé de contrôle nationale (2 chiffres en France)</li>
                </ul>
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold mb-2">📝 Exemple d&apos;IBAN français</h3>
                <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded">
                  <p className="font-mono text-lg mb-2">FR76 3000 6000 0112 3456 7890 189</p>
                  <ul className="text-sm space-y-1">
                    <li><strong>FR</strong> : Code pays (France)</li>
                    <li><strong>76</strong> : Clé de contrôle</li>
                    <li><strong>30006</strong> : Code banque</li>
                    <li><strong>00001</strong> : Code guichet</li>
                    <li><strong>12345678901</strong> : Numéro de compte</li>
                    <li><strong>89</strong> : Clé RIB</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Longueurs d&apos;IBAN par pays</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              La longueur de l&apos;IBAN varie selon les pays, de 15 à 34 caractères. Voici les longueurs pour 
              les principaux pays européens :
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-700 dark:text-gray-300">
              <div className="flex justify-between p-2 bg-gray-50 dark:bg-gray-700 rounded">
                <span><strong>France (FR)</strong></span>
                <span>27 caractères</span>
              </div>
              <div className="flex justify-between p-2 bg-gray-50 dark:bg-gray-700 rounded">
                <span><strong>Allemagne (DE)</strong></span>
                <span>22 caractères</span>
              </div>
              <div className="flex justify-between p-2 bg-gray-50 dark:bg-gray-700 rounded">
                <span><strong>Espagne (ES)</strong></span>
                <span>24 caractères</span>
              </div>
              <div className="flex justify-between p-2 bg-gray-50 dark:bg-gray-700 rounded">
                <span><strong>Italie (IT)</strong></span>
                <span>27 caractères</span>
              </div>
              <div className="flex justify-between p-2 bg-gray-50 dark:bg-gray-700 rounded">
                <span><strong>Belgique (BE)</strong></span>
                <span>16 caractères</span>
              </div>
              <div className="flex justify-between p-2 bg-gray-50 dark:bg-gray-700 rounded">
                <span><strong>Pays-Bas (NL)</strong></span>
                <span>18 caractères</span>
              </div>
              <div className="flex justify-between p-2 bg-gray-50 dark:bg-gray-700 rounded">
                <span><strong>Suisse (CH)</strong></span>
                <span>21 caractères</span>
              </div>
              <div className="flex justify-between p-2 bg-gray-50 dark:bg-gray-700 rounded">
                <span><strong>Royaume-Uni (GB)</strong></span>
                <span>22 caractères</span>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Validation d&apos;un IBAN</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              La validation d&apos;un IBAN se fait en plusieurs étapes utilisant l&apos;algorithme modulo 97 :
            </p>
            <ol className="list-decimal list-inside space-y-3 text-gray-700 dark:text-gray-300">
              <li className="pl-2">
                Déplacer les 4 premiers caractères (code pays + clé de contrôle) à la fin de l&apos;IBAN
              </li>
              <li className="pl-2">
                Remplacer chaque lettre par deux chiffres : A=10, B=11, C=12... Z=35
              </li>
              <li className="pl-2">
                Calculer le reste de la division du nombre obtenu par 97
              </li>
              <li className="pl-2">
                Si le reste est égal à 1, l&apos;IBAN est valide. Sinon, il est invalide
              </li>
            </ol>
            <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded">
              <p className="text-sm text-blue-800 dark:text-blue-200">
                💡 <strong>Astuce :</strong> Cette validation détecte la plupart des erreurs de saisie, mais 
                ne garantit pas que l&apos;IBAN correspond à un compte bancaire réellement existant. Pour vérifier 
                l&apos;existence d&apos;un compte, vous devez contacter la banque.
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Cas d&apos;usage des IBAN de test</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="text-xl font-semibold mb-2">💻 Développement d&apos;applications</h3>
                <p>
                  Les développeurs créant des applications bancaires, des plateformes de paiement ou des 
                  systèmes de gestion financière ont besoin d&apos;IBAN de test pour développer et déboguer leurs 
                  fonctionnalités. Les IBAN générés permettent de tester la validation, le formatage et le 
                  traitement des numéros de compte sans risquer d&apos;utiliser de vrais comptes bancaires.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🧪 Tests automatisés</h3>
                <p>
                  Dans les suites de tests automatisés (tests unitaires, tests d&apos;intégration), des IBAN de 
                  test valides sont nécessaires pour vérifier que le code gère correctement les différents 
                  formats d&apos;IBAN selon les pays. Notre générateur peut créer rapidement des jeux de données 
                  de test complets pour différentes juridictions.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">📊 Démonstrations et présentations</h3>
                <p>
                  Lors de démonstrations de logiciels bancaires ou de présentations de systèmes de paiement, 
                  il est préférable d&apos;utiliser des IBAN factices plutôt que de vrais numéros de compte. 
                  Cela protège la confidentialité et évite toute confusion avec de vraies transactions.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🎓 Formation et éducation</h3>
                <p>
                  Les formateurs et enseignants en banque, finance ou informatique peuvent utiliser ces IBAN 
                  de test pour créer des exercices pratiques réalistes. Les étudiants peuvent ainsi apprendre 
                  la structure des IBAN et pratiquer la validation sans utiliser de vraies données bancaires.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🔍 Tests de validation</h3>
                <p>
                  Tester des formulaires web ou des API qui acceptent des IBAN nécessite des numéros valides 
                  selon l&apos;algorithme de contrôle. Notre générateur produit des IBAN qui passeront les 
                  vérifications de format et de clé de contrôle, permettant de tester le flux complet sans 
                  déclencher d&apos;erreurs de validation.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Différences entre IBAN, BIC et SWIFT</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="text-xl font-semibold mb-2">🏦 IBAN (International Bank Account Number)</h3>
                <p>
                  L&apos;IBAN identifie de manière unique un compte bancaire spécifique. Il contient le code pays, 
                  la clé de contrôle et les informations du compte (banque, agence, numéro de compte). 
                  L&apos;IBAN est utilisé principalement en Europe et dans certains autres pays pour les virements 
                  et prélèvements.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🌐 BIC/SWIFT (Bank Identifier Code)</h3>
                <p>
                  Le BIC (aussi appelé code SWIFT) identifie la banque elle-même, pas un compte spécifique. 
                  Il se compose de 8 ou 11 caractères : code banque (4 caractères), code pays (2 lettres), 
                  code localité (2 caractères), et optionnellement code agence (3 caractères). Le BIC est 
                  souvent requis pour les virements internationaux en complément de l&apos;IBAN.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🤝 Utilisation conjointe</h3>
                <p>
                  Pour un virement SEPA (Single Euro Payments Area) dans l&apos;UE, l&apos;IBAN suffit généralement. 
                  Pour les virements internationaux hors SEPA, le BIC/SWIFT est également nécessaire. En 
                  France, depuis 2016, le BIC n&apos;est plus obligatoire pour les virements SEPA, l&apos;IBAN 
                  suffisant.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Sécurité et confidentialité des IBAN</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="text-xl font-semibold mb-2">🔒 Protection des IBAN réels</h3>
                <p>
                  Un IBAN réel doit être traité comme une information sensible. Bien qu&apos;il ne soit pas aussi 
                  critique qu&apos;un numéro de carte bancaire (car les paiements nécessitent généralement une 
                  autorisation), il ne faut pas le partager publiquement. Utilisez-le uniquement avec des 
                  organisations de confiance pour les virements et prélèvements autorisés.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">⚠️ Risques liés aux IBAN</h3>
                <p>
                  Avec votre IBAN, quelqu&apos;un pourrait potentiellement initier un prélèvement SEPA non 
                  autorisé. Cependant, la réglementation européenne vous protège : vous avez 8 semaines pour 
                  contester un prélèvement autorisé et 13 mois pour un prélèvement non autorisé. Les banques 
                  sont tenues de rembourser les montants contestés.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🛡️ Bonnes pratiques</h3>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                  <li>Ne partagez votre IBAN qu&apos;avec des entités de confiance</li>
                  <li>Vérifiez régulièrement vos relevés bancaires</li>
                  <li>Contestez immédiatement tout prélèvement non autorisé</li>
                  <li>Pour les tests, utilisez toujours des IBAN factices, jamais de vrais IBAN</li>
                  <li>N&apos;incluez jamais de vrais IBAN dans le code source ou les dépôts publics</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Conseils pour les développeurs</h2>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Validez toujours les IBAN</strong> - Implémentez la vérification modulo 97 côté 
                  serveur, ne vous fiez pas uniquement à la validation client
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Stockez sans espaces</strong> - Supprimez les espaces avant de stocker les IBAN en 
                  base de données pour faciliter les recherches
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Affichez avec espaces</strong> - Formatez les IBAN par groupes de 4 caractères pour 
                  faciliter la lecture : FR76 3000 6000 0112 3456 7890 189
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Utilisez des bibliothèques</strong> - Des bibliothèques comme iban.js (JavaScript) 
                  ou schwifty (Python) facilitent la validation et la génération d&apos;IBAN
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Testez plusieurs pays</strong> - Assurez-vous que votre application gère correctement 
                  les IBAN de différentes longueurs et structures
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Documentez clairement</strong> - Indiquez clairement dans votre documentation que 
                  les IBAN de test ne doivent pas être utilisés en production
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Histoire et adoption de l&apos;IBAN</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              L&apos;IBAN a été initialement développé par le Comité européen de normalisation bancaire (ECBS) 
              dans les années 1990 pour faciliter les paiements transfrontaliers en Europe. Il a été 
              officiellement adopté comme norme ISO 13616 en 1997. L&apos;objectif était de créer un système 
              standardisé qui réduirait les erreurs de paiement et accélérerait le traitement des transactions 
              internationales.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              En 2008, l&apos;espace SEPA (Single Euro Payments Area) a été lancé, rendant l&apos;IBAN obligatoire 
              pour tous les virements et prélèvements en euros dans les pays participants. Progressivement, 
              l&apos;usage de l&apos;IBAN s&apos;est étendu au-delà de l&apos;Europe, avec plus de 75 pays l&apos;ayant 
              adopté à ce jour, couvrant ainsi une grande partie des transactions bancaires mondiales.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Aujourd&apos;hui, l&apos;IBAN est devenu le standard de facto pour les numéros de compte bancaire en 
              Europe et dans de nombreux autres pays. Il a considérablement simplifié les transactions 
              internationales, réduit les coûts de traitement et diminué les erreurs de paiement. Pour les 
              développeurs et testeurs, comprendre la structure et la validation de l&apos;IBAN est essentiel 
              pour créer des applications financières robustes et conformes.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Questions fréquentes sur les IBAN</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Les IBAN générés correspondent-ils à de vrais comptes ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Non, les IBAN générés par cet outil sont entièrement fictifs et ne correspondent à aucun 
                  compte bancaire réel. Ils sont structurellement valides (passent la validation de clé de 
                  contrôle) mais sont uniquement destinés aux tests et au développement.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Puis-je utiliser ces IBAN pour de vraies transactions ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Absolument pas. Ces IBAN sont uniquement pour des tests et des démonstrations. Tenter 
                  d&apos;utiliser un IBAN fictif pour une vraie transaction sera rejeté par les systèmes bancaires 
                  et pourrait être considéré comme frauduleux.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Comment puis-je vérifier si un IBAN est valide ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  La validation se fait via l&apos;algorithme modulo 97. De nombreux outils en ligne et 
                  bibliothèques de programmation peuvent valider un IBAN. Notez qu&apos;un IBAN valide 
                  structurellement peut ne pas correspondre à un compte existant.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Pourquoi les IBAN ont-ils des longueurs différentes ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Chaque pays définit sa propre structure de BBAN (la partie après le code pays et la clé). 
                  Certains pays ont des systèmes bancaires avec des codes plus longs, d&apos;où des variations 
                  de 15 à 34 caractères selon les pays.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Dois-je fournir un BIC avec l&apos;IBAN ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Pour les virements SEPA en euros au sein de l&apos;UE/EEE, l&apos;IBAN seul suffit depuis 2016. 
                  Pour les virements internationaux hors SEPA, le BIC/SWIFT est généralement requis en plus 
                  de l&apos;IBAN.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
