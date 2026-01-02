import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Timer Focus Gratuit pour Travail - Pomodoro & Productivité",
  description: "Timer en ligne gratuit avec technique Pomodoro pour améliorer votre productivité et concentration au travail. Outil de gestion du temps simple et efficace pour travailleurs, étudiants et freelances.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-8">
      <main className="flex flex-col gap-8 items-center text-center max-w-4xl">
        <h1 className="text-4xl sm:text-5xl font-bold text-balance">
          Timer Focus Gratuit pour Travail - Technique Pomodoro
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-2xl">
          Améliorez votre productivité avec notre timer en ligne gratuit et la technique Pomodoro. 
          Outil simple et efficace pour gérer votre temps de travail et augmenter votre concentration.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-3xl text-left my-4">
          <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">⏱️ Timer Précis</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Chronomètre avec affichage heures, minutes et secondes pour suivre votre temps de travail
            </p>
          </div>
          <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">🍅 Pomodoro</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Technique Pomodoro intégrée : 25 min de focus + 5 min de pause pour une productivité optimale
            </p>
          </div>
          <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">📊 Calculateur</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Calculateur de temps de travail pour planifier et suivre vos sessions productives
            </p>
          </div>
        </div>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <Link
            href="/timer"
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-blue-600 text-white gap-2 hover:bg-blue-700 text-base sm:text-lg h-12 sm:h-14 px-6 sm:px-8 focus-visible:outline-2 focus-visible:outline-blue-500"
          >
            Commencer le Timer Gratuit
          </Link>
        </div>

        <section className="mt-8 text-left max-w-2xl">
          <h2 className="text-2xl font-bold mb-4">Pourquoi utiliser notre Timer Focus ?</h2>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">✓</span>
              <span><strong>100% Gratuit</strong> - Aucune inscription requise, utilisation illimitée</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">✓</span>
              <span><strong>Simple et Efficace</strong> - Interface intuitive pour démarrer immédiatement</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">✓</span>
              <span><strong>Technique Pomodoro</strong> - Méthode scientifiquement prouvée pour la productivité</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">✓</span>
              <span><strong>Notifications Actives</strong> - Alertes de bureau pour ne jamais manquer une pause</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">✓</span>
              <span><strong>Sauvegarde Automatique</strong> - Votre progression est toujours préservée</span>
            </li>
          </ul>
        </section>

        <section className="mt-8 text-left max-w-2xl">
          <h2 className="text-2xl font-bold mb-4">Comment utiliser la technique Pomodoro ?</h2>
          <ol className="space-y-3 text-gray-700 dark:text-gray-300 list-decimal list-inside">
            <li>Choisissez une tâche à accomplir</li>
            <li>Lancez le timer Pomodoro pour 25 minutes de travail concentré</li>
            <li>Travaillez sans interruption jusqu&apos;à la sonnerie</li>
            <li>Prenez une pause de 5 minutes pour vous ressourcer</li>
            <li>Après 4 pomodoros, prenez une pause plus longue de 15-30 minutes</li>
          </ol>
        </section>
      </main>
    </div>
  );
}
