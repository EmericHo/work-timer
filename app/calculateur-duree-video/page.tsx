"use client";

import Link from "next/link";
import VideoDurationCalculator from "@/components/VideoDurationCalculator";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faChartBar, faCheck, faFilm, faLaptop, faMicrophone, faMobileAlt } from '@fortawesome/free-solid-svg-icons';

export default function VideoDurationCalculatorPage() {
  return (
    <div className="min-h-screen flex flex-col p-4 sm:p-6 md:p-8">
      <header className="flex-shrink-0 mb-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-3">
          Calculateur de Durée de Vidéo en Ligne
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-400 text-sm sm:text-base max-w-3xl mx-auto">
          Calculez facilement la durée totale de vos listes de vidéos et projets multimédias.
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
          <VideoDurationCalculator />
        </div>

        {/* SEO Content */}
        <section className="mt-8 space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Qu&apos;est-ce qu&apos;un calculateur de durée de vidéo ?</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Un calculateur de durée de vidéo est un outil en ligne gratuit qui permet d&apos;additionner 
              rapidement plusieurs durées de vidéos pour obtenir le temps total. Cet outil est 
              particulièrement utile pour les créateurs de contenu, monteurs vidéo, éducateurs et 
              professionnels qui travaillent avec plusieurs fichiers multimédias.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Que vous planifiez une playlist YouTube, organisiez un programme de formation, prépariez 
              une présentation ou gériez un projet de montage vidéo, notre calculateur vous fait gagner 
              un temps précieux en calculant instantanément la durée totale de tous vos clips.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              L&apos;outil fonctionne entièrement dans votre navigateur, sans nécessiter d&apos;inscription ni 
              d&apos;installation. Ajoutez simplement vos durées en heures, minutes et secondes, et obtenez 
              immédiatement le total formaté de manière claire et professionnelle.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Comment utiliser le calculateur de durée vidéo ?</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</span>
                <div>
                  <h3 className="font-semibold mb-1">Ajoutez votre première vidéo</h3>
                  <p>Entrez la durée de votre première vidéo en utilisant les champs heures, minutes et secondes. Vous pouvez également ajouter un titre optionnel pour identifier chaque vidéo.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">2</span>
                <div>
                  <h3 className="font-semibold mb-1">Ajoutez d&apos;autres vidéos</h3>
                  <p>Cliquez sur &quot;Ajouter une vidéo&quot; pour ajouter autant de vidéos que nécessaire. Il n&apos;y a pas de limite au nombre de vidéos que vous pouvez additionner.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">3</span>
                <div>
                  <h3 className="font-semibold mb-1">Consultez la durée totale</h3>
                  <p>Le calcul se fait automatiquement en temps réel. La durée totale s&apos;affiche instantanément et se met à jour à chaque modification.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">4</span>
                <div>
                  <h3 className="font-semibold mb-1">Modifiez ou supprimez des entrées</h3>
                  <p>Vous pouvez modifier n&apos;importe quelle durée ou supprimer une vidéo de la liste. Le total se recalcule automatiquement.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Cas d&apos;usage du calculateur de durée vidéo</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faFilm} className="inline" /> Montage vidéo et production</h3>
                <p>
                  Les monteurs vidéo et vidéastes utilisent ce calculateur pour planifier la durée finale 
                  de leurs projets. Calculez rapidement la durée totale de vos rushes, organisez vos 
                  séquences et respectez les contraintes de temps imposées par les diffuseurs ou plateformes.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">📺 Création de playlists YouTube</h3>
                <p>
                  Les YouTubers et créateurs de contenu peuvent calculer la durée totale de leurs playlists 
                  pour informer leur audience. Idéal pour créer des séries, des cours en ligne ou des 
                  compilations thématiques avec une durée totale claire.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🎓 Formation et e-learning</h3>
                <p>
                  Les formateurs et enseignants utilisent cet outil pour planifier leurs modules de formation. 
                  Calculez la durée totale d&apos;un cours, d&apos;un webinaire ou d&apos;un programme pédagogique complet 
                  pour mieux structurer vos sessions et respecter les horaires.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faMicrophone} className="inline" /> Podcasts et contenus audio</h3>
                <p>
                  Bien que conçu pour la vidéo, cet outil fonctionne parfaitement pour les podcasts, 
                  interviews audio et contenus sonores. Calculez la durée totale de vos épisodes pour 
                  optimiser votre planning de publication.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faChartBar} className="inline" /> Présentation et conférences</h3>
                <p>
                  Les conférenciers et présentateurs peuvent planifier leurs interventions en calculant 
                  la durée de chaque segment vidéo. Assurez-vous de respecter les créneaux horaires 
                  alloués pour vos présentations professionnelles.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faFilm} className="inline" /> Cinéma et télévision</h3>
                <p>
                  Pour les professionnels du cinéma et de la télévision, calculez la durée totale des 
                  scènes, des épisodes ou des programmes. Respectez les formats standards (26 min, 52 min) 
                  et les contraintes de diffusion.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faBriefcase} className="inline" /> Archivage et documentation</h3>
                <p>
                  Les archivistes et documentalistes peuvent estimer le temps nécessaire pour visionner 
                  ou numériser des collections vidéo. Planifiez vos projets de digitalisation avec 
                  précision.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Conseils et bonnes pratiques</h2>
            <div className="space-y-3 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="font-semibold mb-1"><FontAwesomeIcon icon={faCheck} className="inline" /> Ajoutez des titres descriptifs</h3>
                <p className="text-sm">
                  Donnez un nom à chaque vidéo pour faciliter l&apos;identification. Utilisez des titres courts 
                  mais descriptifs comme &quot;Intro&quot;, &quot;Chapitre 1&quot;, &quot;Conclusion&quot; pour mieux vous organiser.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1"><FontAwesomeIcon icon={faCheck} className="inline" /> Prévoyez une marge de sécurité</h3>
                <p className="text-sm">
                  Pour les projets de montage, ajoutez 10-15% de temps supplémentaire pour les transitions, 
                  les génériques et les éléments graphiques. Le montage final est souvent légèrement plus 
                  long que la somme brute des clips.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1"><FontAwesomeIcon icon={faCheck} className="inline" /> Organisez par sections</h3>
                <p className="text-sm">
                  Pour les projets complexes, regroupez vos vidéos par sections ou chapitres. Calculez 
                  d&apos;abord la durée de chaque section séparément, puis additionnez le tout pour obtenir 
                  la durée globale.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1"><FontAwesomeIcon icon={faCheck} className="inline" /> Vérifiez vos durées</h3>
                <p className="text-sm">
                  Assurez-vous d&apos;entrer les bonnes valeurs dans les bons champs (heures, minutes, secondes). 
                  Une erreur commune est de mettre 90 minutes au lieu de 1h30, ce qui fausserait le calcul.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1"><FontAwesomeIcon icon={faCheck} className="inline" /> Sauvegardez vos listes</h3>
                <p className="text-sm">
                  Pour les projets récurrents, notez vos listes de vidéos avec leurs durées. Vous pourrez 
                  les réutiliser ou les ajuster facilement pour de futurs projets similaires.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1"><FontAwesomeIcon icon={faCheck} className="inline" /> Considérez le format de destination</h3>
                <p className="text-sm">
                  YouTube favorise les vidéos de 7-15 minutes pour l&apos;engagement. Les IGTV préfèrent moins 
                  de 10 minutes. TikTok accepte jusqu&apos;à 10 minutes. Adaptez votre durée totale au format cible.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1"><FontAwesomeIcon icon={faCheck} className="inline" /> Pensez à l&apos;attention du spectateur</h3>
                <p className="text-sm">
                  Le taux de rétention diminue avec la durée. Pour les contenus éducatifs, segmentez les 
                  longues sessions en modules de 5-10 minutes. Pour le divertissement, visez l&apos;engagement 
                  maximal dans les 3 premières minutes.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Formats vidéo standards</h2>
            <div className="space-y-3 text-gray-700 dark:text-gray-300">
              <div className="border-l-4 border-red-500 pl-4">
                <h3 className="font-semibold">📺 Format TV standard</h3>
                <p className="text-sm">
                  26 minutes (sitcom, série courte) ou 52 minutes (documentaire, série longue). Les 
                  créneaux incluent généralement le temps pour les publicités.
                </p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold"><FontAwesomeIcon icon={faFilm} className="inline" /> Long métrage cinéma</h3>
                <p className="text-sm">
                  90-120 minutes pour un film standard. Les blockbusters peuvent atteindre 150-180 minutes. 
                  Les courts-métrages font moins de 40 minutes.
                </p>
              </div>
              <div className="border-l-4 border-yellow-500 pl-4">
                <h3 className="font-semibold"><FontAwesomeIcon icon={faLaptop} className="inline" /> Contenu web optimal</h3>
                <p className="text-sm">
                  2-5 minutes pour les réseaux sociaux, 7-15 minutes pour YouTube (meilleure monétisation), 
                  20-45 minutes pour les webinaires et formations courtes.
                </p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-semibold">🎓 Formation e-learning</h3>
                <p className="text-sm">
                  5-10 minutes par module pour maintenir l&apos;attention. Une formation complète peut totaliser 
                  2-8 heures, segmentée en petites unités digestibles.
                </p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="font-semibold"><FontAwesomeIcon icon={faMobileAlt} className="inline" /> Vidéos courtes (Shorts, Reels, TikTok)</h3>
                <p className="text-sm">
                  15-60 secondes pour un impact maximum. Ces formats privilégient le contenu percutant 
                  et rapide à consommer.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Questions fréquentes</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Combien de vidéos puis-je additionner ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Il n&apos;y a aucune limite au nombre de vidéos que vous pouvez ajouter. Que vous ayez 5 ou 
                  500 clips, l&apos;outil calculera la durée totale instantanément. L&apos;interface s&apos;adapte pour 
                  gérer des listes de toutes tailles.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Le calcul fonctionne-t-il avec des durées de plusieurs heures ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Oui, absolument. Vous pouvez entrer des vidéos de plusieurs heures chacune. L&apos;outil 
                  gère correctement les conversions (60 secondes = 1 minute, 60 minutes = 1 heure) et 
                  affiche le total de manière claire.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Puis-je utiliser cet outil pour des contenus audio ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Oui, même si l&apos;outil s&apos;appelle &quot;calculateur de durée vidéo&quot;, il fonctionne 
                  parfaitement pour tout contenu temporel : podcasts, morceaux musicaux, enregistrements 
                  audio, etc. Le principe de calcul est identique.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Les données sont-elles sauvegardées ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Non, l&apos;outil fonctionne entièrement dans votre navigateur et ne sauvegarde aucune donnée. 
                  Si vous rechargez la page ou la fermez, vos entrées seront perdues. Notez vos listes 
                  importantes ailleurs si nécessaire.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Puis-je copier ou exporter la liste ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Actuellement, l&apos;outil affiche le total calculé que vous pouvez noter manuellement. 
                  Pour garder une trace de votre liste, faites une capture d&apos;écran ou notez les durées 
                  dans un document séparé.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Que se passe-t-il si j&apos;entre 90 secondes ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  L&apos;outil convertit automatiquement 90 secondes en 1 minute et 30 secondes lors du calcul 
                  final. Vous pouvez entrer n&apos;importe quelle valeur, l&apos;algorithme gère les conversions 
                  correctement.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  L&apos;outil est-il vraiment gratuit ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Oui, le calculateur de durée vidéo est 100% gratuit sans limitation. Aucune inscription, 
                  aucun paiement, aucune publicité intrusive. Utilisez-le autant que nécessaire pour tous 
                  vos projets personnels et professionnels.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Quelle est la précision du calcul ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Le calcul est précis à la seconde près. L&apos;algorithme additionne toutes les durées 
                  correctement en gérant les retenues (60 secondes → 1 minute, 60 minutes → 1 heure) 
                  pour afficher un résultat exact.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Avantages de notre calculateur</h2>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Gratuit et illimité</strong> - Aucune restriction sur le nombre de calculs ou de vidéos
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Calcul instantané</strong> - Le total se met à jour en temps réel à chaque modification
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Interface intuitive</strong> - Simple et facile à utiliser, aucune courbe d&apos;apprentissage
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Aucune inscription</strong> - Accès direct sans création de compte
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Fonctionne hors ligne</strong> - Une fois la page chargée, pas besoin d&apos;internet
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Compatible tous appareils</strong> - PC, Mac, tablette, smartphone
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Conversions automatiques</strong> - Gère les retenues et conversions de temps
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Confidentialité totale</strong> - Aucune donnée collectée ou stockée
                </span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
