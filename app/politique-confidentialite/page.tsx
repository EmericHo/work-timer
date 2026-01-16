import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Politique de Confidentialité - Timer Focus Gratuit",
  description: "Politique de confidentialité du Timer Focus : informations sur la collecte, l'utilisation et la protection de vos données personnelles.",
  alternates: {
    canonical: "/politique-confidentialite",
  },
};

export default function PrivacyPolicyPage() {
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
            Politique de Confidentialité
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
            Dernière mise à jour : 15 janvier 2026
          </p>
        </header>

        <main className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 sm:p-6 md:p-8">
          <article className="prose prose-sm sm:prose-base lg:prose-lg dark:prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Introduction</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Bienvenue sur Timer Focus Gratuit pour Travail. Nous accordons une grande importance à la protection 
                de votre vie privée et de vos données personnelles. Cette politique de confidentialité explique comment 
                nous collectons, utilisons, stockons et protégeons vos informations lorsque vous utilisez notre 
                application de timer en ligne.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                En utilisant notre service, vous acceptez les pratiques décrites dans cette politique de confidentialité. 
                Si vous n&apos;acceptez pas ces conditions, nous vous invitons à ne pas utiliser notre application.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">1. Informations que nous collectons</h2>
              
              <h3 className="text-xl sm:text-2xl font-semibold mb-3">1.1 Données stockées localement</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Notre application utilise le stockage local de votre navigateur (LocalStorage) pour sauvegarder vos 
                préférences et l&apos;état de vos timers. Ces données incluent :
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300">
                <li>L&apos;état actuel de vos timers (temps écoulé, état en cours/en pause)</li>
                <li>Vos paramètres de session Pomodoro</li>
                <li>Vos préférences d&apos;affichage et de notification</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                <strong>Important :</strong> Ces données sont stockées uniquement sur votre appareil et ne sont 
                jamais transmises à nos serveurs. Vous gardez le contrôle total sur ces informations et pouvez 
                les supprimer à tout moment en effaçant les données de votre navigateur.
              </p>

              <h3 className="text-xl sm:text-2xl font-semibold mb-3">1.2 Données d&apos;utilisation (Google Analytics)</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Nous utilisons Google Analytics pour comprendre comment les visiteurs utilisent notre application. 
                Google Analytics collecte des informations anonymisées telles que :
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300">
                <li>Type d&apos;appareil et système d&apos;exploitation</li>
                <li>Type et version du navigateur</li>
                <li>Pages visitées et durée des sessions</li>
                <li>Localisation géographique approximative (pays, ville)</li>
                <li>Source de référence (comment vous avez trouvé notre site)</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300">
                Ces données sont utilisées uniquement à des fins statistiques pour améliorer notre service. 
                Google Analytics utilise des cookies pour collecter ces informations. Pour plus d&apos;informations, 
                consultez la <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">politique de confidentialité de Google</a>.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">2. Cookies et technologies similaires</h2>
              
              <h3 className="text-xl sm:text-2xl font-semibold mb-3">2.1 Types de cookies utilisés</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Notre site utilise les types de cookies suivants :
              </p>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-2">Cookies essentiels</h4>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  Ces cookies sont nécessaires au fonctionnement de base de notre application. Ils ne peuvent pas 
                  être désactivés sans compromettre les fonctionnalités du site. Ces cookies incluent :
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300">
                  <li>Cookies de session pour maintenir l&apos;état de votre timer</li>
                  <li>Cookies de préférences pour vos paramètres d&apos;affichage</li>
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-2">Cookies d&apos;analyse (Google Analytics)</h4>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  Ces cookies nous aident à comprendre comment les visiteurs interagissent avec notre site. 
                  Les informations collectées sont anonymes et utilisées pour améliorer nos services. Principaux cookies :
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300">
                  <li><code>_ga</code> : Distingue les utilisateurs uniques (expire après 2 ans)</li>
                  <li><code>_gid</code> : Distingue les utilisateurs (expire après 24 heures)</li>
                  <li><code>_gat</code> : Limite le taux de requêtes (expire après 1 minute)</li>
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-2">Cookies publicitaires (Google AdSense)</h4>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  Nous utilisons Google AdSense pour afficher des publicités pertinentes. Google peut utiliser 
                  des cookies pour personnaliser les annonces en fonction de vos intérêts. Ces cookies incluent :
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300">
                  <li><code>IDE</code> : Cookie de Google DoubleClick pour le ciblage publicitaire</li>
                  <li><code>NID</code> : Cookie Google pour personnaliser les annonces</li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300">
                  Vous pouvez gérer vos préférences publicitaires Google via les <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">paramètres des annonces Google</a>.
                </p>
              </div>

              <h3 className="text-xl sm:text-2xl font-semibold mb-3">2.2 Gestion des cookies</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Vous pouvez contrôler et gérer les cookies de plusieurs manières :
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300">
                <li>
                  <strong>Paramètres du navigateur :</strong> La plupart des navigateurs vous permettent de bloquer 
                  ou supprimer les cookies via leurs paramètres de confidentialité
                </li>
                <li>
                  <strong>Extensions de blocage :</strong> Vous pouvez installer des extensions comme uBlock Origin 
                  ou Privacy Badger pour bloquer les cookies de suivi
                </li>
                <li>
                  <strong>Désactivation de Google Analytics :</strong> Installez le <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">module complémentaire de désactivation de Google Analytics</a>
                </li>
                <li>
                  <strong>Opt-out publicitaire :</strong> Visitez <a href="https://www.youronlinechoices.eu/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Your Online Choices</a> pour gérer vos préférences publicitaires
                </li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Note :</strong> Le blocage de certains cookies peut affecter votre expérience sur notre site 
                et limiter certaines fonctionnalités.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">3. Comment nous utilisons vos données</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Les informations que nous collectons sont utilisées pour :
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300">
                <li>Fournir et maintenir notre service de timer en ligne</li>
                <li>Améliorer et personnaliser votre expérience utilisateur</li>
                <li>Analyser l&apos;utilisation du site pour identifier les améliorations possibles</li>
                <li>Détecter et prévenir les abus ou utilisations frauduleuses</li>
                <li>Respecter nos obligations légales</li>
                <li>Afficher des publicités pertinentes via Google AdSense</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300">
                Nous ne vendons jamais vos données personnelles à des tiers. Nous ne partageons vos informations 
                qu&apos;avec nos partenaires de confiance (comme Google Analytics et AdSense) dans le strict respect 
                de leurs politiques de confidentialité.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">4. Partage de données avec des tiers</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Nous travaillons avec les partenaires suivants qui peuvent avoir accès à certaines de vos données :
              </p>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-2">Google Analytics</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Service d&apos;analyse web qui nous aide à comprendre comment les visiteurs utilisent notre site. 
                  Google Analytics collecte des données anonymisées. Consultez la <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">politique de confidentialité de Google</a>.
                </p>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-2">Google AdSense</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Programme publicitaire de Google qui affiche des annonces sur notre site. Google peut utiliser 
                  des cookies pour personnaliser les publicités. Consultez la <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">politique de publicité de Google</a>.
                </p>
              </div>

              <p className="text-gray-700 dark:text-gray-300">
                Ces partenaires sont tenus de protéger vos données conformément à leurs propres politiques de 
                confidentialité et aux réglementations en vigueur, notamment le RGPD (Règlement Général sur la 
                Protection des Données).
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">5. Sécurité de vos données</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Nous prenons la sécurité de vos données très au sérieux et mettons en œuvre des mesures 
                techniques et organisationnelles appropriées pour protéger vos informations :
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300">
                <li>
                  <strong>HTTPS :</strong> Notre site utilise le protocole HTTPS pour chiffrer toutes les communications 
                  entre votre navigateur et nos serveurs
                </li>
                <li>
                  <strong>Stockage local :</strong> Vos données de timer sont stockées uniquement sur votre appareil, 
                  pas sur nos serveurs
                </li>
                <li>
                  <strong>Accès limité :</strong> Seules les personnes autorisées ont accès aux données analytiques 
                  agrégées
                </li>
                <li>
                  <strong>Mises à jour régulières :</strong> Nous maintenons notre infrastructure à jour avec les 
                  derniers correctifs de sécurité
                </li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300">
                Cependant, aucune méthode de transmission sur Internet ou de stockage électronique n&apos;est 
                totalement sécurisée. Bien que nous nous efforcions de protéger vos données personnelles, nous 
                ne pouvons garantir une sécurité absolue.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">6. Vos droits (RGPD)</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Conformément au Règlement Général sur la Protection des Données (RGPD), si vous êtes résident 
                de l&apos;Union Européenne, vous disposez des droits suivants :
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300">
                <li>
                  <strong>Droit d&apos;accès :</strong> Vous pouvez demander une copie des données personnelles 
                  que nous détenons à votre sujet
                </li>
                <li>
                  <strong>Droit de rectification :</strong> Vous pouvez demander la correction de données 
                  inexactes ou incomplètes
                </li>
                <li>
                  <strong>Droit à l&apos;effacement :</strong> Vous pouvez demander la suppression de vos 
                  données personnelles dans certaines circonstances
                </li>
                <li>
                  <strong>Droit à la limitation du traitement :</strong> Vous pouvez demander la limitation 
                  du traitement de vos données
                </li>
                <li>
                  <strong>Droit à la portabilité :</strong> Vous pouvez demander à recevoir vos données dans 
                  un format structuré et couramment utilisé
                </li>
                <li>
                  <strong>Droit d&apos;opposition :</strong> Vous pouvez vous opposer au traitement de vos 
                  données personnelles à des fins de marketing direct
                </li>
                <li>
                  <strong>Droit de retirer votre consentement :</strong> Si le traitement est basé sur votre 
                  consentement, vous pouvez le retirer à tout moment
                </li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Pour exercer ces droits, veuillez nous contacter via notre <Link href="/contact" className="text-blue-600 dark:text-blue-400 hover:underline">page de contact</Link>. 
                Nous répondrons à votre demande dans un délai de 30 jours maximum.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Vous avez également le droit de déposer une plainte auprès de la Commission Nationale de 
                l&apos;Informatique et des Libertés (CNIL) si vous estimez que vos droits n&apos;ont pas été respectés : 
                <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline ml-1">www.cnil.fr</a>
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">7. Conservation des données</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Nous conservons vos données aussi longtemps que nécessaire pour fournir nos services et respecter 
                nos obligations légales :
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300">
                <li>
                  <strong>Données de LocalStorage :</strong> Stockées sur votre appareil jusqu&apos;à ce que vous 
                  les supprimiez manuellement ou effaciez les données de votre navigateur
                </li>
                <li>
                  <strong>Données Google Analytics :</strong> Conservées pendant 26 mois par défaut, puis 
                  automatiquement supprimées
                </li>
                <li>
                  <strong>Cookies :</strong> Durée variable selon le type de cookie (de quelques minutes à 2 ans), 
                  comme indiqué dans la section cookies ci-dessus
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">8. Utilisation par les mineurs</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Notre service est destiné à un public général et peut être utilisé par des personnes de tous âges. 
                Nous ne collectons pas sciemment d&apos;informations personnelles auprès d&apos;enfants de moins de 13 ans.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Si vous êtes parent ou tuteur légal et que vous pensez que votre enfant nous a fourni des 
                informations personnelles, veuillez nous contacter afin que nous puissions prendre les mesures 
                appropriées pour supprimer ces informations.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">9. Liens vers d&apos;autres sites</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Notre site peut contenir des liens vers des sites web tiers, notamment via les publicités Google AdSense. 
                Nous ne sommes pas responsables des pratiques de confidentialité ou du contenu de ces sites externes.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Nous vous encourageons à lire les politiques de confidentialité de tout site web que vous visitez. 
                Cette politique de confidentialité s&apos;applique uniquement aux informations collectées via notre site.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">10. Modifications de cette politique</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. 
                Les modifications prendront effet dès leur publication sur cette page. Nous vous encourageons 
                à consulter régulièrement cette page pour rester informé de nos pratiques en matière de confidentialité.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                En cas de modification substantielle, nous afficherons un avis visible sur notre site pendant 
                au moins 30 jours. Votre utilisation continue de notre service après toute modification constitue 
                votre acceptation de la nouvelle politique de confidentialité.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">11. Contact</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Si vous avez des questions concernant cette politique de confidentialité ou le traitement de 
                vos données personnelles, vous pouvez nous contacter :
              </p>
              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Par notre formulaire de contact :</strong> <Link href="/contact" className="text-blue-600 dark:text-blue-400 hover:underline">Page de contact</Link>
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Nous nous engageons à répondre à toutes vos demandes dans les meilleurs délais et, en tout 
                  état de cause, dans le délai d&apos;un mois prévu par le RGPD.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">12. Acceptation de cette politique</h2>
              <p className="text-gray-700 dark:text-gray-300">
                En utilisant notre site web et notre application Timer Focus, vous reconnaissez avoir lu et 
                compris cette politique de confidentialité et vous acceptez le traitement de vos données 
                personnelles tel que décrit dans ce document. Si vous n&apos;acceptez pas cette politique, 
                veuillez ne pas utiliser notre service.
              </p>
            </section>
          </article>
        </main>

        <footer className="mt-8 text-center">
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600 dark:text-gray-400">
            <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Accueil</Link>
            <Link href="/a-propos" className="hover:text-blue-600 dark:hover:text-blue-400">À propos</Link>
            <Link href="/contact" className="hover:text-blue-600 dark:hover:text-blue-400">Contact</Link>
            <Link href="/conditions-utilisation" className="hover:text-blue-600 dark:hover:text-blue-400">Conditions d&apos;utilisation</Link>
          </div>
        </footer>
      </div>
    </div>
  );
}
