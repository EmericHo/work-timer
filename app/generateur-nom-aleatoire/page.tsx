"use client";

import Link from "next/link";
import RandomNameGenerator from "@/components/RandomNameGenerator";

export default function RandomNameGeneratorPage() {
  return (
    <div className="min-h-screen flex flex-col p-4 sm:p-6 md:p-8">
      <header className="flex-shrink-0 mb-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-3">
          Générateur de Nom Aléatoire
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-400 text-sm sm:text-base max-w-3xl mx-auto">
          Générez des noms aléatoires pour vos projets, personnages ou tests.
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
          <RandomNameGenerator />
        </div>

        {/* SEO Content */}
        <section className="mt-8 space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Qu&apos;est-ce qu&apos;un générateur de nom aléatoire ?</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Un générateur de nom aléatoire est un outil en ligne qui crée automatiquement des noms et prénoms 
              plausibles à partir de vastes bases de données. Cet outil combine intelligemment prénoms et noms 
              de famille selon différentes origines culturelles (français, anglais, espagnol, japonais, etc.) 
              pour produire des identités réalistes en un clic.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Utilisé par les écrivains, développeurs, testeurs, gamers et créatifs, cet outil est indispensable 
              pour nommer rapidement des personnages, créer des comptes de test, générer des données fictives 
              pour des démonstrations, ou simplement trouver l&apos;inspiration pour un pseudonyme original.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Notre générateur puise dans des milliers de combinaisons possibles pour créer des noms uniques 
              et authentiques. Choisissez le genre (masculin, féminin, neutre), l&apos;origine culturelle, et 
              générez instantanément autant de noms que nécessaire pour vos projets.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Comment utiliser le générateur de nom aléatoire ?</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</span>
                <div>
                  <h3 className="font-semibold mb-1">Sélectionnez le genre</h3>
                  <p>Choisissez masculin pour des prénoms d&apos;homme, féminin pour des prénoms de femme, ou neutre/aléatoire pour un mélange. Cette option influence les prénoms générés pour correspondre aux conventions culturelles.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">2</span>
                <div>
                  <h3 className="font-semibold mb-1">Choisissez l&apos;origine culturelle</h3>
                  <p>Sélectionnez l&apos;origine des noms : français, anglais, espagnol, italien, allemand, japonais, chinois, russe, arabe, ou mélange international. Chaque culture a ses conventions de dénomination spécifiques.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">3</span>
                <div>
                  <h3 className="font-semibold mb-1">Générez votre nom</h3>
                  <p>Cliquez sur &quot;Générer&quot; et obtenez instantanément un nom complet (prénom + nom de famille). Pas satisfait ? Générez-en un autre en un clic jusqu&apos;à trouver le nom parfait pour votre besoin.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">4</span>
                <div>
                  <h3 className="font-semibold mb-1">Copiez et utilisez</h3>
                  <p>Une fois le nom généré, copiez-le pour l&apos;utiliser dans votre projet, roman, jeu vidéo, test logiciel ou toute autre application nécessitant des identités fictives.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Cas d&apos;usage du générateur de noms</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="text-xl font-semibold mb-2">✍️ Écriture et création littéraire</h3>
                <p>
                  Les auteurs, scénaristes et romanciers utilisent ce générateur pour nommer rapidement leurs 
                  personnages. Finies les heures passées à chercher le nom parfait ! Générez des dizaines de 
                  noms correspondant à l&apos;époque, la culture et le profil de vos personnages.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🎮 Jeux vidéo et jeux de rôle</h3>
                <p>
                  Gamers et maîtres de jeu créent rapidement des PNJ (personnages non-joueurs), des avatars ou 
                  des personnages de campagne. Parfait pour les RPG, MMO, et jeux de rôle sur table (D&D, 
                  Pathfinder). Créez des identités cohérentes pour votre univers.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">💻 Tests et développement logiciel</h3>
                <p>
                  Les développeurs et testeurs ont besoin de données réalistes pour leurs tests. Générez 
                  rapidement des noms pour peupler des bases de données de test, créer des comptes utilisateurs 
                  fictifs, ou remplir des formulaires de démonstration.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🎭 Théâtre et cinéma</h3>
                <p>
                  Scénaristes, dramaturges et réalisateurs nomment leurs personnages selon le contexte culturel 
                  et l&apos;époque de leur histoire. Un nom approprié renforce l&apos;authenticité et l&apos;immersion des 
                  spectateurs.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🎨 Projets créatifs</h3>
                <p>
                  Artistes, designers et créateurs de contenu utilisent des noms fictifs pour leurs concepts, 
                  personnages illustrés, bandes dessinées, animations, et projets multimédia. Inspiration 
                  instantanée pour vos créations.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🎭 Alias et pseudonymes</h3>
                <p>
                  Besoin d&apos;un pseudonyme pour les réseaux sociaux, un nom de plume pour publier, ou un alias 
                  artistique ? Le générateur propose des combinaisons originales que vous pouvez personnaliser 
                  selon vos goûts.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">📊 Démonstrations et présentations</h3>
                <p>
                  Pour les présentations commerciales, tutoriels ou formations, utilisez des noms fictifs 
                  réalistes plutôt que &quot;Jean Dupont&quot; ou &quot;Test User&quot;. Cela rend vos démonstrations plus 
                  professionnelles et engageantes.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Origines culturelles disponibles</h2>
            <div className="space-y-3 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="font-semibold mb-1">🇫🇷 Noms français</h3>
                <p className="text-sm">
                  Prénoms classiques et modernes français (Pierre, Marie, Lucas, Emma), noms de famille 
                  typiques (Martin, Bernard, Dubois, Lefevre). Parfait pour des histoires se déroulant en 
                  France ou dans des contextes francophones.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">🇬🇧 Noms anglais</h3>
                <p className="text-sm">
                  Prénoms britanniques et américains (James, William, Emily, Olivia), patronymes anglophones 
                  (Smith, Johnson, Brown, Wilson). Idéal pour la littérature anglophone, jeux AAA occidentaux, 
                  ou contextes anglo-saxons.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">🇪🇸 Noms espagnols</h3>
                <p className="text-sm">
                  Prénoms hispaniques (Carlos, María, Diego, Sofía), noms composés traditionnels (García López, 
                  Rodríguez Pérez). Authentique pour histoires latines, espagnoles ou latino-américaines.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">🇮🇹 Noms italiens</h3>
                <p className="text-sm">
                  Prénoms italiens mélodieux (Giovanni, Francesca, Marco, Giulia), noms évocateurs (Rossi, 
                  Colombo, Ferrari, Romano). Parfait pour des contextes italiens ou méditerranéens.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">🇩🇪 Noms allemands</h3>
                <p className="text-sm">
                  Prénoms germaniques (Hans, Greta, Klaus, Anna), patronymes typiques (Müller, Schmidt, 
                  Schneider, Fischer). Pour contextes allemands, autrichiens ou suisses alémaniques.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">🇯🇵 Noms japonais</h3>
                <p className="text-sm">
                  Prénoms japonais (Hiroshi, Sakura, Takeshi, Yuki), noms de famille (Tanaka, Suzuki, Sato, 
                  Yamamoto). Respecte l&apos;ordre nom-prénom japonais. Parfait pour mangas, animes, ou contextes 
                  nippons.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Conseils pour choisir des noms</h2>
            <div className="space-y-3 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="font-semibold mb-1">✅ Adaptez l&apos;origine au contexte</h3>
                <p className="text-sm">
                  Choisissez l&apos;origine culturelle en fonction de votre histoire. Un roman se déroulant à Paris 
                  nécessite des noms français, un jeu médiéval-fantastique peut utiliser des noms anglais 
                  anciens. L&apos;authenticité renforce l&apos;immersion.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">✅ Variez les noms dans une même œuvre</h3>
                <p className="text-sm">
                  Évitez que tous vos personnages aient des noms commençant par la même lettre ou ayant des 
                  sonorités similaires. La diversité facilite la mémorisation pour les lecteurs/joueurs et 
                  évite les confusions.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">✅ Testez la prononciation</h3>
                <p className="text-sm">
                  Prononcez le nom à voix haute. Est-il facile à dire ? À retenir ? Les noms trop complexes 
                  ou imprononçables peuvent rebuter. Privilégiez des noms qui coulent naturellement, surtout 
                  pour les personnages principaux.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">✅ Vérifiez les significations involontaires</h3>
                <p className="text-sm">
                  Avant de valider un nom, faites une recherche rapide. Certaines combinaisons peuvent avoir 
                  des significations drôles, offensantes ou inappropriées dans d&apos;autres langues. Mieux vaut 
                  prévenir que guérir !
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">✅ Personnalisez les résultats</h3>
                <p className="text-sm">
                  Le générateur est un point de départ. N&apos;hésitez pas à modifier légèrement un nom généré 
                  (changer une lettre, combiner deux résultats) pour créer quelque chose de vraiment unique 
                  qui correspond parfaitement à votre vision.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">✅ Gardez une liste</h3>
                <p className="text-sm">
                  Notez les noms générés que vous aimez dans un document. Vous construirez progressivement 
                  une banque de noms pour vos futurs projets. Organisez-les par type de personnage, culture, 
                  ou genre pour faciliter la recherche ultérieure.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Questions fréquentes</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Les noms générés sont-ils réels ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Les noms sont générés aléatoirement à partir de bases de données de prénoms et noms de 
                  famille réels, mais les combinaisons sont souvent fictives. Il est possible qu&apos;une 
                  combinaison existe réellement, mais c&apos;est purement coïncidentiel.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Puis-je utiliser ces noms commercialement ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Oui, vous pouvez utiliser les noms générés dans vos romans, jeux, logiciels, films, ou 
                  tout projet commercial. Les noms de personnes ne sont pas protégeables par le droit 
                  d&apos;auteur. Seules les identités réelles de personnes vivantes doivent être évitées.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Comment sont générés les noms ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Notre algorithme combine aléatoirement des prénoms et noms de famille issus de bases de 
                  données culturelles authentiques. Les combinaisons respectent les conventions de chaque 
                  culture (ordre, genre, fréquence) pour produire des résultats réalistes.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Combien de noms puis-je générer ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Il n&apos;y a aucune limitation ! Générez autant de noms que nécessaire, gratuitement et sans 
                  inscription. Que vous ayez besoin de 10 ou 1000 noms pour votre projet, l&apos;outil est 
                  entièrement à votre disposition.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Les noms respectent-ils les conventions de genre ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Oui, lorsque vous sélectionnez un genre, le générateur utilise des prénoms traditionnellement 
                  associés à ce genre dans la culture choisie. L&apos;option &quot;neutre&quot; ou &quot;aléatoire&quot; mélange 
                  les genres pour plus de diversité.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Puis-je générer des noms pour plusieurs cultures ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Absolument ! Changez simplement l&apos;origine culturelle entre chaque génération. Pour un 
                  projet multiculturel, générez des noms de différentes origines et choisissez ceux qui 
                  conviennent à chaque personnage selon son background.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Les noms sont-ils sauvegardés ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Non, par respect de votre vie privée, aucun nom généré n&apos;est sauvegardé. Si vous trouvez 
                  un nom que vous aimez, notez-le immédiatement dans un document externe. La génération est 
                  purement locale dans votre navigateur.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Avantages de notre générateur</h2>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Illimité et gratuit</strong> - Générez autant de noms que nécessaire
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Multiculturel</strong> - Plusieurs origines culturelles disponibles
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Réaliste</strong> - Noms authentiques et plausibles
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Instantané</strong> - Génération en un clic
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Personnalisable</strong> - Choix du genre et de l&apos;origine
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Aucune inscription</strong> - Accès direct sans compte
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Usage commercial libre</strong> - Utilisez les noms dans vos projets
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Confidentialité totale</strong> - Aucune donnée collectée
                </span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
