import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-8">
      <main className="flex flex-col gap-8 items-center text-center max-w-2xl">
        <h1 className="text-4xl sm:text-5xl font-bold text-balance">
          Timer Focus Gratuit pour Travail
        </h1>
        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
          Améliorez votre productivité avec notre timer et technique Pomodoro
        </p>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <Link
            href="/timer"
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-blue-600 text-white gap-2 hover:bg-blue-700 text-base sm:text-lg h-12 sm:h-14 px-6 sm:px-8 focus-visible:outline-2 focus-visible:outline-blue-500"
          >
            Commencer le Timer
          </Link>
        </div>
      </main>
    </div>
  );
}
