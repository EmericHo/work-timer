"use client";

import Link from "next/link";
import CoinFlip from "@/components/CoinFlip";

export default function CoinFlipPage() {
  return (
    <div className="min-h-screen flex flex-col p-4 sm:p-6 md:p-8">
      <header className="flex-shrink-0 mb-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-3">
          Pile ou Face en Ligne - Tirage au Sort Gratuit
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-400 text-sm sm:text-base max-w-3xl mx-auto">
          Lancez une pièce virtuelle pour prendre vos décisions. Outil gratuit de tirage au sort pile ou face 
          avec animation, parfait pour des choix rapides et impartiaux.
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
          <CoinFlip />
        </div>

        {/* SEO Content */}
        <section className="mt-8 space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Le pile ou face : histoire et principes</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Le pile ou face est l&apos;une des méthodes de décision aléatoire les plus anciennes et universelles. 
              Utilisé depuis l&apos;Antiquité romaine, le lancer de pièce offre une solution simple à 50/50 pour 
              trancher entre deux options. Son nom vient des deux faces de la pièce : pile (le côté chiffres ou 
              symbole) et face (le côté avec un visage ou blason).
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              La beauté du pile ou face réside dans sa simplicité mathématique. Une pièce équilibrée a exactement 
              50% de chances de tomber sur chaque face (en supposant qu&apos;elle ne tombe pas sur la tranche, un 
              événement extrêmement rare). Cette équiprobabilité en fait un outil de décision parfaitement impartial, 
              éliminant tout biais humain.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Notre simulateur de pile ou face reproduit fidèlement ce processus avec un générateur de nombres 
              aléatoires. Chaque lancer est indépendant et a exactement 50% de chances de donner pile ou face, 
              tout comme une vraie pièce. Parfait quand vous n&apos;avez pas de pièce sous la main ou pour des 
              décisions en ligne.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Quand utiliser le pile ou face ?</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="text-xl font-semibold mb-2">⚖️ Décisions difficiles</h3>
                <p>
                  Face à deux options équivalentes, le pile ou face brise l&apos;indécision. Paradoxalement, le 
                  moment où la pièce est en l&apos;air, vous savez souvent quel résultat vous espérez secrètement, 
                  révélant votre vraie préférence. Utilisez-le pour des choix comme : quel restaurant, quel film 
                  regarder, quelle tenue porter.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🏆 Sports et compétitions</h3>
                <p>
                  Traditionnellement utilisé au début des matchs de football pour déterminer qui commence avec le 
                  ballon. Le pile ou face est équitable et accepté universellement dans le sport pour régler les 
                  questions de priorité : qui commence, quel côté du terrain, ordre de passage.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🎲 Jeux et divertissement</h3>
                <p>
                  De nombreux jeux de société et jeux de cartes utilisent le pile ou face pour résoudre des 
                  égalités, déterminer le premier joueur ou ajouter un élément de hasard. C&apos;est plus rapide 
                  que lancer un dé et suffit pour une décision binaire.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🤝 Répartition équitable</h3>
                <p>
                  Quand deux personnes veulent la même chose (dernier morceau de gâteau, siège passager avant, 
                  etc.), le pile ou face offre une solution rapide et juste. Aucune des parties ne peut se plaindre 
                  d&apos;un traitement inéquitable.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🎯 Bris d&apos;égalité</h3>
                <p>
                  Dans les situations où deux options sont vraiment équivalentes et qu&apos;une décision doit être 
                  prise rapidement, le hasard est souvent la meilleure solution. Économisez votre énergie mentale 
                  pour des décisions plus importantes.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">La probabilité du pile ou face</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="text-xl font-semibold mb-2">📊 50/50 parfait</h3>
                <p className="mb-2">
                  Chaque lancer a exactement 50% de chances de donner pile et 50% de chances de donner face. 
                  C&apos;est la distribution de probabilité la plus simple : deux résultats équiprobables.
                </p>
                <p className="text-sm">
                  <strong>Mathématiquement :</strong> P(Pile) = 0.5 et P(Face) = 0.5, avec P(Pile) + P(Face) = 1
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🔄 Indépendance des lancers</h3>
                <p className="mb-2">
                  Chaque lancer est indépendant du précédent. Si vous obtenez 5 piles d&apos;affilée, la probabilité 
                  d&apos;obtenir pile au 6ème lancer est toujours 50%. La pièce n&apos;a pas de mémoire ! C&apos;est 
                  le &quot;sophisme du joueur&quot; de croire que face est &quot;dû&quot; après plusieurs piles.
                </p>
                <p className="text-sm">
                  <strong>Attention :</strong> Ne confondez pas la probabilité d&apos;un seul lancer (toujours 50%) 
                  avec la probabilité d&apos;obtenir 6 piles consécutifs (1/64 ou ~1.5%).
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">📈 Loi des grands nombres</h3>
                <p>
                  Sur un grand nombre de lancers, les proportions de pile et face convergent vers 50/50. Sur 10 
                  lancers, vous pourriez obtenir 7 piles et 3 faces. Mais sur 10 000 lancers, vous serez très 
                  proche de 5 000 piles et 5 000 faces. Plus vous lancez, plus la distribution s&apos;équilibre.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🎪 Dans la réalité</h3>
                <p>
                  Des études ont montré qu&apos;une vraie pièce lancée par un humain a une très légère tendance 
                  (51%) à retomber du même côté qu&apos;elle a démarré, due aux biais physiques du lancer. Notre 
                  simulateur virtuel élimine ce biais et offre un vrai 50/50 mathématique.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Psychologie du pile ou face</h2>
            <div className="space-y-3 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="font-semibold mb-1">💭 Révéler vos vraies préférences</h3>
                <p className="text-sm">
                  Une astuce psychologique : lancez la pièce, et pendant qu&apos;elle est en l&apos;air, remarquez 
                  quel résultat vous espérez. Si vous êtes déçu du résultat, vous savez maintenant ce que vous 
                  vouliez vraiment. Le pile ou face devient un outil d&apos;introspection plutôt que de décision.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">⚡ Économie cognitive</h3>
                <p className="text-sm">
                  Face à des choix peu importants, trop réfléchir est contre-productif. Le pile ou face vous libère 
                  de la &quot;paralysie de décision&quot; et vous permet de consacrer votre énergie mentale aux 
                  vraies décisions importantes. Steve Jobs portait toujours le même style de vêtements pour cette 
                  raison.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">🎯 Acceptation du hasard</h3>
                <p className="text-sm">
                  Utiliser le hasard pour décider peut réduire l&apos;anxiété et les regrets. Vous n&apos;avez pas 
                  fait le &quot;mauvais&quot; choix - c&apos;était juste le hasard. Cela peut être libérateur, 
                  surtout pour les personnes qui ont du mal avec les décisions.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">⚖️ Perception d&apos;équité</h3>
                <p className="text-sm">
                  Même si la personne &quot;perd&quot; au pile ou face, elle est plus susceptible d&apos;accepter 
                  le résultat comme juste parce que le processus était équitable. C&apos;est pourquoi c&apos;est 
                  utilisé dans les sports et les situations de conflit.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Anecdotes et faits intéressants</h2>
            <div className="space-y-3 text-gray-700 dark:text-gray-300 text-sm">
              <div>
                <h3 className="font-semibold mb-1">🏈 Super Bowl</h3>
                <p>
                  Le tirage au sort avant le Super Bowl est l&apos;un des pile ou face les plus regardés au monde, 
                  avec des millions de téléspectateurs. Une pièce spéciale est frappée chaque année pour l&apos;occasion.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">🎬 Cinéma</h3>
                <p>
                  Dans &quot;No Country for Old Men&quot;, le personnage d&apos;Anton Chigurh utilise constamment 
                  le pile ou face pour décider du sort de ses victimes, illustrant le thème du hasard et du destin.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">🏙️ Décisions importantes</h3>
                <p>
                  Selon la légende, les fondateurs de Portland, Oregon (USA) ont lancé une pièce pour nommer la 
                  ville. S&apos;ils avaient eu face au lieu de pile, la ville se serait appelée Boston, Oregon.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">🔬 Recherche scientifique</h3>
                <p>
                  Une étude de 2007 par Persi Diaconis a montré qu&apos;une pièce lancée et attrapée (sans rebond) 
                  a environ 51% de chances de retomber sur la même face qu&apos;au départ, due au précession du lancer.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">💰 Probabilité de tomber sur la tranche</h3>
                <p>
                  Pour une pièce standard (Euro, Dollar), la probabilité qu&apos;elle tombe et reste sur la tranche 
                  est estimée à environ 1 sur 6 000. C&apos;est si rare que c&apos;est négligé dans tous les calculs 
                  pratiques.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Avantages de notre simulateur pile ou face</h2>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Vraiment aléatoire</strong> - 50/50 parfait garanti par générateur de nombres aléatoires
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Animation visuelle</strong> - Effet réaliste de lancer de pièce
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Historique des lancers</strong> - Suivez vos résultats précédents
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>100% Gratuit</strong> - Lancers illimités sans inscription
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Disponible partout</strong> - Pas besoin de pièce physique, utilisez sur mobile ou desktop
                </span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
