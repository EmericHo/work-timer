import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ - Questions Fréquentes sur Timer Focus",
  description: "Trouvez des réponses à vos questions sur notre timer en ligne gratuit, la technique Pomodoro, les fonctionnalités, et l'utilisation de l'application Timer Focus.",
  alternates: {
    canonical: "/faq",
  },
};

export default function FAQPage() {
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
            Questions Fréquentes (FAQ)
          </h1>
          <p className="text-center text-gray-600 dark:text-gray-400 text-base sm:text-lg">
            Toutes les réponses à vos questions sur Timer Focus
          </p>
        </header>

        <main className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 sm:p-6 md:p-8">
          <article className="prose prose-sm sm:prose-base lg:prose-lg dark:prose-invert max-w-3xl mx-auto">
            <section className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Général</h2>
              
              <details className="mb-4 bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <summary className="font-semibold cursor-pointer text-lg text-gray-900 dark:text-gray-100">
                  Qu&apos;est-ce que Timer Focus ?
                </summary>
                <div className="mt-3 text-gray-700 dark:text-gray-300">
                  <p className="mb-2">
                    Timer Focus est une application web gratuite de gestion du temps qui combine plusieurs outils de 
                    productivité :
                  </p>
                  <ul className="list-disc pl-6">
                    <li>Un chronomètre standard pour mesurer le temps de travail</li>
                    <li>Un compte à rebours personnalisable</li>
                    <li>Un mode Pomodoro avec cycles automatiques de 25/5 minutes</li>
                    <li>Un calculateur de temps de travail</li>
                  </ul>
                  <p className="mt-2">
                    L&apos;objectif est d&apos;aider les professionnels, étudiants et freelances à améliorer leur 
                    concentration et leur productivité au travail.
                  </p>
                </div>
              </details>

              <details className="mb-4 bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <summary className="font-semibold cursor-pointer text-lg text-gray-900 dark:text-gray-100">
                  Timer Focus est-il vraiment gratuit ?
                </summary>
                <div className="mt-3 text-gray-700 dark:text-gray-300">
                  <p className="mb-2">
                    <strong>Oui, 100% gratuit !</strong> Timer Focus est entièrement gratuit et le restera toujours. 
                    Il n&apos;y a pas de version premium, pas de fonctionnalités cachées, et pas de limite d&apos;utilisation.
                  </p>
                  <p className="mb-2">
                    Notre application est financée par la publicité discrète de Google AdSense, ce qui nous permet de 
                    maintenir le service gratuit pour tous sans compromettre votre expérience utilisateur.
                  </p>
                  <p>
                    Vous n&apos;avez même pas besoin de créer un compte pour utiliser Timer Focus. Ouvrez simplement 
                    votre navigateur et commencez !
                  </p>
                </div>
              </details>

              <details className="mb-4 bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <summary className="font-semibold cursor-pointer text-lg text-gray-900 dark:text-gray-100">
                  Ai-je besoin de créer un compte ?
                </summary>
                <div className="mt-3 text-gray-700 dark:text-gray-300">
                  <p className="mb-2">
                    Non, aucun compte n&apos;est nécessaire ! C&apos;est l&apos;un des grands avantages de Timer Focus. 
                    Vous pouvez utiliser tous les outils immédiatement sans inscription, sans email, et sans mot de passe.
                  </p>
                  <p>
                    Vos données (temps des timers, paramètres) sont stockées localement dans votre navigateur, vous 
                    gardez donc le contrôle total sur vos informations.
                  </p>
                </div>
              </details>

              <details className="mb-4 bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <summary className="font-semibold cursor-pointer text-lg text-gray-900 dark:text-gray-100">
                  Sur quels appareils puis-je utiliser Timer Focus ?
                </summary>
                <div className="mt-3 text-gray-700 dark:text-gray-300">
                  <p className="mb-2">
                    Timer Focus fonctionne sur <strong>tous les appareils</strong> avec un navigateur web moderne :
                  </p>
                  <ul className="list-disc pl-6 mb-2">
                    <li><strong>Ordinateurs :</strong> Windows, Mac, Linux, Chromebook</li>
                    <li><strong>Tablettes :</strong> iPad, tablettes Android, Surface</li>
                    <li><strong>Smartphones :</strong> iPhone, Android</li>
                  </ul>
                  <p className="mb-2">
                    <strong>Navigateurs supportés :</strong> Chrome, Firefox, Safari, Edge, Opera et tous les 
                    navigateurs modernes.
                  </p>
                  <p>
                    Notre design responsive s&apos;adapte automatiquement à la taille de votre écran pour une 
                    expérience optimale sur n&apos;importe quel appareil.
                  </p>
                </div>
              </details>

              <details className="mb-4 bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <summary className="font-semibold cursor-pointer text-lg text-gray-900 dark:text-gray-100">
                  Timer Focus fonctionne-t-il hors ligne ?
                </summary>
                <div className="mt-3 text-gray-700 dark:text-gray-300">
                  <p className="mb-2">
                    <strong>Partiellement.</strong> Timer Focus nécessite une connexion Internet pour le chargement 
                    initial de l&apos;application.
                  </p>
                  <p className="mb-2">
                    Une fois chargée dans votre navigateur, les fonctionnalités principales (timer, Pomodoro, compte 
                    à rebours) continuent de fonctionner même si vous perdez votre connexion Internet.
                  </p>
                  <p>
                    <strong>Limitations hors ligne :</strong> Les publicités et les statistiques Google Analytics ne 
                    fonctionneront pas sans connexion Internet, mais cela n&apos;affecte pas l&apos;utilisation des timers.
                  </p>
                </div>
              </details>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Technique Pomodoro</h2>
              
              <details className="mb-4 bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <summary className="font-semibold cursor-pointer text-lg text-gray-900 dark:text-gray-100">
                  Qu&apos;est-ce que la technique Pomodoro exactement ?
                </summary>
                <div className="mt-3 text-gray-700 dark:text-gray-300">
                  <p className="mb-2">
                    La technique Pomodoro est une méthode de gestion du temps développée par Francesco Cirillo à la 
                    fin des années 1980. Le nom vient du minuteur en forme de tomate (pomodoro en italien) qu&apos;il 
                    utilisait.
                  </p>
                  <p className="mb-2">
                    <strong>Principe de base :</strong>
                  </p>
                  <ol className="list-decimal pl-6 mb-2">
                    <li>Choisir une tâche à accomplir</li>
                    <li>Régler le timer sur 25 minutes (1 Pomodoro)</li>
                    <li>Travailler sans interruption jusqu&apos;à la sonnerie</li>
                    <li>Prendre une pause de 5 minutes</li>
                    <li>Après 4 Pomodoros, prendre une pause plus longue de 15-30 minutes</li>
                  </ol>
                  <p>
                    Cette méthode est scientifiquement prouvée pour améliorer la concentration, réduire la fatigue 
                    mentale, et augmenter la productivité.
                  </p>
                </div>
              </details>

              <details className="mb-4 bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <summary className="font-semibold cursor-pointer text-lg text-gray-900 dark:text-gray-100">
                  Pourquoi 25 minutes ? Puis-je changer cette durée ?
                </summary>
                <div className="mt-3 text-gray-700 dark:text-gray-300">
                  <p className="mb-2">
                    <strong>Pourquoi 25 minutes ?</strong>
                  </p>
                  <p className="mb-2">
                    Des études en psychologie cognitive ont montré que notre capacité de concentration optimale se 
                    maintient pendant environ 25-30 minutes de travail soutenu. Au-delà, la qualité de notre attention 
                    commence à décliner. Les 25 minutes représentent donc un équilibre parfait entre productivité et 
                    maintien de la concentration.
                  </p>
                  <p className="mb-2">
                    <strong>Peut-on changer cette durée ?</strong>
                  </p>
                  <p className="mb-2">
                    Actuellement, notre mode Pomodoro utilise le format standard de 25/5 minutes. Cependant, vous 
                    pouvez utiliser le <strong>compte à rebours personnalisable</strong> pour créer vos propres 
                    intervalles de temps selon vos besoins :
                  </p>
                  <ul className="list-disc pl-6">
                    <li><strong>15 minutes :</strong> Pour les tâches simples ou si vous débutez</li>
                    <li><strong>50 minutes :</strong> Pour des sessions de deep work intense</li>
                    <li><strong>45 minutes :</strong> Format adapté aux étudiants (aligné sur les cours)</li>
                  </ul>
                </div>
              </details>

              <details className="mb-4 bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <summary className="font-semibold cursor-pointer text-lg text-gray-900 dark:text-gray-100">
                  Que faire si je suis interrompu pendant un Pomodoro ?
                </summary>
                <div className="mt-3 text-gray-700 dark:text-gray-300">
                  <p className="mb-2">
                    Les interruptions sont l&apos;ennemi de la productivité. Voici comment les gérer :
                  </p>
                  <p className="mb-2">
                    <strong>Interruptions internes (vos propres pensées) :</strong>
                  </p>
                  <ul className="list-disc pl-6 mb-2">
                    <li>Notez rapidement la pensée sur un papier</li>
                    <li>Dites-vous &quot;Je m&apos;en occuperai pendant ma pause&quot;</li>
                    <li>Retournez immédiatement à votre tâche</li>
                  </ul>
                  <p className="mb-2">
                    <strong>Interruptions externes (collègues, téléphone) :</strong>
                  </p>
                  <ul className="list-disc pl-6 mb-2">
                    <li>
                      <strong>Si c&apos;est urgent :</strong> Arrêtez le Pomodoro, gérez l&apos;urgence, puis 
                      recommencez un nouveau Pomodoro complet de 25 minutes
                    </li>
                    <li>
                      <strong>Si ce n&apos;est pas urgent :</strong> Demandez poliment si vous pouvez traiter la 
                      demande dans X minutes (votre temps restant)
                    </li>
                  </ul>
                  <p>
                    <strong>Prévention :</strong> Informez votre entourage quand vous entrez en mode Pomodoro, 
                    mettez votre téléphone en silencieux, et fermez vos notifications.
                  </p>
                </div>
              </details>

              <details className="mb-4 bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <summary className="font-semibold cursor-pointer text-lg text-gray-900 dark:text-gray-100">
                  Est-ce que sauter les pauses va me rendre plus productif ?
                </summary>
                <div className="mt-3 text-gray-700 dark:text-gray-300">
                  <p className="mb-2">
                    <strong>Non, absolument pas !</strong> C&apos;est l&apos;une des erreurs les plus courantes.
                  </p>
                  <p className="mb-2">
                    Les pauses ne sont pas une perte de temps, elles sont un <strong>investissement dans votre 
                    productivité</strong>. Voici pourquoi :
                  </p>
                  <ul className="list-disc pl-6 mb-2">
                    <li>
                      <strong>Consolidation de la mémoire :</strong> Votre cerveau a besoin de pauses pour traiter 
                      et consolider les informations que vous venez d&apos;apprendre
                    </li>
                    <li>
                      <strong>Prévention de l&apos;épuisement :</strong> Travailler sans pause mène rapidement à 
                      la fatigue cognitive et à une baisse de performance
                    </li>
                    <li>
                      <strong>Créativité :</strong> Les pauses permettent à votre esprit de vagabonder, ce qui 
                      favorise la créativité et la résolution de problèmes
                    </li>
                    <li>
                      <strong>Santé physique :</strong> Se lever et bouger régulièrement est essentiel pour votre 
                      santé (circulation sanguine, yeux, posture)
                    </li>
                  </ul>
                  <p>
                    <strong>Résultat :</strong> En respectant les pauses, vous maintiendrez un niveau de productivité 
                    élevé toute la journée, plutôt que de vous épuiser rapidement.
                  </p>
                </div>
              </details>

              <details className="mb-4 bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <summary className="font-semibold cursor-pointer text-lg text-gray-900 dark:text-gray-100">
                  Combien de Pomodoros devrais-je faire par jour ?
                </summary>
                <div className="mt-3 text-gray-700 dark:text-gray-300">
                  <p className="mb-2">
                    Il n&apos;y a pas de nombre &quot;idéal&quot; universel, car cela dépend de nombreux facteurs. 
                    Voici des recommandations basées sur des moyennes observées :
                  </p>
                  <div className="space-y-3 mb-2">
                    <div className="bg-gray-100 dark:bg-gray-600 p-3 rounded">
                      <p className="font-semibold mb-1">🟢 Débutant (1-2 semaines d&apos;expérience)</p>
                      <p className="text-sm">4-6 Pomodoros par jour (1h40 - 2h30 de travail concentré)</p>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-600 p-3 rounded">
                      <p className="font-semibold mb-1">🟡 Intermédiaire (1-3 mois d&apos;expérience)</p>
                      <p className="text-sm">8-10 Pomodoros par jour (3h20 - 4h10 de travail concentré)</p>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-600 p-3 rounded">
                      <p className="font-semibold mb-1">🔵 Avancé (3+ mois d&apos;expérience)</p>
                      <p className="text-sm">10-12 Pomodoros par jour (4h10 - 5h de travail concentré)</p>
                    </div>
                  </div>
                  <p className="mb-2">
                    <strong>Important :</strong> Ces chiffres représentent du travail de <strong>deep work</strong> 
                    (concentration intense). Ils n&apos;incluent pas :
                  </p>
                  <ul className="list-disc pl-6 mb-2">
                    <li>Les réunions</li>
                    <li>Les pauses déjeuner</li>
                    <li>Les tâches administratives légères</li>
                    <li>Les emails et messagerie</li>
                  </ul>
                  <p>
                    <strong>Conseil :</strong> Commencez petit et augmentez progressivement. La qualité est plus 
                    importante que la quantité !
                  </p>
                </div>
              </details>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Fonctionnalités et Utilisation</h2>
              
              <details className="mb-4 bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <summary className="font-semibold cursor-pointer text-lg text-gray-900 dark:text-gray-100">
                  Mes données sont-elles sauvegardées si je ferme mon navigateur ?
                </summary>
                <div className="mt-3 text-gray-700 dark:text-gray-300">
                  <p className="mb-2">
                    <strong>Oui !</strong> Timer Focus utilise le LocalStorage de votre navigateur pour sauvegarder 
                    automatiquement :
                  </p>
                  <ul className="list-disc pl-6 mb-2">
                    <li>L&apos;état actuel de votre timer (temps écoulé, en cours/pause)</li>
                    <li>Vos paramètres de Pomodoro</li>
                    <li>Vos préférences d&apos;affichage</li>
                  </ul>
                  <p className="mb-2">
                    Même si vous fermez votre navigateur ou redémarrez votre ordinateur, vous retrouverez votre 
                    timer exactement où vous l&apos;aviez laissé.
                  </p>
                  <p className="mb-2">
                    <strong>Attention :</strong> Les données sont stockées <strong>par navigateur et par appareil</strong>. 
                    Si vous changez de navigateur ou d&apos;appareil, vous repartez de zéro (ce qui est généralement 
                    voulu pour un timer).
                  </p>
                  <p>
                    <strong>Cas où les données ne sont pas sauvegardées :</strong>
                  </p>
                  <ul className="list-disc pl-6">
                    <li>Vous utilisez le mode navigation privée/incognito</li>
                    <li>Vous avez désactivé les cookies et le stockage local</li>
                    <li>Vous effacez manuellement les données de navigation</li>
                  </ul>
                </div>
              </details>

              <details className="mb-4 bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <summary className="font-semibold cursor-pointer text-lg text-gray-900 dark:text-gray-100">
                  Comment activer les notifications de bureau ?
                </summary>
                <div className="mt-3 text-gray-700 dark:text-gray-300">
                  <p className="mb-2">
                    Les notifications vous alertent quand votre session Pomodoro se termine. Voici comment les activer :
                  </p>
                  <p className="mb-2">
                    <strong>Lors de votre première utilisation du Pomodoro :</strong>
                  </p>
                  <ol className="list-decimal pl-6 mb-2">
                    <li>Lancez un Pomodoro</li>
                    <li>Votre navigateur affichera une popup demandant l&apos;autorisation d&apos;envoyer des notifications</li>
                    <li>Cliquez sur &quot;Autoriser&quot; ou &quot;Allow&quot;</li>
                  </ol>
                  <p className="mb-2">
                    <strong>Si vous avez bloqué les notifications par erreur :</strong>
                  </p>
                  <ul className="list-disc pl-6 mb-2">
                    <li>
                      <strong>Chrome :</strong> Cliquez sur le cadenas à gauche de l&apos;URL → Paramètres du site → 
                      Notifications → Autoriser
                    </li>
                    <li>
                      <strong>Firefox :</strong> Cliquez sur le bouclier/cadenas → Plus d&apos;informations → 
                      Permissions → Notifications → Autoriser
                    </li>
                    <li>
                      <strong>Safari :</strong> Safari → Préférences → Sites web → Notifications → Cherchez le 
                      site → Autoriser
                    </li>
                  </ul>
                  <p>
                    <strong>Note :</strong> Les notifications fonctionnent même si l&apos;onglet Timer Focus n&apos;est 
                    pas actif, ce qui vous permet de travailler dans d&apos;autres applications.
                  </p>
                </div>
              </details>

              <details className="mb-4 bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <summary className="font-semibold cursor-pointer text-lg text-gray-900 dark:text-gray-100">
                  Le timer est-il précis ? J&apos;ai l&apos;impression qu&apos;il dérive.
                </summary>
                <div className="mt-3 text-gray-700 dark:text-gray-300">
                  <p className="mb-2">
                    Les timers JavaScript (comme le nôtre) peuvent avoir une précision légèrement variable selon 
                    les circonstances. Voici pourquoi et comment optimiser :
                  </p>
                  <p className="mb-2">
                    <strong>Facteurs affectant la précision :</strong>
                  </p>
                  <ul className="list-disc pl-6 mb-2">
                    <li>
                      <strong>Onglet en arrière-plan :</strong> Les navigateurs ralentissent les scripts des onglets 
                      inactifs pour économiser les ressources
                    </li>
                    <li>
                      <strong>Charge CPU élevée :</strong> Si votre ordinateur est surchargé, les timers peuvent 
                      être légèrement retardés
                    </li>
                    <li>
                      <strong>Extensions de navigateur :</strong> Certaines extensions peuvent interférer avec 
                      l&apos;exécution JavaScript
                    </li>
                  </ul>
                  <p className="mb-2">
                    <strong>Pour une précision maximale :</strong>
                  </p>
                  <ul className="list-disc pl-6 mb-2">
                    <li>Gardez l&apos;onglet Timer Focus actif (au premier plan)</li>
                    <li>Fermez les applications gourmandes en ressources</li>
                    <li>Utilisez un navigateur moderne et à jour</li>
                    <li>Désactivez temporairement les extensions non essentielles</li>
                  </ul>
                  <p>
                    <strong>Bon à savoir :</strong> Pour un usage typique (sessions Pomodoro de 25 minutes), la 
                    dérive est généralement inférieure à 1-2 secondes, ce qui est négligeable pour la productivité.
                  </p>
                </div>
              </details>

              <details className="mb-4 bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <summary className="font-semibold cursor-pointer text-lg text-gray-900 dark:text-gray-100">
                  Quelle est la différence entre le timer standard et le mode Pomodoro ?
                </summary>
                <div className="mt-3 text-gray-700 dark:text-gray-300">
                  <p className="mb-2">
                    Ce sont deux outils complémentaires avec des usages différents :
                  </p>
                  <div className="space-y-3 mb-2">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded border-l-4 border-blue-600">
                      <p className="font-semibold mb-1">⏱️ Timer Standard (Chronomètre)</p>
                      <p className="text-sm mb-2">
                        <strong>Fonction :</strong> Mesure le temps qui s&apos;écoule (compte vers le haut : 00:00:00, 
                        00:00:01, etc.)
                      </p>
                      <p className="text-sm mb-2">
                        <strong>Quand l&apos;utiliser :</strong>
                      </p>
                      <ul className="text-sm list-disc pl-6">
                        <li>Mesurer combien de temps vous passez sur une tâche</li>
                        <li>Facturer vos heures (freelances, consultants)</li>
                        <li>Suivre la durée réelle de vos projets</li>
                        <li>Quand vous ne savez pas combien de temps prendra la tâche</li>
                      </ul>
                    </div>

                    <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded border-l-4 border-purple-600">
                      <p className="font-semibold mb-1">🍅 Mode Pomodoro</p>
                      <p className="text-sm mb-2">
                        <strong>Fonction :</strong> Alterne automatiquement entre 25 min de travail et 5 min de pause
                      </p>
                      <p className="text-sm mb-2">
                        <strong>Quand l&apos;utiliser :</strong>
                      </p>
                      <ul className="text-sm list-disc pl-6">
                        <li>Maintenir une concentration intense sur une longue période</li>
                        <li>Structurer votre journée de travail</li>
                        <li>Éviter l&apos;épuisement et maintenir votre énergie</li>
                        <li>Développer une discipline de travail</li>
                      </ul>
                    </div>

                    <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded border-l-4 border-green-600">
                      <p className="font-semibold mb-1">⏰ Compte à Rebours</p>
                      <p className="text-sm mb-2">
                        <strong>Fonction :</strong> Compte à rebours personnalisable (ex: 30:00 → 00:00)
                      </p>
                      <p className="text-sm mb-2">
                        <strong>Quand l&apos;utiliser :</strong>
                      </p>
                      <ul className="text-sm list-disc pl-6">
                        <li>Respecter une deadline précise (réunion, présentation)</li>
                        <li>Créer vos propres intervalles Pomodoro personnalisés</li>
                        <li>Time-boxing : limiter le temps consacré à une tâche</li>
                        <li>Exercices chronométrés (pause déjeuner, sport, etc.)</li>
                      </ul>
                    </div>
                  </div>
                  <p>
                    <strong>Conseil :</strong> Beaucoup d&apos;utilisateurs combinent les trois ! Par exemple : 
                    mode Pomodoro le matin pour le deep work, chronomètre l&apos;après-midi pour suivre le temps 
                    des réunions, et compte à rebours pour les pauses déjeuner.
                  </p>
                </div>
              </details>

              <details className="mb-4 bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <summary className="font-semibold cursor-pointer text-lg text-gray-900 dark:text-gray-100">
                  À quoi sert le calculateur de temps de travail ?
                </summary>
                <div className="mt-3 text-gray-700 dark:text-gray-300">
                  <p className="mb-2">
                    Le calculateur de temps de travail vous aide à planifier et estimer la durée de vos tâches et 
                    projets. C&apos;est un outil complémentaire aux timers.
                  </p>
                  <p className="mb-2">
                    <strong>Exemples d&apos;utilisation :</strong>
                  </p>
                  <ul className="list-disc pl-6 mb-2">
                    <li>
                      <strong>Planification de projet :</strong> &quot;Si je travaille 4h par jour sur ce projet, 
                      combien de jours me faudra-t-il pour compléter 20h de travail ?&quot;
                    </li>
                    <li>
                      <strong>Calcul de Pomodoros :</strong> &quot;Combien de Pomodoros (25 min chacun) me 
                      faut-il pour couvrir 3 heures de travail ?&quot;
                    </li>
                    <li>
                      <strong>Facturation :</strong> Pour les freelances - calculer rapidement le montant à 
                      facturer basé sur un taux horaire
                    </li>
                    <li>
                      <strong>Gestion de temps :</strong> Additionner plusieurs sessions de travail pour avoir 
                      le total de la journée/semaine
                    </li>
                  </ul>
                  <p>
                    C&apos;est un outil de <strong>planification</strong> (avant le travail), tandis que les timers 
                    sont des outils de <strong>mesure</strong> (pendant le travail).
                  </p>
                </div>
              </details>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Confidentialité et Sécurité</h2>
              
              <details className="mb-4 bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <summary className="font-semibold cursor-pointer text-lg text-gray-900 dark:text-gray-100">
                  Quelles données collectez-vous sur moi ?
                </summary>
                <div className="mt-3 text-gray-700 dark:text-gray-300">
                  <p className="mb-2">
                    <strong>Très peu !</strong> Nous respectons votre vie privée. Voici exactement ce qui est collecté :
                  </p>
                  <p className="mb-2">
                    <strong>Données stockées LOCALEMENT (sur votre appareil uniquement) :</strong>
                  </p>
                  <ul className="list-disc pl-6 mb-2">
                    <li>État de vos timers (temps écoulé, en cours/pause)</li>
                    <li>Vos paramètres de Pomodoro</li>
                    <li>Vos préférences d&apos;affichage</li>
                  </ul>
                  <p className="mb-2 text-sm italic">
                    ☝️ Ces données ne quittent JAMAIS votre appareil. Nous n&apos;y avons aucun accès.
                  </p>
                  <p className="mb-2">
                    <strong>Données analytiques ANONYMES (via Google Analytics) :</strong>
                  </p>
                  <ul className="list-disc pl-6 mb-2">
                    <li>Type d&apos;appareil et navigateur (anonymisé)</li>
                    <li>Pages visitées</li>
                    <li>Durée de session</li>
                    <li>Pays (mais pas votre ville ou adresse exacte)</li>
                  </ul>
                  <p className="mb-2 text-sm italic">
                    ☝️ Ces données sont totalement anonymes - nous ne pouvons pas vous identifier personnellement.
                  </p>
                  <p className="mb-2">
                    <strong>Ce que nous NE collectons PAS :</strong>
                  </p>
                  <ul className="list-disc pl-6">
                    <li>❌ Votre nom, email ou informations personnelles</li>
                    <li>❌ Vos temps de travail ou tâches spécifiques</li>
                    <li>❌ Vos habitudes de productivité détaillées</li>
                    <li>❌ Votre adresse IP précise</li>
                  </ul>
                  <p className="mt-2">
                    Pour tous les détails, consultez notre <Link href="/politique-confidentialite" className="text-blue-600 dark:text-blue-400 hover:underline">politique de confidentialité complète</Link>.
                  </p>
                </div>
              </details>

              <details className="mb-4 bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <summary className="font-semibold cursor-pointer text-lg text-gray-900 dark:text-gray-100">
                  Mes données de timer sont-elles visibles par d&apos;autres utilisateurs ?
                </summary>
                <div className="mt-3 text-gray-700 dark:text-gray-300">
                  <p className="mb-2">
                    <strong>Non, jamais !</strong> Vos données de timer sont stockées uniquement sur votre appareil 
                    via le LocalStorage de votre navigateur.
                  </p>
                  <p className="mb-2">
                    Cela signifie :
                  </p>
                  <ul className="list-disc pl-6 mb-2">
                    <li>Nous (Timer Focus) n&apos;avons aucun accès à vos données de timer</li>
                    <li>Les autres utilisateurs de Timer Focus ne peuvent pas voir vos données</li>
                    <li>Vos données ne transitent jamais par nos serveurs</li>
                    <li>Même nous ne pourrions pas récupérer vos données si vous les perdiez</li>
                  </ul>
                  <p>
                    C&apos;est l&apos;un des grands avantages d&apos;une application web sans compte : vos données 
                    restent privées à 100%.
                  </p>
                </div>
              </details>

              <details className="mb-4 bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <summary className="font-semibold cursor-pointer text-lg text-gray-900 dark:text-gray-100">
                  Comment supprimer mes données ?
                </summary>
                <div className="mt-3 text-gray-700 dark:text-gray-300">
                  <p className="mb-2">
                    Puisque vos données sont stockées localement sur votre appareil, vous avez le contrôle total 
                    pour les supprimer :
                  </p>
                  <p className="mb-2">
                    <strong>Option 1 : Effacer les données du site (recommandé)</strong>
                  </p>
                  <ul className="list-disc pl-6 mb-2">
                    <li><strong>Chrome :</strong> Paramètres → Confidentialité et sécurité → Effacer les données 
                    de navigation → Cookies et données de site → Cherchez le site → Supprimer</li>
                    <li><strong>Firefox :</strong> Paramètres → Vie privée et sécurité → Cookies et données de 
                    sites → Gérer les données → Cherchez le site → Supprimer</li>
                    <li><strong>Safari :</strong> Préférences → Confidentialité → Gérer les données de sites web → 
                    Cherchez le site → Supprimer</li>
                  </ul>
                  <p className="mb-2">
                    <strong>Option 2 : Réinitialiser manuellement</strong>
                  </p>
                  <p className="mb-2">
                    Sur Timer Focus, cliquez sur le bouton &quot;Réinitialiser&quot; de chaque timer pour remettre 
                    à zéro. Les données seront écrasées la prochaine fois que vous utiliserez le timer.
                  </p>
                  <p>
                    <strong>Option 3 : Mode navigation privée</strong>
                  </p>
                  <p>
                    Utilisez Timer Focus en mode navigation privée/incognito. Toutes les données seront 
                    automatiquement supprimées quand vous fermerez la fenêtre.
                  </p>
                </div>
              </details>

              <details className="mb-4 bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <summary className="font-semibold cursor-pointer text-lg text-gray-900 dark:text-gray-100">
                  Timer Focus est-il conforme au RGPD ?
                </summary>
                <div className="mt-3 text-gray-700 dark:text-gray-300">
                  <p className="mb-2">
                    <strong>Oui, entièrement !</strong> Nous prenons la conformité RGPD très au sérieux.
                  </p>
                  <p className="mb-2">
                    <strong>Voici comment nous respectons le RGPD :</strong>
                  </p>
                  <ul className="list-disc pl-6 mb-2">
                    <li>
                      <strong>Minimisation des données :</strong> Nous collectons uniquement des données anonymes 
                      via Google Analytics
                    </li>
                    <li>
                      <strong>Transparence :</strong> Notre <Link href="/politique-confidentialite" className="text-blue-600 dark:text-blue-400 hover:underline">politique de confidentialité</Link> 
                      {" "}explique clairement quelles données sont collectées et pourquoi
                    </li>
                    <li>
                      <strong>Droit d&apos;accès :</strong> Vous pouvez nous contacter pour toute question sur 
                      vos données
                    </li>
                    <li>
                      <strong>Droit à l&apos;effacement :</strong> Vous pouvez supprimer vos données locales à 
                      tout moment
                    </li>
                    <li>
                      <strong>Sécurité :</strong> Nous utilisons HTTPS pour chiffrer toutes les communications
                    </li>
                    <li>
                      <strong>Pas de transfert hors UE :</strong> Vos données de timer restent sur votre appareil
                    </li>
                  </ul>
                  <p className="mb-2">
                    <strong>Vos droits RGPD :</strong>
                  </p>
                  <ul className="list-disc pl-6">
                    <li>Droit d&apos;accès à vos données</li>
                    <li>Droit de rectification</li>
                    <li>Droit à l&apos;effacement</li>
                    <li>Droit à la portabilité</li>
                    <li>Droit d&apos;opposition au traitement</li>
                  </ul>
                  <p className="mt-2">
                    Pour exercer ces droits, <Link href="/contact" className="text-blue-600 dark:text-blue-400 hover:underline">contactez-nous</Link>.
                  </p>
                </div>
              </details>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Problèmes Techniques</h2>
              
              <details className="mb-4 bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <summary className="font-semibold cursor-pointer text-lg text-gray-900 dark:text-gray-100">
                  Le timer ne fonctionne pas, que faire ?
                </summary>
                <div className="mt-3 text-gray-700 dark:text-gray-300">
                  <p className="mb-2">
                    Si le timer ne démarre pas ou se comporte étrangement, essayez ces solutions dans l&apos;ordre :
                  </p>
                  <ol className="list-decimal pl-6 mb-2 space-y-2">
                    <li>
                      <strong>Rafraîchissez la page (F5 ou Cmd+R)</strong> - Cela résout 90% des problèmes
                    </li>
                    <li>
                      <strong>Vérifiez votre connexion Internet</strong> - Timer Focus nécessite une connexion 
                      pour charger l&apos;application
                    </li>
                    <li>
                      <strong>Videz le cache de votre navigateur</strong> - Un cache corrompu peut causer des problèmes
                    </li>
                    <li>
                      <strong>Désactivez temporairement les extensions</strong> - Certaines extensions (bloqueurs 
                      de pub, VPN) peuvent interférer
                    </li>
                    <li>
                      <strong>Essayez un autre navigateur</strong> - Testez avec Chrome, Firefox ou Edge pour 
                      identifier si c&apos;est un problème de navigateur
                    </li>
                    <li>
                      <strong>Mettez votre navigateur à jour</strong> - Assurez-vous d&apos;utiliser la dernière 
                      version
                    </li>
                  </ol>
                  <p className="mb-2">
                    <strong>Si le problème persiste :</strong>
                  </p>
                  <p>
                    <Link href="/contact" className="text-blue-600 dark:text-blue-400 hover:underline">Contactez-nous</Link> 
                    {" "}en précisant :
                  </p>
                  <ul className="list-disc pl-6">
                    <li>Votre navigateur et sa version</li>
                    <li>Votre système d&apos;exploitation</li>
                    <li>Une description détaillée du problème</li>
                    <li>Des captures d&apos;écran si possible</li>
                  </ul>
                </div>
              </details>

              <details className="mb-4 bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <summary className="font-semibold cursor-pointer text-lg text-gray-900 dark:text-gray-100">
                  Pourquoi y a-t-il des publicités ? Puis-je les supprimer ?
                </summary>
                <div className="mt-3 text-gray-700 dark:text-gray-300">
                  <p className="mb-2">
                    <strong>Pourquoi des publicités ?</strong>
                  </p>
                  <p className="mb-2">
                    Timer Focus est entièrement gratuit et sans inscription. Les publicités (via Google AdSense) 
                    sont notre seule source de revenus et nous permettent de :
                  </p>
                  <ul className="list-disc pl-6 mb-2">
                    <li>Maintenir le service disponible 24/7</li>
                    <li>Payer les frais d&apos;hébergement et de domaine</li>
                    <li>Développer de nouvelles fonctionnalités</li>
                    <li>Fournir un support client</li>
                  </ul>
                  <p className="mb-2">
                    <strong>Nous nous engageons à :</strong>
                  </p>
                  <ul className="list-disc pl-6 mb-2">
                    <li>Limiter le nombre de publicités (maximum 2-3 par page)</li>
                    <li>Afficher uniquement des publicités non intrusives</li>
                    <li>Ne jamais afficher de pop-ups ou de vidéos auto-play</li>
                    <li>Respecter votre expérience utilisateur</li>
                  </ul>
                  <p className="mb-2">
                    <strong>Vous pouvez gérer vos préférences publicitaires :</strong>
                  </p>
                  <p>
                    Visitez les <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">paramètres des annonces Google</a> 
                    {" "}pour contrôler le type de publicités que vous voyez.
                  </p>
                  <p className="mt-2">
                    <strong>Note :</strong> Si vous utilisez un bloqueur de publicités, nous vous invitons à mettre 
                    Timer Focus en liste blanche pour nous soutenir. Cela nous aide à maintenir le service gratuit 
                    pour tous !
                  </p>
                </div>
              </details>

              <details className="mb-4 bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <summary className="font-semibold cursor-pointer text-lg text-gray-900 dark:text-gray-100">
                  Timer Focus fonctionne-t-il sur tous les navigateurs ?
                </summary>
                <div className="mt-3 text-gray-700 dark:text-gray-300">
                  <p className="mb-2">
                    Timer Focus est conçu pour fonctionner sur tous les navigateurs modernes.
                  </p>
                  <p className="mb-2">
                    <strong>Navigateurs officiellement supportés :</strong>
                  </p>
                  <ul className="list-disc pl-6 mb-2">
                    <li>✅ Google Chrome (version 90+)</li>
                    <li>✅ Mozilla Firefox (version 88+)</li>
                    <li>✅ Microsoft Edge (version 90+)</li>
                    <li>✅ Safari (version 14+)</li>
                    <li>✅ Opera (version 76+)</li>
                    <li>✅ Brave</li>
                  </ul>
                  <p className="mb-2">
                    <strong>Navigateurs non supportés :</strong>
                  </p>
                  <ul className="list-disc pl-6 mb-2">
                    <li>❌ Internet Explorer (obsolète, remplacé par Edge)</li>
                    <li>❌ Versions très anciennes de tout navigateur</li>
                  </ul>
                  <p>
                    <strong>Conseil :</strong> Pour une expérience optimale, maintenez toujours votre navigateur 
                    à jour avec la dernière version disponible.
                  </p>
                </div>
              </details>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Suggestions et Support</h2>
              
              <details className="mb-4 bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <summary className="font-semibold cursor-pointer text-lg text-gray-900 dark:text-gray-100">
                  Comment puis-je suggérer une nouvelle fonctionnalité ?
                </summary>
                <div className="mt-3 text-gray-700 dark:text-gray-300">
                  <p className="mb-2">
                    Nous adorons recevoir des suggestions de nos utilisateurs ! Vos idées nous aident à améliorer 
                    constamment Timer Focus.
                  </p>
                  <p className="mb-2">
                    <strong>Pour suggérer une fonctionnalité :</strong>
                  </p>
                  <ol className="list-decimal pl-6 mb-2">
                    <li>
                      Visitez notre <Link href="/contact" className="text-blue-600 dark:text-blue-400 hover:underline">page de contact</Link>
                    </li>
                    <li>
                      Décrivez votre idée en détail :
                      <ul className="list-disc pl-6 mt-1">
                        <li>Quelle fonctionnalité souhaitez-vous ?</li>
                        <li>Quel problème résout-elle ?</li>
                        <li>Comment l&apos;utiliseriez-vous ?</li>
                      </ul>
                    </li>
                    <li>Envoyez votre suggestion</li>
                  </ol>
                  <p className="mb-2">
                    <strong>Ce que nous recherchons dans les suggestions :</strong>
                  </p>
                  <ul className="list-disc pl-6">
                    <li>Fonctionnalités qui bénéficient à beaucoup d&apos;utilisateurs</li>
                    <li>Idées alignées avec notre philosophie de simplicité</li>
                    <li>Améliorations qui n&apos;alourdissent pas l&apos;interface</li>
                    <li>Solutions à des problèmes réels d&apos;utilisateurs</li>
                  </ul>
                  <p className="mt-2">
                    <strong>Note :</strong> Nous lisons toutes les suggestions, mais nous ne pouvons pas garantir 
                    l&apos;implémentation de toutes les idées. Nous priorisons les fonctionnalités qui apportent le 
                    plus de valeur au plus grand nombre d&apos;utilisateurs.
                  </p>
                </div>
              </details>

              <details className="mb-4 bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <summary className="font-semibold cursor-pointer text-lg text-gray-900 dark:text-gray-100">
                  Votre question ne figure pas dans cette FAQ ?
                </summary>
                <div className="mt-3 text-gray-700 dark:text-gray-300">
                  <p className="mb-4">
                    Pas de problème ! Nous sommes là pour vous aider.
                  </p>
                  <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 p-4 rounded-lg">
                    <p className="font-semibold mb-2">📧 Contactez-nous</p>
                    <p className="mb-2">
                      <Link href="/contact" className="text-blue-600 dark:text-blue-400 hover:underline text-lg">
                        Visitez notre page de contact
                      </Link>
                    </p>
                    <p className="text-sm">
                      Notre équipe répond généralement sous 24-48 heures ouvrées. Pour une réponse plus rapide, 
                      incluez le maximum de détails dans votre message.
                    </p>
                  </div>
                </div>
              </details>
            </section>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200 dark:border-blue-800 p-6 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-3">
                Prêt à Booster Votre Productivité ?
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Maintenant que vous savez tout sur Timer Focus, lancez-vous et découvrez comment la technique 
                Pomodoro peut transformer votre façon de travailler !
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link 
                  href="/timer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 px-8 py-3 text-lg font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-blue-500"
                >
                  Essayer Timer Focus
                </Link>
                <Link 
                  href="/guide"
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 px-8 py-3 text-lg font-semibold transition-colors"
                >
                  Lire le Guide Complet
                </Link>
              </div>
            </div>
          </article>
        </main>

        <footer className="mt-8 text-center">
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600 dark:text-gray-400">
            <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Accueil</Link>
            <Link href="/a-propos" className="hover:text-blue-600 dark:hover:text-blue-400">À propos</Link>
            <Link href="/contact" className="hover:text-blue-600 dark:hover:text-blue-400">Contact</Link>
            <Link href="/politique-confidentialite" className="hover:text-blue-600 dark:hover:text-blue-400">Politique de confidentialité</Link>
            <Link href="/conditions-utilisation" className="hover:text-blue-600 dark:hover:text-blue-400">Conditions d&apos;utilisation</Link>
          </div>
        </footer>
      </div>
    </div>
  );
}
