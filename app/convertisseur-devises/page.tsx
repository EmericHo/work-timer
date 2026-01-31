"use client";

import Link from "next/link";
import CurrencyConverter from "@/components/CurrencyConverter";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar, faKey, faPlane } from '@fortawesome/free-solid-svg-icons';

export default function CurrencyConverterPage() {
  return (
    <div className="min-h-screen flex flex-col p-4 sm:p-6 md:p-8">
      <header className="flex-shrink-0 mb-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-3">
          Convertisseur de Devises en Ligne Gratuit
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-400 text-sm sm:text-base max-w-3xl mx-auto">
          Convertissez instantanément entre plus de 150 devises mondiales avec des taux de change en temps réel. 
          Outil gratuit pour voyageurs, traders et professionnels du commerce international.
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
          <CurrencyConverter />
        </div>

        {/* SEO Content */}
        <section className="mt-8 space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Comprendre les taux de change</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Un taux de change représente la valeur d&apos;une devise par rapport à une autre. Il détermine 
              combien d&apos;unités de la devise B vous recevez en échange d&apos;une unité de la devise A. 
              Ces taux fluctuent constamment en fonction de l&apos;offre et de la demande sur le marché des 
              changes (Forex), qui est le plus grand marché financier du monde avec un volume quotidien 
              dépassant 6 000 milliards de dollars.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Les taux de change sont influencés par de nombreux facteurs : la stabilité politique et 
              économique d&apos;un pays, les taux d&apos;intérêt fixés par les banques centrales, l&apos;inflation, 
              la balance commerciale, et même les événements géopolitiques majeurs. Par exemple, une hausse 
              des taux d&apos;intérêt dans un pays tend à renforcer sa devise en attirant les investissements 
              étrangers.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Notre convertisseur utilise des taux de change mis à jour régulièrement provenant de sources 
              fiables. Ces taux reflètent le marché interbancaire, bien que les taux que vous obtiendrez 
              réellement lors d&apos;un échange incluront généralement une commission ou une marge appliquée 
              par votre banque ou votre service de change.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Les bases du marché Forex</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="text-xl font-semibold mb-2">💹 Qu&apos;est-ce que le Forex ?</h3>
                <p className="mb-2">
                  Le Foreign Exchange Market (Forex ou FX) est le marché mondial décentralisé où s&apos;échangent 
                  les devises. Contrairement aux bourses traditionnelles, le Forex fonctionne 24h/24, 5 jours 
                  sur 7, permettant aux traders du monde entier d&apos;acheter et vendre des devises à tout moment.
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Les principales paires de devises : EUR/USD, USD/JPY, GBP/USD, USD/CHF</li>
                  <li>Ouvert du dimanche soir au vendredi soir (heure GMT)</li>
                  <li>Les transactions s&apos;effectuent par lots (lots standard de 100 000 unités)</li>
                  <li>L&apos;effet de levier permet de trader avec des montants supérieurs au capital</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faChartBar} className="inline" /> Devises majeures et exotiques</h3>
                <p className="mb-2">
                  Les devises sont classées en catégories selon leur liquidité et leur volume d&apos;échange :
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>Devises majeures</strong> : USD, EUR, JPY, GBP, CHF, CAD, AUD, NZD</li>
                  <li><strong>Devises mineures</strong> : Paires n&apos;incluant pas l&apos;USD (EUR/GBP, EUR/JPY)</li>
                  <li><strong>Devises exotiques</strong> : TRY (lire turque), ZAR (rand sud-africain), MXN (peso mexicain)</li>
                  <li>Les devises majeures offrent généralement des spreads plus faibles et plus de liquidité</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Conseils pour voyager avec des devises étrangères</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faPlane} className="inline" /> Avant le départ</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Surveillez les taux de change plusieurs semaines avant votre voyage</li>
                  <li>Évitez les bureaux de change dans les aéroports (taux généralement défavorables)</li>
                  <li>Commandez des devises auprès de votre banque à l&apos;avance pour de meilleurs taux</li>
                  <li>Informez votre banque de vos dates de voyage pour éviter le blocage de votre carte</li>
                  <li>Notez les numéros d&apos;urgence de votre banque en cas de perte ou vol</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">💳 Sur place</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Les distributeurs ATM offrent souvent de meilleurs taux que les bureaux de change</li>
                  <li>Refusez la conversion dynamique des devises (DCC) qui applique des taux moins favorables</li>
                  <li>Privilégiez les cartes bancaires sans frais de change à l&apos;étranger</li>
                  <li>Conservez toujours un peu de cash pour les petits commerces n&apos;acceptant pas les cartes</li>
                  <li>Négociez les taux dans les bureaux de change, surtout pour de gros montants</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faKey} className="inline" /> Sécurité financière</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Répartissez votre argent dans plusieurs endroits (portefeuille, sac, coffre d&apos;hôtel)</li>
                  <li>Utilisez une ceinture ou pochette cachée pour les grosses sommes</li>
                  <li>Photocopiez vos cartes bancaires et conservez les copies séparément</li>
                  <li>Activez les notifications SMS/email pour chaque transaction</li>
                  <li>Envisagez une carte prépayée pour limiter les risques en cas de vol</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Comprendre les frais de change</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Lorsque vous échangez des devises, plusieurs types de frais peuvent s&apos;appliquer. Le spread 
              est la différence entre le taux d&apos;achat et le taux de vente appliqué par l&apos;intermédiaire. 
              Par exemple, si le taux du marché est 1 EUR = 1,10 USD, un bureau de change pourrait acheter vos 
              euros à 1,08 USD et les vendre à 1,12 USD, empochant la différence comme profit.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Les banques traditionnelles ajoutent souvent une commission fixe (entre 3€ et 10€) en plus d&apos;un 
              spread défavorable. Les services en ligne comme Wise (anciennement TransferWise) ou Revolut offrent 
              généralement des taux beaucoup plus proches du taux du marché réel avec des frais transparents, 
              ce qui peut vous faire économiser considérablement sur les gros montants.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Pour les paiements par carte à l&apos;étranger, les banques appliquent généralement un frais de 
              transaction internationale (environ 2-3% du montant) plus un spread sur le taux de change. 
              Certaines cartes premium ou néobanques offrent cependant des paiements sans frais jusqu&apos;à un 
              certain plafond mensuel, ce qui peut être très avantageux pour les voyageurs réguliers.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Questions fréquentes sur la conversion de devises</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Quel est le meilleur moment pour échanger des devises ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Il n&apos;existe pas de moment parfait universel, car les taux fluctuent constamment. Surveillez 
                  les tendances sur plusieurs semaines. Si vous voyez un taux favorable pour votre échange, 
                  n&apos;attendez pas indéfiniment pour un taux encore meilleur. Pour les gros montants, envisagez 
                  de fractionner vos échanges pour moyenner le taux.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Faut-il échanger de l&apos;argent avant de partir en voyage ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Oui, avoir de la monnaie locale pour les premiers jours est recommandé. Échangez une petite 
                  somme (50-100€) pour couvrir le transport depuis l&apos;aéroport, les pourboires et les premiers 
                  achats. Une fois sur place, retirez au besoin dans les distributeurs locaux qui offrent 
                  généralement de meilleurs taux.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Les cryptomonnaies sont-elles une bonne alternative pour les transactions internationales ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Les cryptomonnaies peuvent offrir des frais de transaction réduits pour les transferts 
                  internationaux, mais leur volatilité importante représente un risque. De plus, leur acceptation 
                  reste limitée pour les paiements quotidiens. Elles peuvent être intéressantes pour des transferts 
                  spécifiques mais ne remplacent pas encore les devises traditionnelles pour le voyage.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Comment éviter les frais cachés lors d&apos;un change de devise ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Comparez toujours le taux proposé avec le taux du marché réel. Demandez explicitement tous les 
                  frais (commission fixe, pourcentage, frais de service). Refusez la conversion dynamique de 
                  devise quand vous payez par carte. Utilisez des services transparents qui affichent clairement 
                  le taux exact et tous les frais avant la transaction.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
