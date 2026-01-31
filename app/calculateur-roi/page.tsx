"use client";

import Link from "next/link";
import ROICalculator from "@/components/ROICalculator";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faBuilding, faBullseye, faChartBar, faExclamationTriangle, faMobileAlt } from '@fortawesome/free-solid-svg-icons';

export default function ROICalculatorPage() {
  return (
    <div className="min-h-screen flex flex-col p-4 sm:p-6 md:p-8">
      <header className="flex-shrink-0 mb-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-3">
          Calculateur ROI - Return on Investment en Ligne
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-400 text-sm sm:text-base max-w-3xl mx-auto">
          Calculez instantanément votre retour sur investissement (ROI) pour évaluer la rentabilité de vos projets, 
          investissements marketing, immobiliers ou business. Outil gratuit pour entrepreneurs et investisseurs.
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
          <ROICalculator />
        </div>

        {/* SEO Content */}
        <section className="mt-8 space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Qu&apos;est-ce que le ROI (Retour sur Investissement) ?</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Le ROI (Return on Investment) ou retour sur investissement est une mesure financière qui évalue 
              la rentabilité d&apos;un investissement en comparant le gain ou la perte générée par rapport au 
              coût initial. C&apos;est l&apos;un des indicateurs les plus utilisés en finance, marketing et 
              gestion de projet car il permet de comparer facilement différentes opportunités d&apos;investissement 
              sur une base commune.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              La formule du ROI est simple : <strong>ROI = (Gain de l&apos;investissement - Coût de 
              l&apos;investissement) / Coût de l&apos;investissement × 100</strong>. Par exemple, si vous 
              investissez 10 000€ dans une campagne marketing qui génère 15 000€ de revenus, votre ROI est 
              de 50% ((15 000 - 10 000) / 10 000 × 100). Un ROI positif indique que l&apos;investissement a 
              généré plus de valeur qu&apos;il n&apos;a coûté.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Notre calculateur ROI vous permet d&apos;évaluer rapidement la rentabilité de n&apos;importe quel 
              projet. Que vous envisagiez d&apos;investir dans du marketing digital, de l&apos;équipement, de 
              l&apos;immobilier ou de la formation, cet outil vous aide à prendre des décisions éclairées en 
              quantifiant le retour attendu sur chaque euro investi.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Types de ROI et domaines d&apos;application</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faMobileAlt} className="inline" /> ROI Marketing Digital</h3>
                <p className="mb-2">
                  Le marketing digital permet un suivi précis du ROI grâce aux outils d&apos;analyse. Mesurez 
                  l&apos;efficacité de vos campagnes :
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>Google Ads / Meta Ads</strong> : Comparez le coût des clics vs. conversions générées</li>
                  <li><strong>Email Marketing</strong> : ROI moyen de 36€ pour chaque euro investi</li>
                  <li><strong>SEO</strong> : ROI élevé à long terme mais nécessite 6-12 mois pour des résultats</li>
                  <li><strong>Influenceurs</strong> : Suivez les codes promo et liens trackés pour mesurer l&apos;impact</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faBuilding} className="inline" /> ROI Immobilier</h3>
                <p className="mb-2">
                  Dans l&apos;immobilier, le ROI prend en compte les loyers perçus, la plus-value potentielle 
                  et les coûts annexes :
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Calcul basé sur les loyers annuels nets vs. prix d&apos;achat + frais</li>
                  <li>Incluez les charges (taxe foncière, copropriété, travaux, gestion)</li>
                  <li>Un bon ROI locatif se situe entre 5% et 10% annuels</li>
                  <li>La plus-value à la revente améliore significativement le ROI final</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faBriefcase} className="inline" /> ROI Formation et Développement</h3>
                <p className="mb-2">
                  Les investissements dans le capital humain ont souvent un ROI difficile à quantifier mais crucial :
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Formation professionnelle : amélioration de la productivité et rétention des talents</li>
                  <li>Certifications : augmentation du taux horaire facturable ou du salaire</li>
                  <li>Outils et logiciels : gain de temps et réduction des erreurs</li>
                  <li>Mesurez les gains en productivité, qualité et satisfaction client</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Analyse d&apos;investissement et prise de décision</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faChartBar} className="inline" /> Interpréter le ROI</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>ROI positif (&#62;0%)</strong> : L&apos;investissement génère un profit</li>
                  <li><strong>ROI négatif (&#60;0%)</strong> : L&apos;investissement génère une perte</li>
                  <li><strong>ROI &#62; 100%</strong> : Les gains dépassent le double de l&apos;investissement initial</li>
                  <li><strong>Benchmark</strong> : Comparez avec le taux sans risque (obligations d&apos;État ~2-3%)</li>
                  <li><strong>Contexte</strong> : Un ROI de 20% peut être excellent ou médiocre selon le secteur et le risque</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faExclamationTriangle} className="inline" /> Limites du ROI</h3>
                <p className="mb-2">
                  Bien qu&apos;utile, le ROI présente certaines limites à considérer :
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>Temps</strong> : Le ROI ne prend pas en compte la durée de l&apos;investissement</li>
                  <li><strong>Risque</strong> : Deux investissements avec le même ROI peuvent avoir des profils de risque très différents</li>
                  <li><strong>Coûts cachés</strong> : Maintenance, temps personnel, coût d&apos;opportunité souvent oubliés</li>
                  <li><strong>Intangibles</strong> : Certains bénéfices (notoriété, satisfaction) sont difficiles à quantifier</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faBullseye} className="inline" /> Métriques complémentaires</h3>
                <p className="mb-2">
                  Pour une analyse complète, combinez le ROI avec d&apos;autres indicateurs :
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>VAN (Valeur Actuelle Nette)</strong> : Prend en compte la valeur temporelle de l&apos;argent</li>
                  <li><strong>TRI (Taux de Rentabilité Interne)</strong> : Taux d&apos;actualisation qui annule la VAN</li>
                  <li><strong>Délai de récupération</strong> : Temps nécessaire pour récupérer l&apos;investissement initial</li>
                  <li><strong>ROAS (Return on Ad Spend)</strong> : Spécifique au marketing, mesure revenus vs. dépenses publicitaires</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Stratégies pour maximiser votre ROI</h2>
            <div className="space-y-3 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="font-semibold mb-1">1. Réduisez les coûts sans sacrifier la qualité</h3>
                <p className="text-sm">
                  Négociez avec vos fournisseurs, automatisez les tâches répétitives, et optimisez vos processus. 
                  Une réduction de 10% des coûts peut améliorer significativement votre ROI sans nécessiter 
                  d&apos;augmentation des revenus.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">2. Testez et itérez (approche Lean)</h3>
                <p className="text-sm">
                  Commencez avec des investissements modestes, mesurez les résultats, puis scalez ce qui fonctionne. 
                  Cette approche réduit le risque et vous permet d&apos;optimiser progressivement votre stratégie.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">3. Priorisez selon le ratio effort/impact</h3>
                <p className="text-sm">
                  Utilisez la matrice d&apos;Eisenhower ou le principe de Pareto (80/20) pour identifier les 20% 
                  d&apos;actions qui généreront 80% des résultats. Concentrez vos ressources sur ces quick wins.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">4. Suivez vos KPIs régulièrement</h3>
                <p className="text-sm">
                  Mettez en place des tableaux de bord pour suivre vos indicateurs clés en temps réel. Une 
                  détection précoce des problèmes permet des corrections rapides avant que le ROI ne se dégrade.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">5. Réinvestissez intelligemment vos profits</h3>
                <p className="text-sm">
                  Les projets à ROI élevé méritent un réinvestissement des profits. Créez un cercle vertueux 
                  où les gains d&apos;un investissement réussi financent les suivants, accélérant votre croissance.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Questions fréquentes sur le ROI</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Quel est un bon ROI ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Cela dépend fortement du secteur et du type d&apos;investissement. En bourse, un ROI annuel 
                  moyen de 8-10% est considéré comme bon. En marketing digital, un ROI de 300-500% est courant 
                  pour les campagnes performantes. Pour l&apos;immobilier locatif, visez au minimum 5-7% annuels. 
                  Comparez toujours avec le taux sans risque et le risque encouru.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Comment calculer le ROI sur plusieurs années ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Pour les investissements pluriannuels, calculez le ROI cumulé en additionnant tous les gains 
                  et coûts sur la période, puis divisez par l&apos;investissement initial. Pour obtenir le ROI 
                  annualisé, utilisez la formule : ((Valeur finale / Valeur initiale)^(1/nombre d&apos;années) - 1) × 100.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Dois-je inclure mon temps personnel dans le calcul du ROI ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Absolument, surtout pour les entrepreneurs et freelances. Estimez votre taux horaire et 
                  multipliez par le temps consacré au projet. Un projet avec un ROI de 200% peut devenir non 
                  rentable si vous avez investi 300 heures à 50€/h (15 000€) que vous auriez pu facturer ailleurs.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Le ROI prend-il en compte l&apos;inflation ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Le ROI nominal ne prend pas en compte l&apos;inflation. Pour un calcul plus précis sur le long 
                  terme, calculez le ROI réel en soustrayant le taux d&apos;inflation du ROI nominal. Avec 3% 
                  d&apos;inflation, un ROI nominal de 10% équivaut à un ROI réel d&apos;environ 7%.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
