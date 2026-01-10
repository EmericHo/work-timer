import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page non trouvée - 404",
  description: "La page que vous recherchez n'existe pas. Retournez à l'accueil ou au timer.",
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-8">
      <main className="flex flex-col gap-8 items-center text-center max-w-2xl">
        <div className="text-8xl sm:text-9xl font-bold text-blue-600 dark:text-blue-400">
          404
        </div>
        
        <h1 className="text-3xl sm:text-4xl font-bold text-balance">
          Page non trouvée
        </h1>
        
        <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300">
          Désolé, la page que vous recherchez n&apos;existe pas ou a été déplacée.
        </p>

        <div className="flex gap-4 items-center flex-col sm:flex-row mt-4">
          <Link
            href="/timer"
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-blue-600 text-white gap-2 hover:bg-blue-700 text-base sm:text-lg h-12 sm:h-14 px-6 sm:px-8 focus-visible:outline-2 focus-visible:outline-blue-500"
          >
            Aller au Timer
          </Link>
          
          <Link
            href="/"
            className="rounded-full border border-solid border-gray-300 dark:border-gray-600 transition-colors flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 text-base sm:text-lg h-12 sm:h-14 px-6 sm:px-8 focus-visible:outline-2 focus-visible:outline-gray-500"
          >
            Retour à l&apos;accueil
          </Link>
        </div>

        <div className="mt-8 text-sm text-gray-600 dark:text-gray-400">
          <p>Vous cherchez peut-être :</p>
          <ul className="mt-2 space-y-1">
            <li>
              <Link href="/timer" className="text-blue-600 dark:text-blue-400 hover:underline">
                Timer Focus Gratuit
              </Link>
            </li>
            <li>
              <Link href="/" className="text-blue-600 dark:text-blue-400 hover:underline">
                Page d&apos;accueil
              </Link>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}
