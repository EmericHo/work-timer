"use client";

import Link from "next/link";
import UUIDGenerator from "@/components/UUIDGenerator";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faDatabase, faDice, faGlobe, faKey } from '@fortawesome/free-solid-svg-icons';

export default function UUIDGeneratorPage() {
  return (
    <div className="min-h-screen flex flex-col p-4 sm:p-6 md:p-8">
      <header className="flex-shrink-0 mb-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-3">
          Générateur UUID Gratuit en Ligne - v1 et v4
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-400 text-sm sm:text-base max-w-3xl mx-auto">
          Générez des identifiants uniques universels (UUID) v1 et v4 instantanément. 
          Outil gratuit pour créer des UUIDs aléatoires ou basés sur l&apos;horodatage pour vos applications.
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
          <UUIDGenerator />
        </div>

        {/* SEO Content */}
        <section className="mt-8 space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Qu&apos;est-ce qu&apos;un UUID ?</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Un UUID (Universally Unique Identifier) ou GUID (Globally Unique Identifier) est un identifiant 
              de 128 bits utilisé en informatique pour identifier des informations de manière unique. Les UUIDs 
              sont standardisés par l&apos;RFC 4122 et sont largement utilisés dans les bases de données, les 
              systèmes distribués et les applications web.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Le format standard d&apos;un UUID est composé de 32 caractères hexadécimaux affichés en 5 groupes 
              séparés par des tirets : 8-4-4-4-12, par exemple : 550e8400-e29b-41d4-a716-446655440000. La 
              probabilité de générer deux UUIDs identiques est si faible qu&apos;elle est considérée comme 
              négligeable dans la pratique.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Notre générateur UUID en ligne vous permet de créer instantanément des identifiants uniques pour 
              vos projets de développement, vos bases de données, vos API ou tout autre besoin nécessitant des 
              identifiants garantis uniques. L&apos;outil fonctionne entièrement dans votre navigateur sans 
              envoyer de données à nos serveurs.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Différences entre UUID v1 et UUID v4</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faDice} className="inline" /> UUID v4 - Aléatoire (Recommandé)</h3>
                <p className="mb-2">
                  Les UUID v4 sont générés de manière purement aléatoire (ou pseudo-aléatoire). C&apos;est la 
                  version la plus couramment utilisée car elle offre plusieurs avantages :
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Aucune information sur le contexte de génération n&apos;est révélée</li>
                  <li>Parfait pour la sécurité et la confidentialité</li>
                  <li>Peut être généré côté client sans coordination</li>
                  <li>Idéal pour les identifiants publics (URLs, tokens, etc.)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faClock} className="inline" /> UUID v1 - Basé sur l&apos;horodatage</h3>
                <p className="mb-2">
                  Les UUID v1 incorporent un timestamp (horodatage) et généralement l&apos;adresse MAC de la 
                  machine qui les génère. Caractéristiques :
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Contient des informations temporelles exploitables</li>
                  <li>Permet de trier les UUIDs par ordre chronologique</li>
                  <li>Utile pour certains cas d&apos;usage spécifiques (logs, événements)</li>
                  <li>Peut révéler des informations sur le système qui l&apos;a généré</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Cas d&apos;usage des UUIDs</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faDatabase} className="inline" /> Bases de données</h3>
                <p>
                  Les UUIDs sont excellents comme clés primaires dans les bases de données distribuées. 
                  Contrairement aux identifiants auto-incrémentés, ils peuvent être générés côté client sans 
                  risque de collision, facilitant la réplication et la fusion de données entre plusieurs bases.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faGlobe} className="inline" /> APIs REST et Microservices</h3>
                <p>
                  Dans les architectures microservices, les UUIDs permettent de créer des identifiants uniques 
                  indépendamment entre différents services. Chaque service peut générer ses propres identifiants 
                  sans coordination centralisée, améliorant la scalabilité.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faKey} className="inline" /> Tokens et Sessions</h3>
                <p>
                  Les UUIDs v4 sont parfaits pour générer des tokens de session, des clés API temporaires ou 
                  des identifiants de transaction sécurisés. Leur caractère aléatoire les rend impossibles à 
                  deviner ou à prédire.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">📁 Nommage de fichiers</h3>
                <p>
                  Pour éviter les conflits de noms de fichiers lors d&apos;uploads multiples, les UUIDs offrent 
                  une solution simple et fiable. Chaque fichier uploadé peut recevoir un nom unique basé sur un UUID.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Comment utiliser les UUIDs dans votre code ?</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">JavaScript / Node.js</h3>
                <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
{`// Avec crypto (natif dans Node.js et navigateurs modernes)
const uuid = crypto.randomUUID();

// Avec la bibliothèque uuid
import { v4 as uuidv4 } from 'uuid';
const uuid = uuidv4();`}
                </pre>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">Python</h3>
                <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
{`import uuid

# Générer un UUID v4
uuid_v4 = str(uuid.uuid4())

# Générer un UUID v1
uuid_v1 = str(uuid.uuid1())`}
                </pre>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">Java</h3>
                <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
{`import java.util.UUID;

// Générer un UUID v4
String uuid = UUID.randomUUID().toString();`}
                </pre>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Questions fréquentes sur les UUIDs</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Les UUIDs sont-ils vraiment uniques ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Oui, statistiquement. La probabilité de générer deux UUIDs identiques est d&apos;environ 1 sur 
                  10³⁸. Pour mettre cela en perspective, vous pourriez générer un milliard d&apos;UUIDs par seconde 
                  pendant 100 ans et la probabilité de collision serait toujours négligeable.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Quelle version d&apos;UUID dois-je utiliser ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Pour la plupart des cas d&apos;usage, UUID v4 (aléatoire) est recommandé. Utilisez UUID v1 
                  uniquement si vous avez besoin d&apos;informations temporelles intégrées ou si vous devez 
                  trier les UUIDs chronologiquement.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Les UUIDs sont-ils adaptés pour la sécurité ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Les UUID v4 sont adaptés pour créer des identifiants imprévisibles mais ne doivent pas être 
                  utilisés seuls pour des fonctions cryptographiques critiques. Pour des besoins de sécurité 
                  élevés, utilisez des bibliothèques cryptographiques dédiées.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Puis-je utiliser les UUIDs dans mes URLs ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Oui, les UUIDs sont parfaits pour les URLs car ils ne contiennent que des caractères 
                  alphanumériques et des tirets. Exemple : /api/users/550e8400-e29b-41d4-a716-446655440000
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Avantages de notre générateur UUID en ligne</h2>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>100% Gratuit</strong> - Aucune limite sur le nombre d&apos;UUIDs générés
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Génération instantanée</strong> - Créez jusqu&apos;à 100 UUIDs en un clic
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Copie facile</strong> - Boutons pour copier individuellement ou en masse
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Côté client</strong> - Aucune donnée envoyée à nos serveurs, confidentialité garantie
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Support v1 et v4</strong> - Choisissez le type d&apos;UUID adapté à vos besoins
                </span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
