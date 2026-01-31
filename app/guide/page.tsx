import Link from "next/link";
import { Metadata } from "next";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBalanceScale, faBullseye, faChartBar, faFileAlt, faLightbulb, faMobileAlt, faMusic, faRocket, faTimes } from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
  title: "Guide Complet de Productivité - Timer Focus",
  description: "Apprenez à maîtriser la technique Pomodoro et découvrez des stratégies éprouvées pour améliorer votre productivité, gérer votre temps efficacement et optimiser votre concentration au travail.",
  alternates: {
    canonical: "/guide",
  },
};

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
          <article className="prose prose-sm sm:prose-base lg:prose-lg dark:prose-invert max-w-3xl mx-auto">
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

            <section className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                Guide Complet de la Technique Pomodoro
              </h2>
              
              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-semibold mb-3">Les 6 étapes pour réussir un Pomodoro</h3>
                <ol className="space-y-4 list-decimal list-inside text-gray-700 dark:text-gray-300">
                  <li>
                    <strong>Choisir une tâche à accomplir</strong> - Sélectionnez une seule tâche spécifique sur 
                    laquelle vous concentrer. La clarté de l&apos;objectif est essentielle pour maintenir votre focus.
                  </li>
                  <li>
                    <strong>Régler le timer sur 25 minutes</strong> - C&apos;est la durée optimale d&apos;un Pomodoro, 
                    bien que vous puissiez l&apos;ajuster selon vos besoins (voir les variations ci-dessous).
                  </li>
                  <li>
                    <strong>Travailler intensément sans interruption</strong> - Pendant ces 25 minutes, éliminez toutes 
                    les distractions. Pas de réseaux sociaux, pas d&apos;emails, pas de notifications. Concentration 
                    totale sur votre tâche.
                  </li>
                  <li>
                    <strong>Marquer un Pomodoro completé</strong> - Lorsque le timer sonne, notez que vous avez 
                    terminé un Pomodoro. Cette visualisation de votre progression est motivante.
                  </li>
                  <li>
                    <strong>Prendre une pause de 5 minutes</strong> - Cette pause est obligatoire. Levez-vous, 
                    bougez, hydratez-vous, regardez ailleurs que votre écran. Ne travaillez pas pendant cette pause.
                  </li>
                  <li>
                    <strong>Prendre une pause longue après 4 Pomodoros</strong> - Après avoir complété 4 cycles de 
                    travail, prenez une pause plus longue de 15 à 30 minutes pour recharger complètement vos batteries.
                  </li>
                </ol>
              </div>

              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-semibold mb-3">Variations de la technique Pomodoro</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Bien que la méthode classique utilise des intervalles de 25/5 minutes, vous pouvez adapter la 
                  technique à vos besoins personnels et au type de travail :
                </p>
                
                <div className="space-y-4">
                  <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-gray-900 dark:text-gray-100"><FontAwesomeIcon icon={faRocket} className="inline" /> Pomodoro Sprint (15/3)</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      <strong>Quand l&apos;utiliser :</strong> Pour des tâches simples et répétitives, ou quand vous 
                      débutez avec la méthode et que 25 minutes vous semblent trop longues.
                      <br />
                      <strong>Exemple :</strong> Trier des emails, ranger des fichiers, tâches administratives simples.
                    </p>
                  </div>

                  <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-gray-900 dark:text-gray-100"><FontAwesomeIcon icon={faBullseye} className="inline" /> Pomodoro Classique (25/5)</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      <strong>Quand l&apos;utiliser :</strong> Pour la majorité des tâches professionnelles. C&apos;est 
                      le format standard et le plus équilibré pour la plupart des gens.
                      <br />
                      <strong>Exemple :</strong> Rédaction, codage, étude, réunions de planification.
                    </p>
                  </div>

                  <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">💪 Pomodoro Intensif (50/10)</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      <strong>Quand l&apos;utiliser :</strong> Pour des tâches complexes nécessitant un état de flow 
                      profond. Réservé aux personnes expérimentées avec la technique.
                      <br />
                      <strong>Exemple :</strong> Résolution de problèmes complexes, conception architecturale, 
                      création artistique intensive.
                    </p>
                  </div>

                  <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">🎓 Pomodoro Étudiant (45/15)</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      <strong>Quand l&apos;utiliser :</strong> Pour les sessions de révision et d&apos;apprentissage 
                      intensif. Aligné sur les durées de cours traditionnelles.
                      <br />
                      <strong>Exemple :</strong> Révisions d&apos;examens, lectures académiques, prise de notes de cours.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-semibold mb-3">Gérer les interruptions pendant un Pomodoro</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Les interruptions sont l&apos;ennemi numéro un de la productivité. Voici comment les gérer :
                </p>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Interruptions internes (vos propres pensées)</h4>
                    <p className="text-gray-700 dark:text-gray-300 mb-2">
                      Pendant votre Pomodoro, vous aurez des pensées du type &quot;Je dois vérifier cet email&quot; 
                      ou &quot;Je dois appeler untel&quot;. C&apos;est normal.
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 mb-2">
                      <strong>Solution :</strong> Gardez un papier et un stylo à portée de main. Notez rapidement 
                      ces pensées et dites-vous &quot;Je m&apos;en occuperai pendant ma pause&quot;. Puis retournez 
                      immédiatement à votre tâche.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Interruptions externes (collègues, téléphone, etc.)</h4>
                    <p className="text-gray-700 dark:text-gray-300 mb-2">
                      Quelqu&apos;un vous sollicite pendant votre Pomodoro. Ces interruptions brisent votre 
                      concentration et réduisent considérablement votre productivité.
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 mb-2">
                      <strong>Solution :</strong>
                    </p>
                    <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
                      <li>
                        <strong>Préventif :</strong> Informez votre entourage que vous entrez en mode concentration. 
                        Utilisez un signal visuel (casque, panneau &quot;Ne pas déranger&quot;, statut Slack en rouge).
                      </li>
                      <li>
                        <strong>Si c&apos;est urgent :</strong> Abandonnez le Pomodoro actuel, traitez l&apos;urgence, 
                        puis recommencez un nouveau Pomodoro de 25 minutes.
                      </li>
                      <li>
                        <strong>Si ce n&apos;est pas urgent :</strong> Demandez poliment si vous pouvez rappeler 
                        dans X minutes (votre temps restant jusqu&apos;à la pause).
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                Optimiser Votre Environnement de Travail
              </h2>
              
              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-semibold mb-3">Créer un espace propice à la concentration</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Votre environnement physique a un impact majeur sur votre capacité à rester concentré. Voici comment 
                  l&apos;optimiser pour maximiser l&apos;efficacité de vos sessions Pomodoro :
                </p>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <span><FontAwesomeIcon icon={faLightbulb} className="inline" /></span> Éclairage optimal
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      Privilégiez la lumière naturelle autant que possible. Si ce n&apos;est pas possible, utilisez 
                      une lumière blanche froide (5000-6500K) pendant la journée pour maintenir votre vigilance, et 
                      passez à une lumière plus chaude (2700-3000K) en soirée pour ne pas perturber votre cycle 
                      circadien.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <span>🔇</span> Gestion du bruit
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300 mb-2">
                      Le silence absolu n&apos;est pas toujours optimal. Différentes personnes ont différents besoins :
                    </p>
                    <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
                      <li><strong>Silence total :</strong> Utilisez des bouchons d&apos;oreilles ou un casque anti-bruit</li>
                      <li><strong>Bruit blanc :</strong> Applications comme Noisli ou SimplyNoise masquent les distractions</li>
                      <li><strong>Musique sans paroles :</strong> Musique classique, lo-fi, ou ambiances naturelles</li>
                      <li><strong>Bruit ambiant :</strong> Certaines personnes travaillent mieux avec un léger bruit de fond 
                      (café, bibliothèque)</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <span>🪑</span> Ergonomie et confort
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      Une posture inconfortable devient rapidement une distraction. Investissez dans une chaise 
                      ergonomique, ajustez la hauteur de votre écran au niveau des yeux, et assurez-vous que vos 
                      pieds touchent le sol. Votre dos vous remerciera et votre concentration s&apos;améliorera.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <span><FontAwesomeIcon icon={faMobileAlt} className="inline" /></span> Zone sans distraction numérique
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      Avant de démarrer un Pomodoro, préparez votre espace numérique :
                    </p>
                    <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
                      <li>Mettez votre téléphone en mode avion ou &quot;Ne pas déranger&quot;</li>
                      <li>Fermez tous les onglets non essentiels de votre navigateur</li>
                      <li>Désactivez les notifications sur votre ordinateur</li>
                      <li>Utilisez des extensions comme &quot;Freedom&quot; ou &quot;Cold Turkey&quot; pour bloquer 
                      les sites distrayants</li>
                      <li>Fermez votre client email et vos messageries instantanées</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-semibold mb-3">Préparer mentalement votre session de travail</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  La préparation mentale est aussi importante que la préparation physique. Voici un rituel simple 
                  de 3 minutes à faire avant chaque Pomodoro :
                </p>
                <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300">
                  <li>
                    <strong>Clarifiez votre objectif (30 secondes) :</strong> Écrivez en une phrase ce que vous 
                    voulez accomplir pendant ce Pomodoro. Exemple : &quot;Rédiger l&apos;introduction du rapport&quot;
                  </li>
                  <li>
                    <strong>Respirez profondément (1 minute) :</strong> Prenez 5 respirations lentes et profondes 
                    pour calmer votre esprit et vous centrer sur le moment présent
                  </li>
                  <li>
                    <strong>Visualisez le succès (30 secondes) :</strong> Imaginez-vous en train de travailler 
                    efficacement et de terminer votre tâche avec satisfaction
                  </li>
                  <li>
                    <strong>Lancez le timer et commencez immédiatement (1 minute) :</strong> Pas de temps de 
                    procrastination. Dès que le timer démarre, vous commencez à travailler
                  </li>
                </ol>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                Stratégies Avancées de Productivité
              </h2>
              
              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-semibold mb-3">La matrice d&apos;Eisenhower avec Pomodoro</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Combinez la technique Pomodoro avec la matrice d&apos;Eisenhower pour prioriser vos tâches efficacement :
                </p>
                <div className="space-y-3">
                  <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-600 p-4 rounded-r-lg">
                    <p className="font-semibold mb-1">🔴 Urgent ET Important</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Faites-le MAINTENANT avec des Pomodoros intensifs. Bloquez toutes les distractions. 
                      Exemple : Deadline aujourd&apos;hui, crise à gérer.
                    </p>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                    <p className="font-semibold mb-1">🔵 Important mais PAS urgent</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Planifiez des blocs de Pomodoros dans votre semaine. C&apos;est là que vous créez le plus 
                      de valeur. Exemple : Planification stratégique, apprentissage, développement personnel.
                    </p>
                  </div>
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-600 p-4 rounded-r-lg">
                    <p className="font-semibold mb-1">🟡 Urgent mais PAS important</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Déléguez si possible, sinon groupez ces tâches et faites-les en Pomodoros courts (15 min). 
                      Exemple : Emails non critiques, appels de routine.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 border-l-4 border-gray-600 p-4 rounded-r-lg">
                    <p className="font-semibold mb-1">⚪ Ni urgent NI important</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Éliminez ces tâches. Ne gaspillez pas vos Pomodoros précieux sur des activités qui n&apos;apportent 
                      aucune valeur. Exemple : Réseaux sociaux sans but, réunions inutiles.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-semibold mb-3">La règle des 2 minutes</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  David Allen, créateur de la méthode GTD (Getting Things Done), propose la règle des 2 minutes : 
                  si une tâche prend moins de 2 minutes, faites-la immédiatement plutôt que de la planifier.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  <strong>Comment l&apos;intégrer avec Pomodoro :</strong>
                </p>
                <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
                  <li>
                    Avant de démarrer votre premier Pomodoro de la journée, prenez 10 minutes pour traiter toutes 
                    les tâches de moins de 2 minutes
                  </li>
                  <li>
                    Pendant vos pauses de 5 minutes, vous pouvez gérer une ou deux tâches rapides (répondre à un 
                    message, ranger votre bureau)
                  </li>
                  <li>
                    Ne laissez jamais des mini-tâches interrompre un Pomodoro en cours - notez-les et traitez-les 
                    pendant la pause
                  </li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-semibold mb-3">Le batching (regroupement de tâches similaires)</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Votre cerveau perd du temps et de l&apos;énergie à chaque changement de contexte. Le batching 
                  consiste à regrouper des tâches similaires pour les traiter en une seule session Pomodoro ou 
                  série de Pomodoros.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  <strong>Exemples de batching efficace :</strong>
                </p>
                <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
                  <li>
                    <strong>Email :</strong> Au lieu de vérifier vos emails constamment, dédiez 2 Pomodoros par 
                    jour (matin et fin d&apos;après-midi) pour traiter tous vos emails en une fois
                  </li>
                  <li>
                    <strong>Appels téléphoniques :</strong> Regroupez tous vos appels à faire et traitez-les en 
                    1-2 Pomodoros consécutifs
                  </li>
                  <li>
                    <strong>Création de contenu :</strong> Écrivez plusieurs articles/posts en une session plutôt 
                    que de disperser cette tâche sur la semaine
                  </li>
                  <li>
                    <strong>Réunions :</strong> Si possible, planifiez toutes vos réunions sur certains jours de 
                    la semaine et gardez d&apos;autres jours libres pour le deep work
                  </li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-semibold mb-3">Le time-boxing pour les perfectionistes</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Si vous avez tendance au perfectionnisme (passer trop de temps sur des détails), le time-boxing 
                  avec Pomodoro est votre solution. Voici comment l&apos;appliquer :
                </p>
                <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300">
                  <li>
                    <strong>Définissez un nombre maximal de Pomodoros</strong> pour chaque tâche. Par exemple : 
                    &quot;Je vais consacrer maximum 3 Pomodoros (1h15) à cette présentation&quot;
                  </li>
                  <li>
                    <strong>Version 1 en 1 Pomodoro :</strong> Créez une première version &quot;good enough&quot; 
                    en un seul Pomodoro. C&apos;est votre base de travail
                  </li>
                  <li>
                    <strong>Améliorations en 1-2 Pomodoros :</strong> Affinez et améliorez, mais arrêtez-vous 
                    quand votre time-box est épuisé
                  </li>
                  <li>
                    <strong>Acceptez le &quot;suffisamment bon&quot; :</strong> 80% de la qualité nécessite souvent 
                    20% du temps, les 20% restants nécessitent 80% du temps. Soyez stratégique
                  </li>
                </ol>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                Erreurs Courantes à Éviter
              </h2>
              
              <div className="space-y-6">
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2 text-red-900 dark:text-red-100">
                    <FontAwesomeIcon icon={faTimes} className="inline" /> Sauter les pauses
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    <strong>Erreur :</strong> Se dire &quot;Je suis dans ma lancée, je vais enchaîner un autre 
                    Pomodoro sans pause&quot;.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>Solution :</strong> Les pauses sont NON négociables. Elles sont essentielles pour 
                    maintenir votre performance cognitive. Sans pauses, votre concentration et votre qualité de 
                    travail vont rapidement décliner.
                  </p>
                </div>

                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2 text-red-900 dark:text-red-100">
                    <FontAwesomeIcon icon={faTimes} className="inline" /> Vérifier ses emails/notifications pendant un Pomodoro
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    <strong>Erreur :</strong> &quot;Je vais juste jeter un coup d&apos;œil rapide à ce message&quot;.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>Solution :</strong> Un Pomodoro est un bloc de temps sacré. Toute interruption brise 
                    votre flow et nécessite 15-20 minutes pour retrouver votre niveau de concentration optimal. 
                    Si c&apos;est vraiment urgent, abandonnez le Pomodoro et recommencez-en un nouveau après avoir 
                    traité l&apos;urgence.
                  </p>
                </div>

                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2 text-red-900 dark:text-red-100">
                    <FontAwesomeIcon icon={faTimes} className="inline" /> Planifier trop de Pomodoros dans une journée
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    <strong>Erreur :</strong> Planifier 16 Pomodoros (8 heures) de travail intense en une journée.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>Solution :</strong> Soyez réaliste. Entre les réunions, les tâches administratives, 
                    les pauses déjeuner et les imprévus, viser 8-12 Pomodoros (3-5 heures de travail concentré) 
                    est déjà excellent. La qualité prime sur la quantité.
                  </p>
                </div>

                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2 text-red-900 dark:text-red-100">
                    <FontAwesomeIcon icon={faTimes} className="inline" /> Ne pas adapter la méthode à son contexte
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    <strong>Erreur :</strong> Essayer d&apos;appliquer rigidement des Pomodoros de 25 minutes 
                    pour TOUTES les tâches.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>Solution :</strong> La technique Pomodoro est un outil, pas une religion. Adaptez 
                    les durées selon le type de tâche, votre niveau d&apos;énergie et vos contraintes. Certaines 
                    tâches se prêtent mieux à des sessions plus courtes ou plus longues.
                  </p>
                </div>

                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2 text-red-900 dark:text-red-100">
                    <FontAwesomeIcon icon={faTimes} className="inline" /> Utiliser les pauses pour scroller sur les réseaux sociaux
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    <strong>Erreur :</strong> Passer sa pause de 5 minutes sur Instagram, Twitter ou TikTok.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>Solution :</strong> Les pauses doivent reposer votre cerveau, pas le stimuler davantage. 
                    Levez-vous, bougez, regardez par la fenêtre, hydratez-vous, étirez-vous. Évitez les écrans 
                    pendant les pauses courtes pour donner du repos à vos yeux et à votre esprit.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                Mesurer et Améliorer Votre Productivité
              </h2>
              
              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-semibold mb-3">Tenir un journal de productivité</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Pour vraiment améliorer votre productivité, vous devez mesurer vos résultats. Voici un système 
                  simple de journalisation qui ne prend que 5 minutes par jour :
                </p>

                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg mb-4">
                  <h4 className="font-semibold mb-3 text-blue-900 dark:text-blue-100">
                    <FontAwesomeIcon icon={faChartBar} className="inline" /> Template de Journal Quotidien
                  </h4>
                  <div className="space-y-4 text-sm">
                    <div>
                      <p className="font-semibold mb-1">Matin (2 minutes) :</p>
                      <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
                        <li>Top 3 priorités de la journée</li>
                        <li>Nombre de Pomodoros planifiés pour chaque priorité</li>
                        <li>Niveau d&apos;énergie actuel (1-10)</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Soir (3 minutes) :</p>
                      <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
                        <li>Nombre de Pomodoros réellement complétés</li>
                        <li>Principales accomplissements</li>
                        <li>Principales distractions/obstacles rencontrés</li>
                        <li>Une chose à améliorer demain</li>
                        <li>Score de satisfaction (1-10)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Après une semaine de journalisation, vous verrez des patterns émerger :
                </p>
                <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
                  <li>Quels jours êtes-vous le plus productif ?</li>
                  <li>Quels moments de la journée sont vos pics de productivité ?</li>
                  <li>Quelles sont vos distractions récurrentes ?</li>
                  <li>Combien de Pomodoros pouvez-vous réalistement accomplir par jour ?</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-semibold mb-3">Analyser votre courbe d&apos;énergie</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Chaque personne a des moments de la journée où elle est naturellement plus productive. Identifiez 
                  votre courbe d&apos;énergie personnelle pour planifier vos tâches stratégiquement :
                </p>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">🌅 Matinaux (pics d&apos;énergie : 8h-12h)</h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      <strong>Stratégie :</strong> Placez vos tâches les plus complexes et importantes le matin. 
                      Utilisez l&apos;après-midi pour les tâches plus légères et administratives. Évitez de planifier 
                      des décisions importantes après 16h.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">🌙 Nocturnes (pics d&apos;énergie : 14h-22h)</h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      <strong>Stratégie :</strong> Commencez doucement le matin avec des tâches de routine. Gardez 
                      votre deep work pour l&apos;après-midi et la soirée. Attention à ne pas sacrifier votre 
                      sommeil pour la productivité.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2"><FontAwesomeIcon icon={faBalanceScale} className="inline" /> Équilibrés (énergie stable toute la journée)</h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      <strong>Stratégie :</strong> Vous avez la flexibilité de planifier vos tâches importantes 
                      à tout moment. Profitez-en pour optimiser votre emploi du temps selon vos contraintes 
                      externes (réunions, etc.).
                    </p>
                  </div>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mt-4">
                  <strong>Exercice :</strong> Pendant une semaine, notez votre niveau d&apos;énergie (1-10) toutes 
                  les 2 heures. Vous découvrirez votre pattern naturel et pourrez planifier vos Pomodoros en 
                  conséquence.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                Ressources et Outils Complémentaires
              </h2>
              
              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-semibold mb-3">Applications et extensions recommandées</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2"><FontAwesomeIcon icon={faFileAlt} className="inline" /> Gestion de tâches</h4>
                    <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
                      <li><strong>Todoist :</strong> Simple et efficace pour organiser vos tâches par projet</li>
                      <li><strong>TickTick :</strong> Excellent pour combiner tâches et Pomodoro intégré</li>
                      <li><strong>Notion :</strong> Pour ceux qui aiment un système tout-en-un flexible</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">🚫 Blocage de distractions</h4>
                    <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
                      <li><strong>Freedom :</strong> Bloque sites et apps sur tous vos appareils simultanément</li>
                      <li><strong>Cold Turkey :</strong> Blocage très strict, impossible à contourner</li>
                      <li><strong>Forest :</strong> Ludique - plantez un arbre virtuel qui meurt si vous quittez 
                      l&apos;app</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2"><FontAwesomeIcon icon={faMusic} className="inline" /> Sons et ambiances</h4>
                    <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
                      <li><strong>Brain.fm :</strong> Musique scientifiquement optimisée pour la concentration</li>
                      <li><strong>Noisli :</strong> Générateur de bruits blancs et sons de nature personnalisables</li>
                      <li><strong>Coffitivity :</strong> Reproduit l&apos;ambiance sonore d&apos;un café</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-semibold mb-3">Livres recommandés sur la productivité</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>
                    <strong>&quot;Deep Work&quot; de Cal Newport :</strong> Le livre de référence sur le travail 
                    concentré dans un monde de distractions
                  </li>
                  <li>
                    <strong>&quot;Getting Things Done&quot; de David Allen :</strong> Système complet de gestion 
                    des tâches et des projets
                  </li>
                  <li>
                    <strong>&quot;Atomic Habits&quot; de James Clear :</strong> Comment créer de bonnes habitudes 
                    et se débarrasser des mauvaises
                  </li>
                  <li>
                    <strong>&quot;The 4-Hour Workweek&quot; de Tim Ferriss :</strong> Repenser complètement votre 
                    approche du travail et de l&apos;efficacité
                  </li>
                  <li>
                    <strong>&quot;Essentialism&quot; de Greg McKeown :</strong> L&apos;art de se concentrer sur 
                    l&apos;essentiel et d&apos;éliminer le superflu
                  </li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200 dark:border-blue-800 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-3 text-center">
                  Prêt à Transformer Votre Productivité ?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 text-center">
                  Vous avez maintenant toutes les clés pour maîtriser la technique Pomodoro et optimiser votre 
                  gestion du temps. La théorie c&apos;est bien, mais la pratique c&apos;est mieux !
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-6 text-center">
                  <strong>Défi :</strong> Essayez la technique Pomodoro pendant 7 jours consécutifs. Vous serez 
                  surpris des résultats. La plupart des utilisateurs rapportent une augmentation de 25-40% de leur 
                  productivité dès la première semaine.
                </p>
                <div className="flex justify-center">
                  <Link 
                    href="/timer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 px-8 py-3 text-lg font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-blue-500"
                  >
                    Commencer Mon Premier Pomodoro
                  </Link>
                </div>
              </div>
            </section>
          </article>
        </main>
      </div>
    </div>
  );
}
