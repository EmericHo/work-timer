"use client";

import Link from "next/link";
import URLEncoderDecoder from "@/components/URLEncoderDecoder";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faEnvelope, faGlobe, faLink, faLock, faPalette, faTimes } from '@fortawesome/free-solid-svg-icons';

export default function URLEncoderDecoderPage() {
  return (
    <div className="min-h-screen flex flex-col p-4 sm:p-6 md:p-8">
      <header className="flex-shrink-0 mb-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-3">
          Encodeur et Décodeur d&apos;URL en Ligne Gratuit
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-400 text-sm sm:text-base max-w-3xl mx-auto">
          Encodez et décodez vos URLs instantanément. Convertissez les caractères spéciaux en format 
          percent-encoding compatible web. Outil gratuit pour développeurs et webmasters.
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
          <URLEncoderDecoder />
        </div>

        {/* SEO Content */}
        <section className="mt-8 space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Qu&apos;est-ce que l&apos;encodage d&apos;URL ?</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              L&apos;encodage d&apos;URL, également appelé percent-encoding ou URL encoding, est un mécanisme 
              permettant de représenter des caractères spéciaux dans une URL de manière sûre et standardisée. 
              Les URLs ne peuvent contenir qu&apos;un ensemble limité de caractères ASCII : lettres (a-z, A-Z), 
              chiffres (0-9), et quelques caractères spéciaux non réservés comme le tiret (-), le point (.), 
              le underscore (_) et le tilde (~). Tous les autres caractères, y compris les espaces, accents, 
              symboles et caractères non-ASCII, doivent être encodés.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              L&apos;encodage fonctionne en remplaçant chaque caractère problématique par un pourcentage (%) 
              suivi de deux chiffres hexadécimaux représentant le code ASCII ou UTF-8 du caractère. Par exemple, 
              un espace devient <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">%20</code>, le 
              caractère &quot;é&quot; devient <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">%C3%A9</code>, 
              et le symbole &quot;?&quot; devient <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">%3F</code> 
              lorsqu&apos;il doit être utilisé comme caractère littéral (et non comme séparateur de query string).
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Notre outil d&apos;encodage et décodage d&apos;URL vous permet de convertir facilement vos URLs 
              dans les deux sens. Collez une URL lisible pour obtenir sa version encodée compatible avec les 
              standards web, ou décodez une URL encodée pour voir son contenu d&apos;origine. Essentiel pour 
              les développeurs qui travaillent avec des APIs, des paramètres GET, des redirections, ou tout 
              système nécessitant la transmission de données dans des URLs.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Caractères réservés et encodage</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faLock} className="inline" /> Caractères réservés dans les URLs</h3>
                <p className="mb-2">
                  Certains caractères ont une signification spéciale dans les URLs et doivent être encodés 
                  s&apos;ils sont utilisés littéralement :
                </p>
                <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded text-sm space-y-1">
                  <p>• <strong>:</strong> (deux-points) → %3A - sépare protocole et domaine</p>
                  <p>• <strong>/</strong> (slash) → %2F - sépare les segments de chemin</p>
                  <p>• <strong>?</strong> (point d&apos;interrogation) → %3F - début des paramètres query</p>
                  <p>• <strong>#</strong> (hashtag) → %23 - indique un fragment/ancre</p>
                  <p>• <strong>&amp;</strong> (esperluette) → %26 - sépare les paramètres query</p>
                  <p>• <strong>=</strong> (égal) → %3D - sépare clé et valeur dans les paramètres</p>
                  <p>• <strong>+</strong> (plus) → %2B - souvent utilisé pour représenter un espace</p>
                  <p>• <strong>%</strong> (pourcentage) → %25 - caractère d&apos;encodage lui-même</p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faCheck} className="inline" /> Caractères non réservés (pas d&apos;encodage requis)</h3>
                <p className="mb-2">
                  Ces caractères peuvent être utilisés tels quels dans une URL :
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Lettres : A-Z, a-z</li>
                  <li>Chiffres : 0-9</li>
                  <li>Caractères spéciaux : - (tiret), _ (underscore), . (point), ~ (tilde)</li>
                  <li>Ces caractères n&apos;ont aucune signification spéciale et ne nécessitent pas d&apos;encodage</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faGlobe} className="inline" /> Caractères non-ASCII et Unicode</h3>
                <p className="mb-2">
                  Tous les caractères en dehors de l&apos;ASCII de base doivent être encodés :
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Accents : é → %C3%A9, à → %C3%A0, ñ → %C3%B1</li>
                  <li>Symboles : € → %E2%82%AC, © → %C2%A9</li>
                  <li>Caractères asiatiques : 日本 → %E6%97%A5%E6%9C%AC</li>
                  <li>Emojis : 😀 → %F0%9F%98%80</li>
                  <li>L&apos;encodage UTF-8 peut nécessiter plusieurs octets (d&apos;où plusieurs %XX)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Différences entre URI, URL et URN</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faLink} className="inline" /> URI (Uniform Resource Identifier)</h3>
                <p className="mb-2">
                  Terme générique désignant tout identifiant de ressource. Les URLs et URNs sont des types d&apos;URI :
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Identifie une ressource de manière unique</li>
                  <li>Peut être localisable (URL) ou simplement nommée (URN)</li>
                  <li>Exemple : <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded text-xs">mailto:contact@example.com</code></li>
                  <li>Standard défini par RFC 3986</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faGlobe} className="inline" /> URL (Uniform Resource Locator)</h3>
                <p className="mb-2">
                  Type d&apos;URI qui fournit également le moyen d&apos;accéder à la ressource (son emplacement) :
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Spécifie comment accéder à une ressource (protocole + adresse)</li>
                  <li>Structure : <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded text-xs">protocole://domaine:port/chemin?query#fragment</code></li>
                  <li>Exemple : <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded text-xs">https://example.com/page?id=123</code></li>
                  <li>Le type d&apos;URI le plus courant sur le web</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">📛 URN (Uniform Resource Name)</h3>
                <p className="mb-2">
                  Type d&apos;URI qui identifie une ressource par son nom, sans indiquer comment y accéder :
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Identifie une ressource de manière persistante, indépendamment de son emplacement</li>
                  <li>Commence généralement par <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded text-xs">urn:</code></li>
                  <li>Exemple : <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded text-xs">urn:isbn:0-486-27557-4</code> (livre par ISBN)</li>
                  <li>Moins courant que les URLs mais utilisé dans certains systèmes académiques et bibliothèques</li>
                </ul>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 p-3 rounded">
                <p className="text-sm">
                  <strong>À retenir :</strong> Toutes les URLs sont des URIs, mais tous les URIs ne sont pas des URLs. 
                  Dans le langage courant, on utilise souvent &quot;URL&quot; même si techniquement &quot;URI&quot; serait 
                  plus précis.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Cas d&apos;usage pratiques</h2>
            <div className="space-y-3 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="font-semibold mb-1">🔎 Paramètres de recherche avec caractères spéciaux</h3>
                <p className="text-sm mb-2">
                  Lors de la création de liens de recherche, les requêtes doivent être encodées :
                </p>
                <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded text-xs">
                  <p className="mb-1"><FontAwesomeIcon icon={faTimes} className="inline" /> Incorrect : <code>https://site.com/search?q=C++ développement</code></p>
                  <p><FontAwesomeIcon icon={faCheck} className="inline" /> Correct : <code>https://site.com/search?q=C%2B%2B%20d%C3%A9veloppement</code></p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-1"><FontAwesomeIcon icon={faLink} className="inline" /> URLs de redirection</h3>
                <p className="text-sm mb-2">
                  Lorsqu&apos;une URL entière est passée comme paramètre (redirect, callback URL) :
                </p>
                <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded text-xs">
                  <p>Original : <code>https://app.com/login?redirect=https://app.com/dashboard?tab=settings</code></p>
                  <p className="mt-1">Encodé : <code>https://app.com/login?redirect=https%3A%2F%2Fapp.com%2Fdashboard%3Ftab%3Dsettings</code></p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-1"><FontAwesomeIcon icon={faEnvelope} className="inline" /> Liens mailto avec sujet et corps</h3>
                <p className="text-sm mb-2">
                  Les liens email avec contenu pré-rempli nécessitent un encodage :
                </p>
                <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded text-xs">
                  <p><code>mailto:contact@example.com?subject=Question%20urgente&amp;body=Bonjour%2C%0A%0AJ%27ai%20une%20question...</code></p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-1"><FontAwesomeIcon icon={faPalette} className="inline" /> Data URLs et Base64</h3>
                <p className="text-sm">
                  Les data URLs qui embarquent du contenu (images, SVG) utilisent souvent l&apos;encodage URL : 
                  <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded text-xs ml-1">data:image/svg+xml,%3Csvg...</code>. 
                  L&apos;alternative est base64 qui évite l&apos;encodage mais augmente la taille de 33%.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">🔌 APIs et webhooks</h3>
                <p className="text-sm">
                  Les paramètres d&apos;API doivent être encodés, surtout pour les valeurs contenant des caractères 
                  spéciaux. Exemple : rechercher un utilisateur avec email comme paramètre nécessite d&apos;encoder 
                  le @ et le point : <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded text-xs">user%40example.com</code>.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Encodage en programmation</h2>
            <div className="space-y-3 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="font-semibold mb-1">JavaScript</h3>
                <pre className="bg-gray-900 text-gray-100 p-3 rounded text-xs overflow-x-auto mt-2">
{`// encodeURIComponent - encode tout sauf les caractères non-réservés
const encoded = encodeURIComponent("Hello World & Co");
// "Hello%20World%20%26%20Co"

// encodeURI - encode moins de caractères (préserve :/?#)
const url = encodeURI("https://site.com/page?q=test");
// "https://site.com/page?q=test"

// decodeURIComponent - décode
const decoded = decodeURIComponent("Hello%20World");
// "Hello World"

// Différence : encodeURIComponent encode les : / ? = &
// encodeURI les préserve car ce sont des délimiteurs d'URL valides`}
                </pre>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Python</h3>
                <pre className="bg-gray-900 text-gray-100 p-3 rounded text-xs overflow-x-auto mt-2">
{`from urllib.parse import quote, unquote, quote_plus, urlencode

# quote - encodage standard
encoded = quote("Hello World & Co")  # "Hello%20World%20%26%20Co"

# quote_plus - espace devient +
encoded_plus = quote_plus("Hello World")  # "Hello+World"

# urlencode - encode un dictionnaire de paramètres
params = urlencode({"q": "test", "lang": "fr"})  # "q=test&lang=fr"

# unquote - décodage
decoded = unquote("Hello%20World")  # "Hello World"`}
                </pre>
              </div>
              <div>
                <h3 className="font-semibold mb-1">PHP</h3>
                <pre className="bg-gray-900 text-gray-100 p-3 rounded text-xs overflow-x-auto mt-2">
{`// urlencode - encodage standard (espace devient +)
$encoded = urlencode("Hello World & Co"); // "Hello+World+%26+Co"

// rawurlencode - encodage strict (espace devient %20)
$encoded_raw = rawurlencode("Hello World"); // "Hello%20World"

// urldecode / rawurldecode - décodage
$decoded = urldecode("Hello+World"); // "Hello World"

// http_build_query - construit une query string
$params = ["q" => "test", "lang" => "fr"];
$query = http_build_query($params); // "q=test&lang=fr"`}
                </pre>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Questions fréquentes sur l&apos;encodage d&apos;URL</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Quelle est la différence entre %20 et + pour les espaces ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Dans le chemin d&apos;une URL, les espaces doivent être encodés en %20. Dans la query string 
                  (paramètres après ?), les espaces peuvent être encodés en + ou %20 - les deux sont acceptés et 
                  équivalents. Le + est plus court mais %20 est plus universel. Les fonctions 
                  <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded text-xs">encodeURIComponent</code> 
                  utilisent toujours %20.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Faut-il encoder toute l&apos;URL ou seulement certaines parties ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  N&apos;encodez jamais une URL complète d&apos;un seul coup ! Cela encoderait les : // et / qui 
                  sont des délimiteurs essentiels. Encodez uniquement les valeurs des paramètres ou les segments 
                  de chemin contenant des caractères spéciaux. Utilisez encodeURIComponent pour les valeurs 
                  individuelles, pas encodeURI sur l&apos;URL entière.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Pourquoi mon URL encodée ne fonctionne pas ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Problèmes courants : 1) Double encodage (encoder une URL déjà encodée), 2) Encoder l&apos;URL 
                  entière au lieu des paramètres seulement, 3) Utiliser le mauvais charset (assurez-vous d&apos;utiliser 
                  UTF-8), 4) Oublier d&apos;encoder les & dans les paramètres HTML (utilisez &amp;amp; en HTML). 
                  Testez vos URLs dans un décodeur pour vérifier le résultat.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Les URLs encodées sont-elles sensibles à la casse ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Oui et non. Les codes hexadécimaux d&apos;encodage peuvent être en majuscules ou minuscules 
                  (%2F ou %2f sont équivalents). Cependant, le domaine est insensible à la casse (example.com = 
                  EXAMPLE.COM) tandis que le chemin et les paramètres sont généralement sensibles à la casse 
                  selon le serveur. Par convention, utilisez les majuscules pour les codes hex (%2F plutôt que %2f).
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
