"use client";

import Link from "next/link";
import RandomNumberGenerator from "@/components/RandomNumberGenerator";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullseye, faChartBar, faCheck, faDice, faExclamationTriangle, faFileAlt, faFlask, faHashtag, faKey, faPalette, faPhone } from '@fortawesome/free-solid-svg-icons';

export default function RandomNumberGeneratorPage() {
  return (
    <div className="min-h-screen flex flex-col p-4 sm:p-6 md:p-8">
      <header className="flex-shrink-0 mb-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-3">
          Générateur de Nombres Aléatoires en Ligne
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-400 text-sm sm:text-base max-w-3xl mx-auto">
          Générez des nombres aléatoires dans n&apos;importe quelle plage. Outil gratuit pour créer des 
          nombres random pour tirages au sort, jeux, statistiques et tests.
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
          <RandomNumberGenerator />
        </div>

        {/* SEO Content */}
        <section className="mt-8 space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Comment fonctionnent les générateurs de nombres aléatoires ?</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Un générateur de nombres aléatoires (RNG - Random Number Generator) est un algorithme qui produit 
              une séquence de nombres qui ne peuvent pas être raisonnablement prédits. Dans les ordinateurs, on 
              distingue deux types : les générateurs pseudo-aléatoires (PRNG) qui utilisent des algorithmes 
              mathématiques, et les générateurs vraiment aléatoires (TRNG) qui utilisent des phénomènes physiques.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Les générateurs pseudo-aléatoires, comme celui de JavaScript utilisé par cet outil, partent d&apos;une 
              valeur initiale (seed) et appliquent des opérations mathématiques complexes pour produire une séquence 
              de nombres qui semble aléatoire. Bien que déterministes en théorie (la même seed produit la même 
              séquence), ils sont suffisamment imprévisibles pour la plupart des usages non-cryptographiques.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Notre générateur vous permet de spécifier une plage (minimum et maximum) et génère des nombres 
              aléatoires dans cet intervalle. Vous pouvez générer un seul nombre ou une liste de plusieurs nombres 
              selon vos besoins, le tout instantanément dans votre navigateur.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Cas d&apos;usage des nombres aléatoires</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faDice} className="inline" /> Jeux et divertissement</h3>
                <p>
                  Les jeux de toutes sortes nécessitent de l&apos;aléatoire : lancer de dés, distribution de cartes, 
                  spawn d&apos;ennemis dans les jeux vidéo, sélection de numéros de loterie. L&apos;aléatoire 
                  garantit que chaque partie est unique et imprévisible.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faBullseye} className="inline" /> Tirages au sort</h3>
                <p>
                  Organisez des tirages au sort équitables pour des concours, giveaways ou distributions de prix. 
                  Attribuez un numéro à chaque participant et générez aléatoirement le(s) numéro(s) gagnant(s). 
                  C&apos;est transparent et impartial.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faChartBar} className="inline" /> Statistiques et échantillonnage</h3>
                <p>
                  En recherche et statistiques, la sélection aléatoire d&apos;échantillons est cruciale pour obtenir 
                  des résultats représentatifs. Générez des nombres aléatoires pour sélectionner des participants 
                  à une étude, créer des groupes de contrôle, ou choisir des éléments dans une population.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faFlask} className="inline" /> Tests et simulations</h3>
                <p>
                  Les développeurs utilisent des données aléatoires pour tester leurs applications. Créez des 
                  données de test variées, simulez différents scénarios utilisateurs, ou testez la robustesse 
                  d&apos;algorithmes avec des entrées aléatoires.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faPalette} className="inline" /> Art génératif et créativité</h3>
                <p>
                  Les artistes et designers utilisent l&apos;aléatoire pour créer des patterns, textures et designs 
                  uniques. L&apos;art génératif exploite le hasard pour produire des œuvres qui ne peuvent être 
                  reproduites exactement.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Applications pratiques courantes</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="text-xl font-semibold mb-2">🏫 Éducation et enseignement</h3>
                <p>
                  Les enseignants utilisent des générateurs de nombres aléatoires pour : interroger équitablement 
                  les élèves en sélectionnant un numéro au hasard, créer des groupes de travail aléatoires, 
                  mélanger l&apos;ordre des questions dans les tests, ou distribuer aléatoirement des sujets de 
                  présentation.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🎰 Décisions et choix</h3>
                <p>
                  Indécis entre plusieurs options ? Attribuez un numéro à chaque choix et laissez le hasard 
                  décider. Cela peut s&apos;appliquer à tout : quel restaurant choisir, quel film regarder, 
                  qui commence un jeu, etc.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🏆 Compétitions sportives</h3>
                <p>
                  Déterminez l&apos;ordre de passage des compétiteurs, créez des paires aléatoires pour des 
                  matchs, ou tirez au sort les groupes dans un tournoi. L&apos;aléatoire garantit l&apos;équité 
                  dans l&apos;organisation sportive.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faPhone} className="inline" /> Sondages et enquêtes</h3>
                <p>
                  Sélectionnez aléatoirement des numéros de téléphone ou des adresses email dans une base de 
                  données pour conduire des sondages. La sélection aléatoire élimine les biais et améliore la 
                  validité statistique des résultats.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Randomisation : avantages et limites</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faCheck} className="inline" /> Avantages de l&apos;aléatoire</h3>
                <ul className="list-disc pl-6 space-y-1 text-sm mt-2">
                  <li><strong>Équité :</strong> Élimine les biais humains dans la sélection</li>
                  <li><strong>Imprévisibilité :</strong> Impossible de prédire ou manipuler les résultats</li>
                  <li><strong>Diversité :</strong> Garantit une variété de résultats possibles</li>
                  <li><strong>Simplicité :</strong> Solution simple pour des décisions complexes</li>
                  <li><strong>Validité statistique :</strong> Essentiel pour des échantillons représentatifs</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faExclamationTriangle} className="inline" /> Considérations importantes</h3>
                <ul className="list-disc pl-6 space-y-1 text-sm mt-2">
                  <li>
                    <strong>Pseudo-aléatoire vs vraiment aléatoire :</strong> Les générateurs informatiques sont 
                    pseudo-aléatoires, suffisants pour la plupart des usages mais pas pour la cryptographie
                  </li>
                  <li>
                    <strong>Distribution uniforme :</strong> Assurez-vous que tous les nombres ont la même 
                    probabilité d&apos;être sélectionnés
                  </li>
                  <li>
                    <strong>Pas de mémoire :</strong> Chaque génération est indépendante. Un nombre qui vient de 
                    sortir a autant de chances de sortir à nouveau
                  </li>
                  <li>
                    <strong>Taille de l&apos;échantillon :</strong> Pour des résultats statistiquement 
                    significatifs, un échantillon suffisamment grand est nécessaire
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Conseils d&apos;utilisation</h2>
            <div className="space-y-3 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="font-semibold mb-1"><FontAwesomeIcon icon={faBullseye} className="inline" /> Définissez la bonne plage</h3>
                <p className="text-sm">
                  Réfléchissez à vos besoins réels. Pour un tirage au sort avec 50 participants, utilisez 1-50. 
                  Pour simuler un dé à 6 faces, utilisez 1-6. Une plage inappropriée peut donner des résultats 
                  inutilisables.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1"><FontAwesomeIcon icon={faHashtag} className="inline" /> Générez plusieurs nombres si nécessaire</h3>
                <p className="text-sm">
                  Si vous avez besoin de sélectionner plusieurs gagnants ou créer un échantillon, générez plusieurs 
                  nombres d&apos;un coup. Notez que les doublons sont possibles - si vous voulez des nombres uniques, 
                  vous devrez les éliminer manuellement ou régénérer.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1"><FontAwesomeIcon icon={faFileAlt} className="inline" /> Documentez le processus</h3>
                <p className="text-sm">
                  Pour des tirages au sort officiels ou des sélections importantes, documentez le processus : 
                  date, heure, plage utilisée, résultats obtenus. Cela garantit la transparence et la traçabilité.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1"><FontAwesomeIcon icon={faKey} className="inline" /> Pour la sécurité, utilisez crypto.getRandomValues()</h3>
                <p className="text-sm">
                  Si vous générez des nombres pour la cryptographie, la sécurité ou des enjeux financiers, 
                  n&apos;utilisez pas un simple RNG. Utilisez des générateurs cryptographiquement sûrs comme 
                  crypto.getRandomValues() en JavaScript.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Avantages de notre générateur de nombres aléatoires</h2>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Plage personnalisable</strong> - Définissez votre minimum et maximum selon vos besoins
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Génération multiple</strong> - Créez plusieurs nombres aléatoires simultanément
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>100% Gratuit</strong> - Générations illimitées sans inscription
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Instantané</strong> - Résultats immédiats à chaque clic
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Interface simple</strong> - Facile à utiliser, même pour les non-techniciens
                </span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
