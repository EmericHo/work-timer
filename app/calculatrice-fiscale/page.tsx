import { Metadata } from "next";
import Link from "next/link";
import TaxCalculator from "@/components/TaxCalculator";

export const metadata: Metadata = {
  title: "Calculatrice Fiscale 2025-2026 - Calcul Impôt sur le Revenu et Salaire Net",
  description: "Calculatrice fiscale gratuite pour calculer votre impôt sur le revenu 2025-2026, conversion salaire brut-net, et simulation fiscale avec quotient familial. Calculs précis basés sur les barèmes officiels français.",
  keywords: [
    "calculatrice fiscale",
    "calcul impôt",
    "impôt sur le revenu",
    "barème fiscal 2025",
    "barème fiscal 2026",
    "calcul salaire net",
    "brut net",
    "conversion brut net",
    "quotient familial",
    "simulateur fiscal",
    "calcul IRPP",
    "cotisations sociales",
    "calculateur impôt gratuit",
    "fiscalité française",
    "calcul net après impôt",
    "abattement 10%",
    "frais professionnels",
  ],
  alternates: {
    canonical: "/calculatrice-fiscale",
  },
  openGraph: {
    title: "Calculatrice Fiscale 2025-2026 - Calcul Impôt sur le Revenu",
    description: "Calculez gratuitement votre impôt sur le revenu, votre salaire net après impôt et simulez votre fiscalité. Barèmes officiels 2025-2026.",
    type: "website",
  },
};

export default function TaxCalculatorPage() {
  return (
    <div className="min-h-screen p-4 sm:p-6 md:p-8">
      <div className="max-w-6xl mx-auto">
        <header className="mb-6 sm:mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline mb-4 text-sm sm:text-base"
          >
            ← Retour à l&apos;accueil
          </Link>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4">
            Calculatrice Fiscale 2025-2026
          </h1>
          <p className="text-center text-gray-600 dark:text-gray-400 text-base sm:text-lg max-w-3xl mx-auto">
            Calculez votre impôt sur le revenu, convertissez votre salaire brut en net, et simulez votre fiscalité avec les barèmes officiels français 2025-2026
          </p>
        </header>

        <main className="space-y-8">
          {/* Calculator Component */}
          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 sm:p-6 md:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
              🧮 Calculateur Fiscal Gratuit
            </h2>
            <TaxCalculator />
          </section>

          {/* Educational Content */}
          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 sm:p-6 md:p-8">
            <article className="prose prose-sm sm:prose-base lg:prose-lg dark:prose-invert max-w-none">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                Comprendre le calcul de l&apos;impôt sur le revenu en France
              </h2>

              <p className="text-gray-700 dark:text-gray-300 mb-4">
                L&apos;impôt sur le revenu en France est calculé selon un barème progressif par tranches. Cela signifie
                que plus vos revenus sont élevés, plus le taux d&apos;imposition augmente, mais seulement sur la partie
                des revenus qui dépasse chaque seuil. Notre calculatrice fiscale applique automatiquement ce barème
                pour vous donner une estimation précise de votre impôt.
              </p>

              <h3 className="text-xl sm:text-2xl font-bold mb-3 mt-6">
                Le barème de l&apos;impôt sur le revenu 2025-2026
              </h3>

              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Le barème fiscal 2025 (pour les revenus de 2024) et 2026 (pour les revenus de 2025) est le suivant :
              </p>

              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg mb-4 overflow-x-auto">
                <table className="w-full text-sm sm:text-base">
                  <thead>
                    <tr className="border-b border-gray-300 dark:border-gray-600">
                      <th className="text-left py-2 pr-4">Tranche de revenus</th>
                      <th className="text-left py-2">Taux d&apos;imposition</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200 dark:border-gray-600">
                      <td className="py-2 pr-4">Jusqu&apos;à 11 497 €</td>
                      <td className="py-2">0%</td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-600">
                      <td className="py-2 pr-4">De 11 497 € à 29 315 €</td>
                      <td className="py-2">11%</td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-600">
                      <td className="py-2 pr-4">De 29 315 € à 83 823 €</td>
                      <td className="py-2">30%</td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-600">
                      <td className="py-2 pr-4">De 83 823 € à 180 294 €</td>
                      <td className="py-2">41%</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">Au-delà de 180 294 €</td>
                      <td className="py-2">45%</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-300 dark:border-blue-700 p-4 rounded-lg mb-6">
                <p className="font-semibold mb-2">💡 Exemple concret :</p>
                <p className="text-sm sm:text-base">
                  Pour un revenu imposable de 40 000 €, vous ne payez pas 30% sur la totalité. Vous payez 0% sur les
                  premiers 11 497 €, 11% sur la tranche de 11 497 € à 29 315 €, et 30% uniquement sur la partie
                  dépassant 29 315 € jusqu&apos;à 40 000 €. C&apos;est ce qu&apos;on appelle la progressivité de l&apos;impôt.
                </p>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold mb-3 mt-6">
                Du salaire brut au salaire net après impôt
              </h3>

              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Le passage du salaire brut au salaire net après impôt se fait en plusieurs étapes :
              </p>

              <ol className="list-decimal list-inside space-y-3 mb-6 text-gray-700 dark:text-gray-300">
                <li>
                  <strong>Salaire brut → Net social :</strong> Déduction des cotisations sociales (environ 23% en moyenne
                  pour un salarié du privé). Ces cotisations financent la sécurité sociale, l&apos;assurance chômage, et
                  la retraite.
                </li>
                <li>
                  <strong>Net social → Revenu imposable :</strong> Application de l&apos;abattement forfaitaire de 10%
                  pour frais professionnels (plafonné à 7 600 € par an), ou déduction des frais réels si plus avantageux.
                </li>
                <li>
                  <strong>Calcul du quotient familial :</strong> Division du revenu imposable par le nombre de parts
                  fiscales (qui dépend de votre situation familiale).
                </li>
                <li>
                  <strong>Application du barème progressif :</strong> Calcul de l&apos;impôt sur le quotient familial, puis
                  multiplication par le nombre de parts pour obtenir l&apos;impôt total.
                </li>
                <li>
                  <strong>Net social → Net final :</strong> Soustraction de l&apos;impôt sur le revenu du net social
                  pour obtenir votre salaire net après impôt.
                </li>
              </ol>

              <h3 className="text-xl sm:text-2xl font-bold mb-3 mt-6">
                Le quotient familial : comment ça marche ?
              </h3>

              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Le quotient familial est un mécanisme qui permet d&apos;ajuster l&apos;impôt en fonction de la composition
                du foyer fiscal. Plus vous avez de personnes à charge, plus vous bénéficiez de parts fiscales, ce qui
                réduit votre impôt.
              </p>

              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg mb-6">
                <h4 className="font-semibold mb-2">Nombre de parts fiscales :</h4>
                <ul className="space-y-1 text-sm sm:text-base">
                  <li>• Célibataire, divorcé(e), veuf(ve) : 1 part</li>
                  <li>• Marié(e) ou pacsé(e) : 2 parts</li>
                  <li>• 1er enfant à charge : +0,5 part</li>
                  <li>• 2e enfant à charge : +0,5 part (total : +1 part)</li>
                  <li>• 3e enfant et suivants : +1 part chacun</li>
                </ul>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 border border-green-300 dark:border-green-700 p-4 rounded-lg mb-6">
                <p className="font-semibold mb-2">✅ Exemple :</p>
                <p className="text-sm sm:text-base">
                  Un couple marié avec 2 enfants dispose de 3 parts fiscales (2 + 0,5 + 0,5). Avec un revenu imposable
                  de 60 000 €, le quotient familial est de 60 000 / 3 = 20 000 €. Le barème s&apos;applique sur 20 000 €,
                  puis le résultat est multiplié par 3, ce qui aboutit à un impôt beaucoup plus faible que si le barème
                  s&apos;appliquait directement sur 60 000 €.
                </p>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold mb-3 mt-6">
                Les cotisations sociales en France
              </h3>

              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Les cotisations sociales représentent environ 23% du salaire brut pour un salarié du secteur privé. Elles
                se répartissent entre différentes contributions :
              </p>

              <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700 dark:text-gray-300">
                <li>
                  <strong>Assurance vieillesse :</strong> Environ 7,3% (6,90% + 0,40% pour les plafonds dépassant le
                  plafond de la sécurité sociale)
                </li>
                <li>
                  <strong>Assurance maladie :</strong> Environ 7% pour la santé, maternité, invalidité, décès
                </li>
                <li>
                  <strong>Assurance chômage :</strong> Environ 4,05% pour financer le régime d&apos;assurance chômage
                </li>
                <li>
                  <strong>CSG et CRDS :</strong> 9,7% au total (dont 6,8% de CSG déductible de l&apos;impôt sur le revenu)
                </li>
              </ul>

              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Ces cotisations vous donnent accès aux prestations sociales : remboursements de soins, allocations
                chômage, pension de retraite, etc. C&apos;est le principe de la solidarité du système français de
                protection sociale.
              </p>

              <h3 className="text-xl sm:text-2xl font-bold mb-3 mt-6">
                Abattement forfaitaire de 10% vs Frais réels
              </h3>

              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Par défaut, l&apos;administration fiscale applique un abattement forfaitaire de 10% sur votre net social
                pour tenir compte des frais professionnels (déplacements, repas, vêtements professionnels, etc.). Cet
                abattement est plafonné à 7 600 € par an et par personne.
              </p>

              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Cependant, si vos frais professionnels réels dépassent cet abattement, vous pouvez choisir de déduire
                vos frais réels. Dans ce cas, vous devez conserver tous les justificatifs (factures, tickets, etc.) et
                les déclarer lors de votre déclaration de revenus.
              </p>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-300 dark:border-yellow-700 p-4 rounded-lg mb-6">
                <p className="font-semibold mb-2">⚠️ Important :</p>
                <p className="text-sm sm:text-base">
                  Les frais réels peuvent inclure : frais de transport domicile-travail, frais de repas, frais de
                  formation, achat de vêtements spécifiques, frais de déménagement pour raison professionnelle, etc. Pour
                  être déductibles, ces frais doivent être nécessaires à l&apos;exercice de votre profession et justifiés.
                </p>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold mb-3 mt-6">
                Conseils pour optimiser votre fiscalité
              </h3>

              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg border border-gray-200 dark:border-gray-600">
                  <h4 className="font-semibold mb-2">1. Vérifiez votre taux de prélèvement à la source</h4>
                  <p className="text-sm sm:text-base">
                    Depuis 2019, l&apos;impôt sur le revenu est prélevé à la source. Vérifiez régulièrement votre taux
                    sur votre espace personnel impots.gouv.fr, surtout après un changement de situation (mariage,
                    naissance, changement de revenu). Vous pouvez moduler ce taux à tout moment.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg border border-gray-200 dark:border-gray-600">
                  <h4 className="font-semibold mb-2">2. Pensez aux réductions et crédits d&apos;impôt</h4>
                  <p className="text-sm sm:text-base">
                    De nombreux dispositifs permettent de réduire votre impôt : dons aux associations, emploi à domicile,
                    garde d&apos;enfants, investissements locatifs (Pinel, Denormandie), souscription au capital de PME,
                    investissements dans les DOM-TOM, etc. Renseignez-vous sur les dispositifs dont vous pouvez
                    bénéficier.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg border border-gray-200 dark:border-gray-600">
                  <h4 className="font-semibold mb-2">3. Optimisez vos frais professionnels</h4>
                  <p className="text-sm sm:text-base">
                    Si vos frais professionnels sont importants (longs trajets domicile-travail, repas fréquents au
                    restaurant professionnel, formations coûteuses), calculez si les frais réels sont plus avantageux que
                    l&apos;abattement de 10%. La différence peut être significative et réduire fortement votre impôt.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg border border-gray-200 dark:border-gray-600">
                  <h4 className="font-semibold mb-2">4. Anticipez les changements de situation</h4>
                  <p className="text-sm sm:text-base">
                    Un mariage, un PACS, une naissance ou un divorce peuvent avoir un impact important sur votre impôt
                    grâce au quotient familial. Utilisez notre calculatrice pour simuler l&apos;impact fiscal de ces
                    changements et anticiper votre situation financière.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg border border-gray-200 dark:border-gray-600">
                  <h4 className="font-semibold mb-2">5. Épargnez avec des produits défiscalisants</h4>
                  <p className="text-sm sm:text-base">
                    Le Plan d&apos;Épargne Retraite (PER) permet de déduire vos versements de votre revenu imposable,
                    dans certaines limites. C&apos;est un outil puissant d&apos;optimisation fiscale tout en préparant
                    votre retraite. D&apos;autres produits comme l&apos;assurance-vie peuvent également offrir des
                    avantages fiscaux.
                  </p>
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold mb-3 mt-8">
                Cas particuliers et situations spécifiques
              </h3>

              <div className="space-y-4 mb-6">
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Multi-revenus (salarié + indépendant + foncier)</h4>
                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                    Si vous cumulez plusieurs types de revenus (salaires, BNC, BIC, revenus fonciers), ils sont tous
                    additionnés pour former votre revenu global imposable. Chaque type de revenu peut bénéficier
                    d&apos;abattements spécifiques avant agrégation. Par exemple, les revenus BNC (Bénéfices Non
                    Commerciaux) en micro-BNC bénéficient d&apos;un abattement de 34%.
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Primo-accédants et crédits immobiliers</h4>
                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                    Depuis 2011, les intérêts d&apos;emprunt pour l&apos;achat de la résidence principale ne sont plus
                    déductibles des impôts en France (sauf pour les prêts contractés avant 2011 qui bénéficient encore
                    du dispositif transitoire). En revanche, certains dispositifs de défiscalisation immobilière comme
                    le Pinel ou le Denormandie permettent de réduire l&apos;impôt sur les investissements locatifs.
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Expatriation et impatriation</h4>
                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                    Si vous partez travailler à l&apos;étranger ou rentrez en France après un séjour à l&apos;étranger,
                    votre situation fiscale peut être complexe. Vous pouvez bénéficier du régime des impatriés qui offre
                    des exonérations fiscales temporaires. Consultez un expert fiscal pour optimiser votre situation dans
                    ce cas.
                  </p>
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold mb-3 mt-8">
                FAQ - Questions fréquentes sur la fiscalité
              </h3>

              <div className="space-y-4 mb-6">
                <details className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <summary className="font-semibold cursor-pointer text-base sm:text-lg">
                    Quelle est la différence entre net social et net fiscal ?
                  </summary>
                  <div className="mt-3 text-sm sm:text-base text-gray-700 dark:text-gray-300">
                    <p>
                      Le <strong>net social</strong> est votre salaire après déduction des cotisations sociales (environ
                      77% du brut). C&apos;est ce que vous percevez réellement sur votre compte bancaire avant impôt.
                    </p>
                    <p className="mt-2">
                      Le <strong>net fiscal</strong> (ou revenu imposable) est le net social moins l&apos;abattement de
                      10% pour frais professionnels (ou les frais réels si vous les déclarez). C&apos;est sur cette base
                      que l&apos;impôt sur le revenu est calculé.
                    </p>
                  </div>
                </details>

                <details className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <summary className="font-semibold cursor-pointer text-base sm:text-lg">
                    Mon employeur prélève-t-il directement l&apos;impôt sur le revenu ?
                  </summary>
                  <div className="mt-3 text-sm sm:text-base text-gray-700 dark:text-gray-300">
                    <p>
                      Oui, depuis le 1er janvier 2019, l&apos;impôt sur le revenu est prélevé à la source. Votre
                      employeur applique directement le taux de prélèvement calculé par l&apos;administration fiscale sur
                      votre salaire. Ce montant est ensuite reversé au Trésor Public. Vous pouvez voir ce prélèvement sur
                      votre fiche de paie sous la ligne &quot;Prélèvement à la source&quot;.
                    </p>
                  </div>
                </details>

                <details className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <summary className="font-semibold cursor-pointer text-base sm:text-lg">
                    Puis-je modifier mon taux de prélèvement à la source ?
                  </summary>
                  <div className="mt-3 text-sm sm:text-base text-gray-700 dark:text-gray-300">
                    <p>
                      Oui, vous pouvez à tout moment modifier votre taux de prélèvement à la source sur votre espace
                      personnel impots.gouv.fr. Vous pouvez :
                    </p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li>Augmenter ou diminuer votre taux (moduler) si votre situation change</li>
                      <li>Opter pour un taux individualisé si vous êtes en couple (chacun a son propre taux)</li>
                      <li>Choisir un taux non personnalisé si vous ne voulez pas que votre employeur connaisse votre
                      taux d&apos;imposition</li>
                    </ul>
                  </div>
                </details>

                <details className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <summary className="font-semibold cursor-pointer text-base sm:text-lg">
                    Comment est calculé l&apos;impôt si j&apos;ai travaillé seulement une partie de l&apos;année ?
                  </summary>
                  <div className="mt-3 text-sm sm:text-base text-gray-700 dark:text-gray-300">
                    <p>
                      L&apos;impôt est toujours calculé sur vos revenus annuels. Si vous n&apos;avez travaillé que 6 mois
                      dans l&apos;année par exemple, seuls ces 6 mois de salaire seront pris en compte dans votre
                      déclaration de revenus. Le barème progressif s&apos;appliquera sur ce montant annuel total, ce qui
                      est généralement avantageux car vos revenus annuels sont plus faibles.
                    </p>
                  </div>
                </details>

                <details className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <summary className="font-semibold cursor-pointer text-base sm:text-lg">
                    Que se passe-t-il si mon impôt réel est différent du prélèvement à la source ?
                  </summary>
                  <div className="mt-3 text-sm sm:text-base text-gray-700 dark:text-gray-300">
                    <p>
                      Chaque année, après votre déclaration de revenus, l&apos;administration fiscale recalcule votre
                      impôt réel. Si vous avez trop payé via le prélèvement à la source, vous serez remboursé (en général
                      en juillet-août). Si vous n&apos;avez pas assez payé, vous devrez régler le complément. Un nouveau
                      taux de prélèvement sera également calculé pour l&apos;année suivante.
                    </p>
                  </div>
                </details>

                <details className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <summary className="font-semibold cursor-pointer text-base sm:text-lg">
                    Les heures supplémentaires sont-elles imposables ?
                  </summary>
                  <div className="mt-3 text-sm sm:text-base text-gray-700 dark:text-gray-300">
                    <p>
                      Les heures supplémentaires et complémentaires bénéficient d&apos;une exonération d&apos;impôt sur
                      le revenu dans la limite de 7 500 € nets par an (plafond 2024-2025). Au-delà de ce montant, les
                      heures supplémentaires sont imposables normalement. Elles restent soumises aux cotisations sociales
                      mais avec un taux réduit.
                    </p>
                  </div>
                </details>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 border-2 border-red-400 dark:border-red-600 p-4 sm:p-6 rounded-lg mt-8">
                <h4 className="font-bold text-lg mb-3">⚠️ Avertissement Important</h4>
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-2">
                  Cette calculatrice fiscale fournit des <strong>estimations indicatives</strong> basées sur les barèmes
                  officiels 2025-2026. Les calculs sont simplifiés et ne prennent pas en compte toutes les spécificités
                  de votre situation personnelle (crédits d&apos;impôt, réductions fiscales spécifiques, revenus
                  exceptionnels, etc.).
                </p>
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                  Pour une déclaration officielle et un calcul précis de votre impôt, utilisez votre espace personnel sur{" "}
                  <a
                    href="https://www.impots.gouv.fr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 font-semibold underline"
                  >
                    impots.gouv.fr
                  </a>{" "}
                  ou consultez un expert-comptable ou conseiller fiscal.
                </p>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-300 dark:border-blue-700 p-4 sm:p-6 rounded-lg mt-6">
                <h4 className="font-bold text-lg mb-3">📚 Ressources officielles</h4>
                <ul className="space-y-2 text-sm sm:text-base">
                  <li>
                    <a
                      href="https://www.impots.gouv.fr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      Service Public des Impôts (impots.gouv.fr)
                    </a>{" "}
                    - Pour votre déclaration officielle et votre espace personnel
                  </li>
                  <li>
                    <a
                      href="https://www.service-public.fr/particuliers/vosdroits/F1419"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      Service-Public.fr - Impôt sur le revenu
                    </a>{" "}
                    - Informations détaillées sur l&apos;impôt sur le revenu
                  </li>
                  <li>
                    <a
                      href="https://www.economie.gouv.fr/particuliers/tranches-imposition-impot-revenu"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      Ministère de l&apos;Économie
                    </a>{" "}
                    - Barèmes et tranches d&apos;imposition officiels
                  </li>
                </ul>
              </div>
            </article>
          </section>
        </main>
      </div>
    </div>
  );
}
