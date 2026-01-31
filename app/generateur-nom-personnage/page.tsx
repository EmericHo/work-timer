"use client";

import Link from "next/link";
import CharacterNameGenerator from "@/components/CharacterNameGenerator";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBalanceScale, faBook, faBullseye, faChartBar, faDice, faFileAlt, faFilm, faGamepad, faGlobe, faPen, faSync, faTheaterMasks, faVolumeUp } from '@fortawesome/free-solid-svg-icons';

export default function CharacterNameGeneratorPage() {
  return (
    <div className="min-h-screen flex flex-col p-4 sm:p-6 md:p-8">
      <header className="flex-shrink-0 mb-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-3">
          Générateur de Nom de Personnage Gratuit
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-400 text-sm sm:text-base max-w-3xl mx-auto">
          Créez des noms de personnages réalistes et mémorables pour vos romans, jeux de rôle, 
          scénarios et histoires. Mélange de prénoms et noms français et internationaux.
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
          <CharacterNameGenerator />
        </div>

        {/* SEO Content */}
        <section className="mt-8 space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Pourquoi les noms de personnages sont-ils importants ?</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Le nom d&apos;un personnage est bien plus qu&apos;une simple étiquette. C&apos;est le premier 
              élément qui permet à vos lecteurs, joueurs ou spectateurs de se connecter émotionnellement 
              à vos créations. Un nom bien choisi peut instantanément évoquer la personnalité, l&apos;origine 
              culturelle, l&apos;époque et même le destin d&apos;un personnage.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Dans l&apos;écriture créative, que ce soit pour un roman, une nouvelle ou un scénario, le nom 
              d&apos;un personnage contribue à son identité narrative. Un nom mémorable aide les lecteurs à 
              se souvenir du personnage longtemps après avoir terminé l&apos;histoire. C&apos;est pourquoi 
              les grands auteurs passent souvent beaucoup de temps à choisir les noms parfaits pour leurs 
              personnages.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Notre générateur de noms de personnages vous fait gagner un temps précieux en créant 
              instantanément des combinaisons réalistes de prénoms et noms. Que vous ayez besoin d&apos;un 
              nom français élégant, d&apos;un nom international diversifié, ou d&apos;un mélange des deux, 
              notre outil gratuit génère des noms authentiques et crédibles pour tous vos besoins créatifs.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Comment utiliser le générateur de noms ?</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faChartBar} className="inline" /> Choisissez le nombre de noms</h3>
                <p>
                  Définissez combien de noms vous souhaitez générer en une seule fois (de 1 à 50). 
                  Générez plusieurs options d&apos;un coup pour avoir le choix parmi différentes 
                  combinaisons. Cela est particulièrement utile si vous créez plusieurs personnages 
                  pour un roman ou une campagne de jeu de rôle.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🚫 Excluez des noms spécifiques</h3>
                <p>
                  Utilisez le champ d&apos;exclusion pour éviter certains noms ou prénoms. Entrez simplement 
                  les noms que vous ne voulez pas voir apparaître, séparés par des virgules. Cela vous permet 
                  de filtrer les noms trop communs, les noms déjà utilisés dans votre histoire, ou les noms 
                  que vous trouvez inappropriés pour votre contexte.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faTheaterMasks} className="inline" /> Générez et copiez</h3>
                <p>
                  Cliquez sur le bouton &quot;Générer&quot; pour créer vos noms de personnages. Chaque nom 
                  généré affiche le prénom et le nom de famille. Vous pouvez copier chaque nom 
                  individuellement en cliquant sur le bouton copier à côté, ou copier tous les noms 
                  générés en une fois avec le bouton &quot;Copier tout&quot;.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faSync} className="inline" /> Regénérez à volonté</h3>
                <p>
                  Pas satisfait des résultats ? Cliquez simplement à nouveau sur &quot;Générer&quot; pour obtenir 
                  un tout nouveau lot de noms. Notre générateur crée des combinaisons uniques à chaque fois, 
                  vous donnant un choix pratiquement illimité de noms de personnages crédibles.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Conseils pour créer des noms de personnages mémorables</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faBullseye} className="inline" /> Adaptez le nom à la personnalité</h3>
                <p>
                  Un nom peut suggérer des traits de caractère. Des noms courts et percutants comme 
                  &quot;Max&quot; ou &quot;Léo&quot; évoquent souvent l&apos;énergie et la dynamique, tandis que des noms 
                  plus longs comme &quot;Alexandre&quot; ou &quot;Maximilien&quot; peuvent suggérer la sophistication 
                  ou la noblesse. Pensez à l&apos;impression que vous voulez créer.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faGlobe} className="inline" /> Considérez l&apos;origine culturelle</h3>
                <p>
                  Le nom d&apos;un personnage devrait correspondre à ses origines culturelles et à l&apos;univers 
                  de votre histoire. Notre générateur mélange des noms français et internationaux, vous 
                  permettant de créer des personnages diversifiés et authentiques. Utilisez la fonction 
                  d&apos;exclusion pour filtrer selon vos besoins.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faVolumeUp} className="inline" /> Testez la prononciation</h3>
                <p>
                  Lisez le nom à voix haute pour vous assurer qu&apos;il sonne bien. Un nom qui coule 
                  naturellement à l&apos;oral sera plus facile à mémoriser pour vos lecteurs. Évitez les 
                  combinaisons qui créent des répétitions sonores gênantes ou qui sont difficiles à 
                  prononcer.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faBalanceScale} className="inline" /> Équilibrez l&apos;unicité et la crédibilité</h3>
                <p>
                  Un bon nom de personnage trouve l&apos;équilibre entre être mémorable et être réaliste. 
                  Trop commun, et votre personnage se perd dans la foule. Trop excentrique, et il brise 
                  l&apos;immersion. Notre générateur crée des combinaisons qui sont à la fois crédibles et 
                  distinctives.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faFileAlt} className="inline" /> Variez les premières lettres</h3>
                <p>
                  Si vous créez plusieurs personnages, assurez-vous qu&apos;ils ne commencent pas tous par 
                  la même lettre. Cela évite la confusion pour vos lecteurs. Générez plusieurs lots de 
                  noms et sélectionnez des noms avec des initiales différentes pour vos personnages 
                  principaux.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Cas d&apos;usage du générateur de noms</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faBook} className="inline" /> Romans et nouvelles</h3>
                <p>
                  Que vous écriviez de la fiction contemporaine, historique ou fantastique, notre générateur 
                  vous aide à créer rapidement des noms réalistes pour vos personnages. Gagnez du temps sur 
                  la recherche de noms et concentrez-vous sur l&apos;écriture de votre histoire. Parfait pour 
                  les personnages principaux, secondaires et même les figurants qui ont besoin d&apos;une identité.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faGamepad} className="inline" /> Jeux vidéo et développement</h3>
                <p>
                  Les développeurs de jeux vidéo ont besoin de nombreux noms pour les PNJ (personnages 
                  non-joueurs), les personnages de quêtes, et même pour suggérer des noms aux joueurs. 
                  Notre générateur peut créer jusqu&apos;à 50 noms d&apos;un coup, idéal pour peupler votre 
                  univers de jeu avec des personnages crédibles et diversifiés.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faDice} className="inline" /> Jeux de rôle (JDR/RPG)</h3>
                <p>
                  Maîtres du jeu et joueurs de JDR comme Donjons et Dragons, Pathfinder ou autres systèmes 
                  peuvent utiliser cet outil pour créer rapidement des noms pour leurs personnages. Plus 
                  besoin de bloquer la partie en cherchant un nom - générez-en plusieurs et choisissez celui 
                  qui convient le mieux à votre personnage ou PNJ du moment.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faFilm} className="inline" /> Scénarios et scripts</h3>
                <p>
                  Scénaristes de cinéma, télévision, théâtre ou webséries peuvent utiliser notre générateur 
                  pour nommer leurs personnages de manière efficace. Un bon nom de personnage dans un 
                  scénario aide les acteurs et l&apos;équipe de production à visualiser le personnage et 
                  contribue à la crédibilité de l&apos;histoire.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faPen} className="inline" /> Fanfiction et écriture créative</h3>
                <p>
                  Les auteurs de fanfiction et d&apos;écriture créative en ligne peuvent rapidement générer 
                  des noms pour leurs personnages originaux (OC). Que vous écriviez sur Wattpad, Archive of 
                  Our Own ou votre propre blog, avoir accès à un générateur de noms rapide améliore votre 
                  flux créatif.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faTheaterMasks} className="inline" /> Tests et prototypes</h3>
                <p>
                  Designers UI/UX, développeurs web et créateurs de prototypes ont besoin de noms réalistes 
                  pour leurs maquettes et démonstrations. Plutôt que d&apos;utiliser des placeholders 
                  génériques, notre générateur fournit des noms crédibles qui rendent vos prototypes plus 
                  professionnels et réalistes.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Questions fréquentes</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Les noms générés sont-ils uniques ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Chaque génération crée des combinaisons aléatoires de prénoms et noms. Bien que les 
                  prénoms et noms individuels soient réels et courants, leurs combinaisons sont générées 
                  aléatoirement. Dans une même génération, nous évitons les doublons. Cependant, comme dans 
                  la vie réelle, il est possible que certaines combinaisons soient identiques entre 
                  différentes sessions de génération.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Puis-je utiliser ces noms dans mes œuvres commerciales ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Oui, absolument ! Les noms générés sont des combinaisons de prénoms et noms communs qui 
                  font partie du domaine public. Vous êtes libre de les utiliser dans vos romans, jeux, 
                  scénarios, ou tout autre projet, qu&apos;il soit commercial ou personnel. Aucune attribution 
                  n&apos;est nécessaire.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Comment fonctionne la fonction d&apos;exclusion ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Entrez simplement les noms ou prénoms que vous souhaitez éviter dans le champ 
                  &quot;Noms à exclure&quot;, séparés par des virgules. Le générateur évitera alors toute 
                  combinaison contenant ces termes. Par exemple, si vous excluez &quot;Martin&quot;, aucun nom 
                  avec le nom de famille Martin ou le prénom Martin ne sera généré.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Quelle est la différence entre les noms français et internationaux ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Notre générateur combine des prénoms et noms français typiques (comme Jean Dupont ou 
                  Sophie Bernard) avec des noms internationaux courants en anglais et dans d&apos;autres 
                  langues (comme James Wilson ou Emma Garcia). Cela crée une base de données diversifiée 
                  et permet de générer des noms adaptés à différents contextes culturels et géographiques.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Puis-je générer des noms pour des personnages d&apos;époques spécifiques ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Notre générateur actuel crée des noms intemporels qui fonctionnent bien pour des contextes 
                  contemporains et peuvent également s&apos;adapter à des périodes historiques relativement 
                  récentes. Pour des époques très spécifiques (médiévale, antique, etc.), vous pouvez utiliser 
                  l&apos;exclusion pour filtrer les noms trop modernes et générer plusieurs fois jusqu&apos;à 
                  trouver des combinaisons appropriées.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Le générateur fonctionne-t-il hors ligne ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Une fois la page chargée, le générateur fonctionne entièrement dans votre navigateur. 
                  Toute la génération se fait côté client, ce qui signifie qu&apos;aucune donnée n&apos;est 
                  envoyée à nos serveurs. Cependant, vous avez besoin d&apos;une connexion Internet initiale 
                  pour charger la page.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Avantages de notre générateur de noms de personnages</h2>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>100% Gratuit</strong> - Générez autant de noms que vous le souhaitez sans limite
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Noms réalistes</strong> - Combinaisons crédibles de prénoms et noms français et internationaux
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Génération rapide</strong> - Créez jusqu&apos;à 50 noms instantanément en un seul clic
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Fonction d&apos;exclusion</strong> - Évitez des noms spécifiques pour plus de contrôle
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Copie facile</strong> - Copiez individuellement ou tous les noms en une fois
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Aucune inscription</strong> - Utilisez l&apos;outil immédiatement sans créer de compte
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Confidentialité garantie</strong> - Tout fonctionne côté client, aucune donnée envoyée
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Multi-usage</strong> - Parfait pour romans, JDR, jeux vidéo, scénarios et plus
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Interface intuitive</strong> - Design simple et facile à utiliser
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Compatible mobile</strong> - Fonctionne parfaitement sur tous les appareils
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              Commencez à créer vos personnages dès maintenant
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Ne laissez plus la recherche de noms ralentir votre créativité. Avec notre générateur de 
              noms de personnages gratuit, vous pouvez créer instantanément des identités crédibles et 
              mémorables pour tous vos projets créatifs. Que vous soyez romancier, game designer, maître 
              du jeu, scénariste ou simplement un passionné d&apos;écriture créative, cet outil est fait 
              pour vous.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Générez vos premiers noms maintenant et donnez vie à vos personnages ! L&apos;outil est 
              entièrement gratuit, sans inscription requise, et vous pouvez l&apos;utiliser autant de 
              fois que nécessaire. Créez, explorez et trouvez le nom parfait pour chacun de vos personnages.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
