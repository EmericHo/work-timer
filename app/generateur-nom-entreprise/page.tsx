"use client";

import Link from "next/link";
import BusinessNameGenerator from "@/components/BusinessNameGenerator";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBalanceScale, faBriefcase, faBullseye, faGlobe, faMobileAlt, faRocket, faTimes } from '@fortawesome/free-solid-svg-icons';

export default function BusinessNameGeneratorPage() {
  return (
    <div className="min-h-screen flex flex-col p-4 sm:p-6 md:p-8">
      <header className="flex-shrink-0 mb-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-3">
          Générateur de Nom d&apos;Entreprise
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-400 text-sm sm:text-base max-w-3xl mx-auto">
          Trouvez le nom parfait pour votre entreprise ou startup.
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
          <BusinessNameGenerator />
        </div>

        {/* SEO Content */}
        <section className="mt-8 space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Pourquoi le nom d&apos;entreprise est-il si important ?</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Le nom de votre entreprise est bien plus qu&apos;une simple étiquette - c&apos;est le premier point de contact 
              avec vos clients potentiels et l&apos;élément central de votre identité de marque. Un bon nom d&apos;entreprise 
              peut faire la différence entre le succès et l&apos;anonymat dans un marché concurrentiel.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Le nom de votre entreprise apparaîtra partout : sur votre site web, vos cartes de visite, vos factures, 
              vos produits, vos campagnes marketing et dans l&apos;esprit de vos clients. Il doit être mémorable, facile 
              à prononcer, unique et refléter les valeurs et la mission de votre entreprise.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Selon des études marketing, les consommateurs forment une première impression d&apos;une marque en moins de 
              7 secondes, et le nom joue un rôle crucial dans cette perception initiale. Un nom bien choisi peut :
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
              <li>Créer une connexion émotionnelle immédiate avec votre audience</li>
              <li>Faciliter le bouche-à-oreille et la recommandation</li>
              <li>Améliorer votre référencement naturel (SEO)</li>
              <li>Protéger votre marque juridiquement</li>
              <li>Différencier votre entreprise de la concurrence</li>
              <li>Communiquer instantanément votre proposition de valeur</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Comment utiliser le générateur de nom d&apos;entreprise ?</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</span>
                <div>
                  <h3 className="font-semibold mb-1">Entrez vos mots-clés</h3>
                  <p>Saisissez un ou plusieurs mots-clés qui décrivent votre activité, vos valeurs ou votre marché. 
                  Par exemple : &quot;tech&quot;, &quot;bio&quot;, &quot;studio&quot;, &quot;conseil&quot;, etc.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">2</span>
                <div>
                  <h3 className="font-semibold mb-1">Choisissez le style</h3>
                  <p>Sélectionnez le type de nom que vous recherchez : moderne, classique, créatif, descriptif, 
                  ou compound (combinaison de mots).</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">3</span>
                <div>
                  <h3 className="font-semibold mb-1">Générez des suggestions</h3>
                  <p>Cliquez sur &quot;Générer&quot; pour obtenir une liste de suggestions de noms créatifs et 
                  pertinents basés sur vos critères.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">4</span>
                <div>
                  <h3 className="font-semibold mb-1">Affinez et sélectionnez</h3>
                  <p>Parcourez les suggestions, notez vos favoris, et vérifiez la disponibilité du nom de domaine 
                  et des marques déposées avant de faire votre choix final.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Critères d&apos;un bon nom d&apos;entreprise</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faBullseye} className="inline" /> Simple et mémorable</h3>
                <p>
                  Un bon nom d&apos;entreprise doit être facile à retenir et à prononcer. Évitez les noms trop longs 
                  (idéalement 2-3 syllabes maximum), les orthographes complexes ou les combinaisons de lettres 
                  difficiles à prononcer. Des exemples : Google, Apple, Nike, Uber.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🔤 Facile à écrire et épeler</h3>
                <p>
                  Votre nom doit pouvoir être écrit correctement du premier coup. Évitez les jeux de mots complexes, 
                  les orthographes alternatives (remplacer &quot;C&quot; par &quot;K&quot;) ou les chiffres à la place des lettres. 
                  Si les gens ne peuvent pas l&apos;écrire, ils ne pourront pas vous trouver en ligne.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faGlobe} className="inline" /> Disponible comme nom de domaine</h3>
                <p>
                  Vérifiez impérativement que le nom de domaine correspondant est disponible (idéalement en .com, 
                  .fr ou votre extension locale). Votre présence en ligne est cruciale, et avoir le même nom pour 
                  votre entreprise et votre site web évite toute confusion.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faBalanceScale} className="inline" /> Unique et distinctif</h3>
                <p>
                  Le nom doit vous différencier de vos concurrents et éviter toute confusion avec des marques 
                  existantes. Effectuez une recherche approfondie sur Google, l&apos;INPI (Institut National de la 
                  Propriété Industrielle), et les réseaux sociaux pour vérifier l&apos;unicité.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faRocket} className="inline" /> Évolutif et intemporel</h3>
                <p>
                  Pensez à long terme. Votre nom doit pouvoir accompagner la croissance de votre entreprise sans 
                  devenir obsolète ou limitant. Évitez les références trop spécifiques à une localité, un produit 
                  unique ou une tendance passagère.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faBriefcase} className="inline" /> Professionnel et approprié</h3>
                <p>
                  Le nom doit inspirer confiance et correspondre à votre secteur d&apos;activité. Un nom trop fantaisiste 
                  peut nuire à une entreprise de services juridiques, tandis qu&apos;un nom trop formel peut sembler 
                  déplacé pour une startup créative.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faGlobe} className="inline" /> International-friendly</h3>
                <p>
                  Si vous envisagez une expansion internationale, assurez-vous que votre nom n&apos;a pas de 
                  signification négative ou embarrassante dans d&apos;autres langues. Testez la prononciation dans 
                  plusieurs langues majeures.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faMobileAlt} className="inline" /> Compatible réseaux sociaux</h3>
                <p>
                  Vérifiez que le nom d&apos;utilisateur correspondant est disponible sur les principales plateformes 
                  sociales (Instagram, Facebook, Twitter/X, LinkedIn, TikTok). Une présence cohérente renforce 
                  votre marque.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Types de noms d&apos;entreprise</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold text-lg mb-1">Noms descriptifs</h3>
                <p className="text-sm mb-2">
                  Ces noms décrivent clairement ce que fait l&apos;entreprise. Avantage : compréhension immédiate. 
                  Inconvénient : moins de flexibilité pour évoluer.
                </p>
                <p className="text-sm italic">Exemples : Toys &quot;R&quot; Us, General Motors, Air France</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-semibold text-lg mb-1">Noms inventés (Néologismes)</h3>
                <p className="text-sm mb-2">
                  Mots totalement inventés, créés de toutes pièces. Avantage : totalement unique et protégeable. 
                  Inconvénient : nécessite plus d&apos;efforts marketing pour créer une signification.
                </p>
                <p className="text-sm italic">Exemples : Google, Kodak, Xerox, Spotify</p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="font-semibold text-lg mb-1">Noms composés (Compound)</h3>
                <p className="text-sm mb-2">
                  Combinaison de deux mots existants pour créer un nouveau sens. Faciles à retenir et évocateurs.
                </p>
                <p className="text-sm italic">Exemples : Facebook, YouTube, PayPal, Netflix</p>
              </div>
              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="font-semibold text-lg mb-1">Noms acronymes</h3>
                <p className="text-sm mb-2">
                  Initiales ou abréviation d&apos;une expression plus longue. Avantage : concis. 
                  Inconvénient : peut manquer de sens émotionnel.
                </p>
                <p className="text-sm italic">Exemples : IBM, BMW, IKEA, NASA</p>
              </div>
              <div className="border-l-4 border-red-500 pl-4">
                <h3 className="font-semibold text-lg mb-1">Noms fondateurs</h3>
                <p className="text-sm mb-2">
                  Basés sur le nom du fondateur ou des fondateurs. Crée une connexion personnelle avec la marque.
                </p>
                <p className="text-sm italic">Exemples : McDonald&apos;s, Ford, Disney, Chanel</p>
              </div>
              <div className="border-l-4 border-yellow-500 pl-4">
                <h3 className="font-semibold text-lg mb-1">Noms métaphoriques</h3>
                <p className="text-sm mb-2">
                  Utilisent des métaphores ou des concepts évocateurs pour créer une image mentale.
                </p>
                <p className="text-sm italic">Exemples : Amazon (grand fleuve = vaste sélection), Apple (simple, accessible), 
                Nike (déesse de la victoire)</p>
              </div>
              <div className="border-l-4 border-pink-500 pl-4">
                <h3 className="font-semibold text-lg mb-1">Noms géographiques</h3>
                <p className="text-sm mb-2">
                  Basés sur un lieu, une région ou une ville. Crée un sentiment d&apos;appartenance et d&apos;origine.
                </p>
                <p className="text-sm italic">Exemples : Air France, Deutsche Bank, Swiss Air</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Erreurs à éviter lors du choix d&apos;un nom</h2>
            <div className="space-y-3 text-gray-700 dark:text-gray-300">
              <div className="flex items-start gap-3">
                <span className="text-red-600 text-xl"><FontAwesomeIcon icon={faTimes} className="inline" /></span>
                <div>
                  <h3 className="font-semibold mb-1">Noms trop génériques</h3>
                  <p className="text-sm">
                    Évitez des noms comme &quot;Services Plus&quot; ou &quot;Consulting Group&quot; qui ne vous différencient pas 
                    et sont difficiles à protéger légalement. Ils noient votre marque dans la masse.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-red-600 text-xl"><FontAwesomeIcon icon={faTimes} className="inline" /></span>
                <div>
                  <h3 className="font-semibold mb-1">Orthographes créatives complexes</h3>
                  <p className="text-sm">
                    Remplacer &quot;s&quot; par &quot;z&quot;, &quot;c&quot; par &quot;k&quot;, ou utiliser des chiffres (4 au lieu de &quot;for&quot;) 
                    peut sembler créatif mais complique la recherche en ligne et la mémorisation.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-red-600 text-xl"><FontAwesomeIcon icon={faTimes} className="inline" /></span>
                <div>
                  <h3 className="font-semibold mb-1">Noms trop longs</h3>
                  <p className="text-sm">
                    Un nom de plus de 15-20 caractères est difficile à mémoriser, à dire et à écrire sur des 
                    supports marketing. Visez la concision.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-red-600 text-xl"><FontAwesomeIcon icon={faTimes} className="inline" /></span>
                <div>
                  <h3 className="font-semibold mb-1">Noms trop restrictifs</h3>
                  <p className="text-sm">
                    Si vous vous appelez &quot;Paris Plomberie&quot;, vous aurez du mal à vous développer dans d&apos;autres 
                    villes. Si vous êtes &quot;Bob&apos;s iPhone Repair&quot;, vous ne pourrez pas réparer d&apos;autres marques.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-red-600 text-xl"><FontAwesomeIcon icon={faTimes} className="inline" /></span>
                <div>
                  <h3 className="font-semibold mb-1">Ignorer la signification internationale</h3>
                  <p className="text-sm">
                    Chevrolet a dû retirer sa &quot;Nova&quot; de certains marchés hispanophones car &quot;no va&quot; signifie 
                    &quot;ne marche pas&quot;. Vérifiez toujours les traductions.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-red-600 text-xl"><FontAwesomeIcon icon={faTimes} className="inline" /></span>
                <div>
                  <h3 className="font-semibold mb-1">Suivre aveuglément les tendances</h3>
                  <p className="text-sm">
                    Les suffixes tendance (&quot;-ly&quot;, &quot;-ify&quot;, &quot;-er&quot;) peuvent rapidement dater. Pensez à la 
                    longévité de votre nom sur 10-20 ans.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-red-600 text-xl"><FontAwesomeIcon icon={faTimes} className="inline" /></span>
                <div>
                  <h3 className="font-semibold mb-1">Ne pas vérifier la disponibilité légale</h3>
                  <p className="text-sm">
                    Utiliser un nom déjà déposé peut entraîner des poursuites coûteuses et vous forcer à un 
                    rebranding complet. Vérifiez systématiquement auprès de l&apos;INPI.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-red-600 text-xl"><FontAwesomeIcon icon={faTimes} className="inline" /></span>
                <div>
                  <h3 className="font-semibold mb-1">Choisir seul sans feedback</h3>
                  <p className="text-sm">
                    Ce qui semble génial à vos yeux peut avoir des connotations négatives pour d&apos;autres. 
                    Testez toujours vos options auprès de votre audience cible.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Étapes après avoir choisi votre nom</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">1</span>
                <div>
                  <h3 className="font-semibold mb-1">Vérifiez la disponibilité juridique</h3>
                  <p className="text-sm">
                    Consultez la base de données de l&apos;INPI (Institut National de la Propriété Industrielle) pour 
                    vous assurer qu&apos;aucune marque similaire n&apos;est déjà déposée dans votre secteur d&apos;activité. 
                    Recherchez également sur les registres du commerce.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">2</span>
                <div>
                  <h3 className="font-semibold mb-1">Achetez le nom de domaine</h3>
                  <p className="text-sm">
                    Réservez immédiatement le nom de domaine correspondant (idéalement .com, .fr et toute extension 
                    pertinente pour votre activité). Envisagez aussi des variantes orthographiques pour protéger 
                    votre marque.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">3</span>
                <div>
                  <h3 className="font-semibold mb-1">Sécurisez les réseaux sociaux</h3>
                  <p className="text-sm">
                    Créez immédiatement des comptes sur Facebook, Instagram, Twitter/X, LinkedIn, TikTok et 
                    YouTube avec votre nom d&apos;entreprise, même si vous ne les utilisez pas tout de suite. 
                    Cela évite le cybersquatting.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">4</span>
                <div>
                  <h3 className="font-semibold mb-1">Déposez votre marque</h3>
                  <p className="text-sm">
                    Protégez juridiquement votre nom en déposant une marque auprès de l&apos;INPI. Le coût est 
                    d&apos;environ 190€ pour une classe et 40€ par classe supplémentaire. Cette protection dure 10 ans 
                    renouvelables.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">5</span>
                <div>
                  <h3 className="font-semibold mb-1">Créez votre identité visuelle</h3>
                  <p className="text-sm">
                    Développez un logo, choisissez une palette de couleurs et définissez une typographie cohérente 
                    avec votre nom. L&apos;identité visuelle doit renforcer les valeurs véhiculées par votre nom.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">6</span>
                <div>
                  <h3 className="font-semibold mb-1">Testez auprès de votre audience</h3>
                  <p className="text-sm">
                    Avant de vous lancer officiellement, testez votre nom auprès d&apos;un échantillon de votre 
                    marché cible. Recueillez des feedbacks sur la prononciation, la mémorabilité et les associations 
                    d&apos;idées.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">7</span>
                <div>
                  <h3 className="font-semibold mb-1">Enregistrez votre entreprise</h3>
                  <p className="text-sm">
                    Effectuez les démarches administratives pour enregistrer officiellement votre entreprise avec 
                    son nom auprès de la Chambre de Commerce, du Greffe du Tribunal de Commerce ou de l&apos;URSSAF 
                    selon votre statut juridique.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Questions fréquentes sur le nom d&apos;entreprise</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Combien coûte le dépôt d&apos;un nom de marque ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  En France, le dépôt d&apos;une marque auprès de l&apos;INPI coûte 190€ pour une classe de produits/services, 
                  puis 40€ par classe supplémentaire (jusqu&apos;à 3 classes au total lors du dépôt initial). Pour une 
                  protection européenne, comptez environ 850€, et pour une protection internationale, les coûts 
                  varient selon les pays choisis.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Puis-je utiliser mon nom personnel comme nom d&apos;entreprise ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Oui, vous pouvez utiliser votre nom de famille comme nom commercial. Cependant, si quelqu&apos;un 
                  d&apos;autre porte le même nom et exerce dans le même secteur, cela peut créer des conflits. De plus, 
                  si vous vendez un jour votre entreprise, le nom peut perdre de sa pertinence. Les entreprises 
                  familiales historiques (Hermès, Chanel, Ford) ont réussi avec cette approche.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Que faire si le nom de domaine n&apos;est pas disponible ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Plusieurs options s&apos;offrent à vous : essayez une extension alternative (.fr, .co, .io), 
                  ajoutez un mot descriptif (ex: &quot;GetNomEntreprise.com&quot;, &quot;TryNomEntreprise.com&quot;), ou contactez 
                  le propriétaire actuel pour un rachat (attention aux prix élevés). Dans certains cas, il peut 
                  être plus judicieux de choisir un autre nom d&apos;entreprise.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Dois-je choisir un nom qui décrit mon activité ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Pas nécessairement. Les noms descriptifs (comme &quot;La Boulangerie Française&quot;) sont clairs mais 
                  limitent votre évolution. Les noms abstraits ou métaphoriques (comme &quot;Apple&quot; ou &quot;Amazon&quot;) 
                  nécessitent plus de marketing au départ mais offrent plus de flexibilité et sont plus mémorables. 
                  Le choix dépend de votre stratégie et de vos ressources marketing.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Combien de temps prend le processus de dépôt de marque ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  En France, le dépôt de marque auprès de l&apos;INPI prend environ 5 à 6 mois. Votre demande est 
                  d&apos;abord examinée (2 mois), puis publiée au BOPI (Bulletin Officiel de la Propriété Industrielle) 
                  pour une période d&apos;opposition de 2 mois. Si aucune opposition n&apos;est déposée, votre marque est 
                  enregistrée et vous recevez un certificat.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Puis-je changer le nom de mon entreprise plus tard ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Techniquement oui, mais c&apos;est coûteux et complexe. Un changement de nom implique : nouvelles 
                  démarches administratives, nouveau dépôt de marque, refonte de toute la communication (site web, 
                  cartes de visite, enseignes), risque de perdre votre clientèle existante et votre référencement. 
                  C&apos;est pourquoi il est crucial de bien réfléchir dès le départ.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Quelle est la différence entre raison sociale et nom commercial ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  La raison sociale est le nom légal officiel de votre entreprise, utilisé pour tous les documents 
                  juridiques et administratifs. Le nom commercial (ou enseigne) est le nom sous lequel vous exercez 
                  votre activité et vous faites connaître du public. Ils peuvent être identiques ou différents. 
                  Par exemple, la raison sociale pourrait être &quot;Martin Consulting SARL&quot; tandis que le nom 
                  commercial est &quot;Stratego&quot;.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Comment protéger mon nom à l&apos;international ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Pour une protection internationale, vous pouvez : déposer une marque de l&apos;Union européenne 
                  (couvre tous les pays de l&apos;UE), utiliser le système de Madrid pour déposer dans plusieurs pays 
                  simultanément, ou déposer individuellement dans chaque pays cible. La stratégie dépend de vos 
                  marchés prioritaires et de votre budget. Consultez un avocat spécialisé en propriété intellectuelle 
                  pour une stratégie globale.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Avantages de notre générateur de nom d&apos;entreprise</h2>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>100% Gratuit</strong> - Générez des milliers de suggestions sans aucun frais
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Algorithmes intelligents</strong> - Combinaisons créatives basées sur vos mots-clés
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Multiples styles</strong> - Du moderne au classique, trouvez le ton parfait
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Inspiration instantanée</strong> - Débloquez votre créativité avec des centaines d&apos;idées
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Aucune inscription</strong> - Utilisez l&apos;outil immédiatement sans créer de compte
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Aide à la décision</strong> - Comparez facilement plusieurs options côte à côte
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Gain de temps</strong> - Trouvez en minutes ce qui prendrait des heures de brainstorming
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Noms mémorables</strong> - Suggestions optimisées pour la mémorisation et l&apos;impact
                </span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
