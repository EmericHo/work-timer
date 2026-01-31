"use client";

import Link from "next/link";
import TravelDestinationSelector from "@/components/TravelDestinationSelector";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSuitcase, faBook, faDice, faDollarSign, faGlobe, faLightbulb, faMapMarkedAlt, faMobileAlt, faMoneyBill, faMountain, faPlane, faStar, faUmbrellaBeach } from '@fortawesome/free-solid-svg-icons';

export default function TravelDestinationPage() {
  return (
    <div className="min-h-screen flex flex-col p-4 sm:p-6 md:p-8">
      <header className="flex-shrink-0 mb-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-3">
          Sélection de Destination de Voyage Aléatoire
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-400 text-sm sm:text-base max-w-3xl mx-auto">
          Laissez le hasard choisir votre prochaine aventure ! Découvrez plus de 50 destinations 
          fascinantes à travers le monde avec leurs capitales, continents et faits intéressants.
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

      <div className="flex-1 max-w-6xl mx-auto w-full">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <TravelDestinationSelector />
        </div>

        {/* SEO Content */}
        <section className="mt-8 space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Pourquoi utiliser un sélecteur de destination aléatoire ?</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Le choix d&apos;une destination de voyage peut parfois être paralysant face aux milliers 
              d&apos;options disponibles. Un sélecteur de destination aléatoire élimine l&apos;indécision et 
              vous ouvre à de nouvelles possibilités que vous n&apos;auriez peut-être jamais envisagées. 
              C&apos;est une façon excitante et spontanée de découvrir le monde.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              En laissant le hasard décider, vous sortez de votre zone de confort et vous permettez de 
              découvrir des cultures, des paysages et des expériences totalement inattendues. Certains 
              des meilleurs voyages sont ceux qui n&apos;étaient pas planifiés ! Le sélecteur aléatoire 
              peut révéler des joyaux cachés que vous n&apos;auriez jamais pensé visiter.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Notre outil gratuit vous présente des destinations du monde entier, des plages paradisiaques 
              d&apos;Océanie aux anciennes merveilles d&apos;Europe, des montagnes majestueuses d&apos;Amérique 
              du Sud aux temples mystiques d&apos;Asie. Chaque destination est accompagnée d&apos;informations 
              essentielles pour vous inspirer et commencer à planifier votre prochaine aventure.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Comment planifier un voyage spontané ?</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faDice} className="inline" /> Laissez le hasard décider</h3>
                <p>
                  Utilisez notre sélecteur pour choisir une destination au hasard. Vous pouvez exclure 
                  les pays que vous avez déjà visités ou ceux qui ne correspondent pas à votre budget 
                  actuel. L&apos;élément de surprise rend le voyage encore plus excitant et vous encourage 
                  à explorer des destinations hors des sentiers battus.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faPlane} className="inline" /> Vérifiez les vols et les visas</h3>
                <p>
                  Une fois votre destination choisie, recherchez les vols disponibles et leurs prix. 
                  Consultez également les exigences en matière de visa pour votre nationalité. Certains 
                  pays offrent des visas à l&apos;arrivée ou des exemptions de visa, ce qui facilite les 
                  voyages spontanés. Utilisez des comparateurs de vols comme Skyscanner ou Google Flights 
                  pour trouver les meilleures offres.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🏨 Réservez l&apos;essentiel</h3>
                <p>
                  Réservez au minimum votre première nuit d&apos;hébergement et votre billet d&apos;avion. 
                  Le reste peut être organisé de manière plus flexible une fois sur place. Les applications 
                  comme Booking.com ou Airbnb permettent souvent des réservations de dernière minute. 
                  Cette flexibilité vous permet de prolonger votre séjour dans les endroits que vous aimez.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faMobileAlt} className="inline" /> Téléchargez les applications essentielles</h3>
                <p>
                  Avant de partir, téléchargez Google Maps pour la navigation hors ligne, une application 
                  de traduction comme Google Translate, et des applications de transport local. Sauvegardez 
                  également les numéros d&apos;urgence et l&apos;adresse de votre ambassade. Ces outils 
                  vous aideront à naviguer dans un pays inconnu avec confiance.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faMoneyBill} className="inline" /> Préparez vos finances</h3>
                <p>
                  Informez votre banque de votre voyage pour éviter le blocage de votre carte. Emportez 
                  une carte de crédit internationale sans frais de transaction si possible. Ayez toujours 
                  un peu de monnaie locale pour les premiers moments après votre arrivée. Des applications 
                  comme Revolut ou Wise peuvent vous aider à gérer plusieurs devises facilement.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faSuitcase} className="inline" /> Faites un bagage léger</h3>
                <p>
                  Pour un voyage spontané, voyagez léger avec seulement un bagage cabine si possible. 
                  Cela vous donne plus de flexibilité pour changer de plans et évite les frais de bagages. 
                  Emportez des vêtements polyvalents qui peuvent être portés dans différentes situations 
                  et climats. N&apos;oubliez pas une trousse de premiers soins et vos médicaments essentiels.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Les avantages de voyager vers des destinations aléatoires</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faGlobe} className="inline" /> Découvrez de nouvelles cultures</h3>
                <p>
                  Voyager vers une destination aléatoire vous expose à des cultures que vous n&apos;auriez 
                  peut-être jamais explorées autrement. Vous apprenez à apprécier différentes façons de 
                  vivre, de manger, de communiquer et de penser. Cette ouverture d&apos;esprit enrichit 
                  votre perspective sur le monde et vous rend plus tolérant et adaptable.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faLightbulb} className="inline" /> Sortez de votre zone de confort</h3>
                <p>
                  Le voyage spontané vous pousse à être plus aventureux et flexible. Vous développez des 
                  compétences en résolution de problèmes et en adaptation. Face à l&apos;imprévu, vous 
                  apprenez à faire confiance à votre instinct et à improviser. Ces compétences sont 
                  précieuses non seulement en voyage, mais aussi dans la vie quotidienne.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faMoneyBill} className="inline" /> Économisez de l&apos;argent</h3>
                <p>
                  Les destinations moins touristiques sont souvent beaucoup plus abordables. En évitant 
                  les pièges à touristes des destinations populaires, vous pouvez voyager plus longtemps 
                  avec le même budget. Les destinations hors des sentiers battus offrent généralement un 
                  meilleur rapport qualité-prix pour l&apos;hébergement, la nourriture et les activités.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">📸 Créez des souvenirs uniques</h3>
                <p>
                  Les voyages spontanés génèrent souvent les meilleurs souvenirs et les meilleures 
                  histoires. Les rencontres imprévues, les détours non planifiés et les découvertes 
                  surprenantes deviennent vos anecdotes de voyage préférées. Ces expériences authentiques 
                  sont bien plus mémorables que les itinéraires touristiques standardisés.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🤝 Rencontrez des locaux authentiques</h3>
                <p>
                  Dans les destinations moins fréquentées, les habitants sont souvent plus accueillants 
                  et curieux envers les visiteurs. Vous avez plus d&apos;opportunités d&apos;interactions 
                  authentiques et de véritables échanges culturels. Ces connexions humaines sont souvent 
                  ce qui rend un voyage vraiment inoubliable.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faStar} className="inline" /> Découvrez des joyaux cachés</h3>
                <p>
                  Les destinations moins connues regorgent de trésors cachés que peu de gens ont eu le 
                  privilège de découvrir. Des plages désertes aux sites historiques méconnus, en passant 
                  par des restaurants locaux extraordinaires, vous aurez l&apos;impression d&apos;être un 
                  véritable explorateur plutôt qu&apos;un simple touriste.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Conseils de voyage par continent</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                  <span>🏰</span> Europe - Histoire et Culture
                </h3>
                <p>
                  L&apos;Europe offre une incroyable densité de sites historiques et culturels. Les 
                  transports en commun sont excellents, facilitant les déplacements entre pays. 
                  L&apos;espace Schengen permet de voyager librement entre 27 pays européens. Budget 
                  moyen à élevé, mais les auberges de jeunesse et le Couchsurfing peuvent réduire les 
                  coûts. La meilleure période : printemps (avril-juin) et automne (septembre-octobre) 
                  pour éviter les foules et profiter d&apos;un climat agréable.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                  <span>🏯</span> Asie - Exotisme et Spiritualité
                </h3>
                <p>
                  L&apos;Asie est parfaite pour les voyageurs à petit budget, notamment en Asie du 
                  Sud-Est. La nourriture de rue est délicieuse et bon marché. Respectez les coutumes 
                  locales, surtout dans les temples. Les applications de traduction sont essentielles. 
                  Attention à la mousson selon les régions (juin-octobre en Asie du Sud-Est). Le 
                  continent offre une diversité incroyable, des mégalopoles ultramodernes aux villages 
                  traditionnels préservés.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                  <span>🗽</span> Amérique du Nord - Modernité et Nature
                </h3>
                <p>
                  Les États-Unis et le Canada offrent des paysages spectaculaires et des infrastructures 
                  touristiques développées. Un véhicule est souvent nécessaire pour explorer. Budget 
                  généralement élevé, surtout dans les grandes villes. Les parcs nationaux sont 
                  incontournables mais nécessitent parfois une réservation. L&apos;été (juin-août) est 
                  idéal pour les parcs, mais aussi la haute saison touristique.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                  <span><FontAwesomeIcon icon={faMountain} className="inline" /></span> Amérique du Sud - Aventure et Passion
                </h3>
                <p>
                  Destination idéale pour les aventuriers avec un budget modéré. La nourriture est 
                  excellente et abordable. Apprenez quelques bases d&apos;espagnol ou de portugais, 
                  l&apos;anglais est peu parlé. Les bus longue distance sont confortables et économiques. 
                  Attention à l&apos;altitude dans les Andes. La saison sèche (mai-octobre) est préférable 
                  pour la plupart des destinations. Le continent offre une biodiversité exceptionnelle.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                  <span>🦁</span> Afrique - Safaris et Diversité
                </h3>
                <p>
                  L&apos;Afrique offre des expériences uniques comme les safaris et les déserts. Budget 
                  variable selon les pays (Maroc et Égypte sont abordables, l&apos;Afrique australe 
                  plus chère). Les vaccinations sont importantes, consultez un médecin avant de partir. 
                  Les safaris sont meilleurs pendant la saison sèche quand les animaux se rassemblent 
                  près des points d&apos;eau. Chaque région a son propre climat et sa meilleure période 
                  de visite.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                  <span><FontAwesomeIcon icon={faUmbrellaBeach} className="inline" /></span> Océanie - Paradis Naturels
                </h3>
                <p>
                  L&apos;Australie et la Nouvelle-Zélande offrent des paysages époustouflants mais 
                  avec un coût de vie élevé. Les îles du Pacifique sont parfaites pour la détente et 
                  la plongée. Les distances sont énormes en Australie, planifiez bien vos déplacements. 
                  L&apos;été austral (décembre-février) est idéal mais c&apos;est aussi la haute saison. 
                  La région est parfaite pour les activités de plein air : randonnée, surf, plongée et 
                  observation de la faune.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Conseils pour voyager avec un budget limité</h2>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-xl"><FontAwesomeIcon icon={faDollarSign} className="inline" /></span>
                <div>
                  <strong>Choisissez des destinations abordables :</strong> L&apos;Asie du Sud-Est, 
                  l&apos;Europe de l&apos;Est, l&apos;Amérique centrale et certains pays d&apos;Afrique 
                  offrent un excellent rapport qualité-prix. Votre argent ira beaucoup plus loin dans ces 
                  régions, vous permettant de voyager plus longtemps.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-xl"><FontAwesomeIcon icon={faPlane} className="inline" /></span>
                <div>
                  <strong>Soyez flexible avec les dates :</strong> Voyager en basse saison ou en milieu 
                  de semaine peut réduire considérablement les coûts. Utilisez les alertes de prix sur 
                  Google Flights ou Skyscanner pour trouver les meilleurs deals. Les vols de nuit sont 
                  souvent moins chers et vous font économiser une nuit d&apos;hébergement.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-xl">🏨</span>
                <div>
                  <strong>Optez pour des hébergements économiques :</strong> Les auberges de jeunesse, 
                  Couchsurfing, ou les locations chez l&apos;habitant via Airbnb sont bien moins chers 
                  que les hôtels. Beaucoup d&apos;auberges offrent des cuisines communes où vous pouvez 
                  préparer vos repas.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-xl">🍜</span>
                <div>
                  <strong>Mangez local :</strong> La nourriture de rue et les restaurants locaux sont 
                  non seulement authentiques mais aussi beaucoup moins chers que les restaurants 
                  touristiques. C&apos;est aussi une excellente façon de découvrir la vraie cuisine locale 
                  et de rencontrer des habitants.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-xl">🚌</span>
                <div>
                  <strong>Utilisez les transports locaux :</strong> Les bus, trains et métros locaux 
                  sont beaucoup moins chers que les taxis ou les tours organisés. Ils vous donnent aussi 
                  une expérience plus authentique de la vie locale. Marcher ou louer un vélo est souvent 
                  la meilleure façon de découvrir une ville.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-xl">🎫</span>
                <div>
                  <strong>Profitez des activités gratuites :</strong> Beaucoup de musées ont des jours 
                  d&apos;entrée gratuite, les parcs et plages sont gratuits, et les randonnées ne coûtent 
                  rien. Les visites à pied gratuites (free walking tours) sont d&apos;excellentes façons 
                  de découvrir une ville.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-xl">💳</span>
                <div>
                  <strong>Évitez les frais bancaires :</strong> Utilisez des cartes sans frais de 
                  transaction internationale comme Revolut ou Wise. Retirez de grosses sommes moins 
                  souvent pour minimiser les frais de distributeur automatique. Informez toujours votre 
                  banque de vos voyages.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-xl"><FontAwesomeIcon icon={faMobileAlt} className="inline" /></span>
                <div>
                  <strong>Utilisez des cartes SIM locales :</strong> Achetez une carte SIM locale avec 
                  des données plutôt que d&apos;utiliser le roaming international. C&apos;est beaucoup 
                  moins cher et vous permet de rester connecté. De nombreux cafés et restaurants offrent 
                  aussi le WiFi gratuit.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-xl"><FontAwesomeIcon icon={faSuitcase} className="inline" /></span>
                <div>
                  <strong>Voyagez léger :</strong> Avec seulement un bagage cabine, vous évitez les frais 
                  de bagages en soute et gagnez du temps à l&apos;aéroport. C&apos;est aussi plus facile 
                  de se déplacer avec moins de bagages. Lavez vos vêtements régulièrement plutôt 
                  que d&apos;emporter trop d&apos;affaires.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-xl">🤝</span>
                <div>
                  <strong>Voyagez plus lentement :</strong> Passer plus de temps dans moins d&apos;endroits 
                  réduit les coûts de transport et vous permet souvent de négocier des tarifs 
                  hebdomadaires ou mensuels pour l&apos;hébergement. Vous découvrez aussi les destinations 
                  de manière plus approfondie.
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Questions fréquentes</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Comment fonctionne le sélecteur de destination aléatoire ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Notre outil sélectionne au hasard une destination parmi plus de 50 pays à travers le 
                  monde. Vous pouvez exclure certains pays ou continents entiers selon vos préférences, 
                  votre budget ou vos contraintes de visa. Chaque destination affiche son drapeau, sa 
                  capitale, son continent et un fait intéressant pour vous inspirer.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Puis-je exclure certaines destinations ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Oui, absolument ! Cliquez sur &quot;Gérer les exclusions&quot; pour voir la liste 
                  complète des pays organisés par continent. Vous pouvez exclure des pays individuellement 
                  ou exclure des continents entiers en un clic. C&apos;est utile pour éviter les pays que 
                  vous avez déjà visités ou ceux qui ne correspondent pas à votre budget actuel.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  L&apos;historique des destinations est-il sauvegardé ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  L&apos;historique est conservé pendant votre session de navigation, mais il sera effacé 
                  si vous rechargez la page ou fermez votre navigateur. Cela vous permet de voir toutes 
                  les destinations générées pendant votre session actuelle et de revenir à une destination 
                  précédente qui vous intéressait.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Les informations sur les destinations sont-elles à jour ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Les informations de base (capitales, continents, drapeaux) sont exactes au moment de la 
                  création de l&apos;outil. Cependant, les exigences de visa, les conditions de voyage et 
                  les informations de sécurité évoluent constamment. Nous vous recommandons toujours de 
                  vérifier les informations officielles auprès des sites gouvernementaux avant de planifier 
                  votre voyage.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Comment choisir entre plusieurs destinations générées ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Générez plusieurs destinations et consultez l&apos;historique. Comparez-les en fonction 
                  de votre budget, du climat pendant votre période de voyage, des exigences de visa, et 
                  de vos intérêts personnels. Recherchez des photos et des vidéos de chaque destination 
                  pour avoir une meilleure idée de ce qui vous attire le plus.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Que faire après avoir choisi une destination ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Commencez par rechercher les vols et les prix. Vérifiez les exigences de visa pour 
                  votre nationalité. Lisez des blogs de voyage et des guides sur la destination. Regardez 
                  des vlogs YouTube pour avoir une idée réaliste du pays. Rejoignez des groupes Facebook 
                  de voyageurs pour obtenir des conseils. Consultez les avis sur TripAdvisor et Lonely 
                  Planet pour planifier vos activités.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Est-ce sûr de voyager vers une destination choisie au hasard ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Avant de réserver, consultez toujours les conseils aux voyageurs de votre gouvernement 
                  (France Diplomatie pour les Français, par exemple). Certaines destinations peuvent avoir 
                  des avertissements de sécurité temporaires. Souscrivez une assurance voyage complète. 
                  Informez quelqu&apos;un de votre itinéraire. La plupart des destinations dans notre liste 
                  sont des destinations touristiques établies avec une bonne infrastructure.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Combien de temps à l&apos;avance dois-je planifier ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Cela dépend de la destination et de votre flexibilité. Pour les destinations nécessitant 
                  un visa, prévoyez au moins 2-4 semaines pour le traitement. Pour les vols moins chers, 
                  réservez généralement 2-3 mois à l&apos;avance. Cependant, certains voyageurs réservent 
                  seulement quelques jours à l&apos;avance pour profiter de deals de dernière minute. Les 
                  vaccinations nécessaires peuvent aussi nécessiter plusieurs semaines.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Ressources et recommandations pour voyageurs</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faPlane} className="inline" /> Recherche et réservation de vols</h3>
                <p>
                  <strong>Skyscanner, Google Flights, Kayak :</strong> Ces comparateurs de vols vous 
                  permettent de trouver les meilleures offres. Activez les alertes de prix pour être 
                  notifié des baisses de tarifs. L&apos;option &quot;Flexible Dates&quot; vous montre 
                  les jours les moins chers du mois.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🏨 Hébergement</h3>
                <p>
                  <strong>Booking.com, Airbnb, Hostelworld :</strong> Pour tous les budgets, des 
                  auberges de jeunesse aux appartements de luxe. Lisez toujours les avis récents. 
                  Hostelworld est idéal pour les voyageurs solo cherchant à rencontrer d&apos;autres 
                  voyageurs. Airbnb offre des expériences plus locales.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faBook} className="inline" /> Guides et inspiration</h3>
                <p>
                  <strong>Lonely Planet, Routard, TripAdvisor :</strong> Guides de voyage complets avec 
                  des informations pratiques. Les blogs de voyage comme Nomadic Matt, The Blonde Abroad, 
                  ou Expert Vagabond offrent des conseils authentiques et des itinéraires détaillés de 
                  voyageurs expérimentés.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faMapMarkedAlt} className="inline" /> Navigation et transport</h3>
                <p>
                  <strong>Google Maps, Maps.me, Rome2Rio :</strong> Google Maps pour la navigation urbaine 
                  (téléchargez les cartes hors ligne), Maps.me pour la randonnée et les zones sans 
                  Internet, Rome2Rio pour planifier les trajets entre villes utilisant tous les modes de 
                  transport disponibles.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">💬 Communication</h3>
                <p>
                  <strong>Google Translate, Duolingo :</strong> Google Translate offre la traduction en 
                  temps réel, même avec l&apos;appareil photo pour traduire les menus et panneaux. 
                  Duolingo vous aide à apprendre les bases de la langue avant votre départ. Quelques mots 
                  dans la langue locale sont toujours appréciés.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faMoneyBill} className="inline" /> Finances en voyage</h3>
                <p>
                  <strong>Revolut, Wise (TransferWise), XE Currency :</strong> Cartes multi-devises sans 
                  frais de transaction internationale. XE Currency pour convertir rapidement les prix. 
                  Trail Wallet pour suivre votre budget quotidien et éviter les dépenses excessives 
                  pendant votre voyage.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">📸 Capture et partage</h3>
                <p>
                  <strong>Google Photos, Instagram, AllTrails :</strong> Google Photos pour la sauvegarde 
                  automatique de vos photos. Instagram pour partager vos aventures. AllTrails pour trouver 
                  et enregistrer vos randonnées avec GPS. N&apos;oubliez pas de vivre l&apos;instant 
                  présent, pas seulement à travers votre écran.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🏥 Santé et sécurité</h3>
                <p>
                  <strong>TravelSafe, France Diplomatie, CDC Travel Health :</strong> Consultez les 
                  conseils de santé et de sécurité pour votre destination. Vérifiez quelles vaccinations 
                  sont recommandées ou obligatoires. Souscrivez toujours une assurance voyage complète 
                  couvrant l&apos;annulation, les soins médicaux et le rapatriement.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              Prêt pour votre prochaine aventure ?
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Le monde est vaste et regorge de destinations extraordinaires qui n&apos;attendent que 
              d&apos;être découvertes. Que vous soyez un voyageur expérimenté ou que vous planifiez 
              votre premier grand voyage, notre sélecteur de destination aléatoire est l&apos;outil 
              parfait pour ajouter un élément de surprise et d&apos;aventure à votre planification.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              N&apos;ayez pas peur de sortir des sentiers battus. Certaines des expériences de voyage 
              les plus mémorables viennent de destinations que vous n&apos;aviez jamais envisagées. 
              Laissez le hasard vous guider vers votre prochaine grande aventure !
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Cliquez sur le bouton ci-dessus pour découvrir votre prochaine destination de rêve. 
              L&apos;aventure commence maintenant ! <FontAwesomeIcon icon={faGlobe} className="inline" /><FontAwesomeIcon icon={faPlane} className="inline" /><FontAwesomeIcon icon={faSuitcase} className="inline" />
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
