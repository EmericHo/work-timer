"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import PomodoroFocus from "@/components/PomodoroFocus";
import WorkCalculator from "@/components/WorkCalculator";
import CountdownTimer from "@/components/CountdownTimer";
import AdSenseAd from "@/components/AdSenseAd";

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
    <div className="min-h-screen flex flex-col p-4 sm:p-6 md:p-8">
      <header className="flex-shrink-0 mb-4 sm:mb-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">
          Timer Focus Gratuit pour Travail - Pomodoro en Ligne
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-400 mt-2 text-sm sm:text-base">
          Gérez votre temps avec notre chronomètre, timer Pomodoro et calculateur de productivité
        </p>
        <div className="text-center mt-3">
          <Link 
            href="/guide" 
            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline text-sm sm:text-base"
          >
            📖 Consulter le guide complet de productivité
          </Link>
        </div>
      </header>

      <div className="flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 max-w-7xl mx-auto">
          {/* Work Calculator Section - Position 1 */}
          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 sm:p-6 flex flex-col">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-center flex-shrink-0">
              Calculateur de Temps de Travail
            </h2>
            <div className="flex-1">
              <WorkCalculator />
            </div>
          </section>

          {/* Timer Section - Position 2 */}
          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 sm:p-6 flex flex-col">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-center flex-shrink-0">
              Timer Standard
            </h2>
            
            <div className="flex-1 flex flex-col justify-center items-center">
              <div
                className="text-4xl sm:text-5xl md:text-6xl font-mono font-bold text-center mb-6 text-blue-600 dark:text-blue-400"
                aria-live="polite"
                aria-atomic="true"
                role="timer"
                aria-label={`Temps écoulé: ${formatTime(time)}`}
              >
                {formatTime(time)}
              </div>

              <div className="flex flex-wrap gap-3 justify-center">
                <button
                  onClick={handleStart}
                  disabled={isRunning}
                  className="px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-semibold rounded-lg bg-green-600 text-white hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors focus-visible:outline-2 focus-visible:outline-green-600"
                  aria-label="Démarrer le timer"
                >
                  Démarrer
                </button>
                <button
                  onClick={handleStop}
                  disabled={!isRunning}
                  className="px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-semibold rounded-lg bg-red-600 text-white hover:bg-red-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors focus-visible:outline-2 focus-visible:outline-red-600"
                  aria-label="Arrêter le timer"
                >
                  Arrêter
                </button>
                <button
                  onClick={handleReset}
                  className="px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-semibold rounded-lg bg-gray-600 text-white hover:bg-gray-700 transition-colors focus-visible:outline-2 focus-visible:outline-gray-600"
                  aria-label="Réinitialiser le timer"
                >
                  Réinitialiser
                </button>
              </div>
            </div>
          </section>

          {/* Countdown Timer Section - Position 3 */}
          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 sm:p-6 flex flex-col">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-center flex-shrink-0">
              Compte à Rebours
            </h2>
            <div className="flex-1">
              <CountdownTimer />
            </div>
          </section>

          {/* Pomodoro Section - Position 4 */}
          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 sm:p-6 flex flex-col">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-center flex-shrink-0">
              Mode Pomodoro Focus
            </h2>
            <div className="flex-1">
              <PomodoroFocus />
            </div>
          </section>
        </div>
      </div>

      {/* SEO Content Section */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 md:px-8 mt-12 space-y-8">
        <section className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold mb-4">Pourquoi utiliser un Timer Focus avec Pomodoro ?</h2>
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

        {/* AdSense Ad */}
        <div className="flex justify-center my-8">
          <AdSenseAd 
            slot="4567890123"
            format="horizontal"
            style={{ minWidth: "320px", maxWidth: "970px", width: "100%", minHeight: "90px" }}
          />
        </div>

        <section className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold mb-4">Comment utiliser la technique Pomodoro ?</h2>
          <ol className="space-y-3 text-gray-700 dark:text-gray-300 list-decimal list-inside">
            <li>Choisissez une tâche à accomplir</li>
            <li>Lancez le timer Pomodoro pour 25 minutes de travail concentré</li>
            <li>Travaillez sans interruption jusqu&apos;à la sonnerie</li>
            <li>Prenez une pause de 5 minutes pour vous ressourcer</li>
            <li>Après 4 pomodoros, prenez une pause plus longue de 15-30 minutes</li>
          </ol>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold mb-4">Qu&apos;est-ce que la technique Pomodoro et pourquoi est-elle efficace ?</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            La technique Pomodoro est une méthode de gestion du temps développée par Francesco Cirillo à la fin des années 1980. 
            Le nom &quot;Pomodoro&quot; vient du minuteur en forme de tomate que Cirillo utilisait lorsqu&apos;il était étudiant. 
            Cette méthode repose sur un principe simple mais puissant : diviser le travail en intervalles de temps concentrés, 
            traditionnellement de 25 minutes, séparés par de courtes pauses.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            L&apos;efficacité de cette technique repose sur plusieurs principes scientifiques. Notre cerveau ne peut maintenir 
            une concentration optimale que pendant des périodes limitées. En travaillant par sessions de 25 minutes, vous 
            restez dans la zone de concentration maximale sans épuisement mental. Les pauses régulières permettent à votre 
            cerveau de se reposer, de consolider les informations apprises et de maintenir un niveau de productivité élevé 
            tout au long de la journée.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            De nombreuses études en neurosciences ont démontré que les pauses régulières améliorent la rétention d&apos;information 
            et la créativité. En utilisant notre timer Pomodoro gratuit, vous bénéficiez de ces avantages scientifiquement 
            prouvés pour optimiser votre temps de travail et augmenter votre productivité de manière durable.
          </p>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold mb-4">Conseils pour maximiser votre productivité</h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <div>
              <h3 className="text-xl font-semibold mb-2">1. Éliminez les distractions</h3>
              <p>
                Avant de démarrer votre timer Pomodoro, créez un environnement propice à la concentration. Mettez votre 
                téléphone en mode silencieux, fermez les applications et onglets non essentiels, et informez vos collègues 
                ou votre famille que vous entrez dans une phase de travail concentré. Ces 25 minutes doivent être 
                exclusivement dédiées à votre tâche.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">2. Préparez votre tâche à l&apos;avance</h3>
              <p>
                Avant de lancer le timer, définissez clairement ce que vous souhaitez accomplir pendant cette session. 
                Plus votre objectif est précis, plus vous serez efficace. Par exemple, plutôt que &quot;travailler sur le 
                rapport&quot;, définissez &quot;rédiger l&apos;introduction du rapport mensuel&quot;. Cette clarté vous aide à 
                rester focalisé et à mesurer concrètement votre progression.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">3. Respectez les pauses</h3>
              <p>
                La technique Pomodoro ne fonctionne que si vous respectez les pauses. Ces 5 minutes ne sont pas 
                optionnelles - elles sont essentielles pour maintenir votre concentration sur le long terme. Utilisez 
                ce temps pour vous lever, vous étirer, regarder par la fenêtre, ou prendre une boisson. Évitez les 
                écrans pendant la pause pour permettre à vos yeux et votre cerveau de vraiment se reposer.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">4. Adaptez la méthode à vos besoins</h3>
              <p>
                Bien que 25 minutes soit la durée standard d&apos;un Pomodoro, n&apos;hésitez pas à adapter cette méthode 
                à votre rythme personnel. Certaines personnes préfèrent des sessions de 15 minutes, d&apos;autres de 
                50 minutes. L&apos;important est de trouver un équilibre qui vous permet de rester concentré sans 
                fatigue excessive. Notre timer personnalisable vous permet d&apos;expérimenter différentes durées pour 
                trouver votre rythme idéal.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold mb-4">Pour qui est conçu ce timer ?</h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              Notre timer focus gratuit s&apos;adresse à tous ceux qui souhaitent améliorer leur gestion du temps et 
              augmenter leur productivité. Que vous soyez étudiant préparant vos examens, professionnel en télétravail, 
              freelance jonglant entre plusieurs projets, ou entrepreneur gérant votre entreprise, cet outil est fait 
              pour vous.
            </p>
            <p>
              Les étudiants apprécient particulièrement le mode Pomodoro pour structurer leurs sessions de révision et 
              éviter le surmenage avant les examens. Les développeurs et créatifs l&apos;utilisent pour maintenir leur 
              focus pendant les phases de deep work. Les entrepreneurs l&apos;emploient pour gérer efficacement leur temps 
              entre les différentes tâches stratégiques et opérationnelles de leur activité.
            </p>
          </div>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold mb-4">La science derrière la gestion du temps</h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              Des recherches en neurosciences suggèrent que notre cerveau fonctionne de manière plus efficace 
              lorsque nous alternons entre périodes de concentration intense et moments de repos. Le cortex préfrontal, 
              impliqué dans la concentration et la prise de décision, nécessite de l&apos;énergie cognitive. 
              Des pauses régulières peuvent aider à maintenir les performances mentales et réduire la fatigue cognitive.
            </p>
            <p>
              La technique Pomodoro, intégrée dans notre timer, s&apos;inspire de ces principes. 
              En structurant le travail en sessions limitées de 25 minutes, cette méthode aide de nombreuses 
              personnes à maintenir leur concentration. Les pauses de 5 minutes offrent un temps de récupération 
              qui peut contribuer à préserver l&apos;efficacité mentale tout au long de la journée.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
