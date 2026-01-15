import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact - Timer Focus Gratuit",
  description: "Contactez l'équipe de Timer Focus pour toute question, suggestion ou demande d'assistance concernant notre application de timer en ligne gratuit.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
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
            Contactez-nous
          </h1>
          <p className="text-center text-gray-600 dark:text-gray-400 text-base sm:text-lg">
            Nous sommes là pour vous aider et répondre à toutes vos questions
          </p>
        </header>

        <main className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 sm:p-6 md:p-8">
          <article className="prose prose-sm sm:prose-base lg:prose-lg dark:prose-invert max-w-3xl mx-auto">
            <section className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Bienvenue sur notre page de contact</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Nous sommes heureux que vous utilisiez Timer Focus et nous apprécions vos retours. Que vous ayez 
                une question, une suggestion d&apos;amélioration, un problème technique à signaler ou simplement 
                un commentaire à partager, nous sommes à votre écoute.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Notre équipe s&apos;efforce de répondre à toutes les demandes dans les meilleurs délais, 
                généralement sous 48 heures ouvrées. Pour les demandes urgentes ou complexes, le délai de 
                réponse peut être légèrement plus long, mais nous ferons de notre mieux pour vous aider rapidement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Comment nous contacter ?</h2>
              
              <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 p-4 sm:p-6 mb-6 rounded-r-lg">
                <h3 className="text-xl font-semibold mb-3 text-blue-900 dark:text-blue-100">
                  📧 Par email
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Pour nous contacter, veuillez envoyer un email à :
                </p>
                <p className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-3">
                  contact@timer-focus.com
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                  Note : Veuillez inclure le maximum de détails dans votre message (type de navigateur, système 
                  d&apos;exploitation, description du problème, captures d&apos;écran si pertinent) pour nous 
                  permettre de vous aider plus efficacement.
                </p>
              </div>

              <div className="bg-gray-100 dark:bg-gray-700 p-4 sm:p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">
                  ⏱️ Délai de réponse
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Délai standard :</strong> 24-48 heures ouvrées (du lundi au vendredi)
                  <br />
                  <strong>Demandes complexes :</strong> 3-5 jours ouvrés maximum
                  <br />
                  <strong>Week-ends et jours fériés :</strong> Les demandes reçues seront traitées le prochain 
                  jour ouvrable
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Pour quels types de demandes nous contacter ?</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                    <span className="text-2xl">🐛</span>
                    Signaler un bug ou un problème technique
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    Si vous rencontrez un problème technique avec notre application (timer qui ne fonctionne pas, 
                    erreurs d&apos;affichage, notifications qui ne s&apos;affichent pas, etc.), n&apos;hésitez pas 
                    à nous le signaler.
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                    <strong>Informations utiles à inclure :</strong> Type et version de navigateur, système 
                    d&apos;exploitation, description détaillée du problème, étapes pour reproduire le bug, 
                    captures d&apos;écran si possible.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                    <span className="text-2xl">💡</span>
                    Suggérer une amélioration ou une nouvelle fonctionnalité
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Vous avez une idée pour améliorer Timer Focus ? Une fonctionnalité que vous aimeriez voir 
                    ajoutée ? Nous sommes toujours intéressés par vos suggestions pour rendre notre application 
                    encore plus utile et pratique.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                    <span className="text-2xl">❓</span>
                    Poser une question sur l&apos;utilisation
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    Vous ne comprenez pas comment utiliser une fonctionnalité ? Vous avez besoin d&apos;aide pour 
                    configurer les notifications ? N&apos;hésitez pas à nous poser vos questions.
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                    <strong>Conseil :</strong> Consultez d&apos;abord notre <Link href="/guide" className="text-blue-600 dark:text-blue-400 hover:underline">guide de productivité</Link> 
                    {" "}qui répond aux questions les plus fréquentes.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                    <span className="text-2xl">🔒</span>
                    Questions sur la confidentialité et les données
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    Vous avez des préoccupations concernant vos données personnelles ? Des questions sur notre 
                    utilisation des cookies ou de Google Analytics ? Nous sommes là pour vous répondre en toute 
                    transparence.
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                    <strong>À lire :</strong> Notre <Link href="/politique-confidentialite" className="text-blue-600 dark:text-blue-400 hover:underline">politique de confidentialité</Link> 
                    {" "}détaille comment nous gérons vos données.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                    <span className="text-2xl">⚖️</span>
                    Questions juridiques ou de conformité
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    Pour toute question concernant nos conditions d&apos;utilisation, notre conformité RGPD, 
                    ou toute autre question juridique.
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                    <strong>Ressources :</strong> Consultez nos <Link href="/conditions-utilisation" className="text-blue-600 dark:text-blue-400 hover:underline">conditions d&apos;utilisation</Link> 
                    {" "}pour plus d&apos;informations.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                    <span className="text-2xl">🤝</span>
                    Partenariats et collaboration
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Vous souhaitez établir un partenariat avec nous, intégrer notre timer dans votre site, 
                    ou proposer une collaboration ? Contactez-nous pour discuter des opportunités.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                    <span className="text-2xl">💬</span>
                    Partager vos retours d&apos;expérience
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Vous utilisez Timer Focus régulièrement et souhaitez partager votre expérience ? Nous adorons 
                    recevoir des témoignages de nos utilisateurs et comprendre comment notre application vous aide 
                    au quotidien.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Foire aux questions (FAQ)</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Avant de nous contacter, consultez ces réponses aux questions les plus fréquentes qui pourraient 
                résoudre votre problème immédiatement :
              </p>

              <div className="space-y-4">
                <details className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                  <summary className="font-semibold cursor-pointer text-gray-900 dark:text-gray-100">
                    Le timer ne se sauvegarde pas quand je ferme mon navigateur
                  </summary>
                  <p className="mt-2 text-gray-700 dark:text-gray-300">
                    Notre application utilise le LocalStorage de votre navigateur pour sauvegarder vos données. 
                    Si vos données ne sont pas sauvegardées, vérifiez que :
                  </p>
                  <ul className="list-disc pl-6 mt-2 text-gray-700 dark:text-gray-300">
                    <li>Vous n&apos;utilisez pas le mode navigation privée/incognito</li>
                    <li>Les cookies et le stockage local sont activés dans votre navigateur</li>
                    <li>Vous n&apos;effacez pas automatiquement les données à la fermeture du navigateur</li>
                  </ul>
                </details>

                <details className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                  <summary className="font-semibold cursor-pointer text-gray-900 dark:text-gray-100">
                    Les notifications ne s&apos;affichent pas
                  </summary>
                  <p className="mt-2 text-gray-700 dark:text-gray-300">
                    Pour recevoir les notifications de fin de session Pomodoro, vous devez :
                  </p>
                  <ul className="list-disc pl-6 mt-2 text-gray-700 dark:text-gray-300">
                    <li>Autoriser les notifications dans votre navigateur (une popup apparaît la première fois)</li>
                    <li>Vérifier les paramètres de notification de votre système d&apos;exploitation</li>
                    <li>Ne pas avoir activé le mode &quot;Ne pas déranger&quot; sur votre appareil</li>
                  </ul>
                </details>

                <details className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                  <summary className="font-semibold cursor-pointer text-gray-900 dark:text-gray-100">
                    Le timer n&apos;est pas précis
                  </summary>
                  <p className="mt-2 text-gray-700 dark:text-gray-300">
                    Les timers JavaScript peuvent parfois être légèrement imprécis en raison de la gestion des 
                    ressources par le navigateur. Pour une précision optimale :
                  </p>
                  <ul className="list-disc pl-6 mt-2 text-gray-700 dark:text-gray-300">
                    <li>Gardez l&apos;onglet Timer Focus actif (ne le mettez pas en arrière-plan)</li>
                    <li>Fermez les applications gourmandes en ressources</li>
                    <li>Utilisez un navigateur moderne et à jour</li>
                  </ul>
                </details>

                <details className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                  <summary className="font-semibold cursor-pointer text-gray-900 dark:text-gray-100">
                    Puis-je utiliser Timer Focus hors ligne ?
                  </summary>
                  <p className="mt-2 text-gray-700 dark:text-gray-300">
                    Actuellement, Timer Focus nécessite une connexion Internet pour charger l&apos;application. 
                    Une fois chargée, les fonctionnalités de base (timer, Pomodoro) fonctionnent sans connexion, 
                    mais les publicités et les statistiques Google Analytics ne seront pas disponibles hors ligne.
                  </p>
                </details>

                <details className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                  <summary className="font-semibold cursor-pointer text-gray-900 dark:text-gray-100">
                    Comment désactiver les publicités ?
                  </summary>
                  <p className="mt-2 text-gray-700 dark:text-gray-300">
                    Timer Focus est entièrement gratuit et financé par la publicité. Les publicités nous permettent 
                    de maintenir le service gratuitement pour tous. Si vous utilisez un bloqueur de publicités, 
                    nous vous invitons à mettre notre site en liste blanche pour nous soutenir. Nous veillons à ce 
                    que les publicités restent discrètes et n&apos;interfèrent pas avec votre productivité.
                  </p>
                </details>

                <details className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                  <summary className="font-semibold cursor-pointer text-gray-900 dark:text-gray-100">
                    Mes données sont-elles sécurisées ?
                  </summary>
                  <p className="mt-2 text-gray-700 dark:text-gray-300">
                    Absolument. Vos données de timer sont stockées localement sur votre appareil via LocalStorage 
                    et ne sont jamais transmises à nos serveurs. Nous utilisons uniquement Google Analytics pour 
                    des statistiques anonymisées. Consultez notre <Link href="/politique-confidentialite" className="text-blue-600 dark:text-blue-400 hover:underline">politique de confidentialité</Link> 
                    {" "}pour plus de détails.
                  </p>
                </details>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Exercer vos droits RGPD</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez de plusieurs 
                droits concernant vos données personnelles :
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300">
                <li><strong>Droit d&apos;accès :</strong> Demander une copie de vos données</li>
                <li><strong>Droit de rectification :</strong> Corriger des données inexactes</li>
                <li><strong>Droit à l&apos;effacement :</strong> Demander la suppression de vos données</li>
                <li><strong>Droit à la limitation :</strong> Limiter le traitement de vos données</li>
                <li><strong>Droit d&apos;opposition :</strong> Vous opposer au traitement de vos données</li>
                <li><strong>Droit à la portabilité :</strong> Recevoir vos données dans un format structuré</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300">
                Pour exercer ces droits, envoyez-nous un email à <strong>contact@timer-focus.com</strong> avec 
                l&apos;objet &quot;RGPD - [Type de demande]&quot;. Nous traiterons votre demande dans un délai 
                maximum de 30 jours.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Signaler un abus ou un contenu inapproprié</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Si vous constatez un comportement abusif, du contenu inapproprié dans les publicités affichées, 
                ou toute autre violation de nos <Link href="/conditions-utilisation" className="text-blue-600 dark:text-blue-400 hover:underline">conditions d&apos;utilisation</Link>, 
                veuillez nous le signaler immédiatement.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Nous prenons ces signalements très au sérieux et enquêterons sur chaque cas. Pour les publicités 
                inappropriées de Google AdSense, vous pouvez également utiliser l&apos;outil de signalement de 
                Google directement sur l&apos;annonce.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Nous suivre et rester informé</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Bien que nous n&apos;ayons pas encore de présence sur les réseaux sociaux, nous prévoyons de créer 
                des canaux de communication pour partager les mises à jour, les nouvelles fonctionnalités et les 
                conseils de productivité.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                En attendant, n&apos;hésitez pas à partager Timer Focus avec vos collègues, amis et famille qui 
                pourraient bénéficier d&apos;un outil de gestion du temps simple et efficace.
              </p>
            </section>

            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 p-6 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-3 text-blue-900 dark:text-blue-100">
                Une question ? Contactez-nous !
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Notre équipe est là pour vous aider et améliorer constamment votre expérience avec Timer Focus.
              </p>
              <p className="text-xl font-semibold text-blue-600 dark:text-blue-400">
                📧 contact@timer-focus.com
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
                Nous répondons généralement sous 24-48 heures ouvrées
              </p>
            </div>
          </article>
        </main>

        <footer className="mt-8 text-center">
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600 dark:text-gray-400">
            <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Accueil</Link>
            <Link href="/a-propos" className="hover:text-blue-600 dark:hover:text-blue-400">À propos</Link>
            <Link href="/politique-confidentialite" className="hover:text-blue-600 dark:hover:text-blue-400">Politique de confidentialité</Link>
            <Link href="/conditions-utilisation" className="hover:text-blue-600 dark:hover:text-blue-400">Conditions d&apos;utilisation</Link>
          </div>
        </footer>
      </div>
    </div>
  );
}
