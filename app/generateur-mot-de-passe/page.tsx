"use client";

import Link from "next/link";
import PasswordGenerator from "@/components/PasswordGenerator";

export default function PasswordGeneratorPage() {
  return (
    <div className="min-h-screen flex flex-col p-4 sm:p-6 md:p-8">
      <header className="flex-shrink-0 mb-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-3">
          Générateur de Mot de Passe Sécurisé Gratuit
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-400 text-sm sm:text-base max-w-3xl mx-auto">
          Créez des mots de passe forts et sécurisés instantanément. Générateur gratuit avec options de personnalisation 
          pour protéger vos comptes en ligne avec des mots de passe complexes et aléatoires.
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
          <PasswordGenerator />
        </div>

        {/* SEO Content */}
        <section className="mt-8 space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Qu&apos;est-ce qu&apos;un mot de passe sécurisé ?</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Un mot de passe sécurisé est une combinaison de caractères conçue pour être difficile à deviner ou à 
              craquer par des attaques informatiques. Il doit contenir un mélange de lettres majuscules et minuscules, 
              de chiffres et de caractères spéciaux pour maximiser sa complexité et sa résistance aux tentatives de piratage.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              La longueur du mot de passe est cruciale : un mot de passe de 12 caractères est exponentiellement plus 
              sûr qu&apos;un mot de passe de 8 caractères. Chaque caractère supplémentaire augmente considérablement 
              le nombre de combinaisons possibles, rendant les attaques par force brute pratiquement impossibles.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Notre générateur de mot de passe crée des mots de passe aléatoires et cryptographiquement sécurisés 
              directement dans votre navigateur. Aucune donnée n&apos;est envoyée à nos serveurs, garantissant la 
              confidentialité totale de vos mots de passe générés.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Critères d&apos;un mot de passe fort</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="text-xl font-semibold mb-2">📏 Longueur minimale de 12 caractères</h3>
                <p>
                  Plus un mot de passe est long, plus il est difficile à craquer. Nous recommandons au minimum 12 
                  caractères, mais 16 caractères ou plus est idéal pour les comptes sensibles comme les emails, 
                  banques en ligne et réseaux sociaux.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🔤 Mélange de types de caractères</h3>
                <p>
                  Un mot de passe robuste doit combiner : lettres majuscules (A-Z), lettres minuscules (a-z), 
                  chiffres (0-9) et caractères spéciaux (!@#$%^&*). Cette diversité augmente exponentiellement 
                  le nombre de combinaisons possibles.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🎲 Aléatoire et imprévisible</h3>
                <p>
                  Évitez les mots du dictionnaire, les suites logiques (123456, abcdef) et les informations 
                  personnelles (dates de naissance, noms). Un bon mot de passe doit être généré aléatoirement 
                  et ne contenir aucun motif prévisible.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🔑 Unique pour chaque compte</h3>
                <p>
                  Ne réutilisez jamais le même mot de passe sur plusieurs sites. Si un site est compromis, tous 
                  vos autres comptes utilisant le même mot de passe sont également en danger. Utilisez un 
                  gestionnaire de mots de passe pour stocker vos mots de passe uniques.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Bonnes pratiques de sécurité des mots de passe</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="text-xl font-semibold mb-2">💾 Utilisez un gestionnaire de mots de passe</h3>
                <p>
                  Les gestionnaires comme LastPass, 1Password, Bitwarden ou KeePass stockent tous vos mots de 
                  passe de manière sécurisée et chiffrée. Vous n&apos;avez qu&apos;à retenir un seul mot de passe 
                  maître, et le gestionnaire s&apos;occupe du reste.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🔐 Activez l&apos;authentification à deux facteurs (2FA)</h3>
                <p>
                  Même avec un mot de passe fort, activez la 2FA quand c&apos;est possible. Cette couche de 
                  sécurité supplémentaire nécessite un deuxième élément de vérification (code SMS, application 
                  d&apos;authentification) pour accéder à votre compte.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🔄 Changez régulièrement vos mots de passe</h3>
                <p>
                  Bien qu&apos;un mot de passe fort puisse durer longtemps, il est sage de le changer périodiquement, 
                  surtout pour les comptes sensibles. Changez immédiatement vos mots de passe si vous soupçonnez 
                  une violation de sécurité.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">⚠️ Méfiez-vous du phishing</h3>
                <p>
                  Même le meilleur mot de passe ne vous protège pas si vous le donnez à un site malveillant. 
                  Vérifiez toujours l&apos;URL du site et ne cliquez pas sur des liens suspects dans les emails.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Comment utiliser notre générateur de mots de passe ?</h2>
            <div className="space-y-3 text-gray-700 dark:text-gray-300">
              <p className="font-semibold">Étapes simples pour créer un mot de passe sécurisé :</p>
              <ol className="list-decimal pl-6 space-y-2">
                <li>
                  <strong>Choisissez la longueur</strong> - Ajustez le curseur pour sélectionner la longueur 
                  désirée (8 à 128 caractères). Nous recommandons au minimum 16 caractères.
                </li>
                <li>
                  <strong>Sélectionnez les types de caractères</strong> - Cochez les options pour inclure 
                  majuscules, minuscules, chiffres et/ou caractères spéciaux selon vos besoins.
                </li>
                <li>
                  <strong>Générez le mot de passe</strong> - Cliquez sur le bouton de génération pour créer 
                  instantanément un mot de passe aléatoire sécurisé.
                </li>
                <li>
                  <strong>Copiez et utilisez</strong> - Utilisez le bouton de copie pour copier le mot de passe 
                  dans votre presse-papiers, puis collez-le là où vous en avez besoin.
                </li>
                <li>
                  <strong>Stockez-le en sécurité</strong> - Enregistrez votre mot de passe dans un gestionnaire 
                  de mots de passe. Ne le notez jamais en clair dans un fichier texte ou sur papier.
                </li>
              </ol>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Pourquoi utiliser notre générateur de mot de passe ?</h2>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>100% Gratuit et illimité</strong> - Générez autant de mots de passe que nécessaire
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Confidentialité totale</strong> - Génération côté client, aucune donnée envoyée à nos serveurs
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Personnalisable</strong> - Ajustez la longueur et les types de caractères selon vos besoins
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Cryptographiquement sécurisé</strong> - Utilise des algorithmes de génération aléatoire robustes
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Facile à utiliser</strong> - Interface intuitive et copie en un clic
                </span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
