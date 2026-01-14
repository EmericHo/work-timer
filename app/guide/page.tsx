import Link from "next/link";

export default function GuidePage() {
  return (
    <div className="min-h-screen p-4 sm:p-6 md:p-8">
      <div className="max-w-4xl mx-auto">
        <header className="mb-6 sm:mb-8">
          <Link 
            href="/timer" 
            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline mb-4 text-sm sm:text-base"
          >
            ← Retour aux timers
          </Link>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4">
            Guide Complet de Productivité
          </h1>
          <p className="text-center text-gray-600 dark:text-gray-400 text-base sm:text-lg">
            Maîtrisez votre temps avec nos outils de productivité
          </p>
        </header>

        <main className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 sm:p-6 md:p-8">
          <article className="prose prose-sm sm:prose-base lg:prose-lg dark:prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                Maîtrisez votre temps avec nos outils de productivité
              </h2>
              
              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-semibold mb-3">Le pouvoir de la mesure du temps</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Mesurer votre temps est la première étape vers une meilleure productivité. Notre chronomètre vous permet 
                  de suivre précisément le temps consacré à chaque tâche, vous aidant à identifier où va réellement votre 
                  temps et comment l&apos;optimiser. Cette prise de conscience est essentielle pour améliorer votre efficacité 
                  professionnelle.
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Le calculateur de temps de travail vous aide à planifier vos journées en estimant la durée nécessaire 
                  pour vos différents projets. En combinant ces outils avec la technique Pomodoro, vous créez un système 
                  complet de gestion du temps adapté à vos besoins professionnels.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-semibold mb-3">Les bénéfices scientifiquement prouvés du Pomodoro</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Des études en psychologie cognitive ont démontré que notre capacité de concentration décline après 
                  environ 25-30 minutes de travail soutenu. La technique Pomodoro tire parti de cette connaissance en 
                  structurant le travail en cycles courts et intenses, suivis de pauses réparatrices. Cette approche 
                  permet de maintenir un niveau de performance optimal tout au long de la journée.
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Les pauses régulières ne sont pas une perte de temps, mais un investissement dans votre productivité. 
                  Elles permettent à votre cerveau de consolider les informations, de traiter les apprentissages et de 
                  recharger votre énergie mentale. Les utilisateurs réguliers de la technique Pomodoro rapportent une 
                  réduction significative de la fatigue mentale et une augmentation de leur capacité à rester concentrés.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-semibold mb-3">Combiner les outils pour un maximum d&apos;efficacité</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  L&apos;utilisation combinée de nos quatre outils crée une synergie puissante pour votre productivité. 
                  Commencez votre journée en utilisant le calculateur pour estimer le temps nécessaire à vos tâches. 
                  Utilisez ensuite le mode Pomodoro pour les tâches demandant une concentration intense, le chronomètre 
                  standard pour mesurer le temps passé sur des projets spécifiques, et le compte à rebours pour respecter 
                  vos deadlines importantes.
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Cette approche multi-outils vous permet d&apos;adapter votre méthode de travail selon le type de tâche. 
                  Les tâches créatives bénéficient particulièrement du mode Pomodoro, tandis que les réunions ou 
                  présentations sont mieux gérées avec le compte à rebours. Le chronomètre reste idéal pour facturer 
                  précisément votre temps si vous êtes freelance ou consultant.
                </p>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-3">Développez des habitudes de travail saines</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Au-delà de la simple mesure du temps, l&apos;utilisation régulière d&apos;un timer développe des habitudes 
                  professionnelles bénéfiques. Vous apprenez à mieux estimer la durée des tâches, à identifier vos 
                  moments de productivité maximale dans la journée, et à maintenir un équilibre sain entre travail et 
                  repos. Ces compétences sont particulièrement précieuses dans le contexte du télétravail où les 
                  frontières entre vie professionnelle et personnelle peuvent devenir floues.
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  N&apos;oubliez pas que la productivité n&apos;est pas une course vers l&apos;épuisement, mais une gestion 
                  intelligente de votre énergie et de votre temps. Notre timer gratuit vous accompagne dans cette 
                  démarche en vous offrant les outils nécessaires pour travailler de manière plus efficace et plus 
                  sereine. Commencez dès aujourd&apos;hui à transformer votre façon de travailler !
                </p>
              </div>
            </section>

            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700 text-center">
              <Link 
                href="/timer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 px-6 sm:px-8 py-3 text-base sm:text-lg font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-blue-500"
              >
                Utiliser les timers
              </Link>
            </div>
          </article>
        </main>
      </div>
    </div>
  );
}
