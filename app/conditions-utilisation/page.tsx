import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Conditions d'Utilisation - Timer Focus Gratuit",
  description: "Conditions d'utilisation du Timer Focus : règles et modalités d'utilisation de notre application de timer en ligne gratuit.",
  alternates: {
    canonical: "/conditions-utilisation",
  },
};

export default function TermsOfServicePage() {
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
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Conditions d&apos;Utilisation
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
            Dernière mise à jour : 15 janvier 2026
          </p>
        </header>

        <main className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 sm:p-6 md:p-8">
          <article className="prose prose-sm sm:prose-base lg:prose-lg dark:prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Bienvenue sur Timer Focus</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Merci d&apos;utiliser Timer Focus Gratuit pour Travail. Ces Conditions d&apos;Utilisation 
                (&quot;Conditions&quot;) régissent votre accès et votre utilisation de notre application web de 
                timer en ligne, y compris toutes les fonctionnalités, services et contenus disponibles sur notre site.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                En accédant ou en utilisant notre service, vous acceptez d&apos;être lié par ces Conditions. 
                Si vous n&apos;acceptez pas ces Conditions dans leur intégralité, vous ne devez pas utiliser 
                notre service.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Nous nous réservons le droit de modifier ces Conditions à tout moment. Il est de votre responsabilité 
                de consulter régulièrement cette page pour prendre connaissance des éventuelles modifications. 
                Votre utilisation continue du service après la publication de modifications constitue votre acceptation 
                de ces modifications.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">1. Description du service</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Timer Focus est une application web gratuite qui fournit des outils de gestion du temps, notamment :
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300">
                <li>Un chronomètre standard pour mesurer le temps de travail</li>
                <li>Un compte à rebours personnalisable</li>
                <li>Un mode Pomodoro avec cycles de travail et de pause automatiques</li>
                <li>Un calculateur de temps de travail</li>
                <li>Des notifications de bureau pour les rappels de session</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300">
                Notre service est fourni gratuitement et financé par la publicité (Google AdSense). Nous nous 
                efforçons de maintenir le service disponible et fonctionnel, mais nous ne garantissons pas 
                une disponibilité ininterrompue ou sans erreur.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">2. Utilisation acceptable</h2>
              
              <h3 className="text-xl sm:text-2xl font-semibold mb-3">2.1 Conditions d&apos;accès</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Pour utiliser notre service, vous devez :
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300">
                <li>Avoir l&apos;âge légal dans votre juridiction pour accepter ces Conditions</li>
                <li>Utiliser un navigateur web moderne compatible avec notre application</li>
                <li>Disposer d&apos;une connexion Internet active</li>
                <li>Accepter notre <Link href="/politique-confidentialite" className="text-blue-600 dark:text-blue-400 hover:underline">Politique de Confidentialité</Link></li>
              </ul>

              <h3 className="text-xl sm:text-2xl font-semibold mb-3">2.2 Comportements interdits</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                En utilisant notre service, vous acceptez de ne pas :
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300">
                <li>Violer toute loi ou réglementation applicable</li>
                <li>Utiliser le service à des fins illégales ou non autorisées</li>
                <li>Tenter de contourner, désactiver ou interférer avec les fonctionnalités de sécurité du service</li>
                <li>Utiliser des scripts automatisés, robots ou autres moyens pour accéder au service de manière abusive</li>
                <li>Tenter d&apos;accéder de manière non autorisée à nos systèmes ou réseaux</li>
                <li>Transmettre des virus, malwares ou tout autre code malveillant</li>
                <li>Harceler, menacer ou porter atteinte aux droits d&apos;autrui</li>
                <li>Collecter ou stocker des données personnelles d&apos;autres utilisateurs sans leur consentement</li>
                <li>Reproduire, dupliquer, copier ou revendre toute partie du service sans notre autorisation écrite</li>
                <li>Supprimer ou modifier les mentions de propriété intellectuelle affichées sur le service</li>
                <li>Cliquer frauduleusement sur les publicités affichées sur notre site</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300">
                Toute violation de ces règles peut entraîner la suspension ou la résiliation immédiate de votre 
                accès au service, sans préavis.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">3. Propriété intellectuelle</h2>
              
              <h3 className="text-xl sm:text-2xl font-semibold mb-3">3.1 Nos droits</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Le service Timer Focus, y compris son design, son code, son contenu, ses logos, ses graphiques 
                et tous les éléments qui le composent, sont protégés par les lois sur la propriété intellectuelle, 
                notamment les droits d&apos;auteur, les marques commerciales et autres droits de propriété.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Tous les droits, titres et intérêts relatifs au service restent notre propriété exclusive ou 
                celle de nos concédants de licence. Ces Conditions ne vous accordent aucun droit sur notre 
                propriété intellectuelle, à l&apos;exception du droit limité d&apos;utiliser le service conformément 
                à ces Conditions.
              </p>

              <h3 className="text-xl sm:text-2xl font-semibold mb-3">3.2 Licence d&apos;utilisation</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Nous vous accordons une licence limitée, non exclusive, non transférable et révocable pour 
                utiliser notre service à des fins personnelles et non commerciales. Cette licence ne vous donne 
                pas le droit de :
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300">
                <li>Modifier, copier, distribuer, transmettre ou créer des œuvres dérivées du service</li>
                <li>Désassembler, décompiler ou effectuer de l&apos;ingénierie inverse du service</li>
                <li>Utiliser le service pour créer un produit ou service concurrent</li>
                <li>Utiliser le service à des fins commerciales sans notre autorisation préalable écrite</li>
              </ul>

              <h3 className="text-xl sm:text-2xl font-semibold mb-3">3.3 Vos données</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Vous conservez tous les droits sur les données que vous créez ou stockez lors de l&apos;utilisation 
                de notre service (temps de timer, paramètres, etc.). Ces données sont stockées localement sur 
                votre appareil via LocalStorage et ne sont pas transmises à nos serveurs. Consultez notre 
                <Link href="/politique-confidentialite" className="text-blue-600 dark:text-blue-400 hover:underline ml-1">Politique de Confidentialité</Link> 
                {" "}pour plus d&apos;informations sur la gestion de vos données.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">4. Publicité</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Notre service est financé par la publicité fournie par Google AdSense. En utilisant notre service, 
                vous acceptez que des publicités soient affichées sur les pages que vous consultez.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Les publicités peuvent être personnalisées en fonction de vos intérêts et de votre comportement 
                de navigation. Google utilise des cookies pour personnaliser ces annonces. Vous pouvez gérer vos 
                préférences publicitaires via les <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">paramètres des annonces Google</a>.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Important :</strong> Cliquer frauduleusement ou de manière répétée sur les publicités 
                est strictement interdit et constitue une violation de ces Conditions. De telles actions peuvent 
                entraîner la suspension de notre compte publicitaire et des dommages financiers. Nous nous réservons 
                le droit de poursuivre les responsables de clics frauduleux.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">5. Notifications du navigateur</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Notre service utilise l&apos;API de notifications du navigateur pour vous alerter lorsqu&apos;une 
                session Pomodoro se termine. Ces notifications nécessitent votre autorisation explicite via votre 
                navigateur.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Vous pouvez activer ou désactiver ces notifications à tout moment dans les paramètres de votre 
                navigateur. Nous utilisons ces notifications uniquement pour améliorer votre expérience utilisateur 
                et ne les utilisons jamais à des fins publicitaires ou de spam.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">6. Disponibilité du service</h2>
              
              <h3 className="text-xl sm:text-2xl font-semibold mb-3">6.1 Maintenance et interruptions</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Nous nous efforçons de maintenir notre service disponible 24h/24 et 7j/7, mais nous ne pouvons 
                garantir une disponibilité ininterrompue. Le service peut être temporairement indisponible en 
                raison de :
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300">
                <li>Maintenance planifiée ou d&apos;urgence</li>
                <li>Problèmes techniques ou pannes</li>
                <li>Mises à jour et améliorations du service</li>
                <li>Circonstances indépendantes de notre volonté (catastrophes naturelles, interruptions d&apos;Internet, etc.)</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300">
                Nous nous réservons le droit de suspendre ou modifier le service à tout moment, avec ou sans 
                préavis. Nous ne serons pas responsables envers vous ou un tiers pour toute interruption, 
                suspension ou modification du service.
              </p>

              <h3 className="text-xl sm:text-2xl font-semibold mb-3">6.2 Modifications du service</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Nous nous réservons le droit de modifier, mettre à jour ou interrompre tout ou partie du service 
                à tout moment, temporairement ou définitivement, avec ou sans préavis. Vous acceptez que nous ne 
                soyons pas responsables envers vous ou un tiers de toute modification, suspension ou interruption 
                du service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">7. Limitation de responsabilité</h2>
              
              <h3 className="text-xl sm:text-2xl font-semibold mb-3">7.1 Garanties</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Le service est fourni &quot;tel quel&quot; et &quot;selon disponibilité&quot;, sans garantie 
                d&apos;aucune sorte, expresse ou implicite. Dans toute la mesure permise par la loi applicable, 
                nous déclinons toutes garanties, y compris, mais sans s&apos;y limiter :
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300">
                <li>La garantie de qualité marchande</li>
                <li>La garantie d&apos;adéquation à un usage particulier</li>
                <li>La garantie de non-violation des droits de tiers</li>
                <li>La garantie d&apos;absence d&apos;erreurs ou d&apos;interruptions</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300">
                Nous ne garantissons pas que le service répondra à vos besoins, que son fonctionnement sera 
                ininterrompu ou sans erreur, ou que les défauts seront corrigés.
              </p>

              <h3 className="text-xl sm:text-2xl font-semibold mb-3">7.2 Limitation des dommages</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Dans toute la mesure permise par la loi applicable, nous ne serons en aucun cas responsables 
                des dommages directs, indirects, accessoires, spéciaux, consécutifs ou punitifs, y compris, 
                mais sans s&apos;y limiter :
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300">
                <li>Perte de profits, de données ou d&apos;informations</li>
                <li>Perte d&apos;opportunités commerciales</li>
                <li>Interruption d&apos;activité</li>
                <li>Dommages corporels ou matériels</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300">
                Cette limitation s&apos;applique même si nous avons été informés de la possibilité de tels 
                dommages. Certaines juridictions ne permettent pas l&apos;exclusion ou la limitation de 
                responsabilité pour certains types de dommages, de sorte que les limitations ci-dessus 
                peuvent ne pas s&apos;appliquer à vous.
              </p>

              <h3 className="text-xl sm:text-2xl font-semibold mb-3">7.3 Responsabilité maximale</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Dans tous les cas, notre responsabilité totale envers vous pour toutes réclamations découlant 
                de ou liées à ces Conditions ou à l&apos;utilisation du service ne dépassera pas le montant 
                que vous nous avez payé (le cas échéant) au cours des douze (12) mois précédant la réclamation. 
                Étant donné que notre service est gratuit, cette responsabilité est effectivement nulle.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">8. Indemnisation</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Vous acceptez de nous défendre, nous indemniser et nous dégager de toute responsabilité contre 
                toutes réclamations, dommages, obligations, pertes, responsabilités, coûts et dépenses (y compris 
                les frais d&apos;avocat) découlant de :
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300">
                <li>Votre utilisation ou mauvaise utilisation du service</li>
                <li>Votre violation de ces Conditions</li>
                <li>Votre violation des droits d&apos;un tiers, y compris les droits de propriété intellectuelle</li>
                <li>Toute activité frauduleuse ou illégale que vous commettez via notre service</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300">
                Cette obligation d&apos;indemnisation survivra à la résiliation de ces Conditions et de votre 
                utilisation du service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">9. Liens externes</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Notre service peut contenir des liens vers des sites web ou des services tiers, notamment via 
                les publicités Google AdSense. Ces liens sont fournis pour votre commodité uniquement.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Nous n&apos;avons aucun contrôle sur le contenu, les politiques de confidentialité ou les 
                pratiques de ces sites tiers et n&apos;assumons aucune responsabilité à leur égard. Nous vous 
                encourageons à lire les conditions d&apos;utilisation et les politiques de confidentialité de 
                tous les sites web que vous visitez.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">10. Résiliation</h2>
              
              <h3 className="text-xl sm:text-2xl font-semibold mb-3">10.1 Résiliation par vous</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Vous pouvez cesser d&apos;utiliser notre service à tout moment. Pour supprimer vos données 
                stockées localement, effacez les données de votre navigateur ou supprimez le LocalStorage 
                associé à notre site.
              </p>

              <h3 className="text-xl sm:text-2xl font-semibold mb-3">10.2 Résiliation par nous</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Nous nous réservons le droit de suspendre ou de résilier votre accès au service à tout moment, 
                avec ou sans préavis, pour quelque raison que ce soit, notamment en cas de :
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300">
                <li>Violation de ces Conditions</li>
                <li>Utilisation frauduleuse ou abusive du service</li>
                <li>Comportement illégal ou préjudiciable</li>
                <li>Nécessité de se conformer à une loi ou une ordonnance judiciaire</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300">
                En cas de résiliation, votre droit d&apos;utiliser le service cessera immédiatement. Les 
                dispositions de ces Conditions qui, par leur nature, devraient survivre à la résiliation 
                (notamment les sections sur la propriété intellectuelle, la limitation de responsabilité 
                et l&apos;indemnisation) continueront de s&apos;appliquer.
              </p>

              <h3 className="text-xl sm:text-2xl font-semibold mb-3">10.3 Effet de la résiliation</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Lors de la résiliation, vous devez cesser toute utilisation du service. Les données stockées 
                localement sur votre appareil resteront jusqu&apos;à ce que vous les supprimiez manuellement. 
                Nous ne serons pas responsables envers vous ou un tiers de toute résiliation de votre accès 
                au service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">11. Droit applicable et juridiction</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Ces Conditions sont régies et interprétées conformément aux lois françaises, sans égard aux 
                principes de conflits de lois. Vous acceptez que tout litige découlant de ou lié à ces Conditions 
                ou à l&apos;utilisation du service soit soumis à la juridiction exclusive des tribunaux français.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Si vous êtes un consommateur résidant dans l&apos;Union Européenne, vous bénéficiez également 
                de toute protection obligatoire prévue par la loi de votre pays de résidence. Rien dans ces 
                Conditions n&apos;affecte vos droits légaux en tant que consommateur.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">12. Résolution des litiges</h2>
              
              <h3 className="text-xl sm:text-2xl font-semibold mb-3">12.1 Résolution amiable</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                En cas de litige ou de réclamation concernant le service ou ces Conditions, nous vous encourageons 
                à nous contacter en premier lieu via notre <Link href="/contact" className="text-blue-600 dark:text-blue-400 hover:underline">page de contact</Link> 
                {" "}afin de tenter de résoudre le problème de manière amiable.
              </p>

              <h3 className="text-xl sm:text-2xl font-semibold mb-3">12.2 Médiation</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Conformément aux dispositions du Code de la consommation concernant le règlement amiable des litiges, 
                si vous êtes un consommateur résidant en France, vous avez le droit de recourir gratuitement à un 
                médiateur de la consommation en vue de la résolution amiable du litige qui vous oppose à nous.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Pour plus d&apos;informations sur la médiation de la consommation, vous pouvez consulter le site 
                de la Commission européenne : 
                <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline ml-1">
                  https://ec.europa.eu/consumers/odr
                </a>
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">13. Dispositions générales</h2>
              
              <h3 className="text-xl sm:text-2xl font-semibold mb-3">13.1 Intégralité de l&apos;accord</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Ces Conditions, ainsi que notre <Link href="/politique-confidentialite" className="text-blue-600 dark:text-blue-400 hover:underline">Politique de Confidentialité</Link>, 
                constituent l&apos;intégralité de l&apos;accord entre vous et nous concernant votre utilisation 
                du service et remplacent tous les accords antérieurs ou contemporains.
              </p>

              <h3 className="text-xl sm:text-2xl font-semibold mb-3">13.2 Divisibilité</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Si une disposition de ces Conditions est jugée invalide ou inapplicable par un tribunal compétent, 
                cette disposition sera limitée ou éliminée dans la mesure minimale nécessaire, et les autres 
                dispositions de ces Conditions resteront pleinement en vigueur et applicables.
              </p>

              <h3 className="text-xl sm:text-2xl font-semibold mb-3">13.3 Renonciation</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Notre défaut d&apos;exercer ou de faire valoir un droit ou une disposition de ces Conditions ne 
                constitue pas une renonciation à ce droit ou à cette disposition. Toute renonciation doit être 
                effectuée par écrit et signée par nous pour être valable.
              </p>

              <h3 className="text-xl sm:text-2xl font-semibold mb-3">13.4 Cession</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Vous ne pouvez pas céder ou transférer ces Conditions ou vos droits en vertu de ces Conditions 
                sans notre consentement écrit préalable. Nous pouvons librement céder ou transférer ces Conditions 
                et nos droits et obligations en vertu de ces Conditions à tout moment.
              </p>

              <h3 className="text-xl sm:text-2xl font-semibold mb-3">13.5 Force majeure</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Nous ne serons pas responsables de tout retard ou défaut d&apos;exécution résultant de causes 
                indépendantes de notre volonté raisonnable, y compris, mais sans s&apos;y limiter, les catastrophes 
                naturelles, les guerres, les actes de terrorisme, les émeutes, les pannes d&apos;Internet, les 
                pannes de serveur ou les actes gouvernementaux.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">14. Modifications des Conditions</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Nous nous réservons le droit de modifier ces Conditions à tout moment. En cas de modification 
                substantielle, nous afficherons un avis visible sur notre site pendant au moins 30 jours avant 
                que les nouvelles Conditions n&apos;entrent en vigueur.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Votre utilisation continue du service après l&apos;entrée en vigueur des modifications constitue 
                votre acceptation des nouvelles Conditions. Si vous n&apos;acceptez pas les modifications, vous 
                devez cesser d&apos;utiliser le service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">15. Contact</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Si vous avez des questions concernant ces Conditions d&apos;Utilisation, vous pouvez nous contacter :
              </p>
              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Par notre formulaire de contact :</strong> <Link href="/contact" className="text-blue-600 dark:text-blue-400 hover:underline">Page de contact</Link>
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Nous nous engageons à répondre à toutes vos questions dans les meilleurs délais.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">16. Acceptation des Conditions</h2>
              <p className="text-gray-700 dark:text-gray-300">
                En utilisant notre service, vous reconnaissez avoir lu, compris et accepté d&apos;être lié par 
                ces Conditions d&apos;Utilisation. Si vous n&apos;acceptez pas ces Conditions, vous ne devez 
                pas utiliser notre service.
              </p>
            </section>
          </article>
        </main>

        <footer className="mt-8 text-center">
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600 dark:text-gray-400">
            <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Accueil</Link>
            <Link href="/a-propos" className="hover:text-blue-600 dark:hover:text-blue-400">À propos</Link>
            <Link href="/contact" className="hover:text-blue-600 dark:hover:text-blue-400">Contact</Link>
            <Link href="/politique-confidentialite" className="hover:text-blue-600 dark:hover:text-blue-400">Politique de confidentialité</Link>
          </div>
        </footer>
      </div>
    </div>
  );
}
