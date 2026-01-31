"use client";

import Link from "next/link";
import TimeZoneConverter from "@/components/TimeZoneConverter";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faCheck, faGamepad, faGlobe, faPhone, faPlane } from '@fortawesome/free-solid-svg-icons';

export default function TimeZoneConverterPage() {
  return (
    <div className="min-h-screen flex flex-col p-4 sm:p-6 md:p-8">
      <header className="flex-shrink-0 mb-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-3">
          Convertisseur de Fuseau Horaire
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-400 text-sm sm:text-base max-w-3xl mx-auto">
          Convertissez facilement les heures entre différents fuseaux horaires du monde entier.
        </p>
        <div className="text-center mt-3">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline text-sm"
          >
            ← Retour à l&apos;accueil
          </Link>
        </div>
      </header>

      <div className="flex-1 max-w-4xl mx-auto w-full">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <TimeZoneConverter />
        </div>

        {/* SEO Content */}
        <section className="mt-8 space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Qu&apos;est-ce qu&apos;un convertisseur de fuseau horaire ?</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Un convertisseur de fuseau horaire est un outil en ligne qui permet de convertir instantanément 
              l&apos;heure d&apos;un fuseau horaire à un autre. Dans notre monde globalisé où les communications 
              internationales sont quotidiennes, cet outil est devenu indispensable pour coordonner des 
              réunions, des appels et des événements à travers différents pays et continents.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              La Terre est divisée en 24 fuseaux horaires principaux, chacun représentant environ 15 degrés 
              de longitude. Cependant, pour des raisons politiques et pratiques, il existe plus de 37 fuseaux 
              horaires différents, certains pays utilisant des décalages de 30 ou 45 minutes au lieu d&apos;heures 
              entières.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Notre convertisseur prend en compte non seulement les décalages horaires standards, mais aussi 
              les changements d&apos;heure d&apos;été (DST - Daylight Saving Time) qui varient selon les pays, 
              garantissant une précision absolue pour vos conversions.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Comment utiliser le convertisseur de fuseau horaire ?</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</span>
                <div>
                  <h3 className="font-semibold mb-1">Sélectionnez le fuseau horaire source</h3>
                  <p>Choisissez le fuseau horaire de départ, c&apos;est-à-dire celui où vous ou votre interlocuteur êtes actuellement situé. Vous pouvez rechercher par ville ou par code de fuseau (ex: Europe/Paris).</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">2</span>
                <div>
                  <h3 className="font-semibold mb-1">Entrez l&apos;heure à convertir</h3>
                  <p>Saisissez l&apos;heure que vous souhaitez convertir. Vous pouvez utiliser le format 24h ou 12h (AM/PM) selon votre préférence. Incluez également la date pour une précision maximale.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">3</span>
                <div>
                  <h3 className="font-semibold mb-1">Choisissez le fuseau horaire de destination</h3>
                  <p>Sélectionnez le ou les fuseaux horaires vers lesquels vous voulez convertir. Vous pouvez comparer plusieurs fuseaux simultanément pour planifier des réunions internationales.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">4</span>
                <div>
                  <h3 className="font-semibold mb-1">Consultez les résultats</h3>
                  <p>La conversion s&apos;affiche instantanément avec l&apos;heure locale correspondante, le décalage en heures, et des informations sur le changement d&apos;heure d&apos;été si applicable.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Cas d&apos;usage du convertisseur de fuseau horaire</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faBriefcase} className="inline" /> Réunions internationales</h3>
                <p>
                  Planifiez des visioconférences avec des collègues, clients ou partenaires situés dans 
                  différents pays. Trouvez un créneau qui convient à tous en comparant plusieurs fuseaux 
                  horaires simultanément. Évitez de réveiller quelqu&apos;un à 3h du matin !
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faPlane} className="inline" /> Voyages et déplacements</h3>
                <p>
                  Préparez vos voyages internationaux en calculant l&apos;heure d&apos;arrivée locale, planifiez 
                  vos transferts, réservations et rendez-vous. Gérez le décalage horaire (jet lag) en 
                  adaptant votre rythme progressivement avant le départ.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faGlobe} className="inline" /> Travail à distance</h3>
                <p>
                  Les équipes distribuées utilisent cet outil quotidiennement pour coordonner leurs horaires 
                  de travail, stand-ups, revues de code et sessions de pair programming. Respectez les 
                  horaires de travail de chaque membre de l&apos;équipe.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faPhone} className="inline" /> Appels et communications</h3>
                <p>
                  Avant d&apos;appeler famille, amis ou contacts professionnels à l&apos;étranger, vérifiez qu&apos;il 
                  s&apos;agit d&apos;une heure convenable. Évitez les appels intempestifs en pleine nuit ou très tôt 
                  le matin.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">📺 Événements en direct</h3>
                <p>
                  Suivez des événements sportifs, concerts, conférences ou lancements de produits diffusés 
                  en direct depuis d&apos;autres pays. Calculez l&apos;heure locale de diffusion pour ne rien manquer 
                  de vos événements préférés.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">💹 Trading et marchés financiers</h3>
                <p>
                  Les traders et investisseurs suivent les horaires d&apos;ouverture et de fermeture des bourses 
                  mondiales (New York, Londres, Tokyo, Hong Kong). Planifiez vos transactions en fonction 
                  des heures de trading internationales.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faGamepad} className="inline" /> Gaming et e-sports</h3>
                <p>
                  Coordonnez des sessions de jeu en ligne avec des amis situés dans différents fuseaux 
                  horaires. Suivez les tournois e-sports internationaux et raids dans les MMO nécessitant 
                  une synchronisation précise.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Fuseaux horaires principaux du monde</h2>
            <div className="space-y-3 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="font-semibold mb-2">🇫🇷 Europe</h3>
                <ul className="text-sm space-y-1 ml-4">
                  <li>• <strong>CET/CEST</strong> (UTC+1/+2) - Paris, Berlin, Rome, Madrid</li>
                  <li>• <strong>GMT/BST</strong> (UTC+0/+1) - Londres, Lisbonne, Dublin</li>
                  <li>• <strong>EET/EEST</strong> (UTC+2/+3) - Helsinki, Athènes, Bucarest</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">🇺🇸 Amérique</h3>
                <ul className="text-sm space-y-1 ml-4">
                  <li>• <strong>EST/EDT</strong> (UTC-5/-4) - New York, Miami, Toronto</li>
                  <li>• <strong>CST/CDT</strong> (UTC-6/-5) - Chicago, Mexico City</li>
                  <li>• <strong>PST/PDT</strong> (UTC-8/-7) - Los Angeles, San Francisco, Seattle</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">🇯🇵 Asie-Pacifique</h3>
                <ul className="text-sm space-y-1 ml-4">
                  <li>• <strong>JST</strong> (UTC+9) - Tokyo, Séoul</li>
                  <li>• <strong>CST</strong> (UTC+8) - Beijing, Shanghai, Hong Kong, Singapour</li>
                  <li>• <strong>IST</strong> (UTC+5:30) - New Delhi, Mumbai, Bangalore</li>
                  <li>• <strong>AEDT</strong> (UTC+11) - Sydney, Melbourne</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Conseils pour gérer les fuseaux horaires</h2>
            <div className="space-y-3 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="font-semibold mb-1"><FontAwesomeIcon icon={faCheck} className="inline" /> Utilisez toujours UTC pour référence</h3>
                <p className="text-sm">
                  UTC (Temps Universel Coordonné) est le standard international pour synchroniser les horloges. 
                  Indiquez toujours le fuseau horaire ou l&apos;offset UTC lors de la communication d&apos;horaires 
                  internationaux (ex: 15:00 UTC ou 10:00 EST).
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1"><FontAwesomeIcon icon={faCheck} className="inline" /> Attention au changement d&apos;heure</h3>
                <p className="text-sm">
                  Les changements d&apos;heure d&apos;été ne se produisent pas aux mêmes dates dans tous les pays. 
                  L&apos;Europe change généralement fin mars et fin octobre, tandis que l&apos;Amérique du Nord change 
                  début mars et début novembre.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1"><FontAwesomeIcon icon={faCheck} className="inline" /> Planifiez des créneaux raisonnables</h3>
                <p className="text-sm">
                  Pour les réunions internationales, visez les heures de chevauchement où tout le monde est 
                  éveillé et en heures de travail. Généralement 8h-18h pour chaque participant. Alternez les 
                  horaires inconfortables si c&apos;est récurrent.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1"><FontAwesomeIcon icon={faCheck} className="inline" /> Utilisez des outils de calendrier</h3>
                <p className="text-sm">
                  Configurez votre calendrier (Google Calendar, Outlook) pour afficher plusieurs fuseaux 
                  horaires. Cela évite les erreurs lors de la planification et vous rappelle les décalages 
                  automatiquement.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1"><FontAwesomeIcon icon={faCheck} className="inline" /> Confirmez toujours l&apos;heure locale</h3>
                <p className="text-sm">
                  Lors de la planification, précisez toujours &quot;10:00 ton heure locale&quot; ou &quot;15:00 Paris time&quot; 
                  pour éviter toute confusion. Une confirmation explicite évite les malentendus coûteux.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1"><FontAwesomeIcon icon={faCheck} className="inline" /> Considérez le contexte culturel</h3>
                <p className="text-sm">
                  Certains pays ont des week-ends différents (vendredi-samedi dans certains pays du Moyen-Orient). 
                  Renseignez-vous sur les jours fériés locaux pour éviter de programmer des réunions aux 
                  mauvaises dates.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Questions fréquentes</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Quelle est la différence entre GMT et UTC ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  GMT (Greenwich Mean Time) et UTC (Temps Universel Coordonné) sont pratiquement identiques 
                  pour un usage courant. UTC est le standard scientifique moderne plus précis, tandis que GMT 
                  est le terme historique. Dans la pratique quotidienne, ils sont interchangeables.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Pourquoi certains pays ont des fuseaux horaires avec 30 ou 45 minutes ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Certains pays choisissent des décalages non standards pour des raisons pratiques ou politiques. 
                  L&apos;Inde (UTC+5:30), l&apos;Iran (UTC+3:30), le Népal (UTC+5:45) et d&apos;autres utilisent ces décalages 
                  pour mieux correspondre à leur position géographique ou pour des raisons d&apos;unité nationale.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Comment gérer le décalage horaire en voyage ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Pour minimiser le jet lag : ajustez progressivement votre sommeil quelques jours avant le 
                  départ, restez hydraté, exposez-vous à la lumière naturelle à destination, évitez les 
                  siestes longues le premier jour, et essayez de vous synchroniser rapidement sur l&apos;heure locale.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Tous les pays changent-ils d&apos;heure d&apos;été ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Non, seuls environ 70 pays appliquent le changement d&apos;heure d&apos;été (DST). Les pays équatoriaux 
                  n&apos;en ont généralement pas besoin car la durée du jour varie peu. Certains pays l&apos;ont 
                  abandonné (Russie, Turquie) et d&apos;autres débattent de son utilité.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Comment fonctionne la ligne de changement de date ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  La ligne de changement de date (International Date Line) se situe approximativement à 180° 
                  de longitude dans l&apos;océan Pacifique. En la traversant vers l&apos;ouest, on avance d&apos;un jour ; 
                  vers l&apos;est, on recule d&apos;un jour. Elle zigzague pour éviter de couper certains territoires.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  L&apos;outil prend-il en compte les fuseaux horaires historiques ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Notre convertisseur utilise les fuseaux horaires actuels et les règles DST en vigueur. 
                  Pour des conversions historiques (événements passés), les règles de changement d&apos;heure 
                  peuvent avoir été différentes. Précisez toujours la date pour les conversions historiques.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Puis-je utiliser cet outil pour planifier des événements récurrents ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Oui, mais attention lors des changements d&apos;heure saisonniers. Une réunion hebdomadaire 
                  à 10:00 EST peut devenir 11:00 EST après le changement d&apos;heure, ce qui la décale pour les 
                  participants dans d&apos;autres fuseaux. Revérifiez après chaque changement.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  L&apos;outil est-il précis pour toutes les régions ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Oui, notre convertisseur utilise la base de données IANA Time Zone qui est mise à jour 
                  régulièrement avec les changements officiels de fuseaux horaires et de règles DST. 
                  C&apos;est le standard utilisé par la plupart des systèmes informatiques mondiaux.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Avantages de notre convertisseur</h2>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Conversion instantanée</strong> - Résultats immédiats et précis
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Base de données complète</strong> - Tous les fuseaux horaires mondiaux
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Prise en compte du DST</strong> - Changements d&apos;heure d&apos;été automatiques
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Comparaison multiple</strong> - Comparez plusieurs fuseaux simultanément
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Interface intuitive</strong> - Facile à utiliser, résultats clairs
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>100% gratuit</strong> - Accès illimité sans inscription
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Toujours à jour</strong> - Synchronisé avec les changements officiels
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Multi-plateformes</strong> - Fonctionne sur tous les appareils
                </span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
