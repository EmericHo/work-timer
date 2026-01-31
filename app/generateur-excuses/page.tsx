"use client";

import Link from "next/link";
import ExcuseGenerator from "@/components/ExcuseGenerator";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faCheck, faClock, faHome, faMobileAlt, faPen, faTheaterMasks } from '@fortawesome/free-solid-svg-icons';

export default function ExcuseGeneratorPage() {
  return (
    <div className="min-h-screen flex flex-col p-4 sm:p-6 md:p-8">
      <header className="flex-shrink-0 mb-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-3">
          Générateur d&apos;Excuses en Ligne
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-400 text-sm sm:text-base max-w-3xl mx-auto">
          Générez des excuses créatives et amusantes pour toutes situations.
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
          <ExcuseGenerator />
        </div>

        {/* SEO Content */}
        <section className="mt-8 space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Qu&apos;est-ce qu&apos;un générateur d&apos;excuses ?</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Un générateur d&apos;excuses est un outil ludique et créatif qui produit automatiquement des 
              excuses originales, amusantes et parfois absurdes pour diverses situations. Que ce soit pour 
              le travail, l&apos;école, les amis ou la famille, cet outil combine intelligemment différents 
              éléments pour créer des justifications improbables mais divertissantes.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              L&apos;humour est un excellent brise-glace et peut désamorcer des situations tendues. Notre 
              générateur puise dans une vaste bibliothèque de formulations créatives pour produire des 
              excuses qui vont du plausible à l&apos;absurde, garantissant toujours un moment de légèreté et 
              de sourire.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Attention : cet outil est conçu pour le divertissement et l&apos;humour ! Nous recommandons 
              fortement l&apos;honnêteté dans les véritables situations nécessitant une explication. Utilisez 
              ces excuses comme inspiration créative, brise-glace ou simplement pour rire avec vos proches.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Comment utiliser le générateur d&apos;excuses ?</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</span>
                <div>
                  <h3 className="font-semibold mb-1">Choisissez une catégorie</h3>
                  <p>Sélectionnez le contexte de votre excuse : travail/bureau, école/université, retard, absence, famille/amis, ou générale. Chaque catégorie génère des excuses adaptées au contexte.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">2</span>
                <div>
                  <h3 className="font-semibold mb-1">Générez une excuse</h3>
                  <p>Cliquez sur le bouton &quot;Générer une excuse&quot; et laissez la magie opérer. L&apos;algorithme combine aléatoirement différents éléments pour créer une justification unique et originale.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">3</span>
                <div>
                  <h3 className="font-semibold mb-1">Explorez les variations</h3>
                  <p>Pas satisfait ? Générez autant d&apos;excuses que vous voulez jusqu&apos;à trouver celle qui vous fait rire ou qui convient à votre situation humoristique. Chaque génération est unique.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">4</span>
                <div>
                  <h3 className="font-semibold mb-1">Copiez et partagez</h3>
                  <p>Une excuse vous plaît particulièrement ? Copiez-la et partagez-la avec vos amis sur les réseaux sociaux ou par message. Les meilleures excuses méritent d&apos;être partagées !</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Catégories d&apos;excuses disponibles</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faBriefcase} className="inline" /> Travail et bureau</h3>
                <p>
                  Des excuses professionnelles (et souvent hilarantes) pour expliquer un retard, une 
                  absence, un rapport non rendu ou une réunion manquée. De l&apos;ordinateur qui a pris feu 
                  à la rencontre inattendue avec un client extraterrestre, tout est possible !
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🎓 École et université</h3>
                <p>
                  Parfait pour les étudiants en panne d&apos;inspiration ! Excuses pour devoirs non faits, 
                  absences aux cours, examens ratés ou projets en retard. Du classique &quot;mon chien a mangé 
                  mes devoirs&quot; revisité avec créativité moderne.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faClock} className="inline" /> Retards en tous genres</h3>
                <p>
                  Spécialement conçues pour justifier un retard, qu&apos;il soit professionnel, amical ou 
                  romantique. Des excuses allant du réveil qui n&apos;a pas sonné aux embouteillages causés 
                  par une parade de flamants roses.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faHome} className="inline" /> Famille et amis</h3>
                <p>
                  Pour ces situations sociales délicates : dîner de famille oublié, anniversaire manqué, 
                  promesse non tenue. Des excuses légères et humoristiques pour dédramatiser avec vos 
                  proches qui comprennent votre sens de l&apos;humour.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🤷 Absence générale</h3>
                <p>
                  Les excuses passe-partout pour toute situation où vous deviez être présent mais ne 
                  l&apos;étiez pas. Flexibles et adaptables, elles conviennent à multiples contextes et 
                  situations diverses.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faTheaterMasks} className="inline" /> Excuses absurdes</h3>
                <p>
                  Les plus créatives et improbables ! Aliens, voyages dans le temps, complots gouvernementaux, 
                  invasions de zombies... Pour ceux qui aiment l&apos;humour décalé et les justifications 
                  totalement loufoques.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Usages créatifs et situations</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="text-xl font-semibold mb-2">😄 Brise-glace et icebreaker</h3>
                <p>
                  Utilisez une excuse absurde pour briser la glace lors d&apos;une première rencontre, démarrer 
                  une conversation amusante ou détendre l&apos;atmosphère dans un groupe. L&apos;humour partagé 
                  crée du lien social.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faPen} className="inline" /> Inspiration créative</h3>
                <p>
                  Écrivains et créatifs peuvent utiliser ces excuses comme points de départ pour des histoires, 
                  scénarios ou dialogues. Une excuse absurde peut devenir le début d&apos;une nouvelle fantastique 
                  ou d&apos;une comédie.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🎉 Animation d&apos;événements</h3>
                <p>
                  Parfait pour animer des soirées, team buildings ou événements entre amis. Organisez un 
                  concours de la meilleure excuse, ou utilisez-les dans des jeux de rôle et improvisations 
                  théâtrales.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faMobileAlt} className="inline" /> Contenu réseaux sociaux</h3>
                <p>
                  Créez du contenu humoristique pour vos réseaux sociaux. Les excuses absurdes font d&apos;excellents 
                  posts, stories Instagram ou tweets. Partagez votre préférée et demandez à vos followers 
                  de voter !
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2"><FontAwesomeIcon icon={faTheaterMasks} className="inline" /> Jeux et challenges</h3>
                <p>
                  Intégrez le générateur dans des jeux entre amis : qui peut garder son sérieux en lisant 
                  l&apos;excuse ? Qui peut improviser une histoire complète autour de l&apos;excuse générée ? Possibilités 
                  infinies !
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">💭 Détente et humour</h3>
                <p>
                  Simplement pour passer un bon moment et rire. Dans notre monde stressant, prendre quelques 
                  minutes pour générer et lire des excuses absurdes est une excellente pause mentale et 
                  source de bonne humeur.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">L&apos;art de la bonne excuse (vraie)</h2>
            <div className="space-y-3 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="font-semibold mb-1"><FontAwesomeIcon icon={faCheck} className="inline" /> L&apos;honnêteté reste la meilleure politique</h3>
                <p className="text-sm">
                  Dans les vraies situations professionnelles ou personnelles importantes, soyez toujours 
                  honnête. Une explication sincère, même simple, est toujours préférable à une excuse 
                  élaborée mais fausse. La confiance est précieuse.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1"><FontAwesomeIcon icon={faCheck} className="inline" /> Assumez vos responsabilités</h3>
                <p className="text-sm">
                  Plutôt que chercher des excuses, reconnaissez vos erreurs et présentez des solutions. 
                  &quot;J&apos;ai fait une erreur, voici comment je compte la corriger&quot; est plus respecté qu&apos;une 
                  longue justification.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1"><FontAwesomeIcon icon={faCheck} className="inline" /> Soyez bref et direct</h3>
                <p className="text-sm">
                  Une excuse efficace est courte et va droit au but. Trop de détails sonnent comme une 
                  tentative de justification excessive. &quot;Je suis désolé, j&apos;ai eu un imprévu&quot; suffit 
                  souvent, sans besoin d&apos;inventer une histoire complexe.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1"><FontAwesomeIcon icon={faCheck} className="inline" /> Proposez des solutions</h3>
                <p className="text-sm">
                  Accompagnez votre explication d&apos;une proposition pour rattraper ou éviter la répétition. 
                  &quot;Je suis en retard aujourd&apos;hui, je resterai 30 minutes de plus ce soir&quot; montre votre 
                  engagement et responsabilité.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1"><FontAwesomeIcon icon={faCheck} className="inline" /> Anticipez et prévenez</h3>
                <p className="text-sm">
                  Si vous savez à l&apos;avance que vous serez en retard ou absent, prévenez le plus tôt possible. 
                  La communication proactive est toujours appréciée et montre du respect pour le temps des 
                  autres.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1"><FontAwesomeIcon icon={faCheck} className="inline" /> L&apos;humour avec discernement</h3>
                <p className="text-sm">
                  L&apos;humour peut détendre une situation, mais évaluez d&apos;abord le contexte et votre 
                  interlocuteur. Une excuse humoristique peut fonctionner entre amis ou collègues proches, 
                  mais pas nécessairement avec un client important ou en entretien formel.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Questions fréquentes</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Puis-je vraiment utiliser ces excuses ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Ces excuses sont conçues pour le divertissement et l&apos;humour. Nous déconseillons fortement 
                  de les utiliser sérieusement dans des contextes professionnels ou personnels importants. 
                  L&apos;honnêteté reste toujours la meilleure approche. Utilisez-les pour rire, pas pour mentir !
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Comment sont générées les excuses ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Notre algorithme combine aléatoirement différents éléments (personnages, situations, 
                  objets, lieux) selon des modèles prédéfinis pour créer des phrases cohérentes mais 
                  improbables. Chaque catégorie a ses propres banques de données pour un résultat adapté.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Combien d&apos;excuses différentes peuvent être générées ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Grâce aux combinaisons algorithmiques, le générateur peut produire des milliers d&apos;excuses 
                  uniques. Même si vous l&apos;utilisez des centaines de fois, vous découvrirez régulièrement 
                  de nouvelles formulations amusantes et originales.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Puis-je suggérer des excuses à ajouter ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Nous enrichissons régulièrement notre base de données avec de nouvelles formulations 
                  créatives. Si vous avez des idées d&apos;excuses particulièrement drôles ou originales, 
                  nous serions ravis de les considérer pour de futures mises à jour.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  L&apos;outil est-il adapté à tous les âges ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Oui, toutes les excuses générées sont appropriées pour tous publics. Nous évitons tout 
                  contenu offensant, vulgaire ou inapproprié. L&apos;humour reste léger, absurde et familial. 
                  Parfait pour partager en famille ou entre collègues.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Les excuses sont-elles sauvegardées quelque part ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Non, aucune excuse générée n&apos;est sauvegardée ni collectée. Tout se passe localement 
                  dans votre navigateur pour garantir votre confidentialité. Si vous trouvez une excuse 
                  que vous aimez, copiez-la avant de fermer la page.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Puis-je utiliser ces excuses commercialement ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Les excuses générées peuvent être utilisées librement pour votre usage personnel ou 
                  professionnel créatif (contenu réseaux sociaux, blog, etc.). Pour des usages commerciaux 
                  importants (publication, spectacle), contactez-nous pour discuter des conditions.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Y a-t-il une limite au nombre de générations ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Absolument aucune ! Générez autant d&apos;excuses que vous le souhaitez, gratuitement et 
                  sans aucune restriction. Amusez-vous et explorez toutes les combinaisons hilarantes 
                  que notre générateur peut produire.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Avantages de notre générateur</h2>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Illimité et gratuit</strong> - Générez autant d&apos;excuses que vous voulez
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Catégories variées</strong> - Pour toutes les situations imaginables
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Humour garanti</strong> - Des excuses originales et amusantes
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Instantané</strong> - Nouvelle excuse en un clic
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Contenu familial</strong> - Approprié pour tous les âges
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Partage facile</strong> - Copiez et partagez vos préférées
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Sans inscription</strong> - Utilisation directe sans compte
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Toujours nouveau</strong> - Milliers de combinaisons possibles
                </span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
