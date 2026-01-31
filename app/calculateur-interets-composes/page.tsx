"use client";

import Link from "next/link";
import CompoundInterestCalculator from "@/components/CompoundInterestCalculator";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faBullseye, faChartBar, faChartLine, faClock, faHome, faMoneyBill, faRocket, faUniversity } from '@fortawesome/free-solid-svg-icons';

export default function CompoundInterestCalculatorPage() {
  return (
    <div className="min-h-screen flex flex-col p-4 sm:p-6 md:p-8">
      <header className="flex-shrink-0 mb-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-3">
          Calculateur d&apos;Intérêts Composés en Ligne Gratuit
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-400 text-sm sm:text-base max-w-3xl mx-auto">
          Calculez la puissance des intérêts composés pour vos investissements. Visualisez comment votre capital 
          croît exponentiellement grâce à l&apos;effet boule de neige des intérêts composés.
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
          <CompoundInterestCalculator />
        </div>

        {/* SEO Content */}
        <section className="mt-8 space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">La puissance des intérêts composés</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Les intérêts composés représentent l&apos;un des concepts les plus puissants en finance personnelle. 
              Contrairement aux intérêts simples qui ne s&apos;appliquent que sur le capital initial, les intérêts 
              composés génèrent des intérêts sur les intérêts précédemment accumulés. Ce mécanisme crée un effet 
              d&apos;accélération exponentielle qui transforme de modestes investissements réguliers en patrimoines 
              substantiels sur le long terme.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              La formule des intérêts composés est : <strong>Valeur Future = Capital Initial × (1 + Taux)^Durée</strong>. 
              Si vous investissez 10 000€ à 7% par an pendant 30 ans, vous obtiendrez 76 123€ - soit 66 123€ 
              d&apos;intérêts générés. La magie opère car chaque année, les intérêts de l&apos;année précédente 
              génèrent à leur tour des intérêts, créant un effet boule de neige qui s&apos;amplifie avec le temps.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Albert Einstein aurait qualifié les intérêts composés de &quot;huitième merveille du monde&quot; en 
              déclarant : &quot;Celui qui comprend les intérêts composés les gagne ; celui qui ne les comprend pas 
              les paie&quot;. Cette citation souligne l&apos;importance de commencer à investir tôt. Grâce à notre 
              calculateur, visualisez concrètement comment le temps et la régularité transforment vos économies en 
              richesse, et pourquoi chaque année compte dans votre stratégie d&apos;investissement.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Intérêts composés vs. Intérêts simples</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faChartLine} className="inline" /> Intérêts simples</h3>
                <p className="mb-2">
                  Les intérêts simples ne s&apos;appliquent que sur le capital de départ. Ils croissent de manière 
                  linéaire :
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Formule : Intérêts = Capital × Taux × Durée</li>
                  <li>Exemple : 10 000€ à 5% pendant 10 ans = 10 000 + (10 000 × 0,05 × 10) = 15 000€</li>
                  <li>Gain total : 5 000€ d&apos;intérêts</li>
                  <li>Utilisés pour les prêts à court terme ou certains placements spécifiques</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faRocket} className="inline" /> Intérêts composés</h3>
                <p className="mb-2">
                  Les intérêts composés réinvestissent automatiquement les gains. Ils croissent de manière 
                  exponentielle :
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Formule : Valeur Future = Capital × (1 + Taux)^Durée</li>
                  <li>Même exemple : 10 000€ à 5% pendant 10 ans = 16 289€</li>
                  <li>Gain total : 6 289€ d&apos;intérêts (1 289€ de plus que les intérêts simples)</li>
                  <li>Plus la durée est longue, plus l&apos;écart avec les intérêts simples s&apos;accentue</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faBolt} className="inline" /> L&apos;impact du temps</h3>
                <p className="mb-2">
                  Sur 30 ans avec les mêmes paramètres, la différence devient spectaculaire :
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Intérêts simples : 25 000€ (gain de 15 000€)</li>
                  <li>Intérêts composés : 43 219€ (gain de 33 219€)</li>
                  <li>Différence : 18 219€ soit plus du double de gains supplémentaires !</li>
                  <li>Cette différence s&apos;explique par le réinvestissement automatique des gains</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">La règle des 72 et l&apos;investissement à long terme</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faBullseye} className="inline" /> La règle des 72</h3>
                <p className="mb-2">
                  La règle des 72 est un raccourci mental pour estimer rapidement le temps nécessaire pour doubler 
                  votre capital. Divisez simplement 72 par le taux d&apos;intérêt annuel :
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>À 6% : 72 ÷ 6 = 12 ans pour doubler</li>
                  <li>À 8% : 72 ÷ 8 = 9 ans pour doubler</li>
                  <li>À 10% : 72 ÷ 10 = 7,2 ans pour doubler</li>
                  <li>Plus le taux est élevé, plus votre argent double rapidement</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faClock} className="inline" /> Commencer tôt fait toute la différence</h3>
                <p className="mb-2">
                  Comparons deux investisseurs pour illustrer l&apos;importance de commencer tôt :
                </p>
                <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg space-y-2 text-sm">
                  <p><strong>Alice</strong> investit 200€/mois de 25 à 35 ans (10 ans), puis arrête :</p>
                  <ul className="list-disc pl-6">
                    <li>Total investi : 24 000€</li>
                    <li>À 65 ans (30 ans de croissance) à 7% : environ 188 000€</li>
                  </ul>
                  <p className="mt-2"><strong>Bob</strong> investit 200€/mois de 35 à 65 ans (30 ans) :</p>
                  <ul className="list-disc pl-6">
                    <li>Total investi : 72 000€</li>
                    <li>À 65 ans à 7% : environ 244 000€</li>
                  </ul>
                  <p className="mt-2 font-semibold">
                    Alice a investi 3 fois moins mais obtient 77% du capital de Bob grâce aux 10 années 
                    supplémentaires de croissance composée !
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faMoneyBill} className="inline" /> L&apos;importance des versements réguliers</h3>
                <p className="mb-2">
                  Les versements périodiques (mensuel, annuel) amplifient considérablement l&apos;effet des 
                  intérêts composés :
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Un investissement unique de 10 000€ à 7% sur 30 ans = 76 123€</li>
                  <li>300€/mois (108 000€ au total) à 7% sur 30 ans = 363 790€</li>
                  <li>Les versements réguliers bénéficient du &quot;lissage&quot; et de la discipline d&apos;épargne</li>
                  <li>Stratégie du Dollar Cost Averaging pour réduire l&apos;impact de la volatilité</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Où bénéficier des intérêts composés ?</h2>
            <div className="space-y-3 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="font-semibold mb-1"><FontAwesomeIcon icon={faChartBar} className="inline" /> Actions et ETF (Trackers boursiers)</h3>
                <p className="text-sm mb-1">
                  La bourse offre historiquement les meilleurs rendements à long terme (moyenne de 8-10% annuels). 
                  Les dividendes réinvestis automatiquement créent un effet composé puissant. Les ETF comme le 
                  S&amp;P 500 ou le MSCI World permettent une diversification facile.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1"><FontAwesomeIcon icon={faUniversity} className="inline" /> Assurance-vie et PEA</h3>
                <p className="text-sm mb-1">
                  En France, ces enveloppes fiscales permettent de bénéficier de l&apos;effet composé avec une 
                  fiscalité avantageuse après 8 ans pour l&apos;assurance-vie. Les frais doivent être minimisés 
                  car ils réduisent significativement les gains à long terme.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1"><FontAwesomeIcon icon={faHome} className="inline" /> Immobilier locatif</h3>
                <p className="text-sm mb-1">
                  Les loyers réinvestis dans de nouveaux biens créent un effet de levier et de composition. 
                  L&apos;emprunt bancaire amplifie les rendements (effet de levier) mais augmente aussi les risques. 
                  Visez un rendement net de 5-8% annuels.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">💎 Obligations et fonds obligataires</h3>
                <p className="text-sm mb-1">
                  Plus sûres mais moins rentables (2-5% annuels). Les intérêts des coupons réinvestis composent 
                  avec le temps. Idéales pour la partie sécurisée d&apos;un portefeuille diversifié ou à l&apos;approche 
                  de la retraite.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">🌾 Crowdfunding immobilier et prêts P2P</h3>
                <p className="text-sm mb-1">
                  Rendements attractifs (7-12%) mais risques plus élevés. Les intérêts peuvent être réinvestis 
                  automatiquement sur certaines plateformes. Diversifiez sur de nombreux projets pour réduire le 
                  risque de défaut.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Questions fréquentes sur les intérêts composés</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Quelle est la différence entre capitalisation annuelle et mensuelle ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  La fréquence de capitalisation impacte le rendement final. Une capitalisation mensuelle génère 
                  légèrement plus qu&apos;une capitalisation annuelle car les intérêts sont réinvestis plus fréquemment. 
                  Par exemple, 10 000€ à 6% sur 10 ans : capitalisation annuelle = 17 908€, mensuelle = 18 194€, 
                  soit 286€ de différence.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Comment les impôts affectent-ils les intérêts composés ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Les impôts sur les gains réduisent l&apos;effet composé. Un rendement de 8% imposé à 30% devient 
                  5,6% net. Sur 30 ans, cela représente une différence massive. D&apos;où l&apos;importance des 
                  enveloppes fiscalement avantageuses (PEA, assurance-vie) et de minimiser le turnover dans les 
                  comptes taxables.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  L&apos;inflation annule-t-elle les intérêts composés ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  L&apos;inflation (environ 2-3% annuels) érode le pouvoir d&apos;achat, d&apos;où l&apos;importance 
                  de viser des rendements supérieurs à l&apos;inflation. Un placement à 7% avec 2% d&apos;inflation 
                  offre un rendement réel de 5%. Les actions et l&apos;immobilier sont généralement des protections 
                  efficaces contre l&apos;inflation sur le long terme.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Peut-on vraiment obtenir 10% de rendement annuel ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Le S&amp;P 500 a historiquement rapporté environ 10% annuels sur le long terme (dividendes 
                  réinvestis). Attention : ce sont des moyennes incluant des années de forte hausse et de baisse. 
                  Votre rendement réel dépendra de votre horizon d&apos;investissement, votre tolérance au risque 
                  et votre discipline pour ne pas vendre lors des corrections.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
