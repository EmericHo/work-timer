import { Metadata } from "next";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faBullseye, faHome, faLaptop, faLock, faMobileAlt } from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
  title: "À Propos - Timer Focus Gratuit",
  description: "Découvrez Timer Focus, l'application de timer en ligne gratuite conçue pour améliorer votre productivité avec la technique Pomodoro et des outils de gestion du temps.",
  alternates: {
    canonical: "/a-propos",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen p-4 sm:p-6 md:p-8">
      <div className="max-w-4xl mx-auto">
        <header className="mb-6 sm:mb-8">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline mb-4 text-sm sm:text-base"
          >
            ← Retour à l&apos;accueil
          </Link>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4">
            À Propos de Timer Focus
          </h1>
          <p className="text-center text-gray-600 dark:text-gray-400 text-base sm:text-lg">
            Votre allié pour une meilleure gestion du temps et une productivité optimale
          </p>
        </header>

        <main className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 sm:p-6 md:p-8">
          <article className="prose prose-sm sm:prose-base lg:prose-lg dark:prose-invert max-w-3xl mx-auto">
            <section className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Notre Mission</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Timer Focus est né d&apos;une volonté simple mais essentielle : rendre la gestion du temps 
                accessible à tous, gratuitement et sans complexité. Dans un monde où la productivité est devenue 
                un enjeu majeur pour les professionnels, les étudiants, les freelances et les entrepreneurs, 
                nous croyons fermement que chacun mérite d&apos;avoir accès à des outils efficaces pour optimiser 
                son temps de travail.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Notre mission est de fournir une application de timer en ligne qui combine simplicité d&apos;utilisation, 
                efficacité prouvée et accessibilité universelle. Nous voulons aider nos utilisateurs à :
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300">
                <li>Améliorer leur concentration et leur focus au travail</li>
                <li>Structurer leurs journées de manière plus productive</li>
                <li>Éviter l&apos;épuisement professionnel en prenant des pauses régulières</li>
                <li>Mieux estimer et gérer le temps consacré à leurs tâches</li>
                <li>Adopter des méthodes de travail scientifiquement prouvées comme la technique Pomodoro</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300">
                Nous sommes convaincus que la productivité ne consiste pas à travailler plus, mais à travailler 
                mieux. C&apos;est pourquoi Timer Focus intègre des pauses structurées et encourage un équilibre 
                sain entre travail et repos.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">L&apos;Histoire de Timer Focus</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Timer Focus a été créé par des passionnés de productivité et de développement web qui ont 
                eux-mêmes ressenti le besoin d&apos;un outil de gestion du temps simple, efficace et accessible. 
                Après avoir testé de nombreuses applications existantes, nous avons réalisé que beaucoup étaient 
                soit trop complexes, soit payantes, soit encombrées de fonctionnalités superflues.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Le projet a démarré comme un simple chronomètre en ligne, mais s&apos;est rapidement transformé 
                en une suite complète d&apos;outils de productivité. En écoutant les retours de nos premiers 
                utilisateurs, nous avons ajouté :
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300">
                <li>Le mode Pomodoro avec cycles automatiques de travail et de pause</li>
                <li>Un compte à rebours personnalisable pour respecter les deadlines</li>
                <li>Un calculateur de temps de travail pour planifier les journées</li>
                <li>Des notifications de bureau pour ne jamais manquer une pause</li>
                <li>Une sauvegarde automatique de l&apos;état des timers</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300">
                Aujourd&apos;hui, Timer Focus est utilisé quotidiennement par des milliers de professionnels, 
                étudiants et entrepreneurs à travers le monde francophone. Notre application continue d&apos;évoluer 
                grâce aux suggestions et retours de notre communauté d&apos;utilisateurs.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Pourquoi Timer Focus est Unique</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold mb-3 flex items-center gap-2">
                    <span className="text-2xl"><FontAwesomeIcon icon={faBullseye} className="inline" /></span>
                    Simplicité avant tout
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Contrairement à d&apos;autres applications de productivité qui vous submergent de fonctionnalités 
                    et de paramètres complexes, Timer Focus reste fidèle à son principe fondateur : la simplicité. 
                    Notre interface intuitive vous permet de démarrer un timer en un seul clic, sans courbe 
                    d&apos;apprentissage. Pas besoin de créer un compte, pas de configuration compliquée, juste 
                    des outils qui fonctionnent immédiatement.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold mb-3 flex items-center gap-2">
                    <span className="text-2xl">🆓</span>
                    100% Gratuit et Accessible
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Timer Focus est entièrement gratuit, sans version premium, sans fonctionnalités cachées 
                    derrière un paywall, et sans limite d&apos;utilisation. Nous croyons que les outils de 
                    productivité de base doivent être accessibles à tous, indépendamment de leurs moyens financiers. 
                    Notre application est financée par la publicité discrète via Google AdSense, ce qui nous permet 
                    de maintenir le service gratuit pour tous sans compromettre votre expérience.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold mb-3 flex items-center gap-2">
                    <span className="text-2xl">🔬</span>
                    Basé sur la Science
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Notre application n&apos;est pas juste un chronomètre. Elle intègre la technique Pomodoro, 
                    une méthode de gestion du temps développée par Francesco Cirillo et validée par de nombreuses 
                    études en psychologie cognitive et en neurosciences. Cette technique repose sur des cycles 
                    de 25 minutes de travail intensif suivis de 5 minutes de pause, optimisant ainsi votre 
                    concentration et réduisant la fatigue mentale. Les pauses régulières ne sont pas une perte 
                    de temps, mais un investissement dans votre performance à long terme.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold mb-3 flex items-center gap-2">
                    <span className="text-2xl"><FontAwesomeIcon icon={faLock} className="inline" /></span>
                    Respect de Votre Vie Privée
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Vos données vous appartiennent. Contrairement à de nombreuses applications qui collectent 
                    et revendent vos informations personnelles, Timer Focus stocke toutes vos données de timer 
                    localement sur votre appareil via LocalStorage. Nous n&apos;avons jamais accès à vos temps 
                    de travail, vos paramètres ou vos habitudes. Nous utilisons uniquement Google Analytics pour 
                    des statistiques anonymisées qui nous aident à améliorer l&apos;application. Consultez notre 
                    <Link href="/politique-confidentialite" className="text-blue-600 dark:text-blue-400 hover:underline ml-1">politique de confidentialité</Link> 
                    {" "}pour tous les détails.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold mb-3 flex items-center gap-2">
                    <span className="text-2xl"><FontAwesomeIcon icon={faMobileAlt} className="inline" /></span>
                    Accessible Partout
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Timer Focus fonctionne sur tous vos appareils : ordinateur de bureau, laptop, tablette ou 
                    smartphone. Notre design responsive s&apos;adapte automatiquement à la taille de votre écran 
                    pour une expérience optimale. Pas besoin de télécharger une application mobile ou d&apos;installer 
                    un logiciel - un simple navigateur web suffit. Travaillez depuis chez vous, au bureau, dans 
                    un café ou en déplacement, votre timer vous suit partout.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold mb-3 flex items-center gap-2">
                    <span className="text-2xl">🇫🇷</span>
                    Entièrement en Français
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Timer Focus est conçu spécifiquement pour la communauté francophone. Toute notre interface, 
                    notre documentation, notre guide de productivité et notre support client sont disponibles 
                    en français. Nous comprenons les besoins spécifiques des utilisateurs francophones et adaptons 
                    notre contenu en conséquence. Pas de traductions approximatives ou de contenus génériques - 
                    tout est pensé pour vous.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold mb-3 flex items-center gap-2">
                    <span className="text-2xl">♿</span>
                    Conçu pour Tous
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    L&apos;accessibilité est au cœur de notre conception. Timer Focus respecte les normes WCAG 
                    (Web Content Accessibility Guidelines) avec des contrastes de couleurs optimaux, des zones 
                    de focus visibles, des attributs ARIA pour les lecteurs d&apos;écran, et une navigation au 
                    clavier complète. Nous voulons que notre application soit utilisable par tous, quelles que 
                    soient leurs capacités.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Pour Qui est Timer Focus ?</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">👨‍<FontAwesomeIcon icon={faBriefcase} className="inline" /> Professionnels et Salariés</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Que vous travailliez au bureau ou en télétravail, Timer Focus vous aide à structurer vos 
                    journées, à rester concentré sur vos tâches prioritaires et à éviter les distractions. 
                    Utilisez le mode Pomodoro pour vos sessions de deep work, le compte à rebours pour respecter 
                    vos réunions, et le calculateur pour estimer le temps nécessaire à vos projets.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">🎓 Étudiants et Apprenants</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Préparez vos examens, rédigez vos mémoires et travaillez sur vos devoirs de manière plus 
                    efficace. Le mode Pomodoro est particulièrement adapté aux sessions de révision en évitant 
                    la surcharge cognitive. Les pauses régulières améliorent la mémorisation et la compréhension. 
                    De nombreux étudiants rapportent de meilleurs résultats académiques après avoir adopté cette 
                    méthode.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faBriefcase} className="inline" /> Freelances et Entrepreneurs</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Gérez votre temps de manière autonome en suivant précisément le temps passé sur chaque projet 
                    client. Le chronomètre standard est parfait pour facturer vos heures avec précision. Le 
                    calculateur vous aide à estimer vos devis et à planifier vos journées de travail entre 
                    plusieurs projets simultanés.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">👨‍<FontAwesomeIcon icon={faLaptop} className="inline" /> Développeurs et Créatifs</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Les tâches créatives et techniques nécessitent une concentration soutenue. Timer Focus vous 
                    aide à entrer et maintenir l&apos;état de flow nécessaire à la programmation, au design, à 
                    l&apos;écriture ou à toute autre activité créative. Les sessions Pomodoro préviennent 
                    l&apos;épuisement créatif et maintiennent votre inspiration fraîche.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faHome} className="inline" /> Télétravailleurs</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Le télétravail brouille souvent les frontières entre vie professionnelle et personnelle. 
                    Timer Focus vous aide à maintenir une discipline de travail saine avec des sessions structurées 
                    et des pauses planifiées. Évitez le piège de travailler sans arrêt et préservez votre 
                    équilibre vie professionnelle-vie personnelle.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Notre Engagement envers Vous</h2>
              
              <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 p-6 mb-6 rounded-r-lg">
                <h3 className="text-xl font-semibold mb-3 text-blue-900 dark:text-blue-100">
                  Nos Promesses
                </h3>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span><strong>Toujours gratuit :</strong> Nous nous engageons à maintenir Timer Focus 
                    gratuit et accessible à tous, sans créer de version payante qui limiterait les fonctionnalités 
                    de base.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span><strong>Respect de la vie privée :</strong> Vos données restent sur votre appareil. 
                    Nous ne les collectons pas, ne les vendons pas, et ne les partagerons jamais avec des tiers 
                    à des fins commerciales.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span><strong>Amélioration continue :</strong> Nous écoutons vos retours et améliorons 
                    constamment Timer Focus en ajoutant des fonctionnalités utiles et en corrigeant les bugs 
                    rapidement.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span><strong>Support réactif :</strong> Notre équipe est disponible pour répondre à vos 
                    questions et résoudre vos problèmes dans les meilleurs délais.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span><strong>Transparence totale :</strong> Nous sommes transparents sur nos pratiques, 
                    notre modèle économique et l&apos;utilisation de vos données.</span>
                  </li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Technologies et Développement</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Timer Focus est construit avec des technologies web modernes pour assurer performance, 
                fiabilité et sécurité :
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300">
                <li><strong>Next.js 15 :</strong> Framework React moderne pour une expérience utilisateur fluide</li>
                <li><strong>React 19 :</strong> Bibliothèque JavaScript pour une interface réactive</li>
                <li><strong>TypeScript :</strong> Langage typé pour un code robuste et maintenable</li>
                <li><strong>Tailwind CSS :</strong> Framework CSS pour un design responsive et élégant</li>
                <li><strong>LocalStorage API :</strong> Stockage local sécurisé de vos données</li>
                <li><strong>Notifications API :</strong> Alertes de bureau natives du navigateur</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300">
                Notre code est optimisé pour les performances avec un temps de chargement minimal et une 
                consommation de ressources réduite. Nous suivons les meilleures pratiques de développement web 
                et maintenons notre application à jour avec les dernières versions de nos dépendances.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Comment Nous Soutenez</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Timer Focus est financé par la publicité discrète via Google AdSense. Ce modèle économique 
                nous permet de fournir un service entièrement gratuit tout en maintenant la qualité et en 
                investissant dans de nouvelles fonctionnalités.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Vous pouvez nous soutenir de plusieurs manières :
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300">
                <li>
                  <strong>Désactivez votre bloqueur de publicités</strong> sur notre site. Les publicités que 
                  nous affichons sont soigneusement sélectionnées par Google pour être pertinentes et non 
                  intrusives.
                </li>
                <li>
                  <strong>Partagez Timer Focus</strong> avec vos collègues, amis, famille et sur les réseaux 
                  sociaux. Le bouche-à-oreille est notre meilleure publicité.
                </li>
                <li>
                  <strong>Donnez-nous vos retours</strong> via notre <Link href="/contact" className="text-blue-600 dark:text-blue-400 hover:underline">page de contact</Link>. 
                  Vos suggestions nous aident à améliorer constamment l&apos;application.
                </li>
                <li>
                  <strong>Laissez un avis</strong> si vous utilisez régulièrement Timer Focus. Les témoignages 
                  positifs nous motivent et aident d&apos;autres personnes à découvrir notre application.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Notre Vision pour l&apos;Avenir</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Nous avons de nombreux projets pour continuer à améliorer Timer Focus et répondre aux besoins 
                de notre communauté d&apos;utilisateurs. Voici quelques-unes de nos idées pour l&apos;avenir :
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300">
                <li>Statistiques et rapports de productivité pour suivre votre progression</li>
                <li>Personnalisation des durées Pomodoro (25/5 min par défaut)</li>
                <li>Sons de notification personnalisables</li>
                <li>Thèmes visuels supplémentaires</li>
                <li>Mode hors ligne amélioré avec Progressive Web App (PWA)</li>
                <li>Intégrations avec d&apos;autres outils de productivité</li>
                <li>Version mobile native pour iOS et Android</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300">
                Ces fonctionnalités seront toujours développées avec notre philosophie de simplicité et 
                d&apos;accessibilité. Nous ne voulons pas créer une application surchargée, mais ajouter 
                uniquement des fonctionnalités qui apportent une vraie valeur ajoutée.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Rejoignez Notre Communauté</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Timer Focus, c&apos;est avant tout une communauté de personnes qui partagent un objectif commun : 
                travailler plus efficacement pour vivre mieux. Nous encourageons nos utilisateurs à partager 
                leurs expériences, leurs conseils de productivité et leurs retours sur l&apos;application.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                N&apos;hésitez pas à nous <Link href="/contact" className="text-blue-600 dark:text-blue-400 hover:underline">contacter</Link> 
                {" "}pour partager votre histoire, suggérer des améliorations ou simplement nous dire bonjour. 
                Chaque message compte et nous aide à construire une meilleure application pour tous.
              </p>
            </section>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200 dark:border-blue-800 p-6 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                Prêt à Améliorer Votre Productivité ?
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Rejoignez des milliers d&apos;utilisateurs qui ont déjà transformé leur façon de travailler 
                avec Timer Focus.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link 
                  href="/timer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 px-8 py-3 text-lg font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-blue-500"
                >
                  Commencer Maintenant
                </Link>
                <Link 
                  href="/guide"
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 px-8 py-3 text-lg font-semibold transition-colors"
                >
                  Lire le Guide
                </Link>
              </div>
            </div>
          </article>
        </main>

        <footer className="mt-8 text-center">
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600 dark:text-gray-400">
            <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Accueil</Link>
            <Link href="/contact" className="hover:text-blue-600 dark:hover:text-blue-400">Contact</Link>
            <Link href="/politique-confidentialite" className="hover:text-blue-600 dark:hover:text-blue-400">Politique de confidentialité</Link>
            <Link href="/conditions-utilisation" className="hover:text-blue-600 dark:hover:text-blue-400">Conditions d&apos;utilisation</Link>
          </div>
        </footer>
      </div>
    </div>
  );
}
