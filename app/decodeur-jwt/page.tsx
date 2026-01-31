"use client";

import Link from "next/link";
import JWTDecoder from "@/components/JWTDecoder";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBox, faCheck, faExclamationTriangle, faKey, faLightbulb, faShieldAlt, faSquare, faSync } from '@fortawesome/free-solid-svg-icons';

export default function JWTDecoderPage() {
  return (
    <div className="min-h-screen flex flex-col p-4 sm:p-6 md:p-8">
      <header className="flex-shrink-0 mb-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-3">
          Décodeur JWT (JSON Web Token) en Ligne
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-400 text-sm sm:text-base max-w-3xl mx-auto">
          Décodez et inspectez vos JSON Web Tokens (JWT) instantanément. Visualisez le header, payload et signature 
          pour debugger vos systèmes d&apos;authentification. Outil gratuit et sécurisé côté client.
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
          <JWTDecoder />
        </div>

        {/* SEO Content */}
        <section className="mt-8 space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Qu&apos;est-ce qu&apos;un JWT ?</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Un JWT (JSON Web Token) est un standard ouvert (RFC 7519) qui définit un moyen compact et autonome 
              de transmettre des informations de manière sécurisée entre parties sous forme d&apos;objet JSON. 
              Ces informations peuvent être vérifiées et approuvées car elles sont signées numériquement. Les JWTs 
              sont principalement utilisés pour l&apos;authentification et l&apos;échange sécurisé d&apos;informations 
              dans les architectures web modernes, notamment les APIs REST et les applications single-page (SPA).
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Un JWT se compose de trois parties séparées par des points (.) : <strong>Header.Payload.Signature</strong>. 
              Le header contient le type de token (JWT) et l&apos;algorithme de signature utilisé (HMAC, RSA). 
              Le payload contient les &quot;claims&quot; (déclarations) - les données que vous souhaitez transmettre 
              comme l&apos;ID utilisateur, les permissions, l&apos;expiration. La signature garantit que le token 
              n&apos;a pas été altéré et permet de vérifier l&apos;identité de l&apos;émetteur.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Notre décodeur JWT fonctionne entièrement côté client dans votre navigateur - aucun token n&apos;est 
              envoyé à nos serveurs, garantissant une confidentialité totale. Collez simplement votre JWT pour 
              voir instantanément son contenu décodé en JSON lisible. L&apos;outil vous aide à debugger vos tokens, 
              vérifier les claims (exp, iat, iss, sub), comprendre leur structure, et identifier d&apos;éventuels 
              problèmes d&apos;expiration ou de format.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Structure d&apos;un JWT</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faSquare} className="inline" /> Header (En-tête)</h3>
                <p className="mb-2">
                  Le header identifie l&apos;algorithme utilisé pour générer la signature :
                </p>
                <pre className="bg-gray-900 text-gray-100 p-3 rounded text-sm overflow-x-auto mb-2">
{`{
  "alg": "HS256",    // Algorithme (HMAC SHA256)
  "typ": "JWT"       // Type de token
}`}
                </pre>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li><strong>alg</strong> : HS256, HS384, HS512 (HMAC), RS256, RS384, RS512 (RSA), ES256, ES384, ES512 (ECDSA)</li>
                  <li><strong>typ</strong> : Toujours &quot;JWT&quot; pour les JSON Web Tokens</li>
                  <li>Le header est encodé en Base64URL (première partie du token)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faBox} className="inline" /> Payload (Charge utile)</h3>
                <p className="mb-2">
                  Le payload contient les claims (déclarations) - les données transmises :
                </p>
                <pre className="bg-gray-900 text-gray-100 p-3 rounded text-sm overflow-x-auto mb-2">
{`{
  "sub": "1234567890",           // Subject (identifiant utilisateur)
  "name": "Jean Dupont",         // Données personnalisées
  "email": "jean@example.com",
  "admin": true,
  "iat": 1516239022,             // Issued At (timestamp création)
  "exp": 1516242622              // Expiration (timestamp)
}`}
                </pre>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li><strong>Claims réservés</strong> : iss (émetteur), sub (sujet), aud (audience), exp (expiration), nbf (not before), iat (issued at), jti (JWT ID)</li>
                  <li><strong>Claims publics</strong> : définis dans le registre IANA ou comme URIs pour éviter collisions</li>
                  <li><strong>Claims privés</strong> : personnalisés, définis entre les parties qui utilisent le JWT</li>
                  <li><FontAwesomeIcon icon={faExclamationTriangle} className="inline" /> Le payload est seulement encodé, PAS chiffré - ne stockez jamais de secrets ici !</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faKey} className="inline" /> Signature</h3>
                <p className="mb-2">
                  La signature garantit l&apos;intégrité et l&apos;authenticité du token :
                </p>
                <pre className="bg-gray-900 text-gray-100 p-3 rounded text-sm overflow-x-auto mb-2">
{`HMACSHA256(
  base64UrlEncode(header) + "." + base64UrlEncode(payload),
  secret
)`}
                </pre>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Créée en combinant header et payload encodés, puis en les signant avec la clé secrète</li>
                  <li>Permet de vérifier que le JWT n&apos;a pas été modifié en transit</li>
                  <li>Seul le serveur possédant la clé secrète peut générer une signature valide</li>
                  <li>La signature ne peut pas être inversée pour obtenir la clé secrète</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">JWT et authentification</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faSync} className="inline" /> Flux d&apos;authentification JWT</h3>
                <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded space-y-2 text-sm">
                  <p><strong>1. Connexion</strong></p>
                  <p className="pl-4">L&apos;utilisateur envoie ses identifiants (email/password) au serveur d&apos;authentification.</p>
                  
                  <p className="mt-2"><strong>2. Génération du JWT</strong></p>
                  <p className="pl-4">Le serveur vérifie les identifiants, crée un JWT contenant l&apos;ID utilisateur et ses permissions, le signe avec sa clé secrète, et le renvoie au client.</p>
                  
                  <p className="mt-2"><strong>3. Stockage côté client</strong></p>
                  <p className="pl-4">Le client stocke le JWT (localStorage, sessionStorage, ou cookie httpOnly sécurisé).</p>
                  
                  <p className="mt-2"><strong>4. Requêtes authentifiées</strong></p>
                  <p className="pl-4">Pour chaque requête API, le client inclut le JWT dans le header Authorization : 
                  <code className="bg-gray-900 text-gray-100 px-1 rounded ml-1">Bearer &lt;token&gt;</code></p>
                  
                  <p className="mt-2"><strong>5. Vérification</strong></p>
                  <p className="pl-4">Le serveur vérifie la signature du JWT, contrôle l&apos;expiration, et extrait les informations utilisateur sans requête en base de données.</p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faCheck} className="inline" /> Avantages des JWT</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>Stateless</strong> : Le serveur n&apos;a pas besoin de stocker les sessions - tout est dans le token</li>
                  <li><strong>Scalabilité</strong> : Parfait pour les architectures microservices et distribuées</li>
                  <li><strong>Performance</strong> : Évite les lookups en base de données pour chaque requête authentifiée</li>
                  <li><strong>Mobilité</strong> : Peut être transmis facilement entre domaines et services</li>
                  <li><strong>Compact</strong> : Format JSON compact, facile à transmettre via URL, POST ou header HTTP</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faExclamationTriangle} className="inline" /> Limitations et considérations</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>Révocation difficile</strong> : Impossible d&apos;invalider un JWT avant son expiration sans infrastructure additionnelle</li>
                  <li><strong>Taille</strong> : Plus volumineux qu&apos;un simple ID de session (payload peut être large)</li>
                  <li><strong>Exposition de données</strong> : Le payload est visible - n&apos;y stockez jamais de données sensibles</li>
                  <li><strong>Expiration</strong> : Nécessite une stratégie de refresh token pour les longues sessions</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Sécurité et bonnes pratiques</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faShieldAlt} className="inline" /> Sécuriser vos JWT</h3>
                <div className="space-y-2 text-sm">
                  <div>
                    <p className="font-semibold">1. Utilisez HTTPS exclusivement</p>
                    <p className="pl-4">Les JWT en HTTP peuvent être interceptés (attaque man-in-the-middle). HTTPS est obligatoire en production.</p>
                  </div>
                  <div>
                    <p className="font-semibold mt-2">2. Définissez une expiration courte</p>
                    <p className="pl-4">Limitez exp à 15 minutes - 1 heure maximum. Implémentez un refresh token pour prolonger la session sans redemander le mot de passe.</p>
                  </div>
                  <div>
                    <p className="font-semibold mt-2">3. Validez toujours la signature côté serveur</p>
                    <p className="pl-4">Ne faites JAMAIS confiance à un JWT sans vérifier sa signature. Utilisez des bibliothèques éprouvées pour la validation.</p>
                  </div>
                  <div>
                    <p className="font-semibold mt-2">4. Protégez vos clés secrètes</p>
                    <p className="pl-4">Stockez les clés de signature dans des variables d&apos;environnement ou un gestionnaire de secrets. Jamais dans le code ou Git.</p>
                  </div>
                  <div>
                    <p className="font-semibold mt-2">5. Utilisez des algorithmes robustes</p>
                    <p className="pl-4">Préférez RS256 (clés asymétriques) pour les systèmes critiques. Évitez &quot;none&quot; qui désactive la signature.</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">💾 Où stocker les JWT côté client ?</h3>
                <div className="space-y-2 text-sm">
                  <p><strong>🍪 Cookies httpOnly (Recommandé pour le web)</strong></p>
                  <ul className="list-disc pl-6 mb-2">
                    <li>Inaccessible au JavaScript (protection contre XSS)</li>
                    <li>Flags Secure et SameSite pour protection CSRF</li>
                    <li>Envoyé automatiquement avec chaque requête au domaine</li>
                  </ul>
                  
                  <p><strong><FontAwesomeIcon icon={faBox} className="inline" /> localStorage / sessionStorage</strong></p>
                  <ul className="list-disc pl-6 mb-2">
                    <li>Accessible au JavaScript (vulnérable aux XSS)</li>
                    <li>Pratique pour les SPA mais moins sécurisé</li>
                    <li>sessionStorage se nettoie à la fermeture de l&apos;onglet</li>
                  </ul>
                  
                  <p><strong><FontAwesomeIcon icon={faLightbulb} className="inline" /> Mémoire JavaScript (Plus sécurisé pour les SPA sensibles)</strong></p>
                  <ul className="list-disc pl-6">
                    <li>Token perdu au refresh de page (nécessite refresh token)</li>
                    <li>Immune aux XSS persistantes et au vol via localStorage</li>
                    <li>Complexe à implémenter correctement</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">JWT en pratique : exemples de code</h2>
            <div className="space-y-3 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="font-semibold mb-1">Node.js (avec jsonwebtoken)</h3>
                <pre className="bg-gray-900 text-gray-100 p-3 rounded text-xs overflow-x-auto mt-2">
{`const jwt = require('jsonwebtoken');

// Générer un JWT
const token = jwt.sign(
  { userId: 123, email: 'user@example.com', admin: false },
  process.env.JWT_SECRET,
  { expiresIn: '1h', issuer: 'monapp.com' }
);

// Vérifier et décoder un JWT
try {
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  console.log(decoded.userId); // 123
} catch (err) {
  console.error('JWT invalide:', err.message);
}`}
                </pre>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Python (avec PyJWT)</h3>
                <pre className="bg-gray-900 text-gray-100 p-3 rounded text-xs overflow-x-auto mt-2">
{`import jwt
import datetime
import os

# Générer un JWT
payload = {
    'user_id': 123,
    'email': 'user@example.com',
    'exp': datetime.datetime.utcnow() + datetime.timedelta(hours=1),
    'iat': datetime.datetime.utcnow()
}
token = jwt.encode(payload, os.getenv('JWT_SECRET'), algorithm='HS256')

# Vérifier et décoder
try:
    decoded = jwt.decode(token, os.getenv('JWT_SECRET'), algorithms=['HS256'])
    print(decoded['user_id'])  # 123
except jwt.ExpiredSignatureError:
    print('Token expiré')
except jwt.InvalidTokenError:
    print('Token invalide')`}
                </pre>
              </div>
              <div>
                <h3 className="font-semibold mb-1">JavaScript Frontend (envoi avec fetch)</h3>
                <pre className="bg-gray-900 text-gray-100 p-3 rounded text-xs overflow-x-auto mt-2">
{`// Récupérer le token du localStorage
const token = localStorage.getItem('jwt_token');

// Envoyer une requête authentifiée
fetch('https://api.example.com/user/profile', {
  method: 'GET',
  headers: {
    'Authorization': \`Bearer \${token}\`,
    'Content-Type': 'application/json'
  }
})
.then(response => {
  if (response.status === 401) {
    // Token expiré ou invalide - rediriger vers login
    window.location.href = '/login';
  }
  return response.json();
})
.then(data => console.log(data));`}
                </pre>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Refresh tokens et renouvellement</h2>
            <div className="space-y-3 text-gray-700 dark:text-gray-300">
              <p className="text-sm">
                Les access tokens JWT ont généralement une durée de vie courte (15-60 minutes) pour limiter 
                l&apos;exposition en cas de vol. Pour éviter de redemander le mot de passe fréquemment, on utilise 
                un système de refresh tokens :
              </p>
              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded text-sm space-y-2">
                <p><strong>Stratégie Access Token + Refresh Token :</strong></p>
                <ol className="list-decimal pl-6 space-y-1">
                  <li>À la connexion, le serveur génère un access token JWT (exp: 15 min) ET un refresh token (exp: 7-30 jours)</li>
                  <li>Le client utilise l&apos;access token pour les requêtes API normales</li>
                  <li>Quand l&apos;access token expire (401), le client envoie le refresh token à /auth/refresh</li>
                  <li>Le serveur vérifie le refresh token (souvent stocké en base), génère un nouvel access token</li>
                  <li>Le client reçoit le nouvel access token et continue ses requêtes</li>
                  <li>Si le refresh token expire ou est révoqué, l&apos;utilisateur doit se reconnecter</li>
                </ol>
              </div>
              <p className="text-sm mt-3">
                <strong>Avantages :</strong> Sécurité accrue (access token court-circuite le vol), possibilité de 
                révoquer les refresh tokens en base de données (logout forcé), meilleure expérience utilisateur 
                (sessions longues sans ressaisie du mot de passe).
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Questions fréquentes sur les JWT</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Les JWT sont-ils chiffrés ou seulement signés ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Les JWT standards sont SIGNÉS (pour garantir l&apos;intégrité) mais PAS chiffrés. Le header et 
                  le payload sont simplement encodés en Base64URL - n&apos;importe qui peut les décoder et lire 
                  leur contenu. Ne stockez jamais de mots de passe, numéros de carte bancaire ou secrets dans un 
                  JWT. Pour du chiffrement, utilisez JWE (JSON Web Encryption), mais c&apos;est beaucoup plus rare.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Comment révoquer un JWT avant son expiration ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Les JWT sont stateless par nature, donc impossibles à révoquer directement. Solutions : 1) Maintenir 
                  une blacklist de tokens révoqués en base/cache Redis, 2) Utiliser des tokens courts (15 min) + refresh 
                  token révocable, 3) Implémenter un système de versioning (changer le secret invalide tous les anciens 
                  tokens), 4) Vérifier un statut utilisateur côté serveur à chaque requête critique.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Quelle différence entre JWT et OAuth2 ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  OAuth2 est un protocole/framework d&apos;autorisation (définit comment obtenir l&apos;accès à des 
                  ressources). JWT est un format de token (définit comment structurer les données). Ils sont souvent 
                  utilisés ensemble : OAuth2 peut utiliser des JWT comme access tokens. OAuth2 gère le flow 
                  d&apos;authentification complet, JWT est juste le conteneur des informations d&apos;autorisation.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Faut-il toujours vérifier l&apos;expiration (exp) ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  OUI, absolument ! La vérification de exp est critique pour la sécurité. Les bibliothèques JWT 
                  valident automatiquement exp lors de la vérification, mais assurez-vous de ne pas désactiver cette 
                  validation. Un token volé ne doit pas être utilisable indéfiniment. Vérifiez aussi iat (issued at) 
                  pour détecter les tokens trop anciens ou futures et nbf (not before) si vous l&apos;utilisez.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
