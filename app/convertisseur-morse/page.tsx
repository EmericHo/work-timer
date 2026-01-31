"use client";

import Link from "next/link";
import MorseCodeConverter from "@/components/MorseCodeConverter";

export default function MorseCodeConverterPage() {
  return (
    <div className="min-h-screen flex flex-col p-4 sm:p-6 md:p-8">
      <header className="flex-shrink-0 mb-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-3">
          Convertisseur de Code Morse en Ligne
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-400 text-sm sm:text-base max-w-3xl mx-auto">
          Convertissez texte en morse et vice-versa avec lecture audio.
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
          <MorseCodeConverter />
        </div>

        {/* SEO Content */}
        <section className="mt-8 space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Qu&apos;est-ce que le code Morse ?</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Le code Morse est un système de codage de caractères permettant de transmettre un message 
              à l&apos;aide de séries d&apos;impulsions courtes et longues. Inventé dans les années 1830 par 
              Samuel Morse et Alfred Vail pour la télégraphie, il demeure l&apos;un des modes de communication 
              les plus résilients et reconnaissables au monde.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Dans le code Morse international, chaque lettre et chiffre est représenté par une combinaison 
              unique de points (·) et de tirets (–). Un point représente une impulsion courte, un tiret une 
              impulsion trois fois plus longue. Les lettres sont séparées par un espace court, et les mots 
              par un espace plus long.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Bien que supplanté par des technologies modernes, le code Morse reste enseigné et utilisé 
              dans certains contextes : radioamateurs, aviation, marine, situations d&apos;urgence, et même 
              comme méthode d&apos;accessibilité pour les personnes handicapées. C&apos;est un savoir-faire 
              intemporel et fascinant.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Comment utiliser le convertisseur de code Morse ?</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</span>
                <div>
                  <h3 className="font-semibold mb-1">Choisissez le sens de conversion</h3>
                  <p>Sélectionnez &quot;Texte vers Morse&quot; pour encoder un message, ou &quot;Morse vers Texte&quot; pour décoder un message en code Morse.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">2</span>
                <div>
                  <h3 className="font-semibold mb-1">Entrez votre texte ou code</h3>
                  <p>Pour l&apos;encodage, tapez votre message en texte normal (lettres, chiffres, ponctuation). Pour le décodage, entrez le code Morse en utilisant des points (.) et des tirets (-), avec des espaces entre les lettres.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">3</span>
                <div>
                  <h3 className="font-semibold mb-1">Visualisez la conversion</h3>
                  <p>Le résultat s&apos;affiche instantanément. Pour l&apos;encodage, vous obtenez le code Morse avec la convention standard (· pour point, – pour tiret). Pour le décodage, vous obtenez le texte lisible.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">4</span>
                <div>
                  <h3 className="font-semibold mb-1">Écoutez le code (optionnel)</h3>
                  <p>Utilisez la fonction de lecture audio pour entendre le code Morse avec les bips caractéristiques. Parfait pour l&apos;apprentissage et l&apos;entraînement auditif.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Alphabet Morse international</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-gray-700 dark:text-gray-300 text-sm">
              <div className="flex justify-between border-b border-gray-200 dark:border-gray-700 pb-1">
                <span className="font-semibold">A</span><span className="font-mono">· –</span>
              </div>
              <div className="flex justify-between border-b border-gray-200 dark:border-gray-700 pb-1">
                <span className="font-semibold">B</span><span className="font-mono">– · · ·</span>
              </div>
              <div className="flex justify-between border-b border-gray-200 dark:border-gray-700 pb-1">
                <span className="font-semibold">C</span><span className="font-mono">– · – ·</span>
              </div>
              <div className="flex justify-between border-b border-gray-200 dark:border-gray-700 pb-1">
                <span className="font-semibold">D</span><span className="font-mono">– · ·</span>
              </div>
              <div className="flex justify-between border-b border-gray-200 dark:border-gray-700 pb-1">
                <span className="font-semibold">E</span><span className="font-mono">·</span>
              </div>
              <div className="flex justify-between border-b border-gray-200 dark:border-gray-700 pb-1">
                <span className="font-semibold">F</span><span className="font-mono">· · – ·</span>
              </div>
              <div className="flex justify-between border-b border-gray-200 dark:border-gray-700 pb-1">
                <span className="font-semibold">G</span><span className="font-mono">– – ·</span>
              </div>
              <div className="flex justify-between border-b border-gray-200 dark:border-gray-700 pb-1">
                <span className="font-semibold">H</span><span className="font-mono">· · · ·</span>
              </div>
              <div className="flex justify-between border-b border-gray-200 dark:border-gray-700 pb-1">
                <span className="font-semibold">I</span><span className="font-mono">· ·</span>
              </div>
              <div className="flex justify-between border-b border-gray-200 dark:border-gray-700 pb-1">
                <span className="font-semibold">J</span><span className="font-mono">· – – –</span>
              </div>
              <div className="flex justify-between border-b border-gray-200 dark:border-gray-700 pb-1">
                <span className="font-semibold">K</span><span className="font-mono">– · –</span>
              </div>
              <div className="flex justify-between border-b border-gray-200 dark:border-gray-700 pb-1">
                <span className="font-semibold">L</span><span className="font-mono">· – · ·</span>
              </div>
              <div className="flex justify-between border-b border-gray-200 dark:border-gray-700 pb-1">
                <span className="font-semibold">M</span><span className="font-mono">– –</span>
              </div>
              <div className="flex justify-between border-b border-gray-200 dark:border-gray-700 pb-1">
                <span className="font-semibold">N</span><span className="font-mono">– ·</span>
              </div>
              <div className="flex justify-between border-b border-gray-200 dark:border-gray-700 pb-1">
                <span className="font-semibold">O</span><span className="font-mono">– – –</span>
              </div>
              <div className="flex justify-between border-b border-gray-200 dark:border-gray-700 pb-1">
                <span className="font-semibold">P</span><span className="font-mono">· – – ·</span>
              </div>
              <div className="flex justify-between border-b border-gray-200 dark:border-gray-700 pb-1">
                <span className="font-semibold">Q</span><span className="font-mono">– – · –</span>
              </div>
              <div className="flex justify-between border-b border-gray-200 dark:border-gray-700 pb-1">
                <span className="font-semibold">R</span><span className="font-mono">· – ·</span>
              </div>
              <div className="flex justify-between border-b border-gray-200 dark:border-gray-700 pb-1">
                <span className="font-semibold">S</span><span className="font-mono">· · ·</span>
              </div>
              <div className="flex justify-between border-b border-gray-200 dark:border-gray-700 pb-1">
                <span className="font-semibold">T</span><span className="font-mono">–</span>
              </div>
              <div className="flex justify-between border-b border-gray-200 dark:border-gray-700 pb-1">
                <span className="font-semibold">U</span><span className="font-mono">· · –</span>
              </div>
              <div className="flex justify-between border-b border-gray-200 dark:border-gray-700 pb-1">
                <span className="font-semibold">V</span><span className="font-mono">· · · –</span>
              </div>
              <div className="flex justify-between border-b border-gray-200 dark:border-gray-700 pb-1">
                <span className="font-semibold">W</span><span className="font-mono">· – –</span>
              </div>
              <div className="flex justify-between border-b border-gray-200 dark:border-gray-700 pb-1">
                <span className="font-semibold">X</span><span className="font-mono">– · · –</span>
              </div>
              <div className="flex justify-between border-b border-gray-200 dark:border-gray-700 pb-1">
                <span className="font-semibold">Y</span><span className="font-mono">– · – –</span>
              </div>
              <div className="flex justify-between border-b border-gray-200 dark:border-gray-700 pb-1">
                <span className="font-semibold">Z</span><span className="font-mono">– – · ·</span>
              </div>
            </div>
            <div className="mt-4">
              <h3 className="font-semibold mb-2">Chiffres</h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3 text-sm">
                <div className="flex justify-between border-b border-gray-200 dark:border-gray-700 pb-1">
                  <span className="font-semibold">0</span><span className="font-mono">– – – – –</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 dark:border-gray-700 pb-1">
                  <span className="font-semibold">1</span><span className="font-mono">· – – – –</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 dark:border-gray-700 pb-1">
                  <span className="font-semibold">2</span><span className="font-mono">· · – – –</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 dark:border-gray-700 pb-1">
                  <span className="font-semibold">3</span><span className="font-mono">· · · – –</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 dark:border-gray-700 pb-1">
                  <span className="font-semibold">4</span><span className="font-mono">· · · · –</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 dark:border-gray-700 pb-1">
                  <span className="font-semibold">5</span><span className="font-mono">· · · · ·</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 dark:border-gray-700 pb-1">
                  <span className="font-semibold">6</span><span className="font-mono">– · · · ·</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 dark:border-gray-700 pb-1">
                  <span className="font-semibold">7</span><span className="font-mono">– – · · ·</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 dark:border-gray-700 pb-1">
                  <span className="font-semibold">8</span><span className="font-mono">– – – · ·</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 dark:border-gray-700 pb-1">
                  <span className="font-semibold">9</span><span className="font-mono">– – – – ·</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Cas d&apos;usage du code Morse</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="text-xl font-semibold mb-2">📻 Radioamateurs (HAM Radio)</h3>
                <p>
                  Les radioamateurs utilisent encore largement le code Morse (CW - Continuous Wave) pour 
                  les communications longue distance. Le Morse traverse mieux les interférences et nécessite 
                  moins de puissance que la voix, permettant des contacts à l&apos;autre bout du monde avec du 
                  matériel simple.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">✈️ Aviation et marine</h3>
                <p>
                  Les balises de navigation (VOR, NDB) transmettent leur identification en code Morse. 
                  Les signaux de détresse historiques comme SOS (· · · – – – · · ·) et Mayday utilisent 
                  le Morse. Certains systèmes de secours maritimes l&apos;emploient toujours.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🆘 Situations d&apos;urgence</h3>
                <p>
                  En situation de survie, le code Morse peut être transmis par lumière (lampe torche), 
                  son (sifflet), ou même visuellement. Le SOS universel est reconnu mondialement. Simple 
                  à apprendre et à mémoriser, il peut sauver des vies.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🎓 Éducation et apprentissage</h3>
                <p>
                  L&apos;apprentissage du Morse développe des compétences cognitives : mémorisation, concentration, 
                  coordination audio-motrice. C&apos;est un excellent exercice pour le cerveau, populaire dans 
                  les cours de télécommunications et l&apos;histoire des sciences.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">♿ Accessibilité</h3>
                <p>
                  Le code Morse sert de méthode de communication pour certaines personnes handicapées. 
                  Avec seulement deux états (point/tiret ou on/off), il peut être utilisé via des 
                  interrupteurs, souffle, ou mouvements oculaires pour communiquer.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🎮 Jeux et énigmes</h3>
                <p>
                  Le Morse apparaît dans les jeux vidéo, escape games, chasses au trésor et énigmes. 
                  C&apos;est un élément classique des puzzles de cryptographie et des défis intellectuels, 
                  ajoutant une dimension mystérieuse aux aventures.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🔐 Cryptographie amateur</h3>
                <p>
                  Bien que non sécurisé cryptographiquement, le Morse ajoute un niveau d&apos;obscurité aux 
                  messages. Combiné à d&apos;autres techniques de chiffrement, il peut servir dans des projets 
                  créatifs, artistiques ou pédagogiques.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Signaux de détresse et codes spéciaux</h2>
            <div className="space-y-3 text-gray-700 dark:text-gray-300">
              <div className="border-l-4 border-red-500 pl-4">
                <h3 className="font-semibold text-red-700 dark:text-red-300">SOS - · · · – – – · · ·</h3>
                <p className="text-sm">
                  Le signal de détresse international le plus connu. Signifie &quot;Save Our Souls&quot; ou &quot;Save Our 
                  Ship&quot;. Utilisé en situation de danger grave et imminent. Reconnu universellement depuis 1906.
                </p>
              </div>
              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="font-semibold text-orange-700 dark:text-orange-300">Mayday - – · – · – – · – · –</h3>
                <p className="text-sm">
                  Équivalent vocal de SOS, utilisé en radiotéléphonie. Vient du français &quot;M&apos;aidez&quot;. 
                  Répété trois fois pour éviter toute confusion. Priorité absolue sur toutes les communications.
                </p>
              </div>
              <div className="border-l-4 border-yellow-500 pl-4">
                <h3 className="font-semibold text-yellow-700 dark:text-yellow-300">CQ - – · – · – – · –</h3>
                <p className="text-sm">
                  Signal d&apos;appel général en radioamateur signifiant &quot;calling any station&quot; (j&apos;appelle toute 
                  station). Utilisé pour initier des contacts radio avec n&apos;importe quel opérateur disponible.
                </p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-semibold text-green-700 dark:text-green-300">Codes de procédure</h3>
                <p className="text-sm">
                  K (– · –) = invitation à transmettre | AR (· – · · – ·) = fin de transmission | 
                  BT (– · · · –) = séparation entre parties d&apos;un message | SK (· · · – · –) = fin de contact
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Conseils pour apprendre le code Morse</h2>
            <div className="space-y-3 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="font-semibold mb-1">✅ Apprenez par le son, pas visuellement</h3>
                <p className="text-sm">
                  Les experts recommandent d&apos;apprendre le Morse en écoutant le rythme sonore plutôt qu&apos;en 
                  comptant points et tirets. Chaque lettre a sa propre &quot;mélodie&quot;. Utilisez notre lecture 
                  audio pour vous entraîner à l&apos;oreille.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">✅ Commencez par les lettres courantes</h3>
                <p className="text-sm">
                  Maîtrisez d&apos;abord E (·), T (–), puis les lettres fréquentes comme A, I, N, S, R. 
                  Progressez graduellement vers les lettres plus complexes. La fréquence d&apos;usage facilite 
                  la mémorisation naturelle.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">✅ Pratiquez régulièrement</h3>
                <p className="text-sm">
                  10-15 minutes de pratique quotidienne sont plus efficaces que de longues sessions 
                  occasionnelles. La régularité développe la reconnaissance automatique et la fluidité. 
                  Utilisez des apps mobiles pour pratiquer partout.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">✅ Utilisez des mnémotechniques</h3>
                <p className="text-sm">
                  Créez des phrases mémorables. Par exemple : C (– · – ·) = &quot;Co-ca Co-la&quot;, 
                  Q (– – · –) = &quot;God Save the Queen&quot;. Les associations sonores aident énormément 
                  la mémorisation.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">✅ Augmentez progressivement la vitesse</h3>
                <p className="text-sm">
                  Commencez lentement (5-10 mots par minute) mais avec un bon espacement entre caractères. 
                  Une fois à l&apos;aise, augmentez progressivement. Les opérateurs professionnels atteignent 
                  25-30 WPM (words per minute).
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">✅ Transmettez et recevez</h3>
                <p className="text-sm">
                  Pratiquez les deux directions : décodage (réception) et encodage (transmission). Tapez 
                  votre propre Morse avec un manipulateur ou même en tapant sur une table. L&apos;envoi développe 
                  une compréhension plus profonde.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Questions fréquentes</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Combien de temps faut-il pour apprendre le code Morse ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Avec une pratique régulière, on peut mémoriser l&apos;alphabet complet en 1-2 semaines. 
                  Atteindre une vitesse de 10-15 mots par minute prend généralement 1-2 mois. Pour maîtriser 
                  vraiment (25+ WPM), comptez 6 mois à 1 an de pratique quotidienne.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Le code Morse est-il toujours utilisé professionnellement ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Son usage professionnel a fortement diminué, mais il persiste dans certains domaines : 
                  radioamateurs, balises de navigation aérienne et maritime, communications militaires 
                  spécifiques, et systèmes de secours de secours. Il reste précieux pour sa simplicité et 
                  robustesse.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Quelle est la différence entre point et tiret ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Un tiret dure exactement 3 fois plus longtemps qu&apos;un point. Entre les éléments d&apos;une 
                  lettre, on attend la durée d&apos;un point. Entre les lettres, 3 points. Entre les mots, 
                  7 points. Ce timing précis est essentiel pour la lisibilité.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Peut-on utiliser le code Morse avec une lampe torche ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Absolument ! C&apos;est une méthode classique de signalisation d&apos;urgence. Allumages courts 
                  pour les points, longs pour les tirets. Le SOS (· · · – – – · · ·) en lumière est 
                  reconnaissable et peut être vu de loin, idéal pour attirer l&apos;attention des secours.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Le code Morse fonctionne-t-il dans toutes les langues ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Le code Morse international couvre l&apos;alphabet latin, les chiffres et la ponctuation de base. 
                  Des extensions existent pour les caractères accentués (é, ñ, ü, etc.) et certains alphabets 
                  non-latins (cyrillique, grec, arabe, japonais) ont leurs propres variantes du Morse.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Pourquoi SOS et non autre chose ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  SOS a été choisi pour sa simplicité et sa distinctivité en Morse (· · · – – – · · ·). 
                  Le pattern est facile à reconnaître même dans de mauvaises conditions. Contrairement à la 
                  croyance populaire, ce n&apos;est pas un acronyme mais une simple séquence mnémotechnique.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  L&apos;outil peut-il générer des fichiers audio Morse ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Notre outil permet d&apos;écouter le code Morse en temps réel avec des bips standards. Pour 
                  créer des fichiers audio téléchargeables, vous pouvez utiliser des outils de capture audio 
                  ou des logiciels spécialisés de génération Morse.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Existe-t-il des certifications en code Morse ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Historiquement, un examen de Morse était obligatoire pour obtenir une licence de 
                  radioamateur. Cette exigence a été supprimée dans la plupart des pays, mais des 
                  certifications volontaires existent toujours, délivrées par les associations de 
                  radioamateurs.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Avantages de notre convertisseur Morse</h2>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Bidirectionnel</strong> - Conversion texte vers Morse et Morse vers texte
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Lecture audio</strong> - Écoutez le code Morse avec des bips authentiques
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Instantané</strong> - Conversion en temps réel pendant la saisie
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Alphabet complet</strong> - Lettres, chiffres et ponctuation
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>100% gratuit</strong> - Sans limitation ni inscription requise
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Pédagogique</strong> - Parfait pour l&apos;apprentissage et l&apos;entraînement
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Interface intuitive</strong> - Simple et facile à utiliser
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Hors ligne</strong> - Fonctionne sans connexion internet
                </span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
