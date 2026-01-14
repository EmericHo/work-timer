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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-5xl text-left my-4">
          <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">⏱️ Timer Précis</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Chronomètre avec affichage heures, minutes et secondes pour suivre votre temps de travail
            </p>
          </div>
          <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">⏳ Compte à Rebours</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Timer inversé avec pause : définissez votre durée de travail et comptez jusqu&apos;à 0
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
          <Link
            href="/guide"
            className="rounded-full border border-solid border-gray-300 dark:border-gray-600 transition-colors flex items-center justify-center bg-transparent text-gray-900 dark:text-gray-100 gap-2 hover:bg-gray-100 dark:hover:bg-gray-800 text-base sm:text-lg h-12 sm:h-14 px-6 sm:px-8 focus-visible:outline-2 focus-visible:outline-gray-500"
          >
            Lire le Guide
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

        <section className="mt-8 text-left max-w-2xl">
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

        <section className="mt-8 text-left max-w-2xl">
          <h2 className="text-2xl font-bold mb-4">Les avantages d&apos;un timer en ligne pour la productivité</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            L&apos;utilisation d&apos;un timer en ligne présente de nombreux avantages par rapport aux minuteurs physiques 
            traditionnels. Premièrement, notre application est accessible depuis n&apos;importe quel appareil connecté à 
            Internet - ordinateur, tablette ou smartphone. Vous pouvez ainsi maintenir vos habitudes de productivité que 
            vous soyez au bureau, en télétravail, dans un espace de coworking ou en déplacement.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Notre timer gratuit offre également des fonctionnalités avancées impossibles avec un minuteur classique. 
            La sauvegarde automatique de votre progression vous permet de reprendre exactement où vous vous étiez arrêté, 
            même si vous fermez accidentellement votre navigateur. Les notifications de bureau vous alertent discrètement 
            à la fin de chaque session, vous permettant de rester concentré sur votre tâche sans surveiller constamment 
            l&apos;écran.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            De plus, notre outil combine plusieurs fonctionnalités en une seule interface intuitive : un chronomètre 
            standard pour mesurer le temps passé sur vos tâches, un compte à rebours personnalisable pour respecter 
            vos deadlines, un mode Pomodoro automatique avec gestion des pauses, et un calculateur de temps de travail 
            pour planifier vos journées. Cette polyvalence fait de notre timer l&apos;outil idéal pour tous les 
            professionnels, étudiants, freelances et entrepreneurs soucieux d&apos;optimiser leur gestion du temps.
          </p>
        </section>

        <section className="mt-8 text-left max-w-2xl">
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

        <section className="mt-8 text-left max-w-2xl">
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
            <p>
              Si vous avez du mal à rester concentré, si vous vous sentez souvent débordé, ou si vous cherchez simplement 
              à être plus efficace dans votre travail quotidien, ce timer est l&apos;outil qu&apos;il vous faut. Simple, 
              gratuit et accessible, il vous accompagne dans votre quête d&apos;une meilleure productivité sans complexité 
              inutile.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
