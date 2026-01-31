"use client";

import Link from "next/link";
import TipCalculator from "@/components/TipCalculator";

export default function TipCalculatorPage() {
  return (
    <div className="min-h-screen flex flex-col p-4 sm:p-6 md:p-8">
      <header className="flex-shrink-0 mb-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-3">
          Calculateur de Pourboire en Ligne Gratuit
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-400 text-sm sm:text-base max-w-3xl mx-auto">
          Calculez rapidement le pourboire et partagez l&apos;addition. Outil gratuit pour restaurants, 
          bars et services avec suggestions de pourcentages et répartition par personne.
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
          <TipCalculator />
        </div>

        {/* SEO Content */}
        <section className="mt-8 space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Le pourboire : origine et signification</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Le pourboire (tip en anglais, du verbe &quot;to tip&quot; signifiant pencher ou donner) est une 
              somme d&apos;argent supplémentaire donnée volontairement à une personne de service pour récompenser 
              la qualité de son service. Cette pratique ancienne varie considérablement selon les pays et les cultures, 
              tant dans son montant que dans son caractère obligatoire ou optionnel.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              L&apos;origine du mot &quot;pourboire&quot; en français vient de &quot;pour boire&quot;, suggérant 
              que l&apos;argent donné permettait au serveur de s&apos;acheter une boisson. Cette étymologie révèle 
              que le pourboire était initialement perçu comme un petit extra personnel plutôt que comme un complément 
              de salaire essentiel.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Notre calculateur de pourboire vous aide à déterminer rapidement le montant approprié selon le type 
              de service, à calculer le total avec le pourboire, et à répartir équitablement l&apos;addition entre 
              plusieurs personnes. Fini les calculs mentaux approximatifs au restaurant !
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Guide des pourcentages de pourboire</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="text-xl font-semibold mb-2">🍽️ Restaurants avec service à table</h3>
                <p className="mb-2">
                  <strong>France :</strong> Le service est généralement inclus (15% légalement), mais un pourboire 
                  supplémentaire de 5-10% est apprécié pour un excellent service.
                </p>
                <p className="mb-2">
                  <strong>États-Unis :</strong> 15-20% est standard (20-25% pour un service exceptionnel). Le 
                  pourboire constitue une part majeure du salaire des serveurs.
                </p>
                <p className="text-sm">
                  <strong>Canada :</strong> 15-20% | <strong>UK :</strong> 10-15% | <strong>Australie :</strong> 10% 
                  optionnel
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">☕ Cafés et service rapide</h3>
                <p>
                  Pour les cafés, coffee shops et restaurants rapides, 1-2€ ou 10% est généralement suffisant. 
                  Aux États-Unis, même pour un café à emporter, un petit pourboire (1$) est courant. Les pots à 
                  pourboire près de la caisse sont là pour ça.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🍕 Livraison de nourriture</h3>
                <p>
                  10-15% du montant total, avec un minimum de 2-3€. Considérez la distance, les conditions météo 
                  et la rapidité du livreur. Par mauvais temps, soyez plus généreux. Pour les applications de 
                  livraison, vérifiez si le pourboire est déjà inclus.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🍷 Bars et comptoirs</h3>
                <p>
                  1-2€ par boisson ou 15-20% de la note totale. Pour des cocktails complexes qui demandent du 
                  travail au barman, penchez vers 20%. Pour une simple bière pression, 1€ suffit.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🚖 Taxis et VTC</h3>
                <p>
                  10-15% de la course, arrondi à l&apos;euro supérieur. Si le chauffeur vous a aidé avec vos 
                  bagages, a pris un chemin particulièrement efficace, ou a été exceptionnellement courtois, 
                  augmentez le pourboire.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Culture du pourboire par pays</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="text-xl font-semibold mb-2">🇫🇷 France</h3>
                <p className="mb-2">
                  Le service est inclus par loi dans tous les établissements (15%). Le pourboire additionnel est 
                  purement optionnel et donné uniquement pour un service exceptionnel. Laisser 5-10% en plus est 
                  considéré comme généreux.
                </p>
                <p className="text-sm italic">
                  Conseil : Si vous payez par carte, demandez si vous pouvez ajouter le pourboire sur le paiement 
                  ou laissez des espèces sur la table.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🇺🇸 États-Unis</h3>
                <p className="mb-2">
                  Le pourboire est quasi-obligatoire et représente la majeure partie du salaire des serveurs 
                  (qui gagnent souvent moins de 3$ de l&apos;heure de base). 15% minimum, 20% standard, 25% pour 
                  excellent service. Ne pas laisser de pourboire est considéré comme très offensant.
                </p>
                <p className="text-sm italic">
                  Attention : Certains restaurants ajoutent automatiquement 18-20% pour les groupes de 6+ personnes.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🇯🇵 Japon</h3>
                <p className="mb-2">
                  Le pourboire n&apos;existe pas et peut même être considéré comme insultant. Le prix affiché est 
                  le prix final. Le service impeccable est attendu et fait partie de la culture professionnelle, 
                  pas quelque chose qui mérite compensation supplémentaire.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🇬🇧 Royaume-Uni</h3>
                <p>
                  10-15% dans les restaurants si le service n&apos;est pas inclus (vérifiez la note). Dans les 
                  pubs, le pourboire n&apos;est pas attendu si vous commandez au bar. Pour les taxis, arrondissez 
                  simplement le prix.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🇦🇺 Australie</h3>
                <p>
                  Le pourboire n&apos;est pas obligatoire mais de plus en plus courant. 10% pour un bon service 
                  dans un restaurant gastronomique. Les salaires minimum sont élevés, donc le service ne dépend 
                  pas des pourboires.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Facteurs influençant le pourboire</h2>
            <div className="space-y-3 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="font-semibold mb-1">⭐ Qualité du service</h3>
                <p className="text-sm">
                  C&apos;est le facteur principal. Service attentif, rapide, souriant = pourboire généreux. 
                  Service désagréable, lent ou négligent = pourboire réduit. Mais distinguez le mauvais service 
                  du serveur de problèmes de cuisine hors de son contrôle.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">🍽️ Type d&apos;établissement</h3>
                <p className="text-sm">
                  Restaurant gastronomique = pourboire plus élevé. Fast-food ou self-service = pourboire minimal 
                  ou inexistant. Le niveau de service attendu et fourni varie selon le type d&apos;établissement.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">👥 Taille du groupe</h3>
                <p className="text-sm">
                  Les grands groupes nécessitent plus de travail pour le serveur. Beaucoup de restaurants ajoutent 
                  automatiquement 18-20% pour les groupes de 6-8 personnes ou plus. Vérifiez votre note pour éviter 
                  de payer deux fois.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">⏰ Circonstances particulières</h3>
                <p className="text-sm">
                  Service le jour férié = plus généreux. Mauvaises conditions météo pour la livraison = plus généreux. 
                  Demandes spéciales ou modifications complexes = plus généreux. Le serveur a résolu un problème = 
                  plus généreux.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">💰 Prix vs effort</h3>
                <p className="text-sm">
                  Dans un restaurant très cher, 20% peut sembler disproportionné si le service était standard. 
                  Inversement, dans un diner bon marché avec un service exceptionnel, dépassez les 20%. Pensez 
                  à l&apos;effort réel du serveur, pas seulement au montant de l&apos;addition.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Partager l&apos;addition : bonnes pratiques</h2>
            <div className="space-y-3 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="font-semibold mb-1">➗ Division égale</h3>
                <p className="text-sm">
                  La méthode la plus simple pour les amis : divisez le total (addition + pourboire) par le nombre 
                  de personnes. Fonctionne bien quand tout le monde a commandé à peu près équitablement. Notre 
                  calculateur fait ce calcul automatiquement.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">📊 Proportionnelle aux commandes</h3>
                <p className="text-sm">
                  Plus juste quand certains ont commandé beaucoup plus que d&apos;autres. Calculez le pourcentage 
                  de chacun sur le total avant pourboire, puis appliquez ce pourcentage au total avec pourboire. 
                  Plus complexe mais plus équitable.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">💳 Applications de paiement</h3>
                <p className="text-sm">
                  Utilisez des apps comme Lydia, PayPal ou Splitwise pour faciliter les remboursements. Une personne 
                  paie la note complète, les autres la remboursent ensuite numériquement. Évite les problèmes de 
                  monnaie et simplifie le paiement au restaurant.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">🍷 Partagés vs individuels</h3>
                <p className="text-sm">
                  Pour les éléments partagés (entrées, bouteille de vin, desserts), divisez-les également entre 
                  les participants concernés. Pour les plats individuels, chacun paie le sien. Cette méthode hybride 
                  est souvent la plus juste.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Avantages de notre calculateur de pourboire</h2>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Calculs instantanés</strong> - Montant du pourboire et total en temps réel
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Suggestions de pourcentages</strong> - 10%, 15%, 20%, 25% ou personnalisé
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Répartition par personne</strong> - Divisez facilement l&apos;addition entre convives
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>100% Gratuit</strong> - Calculs illimités sans inscription
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Mobile-friendly</strong> - Utilisez directement au restaurant sur votre smartphone
                </span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
