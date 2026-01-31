"use client";

import Link from "next/link";
import HashGenerator from "@/components/HashGenerator";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faBullseye, faCheck, faFileAlt, faFolderOpen, faKey, faLink, faLock } from '@fortawesome/free-solid-svg-icons';

export default function HashGeneratorPage() {
  return (
    <div className="min-h-screen flex flex-col p-4 sm:p-6 md:p-8">
      <header className="flex-shrink-0 mb-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-3">
          Générateur de Hash MD5 SHA256 en Ligne
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-400 text-sm sm:text-base max-w-3xl mx-auto">
          Générez des empreintes cryptographiques (hash) MD5, SHA-1, SHA-256 et SHA-512. 
          Outil gratuit pour vérifier l&apos;intégrité de fichiers et créer des checksums.
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
          <HashGenerator />
        </div>

        {/* SEO Content */}
        <section className="mt-8 space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Qu&apos;est-ce qu&apos;une fonction de hachage ?</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Une fonction de hachage (hash function) est un algorithme qui transforme des données de longueur 
              variable en une empreinte de taille fixe appelée &quot;hash&quot; ou &quot;digest&quot;. Cette 
              empreinte est unique pour chaque donnée d&apos;entrée : même un changement minuscule dans les données 
              produit un hash complètement différent. Les fonctions de hachage sont irréversibles - vous ne pouvez 
              pas retrouver les données originales à partir du hash.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Les algorithmes de hachage les plus courants sont MD5 (128 bits), SHA-1 (160 bits), SHA-256 (256 bits) 
              et SHA-512 (512 bits). MD5 et SHA-1 sont considérés comme obsolètes pour la sécurité car des vulnérabilités 
              ont été découvertes, mais restent utiles pour des checksums non-critiques. SHA-256 et SHA-512 font 
              partie de la famille SHA-2 et sont actuellement considérés comme sûrs pour la cryptographie.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Notre générateur de hash vous permet de créer rapidement des empreintes cryptographiques pour vos 
              données. Le calcul se fait localement dans votre navigateur pour garantir la confidentialité de vos 
              informations.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Cas d&apos;usage des fonctions de hachage</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faCheck} className="inline" /> Vérification d&apos;intégrité de fichiers</h3>
                <p>
                  Le hash permet de vérifier qu&apos;un fichier téléchargé n&apos;a pas été corrompu ou modifié. 
                  Les sites de téléchargement fournissent souvent un hash SHA-256 du fichier : vous calculez le 
                  hash de votre fichier téléchargé et le comparez. Si les hashs correspondent, le fichier est intact.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faKey} className="inline" /> Stockage sécurisé de mots de passe</h3>
                <p>
                  Les systèmes sécurisés ne stockent jamais les mots de passe en clair, mais leur hash. Lors de 
                  la connexion, le système hashe le mot de passe saisi et le compare au hash stocké. Même en cas 
                  de fuite de base de données, les mots de passe réels restent protégés (avec un salt approprié).
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faFileAlt} className="inline" /> Signatures numériques</h3>
                <p>
                  Dans la cryptographie asymétrique, on hashe d&apos;abord un document avant de le signer avec une 
                  clé privée. C&apos;est plus efficace que de signer tout le document, et le hash garantit que 
                  toute modification du document sera détectable.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faLink} className="inline" /> Blockchain et cryptomonnaies</h3>
                <p>
                  Les blockchains comme Bitcoin utilisent intensivement le hashing (SHA-256). Chaque bloc contient 
                  le hash du bloc précédent, créant une chaîne immuable. Le mining consiste à trouver un hash 
                  respectant certains critères de difficulté.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faFolderOpen} className="inline" /> Déduplication et cache</h3>
                <p>
                  Les systèmes de stockage utilisent des hashs pour identifier rapidement des fichiers dupliqués. 
                  Les CDN et caches web utilisent des hashs de contenu pour générer des URLs uniques et gérer 
                  efficacement le cache.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Comparaison des algorithmes de hachage</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="text-xl font-semibold mb-2">🔵 MD5 (Message Digest 5)</h3>
                <p className="mb-2">
                  Produit un hash de 128 bits (32 caractères hexadécimaux). Rapide mais cryptographiquement cassé - 
                  des collisions peuvent être générées. Ne plus utiliser pour la sécurité.
                </p>
                <p className="text-sm">
                  <strong>Usage recommandé :</strong> Checksums non-critiques, identifiants de cache. 
                  <strong> À éviter :</strong> Stockage de mots de passe, signatures, certificats.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🟡 SHA-1 (Secure Hash Algorithm 1)</h3>
                <p className="mb-2">
                  Produit un hash de 160 bits (40 caractères hexadécimaux). Plus robuste que MD5 mais également 
                  vulnérable aux collisions. Déprécié pour la sécurité depuis 2017.
                </p>
                <p className="text-sm">
                  <strong>Usage recommandé :</strong> Git commits, checksums. 
                  <strong> À éviter :</strong> Nouvelles applications de sécurité, certificats SSL.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🟢 SHA-256 (Secure Hash Algorithm 256)</h3>
                <p className="mb-2">
                  Produit un hash de 256 bits (64 caractères hexadécimaux). Partie de SHA-2, actuellement 
                  considéré comme sûr. Bon équilibre entre sécurité et performance.
                </p>
                <p className="text-sm">
                  <strong>Usage recommandé :</strong> Toute application de sécurité moderne, blockchain, 
                  certificats, signatures numériques.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🔵 SHA-512 (Secure Hash Algorithm 512)</h3>
                <p className="mb-2">
                  Produit un hash de 512 bits (128 caractères hexadécimaux). Le plus sécurisé de la famille SHA-2, 
                  mais plus lent. Utilisé quand la sécurité maximale est requise.
                </p>
                <p className="text-sm">
                  <strong>Usage recommandé :</strong> Applications hautement sécurisées, données sensibles, 
                  systèmes gouvernementaux ou militaires.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Propriétés importantes des fonctions de hachage</h2>
            <div className="space-y-3 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="font-semibold mb-1"><FontAwesomeIcon icon={faBullseye} className="inline" /> Déterminisme</h3>
                <p className="text-sm">
                  La même entrée produit toujours le même hash. C&apos;est crucial pour la vérification d&apos;intégrité 
                  et les comparaisons. Si vous hashez &quot;hello&quot; avec SHA-256, vous obtiendrez toujours le 
                  même résultat.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1"><FontAwesomeIcon icon={faBolt} className="inline" /> Rapidité de calcul</h3>
                <p className="text-sm">
                  Les bonnes fonctions de hachage sont rapides à calculer, permettant de hasher de grandes 
                  quantités de données efficacement. C&apos;est important pour les systèmes traitant beaucoup 
                  de données.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1"><FontAwesomeIcon icon={faLock} className="inline" /> Irréversibilité</h3>
                <p className="text-sm">
                  Il doit être informatiquement infaisable de retrouver l&apos;entrée originale à partir du hash. 
                  C&apos;est ce qui rend les hashs utiles pour protéger les données sensibles comme les mots de passe.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">🌊 Effet avalanche</h3>
                <p className="text-sm">
                  Un changement minuscule dans l&apos;entrée (un seul bit) doit produire un hash complètement 
                  différent. Cela garantit qu&apos;on ne peut pas deviner la similarité de deux entrées en comparant 
                  leurs hashs.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">🚫 Résistance aux collisions</h3>
                <p className="text-sm">
                  Il doit être extrêmement difficile de trouver deux entrées différentes produisant le même hash. 
                  C&apos;est vital pour la sécurité, car une collision permettrait de substituer des données.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Avantages de notre générateur de hash</h2>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Multi-algorithmes</strong> - MD5, SHA-1, SHA-256, SHA-512 dans un seul outil
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Génération instantanée</strong> - Tous les hashs calculés simultanément
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>100% Gratuit</strong> - Hashs illimités sans inscription
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Confidentialité totale</strong> - Calcul local, vos données restent privées
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Copie facile</strong> - Copiez chaque hash en un clic
                </span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
