"use client";

import Link from "next/link";
import MortgageCalculatorEnhanced from "@/components/MortgageCalculatorEnhanced";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBalanceScale, faBolt, faBriefcase, faBullseye, faChartBar, faChartLine, faHome, faMoneyBill } from '@fortawesome/free-solid-svg-icons';

export default function MortgageCalculatorPage() {
  return (
    <div className="min-h-screen flex flex-col p-4 sm:p-6 md:p-8">
      <header className="flex-shrink-0 mb-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-3">
          Calculateur de Crédit Immobilier en Ligne
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-400 text-sm sm:text-base max-w-3xl mx-auto">
          Calculez vos mensualités, le coût total de votre crédit immobilier et visualisez votre tableau 
          d&apos;amortissement. Outil gratuit pour préparer votre achat immobilier.
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
          <MortgageCalculatorEnhanced />
        </div>

        {/* SEO Content */}
        <section className="mt-8 space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Comprendre le crédit immobilier</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Le crédit immobilier est un prêt à long terme (généralement 15 à 25 ans) accordé par une banque 
              pour financer l&apos;achat d&apos;un bien immobilier. Il est garanti par une hypothèque ou un 
              privilège de prêteur de deniers (PPD) sur le bien acheté. Les mensualités comprennent le remboursement 
              du capital emprunté plus les intérêts, ainsi qu&apos;éventuellement l&apos;assurance emprunteur 
              obligatoire.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Les banques évaluent votre capacité d&apos;emprunt selon plusieurs critères : votre taux 
              d&apos;endettement (maximum 35% de vos revenus nets), votre reste à vivre (ce qu&apos;il vous 
              reste après les charges), votre apport personnel (minimum 10% du prix), votre stabilité 
              professionnelle et votre historique bancaire. Le taux d&apos;intérêt proposé dépend de votre 
              profil, de la durée du prêt et des conditions du marché.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Notre calculateur vous permet de simuler différents scénarios : modifier la durée pour voir 
              l&apos;impact sur vos mensualités, ajuster votre apport pour réduire le coût total, ou comparer 
              les offres de plusieurs banques. Il intègre le calcul du coût de l&apos;assurance et vous montre 
              le tableau d&apos;amortissement détaillé pour comprendre comment votre prêt sera remboursé année 
              après année.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Types de prêts immobiliers</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faHome} className="inline" /> Prêt amortissable classique</h3>
                <p className="mb-2">
                  Le plus courant : mensualités constantes incluant capital + intérêts. Au début, vous payez 
                  surtout des intérêts, puis progressivement plus de capital :
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Mensualités fixes et prévisibles sur toute la durée</li>
                  <li>Permet de budgétiser facilement vos dépenses de logement</li>
                  <li>Possibilité de remboursement anticipé (partiel ou total)</li>
                  <li>Convient à la majorité des emprunteurs primo-accédants</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faChartLine} className="inline" /> Prêt à taux variable (révisable)</h3>
                <p className="mb-2">
                  Le taux suit un indice de référence (Euribor) et varie dans le temps :
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Taux initial souvent inférieur aux taux fixes</li>
                  <li>Risque de hausse des mensualités si les taux montent</li>
                  <li>Souvent cappé (plafond de variation de ±1 ou 2 points)</li>
                  <li>Intéressant en période de taux bas avec anticipation de baisse</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faBullseye} className="inline" /> Prêts aidés et réglementés</h3>
                <p className="mb-2">
                  Plusieurs dispositifs publics facilitent l&apos;accès à la propriété :
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>PTZ (Prêt à Taux Zéro)</strong> : sans intérêts, sous conditions de ressources</li>
                  <li><strong>PAS (Prêt d&apos;Accession Sociale)</strong> : pour ménages modestes, donne droit à l&apos;APL</li>
                  <li><strong>Prêt Action Logement</strong> : 1% Logement pour les salariés d&apos;entreprises privées</li>
                  <li><strong>Prêts conventionnés</strong> : taux plafonnés, ouvrent droit à des aides</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faBriefcase} className="inline" /> Prêt in fine</h3>
                <p className="mb-2">
                  Réservé aux investisseurs locatifs et contribuables fortement imposés :
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Remboursement du capital en une seule fois à la fin</li>
                  <li>Mensualités réduites (uniquement les intérêts + assurance)</li>
                  <li>Intérêts déductibles fiscalement pour les investissements locatifs</li>
                  <li>Nécessite une garantie (nantissement d&apos;assurance-vie, etc.)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Comprendre l&apos;amortissement</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faChartBar} className="inline" /> Le tableau d&apos;amortissement</h3>
                <p className="mb-2">
                  Le tableau d&apos;amortissement détaille mois par mois la composition de vos mensualités :
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Part du capital remboursé : augmente progressivement</li>
                  <li>Part des intérêts : diminue au fil du temps</li>
                  <li>Capital restant dû : ce qu&apos;il reste à rembourser</li>
                  <li>Exemple : sur un prêt de 200 000€ à 2%, la 1ère mensualité contient 333€ d&apos;intérêts</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faBolt} className="inline" /> L&apos;impact de la durée</h3>
                <p className="mb-2">
                  La durée du prêt influence drastiquement le coût total :
                </p>
                <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg text-sm">
                  <p className="font-semibold mb-2">Exemple : emprunt de 200 000€ à 2%</p>
                  <ul className="space-y-1">
                    <li>• Sur 15 ans : mensualité 1 286€, coût total 31 480€ d&apos;intérêts</li>
                    <li>• Sur 20 ans : mensualité 1 012€, coût total 42 880€ d&apos;intérêts</li>
                    <li>• Sur 25 ans : mensualité 848€, coût total 54 400€ d&apos;intérêts</li>
                  </ul>
                  <p className="mt-2 font-semibold">
                    10 ans de plus = 22 920€ d&apos;intérêts supplémentaires (73% de plus) !
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faMoneyBill} className="inline" /> Le remboursement anticipé</h3>
                <p className="mb-2">
                  Vous pouvez rembourser tout ou partie de votre prêt avant son terme :
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Indemnités plafonnées à 6 mois d&apos;intérêts ou 3% du capital restant</li>
                  <li>Souvent gratuit pour les remboursements de moins de 10% du capital</li>
                  <li>Plus c&apos;est fait tôt, plus l&apos;économie d&apos;intérêts est importante</li>
                  <li>Stratégie : rembourser anticipativement plutôt qu&apos;épargner à faible rendement</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Acheter ou louer : quelle stratégie ?</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faHome} className="inline" /> Avantages de l&apos;achat</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>Patrimoine</strong> : vous construisez un capital au lieu d&apos;enrichir un propriétaire</li>
                  <li><strong>Stabilité</strong> : pas d&apos;augmentation de loyer ni de risque d&apos;expulsion</li>
                  <li><strong>Liberté</strong> : possibilité d&apos;aménager et modifier le logement à votre guise</li>
                  <li><strong>Retraite</strong> : plus de loyer à payer une fois le crédit remboursé</li>
                  <li><strong>Plus-value</strong> : bénéfice potentiel à la revente (exonéré d&apos;impôt sur résidence principale)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🔑 Avantages de la location</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>Flexibilité</strong> : mobilité professionnelle facilitée (préavis de 1-3 mois)</li>
                  <li><strong>Pas de charges</strong> : travaux importants et taxe foncière à la charge du propriétaire</li>
                  <li><strong>Trésorerie</strong> : pas d&apos;apport ni de frais de notaire à débourser</li>
                  <li><strong>Investissement alternatif</strong> : l&apos;argent économisé peut être investi en bourse</li>
                  <li><strong>Risque limité</strong> : pas d&apos;exposition au marché immobilier local</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faBalanceScale} className="inline" /> Le calcul du point mort</h3>
                <p className="mb-2">
                  Généralement, l&apos;achat devient plus avantageux que la location après :
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>7 à 10 ans si vous restez dans le même logement (amortissement des frais d&apos;achat)</li>
                  <li>Les frais de notaire (7-8% dans l&apos;ancien, 2-3% dans le neuf) pèsent lourd initialement</li>
                  <li>La taxe foncière, charges de copropriété et entretien s&apos;ajoutent à la mensualité</li>
                  <li>Faites le calcul complet : (mensualité + charges + taxe foncière + travaux) vs. loyer</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Questions fréquentes sur le crédit immobilier</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Quel apport minimum faut-il pour obtenir un crédit immobilier ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  La plupart des banques exigent au minimum 10% du prix d&apos;achat en apport personnel. Cet 
                  apport doit couvrir au moins les frais de notaire et de garantie. Un apport de 20% ou plus 
                  vous permettra d&apos;obtenir de meilleures conditions (taux plus bas, négociation facilitée). 
                  Les profils très solides peuvent parfois emprunter à 110% (financement total + frais).
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Comment négocier son taux de crédit immobilier ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Mettez les banques en concurrence en obtenant plusieurs offres. Utilisez un courtier qui a 
                  accès à des taux préférentiels. Préparez un dossier solide (apport important, revenus stables, 
                  situation financière saine). Négociez aussi les frais de dossier, l&apos;assurance emprunteur 
                  (vous pouvez la choisir en dehors de la banque) et les conditions de remboursement anticipé.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Qu&apos;est-ce que l&apos;assurance emprunteur et est-elle obligatoire ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  L&apos;assurance emprunteur couvre le remboursement du prêt en cas de décès, invalidité ou 
                  incapacité de travail. Elle n&apos;est pas légalement obligatoire mais exigée par toutes les 
                  banques. Elle représente 20-30% du coût total du crédit. Depuis la loi Lemoine, vous pouvez 
                  la choisir librement et en changer à tout moment pour réaliser des économies substantielles.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Vaut-il mieux un taux fixe ou variable en 2024 ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Après la forte hausse des taux en 2022-2023, les taux fixes restent privilégiés pour sécuriser 
                  vos mensualités sur toute la durée. Un taux variable peut être intéressant si vous prévoyez un 
                  remboursement anticipé rapide (moins de 7-10 ans) ou si vous anticipez une baisse des taux. 
                  Privilégiez toujours un taux variable cappé pour limiter le risque.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
