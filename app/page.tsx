import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Outils Gratuits en Ligne - Timer, Calculatrices, Générateurs et Plus",
  description: "Suite d'outils gratuits en ligne : Timer Pomodoro, compresseur d'image, générateur UUID, JSON formatter, minificateur CSS/JS, éditeur Markdown, calculatrice scientifique et générateur IBAN. Outils professionnels pour développeurs et travailleurs.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col p-4 sm:p-8">
      <main className="flex flex-col gap-12 max-w-7xl mx-auto w-full">
        {/* Hero Section */}
        <section className="text-center py-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-balance mb-4">
            Outils Gratuits en Ligne - Productivité & Développement
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-6">
            Suite complète d&apos;outils professionnels 100% gratuits pour améliorer votre productivité, 
            optimiser votre code et faciliter votre développement web.
          </p>
        </section>

        {/* Outils de Productivité */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-center">🎯 Outils de Productivité</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-4">
            <Link href="/timer" className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all border-2 border-transparent hover:border-blue-500">
              <h3 className="text-2xl font-semibold mb-3">⏱️ Timer & Pomodoro</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-3">
                Chronomètre précis et technique Pomodoro pour maximiser votre concentration et productivité
              </p>
              <span className="text-blue-600 dark:text-blue-400 text-sm font-semibold">En savoir plus →</span>
            </Link>
            
            <Link href="/calculatrice-fiscale" className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all border-2 border-transparent hover:border-green-500">
              <h3 className="text-2xl font-semibold mb-3">🧮 Calculatrice Fiscale</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-3">
                Calculez votre impôt sur le revenu et simulez votre fiscalité 2025-2026
              </p>
              <span className="text-green-600 dark:text-green-400 text-sm font-semibold">En savoir plus →</span>
            </Link>
            
            <Link href="/calculatrice-avancee" className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all border-2 border-transparent hover:border-purple-500">
              <h3 className="text-2xl font-semibold mb-3">🔬 Calculatrice Scientifique</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-3">
                Fonctions trigonométriques, logarithmes et calculs avancés pour vos projets
              </p>
              <span className="text-purple-600 dark:text-purple-400 text-sm font-semibold">En savoir plus →</span>
            </Link>
          </div>
        </section>

        {/* Outils pour Développeurs */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-center">💻 Outils pour Développeurs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-4">
            <Link href="/json-formatter" className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all border-2 border-transparent hover:border-blue-500">
              <h3 className="text-2xl font-semibold mb-3">📋 JSON Formatter</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-3">
                Formatez, validez et minifiez vos fichiers JSON avec syntaxe colorée
              </p>
              <span className="text-blue-600 dark:text-blue-400 text-sm font-semibold">En savoir plus →</span>
            </Link>
            
            <Link href="/minificateur-css-js" className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all border-2 border-transparent hover:border-orange-500">
              <h3 className="text-2xl font-semibold mb-3">🗜️ Minificateur CSS/JS</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-3">
                Compressez vos fichiers CSS et JavaScript pour optimiser les performances
              </p>
              <span className="text-orange-600 dark:text-orange-400 text-sm font-semibold">En savoir plus →</span>
            </Link>
            
            <Link href="/editeur-markdown" className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all border-2 border-transparent hover:border-indigo-500">
              <h3 className="text-2xl font-semibold mb-3">📝 Éditeur Markdown</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-3">
                Éditeur Markdown en ligne avec aperçu en temps réel et export
              </p>
              <span className="text-indigo-600 dark:text-indigo-400 text-sm font-semibold">En savoir plus →</span>
            </Link>
          </div>
        </section>

        {/* Outils Générateurs */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-center">🎲 Générateurs & Utilitaires</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-4">
            <Link href="/generateur-uuid" className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all border-2 border-transparent hover:border-cyan-500">
              <h3 className="text-2xl font-semibold mb-3">🎲 Générateur UUID</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-3">
                Créez des identifiants uniques universels v1 et v4 en masse
              </p>
              <span className="text-cyan-600 dark:text-cyan-400 text-sm font-semibold">En savoir plus →</span>
            </Link>
            
            <Link href="/generateur-iban" className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all border-2 border-transparent hover:border-emerald-500">
              <h3 className="text-2xl font-semibold mb-3">🏦 Générateur IBAN</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-3">
                Générez des numéros IBAN de test pour 8 pays européens
              </p>
              <span className="text-emerald-600 dark:text-emerald-400 text-sm font-semibold">En savoir plus →</span>
            </Link>
            
            <Link href="/compresseur-image" className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all border-2 border-transparent hover:border-pink-500">
              <h3 className="text-2xl font-semibold mb-3">🖼️ Compresseur d&apos;Images</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-3">
                Réduisez la taille de vos images JPG, PNG et WebP sans perte visible
              </p>
              <span className="text-pink-600 dark:text-pink-400 text-sm font-semibold">En savoir plus →</span>
            </Link>
          </div>
        </section>

        {/* À propos du site */}
        <section className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 mt-8">
          <h2 className="text-3xl font-bold mb-6 text-center">À propos de notre suite d&apos;outils</h2>
          <div className="max-w-4xl mx-auto space-y-6 text-gray-700 dark:text-gray-300">
            <p className="text-lg leading-relaxed">
              Notre plateforme regroupe une <strong>collection complète d&apos;outils gratuits en ligne</strong> conçus 
              pour répondre aux besoins des <strong>professionnels</strong>, <strong>développeurs</strong>, 
              <strong>étudiants</strong> et <strong>entrepreneurs</strong>. Tous nos outils fonctionnent 
              entièrement dans votre navigateur, garantissant la <strong>confidentialité</strong> et 
              la <strong>sécurité</strong> de vos données.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
              <div className="text-center p-4">
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">10+</div>
                <div className="text-sm font-semibold">Outils Gratuits</div>
              </div>
              <div className="text-center p-4">
                <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">100%</div>
                <div className="text-sm font-semibold">Gratuit & Sans Pub Intrusive</div>
              </div>
              <div className="text-center p-4">
                <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">0</div>
                <div className="text-sm font-semibold">Inscription Requise</div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold mb-4">🎯 Notre Mission</h3>
              <p className="leading-relaxed">
                Nous croyons que les outils professionnels de qualité devraient être accessibles à tous, 
                gratuitement. C&apos;est pourquoi nous développons et maintenons cette suite d&apos;outils 
                avec une attention particulière portée à la <strong>simplicité d&apos;utilisation</strong>, 
                la <strong>performance</strong> et le <strong>respect de votre vie privée</strong>.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold mb-4">🔒 Confidentialité & Sécurité</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold mt-1">✓</span>
                  <span><strong>Traitement local</strong> - Toutes les opérations se font dans votre navigateur</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold mt-1">✓</span>
                  <span><strong>Aucune collecte de données</strong> - Vos fichiers et informations restent privés</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold mt-1">✓</span>
                  <span><strong>Code sécurisé</strong> - Protection contre les vulnérabilités XSS et injections</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold mt-1">✓</span>
                  <span><strong>HTTPS</strong> - Connexion sécurisée pour toutes vos interactions</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold mb-4">💡 Pourquoi Choisir Nos Outils ?</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold mt-1">→</span>
                  <span><strong>Sans installation</strong> - Utilisez directement depuis votre navigateur</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold mt-1">→</span>
                  <span><strong>Multi-plateforme</strong> - Compatible Windows, Mac, Linux, iOS et Android</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold mt-1">→</span>
                  <span><strong>Toujours à jour</strong> - Nouvelles fonctionnalités ajoutées régulièrement</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold mt-1">→</span>
                  <span><strong>Open Source</strong> - Code transparent et vérifiable</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center py-8">
          <h2 className="text-2xl font-bold mb-4">Commencez dès maintenant</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
            Choisissez l&apos;outil dont vous avez besoin ci-dessus et commencez à l&apos;utiliser 
            immédiatement. Aucune inscription, aucun téléchargement, 100% gratuit.
          </p>
          <div className="flex gap-4 items-center justify-center flex-wrap">
            <Link
              href="/timer"
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-blue-600 text-white gap-2 hover:bg-blue-700 text-base sm:text-lg h-12 sm:h-14 px-6 sm:px-8 focus-visible:outline-2 focus-visible:outline-blue-500"
            >
              Timer & Pomodoro
            </Link>
            <Link
              href="/json-formatter"
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-indigo-600 text-white gap-2 hover:bg-indigo-700 text-base sm:text-lg h-12 sm:h-14 px-6 sm:px-8 focus-visible:outline-2 focus-visible:outline-indigo-500"
            >
              JSON Formatter
            </Link>
            <Link
              href="/guide"
              className="rounded-full border border-solid border-gray-300 dark:border-gray-600 transition-colors flex items-center justify-center bg-transparent text-gray-900 dark:text-gray-100 gap-2 hover:bg-gray-100 dark:hover:bg-gray-800 text-base sm:text-lg h-12 sm:h-14 px-6 sm:px-8 focus-visible:outline-2 focus-visible:outline-gray-500"
            >
              Consulter le Guide
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
