"use client";

import Link from "next/link";
import LoanCalculator from "@/components/LoanCalculator";

export default function LoanCalculatorPage() {
  return (
    <div className="min-h-screen flex flex-col p-4 sm:p-6 md:p-8">
      <header className="flex-shrink-0 mb-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-3">
          Calculateur de Crédit Auto et Immobilier Gratuit
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-400 text-sm sm:text-base max-w-3xl mx-auto">
          Simulez votre crédit auto ou immobilier en quelques clics. Calculez vos mensualités, 
          le coût total de votre prêt et visualisez votre tableau d&apos;amortissement détaillé.
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

      <div className="flex-1 max-w-7xl mx-auto w-full">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
          <LoanCalculator />
        </div>

        {/* SEO Content */}
        <section className="mt-8 space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Comment fonctionne le calcul d&apos;un crédit ?</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Le calcul d&apos;un crédit repose sur une formule mathématique précise qui prend en compte 
              le montant emprunté (capital), le taux d&apos;intérêt annuel et la durée du prêt. La mensualité 
              est calculée selon la formule d&apos;annuité constante, garantissant que vous payez le même 
              montant chaque mois tout au long du remboursement.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Au début du crédit, la part d&apos;intérêts dans votre mensualité est importante, puis elle 
              diminue progressivement au profit du remboursement du capital. C&apos;est ce qu&apos;on appelle 
              l&apos;amortissement du crédit. Notre calculateur vous montre précisément cette évolution 
              mois par mois dans le tableau d&apos;amortissement.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              <strong>Formule de calcul :</strong> La mensualité (M) est calculée avec la formule suivante :
              <br />
              M = C × (t/12) × (1 + t/12)^n / [(1 + t/12)^n - 1]
              <br />
              Où C = capital emprunté, t = taux annuel, n = nombre de mensualités.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Crédit Auto vs Crédit Immobilier : Les différences clés</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="text-xl font-semibold mb-2">🚗 Crédit Auto</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Durée :</strong> Généralement entre 2 et 7 ans (moyenne : 4-5 ans)</li>
                  <li><strong>Montant :</strong> De 3 000€ à 75 000€ en moyenne</li>
                  <li><strong>Taux d&apos;intérêt :</strong> Entre 2% et 6% selon le profil et la durée</li>
                  <li><strong>Apport :</strong> Recommandé mais pas toujours obligatoire (10-20%)</li>
                  <li><strong>Assurance :</strong> Facultative mais vivement conseillée (0,3% à 0,6% du capital)</li>
                  <li><strong>Garanties :</strong> Le véhicule sert de garantie (réserve de propriété)</li>
                  <li><strong>Déblocage rapide :</strong> Fonds disponibles en quelques jours</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🏠 Crédit Immobilier</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Durée :</strong> De 10 à 25 ans, voire 30 ans dans certains cas</li>
                  <li><strong>Montant :</strong> De 50 000€ à plusieurs millions d&apos;euros</li>
                  <li><strong>Taux d&apos;intérêt :</strong> Entre 1,5% et 4% selon le marché (2025)</li>
                  <li><strong>Apport :</strong> Généralement obligatoire, minimum 10% (idéal 20%)</li>
                  <li><strong>Assurance :</strong> Obligatoire pour couvrir le décès et l&apos;invalidité (0,2% à 0,5%)</li>
                  <li><strong>Garanties :</strong> Hypothèque ou privilège de prêteur de deniers</li>
                  <li><strong>Frais annexes :</strong> Frais de notaire (7-8% pour l&apos;ancien, 2-3% pour le neuf)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Comprendre les taux d&apos;intérêt</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="text-xl font-semibold mb-2">Types de taux</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    <strong>Taux fixe :</strong> Le taux reste identique pendant toute la durée du prêt. 
                    Vous connaissez exactement vos mensualités à l&apos;avance. C&apos;est le plus courant 
                    en France, offrant sécurité et prévisibilité.
                  </li>
                  <li>
                    <strong>Taux variable (ou révisable) :</strong> Le taux évolue en fonction d&apos;un 
                    indice de référence (souvent l&apos;Euribor). Il peut être capé (avec un plafond 
                    maximum) pour limiter les risques de hausse.
                  </li>
                  <li>
                    <strong>TAEG (Taux Annuel Effectif Global) :</strong> C&apos;est le taux qui inclut 
                    tous les frais (assurance, frais de dossier, garanties). C&apos;est le meilleur 
                    indicateur pour comparer les offres de crédit.
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Facteurs influençant le taux</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Votre profil emprunteur (revenus, stabilité professionnelle, endettement)</li>
                  <li>La durée du prêt (plus c&apos;est long, plus le taux est élevé)</li>
                  <li>Le montant de votre apport personnel</li>
                  <li>Les taux directeurs de la Banque Centrale Européenne (BCE)</li>
                  <li>La concurrence entre établissements bancaires</li>
                  <li>Le type de bien financé (neuf ou ancien pour l&apos;immobilier)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Conseils pour obtenir le meilleur taux</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="text-xl font-semibold mb-2">💡 Optimisez votre profil</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    <strong>Augmentez votre apport :</strong> Plus votre apport est important, moins le 
                    risque pour la banque est élevé. Un apport de 20% minimum est idéal pour négocier 
                    un bon taux.
                  </li>
                  <li>
                    <strong>Stabilisez votre situation :</strong> Un CDI, une ancienneté professionnelle 
                    et des comptes bien tenus rassurent les banques.
                  </li>
                  <li>
                    <strong>Réduisez votre taux d&apos;endettement :</strong> Ne dépassez pas 35% de 
                    taux d&apos;endettement (mensualités / revenus nets). Remboursez vos crédits en 
                    cours si possible.
                  </li>
                  <li>
                    <strong>Soignez votre dossier :</strong> Rassemblez tous les justificatifs demandés 
                    (bulletins de salaire, avis d&apos;imposition, relevés bancaires) pour accélérer 
                    le traitement.
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🔍 Comparez et négociez</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    <strong>Faites jouer la concurrence :</strong> Consultez plusieurs banques et 
                    courtiers. N&apos;hésitez pas à présenter les offres concurrentes pour négocier.
                  </li>
                  <li>
                    <strong>Passez par un courtier :</strong> Les courtiers ont accès à des conditions 
                    privilégiées et peuvent négocier pour vous. Leur rémunération est souvent prise 
                    en charge par la banque.
                  </li>
                  <li>
                    <strong>Négociez les frais annexes :</strong> Au-delà du taux, négociez les frais 
                    de dossier, l&apos;assurance emprunteur (vous pouvez la choisir ailleurs via la 
                    délégation d&apos;assurance).
                  </li>
                  <li>
                    <strong>Choisissez le bon moment :</strong> Surveillez les taux du marché et les 
                    offres promotionnelles des banques (notamment en début d&apos;année).
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Comment réduire le coût de votre crédit ?</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="text-xl font-semibold mb-2">1. Réduire la durée du prêt</h3>
                <p className="mb-2">
                  Plus la durée est courte, moins vous payez d&apos;intérêts. Par exemple, pour un 
                  crédit immobilier de 200 000€ à 2,5% :
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Sur 15 ans : ~39 000€ d&apos;intérêts</li>
                  <li>Sur 20 ans : ~53 000€ d&apos;intérêts</li>
                  <li>Sur 25 ans : ~68 000€ d&apos;intérêts</li>
                </ul>
                <p className="mt-2">
                  Mais attention : vérifiez que les mensualités restent compatibles avec votre budget !
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">2. Effectuer des remboursements anticipés</h3>
                <p>
                  Si vous recevez une prime, un héritage ou vendez un bien, effectuez un remboursement 
                  anticipé partiel. Cela réduit le capital restant dû et donc les intérêts futurs. 
                  Vérifiez toutefois les pénalités éventuelles (plafonnées à 6 mois d&apos;intérêts 
                  ou 3% du capital).
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">3. Renégocier votre crédit</h3>
                <p>
                  Si les taux du marché ont baissé depuis votre souscription (au moins 0,7 point 
                  d&apos;écart), vous pouvez renégocier votre taux auprès de votre banque ou faire 
                  un rachat de crédit par un autre établissement. Cela peut vous faire économiser 
                  plusieurs milliers d&apos;euros.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">4. Optimiser l&apos;assurance emprunteur</h3>
                <p>
                  L&apos;assurance emprunteur représente une part importante du coût total (jusqu&apos;à 
                  30%). Depuis la loi Lemoine (2022), vous pouvez changer d&apos;assurance à tout 
                  moment. Comparez les offres et choisissez une assurance déléguée plus avantageuse 
                  que celle de votre banque.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">5. Moduler vos mensualités</h3>
                <p>
                  Certains contrats permettent de moduler vos mensualités (les augmenter quand vos 
                  revenus progressent, les diminuer en cas de difficulté). Augmenter vos mensualités 
                  réduit la durée et le coût total du crédit.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Réglementation française du crédit</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="text-xl font-semibold mb-2">Protection de l&apos;emprunteur</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    <strong>Taux d&apos;usure :</strong> La loi fixe un taux maximum (taux d&apos;usure) 
                    que les banques ne peuvent dépasser. Il est révisé trimestriellement par la Banque 
                    de France.
                  </li>
                  <li>
                    <strong>Délai de rétractation :</strong> Pour un crédit immobilier, vous disposez 
                    de 10 jours pour vous rétracter après signature de l&apos;offre de prêt. Pour un 
                    crédit à la consommation, le délai est de 14 jours.
                  </li>
                  <li>
                    <strong>Délai de réflexion :</strong> L&apos;offre de prêt immobilier doit être 
                    maintenue pendant au moins 30 jours, vous laissant le temps d&apos;analyser les 
                    conditions.
                  </li>
                  <li>
                    <strong>Condition suspensive :</strong> Dans l&apos;immobilier, si votre crédit 
                    est refusé, la vente est annulée et votre dépôt de garantie vous est restitué.
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Obligations de la banque</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    <strong>Vérification de solvabilité :</strong> La banque doit vérifier votre 
                    capacité de remboursement avant de vous accorder un crédit.
                  </li>
                  <li>
                    <strong>Information claire :</strong> Le TAEG, le coût total du crédit et le 
                    montant des mensualités doivent être clairement indiqués.
                  </li>
                  <li>
                    <strong>Fiche d&apos;information standardisée :</strong> Pour un crédit immobilier, 
                    la banque doit vous remettre une fiche standardisée pour faciliter la comparaison 
                    des offres.
                  </li>
                  <li>
                    <strong>Respect du reste à vivre :</strong> Les banques s&apos;assurent qu&apos;il 
                    vous reste suffisamment d&apos;argent après paiement de toutes vos charges 
                    (minimum 800-1000€/mois).
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Lois récentes importantes</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    <strong>Loi Lemoine (2022) :</strong> Permet de changer d&apos;assurance emprunteur 
                    à tout moment et supprime le questionnaire de santé pour certains prêts.
                  </li>
                  <li>
                    <strong>Recommandations HCSF :</strong> Le Haut Conseil de Stabilité Financière 
                    impose un taux d&apos;endettement maximal de 35% et une durée maximale de 25 ans 
                    (27 ans pour l&apos;acquisition d&apos;un logement neuf ou en VEFA).
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">FAQ - Questions fréquentes</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Quel montant puis-je emprunter ?
                </h3>
                <p>
                  Votre capacité d&apos;emprunt dépend de vos revenus, de votre taux d&apos;endettement 
                  (max 35%), de votre apport et de la durée du prêt. En règle générale, vos mensualités 
                  de crédit ne doivent pas dépasser un tiers de vos revenus nets. Utilisez notre 
                  calculateur en variant les paramètres pour estimer votre capacité.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Quelle est la durée idéale pour un crédit auto ?
                </h3>
                <p>
                  La durée idéale se situe entre 4 et 5 ans. Au-delà, vous risquez de payer beaucoup 
                  d&apos;intérêts et votre véhicule peut se déprécier plus vite que vous ne remboursez 
                  le crédit. En deçà, les mensualités peuvent être trop élevées. Trouvez le juste 
                  équilibre selon votre budget.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  L&apos;assurance emprunteur est-elle obligatoire ?
                </h3>
                <p>
                  Pour un crédit immobilier, l&apos;assurance est obligatoire en pratique (décès, 
                  invalidité). Pour un crédit auto, elle est facultative mais fortement recommandée. 
                  Depuis la loi Lemoine, vous pouvez choisir librement votre assureur (délégation 
                  d&apos;assurance) et en changer à tout moment.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Puis-je rembourser mon crédit par anticipation ?
                </h3>
                <p>
                  Oui, vous pouvez toujours rembourser votre crédit par anticipation, totalement ou 
                  partiellement. Pour un crédit immobilier, des indemnités peuvent s&apos;appliquer 
                  (max 6 mois d&apos;intérêts ou 3% du capital restant). Pour un crédit à la 
                  consommation de plus d&apos;un an, l&apos;indemnité est limitée à 1% du capital.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Qu&apos;est-ce que le TAEG ?
                </h3>
                <p>
                  Le TAEG (Taux Annuel Effectif Global) est le taux qui inclut tous les coûts liés 
                  au crédit : taux nominal, assurance, frais de dossier, frais de garantie. C&apos;est 
                  l&apos;indicateur à comparer entre les offres pour connaître le coût réel de votre 
                  crédit.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Vaut-il mieux un crédit court ou long ?
                </h3>
                <p>
                  Un crédit court (durée réduite) coûte moins cher en intérêts mais a des mensualités 
                  plus élevées. Un crédit long a des mensualités plus faibles mais coûte plus cher 
                  au total. Choisissez selon votre capacité de remboursement mensuelle et votre 
                  objectif (minimiser le coût total vs préserver votre trésorerie).
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Quelle différence entre taux nominal et TAEG ?
                </h3>
                <p>
                  Le taux nominal est le taux d&apos;intérêt de base du crédit. Le TAEG inclut tous 
                  les frais (assurance, garanties, frais de dossier) et représente le coût réel total. 
                  Toujours comparer les TAEG entre les offres, pas seulement les taux nominaux.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Mon crédit peut-il être refusé ?
                </h3>
                <p>
                  Oui, une banque peut refuser un crédit si votre profil présente trop de risques : 
                  taux d&apos;endettement trop élevé, revenus insuffisants, incidents bancaires, 
                  fichage Banque de France (FICP), CDD ou situation professionnelle instable. Dans 
                  ce cas, vous pouvez solliciter d&apos;autres établissements ou améliorer votre 
                  dossier.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Conseils financiers pour emprunteurs</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="text-xl font-semibold mb-2">✅ Avant de souscrire un crédit</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Évaluez votre budget réel et prévoyez une marge de sécurité</li>
                  <li>Constituez une épargne de précaution (3 à 6 mois de dépenses)</li>
                  <li>Comparez au minimum 3 offres de crédit différentes</li>
                  <li>Lisez attentivement toutes les clauses du contrat</li>
                  <li>Vérifiez les conditions de modularité et de remboursement anticipé</li>
                  <li>N&apos;empruntez jamais au-delà de vos capacités de remboursement</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">⚠️ Pendant le remboursement</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Payez vos mensualités en priorité pour éviter les pénalités</li>
                  <li>Surveillez les évolutions des taux si vous avez un taux variable</li>
                  <li>En cas de difficulté, contactez rapidement votre banque pour trouver une solution</li>
                  <li>Profitez des rentrées d&apos;argent exceptionnelles pour rembourser par anticipation</li>
                  <li>Révisez votre assurance tous les ans pour trouver de meilleures offres</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">💰 Optimisation fiscale</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    <strong>Crédit immobilier pour investissement locatif :</strong> Les intérêts 
                    d&apos;emprunt sont déductibles des revenus fonciers.
                  </li>
                  <li>
                    <strong>PTZ (Prêt à Taux Zéro) :</strong> Pour les primo-accédants, ce prêt 
                    sans intérêt peut financer jusqu&apos;à 40% de votre résidence principale.
                  </li>
                  <li>
                    <strong>Crédit d&apos;impôt transition énergétique :</strong> Certains travaux 
                    financés par crédit peuvent ouvrir droit à des aides fiscales.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Glossaire du crédit</h2>
            <div className="space-y-3 text-gray-700 dark:text-gray-300">
              <div>
                <strong>Amortissement :</strong> Remboursement progressif du capital emprunté. Le 
                tableau d&apos;amortissement détaille mois par mois la répartition entre capital, 
                intérêts et assurance.
              </div>
              <div>
                <strong>Capital restant dû :</strong> Montant du prêt qu&apos;il reste à rembourser 
                à un instant T. Il diminue avec chaque mensualité payée.
              </div>
              <div>
                <strong>Différé d&apos;amortissement :</strong> Période pendant laquelle vous ne 
                remboursez que les intérêts et l&apos;assurance, sans capital. Utile pour alléger 
                les premières mensualités.
              </div>
              <div>
                <strong>IRA (Indemnités de Remboursement Anticipé) :</strong> Pénalités appliquées 
                en cas de remboursement anticipé, plafonnées par la loi.
              </div>
              <div>
                <strong>Franchise :</strong> En assurance emprunteur, période pendant laquelle 
                certaines garanties ne s&apos;appliquent pas encore.
              </div>
              <div>
                <strong>LTV (Loan To Value) :</strong> Ratio entre le montant du prêt et la valeur 
                du bien (crédit immobilier). Plus il est bas (grâce à un apport important), meilleures 
                sont vos conditions.
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
            <h2 className="text-2xl font-bold mb-4">Pourquoi utiliser notre calculateur ?</h2>
            <div className="grid md:grid-cols-2 gap-4 text-gray-700 dark:text-gray-300">
              <div className="flex items-start gap-3">
                <span className="text-2xl">⚡</span>
                <div>
                  <strong className="block mb-1">Rapide et gratuit</strong>
                  <p className="text-sm">Résultat instantané, aucune inscription requise</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🎯</span>
                <div>
                  <strong className="block mb-1">Précis et complet</strong>
                  <p className="text-sm">Formules mathématiques exactes, tableau d&apos;amortissement détaillé</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">💾</span>
                <div>
                  <strong className="block mb-1">Sauvegarde automatique</strong>
                  <p className="text-sm">Vos paramètres sont conservés pour vos prochaines simulations</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">📊</span>
                <div>
                  <strong className="block mb-1">Visualisation claire</strong>
                  <p className="text-sm">Graphiques et tableaux pour mieux comprendre votre crédit</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
