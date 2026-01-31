"use client";

import Link from "next/link";
import CSVToJSONConverter from "@/components/CSVToJSONConverter";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar, faCheck, faFileAlt, faGlobe, faHardHat, faHashtag, faLaptop, faMobileAlt, faSync } from '@fortawesome/free-solid-svg-icons';

export default function CSVToJSONConverterPage() {
  return (
    <div className="min-h-screen flex flex-col p-4 sm:p-6 md:p-8">
      <header className="flex-shrink-0 mb-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-3">
          Convertisseur CSV vers JSON en Ligne Gratuit
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-400 text-sm sm:text-base max-w-3xl mx-auto">
          Convertissez vos fichiers CSV en JSON instantanément. Outil gratuit pour transformer vos données 
          tabulaires en format JSON pour APIs, bases de données et applications web.
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
          <CSVToJSONConverter />
        </div>

        {/* SEO Content */}
        <section className="mt-8 space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">CSV vs JSON : Comprendre les différences</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              CSV (Comma-Separated Values) et JSON (JavaScript Object Notation) sont deux formats de fichiers 
              couramment utilisés pour stocker et échanger des données. Le CSV est un format tabulaire simple où 
              chaque ligne représente un enregistrement et les valeurs sont séparées par des virgules (ou autre 
              délimiteur). C&apos;est le format d&apos;export standard des tableurs comme Excel.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              JSON est un format structuré basé sur des paires clé-valeur et des tableaux, largement utilisé dans 
              les APIs REST et les applications web modernes. Il supporte des structures de données hiérarchiques 
              et imbriquées, contrairement au CSV qui est strictement tabulaire. JSON est aussi plus explicite : 
              chaque valeur est associée à une clé nommée, rendant les données auto-descriptives.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Notre convertisseur transforme vos données CSV en JSON valide, prêt à être utilisé dans vos 
              applications. La conversion se fait entièrement dans votre navigateur, garantissant la confidentialité 
              de vos données.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Cas d&apos;usage de la conversion CSV vers JSON</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="text-xl font-semibold mb-2">🔌 Intégration avec des APIs</h3>
                <p>
                  Les APIs modernes utilisent JSON pour recevoir et envoyer des données. Convertir vos exports 
                  Excel/CSV en JSON vous permet d&apos;importer facilement des données dans des applications web, 
                  bases de données NoSQL (MongoDB, Firebase) ou services cloud sans écrire de code complexe.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faLaptop} className="inline" /> Développement web et JavaScript</h3>
                <p>
                  JSON est le format natif de JavaScript. Convertir des données CSV en JSON facilite leur 
                  utilisation dans des applications React, Vue, Angular ou Node.js. Vous pouvez directement 
                  parser le JSON et l&apos;utiliser comme données de test ou de configuration.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faChartBar} className="inline" /> Migration de données</h3>
                <p>
                  Lors de la migration depuis des systèmes legacy ou des tableurs vers des bases de données 
                  modernes, convertir CSV en JSON est souvent une étape nécessaire. Le JSON peut ensuite être 
                  importé directement dans MongoDB, CouchDB ou autres bases NoSQL.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faSync} className="inline" /> Transformation de données</h3>
                <p>
                  JSON offre plus de flexibilité pour manipuler et transformer les données. Une fois converti, 
                  vous pouvez facilement filtrer, regrouper, enrichir ou restructurer vos données avec des 
                  outils comme jq ou des scripts JavaScript.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faMobileAlt} className="inline" /> Applications mobiles</h3>
                <p>
                  Les applications iOS et Android consomment généralement des données en JSON. Convertir vos 
                  données CSV en JSON facilite leur intégration dans des apps mobiles pour du prototypage 
                  rapide ou des données de test.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Avantages du format JSON</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="text-xl font-semibold mb-2">📖 Lisible et auto-descriptif</h3>
                <p>
                  JSON est facile à lire pour les humains et les machines. Chaque donnée est clairement étiquetée 
                  avec sa clé, éliminant toute ambiguïté sur la signification des valeurs. Pas besoin de référence 
                  externe pour comprendre la structure des données.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faHardHat} className="inline" /> Structure hiérarchique</h3>
                <p>
                  Contrairement au CSV qui est plat, JSON supporte l&apos;imbrication d&apos;objets et de tableaux. 
                  Vous pouvez représenter des relations complexes et des données hiérarchiques naturellement, comme 
                  un utilisateur avec ses commandes, chaque commande contenant des produits.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faHashtag} className="inline" /> Types de données natifs</h3>
                <p>
                  JSON distingue les types : chaînes de caractères, nombres, booléens, null, objets et tableaux. 
                  Le CSV traite tout comme du texte, nécessitant un parsing supplémentaire. JSON préserve le type 
                  de chaque valeur, évitant les erreurs de conversion.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faGlobe} className="inline" /> Standard web universel</h3>
                <p>
                  JSON est le format d&apos;échange de données standard du web moderne. Presque tous les langages 
                  de programmation ont des bibliothèques natives pour parser et générer du JSON. Il est supporté 
                  nativement par tous les navigateurs et frameworks web.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Comment utiliser le convertisseur ?</h2>
            <div className="space-y-3 text-gray-700 dark:text-gray-300">
              <p className="font-semibold">Étapes simples pour convertir vos données :</p>
              <ol className="list-decimal pl-6 space-y-2">
                <li>
                  <strong>Préparez vos données CSV</strong> - Assurez-vous que la première ligne contient les 
                  en-têtes de colonnes qui deviendront les clés JSON. Chaque ligne suivante sera convertie en 
                  un objet JSON.
                </li>
                <li>
                  <strong>Collez ou uploadez votre CSV</strong> - Copiez votre CSV depuis Excel, Google Sheets 
                  ou tout éditeur de texte et collez-le dans la zone de texte. Ou uploadez directement un fichier CSV.
                </li>
                <li>
                  <strong>Conversion automatique</strong> - Le JSON est généré instantanément. Chaque ligne CSV 
                  devient un objet dans un tableau JSON, avec les en-têtes comme clés.
                </li>
                <li>
                  <strong>Copiez ou téléchargez</strong> - Utilisez le bouton de copie pour copier le JSON dans 
                  votre presse-papiers, ou téléchargez-le comme fichier .json.
                </li>
                <li>
                  <strong>Utilisez dans votre projet</strong> - Le JSON est prêt à être importé dans votre base 
                  de données, API ou application.
                </li>
              </ol>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Conseils pour une conversion réussie</h2>
            <div className="space-y-3 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="font-semibold mb-1"><FontAwesomeIcon icon={faCheck} className="inline" /> Vérifiez vos en-têtes</h3>
                <p className="text-sm">
                  Assurez-vous que la première ligne de votre CSV contient des en-têtes clairs et uniques. Ces 
                  en-têtes deviendront les clés de vos objets JSON. Évitez les espaces et caractères spéciaux 
                  dans les noms de clés si possible.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">🔤 Attention aux délimiteurs</h3>
                <p className="text-sm">
                  Le séparateur standard est la virgule, mais certains CSV utilisent des point-virgules (;) ou 
                  des tabulations. Assurez-vous que votre délimiteur est cohérent. Les valeurs contenant le 
                  délimiteur doivent être entre guillemets.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1"><FontAwesomeIcon icon={faFileAlt} className="inline" /> Gérez les valeurs vides</h3>
                <p className="text-sm">
                  Les cellules vides en CSV seront converties en chaînes vides (&quot;&quot;) ou null en JSON selon 
                  le convertisseur. Vérifiez comment votre application gère ces valeurs manquantes.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1"><FontAwesomeIcon icon={faHashtag} className="inline" /> Types de données</h3>
                <p className="text-sm">
                  Le CSV ne préserve pas les types. Notre convertisseur essaie de détecter les nombres et booléens, 
                  mais vérifiez le résultat. Vous devrez peut-être ajuster les types manuellement pour des cas 
                  spécifiques.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Avantages de notre convertisseur CSV vers JSON</h2>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Conversion instantanée</strong> - Résultats en temps réel, même pour de gros fichiers
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>100% Gratuit</strong> - Aucune limite sur la taille ou le nombre de conversions
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Confidentialité totale</strong> - Traitement local, vos données ne quittent jamais votre navigateur
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>JSON valide</strong> - Output correctement formaté et prêt à l&apos;emploi
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Interface simple</strong> - Pas de configuration complexe, conversion en un clic
                </span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
