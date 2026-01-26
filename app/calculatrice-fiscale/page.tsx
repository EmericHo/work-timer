import { Metadata } from "next";
import Link from "next/link";
import TaxCalculator from "@/components/TaxCalculator";

export const metadata: Metadata = {
  title: "Calculatrice Fiscale France Luxembourg 2025-2026 - Comparaison FR/LUX",
  description: "Calculatrice fiscale gratuite France et Luxembourg 2025-2026. Calculez et comparez votre impôt, salaire net après impôt FR vs LUX. Barèmes officiels, classe fiscale Luxembourg, quotient familial France.",
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
    "fiscalité Luxembourg",
    "impôt Luxembourg",
    "classe fiscale Luxembourg",
    "classe 1 Luxembourg",
    "classe 2 Luxembourg",
    "frontalier Luxembourg",
    "travail Luxembourg",
    "salaire Luxembourg",
    "comparaison France Luxembourg",
    "FR vs LUX",
    "transfrontalier",
    "Belval",
    "frontalier français",
  ],
  alternates: {
    canonical: "/calculatrice-fiscale",
  },
  openGraph: {
    title: "Calculatrice Fiscale France Luxembourg 2025-2026 - Comparaison FR/LUX",
    description: "Calculez et comparez gratuitement votre impôt France vs Luxembourg. Salaire net après impôt, barèmes officiels 2025-2026, classes fiscales Luxembourg.",
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
            Calculatrice Fiscale France 🇫🇷 Luxembourg 🇱🇺 2025-2026
          </h1>
          <p className="text-center text-gray-600 dark:text-gray-400 text-base sm:text-lg max-w-3xl mx-auto">
            Calculez et comparez votre impôt sur le revenu France vs Luxembourg, convertissez votre salaire brut en net, et simulez votre fiscalité avec les barèmes officiels 2025-2026
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
                🇫🇷🇱🇺 France vs Luxembourg : Quelle différence pour votre fiscalité ?
              </h2>

              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Vous êtes frontalier ou envisagez de travailler au Luxembourg ? La fiscalité luxembourgeoise
                présente des différences significatives avec la France, particulièrement en termes de cotisations
                sociales et de système d&apos;imposition. Notre calculatrice vous permet de comparer facilement
                votre situation fiscale dans les deux pays.
              </p>

              <h3 className="text-xl sm:text-2xl font-bold mb-3 mt-6">
                Comparaison rapide France 🇫🇷 vs Luxembourg 🇱🇺
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-300 dark:border-blue-700">
                  <h4 className="font-bold text-blue-600 dark:text-blue-400 mb-3">🇫🇷 FRANCE</h4>
                  <ul className="space-y-2 text-sm sm:text-base">
                    <li>• <strong>Cotisations :</strong> 23% du brut</li>
                    <li>• <strong>Abattement :</strong> 10% automatique (max 7 600€)</li>
                    <li>• <strong>Barème :</strong> 5 tranches (0% à 45%)</li>
                    <li>• <strong>Quotient familial :</strong> Parts selon situation</li>
                    <li>• <strong>Avantage :</strong> Quotient familial avantageux avec enfants</li>
                  </ul>
                </div>

                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-300 dark:border-green-700">
                  <h4 className="font-bold text-green-600 dark:text-green-400 mb-3">🇱🇺 LUXEMBOURG</h4>
                  <ul className="space-y-2 text-sm sm:text-base">
                    <li>• <strong>Cotisations :</strong> 15.75% du brut</li>
                    <li>• <strong>Abattement :</strong> Pas d&apos;abattement 10%</li>
                    <li>• <strong>Barème :</strong> 16 tranches (0% à 40%)</li>
                    <li>• <strong>Classes fiscales :</strong> Classe 1 ou 2</li>
                    <li>• <strong>Avantage :</strong> Cotisations plus faibles, classe 2 très avantageuse</li>
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-400 dark:border-yellow-600 p-4 rounded-lg mb-6">
                <p className="font-semibold mb-2">💡 Conseil pour les frontaliers :</p>
                <p className="text-sm sm:text-base">
                  Le Luxembourg est souvent plus avantageux fiscalement, surtout pour les célibataires ou couples
                  sans enfants grâce aux cotisations plus faibles (15.75% vs 23%). La France peut devenir
                  intéressante avec plusieurs enfants grâce au quotient familial. Utilisez notre comparateur pour
                  voir quelle option est la meilleure pour votre situation !
                </p>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold mb-3 mt-6">
                Le système fiscal luxembourgeois expliqué
              </h3>

              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Le Luxembourg utilise un système de <strong>classes fiscales</strong> plutôt que le quotient
                familial français. Ce système permet d&apos;ajuster l&apos;impôt selon votre situation personnelle :
              </p>

              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg mb-4">
                <h4 className="font-semibold mb-3">Les classes fiscales au Luxembourg :</h4>
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold">Classe 1 (Célibataire) :</p>
                    <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                      Pour les personnes seules, divorcées, veuves. Seuil d&apos;exonération : 12 438€/an. Cotisations : 15.75%
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold">Classe 2 (Marié/e) :</p>
                    <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                      Pour les couples mariés ou en partenariat. Seuil d&apos;exonération doublé : 24 876€/an. 
                      Beaucoup plus avantageux que la classe 1 !
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold">Classe 1a :</p>
                    <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                      Pour les parents isolés avec enfants à charge (avantages fiscaux supplémentaires)
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold mb-3 mt-6">
                Les 16 tranches du barème luxembourgeois (Classe 1)
              </h3>

              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg mb-4 overflow-x-auto">
                <table className="w-full text-xs sm:text-sm">
                  <thead>
                    <tr className="border-b border-gray-300 dark:border-gray-600">
                      <th className="text-left py-2 pr-4">Tranche de revenus</th>
                      <th className="text-left py-2">Taux d&apos;imposition</th>
                    </tr>
                  </thead>
                  <tbody className="text-xs sm:text-sm">
                    <tr className="border-b border-gray-200 dark:border-gray-600">
                      <td className="py-1 pr-4">0 - 12 438 €</td>
                      <td className="py-1">0%</td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-600">
                      <td className="py-1 pr-4">12 438 - 14 508 €</td>
                      <td className="py-1">8%</td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-600">
                      <td className="py-1 pr-4">14 508 - 16 578 €</td>
                      <td className="py-1">9%</td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-600">
                      <td className="py-1 pr-4">16 578 - 18 648 €</td>
                      <td className="py-1">10%</td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-600">
                      <td className="py-1 pr-4">18 648 - 20 718 €</td>
                      <td className="py-1">11%</td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-600">
                      <td className="py-1 pr-4">20 718 - 22 788 €</td>
                      <td className="py-1">12%</td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-600">
                      <td className="py-1 pr-4">22 788 - 24 858 €</td>
                      <td className="py-1">14%</td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-600">
                      <td className="py-1 pr-4">24 858 - 26 928 €</td>
                      <td className="py-1">16%</td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-600">
                      <td className="py-1 pr-4">26 928 - 28 998 €</td>
                      <td className="py-1">18%</td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-600">
                      <td className="py-1 pr-4">28 998 - 31 068 €</td>
                      <td className="py-1">20%</td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-600">
                      <td className="py-1 pr-4">31 068 - 33 138 €</td>
                      <td className="py-1">22%</td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-600">
                      <td className="py-1 pr-4">33 138 - 35 208 €</td>
                      <td className="py-1">24%</td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-600">
                      <td className="py-1 pr-4">35 208 - 37 278 €</td>
                      <td className="py-1">26%</td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-600">
                      <td className="py-1 pr-4">37 278 - 39 348 €</td>
                      <td className="py-1">28%</td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-600">
                      <td className="py-1 pr-4">39 348 - 41 418 €</td>
                      <td className="py-1">30%</td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-600">
                      <td className="py-1 pr-4">41 418 - 200 004 €</td>
                      <td className="py-1">39%</td>
                    </tr>
                    <tr>
                      <td className="py-1 pr-4">Au-delà de 200 004 €</td>
                      <td className="py-1">40%</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 border border-green-300 dark:border-green-700 p-4 rounded-lg mb-6">
                <p className="font-semibold mb-2">✅ Exemple concret Luxembourg :</p>
                <p className="text-sm sm:text-base">
                  Avec un salaire de 50 000€ brut en classe 1 au Luxembourg : cotisations de 7 875€ (15.75%), 
                  puis application du barème progressif sur 42 125€ imposables. Le net final est généralement 
                  supérieur à la France grâce aux cotisations plus faibles.
                </p>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold mb-4 mt-8">
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

                <details className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <summary className="font-semibold cursor-pointer text-base sm:text-lg">
                    🇱🇺 Travailler au Luxembourg : est-ce vraiment plus avantageux ?
                  </summary>
                  <div className="mt-3 text-sm sm:text-base text-gray-700 dark:text-gray-300">
                    <p>
                      Le Luxembourg est généralement plus avantageux fiscalement pour la plupart des profils,
                      notamment grâce aux <strong>cotisations sociales plus faibles</strong> (15.75% contre 23% en
                      France). Pour un célibataire ou un couple sans enfant, le gain peut aller de 5% à 15% selon
                      le salaire.
                    </p>
                    <p className="mt-2">
                      Cependant, la France peut devenir compétitive pour les familles avec plusieurs enfants grâce
                      au quotient familial. Utilisez notre comparateur pour voir votre situation précise !
                    </p>
                  </div>
                </details>

                <details className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <summary className="font-semibold cursor-pointer text-base sm:text-lg">
                    🇱🇺 Quelle classe fiscale choisir au Luxembourg ?
                  </summary>
                  <div className="mt-3 text-sm sm:text-base text-gray-700 dark:text-gray-300">
                    <p>
                      La <strong>classe fiscale</strong> au Luxembourg dépend de votre situation familiale :
                    </p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li><strong>Classe 1</strong> : Célibataire, divorcé(e), veuf(ve)</li>
                      <li><strong>Classe 2</strong> : Marié(e) ou en partenariat (beaucoup plus avantageux !)</li>
                      <li><strong>Classe 1a</strong> : Parent isolé avec enfants</li>
                    </ul>
                    <p className="mt-2">
                      La classe 2 double pratiquement le seuil d&apos;exonération et applique des taux plus
                      avantageux. Si vous êtes marié(e), cette classe peut vous faire économiser plusieurs milliers
                      d&apos;euros par an !
                    </p>
                  </div>
                </details>

                <details className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <summary className="font-semibold cursor-pointer text-base sm:text-lg">
                    🇱🇺 Frontalier : où dois-je payer mes impôts ?
                  </summary>
                  <div className="mt-3 text-sm sm:text-base text-gray-700 dark:text-gray-300">
                    <p>
                      En tant que <strong>frontalier français travaillant au Luxembourg</strong>, vous payez vos
                      impôts au Luxembourg sur vos revenus luxembourgeois. Vous devez tout de même déclarer ces
                      revenus en France, mais ils ne sont pas imposés une seconde fois grâce à la convention fiscale
                      FR-LUX qui évite la double imposition.
                    </p>
                    <p className="mt-2">
                      Attention : si vous avez d&apos;autres revenus en France (foncier, placements, etc.), ceux-ci
                      seront imposés en France normalement.
                    </p>
                  </div>
                </details>

                <details className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <summary className="font-semibold cursor-pointer text-base sm:text-lg">
                    🇱🇺 Comment optimiser ma fiscalité en tant que frontalier ?
                  </summary>
                  <div className="mt-3 text-sm sm:text-base text-gray-700 dark:text-gray-300">
                    <p>Plusieurs leviers pour optimiser votre situation de frontalier :</p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li>Si marié(e), pensez à demander la <strong>classe 2</strong> au Luxembourg</li>
                      <li>Déduisez vos frais de déplacement domicile-travail</li>
                      <li>Cotisez à un PER (Plan Épargne Retraite) luxembourgeois si disponible</li>
                      <li>Vérifiez les avantages sociaux de votre employeur (tickets restaurant, véhicule de
                      fonction)</li>
                      <li>Consultez un conseiller fiscal transfrontalier pour les situations complexes</li>
                    </ul>
                  </div>
                </details>

                <details className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <summary className="font-semibold cursor-pointer text-base sm:text-lg">
                    🇱🇺 Y a-t-il un abattement de 10% au Luxembourg comme en France ?
                  </summary>
                  <div className="mt-3 text-sm sm:text-base text-gray-700 dark:text-gray-300">
                    <p>
                      <strong>Non</strong>, le Luxembourg n&apos;applique pas d&apos;abattement forfaitaire de 10%
                      pour frais professionnels comme en France. L&apos;impôt est calculé directement sur votre net
                      social (salaire après cotisations).
                    </p>
                    <p className="mt-2">
                      Cependant, vous pouvez déduire certains frais réels justifiés (transport, formation
                      professionnelle, etc.) lors de votre déclaration fiscale annuelle. Ces déductions se font a
                      posteriori, contrairement à l&apos;abattement automatique français.
                    </p>
                  </div>
                </details>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 border-2 border-red-400 dark:border-red-600 p-4 sm:p-6 rounded-lg mt-8">
                <h4 className="font-bold text-lg mb-3">⚠️ Avertissement Important</h4>
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-2">
                  Cette calculatrice fiscale fournit des <strong>estimations indicatives</strong> basées sur les barèmes
                  officiels 2025-2026 pour la France et le Luxembourg. Les calculs sont simplifiés et ne prennent pas en compte toutes les spécificités
                  de votre situation personnelle (crédits d&apos;impôt, réductions fiscales spécifiques, revenus
                  exceptionnels, conventions fiscales transfrontalières, etc.).
                </p>
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                  Pour une déclaration officielle et un calcul précis de votre impôt : <br/>
                  🇫🇷 France : <a
                    href="https://www.impots.gouv.fr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 font-semibold underline"
                  >
                    impots.gouv.fr
                  </a> | 🇱🇺 Luxembourg : <a
                    href="https://guichet.public.lu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 font-semibold underline"
                  >
                    guichet.lu
                  </a>
                  <br/>
                  Pour les situations transfrontalières complexes, consultez un expert-comptable ou conseiller fiscal spécialisé.
                </p>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-300 dark:border-blue-700 p-4 sm:p-6 rounded-lg mt-6">
                <h4 className="font-bold text-lg mb-3">📚 Ressources officielles</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold mb-2 text-blue-600 dark:text-blue-400">🇫🇷 France</p>
                    <ul className="space-y-2 text-sm sm:text-base">
                      <li>
                        <a
                          href="https://www.impots.gouv.fr"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 dark:text-blue-400 hover:underline"
                        >
                          Service Public des Impôts
                        </a>{" "}
                        - Déclaration officielle et espace personnel
                      </li>
                      <li>
                        <a
                          href="https://www.service-public.fr/particuliers/vosdroits/F1419"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 dark:text-blue-400 hover:underline"
                        >
                          Service-Public.fr
                        </a>{" "}
                        - Informations détaillées sur l&apos;impôt
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
                        - Barèmes officiels
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-2 text-green-600 dark:text-green-400">🇱🇺 Luxembourg</p>
                    <ul className="space-y-2 text-sm sm:text-base">
                      <li>
                        <a
                          href="https://guichet.public.lu/fr/citoyens/impots-taxes/declaration-fiscale.html"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 dark:text-blue-400 hover:underline"
                        >
                          Guichet.lu
                        </a>{" "}
                        - Portail officiel de l&apos;État luxembourgeois
                      </li>
                      <li>
                        <a
                          href="https://impotsdirects.public.lu"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 dark:text-blue-400 hover:underline"
                        >
                          Administration des Contributions
                        </a>{" "}
                        - Service des impôts Luxembourg
                      </li>
                      <li>
                        <a
                          href="https://www.csl.lu"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 dark:text-blue-400 hover:underline"
                        >
                          CSL (Chambre des Salariés)
                        </a>{" "}
                        - Conseils pour salariés
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          </section>

          {/* Connection to Work Timer - Add value and context */}
          <section className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg shadow-lg p-4 sm:p-6 md:p-8 border border-blue-200 dark:border-blue-700">
            <article className="prose prose-sm sm:prose-base lg:prose-lg dark:prose-invert max-w-none">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center">
                ⏱️ Optimisez votre temps ET votre fiscalité
              </h2>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4 text-center">
                Comprendre votre fiscalité est essentiel, mais optimiser votre temps de travail l&apos;est tout autant ! 
                Découvrez nos outils de productivité pour maximiser votre efficacité professionnelle.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 mt-6">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                  <div className="text-3xl mb-2 text-center">⏱️</div>
                  <h3 className="text-lg font-semibold mb-2 text-center">Timer Focus</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 text-center mb-3">
                    Suivez précisément votre temps de travail avec notre chronomètre professionnel
                  </p>
                  <Link
                    href="/timer"
                    className="block text-center text-blue-600 dark:text-blue-400 hover:underline text-sm font-semibold"
                  >
                    Utiliser le timer →
                  </Link>
                </div>

                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                  <div className="text-3xl mb-2 text-center">🍅</div>
                  <h3 className="text-lg font-semibold mb-2 text-center">Technique Pomodoro</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 text-center mb-3">
                    Augmentez votre productivité avec des sessions de 25 min de focus intensif
                  </p>
                  <Link
                    href="/guide"
                    className="block text-center text-blue-600 dark:text-blue-400 hover:underline text-sm font-semibold"
                  >
                    Découvrir la méthode →
                  </Link>
                </div>

                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                  <div className="text-3xl mb-2 text-center">📊</div>
                  <h3 className="text-lg font-semibold mb-2 text-center">Calcul de Temps</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 text-center mb-3">
                    Planifiez vos journées et calculez vos heures de travail efficacement
                  </p>
                  <Link
                    href="/timer"
                    className="block text-center text-blue-600 dark:text-blue-400 hover:underline text-sm font-semibold"
                  >
                    Calculer mon temps →
                  </Link>
                </div>
              </div>

              <div className="bg-blue-100 dark:bg-blue-900/30 border-l-4 border-blue-600 p-4 rounded mb-4">
                <h3 className="text-lg font-semibold mb-2">💡 Pourquoi lier fiscalité et gestion du temps ?</h3>
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                  En tant que professionnel, freelance ou frontalier, votre temps est votre ressource la plus précieuse. 
                  Notre calculatrice fiscale vous aide à comprendre ce que vous gagnez réellement, tandis que nos outils 
                  de gestion du temps vous aident à optimiser chaque heure travaillée. Ensemble, ils vous permettent de :
                </p>
                <ul className="mt-3 space-y-2 text-sm sm:text-base text-gray-700 dark:text-gray-300">
                  <li>• <strong>Calculer votre taux horaire net réel</strong> après impôts et cotisations</li>
                  <li>• <strong>Suivre précisément votre temps</strong> pour facturer correctement vos clients</li>
                  <li>• <strong>Optimiser votre productivité</strong> pour augmenter vos revenus</li>
                  <li>• <strong>Comparer France vs Luxembourg</strong> pour les travailleurs frontaliers</li>
                  <li>• <strong>Planifier vos projets</strong> en fonction de votre revenu cible</li>
                </ul>
              </div>

              <div className="text-center mt-6">
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Utilisez nos outils gratuits pour maximiser votre efficacité professionnelle
                </p>
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                >
                  Découvrir tous nos outils →
                </Link>
              </div>
            </article>
          </section>
        </main>
      </div>
    </div>
  );
}
