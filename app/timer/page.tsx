"use client";

import { useState, useEffect, useRef } from "react";
import PomodoroFocus from "@/components/PomodoroFocus";
import WorkCalculator from "@/components/WorkCalculator";
import CountdownTimer from "@/components/CountdownTimer";

// Note: Client components can't export metadata directly
// Metadata is defined in layout.tsx or a separate metadata file

export default function TimerPage() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Load state from localStorage on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedTime = localStorage.getItem("timerTime");
      const savedIsRunning = localStorage.getItem("timerIsRunning");
      
      if (savedTime) {
        setTime(parseInt(savedTime, 10));
      }
      if (savedIsRunning === "true") {
        setIsRunning(true);
      }
    }
  }, []);

  // Save state to localStorage whenever it changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("timerTime", time.toString());
      localStorage.setItem("timerIsRunning", isRunning.toString());
    }
  }, [time, isRunning]);

  // Timer logic
  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning]);

  const formatTime = (seconds: number): string => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  return (
    <div className="h-screen flex flex-col p-4 sm:p-6 overflow-hidden">
      <header className="flex-shrink-0 mb-2">
        <h1 className="text-xl sm:text-2xl font-bold text-center">
          Timer Focus Gratuit pour Travail - Pomodoro en Ligne
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-400 mt-1 text-xs sm:text-sm">
          Gérez votre temps avec notre chronomètre, timer Pomodoro et calculateur de productivité
        </p>
      </header>

      <div className="flex-1 overflow-hidden">
        <div className="h-full grid grid-cols-1 lg:grid-cols-2 gap-3">
          {/* Work Calculator Section - Position 1 */}
          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-3 flex flex-col overflow-hidden">
            <h2 className="text-lg font-semibold mb-2 text-center flex-shrink-0">
              Calculateur de Temps de Travail
            </h2>
            <div className="flex-1 overflow-y-auto min-h-0">
              <WorkCalculator />
            </div>
          </section>

          {/* Timer Section - Position 2 */}
          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-3 flex flex-col overflow-hidden">
            <h2 className="text-lg font-semibold mb-2 text-center flex-shrink-0">
              Timer Standard
            </h2>
            
            <div className="flex-1 flex flex-col justify-center items-center min-h-0">
              <div
                className="text-3xl sm:text-4xl lg:text-5xl font-mono font-bold text-center mb-3 text-blue-600 dark:text-blue-400"
                aria-live="polite"
                aria-atomic="true"
                role="timer"
                aria-label={`Temps écoulé: ${formatTime(time)}`}
              >
                {formatTime(time)}
              </div>

              <div className="flex flex-wrap gap-2 justify-center">
                <button
                  onClick={handleStart}
                  disabled={isRunning}
                  className="px-3 py-1.5 text-xs sm:text-sm font-semibold rounded-lg bg-green-600 text-white hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors focus-visible:outline-2 focus-visible:outline-green-600"
                  aria-label="Démarrer le timer"
                >
                  Démarrer
                </button>
                <button
                  onClick={handleStop}
                  disabled={!isRunning}
                  className="px-3 py-1.5 text-xs sm:text-sm font-semibold rounded-lg bg-red-600 text-white hover:bg-red-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors focus-visible:outline-2 focus-visible:outline-red-600"
                  aria-label="Arrêter le timer"
                >
                  Arrêter
                </button>
                <button
                  onClick={handleReset}
                  className="px-3 py-1.5 text-xs sm:text-sm font-semibold rounded-lg bg-gray-600 text-white hover:bg-gray-700 transition-colors focus-visible:outline-2 focus-visible:outline-gray-600"
                  aria-label="Réinitialiser le timer"
                >
                  Réinitialiser
                </button>
              </div>
            </div>
          </section>

          {/* Countdown Timer Section - Position 3 */}
          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-3 flex flex-col overflow-hidden">
            <h2 className="text-lg font-semibold mb-2 text-center flex-shrink-0">
              Compte à Rebours
            </h2>
            <div className="flex-1 overflow-y-auto min-h-0">
              <CountdownTimer />
            </div>
          </section>

          {/* Pomodoro Section - Position 4 */}
          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-3 flex flex-col overflow-hidden">
            <h2 className="text-lg font-semibold mb-2 text-center flex-shrink-0">
              Mode Pomodoro Focus
            </h2>
            <div className="flex-1 overflow-y-auto min-h-0">
              <PomodoroFocus />
            </div>
          </section>
        </div>
      </div>

      {/* Informative content section for publisher content */}
      <footer className="flex-shrink-0 mt-4 max-w-7xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 sm:p-6 space-y-4">
          <article className="prose dark:prose-invert max-w-none">
            <h2 className="text-xl sm:text-2xl font-bold mb-3">
              Maîtrisez votre temps avec nos outils de productivité
            </h2>
            
            <section className="mb-4">
              <h3 className="text-lg font-semibold mb-2">Le pouvoir de la mesure du temps</h3>
              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-2">
                Mesurer votre temps est la première étape vers une meilleure productivité. Notre chronomètre vous permet 
                de suivre précisément le temps consacré à chaque tâche, vous aidant à identifier où va réellement votre 
                temps et comment l&apos;optimiser. Cette prise de conscience est essentielle pour améliorer votre efficacité 
                professionnelle.
              </p>
              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                Le calculateur de temps de travail vous aide à planifier vos journées en estimant la durée nécessaire 
                pour vos différents projets. En combinant ces outils avec la technique Pomodoro, vous créez un système 
                complet de gestion du temps adapté à vos besoins professionnels.
              </p>
            </section>

            <section className="mb-4">
              <h3 className="text-lg font-semibold mb-2">Les bénéfices scientifiquement prouvés du Pomodoro</h3>
              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-2">
                Des études en psychologie cognitive ont démontré que notre capacité de concentration décline après 
                environ 25-30 minutes de travail soutenu. La technique Pomodoro tire parti de cette connaissance en 
                structurant le travail en cycles courts et intenses, suivis de pauses réparatrices. Cette approche 
                permet de maintenir un niveau de performance optimal tout au long de la journée.
              </p>
              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                Les pauses régulières ne sont pas une perte de temps, mais un investissement dans votre productivité. 
                Elles permettent à votre cerveau de consolider les informations, de traiter les apprentissages et de 
                recharger votre énergie mentale. Les utilisateurs réguliers de la technique Pomodoro rapportent une 
                réduction significative de la fatigue mentale et une augmentation de leur capacité à rester concentrés.
              </p>
            </section>

            <section className="mb-4">
              <h3 className="text-lg font-semibold mb-2">Combiner les outils pour un maximum d&apos;efficacité</h3>
              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-2">
                L&apos;utilisation combinée de nos quatre outils crée une synergie puissante pour votre productivité. 
                Commencez votre journée en utilisant le calculateur pour estimer le temps nécessaire à vos tâches. 
                Utilisez ensuite le mode Pomodoro pour les tâches demandant une concentration intense, le chronomètre 
                standard pour mesurer le temps passé sur des projets spécifiques, et le compte à rebours pour respecter 
                vos deadlines importantes.
              </p>
              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                Cette approche multi-outils vous permet d&apos;adapter votre méthode de travail selon le type de tâche. 
                Les tâches créatives bénéficient particulièrement du mode Pomodoro, tandis que les réunions ou 
                présentations sont mieux gérées avec le compte à rebours. Le chronomètre reste idéal pour facturer 
                précisément votre temps si vous êtes freelance ou consultant.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-2">Développez des habitudes de travail saines</h3>
              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-2">
                Au-delà de la simple mesure du temps, l&apos;utilisation régulière d&apos;un timer développe des habitudes 
                professionnelles bénéfiques. Vous apprenez à mieux estimer la durée des tâches, à identifier vos 
                moments de productivité maximale dans la journée, et à maintenir un équilibre sain entre travail et 
                repos. Ces compétences sont particulièrement précieuses dans le contexte du télétravail où les 
                frontières entre vie professionnelle et personnelle peuvent devenir floues.
              </p>
              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                N&apos;oubliez pas que la productivité n&apos;est pas une course vers l&apos;épuisement, mais une gestion 
                intelligente de votre énergie et de votre temps. Notre timer gratuit vous accompagne dans cette 
                démarche en vous offrant les outils nécessaires pour travailler de manière plus efficace et plus 
                sereine. Commencez dès aujourd&apos;hui à transformer votre façon de travailler !
              </p>
            </section>
          </article>
        </div>
      </footer>
    </div>
  );
}
