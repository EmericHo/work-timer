"use client";

import Link from "next/link";
import SCPISimulator from "@/components/SCPISimulator";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faBuilding, faBullseye, faChartBar, faChartLine, faExclamationTriangle, faGlobe, faHome, faLightbulb, faMoneyBill, faSync, faUniversity } from '@fortawesome/free-solid-svg-icons';

export default function SCPISimulatorPage() {
  return (
    <div className="min-h-screen flex flex-col p-4 sm:p-6 md:p-8">
      <header className="flex-shrink-0 mb-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-3">
          Simulateur SCPI Gratuit en Ligne - Calcul Rendement Immobilier
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-400 text-sm sm:text-base max-w-3xl mx-auto">
          Calculez vos investissements en SCPI et estimez vos revenus locatifs. 
          Simulateur gratuit avec détails année par année, fiscalité et rendements nets.
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
          <SCPISimulator />
        </div>

        {/* SEO Content */}
        <section className="mt-8 space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Qu&apos;est-ce qu&apos;une SCPI ?</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Une SCPI (Société Civile de Placement Immobilier) est un véhicule d&apos;investissement 
              collectif qui permet d&apos;investir dans l&apos;immobilier locatif sans les contraintes 
              de gestion directe. Souvent appelée &quot;pierre-papier&quot;, la SCPI collecte les fonds 
              de multiples investisseurs pour acquérir et gérer un parc immobilier professionnel 
              (bureaux, commerces, résidences) ou résidentiel.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              En achetant des parts de SCPI, vous devenez propriétaire indirect d&apos;une fraction 
              du patrimoine immobilier de la société. Les loyers perçus sont redistribués 
              proportionnellement aux parts détenues, généralement de manière trimestrielle. 
              C&apos;est un excellent moyen de se constituer un patrimoine immobilier diversifié 
              et de générer des revenus passifs.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Les SCPI sont gérées par des sociétés de gestion agréées par l&apos;Autorité des 
              Marchés Financiers (AMF). Elles s&apos;occupent de l&apos;acquisition des biens, de 
              la recherche de locataires, de la gestion courante et de l&apos;entretien du patrimoine. 
              L&apos;investisseur n&apos;a donc aucune gestion à effectuer.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Comment fonctionne une SCPI ?</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faMoneyBill} className="inline" /> Souscription de parts</h3>
                <p>
                  Vous investissez en achetant des parts de SCPI, dont le prix varie généralement 
                  entre 200€ et 1 000€ la part selon les SCPI. Certaines permettent un investissement 
                  initial dès 1 000€, tandis que d&apos;autres demandent un minimum plus élevé. 
                  Il est possible d&apos;investir au comptant ou à crédit pour bénéficier de l&apos;effet de levier.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faBuilding} className="inline" /> Constitution du patrimoine</h3>
                <p>
                  La société de gestion utilise les capitaux collectés pour acquérir des biens 
                  immobiliers professionnels (bureaux, commerces, entrepôts, hôtels, résidences 
                  services, etc.). Le patrimoine est diversifié géographiquement et par typologie 
                  de biens pour limiter les risques.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faChartLine} className="inline" /> Génération de revenus</h3>
                <p>
                  Les biens acquis sont loués à des entreprises ou particuliers. Les loyers perçus, 
                  après déduction des charges de gestion (8 à 12% en moyenne), des travaux et de 
                  la provision pour entretien, sont redistribués aux associés sous forme de 
                  dividendes trimestriels.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faSync} className="inline" /> Valorisation des parts</h3>
                <p>
                  La valeur des parts peut évoluer à la hausse ou à la baisse en fonction de la 
                  valeur du patrimoine immobilier détenu par la SCPI. Cette valorisation est 
                  généralement révisée annuellement par un expert immobilier indépendant.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Les types de SCPI</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  <FontAwesomeIcon icon={faBullseye} className="inline" /> SCPI de rendement
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  L&apos;objectif principal est de générer des revenus réguliers. Ces SCPI investissent 
                  dans des immeubles locatifs (bureaux, commerces, etc.) et redistribuent la majorité 
                  des loyers perçus. Rendements typiques : 4% à 6% par an.
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>Avantages :</strong> Revenus réguliers et prévisibles, diversification, 
                  gestion déléguée.
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  <FontAwesomeIcon icon={faChartBar} className="inline" /> SCPI de plus-value (ou de valorisation)
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  Ces SCPI privilégient la valorisation du capital à long terme en acquérant des 
                  biens à fort potentiel d&apos;appréciation. Elles réinvestissent une partie importante 
                  des revenus pour développer le patrimoine.
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>Avantages :</strong> Potentiel de plus-value important, accumulation de 
                  patrimoine, diversification.
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  <FontAwesomeIcon icon={faBriefcase} className="inline" /> SCPI fiscales
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  Conçues pour bénéficier d&apos;avantages fiscaux (Pinel, Malraux, Déficit foncier, 
                  Monuments Historiques). Elles permettent de réduire ses impôts tout en investissant 
                  dans l&apos;immobilier. Engagement généralement de 9 à 15 ans.
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>Avantages :</strong> Réductions d&apos;impôts substantielles, constitution 
                  d&apos;un patrimoine, revenus complémentaires.
                </p>
              </div>

              <div className="border-l-4 border-yellow-500 pl-4">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  <FontAwesomeIcon icon={faGlobe} className="inline" /> SCPI européennes et internationales
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  Ces SCPI investissent dans des biens immobiliers situés en Europe ou dans le monde. 
                  Elles offrent une diversification géographique et peuvent bénéficier de marchés 
                  immobiliers plus dynamiques.
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>Avantages :</strong> Diversification internationale, exposition à des marchés 
                  en croissance, répartition des risques.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Avantages de l&apos;investissement en SCPI</h2>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-green-600 text-xl mt-1">✓</span>
                <div>
                  <strong>Accessibilité :</strong> Investissement possible dès 1 000€ à 5 000€ 
                  selon les SCPI, contre plusieurs dizaines de milliers d&apos;euros pour un bien 
                  immobilier direct.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 text-xl mt-1">✓</span>
                <div>
                  <strong>Gestion déléguée :</strong> Aucune gestion locative, pas de recherche 
                  de locataires, pas de travaux à gérer. La société de gestion s&apos;occupe de tout.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 text-xl mt-1">✓</span>
                <div>
                  <strong>Diversification :</strong> Votre investissement est réparti sur de nombreux 
                  biens et locataires, limitant ainsi les risques de vacance locative.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 text-xl mt-1">✓</span>
                <div>
                  <strong>Revenus réguliers :</strong> Distribution trimestrielle de dividendes, 
                  source de revenus complémentaires ou passifs pour préparer la retraite.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 text-xl mt-1">✓</span>
                <div>
                  <strong>Rendement attractif :</strong> Rendement moyen historique entre 4% et 6% 
                  par an, supérieur aux livrets d&apos;épargne et à l&apos;assurance-vie en fonds euros.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 text-xl mt-1">✓</span>
                <div>
                  <strong>Mutualisation des risques :</strong> Les SCPI investissent dans différents 
                  types de biens (bureaux, commerces, santé, logistique) et zones géographiques.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 text-xl mt-1">✓</span>
                <div>
                  <strong>Transmission facilitée :</strong> Les parts de SCPI peuvent être transmises 
                  facilement dans le cadre d&apos;une succession ou d&apos;une donation.
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Inconvénients et risques des SCPI</h2>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-red-600 text-xl mt-1">⚠</span>
                <div>
                  <strong>Liquidité limitée :</strong> Les parts de SCPI ne sont pas aussi liquides 
                  que des actions. La revente peut prendre plusieurs semaines à plusieurs mois selon 
                  le marché secondaire.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-600 text-xl mt-1">⚠</span>
                <div>
                  <strong>Frais d&apos;entrée :</strong> Frais de souscription entre 8% et 12% du montant 
                  investi, amortis sur la durée de détention mais impactant la rentabilité à court terme.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-600 text-xl mt-1">⚠</span>
                <div>
                  <strong>Fiscalité :</strong> Les revenus sont imposés dans la catégorie des revenus 
                  fonciers (barème progressif de l&apos;impôt + 17,2% de prélèvements sociaux), ce qui 
                  peut représenter jusqu&apos;à 47% pour les hauts revenus.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-600 text-xl mt-1">⚠</span>
                <div>
                  <strong>Risque de moins-value :</strong> La valeur des parts peut baisser en cas 
                  de dépréciation du patrimoine immobilier ou de conjoncture défavorable.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-600 text-xl mt-1">⚠</span>
                <div>
                  <strong>Vacance locative :</strong> Les revenus peuvent diminuer si le taux d&apos;occupation 
                  des biens baisse (départ de locataires, crise économique).
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-600 text-xl mt-1">⚠</span>
                <div>
                  <strong>Horizon long terme :</strong> Les SCPI sont recommandées pour un investissement 
                  d&apos;au moins 8 à 10 ans pour amortir les frais d&apos;entrée et lisser les cycles immobiliers.
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Comment choisir une bonne SCPI ?</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="text-lg font-semibold mb-2"><FontAwesomeIcon icon={faChartBar} className="inline" /> 1. Analyser les performances historiques</h3>
                <p>
                  Examinez le taux de distribution sur dividende (TDD) des 5 à 10 dernières années. 
                  Un TDD stable entre 4% et 6% est un bon indicateur. Méfiez-vous des rendements 
                  exceptionnellement élevés qui peuvent cacher des risques ou ne pas être durables.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2"><FontAwesomeIcon icon={faBuilding} className="inline" /> 2. Vérifier la qualité du patrimoine</h3>
                <p>
                  Regardez la composition du patrimoine : types de biens (bureaux, commerces, santé, 
                  logistique), localisation géographique, qualité des locataires. Une bonne diversification 
                  limite les risques.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">👥 3. Évaluer le taux d&apos;occupation</h3>
                <p>
                  Un taux d&apos;occupation financier (TOF) supérieur à 90% est un bon signe. Il indique 
                  que les biens sont bien loués et génèrent des revenus réguliers.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2"><FontAwesomeIcon icon={faBriefcase} className="inline" /> 4. Étudier la société de gestion</h3>
                <p>
                  Privilégiez les sociétés de gestion reconnues avec une expertise prouvée, une solidité 
                  financière et une bonne réputation sur le marché. Consultez leurs rapports annuels 
                  et notes d&apos;information.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2"><FontAwesomeIcon icon={faMoneyBill} className="inline" /> 5. Comparer les frais</h3>
                <p>
                  Comparez les frais de souscription (8-12%), les frais de gestion (généralement 10-12% 
                  des loyers HT) et les éventuels frais de cession. Des frais élevés impactent la 
                  rentabilité nette.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2"><FontAwesomeIcon icon={faChartLine} className="inline" /> 6. Consulter la capitalisation</h3>
                <p>
                  Les SCPI de taille importante (capitalisation supérieure à 500 millions €) offrent 
                  généralement une meilleure liquidité et une plus grande capacité d&apos;investissement.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Fiscalité des SCPI en France</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faHome} className="inline" /> Revenus fonciers</h3>
                <p className="mb-2">
                  Les dividendes perçus des SCPI de rendement sont imposés dans la catégorie des 
                  revenus fonciers. Vous avez le choix entre deux régimes :
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>
                    <strong>Micro-foncier :</strong> Si vos revenus fonciers sont inférieurs à 15 000€ 
                    par an, vous bénéficiez d&apos;un abattement forfaitaire de 30%. Les 70% restants 
                    sont ajoutés à vos autres revenus et imposés selon votre TMI + 17,2% de prélèvements 
                    sociaux.
                  </li>
                  <li>
                    <strong>Régime réel :</strong> Vous déduisez les charges réelles (intérêts d&apos;emprunt, 
                    frais de gestion, travaux, assurances). Ce régime est souvent plus avantageux si 
                    vous investissez à crédit ou si les charges sont importantes.
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faMoneyBill} className="inline" /> Taux marginal d&apos;imposition (TMI)</h3>
                <p>
                  Selon votre tranche d&apos;imposition (0%, 11%, 30%, 41% ou 45%) + 17,2% de 
                  prélèvements sociaux, votre taux global d&apos;imposition sur les revenus de SCPI 
                  peut varier de 17,2% à 62,2%. Pour la plupart des investisseurs, le taux effectif 
                  se situe entre 30% et 47%.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faChartBar} className="inline" /> Plus-values à la revente</h3>
                <p>
                  La plus-value réalisée lors de la cession des parts est imposée au taux de 19% 
                  (impôt sur le revenu) + 17,2% (prélèvements sociaux), soit 36,2% au total. 
                  Vous bénéficiez d&apos;un abattement pour durée de détention :
                </p>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                  <li>Exonération totale d&apos;IR après 22 ans de détention</li>
                  <li>Exonération totale de prélèvements sociaux après 30 ans</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faUniversity} className="inline" /> SCPI en assurance-vie</h3>
                <p>
                  Détenir des SCPI via une assurance-vie ou un contrat de capitalisation permet de 
                  bénéficier de la fiscalité avantageuse de l&apos;assurance-vie : pas d&apos;imposition 
                  annuelle sur les revenus, fiscalité réduite en cas de rachat après 8 ans, et 
                  transmission facilitée en cas de décès.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faBriefcase} className="inline" /> IFI (Impôt sur la Fortune Immobilière)</h3>
                <p>
                  Les parts de SCPI sont prises en compte dans le calcul de l&apos;IFI si votre 
                  patrimoine immobilier net taxable dépasse 1,3 million d&apos;euros. La valeur 
                  retenue est la valeur de reconstitution des parts au 1er janvier.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Questions fréquentes sur les SCPI</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Quel montant minimum pour investir en SCPI ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Le montant minimum varie selon les SCPI, généralement entre 1 000€ et 5 000€ 
                  pour une première souscription. Le prix d&apos;une part se situe entre 200€ et 
                  1 000€. Certaines SCPI acceptent des investissements progressifs avec des versements 
                  mensuels à partir de 100€.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Quelle est la durée recommandée pour investir en SCPI ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Un investissement en SCPI doit être envisagé sur le long terme, idéalement 8 à 15 ans 
                  minimum. Cette durée permet d&apos;amortir les frais d&apos;entrée, de bénéficier de la 
                  valorisation du patrimoine et de lisser les éventuelles périodes de baisse des revenus.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Peut-on investir en SCPI à crédit ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Oui, il est possible d&apos;investir en SCPI avec un crédit bancaire pour bénéficier 
                  de l&apos;effet de levier. Les intérêts d&apos;emprunt sont déductibles des revenus 
                  fonciers (régime réel), ce qui peut réduire significativement votre fiscalité. 
                  Attention cependant au risque d&apos;endettement et aux frais bancaires.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Comment sont versés les revenus d&apos;une SCPI ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Les revenus (dividendes) sont généralement versés trimestriellement par virement 
                  bancaire. Certaines SCPI proposent des versements mensuels. Le montant varie en 
                  fonction des loyers perçus et du taux d&apos;occupation du patrimoine.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Les SCPI sont-elles garanties ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Non, les SCPI ne sont pas garanties. Il s&apos;agit d&apos;un placement immobilier 
                  dont la valeur et les revenus peuvent fluctuer selon la conjoncture immobilière, 
                  le taux d&apos;occupation, et la qualité de la gestion. Les performances passées ne 
                  préjugent pas des performances futures.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Quelle différence entre SCPI à capital fixe et variable ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <strong>Capital variable :</strong> La SCPI peut émettre de nouvelles parts à tout 
                  moment. C&apos;est le type le plus courant, offrant une meilleure liquidité.
                  <br />
                  <strong>Capital fixe :</strong> Le nombre de parts est limité. La revente se fait 
                  sur le marché secondaire, ce qui peut allonger les délais de cession mais permet 
                  parfois des décotes intéressantes à l&apos;achat.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Peut-on revendre ses parts de SCPI facilement ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  La liquidité dépend du type de SCPI. Pour les SCPI à capital variable, la société 
                  de gestion rachète les parts sous conditions. Les délais varient de quelques 
                  semaines à plusieurs mois selon la demande. Pour les SCPI à capital fixe, la 
                  revente s&apos;effectue sur le marché secondaire et peut prendre plus de temps.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Conseils pour investir en SCPI</h2>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-blue-600 text-xl"><FontAwesomeIcon icon={faLightbulb} className="inline" /></span>
                <div>
                  <strong>Diversifiez :</strong> N&apos;investissez pas tout votre capital dans une 
                  seule SCPI. Répartissez sur 2 à 4 SCPI différentes pour limiter les risques.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 text-xl"><FontAwesomeIcon icon={faLightbulb} className="inline" /></span>
                <div>
                  <strong>Privilégiez le long terme :</strong> Les SCPI sont des placements de long 
                  terme (8-15 ans minimum) pour amortir les frais et profiter de la valorisation.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 text-xl"><FontAwesomeIcon icon={faLightbulb} className="inline" /></span>
                <div>
                  <strong>Analysez la performance :</strong> Ne vous fiez pas uniquement au rendement 
                  annoncé. Étudiez l&apos;historique, le taux d&apos;occupation, la qualité du patrimoine.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 text-xl"><FontAwesomeIcon icon={faLightbulb} className="inline" /></span>
                <div>
                  <strong>Comparez les frais :</strong> Les frais de souscription et de gestion 
                  varient d&apos;une SCPI à l&apos;autre et impactent directement votre rentabilité nette.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 text-xl"><FontAwesomeIcon icon={faLightbulb} className="inline" /></span>
                <div>
                  <strong>Optimisez la fiscalité :</strong> Envisagez le régime réel si vous investissez 
                  à crédit, ou l&apos;assurance-vie pour une fiscalité plus douce.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 text-xl"><FontAwesomeIcon icon={faLightbulb} className="inline" /></span>
                <div>
                  <strong>Consultez un conseiller :</strong> Un conseiller en gestion de patrimoine 
                  peut vous aider à choisir les SCPI adaptées à votre profil et objectifs.
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6">
            <h3 className="text-xl font-bold mb-3 text-yellow-900 dark:text-yellow-200">
              <FontAwesomeIcon icon={faExclamationTriangle} className="inline" /> Avertissement important
            </h3>
            <p className="text-yellow-800 dark:text-yellow-200 text-sm mb-3">
              Les informations présentées sur cette page sont fournies à titre informatif uniquement 
              et ne constituent pas un conseil en investissement. Les SCPI sont des produits financiers 
              comportant des risques, notamment :
            </p>
            <ul className="list-disc pl-6 space-y-1 text-yellow-800 dark:text-yellow-200 text-sm">
              <li>Risque de perte en capital (valeur des parts)</li>
              <li>Risque de liquidité (délais de revente)</li>
              <li>Risque de diminution des revenus (vacance locative)</li>
              <li>Absence de garantie de capital ou de rendement</li>
            </ul>
            <p className="text-yellow-800 dark:text-yellow-200 text-sm mt-3">
              Les performances passées ne préjugent pas des performances futures. Avant tout 
              investissement en SCPI, il est fortement recommandé de consulter un conseiller en 
              gestion de patrimoine indépendant et de lire attentivement la note d&apos;information 
              et le bulletin trimestriel de la SCPI. N&apos;investissez que des sommes dont vous 
              n&apos;avez pas besoin à court ou moyen terme.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Comment utiliser ce simulateur SCPI ?</h2>
            <ol className="list-decimal pl-6 space-y-3 text-gray-700 dark:text-gray-300">
              <li>
                <strong>Renseignez votre investissement initial :</strong> Le montant que vous 
                souhaitez investir au démarrage (minimum généralement 1 000€ à 5 000€).
              </li>
              <li>
                <strong>Indiquez vos versements mensuels :</strong> Si vous prévoyez d&apos;investir 
                régulièrement chaque mois pour construire votre patrimoine progressivement.
              </li>
              <li>
                <strong>Définissez la durée :</strong> Nombre d&apos;années pendant lesquelles vous 
                comptez conserver vos parts (recommandé : 8 à 15 ans minimum).
              </li>
              <li>
                <strong>Estimez le rendement :</strong> Le taux de distribution annuel attendu 
                (consultez les performances historiques des SCPI, généralement 4% à 6%).
              </li>
              <li>
                <strong>Précisez votre fiscalité :</strong> Votre taux marginal d&apos;imposition + 
                prélèvements sociaux (environ 30% à 47% selon vos revenus).
              </li>
              <li>
                <strong>Analysez les résultats :</strong> Le simulateur calcule votre capital final, 
                vos revenus nets après impôts et vous fournit un détail année par année.
              </li>
            </ol>
          </div>
        </section>
      </div>
    </div>
  );
}
