"use client";

import Link from "next/link";
import Base64EncoderDecoder from "@/components/Base64EncoderDecoder";

export default function Base64EncoderDecoderPage() {
  return (
    <div className="min-h-screen flex flex-col p-4 sm:p-6 md:p-8">
      <header className="flex-shrink-0 mb-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-3">
          Encodeur et Décodeur Base64 en Ligne Gratuit
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-400 text-sm sm:text-base max-w-3xl mx-auto">
          Encodez et décodez vos données en Base64 instantanément. Outil gratuit pour convertir du texte, 
          des URLs ou des données binaires en format Base64 et vice-versa.
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
          <Base64EncoderDecoder />
        </div>

        {/* SEO Content */}
        <section className="mt-8 space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Qu&apos;est-ce que le Base64 ?</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Base64 est un système d&apos;encodage qui permet de représenter des données binaires sous forme de 
              texte ASCII. Il convertit des données binaires (images, fichiers, etc.) en une chaîne de caractères 
              composée uniquement de 64 caractères alphanumériques : A-Z, a-z, 0-9, + et /. Le caractère = est 
              utilisé comme padding à la fin si nécessaire.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              L&apos;encodage Base64 n&apos;est pas une méthode de chiffrement ou de sécurisation des données, 
              mais plutôt un moyen de représenter des données binaires dans un format texte compatible avec les 
              systèmes qui ne supportent que du texte ASCII. Les données encodées en Base64 sont facilement 
              décodables et ne doivent pas être utilisées pour masquer des informations sensibles.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Notre outil d&apos;encodage et décodage Base64 fonctionne entièrement côté client dans votre 
              navigateur. Vos données restent privées et ne sont jamais transmises à nos serveurs, garantissant 
              une confidentialité totale de vos informations.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Cas d&apos;usage du Base64</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="text-xl font-semibold mb-2">🖼️ Data URLs pour les images</h3>
                <p>
                  Base64 permet d&apos;intégrer des images directement dans le HTML ou CSS via des data URLs. 
                  Au lieu de référencer un fichier externe, l&apos;image est encodée en Base64 et incluse 
                  directement : <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                  data:image/png;base64,iVBORw0KGgo...</code>. Pratique pour les petites icônes et logos.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">📧 Pièces jointes email</h3>
                <p>
                  Les emails utilisent Base64 pour encoder les pièces jointes. Le protocole SMTP étant conçu 
                  pour le texte, Base64 permet de transmettre des fichiers binaires (images, PDFs, documents) 
                  de manière fiable à travers le système de messagerie électronique.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🔑 Authentification et tokens</h3>
                <p>
                  Les tokens d&apos;authentification, notamment dans les en-têtes HTTP Authorization (Basic Auth), 
                  utilisent Base64. Les JWT (JSON Web Tokens) encodent également leurs segments en Base64URL, 
                  une variante de Base64 adaptée aux URLs.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">📡 Transmission de données</h3>
                <p>
                  Dans les APIs REST et les formats de données comme JSON ou XML, Base64 est utilisé pour 
                  transmettre des données binaires de manière sûre. C&apos;est particulièrement utile quand on 
                  doit inclure des fichiers ou des données binaires dans des formats textuels.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">💾 Stockage de données</h3>
                <p>
                  Base64 est utilisé pour stocker des données binaires dans des bases de données textuelles ou 
                  des fichiers de configuration. Par exemple, stocker de petites images ou certificats dans des 
                  fichiers JSON ou YAML.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Comment fonctionne l&apos;encodage Base64 ?</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="text-xl font-semibold mb-2">🔢 Principe de conversion</h3>
                <p className="mb-2">
                  L&apos;encodage Base64 fonctionne en groupant les données par paquets de 3 octets (24 bits), 
                  puis en les divisant en 4 groupes de 6 bits. Chaque groupe de 6 bits (valeur de 0 à 63) est 
                  ensuite converti en un caractère de l&apos;alphabet Base64.
                </p>
                <p>
                  Par exemple, le texte &quot;Hello&quot; en ASCII donne les octets : 72, 101, 108, 108, 111. 
                  Ces octets sont regroupés et convertis pour donner : SGVsbG8=
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">📏 Augmentation de taille</h3>
                <p>
                  L&apos;encodage Base64 augmente la taille des données d&apos;environ 33%. Des données de 3 octets 
                  deviennent 4 caractères Base64. Cette augmentation est le prix à payer pour représenter des 
                  données binaires en format texte ASCII pur.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">= Padding</h3>
                <p>
                  Si les données sources ne sont pas un multiple de 3 octets, le caractère = est ajouté à la 
                  fin pour compléter. Un = indique qu&apos;il manque 2 bits, deux == indiquent qu&apos;il manque 
                  4 bits. C&apos;est pourquoi vous voyez souvent des chaînes Base64 se terminer par = ou ==.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Base64 vs Base64URL</h2>
            <div className="space-y-3 text-gray-700 dark:text-gray-300">
              <p>
                <strong>Base64 standard</strong> utilise les caractères + et / qui posent problème dans les URLs 
                car ils ont une signification spéciale. Le padding = peut aussi causer des soucis dans certains 
                contextes.
              </p>
              <p>
                <strong>Base64URL</strong> est une variante adaptée aux URLs qui remplace :
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>+ par - (moins)</li>
                <li>/ par _ (underscore)</li>
                <li>Le padding = est optionnel et souvent omis</li>
              </ul>
              <p>
                Base64URL est utilisé dans les JWT (JSON Web Tokens), les paramètres d&apos;URL et autres 
                contextes où les données encodées doivent être URL-safe.
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Avantages de notre encodeur Base64</h2>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Bidirectionnel</strong> - Encodez et décodez dans la même interface
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
                  <strong>Traitement local</strong> - Vos données restent dans votre navigateur
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Rapide et efficace</strong> - Conversion instantanée même pour de grandes quantités de données
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Copie facile</strong> - Copiez les résultats en un clic
                </span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
