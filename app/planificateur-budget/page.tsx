"use client";

import Link from "next/link";
import BudgetPlanner from "@/components/BudgetPlanner";

export default function BudgetPlannerPage() {
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
            💰 Planificateur de Budget Interactif Gratuit
          </h1>
          <p className="text-center text-gray-600 dark:text-gray-400 text-base sm:text-lg max-w-3xl mx-auto">
            Gérez vos finances personnelles facilement avec notre outil de planification budgétaire gratuit. Suivez vos revenus, dépenses et objectifs d&apos;épargne en temps réel.
          </p>
        </header>

        <main className="space-y-8">
          {/* Budget Planner Component */}
          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 sm:p-6 md:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
              📊 Mon Planificateur de Budget
            </h2>
            <BudgetPlanner />
          </section>

          {/* Educational Content */}
          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 sm:p-6 md:p-8">
            <article className="prose prose-sm sm:prose-base lg:prose-lg dark:prose-invert max-w-none">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                💡 Pourquoi créer un budget personnel ?
              </h2>

              <p className="text-gray-700 dark:text-gray-300 mb-4">
                La gestion d&apos;un budget personnel est essentielle pour atteindre vos objectifs financiers et maintenir une santé financière solide. Un budget bien structuré vous permet de :
              </p>

              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300 mb-6">
                <li><strong>Contrôler vos dépenses</strong> : Savoir où va votre argent chaque mois</li>
                <li><strong>Éviter les découverts bancaires</strong> : Anticiper vos dépenses et éviter les frais</li>
                <li><strong>Épargner efficacement</strong> : Mettre de côté pour vos projets et imprévus</li>
                <li><strong>Réduire le stress financier</strong> : Avoir une vision claire de votre situation</li>
                <li><strong>Atteindre vos objectifs</strong> : Financer un projet, un voyage, votre retraite</li>
              </ul>

              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-300 dark:border-blue-700 mb-6">
                <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-3">
                  🎯 La règle 50/30/20 expliquée
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  La règle 50/30/20 est une méthode simple et efficace de gestion budgétaire popularisée par la sénatrice américaine Elizabeth Warren. Elle divise votre revenu net mensuel en trois catégories :
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-green-600 dark:text-green-400 mb-2">
                      50% - Besoins essentiels (Dépenses fixes)
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      Logement (loyer/prêt immobilier), électricité, eau, chauffage, assurances obligatoires, alimentation de base, transport pour le travail, remboursements de dettes minimum.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-orange-600 dark:text-orange-400 mb-2">
                      30% - Envies et loisirs (Dépenses variables)
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      Sorties, restaurants, loisirs, abonnements streaming, vêtements non essentiels, voyages, cadeaux, hobbies. Tout ce qui améliore votre qualité de vie mais n&apos;est pas indispensable.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-600 dark:text-blue-400 mb-2">
                      20% - Épargne et investissements
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      Épargne de précaution (3-6 mois de dépenses), remboursement anticipé de dettes, épargne pour projets (mariage, achat immobilier), investissements (assurance-vie, PEA, actions), épargne retraite.
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold mb-3 mt-8">
                📝 Comment créer un budget efficace en 5 étapes
              </h3>

              <div className="space-y-4 mb-6">
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-2">
                    1️⃣ Calculez vos revenus mensuels nets
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Listez tous vos revenus : salaire net, primes, revenus complémentaires (freelance, locations), allocations. Utilisez le montant réel que vous recevez chaque mois sur votre compte bancaire.
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-2">
                    2️⃣ Listez vos dépenses fixes mensuelles
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Identifiez toutes les dépenses récurrentes : loyer/crédit immobilier, assurances, abonnements (internet, téléphone, électricité), crédits en cours. Ces montants sont généralement stables chaque mois.
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-2">
                    3️⃣ Estimez vos dépenses variables
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Analysez vos relevés bancaires des 3 derniers mois pour estimer : alimentation, transports, loisirs, vêtements, restaurants, sorties. Utilisez la moyenne mensuelle.
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-2">
                    4️⃣ Définissez vos objectifs d&apos;épargne
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Fixez-vous des objectifs réalistes : épargne de précaution, projet d&apos;achat, vacances, retraite. Commencez par au moins 10% de vos revenus si possible, et augmentez progressivement.
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-2">
                    5️⃣ Ajustez et suivez régulièrement
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Revisitez votre budget chaque mois. Identifiez les écarts entre prévisionnel et réel, ajustez vos catégories si nécessaire, et célébrez vos progrès. Un budget est un outil vivant !
                  </p>
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold mb-3 mt-8">
                💰 10 astuces pour économiser de l&apos;argent au quotidien
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-300 dark:border-green-700">
                  <h4 className="font-bold text-green-700 dark:text-green-400 mb-2">
                    🍳 Cuisinez à la maison
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Préparez vos repas plutôt que de commander ou manger au restaurant. Économie moyenne : 200-400€/mois.
                  </p>
                </div>

                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-300 dark:border-green-700">
                  <h4 className="font-bold text-green-700 dark:text-green-400 mb-2">
                    📱 Revoyez vos abonnements
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Supprimez les abonnements non utilisés (streaming, salles de sport, magazines). Économie : 50-100€/mois.
                  </p>
                </div>

                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-300 dark:border-green-700">
                  <h4 className="font-bold text-green-700 dark:text-green-400 mb-2">
                    🚗 Utilisez les transports en commun
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Privilégiez bus, métro ou vélo quand c&apos;est possible. Économie sur essence et parking : 100-200€/mois.
                  </p>
                </div>

                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-300 dark:border-green-700">
                  <h4 className="font-bold text-green-700 dark:text-green-400 mb-2">
                    💡 Réduisez votre consommation d&apos;énergie
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Baissez le chauffage d&apos;1°C, débranchez les appareils en veille. Économie : 30-80€/mois.
                  </p>
                </div>

                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-300 dark:border-green-700">
                  <h4 className="font-bold text-green-700 dark:text-green-400 mb-2">
                    🛒 Utilisez des listes de courses
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Planifiez vos achats pour éviter les achats impulsifs et le gaspillage. Économie : 50-100€/mois.
                  </p>
                </div>

                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-300 dark:border-green-700">
                  <h4 className="font-bold text-green-700 dark:text-green-400 mb-2">
                    🏦 Automatisez votre épargne
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Configurez un virement automatique vers votre compte épargne dès réception du salaire.
                  </p>
                </div>

                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-300 dark:border-green-700">
                  <h4 className="font-bold text-green-700 dark:text-green-400 mb-2">
                    🎁 Achetez d&apos;occasion
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Vêtements, meubles, électronique : les plateformes d&apos;occasion offrent de belles économies.
                  </p>
                </div>

                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-300 dark:border-green-700">
                  <h4 className="font-bold text-green-700 dark:text-green-400 mb-2">
                    ⏰ Appliquez la règle des 24h
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Attendez 24h avant tout achat non essentiel pour éviter les achats impulsifs.
                  </p>
                </div>

                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-300 dark:border-green-700">
                  <h4 className="font-bold text-green-700 dark:text-green-400 mb-2">
                    📊 Comparez les prix
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Utilisez des comparateurs en ligne avant tout achat important (assurances, fournisseurs énergie).
                  </p>
                </div>

                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-300 dark:border-green-700">
                  <h4 className="font-bold text-green-700 dark:text-green-400 mb-2">
                    ☕ Limitez les petites dépenses
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Café, snacks, cigarettes : ces petites dépenses quotidiennes s&apos;accumulent rapidement.
                  </p>
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold mb-3 mt-8">
                ⚠️ Erreurs courantes à éviter dans la gestion de budget
              </h3>

              <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg border border-red-300 dark:border-red-700 mb-6">
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <span className="text-red-600 dark:text-red-400 font-bold">❌</span>
                    <div>
                      <strong className="text-gray-900 dark:text-gray-100">Ne pas prévoir de fonds d&apos;urgence</strong>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        Visez 3-6 mois de dépenses en épargne de précaution pour faire face aux imprévus.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-600 dark:text-red-400 font-bold">❌</span>
                    <div>
                      <strong className="text-gray-900 dark:text-gray-100">Sous-estimer les dépenses variables</strong>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        Analysez vos relevés sur plusieurs mois pour avoir une estimation réaliste.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-600 dark:text-red-400 font-bold">❌</span>
                    <div>
                      <strong className="text-gray-900 dark:text-gray-100">Oublier les dépenses annuelles</strong>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        Impôts, assurances annuelles, entretien voiture : divisez par 12 et incluez-les mensuellement.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-600 dark:text-red-400 font-bold">❌</span>
                    <div>
                      <strong className="text-gray-900 dark:text-gray-100">Être trop restrictif</strong>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        Un budget trop serré est difficile à tenir. Prévoyez un peu de flexibilité pour les plaisirs.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-600 dark:text-red-400 font-bold">❌</span>
                    <div>
                      <strong className="text-gray-900 dark:text-gray-100">Ne pas réviser son budget</strong>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        Votre situation évolue : revoyez votre budget au moins tous les 3-6 mois.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-600 dark:text-red-400 font-bold">❌</span>
                    <div>
                      <strong className="text-gray-900 dark:text-gray-100">Ignorer les petites dépenses</strong>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        5€ par jour en café = 150€/mois. Chaque euro compte dans votre budget global.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold mb-3 mt-8">
                🇫🇷 Bonnes pratiques financières en France
              </h3>

              <div className="space-y-4 mb-6">
                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-300 dark:border-purple-700">
                  <h4 className="font-bold text-purple-700 dark:text-purple-400 mb-2">
                    📌 Livret A et LDDS pour l&apos;épargne de précaution
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Ces livrets réglementés sont idéals pour votre fonds d&apos;urgence : disponibles immédiatement, sans risque, et défiscalisés. Taux actuel : 3% (février 2024).
                  </p>
                </div>

                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-300 dark:border-purple-700">
                  <h4 className="font-bold text-purple-700 dark:text-purple-400 mb-2">
                    🏦 PEL et assurance-vie pour l&apos;épargne moyen terme
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Pour des projets à 4-8 ans (achat immobilier, travaux), ces supports offrent de meilleurs rendements avec avantages fiscaux après 8 ans pour l&apos;assurance-vie.
                  </p>
                </div>

                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-300 dark:border-purple-700">
                  <h4 className="font-bold text-purple-700 dark:text-purple-400 mb-2">
                    📈 PEA et PEA-PME pour investir en bourse
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Exonération d&apos;impôts sur les plus-values après 5 ans (hors prélèvements sociaux). Idéal pour faire fructifier son épargne long terme avec un horizon 10+ ans.
                  </p>
                </div>

                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-300 dark:border-purple-700">
                  <h4 className="font-bold text-purple-700 dark:text-purple-400 mb-2">
                    🏠 Investissement immobilier locatif
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Dispositifs Pinel, Denormandie, LMNP : l&apos;immobilier reste un placement privilégié des Français avec avantages fiscaux possibles. Nécessite un apport et une gestion active.
                  </p>
                </div>

                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-300 dark:border-purple-700">
                  <h4 className="font-bold text-purple-700 dark:text-purple-400 mb-2">
                    💼 Plan d&apos;Épargne Retraite (PER)
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Déduction fiscale des versements, blocage jusqu&apos;à la retraite (sauf cas exceptionnels). Complément idéal pour préparer votre retraite avec avantage fiscal immédiat.
                  </p>
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold mb-3 mt-8">
                🌟 Conseils pour votre bien-être financier
              </h3>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-lg border border-blue-300 dark:border-blue-700 mb-6">
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <span>✅</span>
                    <div>
                      <strong className="text-gray-900 dark:text-gray-100">Payez-vous en premier</strong>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        Dès réception de votre salaire, transférez votre épargne. Ce qui reste sert à vos dépenses.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span>✅</span>
                    <div>
                      <strong className="text-gray-900 dark:text-gray-100">Diversifiez vos sources de revenus</strong>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        Freelance, location, investissements : ne dépendez pas d&apos;une seule source de revenus.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span>✅</span>
                    <div>
                      <strong className="text-gray-900 dark:text-gray-100">Investissez en vous-même</strong>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        Formation, santé, développement personnel : ces investissements rapportent toute votre vie.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span>✅</span>
                    <div>
                      <strong className="text-gray-900 dark:text-gray-100">Négociez vos contrats</strong>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        Assurances, abonnements, prêts : renégociez régulièrement pour optimiser vos dépenses fixes.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span>✅</span>
                    <div>
                      <strong className="text-gray-900 dark:text-gray-100">Éduquez-vous financièrement</strong>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        Lisez des livres, podcasts, blogs sur les finances personnelles. La connaissance est votre meilleur investissement.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold mb-3 mt-8">
                ❓ Questions Fréquentes (FAQ)
              </h3>

              <div className="space-y-4">
                <details className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <summary className="font-bold cursor-pointer text-gray-900 dark:text-gray-100">
                    Combien devrais-je épargner chaque mois ?
                  </summary>
                  <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                    L&apos;idéal est d&apos;épargner au moins 20% de vos revenus nets selon la règle 50/30/20. Si vous débutez, commencez par 10% et augmentez progressivement. Le plus important est la régularité : mieux vaut épargner 50€ chaque mois que 600€ une fois par an.
                  </p>
                </details>

                <details className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <summary className="font-bold cursor-pointer text-gray-900 dark:text-gray-100">
                    Comment gérer un budget avec des revenus irréguliers ?
                  </summary>
                  <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                    Calculez votre revenu mensuel moyen sur 6-12 mois et basez votre budget sur ce montant. Les mois où vous gagnez plus, mettez l&apos;excédent de côté pour compenser les mois creux. Constituez rapidement un fonds d&apos;urgence de 6 mois minimum.
                  </p>
                </details>

                <details className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <summary className="font-bold cursor-pointer text-gray-900 dark:text-gray-100">
                    Que faire si mes dépenses dépassent mes revenus ?
                  </summary>
                  <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                    Analysez d&apos;abord vos dépenses pour identifier où vous pouvez réduire. Commencez par les dépenses variables (loisirs, restaurants). Puis réexaminez vos dépenses fixes (abonnements inutilisés, assurances à renégocier). Si le déséquilibre persiste, envisagez d&apos;augmenter vos revenus (heures supplémentaires, freelance, vente d&apos;objets non utilisés).
                  </p>
                </details>

                <details className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <summary className="font-bold cursor-pointer text-gray-900 dark:text-gray-100">
                    Combien faut-il avoir en épargne de précaution ?
                  </summary>
                  <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                    L&apos;objectif recommandé est de 3 à 6 mois de dépenses courantes. Si vous êtes salarié en CDI, 3 mois peuvent suffire. Si vous êtes indépendant ou avec des revenus variables, visez plutôt 6 mois. Cette épargne doit être disponible immédiatement (Livret A, LDDS).
                  </p>
                </details>

                <details className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <summary className="font-bold cursor-pointer text-gray-900 dark:text-gray-100">
                    La règle 50/30/20 s&apos;applique-t-elle au salaire brut ou net ?
                  </summary>
                  <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                    Toujours au salaire NET (après impôts et cotisations sociales), c&apos;est-à-dire l&apos;argent qui arrive effectivement sur votre compte bancaire. C&apos;est ce montant qui doit servir de base à votre budget.
                  </p>
                </details>

                <details className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <summary className="font-bold cursor-pointer text-gray-900 dark:text-gray-100">
                    Comment rester motivé pour tenir son budget ?
                  </summary>
                  <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                    Fixez-vous des objectifs concrets et mesurables (voyage, achat, épargne). Visualisez vos progrès avec des graphiques. Célébrez les petites victoires. Rendez votre budget flexible pour ne pas vous sentir privé. Impliquez votre famille/conjoint pour un soutien mutuel. Utilisez des outils comme notre planificateur pour automatiser le suivi.
                  </p>
                </details>

                <details className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <summary className="font-bold cursor-pointer text-gray-900 dark:text-gray-100">
                    Dois-je épargner ou rembourser mes crédits en priorité ?
                  </summary>
                  <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                    Commencez par constituer un mini-fonds d&apos;urgence (1000-2000€). Ensuite, remboursez en priorité les dettes à taux élevés (crédit renouvelable, découvert). Pour les crédits à taux bas (immobilier), vous pouvez parallèlement épargner et investir si les rendements sont supérieurs au taux du crédit.
                  </p>
                </details>

                <details className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <summary className="font-bold cursor-pointer text-gray-900 dark:text-gray-100">
                    Les données de mon budget sont-elles sauvegardées ?
                  </summary>
                  <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                    Oui, toutes vos données sont automatiquement sauvegardées dans votre navigateur (localStorage) et restent 100% privées sur votre appareil. Elles ne sont jamais envoyées à un serveur. Pour sauvegarder vos données sur plusieurs appareils ou en faire une copie de sécurité, utilisez le bouton &quot;Exporter CSV&quot;.
                  </p>
                </details>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg border border-yellow-300 dark:border-yellow-700 mt-8">
                <h4 className="font-bold text-yellow-700 dark:text-yellow-400 mb-3 flex items-center gap-2">
                  ⚡ Conseil d&apos;expert
                </h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Le meilleur moment pour créer un budget était hier. Le deuxième meilleur moment est maintenant ! Ne cherchez pas la perfection dès le début. Commencez simple avec quelques catégories principales, et affinez votre budget au fil des mois. L&apos;important est de démarrer et de persévérer. Un budget imparfait que vous suivez vaut mieux qu&apos;un budget parfait que vous abandonnez.
                </p>
              </div>
            </article>
          </section>

          {/* Call to Action */}
          <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg shadow-lg p-6 sm:p-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Prêt à reprendre le contrôle de vos finances ?
            </h2>
            <p className="text-lg mb-6 opacity-90">
              Commencez dès maintenant avec notre planificateur de budget gratuit et suivez vos progrès financiers !
            </p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              🚀 Créer mon budget maintenant
            </button>
          </section>
        </main>
      </div>
    </div>
  );
}
