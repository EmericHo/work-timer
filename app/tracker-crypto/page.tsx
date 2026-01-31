"use client";

import Link from "next/link";
import CryptoPortfolioTracker from "@/components/CryptoPortfolioTracker";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faBullseye, faChartBar, faChartLine, faCoins, faExclamationTriangle, faFileAlt, faGift, faGlobe, faHashtag, faKey, faLaptop, faLightbulb, faLock, faMobileAlt, faMoneyBill, faRocket, faSearch, faShieldAlt, faSync, faUniversity, faVideo } from '@fortawesome/free-solid-svg-icons';

export default function CryptoTrackerPage() {
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
            <FontAwesomeIcon icon={faCoins} className="inline" /> Tracker de Portfolio Crypto Gratuit
          </h1>
          <p className="text-center text-gray-600 dark:text-gray-400 text-base sm:text-lg max-w-3xl mx-auto">
            Suivez vos investissements en cryptomonnaies facilement. Gérez Bitcoin, Ethereum et 15+ cryptos populaires avec calcul automatique de vos profits et pertes.
          </p>
        </header>

        <main className="space-y-8">
          {/* Crypto Tracker Component */}
          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 sm:p-6 md:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
              <FontAwesomeIcon icon={faChartBar} className="inline" /> Mon Portfolio Crypto
            </h2>
            <CryptoPortfolioTracker />
          </section>

          {/* Investment Disclaimer */}
          <section className="bg-red-50 dark:bg-red-900/20 border-2 border-red-300 dark:border-red-700 rounded-lg p-4 sm:p-6">
            <h3 className="text-xl font-bold text-red-600 dark:text-red-400 mb-3">
              <FontAwesomeIcon icon={faExclamationTriangle} className="inline" /> Avertissement Important sur les Risques
            </h3>
            <div className="text-gray-700 dark:text-gray-300 space-y-2 text-sm">
              <p>
                <strong>Cet outil est destiné uniquement au suivi et à la gestion de votre portfolio crypto.</strong> Il ne constitue en aucun cas un conseil en investissement financier.
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Les cryptomonnaies sont des actifs extrêmement volatils et risqués</li>
                <li>Vous pouvez perdre tout ou partie de votre investissement</li>
                <li>N&apos;investissez que l&apos;argent que vous pouvez vous permettre de perdre</li>
                <li>Faites vos propres recherches (DYOR - Do Your Own Research)</li>
                <li>Consultez un conseiller financier professionnel avant d&apos;investir</li>
                <li>Les performances passées ne préjugent pas des performances futures</li>
              </ul>
            </div>
          </section>

          {/* Educational Content */}
          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 sm:p-6 md:p-8">
            <article className="prose prose-sm sm:prose-base lg:prose-lg dark:prose-invert max-w-none">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                <FontAwesomeIcon icon={faCoins} className="inline" /> Qu&apos;est-ce qu&apos;un tracker de portfolio crypto ?
              </h2>

              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Un tracker de portfolio crypto est un outil qui permet de suivre et de gérer l&apos;ensemble de vos investissements en cryptomonnaies. Il centralise toutes vos positions (Bitcoin, Ethereum, altcoins) et calcule automatiquement vos profits, pertes et la performance globale de votre portefeuille.
              </p>

              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Notre tracker gratuit vous permet de saisir vos positions crypto avec le prix d&apos;achat et le prix actuel, puis il calcule automatiquement votre profit ou perte en euros et en pourcentage. Toutes vos données restent stockées localement dans votre navigateur pour une sécurité maximale.
              </p>

              <h3 className="text-xl sm:text-2xl font-bold mb-3 mt-8">
                <FontAwesomeIcon icon={faLightbulb} className="inline" /> Pourquoi tracker son portfolio crypto ?
              </h3>

              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-300 dark:border-blue-700 mb-6">
                <h4 className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-3">
                  Avantages d&apos;un suivi rigoureux de vos cryptos
                </h4>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                  <li><strong>Vision globale</strong> : Visualisez instantanément la valeur totale de votre portfolio et sa répartition</li>
                  <li><strong>Calcul de performance</strong> : Connaissez précisément vos gains ou pertes par crypto et au global</li>
                  <li><strong>Prise de décision éclairée</strong> : Identifiez vos meilleures et pires positions pour optimiser votre stratégie</li>
                  <li><strong>Gestion fiscale</strong> : Gardez une trace de vos transactions pour faciliter votre déclaration d&apos;impôts</li>
                  <li><strong>Contrôle émotionnel</strong> : Évitez les décisions impulsives en ayant une vue d&apos;ensemble rationnelle</li>
                  <li><strong>Rééquilibrage</strong> : Identifiez quand rééquilibrer votre portfolio selon votre stratégie</li>
                </ul>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold mb-3 mt-8">
                <FontAwesomeIcon icon={faChartLine} className="inline" /> Comment gérer efficacement son portfolio crypto ?
              </h3>

              <div className="space-y-4 mb-6">
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-2">
                    <FontAwesomeIcon icon={faHashtag} className="inline" /> Diversifiez vos investissements
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Ne mettez pas tous vos œufs dans le même panier. Répartissez vos investissements entre différentes cryptomonnaies (Bitcoin, Ethereum, altcoins) pour limiter les risques. Une règle courante : 40-50% Bitcoin, 25-30% Ethereum, 20-35% altcoins prometteurs.
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-2">
                    <FontAwesomeIcon icon={faHashtag} className="inline" /> Investissez régulièrement (DCA)
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    La stratégie DCA (Dollar Cost Averaging) consiste à investir un montant fixe à intervalles réguliers, indépendamment du prix. Cela lisse le prix d&apos;achat moyen et réduit l&apos;impact de la volatilité. Exemple : 100€ par semaine ou 400€ par mois.
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-2">
                    <FontAwesomeIcon icon={faHashtag} className="inline" /> Définissez des objectifs clairs
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Avant d&apos;investir, définissez vos objectifs : horizon de placement (court/moyen/long terme), objectif de rendement, seuil de perte acceptable. Fixez des niveaux de prise de profit (take profit) et de stop loss pour automatiser vos décisions.
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-2">
                    <FontAwesomeIcon icon={faHashtag} className="inline" /> Ne cédez pas à la panique
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Le marché crypto est extrêmement volatil. Des variations de +/- 20% en une journée sont normales. Évitez de vendre en panique lors des baisses (FOMO inverse) ou d&apos;acheter impulsivement lors des hausses (FOMO). Tenez-vous à votre stratégie initiale.
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-2">
                    <FontAwesomeIcon icon={faHashtag} className="inline" /> Sécurisez vos cryptos
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Pour les montants importants, utilisez un hardware wallet (Ledger, Trezor). Activez l&apos;authentification à deux facteurs (2FA) sur tous vos comptes. Ne partagez jamais vos clés privées ou phrases de récupération. Méfiez-vous des arnaques et du phishing.
                  </p>
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold mb-3 mt-8">
                <FontAwesomeIcon icon={faSearch} className="inline" /> Les cryptomonnaies populaires expliquées
              </h3>

              <div className="space-y-4 mb-6">
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-2">
                    ₿ Bitcoin (BTC) - L&apos;or numérique
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Première et plus importante cryptomonnaie, créée en 2009 par Satoshi Nakamoto. Bitcoin est considéré comme une réserve de valeur numérique (digital gold). Offre limitée à 21 millions de BTC. Utilisé comme protection contre l&apos;inflation et moyen d&apos;échange décentralisé.
                  </p>
                </div>

                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-2">
                    ⟠ Ethereum (ETH) - La blockchain programmable
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Plateforme de smart contracts lancée en 2015. Ethereum permet de créer des applications décentralisées (dApps), des NFTs et des protocoles DeFi. Après The Merge, Ethereum utilise la preuve d&apos;enjeu (Proof of Stake) qui réduit sa consommation énergétique de 99,95%.
                  </p>
                </div>

                <div className="border-l-4 border-yellow-500 pl-4">
                  <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-2">
                    🔸 BNB (BNB) - Token de Binance
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Cryptomonnaie native de la Binance Smart Chain (BSC). Utilisée pour payer les frais de transaction sur Binance avec réduction, participer aux lancements de tokens (Launchpad), et interagir avec l&apos;écosystème BSC. BNB est régulièrement brûlé (burn) pour réduire l&apos;offre.
                  </p>
                </div>

                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-2">
                    🔵 Cardano (ADA) - Blockchain académique
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Plateforme de smart contracts fondée sur la recherche académique et évaluée par les pairs. Cardano utilise le protocole Ouroboros (Proof of Stake). Objectif : créer une blockchain évolutive, durable et interopérable pour les applications décentralisées et les systèmes financiers.
                  </p>
                </div>

                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-2">
                    ◎ Solana (SOL) - Blockchain ultra-rapide
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Blockchain haute performance capable de traiter des milliers de transactions par seconde avec des frais minimes. Solana utilise un mécanisme hybride Proof of History (PoH) et Proof of Stake. Populaire pour les NFTs, la DeFi et les applications nécessitant une grande scalabilité.
                  </p>
                </div>

                <div className="border-l-4 border-gray-500 pl-4">
                  <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-2">
                    ✕ XRP (XRP) - Paiements internationaux
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Cryptomonnaie développée par Ripple Labs pour faciliter les paiements transfrontaliers rapides et peu coûteux. Utilisée par des institutions financières pour les transferts internationaux. XRP vise à remplacer le système SWIFT traditionnel pour les transactions interbancaires.
                  </p>
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold mb-3 mt-8">
                <FontAwesomeIcon icon={faChartBar} className="inline" /> Stratégies d&apos;investissement crypto
              </h3>

              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-300 dark:border-green-700 mb-6">
                <h4 className="text-lg font-bold text-green-600 dark:text-green-400 mb-3">
                  <FontAwesomeIcon icon={faBullseye} className="inline" /> Les principales approches d&apos;investissement
                </h4>
                
                <div className="space-y-4 text-gray-700 dark:text-gray-300">
                  <div>
                    <h5 className="font-bold mb-2"><FontAwesomeIcon icon={faChartLine} className="inline" /> HODL (Hold On for Dear Life)</h5>
                    <p className="text-sm">
                      Stratégie d&apos;investissement à long terme consistant à acheter et conserver ses cryptos pendant plusieurs années, indépendamment des fluctuations du marché. Adaptée aux investisseurs patients qui croient au potentiel à long terme de la blockchain. Avantage : fiscalité avantageuse en France après 2 ans de détention.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-bold mb-2"><FontAwesomeIcon icon={faMoneyBill} className="inline" /> DCA (Dollar Cost Averaging)</h5>
                    <p className="text-sm">
                      Investissement d&apos;un montant fixe à intervalles réguliers (hebdomadaire, mensuel). Cette méthode réduit l&apos;impact de la volatilité en lissant le prix d&apos;achat moyen. Idéale pour les débutants qui veulent investir progressivement sans stresser sur le timing d&apos;entrée parfait.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-bold mb-2"><FontAwesomeIcon icon={faBullseye} className="inline" /> Trading actif</h5>
                    <p className="text-sm">
                      Achat et vente fréquents pour profiter des variations de prix à court terme. Nécessite une expertise technique (analyse chartiste, indicateurs), du temps et une gestion stricte du risque. Très risqué pour les débutants. Implique une fiscalité lourde en France (flat tax 30% sur chaque plus-value).
                    </p>
                  </div>

                  <div>
                    <h5 className="font-bold mb-2"><FontAwesomeIcon icon={faSync} className="inline" /> Rééquilibrage de portfolio</h5>
                    <p className="text-sm">
                      Ajustement périodique de la répartition de votre portfolio pour maintenir vos allocations cibles. Exemple : si Bitcoin passe de 50% à 70% de votre portfolio grâce à sa hausse, vous en vendez une partie pour racheter d&apos;autres cryptos et revenir à 50%. Force à vendre haut et acheter bas.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-bold mb-2">💎 Staking et DeFi</h5>
                    <p className="text-sm">
                      Mise en jeu de vos cryptos pour sécuriser un réseau blockchain (staking) ou fournir de la liquidité dans des protocoles DeFi en échange de récompenses. Génère un revenu passif (5-20% APY selon les cryptos). Attention aux risques : smart contract bugs, impermanent loss, plateformes non régulées.
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold mb-3 mt-8">
                <FontAwesomeIcon icon={faShieldAlt} className="inline" /> Gestion du risque en crypto
              </h3>

              <div className="space-y-4 mb-6">
                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-300 dark:border-yellow-700">
                  <h4 className="font-bold text-yellow-800 dark:text-yellow-300 mb-2">
                    <FontAwesomeIcon icon={faExclamationTriangle} className="inline" /> Règle d&apos;or : N&apos;investissez que ce que vous pouvez perdre
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Les cryptomonnaies sont des actifs hautement spéculatifs. Leur valeur peut chuter drastiquement ou même atteindre zéro. N&apos;investissez jamais votre épargne de précaution, l&apos;argent du loyer ou des dettes. Limitez votre exposition crypto à 5-10% maximum de votre patrimoine total.
                  </p>
                </div>

                <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                  <li><strong>Diversification</strong> : Ne misez pas tout sur une seule crypto, même Bitcoin</li>
                  <li><strong>Position sizing</strong> : Limitez chaque position individuelle à 5-15% de votre portfolio crypto</li>
                  <li><strong>Stop loss</strong> : Définissez un seuil de perte acceptable (ex: -30%) et respectez-le</li>
                  <li><strong>Take profit</strong> : Prenez des bénéfices progressivement lors des hausses importantes</li>
                  <li><strong>Évitez l&apos;effet de levier</strong> : Le trading avec leverage amplifie gains ET pertes (très risqué)</li>
                  <li><strong>Recherche (DYOR)</strong> : Comprenez dans quoi vous investissez avant d&apos;acheter</li>
                  <li><strong>Méfiez-vous du FOMO</strong> : N&apos;achetez pas par peur de rater une opportunité</li>
                  <li><strong>Attention aux arnaques</strong> : Promesses de rendements garantis, pyramides, faux tokens</li>
                </ul>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold mb-3 mt-8">
                💶 Fiscalité des cryptomonnaies en France
              </h3>

              <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg border border-purple-300 dark:border-purple-700 mb-6">
                <h4 className="text-lg font-bold text-purple-600 dark:text-purple-400 mb-3">
                  📋 Régime fiscal français (2025)
                </h4>
                
                <div className="space-y-4 text-gray-700 dark:text-gray-300">
                  <div>
                    <h5 className="font-bold mb-2"><FontAwesomeIcon icon={faUniversity} className="inline" /> Flat tax de 30% sur les plus-values</h5>
                    <p className="text-sm mb-2">
                      Les gains réalisés lors de la conversion de cryptomonnaies en euros (ou autre monnaie fiat) sont imposés au taux forfaitaire de 30% (PFU - Prélèvement Forfaitaire Unique) :
                    </p>
                    <ul className="list-disc pl-6 text-sm space-y-1">
                      <li>17,2% de prélèvements sociaux</li>
                      <li>12,8% d&apos;impôt sur le revenu</li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-bold mb-2"><FontAwesomeIcon icon={faSync} className="inline" /> Échanges crypto-crypto non imposables</h5>
                    <p className="text-sm">
                      Les échanges entre cryptomonnaies (BTC vers ETH par exemple) ne sont PAS imposables tant que vous ne convertissez pas en euros. Seule la conversion finale en monnaie fiat déclenche l&apos;imposition. La plus-value est calculée sur la globalité de votre portefeuille.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-bold mb-2"><FontAwesomeIcon icon={faMoneyBill} className="inline" /> Calcul de la plus-value globale</h5>
                    <p className="text-sm">
                      La plus-value imposable = (Prix de cession - Prix d&apos;acquisition) × (Montant du retrait / Valeur globale du portefeuille). Cette méthode au prorata tient compte de l&apos;ensemble de vos avoirs crypto, pas transaction par transaction.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-bold mb-2"><FontAwesomeIcon icon={faFileAlt} className="inline" /> Obligations déclaratives</h5>
                    <p className="text-sm mb-2">
                      Vous devez déclarer :
                    </p>
                    <ul className="list-disc pl-6 text-sm space-y-1">
                      <li>Vos comptes ouverts sur des plateformes d&apos;échange étrangères (formulaire 3916-bis)</li>
                      <li>Les plus-values réalisées lors de cessions en euros (formulaire 2086)</li>
                      <li>Sanctions lourdes en cas de non-déclaration (750€ à 1500€ par compte non déclaré)</li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-bold mb-2"><FontAwesomeIcon icon={faGift} className="inline" /> Exonération pour petites cessions</h5>
                    <p className="text-sm">
                      Si vos cessions annuelles totales sont inférieures à 305€, vous êtes exonéré d&apos;impôt sur les plus-values crypto. Au-delà, la totalité de la plus-value est imposable.
                    </p>
                  </div>

                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg mt-4">
                    <p className="text-sm italic">
                      <FontAwesomeIcon icon={faExclamationTriangle} className="inline" /> <strong>Important :</strong> Cette information est donnée à titre indicatif. La fiscalité crypto évolue régulièrement. Consultez un expert-comptable ou fiscaliste spécialisé pour votre situation personnelle. Conservez tous vos justificatifs de transactions.
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold mb-3 mt-8">
                <FontAwesomeIcon icon={faLock} className="inline" /> Conseils de sécurité pour les investisseurs crypto
              </h3>

              <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg border border-red-300 dark:border-red-700 mb-6">
                <h4 className="text-lg font-bold text-red-600 dark:text-red-400 mb-3">
                  <FontAwesomeIcon icon={faShieldAlt} className="inline" /> Protégez vos actifs numériques
                </h4>
                
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <div>
                    <h5 className="font-bold mb-1"><FontAwesomeIcon icon={faKey} className="inline" /> Utilisez un hardware wallet pour les montants importants</h5>
                    <p className="text-sm">
                      Ledger Nano X/S ou Trezor Model One/T sont des portefeuilles physiques qui stockent vos clés privées hors ligne. Investissement de 60-250€ indispensable si vous détenez plus de 1000€ en crypto. &quot;Not your keys, not your coins&quot;.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-bold mb-1"><FontAwesomeIcon icon={faMobileAlt} className="inline" /> Activez l&apos;authentification à deux facteurs (2FA)</h5>
                    <p className="text-sm">
                      Utilisez Google Authenticator, Authy ou une clé de sécurité physique (YubiKey) sur tous vos comptes. N&apos;utilisez JAMAIS la 2FA par SMS (vulnérable au SIM swapping). Sauvegardez vos codes de récupération.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-bold mb-1">🔑 Sécurisez votre seed phrase (phrase de récupération)</h5>
                    <p className="text-sm">
                      Votre phrase de 12 ou 24 mots est la clé ultime de vos cryptos. Notez-la sur papier (jamais numériquement), conservez plusieurs copies dans des lieux sûrs différents (coffre-fort, chez un proche de confiance). Ne la partagez avec PERSONNE, jamais.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-bold mb-1">🎣 Méfiez-vous du phishing et des arnaques</h5>
                    <p className="text-sm">
                      Vérifiez toujours l&apos;URL des sites (https, orthographe exacte). Ne cliquez pas sur des liens suspects dans des emails/messages. Aucun support officiel ne vous demandera jamais vos clés privées ou seed phrase. Si c&apos;est trop beau pour être vrai, c&apos;est une arnaque.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-bold mb-1"><FontAwesomeIcon icon={faGlobe} className="inline" /> Utilisez des plateformes réputées et régulées</h5>
                    <p className="text-sm">
                      Privilégiez les exchanges établis : Binance, Coinbase, Kraken, Crypto.com. Vérifiez qu&apos;ils sont enregistrés auprès de l&apos;AMF en France. Évitez les plateformes obscures promettant des rendements garantis.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-bold mb-1"><FontAwesomeIcon icon={faLaptop} className="inline" /> Sécurisez votre environnement informatique</h5>
                    <p className="text-sm">
                      Antivirus à jour, système d&apos;exploitation mis à jour, évitez les réseaux WiFi publics pour accéder à vos comptes crypto. Utilisez un ordinateur dédié pour les transactions importantes si possible.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-bold mb-1">🤫 Restez discret sur vos investissements</h5>
                    <p className="text-sm">
                      Ne partagez pas publiquement (réseaux sociaux) le montant de vos avoirs crypto. Vous devenez une cible pour les hackers et escrocs. La confidentialité est votre meilleure protection.
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold mb-3 mt-8">
                ❓ FAQ - Questions fréquentes sur le tracker crypto
              </h3>

              <div className="space-y-4 mb-6">
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-2">
                    Mes données sont-elles sécurisées ?
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Oui, absolument. Toutes vos données sont stockées uniquement dans le localStorage de votre navigateur. Rien n&apos;est envoyé vers nos serveurs ou des tiers. Vos informations restent 100% privées et sur votre appareil. Pensez à exporter régulièrement vos données en CSV comme sauvegarde.
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-2">
                    Pourquoi les prix ne se mettent pas à jour automatiquement ?
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Notre tracker est volontairement simple et ne nécessite pas d&apos;API payante. Vous devez mettre à jour manuellement les prix actuels en consultant un site de cours crypto (CoinMarketCap, CoinGecko) puis en modifiant vos positions. Cela vous évite aussi de partager vos données avec des APIs tierces.
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-2">
                    Puis-je ajouter plusieurs positions de la même crypto ?
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Oui ! Vous pouvez créer plusieurs entrées pour la même cryptomonnaie avec des prix d&apos;achat différents. C&apos;est utile si vous avez acheté à plusieurs moments (DCA). Le tracker calculera séparément le profit/perte de chaque position.
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-2">
                    Comment utiliser l&apos;export CSV ?
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Le bouton &quot;Exporter en CSV&quot; génère un fichier tableur avec toutes vos positions et statistiques. Vous pouvez l&apos;ouvrir dans Excel, Google Sheets ou Numbers. C&apos;est utile pour la sauvegarde, l&apos;analyse avancée ou pour fournir des justificatifs à votre comptable.
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-2">
                    Le tracker calcule-t-il mes impôts ?
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Non, notre tracker montre uniquement vos profits/pertes bruts. Le calcul fiscal crypto en France est complexe (méthode au prorata, formulaire 2086). Nous recommandons d&apos;utiliser un logiciel spécialisé (Waltio, Crypto-Tax) ou de consulter un expert-comptable pour vos déclarations fiscales.
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-2">
                    Où puis-je acheter des cryptomonnaies ?
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Les principales plateformes régulées en France : Binance, Coinbase, Kraken, Crypto.com, Bitpanda. Comparez les frais (0,1% à 2% par transaction) et vérifiez que la plateforme est enregistrée auprès de l&apos;AMF. Pour débuter, privilégiez les exchanges réputés avec support client français.
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-2">
                    Combien investir dans la crypto quand on débute ?
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Commencez petit : 50-200€ pour apprendre le fonctionnement sans risque majeur. N&apos;investissez QUE de l&apos;argent dont vous n&apos;avez pas besoin. Une règle courante : maximum 5-10% de votre patrimoine total en crypto. Augmentez progressivement après avoir acquis de l&apos;expérience et de la connaissance.
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-2">
                    Quelle crypto acheter pour débuter ?
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Pour débuter, privilégiez les cryptos établies : Bitcoin (BTC) et Ethereum (ETH) représentent 60-70% du marché et sont les moins risquées. Ensuite, vous pouvez diversifier avec des altcoins du top 20 (BNB, Cardano, Solana). Évitez les microcaps et shitcoins tant que vous n&apos;êtes pas expérimenté. Faites toujours vos recherches (DYOR).
                  </p>
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold mb-3 mt-8">
                🎓 Ressources pour approfondir vos connaissances crypto
              </h3>

              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-300 dark:border-blue-700">
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li><strong><FontAwesomeIcon icon={faChartBar} className="inline" /> Sites de cours :</strong> CoinMarketCap, CoinGecko, TradingView</li>
                  <li><strong>📰 Actualités crypto :</strong> CoinDesk, Cointelegraph, The Block, Journal du Coin (français)</li>
                  <li><strong><FontAwesomeIcon icon={faVideo} className="inline" /> Chaînes YouTube :</strong> Hasheur (français), Coin Bureau (anglais), Benjamin Cowen</li>
                  <li><strong><FontAwesomeIcon icon={faBook} className="inline" /> Livres :</strong> &quot;Bitcoin Standard&quot; (Saifedean Ammous), &quot;The Infinite Machine&quot; (Camila Russo)</li>
                  <li><strong>🎓 Formations :</strong> Coursera Blockchain, Binance Academy, Coinbase Learn</li>
                  <li><strong>💬 Communautés :</strong> Reddit r/CryptoCurrency, r/Bitcoin, forums BitcoinTalk</li>
                  <li><strong><FontAwesomeIcon icon={faMobileAlt} className="inline" /> Outils :</strong> Delta, Blockfolio pour le tracking, Etherscan pour explorer Ethereum</li>
                  <li><strong>🇫🇷 Régulation :</strong> Site de l&apos;AMF (Autorité des Marchés Financiers)</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-lg border border-blue-300 dark:border-blue-700 mt-8">
                <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                  <FontAwesomeIcon icon={faRocket} className="inline" /> Commencez votre voyage crypto en toute sécurité
                </h4>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  L&apos;investissement dans les cryptomonnaies peut être passionnant et potentiellement lucratif, mais il nécessite de la prudence, de la patience et une formation continue. Utilisez notre tracker gratuit pour suivre vos positions, mais n&apos;oubliez jamais :
                </p>
                <ul className="list-disc pl-6 space-y-1 text-gray-700 dark:text-gray-300">
                  <li>Investissez uniquement ce que vous pouvez vous permettre de perdre</li>
                  <li>Faites vos propres recherches (DYOR) avant chaque investissement</li>
                  <li>Diversifiez votre portfolio pour limiter les risques</li>
                  <li>Sécurisez vos cryptos avec un hardware wallet pour les montants importants</li>
                  <li>Pensez long terme : les marchés crypto sont cycliques (bull/bear markets)</li>
                  <li>Continuez à vous former et restez informé des évolutions du secteur</li>
                </ul>
              </div>
            </article>
          </section>
        </main>
      </div>
    </div>
  );
}
