"use client";

import Link from "next/link";
import TextToSpeech from "@/components/TextToSpeech";

export default function TextToSpeechPage() {
  return (
    <div className="min-h-screen flex flex-col p-4 sm:p-6 md:p-8">
      <header className="flex-shrink-0 mb-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-3">
          Synthèse Vocale - Texte vers Parole
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-400 text-sm sm:text-base max-w-3xl mx-auto">
          Convertissez votre texte en parole avec notre outil de synthèse vocale gratuit.
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
          <TextToSpeech />
        </div>

        {/* SEO Content */}
        <section className="mt-8 space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Qu&apos;est-ce que la synthèse vocale (Text-to-Speech) ?</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              La synthèse vocale, ou Text-to-Speech (TTS) en anglais, est une technologie qui convertit du texte 
              écrit en parole audible synthétisée. Cette technologie utilise des algorithmes avancés de traitement 
              du langage naturel et des voix numériques pour &quot;lire&quot; à voix haute n&apos;importe quel texte, 
              permettant ainsi aux utilisateurs d&apos;écouter du contenu plutôt que de le lire.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Autrefois robotique et peu naturelle, la synthèse vocale moderne utilise l&apos;intelligence artificielle 
              et le deep learning pour créer des voix étonnamment réalistes avec intonation, pauses naturelles, 
              emphase et émotions. Des technologies comme WaveNet de Google, Neural TTS d&apos;Amazon, et les voix 
              de Microsoft Azure ont révolutionné la qualité de la parole synthétisée.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Notre outil de synthèse vocale en ligne utilise l&apos;API Web Speech intégrée à votre navigateur, 
              offrant des voix de haute qualité dans de nombreuses langues sans installation de logiciel. Vous 
              pouvez convertir instantanément des articles, des emails, des documents, des livres numériques ou 
              tout autre texte en audio, puis l&apos;écouter sur place ou télécharger le fichier audio pour une 
              écoute ultérieure.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Que vous soyez étudiant révisant vos cours, professionnel écoutant des rapports pendant les trajets, 
              personne malvoyante accédant au contenu web, ou simplement quelqu&apos;un qui préfère l&apos;écoute à la 
              lecture, la synthèse vocale rend l&apos;information plus accessible et consommable dans plus de contextes.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Comment utiliser notre outil de synthèse vocale ?</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</span>
                <div>
                  <h3 className="font-semibold mb-1">Collez ou saisissez votre texte</h3>
                  <p>Copiez et collez le texte que vous souhaitez convertir en audio dans la zone de texte. 
                  Vous pouvez entrer jusqu&apos;à 5000 caractères à la fois.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">2</span>
                <div>
                  <h3 className="font-semibold mb-1">Choisissez la langue et la voix</h3>
                  <p>Sélectionnez la langue de votre texte (français, anglais, espagnol, etc.) et choisissez 
                  parmi les voix disponibles (homme, femme, différents accents).</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">3</span>
                <div>
                  <h3 className="font-semibold mb-1">Ajustez les paramètres</h3>
                  <p>Réglez la vitesse de lecture (0.5x à 2x), le volume, et la hauteur (pitch) de la voix 
                  selon vos préférences d&apos;écoute.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">4</span>
                <div>
                  <h3 className="font-semibold mb-1">Écoutez ou téléchargez</h3>
                  <p>Cliquez sur le bouton &quot;Lire&quot; pour écouter immédiatement, ou téléchargez le fichier 
                  audio MP3 pour l&apos;écouter plus tard sur votre smartphone, dans votre voiture, ou ailleurs.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Cas d&apos;usage de la synthèse vocale</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="text-xl font-semibold mb-2">📚 Apprentissage et éducation</h3>
                <p>
                  Étudiants : Convertissez vos cours, notes et polycopiés en audio pour réviser en marchant, 
                  en faisant du sport ou dans les transports. L&apos;écoute répétée améliore la mémorisation. 
                  Parfait pour l&apos;apprentissage des langues étrangères avec prononciation correcte. Créez des 
                  podcasts de révision personnalisés. Écoutez des articles scientifiques pendant que vous faites 
                  d&apos;autres tâches.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">♿ Accessibilité</h3>
                <p>
                  Essentiel pour les personnes aveugles ou malvoyantes pour accéder au contenu web, emails, 
                  documents. Aide les personnes dyslexiques qui trouvent la lecture difficile. Utile pour les 
                  personnes âgées ayant des problèmes de vision. Permet à tous d&apos;accéder à l&apos;information 
                  indépendamment des capacités de lecture. La synthèse vocale est un outil d&apos;inclusion majeur.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">💼 Productivité professionnelle</h3>
                <p>
                  Écoutez vos emails, rapports, articles de veille pendant les trajets domicile-travail. 
                  Transformez les longues documentations techniques en podcasts. Révisez des présentations en 
                  les écoutant. Consommez du contenu professionnel pendant le sport, le ménage, ou d&apos;autres 
                  activités. Gagnez du temps en multitâchant efficacement.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">📖 Lecture de livres et articles</h3>
                <p>
                  Convertissez des eBooks, PDFs, articles de blog en audiobooks personnalisés. Écoutez des 
                  articles de presse pendant le petit-déjeuner. Consommez plus de contenu en utilisant des temps 
                  &quot;morts&quot; (trajet, queue, gym). Préservez vos yeux en limitant le temps d&apos;écran. Parfait pour 
                  les livres de non-fiction, articles scientifiques, documentation.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🌍 Apprentissage des langues</h3>
                <p>
                  Écoutez la prononciation correcte de textes en langue étrangère. Améliore la compréhension 
                  orale. Permet de s&apos;immerger dans une langue pendant les activités quotidiennes. Utile pour 
                  pratiquer l&apos;écoute avant des examens de langue (TOEFL, DELF, etc.). Créez vos propres 
                  exercices d&apos;écoute personnalisés.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🎬 Création de contenu</h3>
                <p>
                  Créateurs de contenu : Générez des voix-off pour vidéos YouTube, tutoriels, présentations. 
                  Podcasters : Créez rapidement des narrations. Développeurs : Ajoutez des fonctionnalités 
                  vocales à vos applications. Prototypes de voix pour jeux vidéos. Annonces automatiques pour 
                  systèmes de notification.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🚗 Sécurité au volant</h3>
                <p>
                  Écoutez vos emails, messages importants ou articles sans quitter la route des yeux. Restez 
                  informé en sécurité. Convertissez des itinéraires textuels complexes en instructions audio. 
                  Écoutez des documents professionnels pendant les longs trajets sans compromettre la sécurité.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🧠 Mémorisation et rétention</h3>
                <p>
                  Des études montrent que combiner lecture visuelle et auditive améliore la rétention de 30-40%. 
                  Écoutez vos notes après les avoir lues. Créez des boucles de répétition pour mémoriser des 
                  définitions, formules, dates historiques. L&apos;apprentissage multimodal est plus efficace.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Langues et voix disponibles</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold text-lg mb-1">🇫🇷 Français</h3>
                <p className="text-sm">
                  Voix françaises (France), canadiennes françaises (Québec), belges et suisses disponibles. 
                  Choix entre voix masculines et féminines. Excellente prononciation des accents et liaisons.
                </p>
              </div>
              <div className="border-l-4 border-red-500 pl-4">
                <h3 className="font-semibold text-lg mb-1">🇬🇧🇺🇸 Anglais</h3>
                <p className="text-sm">
                  Anglais américain (US), britannique (UK), australien, indien, sud-africain. Plusieurs voix 
                  avec différents accents régionaux (Texas, New York, Cockney, Écossais, etc.).
                </p>
              </div>
              <div className="border-l-4 border-yellow-500 pl-4">
                <h3 className="font-semibold text-lg mb-1">🇪🇸 Espagnol</h3>
                <p className="text-sm">
                  Espagnol d&apos;Espagne (Castillan), mexicain, argentin, colombien, chilien. Prononciation 
                  adaptée aux différentes régions hispanophones.
                </p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-semibold text-lg mb-1">🇩🇪 Allemand</h3>
                <p className="text-sm">
                  Allemand standard, autrichien, suisse alémanique. Excellente gestion des mots composés longs 
                  caractéristiques de l&apos;allemand.
                </p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="font-semibold text-lg mb-1">🇮🇹 Italien</h3>
                <p className="text-sm">
                  Italien standard avec prononciation claire et mélodieuse. Gère bien les doubles consonnes et 
                  l&apos;emphase caractéristique de la langue italienne.
                </p>
              </div>
              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="font-semibold text-lg mb-1">🇵🇹🇧🇷 Portugais</h3>
                <p className="text-sm">
                  Portugais européen (Portugal) et brésilien. Différences notables d&apos;accent et prononciation 
                  bien rendues entre les deux variantes.
                </p>
              </div>
              <div className="border-l-4 border-pink-500 pl-4">
                <h3 className="font-semibold text-lg mb-1">🌏 Langues asiatiques</h3>
                <p className="text-sm">
                  Chinois (Mandarin simplifié et traditionnel, Cantonais), Japonais, Coréen, Hindi, Thaï, 
                  Vietnamien, Arabe. Qualité variable selon la langue et le navigateur.
                </p>
              </div>
              <div className="border-l-4 border-indigo-500 pl-4">
                <h3 className="font-semibold text-lg mb-1">🇪🇺 Autres langues européennes</h3>
                <p className="text-sm">
                  Néerlandais, Polonais, Russe, Tchèque, Grec, Suédois, Norvégien, Danois, Finnois, Hongrois, 
                  Roumain, Turc et bien d&apos;autres. Plus de 50 langues supportées au total.
                </p>
              </div>
              <p className="text-sm italic mt-4">
                <strong>Note :</strong> La disponibilité des voix et des langues dépend de votre navigateur et 
                système d&apos;exploitation. Chrome et Edge offrent généralement le plus large choix. Les voix sont 
                fournies par le système (Windows, macOS, Android, iOS) et peuvent varier.
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Paramètres de synthèse vocale expliqués</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="text-xl font-semibold mb-2">⚡ Vitesse de lecture (Rate)</h3>
                <p className="mb-2">
                  Contrôle la rapidité de la parole synthétisée :
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm ml-4">
                  <li><strong>0.5x (lent)</strong> : Idéal pour l&apos;apprentissage des langues, prononciation détaillée, 
                  prendre des notes. Utile pour les débutants ou contenu complexe.</li>
                  <li><strong>1.0x (normal)</strong> : Vitesse de conversation naturelle, environ 150-160 mots/minute. 
                  Meilleur compromis pour la plupart des utilisateurs.</li>
                  <li><strong>1.5x (rapide)</strong> : Accélère sans perdre la clarté. Parfait pour gagner du temps 
                  tout en maintenant la compréhension. Populaire pour podcasts et audiobooks.</li>
                  <li><strong>2.0x (très rapide)</strong> : Maximum supporté. Nécessite concentration mais double 
                  l&apos;efficacité. Pour utilisateurs expérimentés et contenu familier.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🎵 Hauteur tonale (Pitch)</h3>
                <p className="mb-2">
                  Modifie la hauteur de la voix (graves vs aigus) :
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm ml-4">
                  <li><strong>0.5 (très grave)</strong> : Voix profonde, masculine, peut sembler robotique</li>
                  <li><strong>1.0 (normale)</strong> : Hauteur naturelle de la voix sélectionnée (recommandé)</li>
                  <li><strong>1.5 (aigüe)</strong> : Voix plus haute, peut aider à distinguer du bruit ambiant</li>
                  <li><strong>2.0 (très aigüe)</strong> : Peut sembler artificiel, utiliser avec parcimonie</li>
                </ul>
                <p className="text-sm mt-2">
                  Modifier le pitch peut aider à personnaliser l&apos;expérience ou à différencier plusieurs voix 
                  dans des dialogues.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🔊 Volume</h3>
                <p>
                  Contrôle l&apos;amplitude sonore de 0% (muet) à 100% (maximum). Ajustez selon votre environnement 
                  d&apos;écoute. Pour une écoute dans un environnement bruyant, augmentez le volume. Pour une écoute 
                  au casque la nuit, réduisez-le. Notez que cela contrôle le volume de synthèse, en plus du volume 
                  système de votre appareil.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Optimiser la qualité de la synthèse vocale</h2>
            <div className="space-y-3 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="font-semibold mb-1">✅ Utilisez une ponctuation correcte</h3>
                <p className="text-sm">
                  Les points, virgules et points-virgules créent des pauses naturelles. Les points d&apos;exclamation 
                  et d&apos;interrogation influencent l&apos;intonation. Un texte bien ponctué sonne plus naturel et est 
                  plus facile à comprendre. Sans ponctuation, la voix synthétique lit tout d&apos;une traite.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">✅ Évitez les abréviations</h3>
                <p className="text-sm">
                  Écrivez &quot;Monsieur&quot; au lieu de &quot;M.&quot;, &quot;kilomètres&quot; au lieu de &quot;km&quot;, &quot;et cetera&quot; 
                  au lieu de &quot;etc.&quot;. Certaines abréviations ne sont pas correctement interprétées et peuvent 
                  être mal prononcées (ex: &quot;ex.&quot; lu comme &quot;ex point&quot; au lieu de &quot;exemple&quot;).
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">✅ Épeler les acronymes complexes</h3>
                <p className="text-sm">
                  Les acronymes connus (NASA, UNESCO, SNCF) sont généralement bien prononcés. Pour les acronymes 
                  obscurs ou spécifiques à votre domaine, ajoutez des espaces entre les lettres : C D N devient 
                  &quot;cé dé ène&quot; au lieu d&apos;être lu comme un mot.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">✅ Écrivez les nombres en toutes lettres</h3>
                <p className="text-sm">
                  Pour les dates, montants ou mesures importantes, écrivez &quot;vingt-cinq euros&quot; plutôt que 
                  &quot;25 €&quot;, surtout si la prononciation est ambiguë. Les nombres sont généralement bien 
                  prononcés mais peuvent parfois être épelés chiffre par chiffre.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">✅ Choisissez la bonne langue</h3>
                <p className="text-sm">
                  Si votre texte mélange plusieurs langues, séparez-le en sections et synthétisez chaque section 
                  avec la voix appropriée. Une voix française lira mal l&apos;anglais et vice versa. Pour les mots 
                  étrangers dans un texte français, essayez de les franciser phonétiquement.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">✅ Utilisez des voix premium si disponibles</h3>
                <p className="text-sm">
                  Certains navigateurs proposent des voix de base (gratuites) et des voix premium (Neural/WaveNet). 
                  Les voix premium sonnent beaucoup plus naturelles avec meilleure intonation. Elles valent le 
                  téléchargement si vous utilisez souvent la synthèse vocale.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">✅ Ajustez pour votre contexte d&apos;écoute</h3>
                <p className="text-sm">
                  Environnement calme (bureau, maison) : Vitesse normale, volume moyen. Transports bruyants : 
                  Volume élevé, vitesse légèrement réduite pour clarté. Écoute avant le sommeil : Vitesse réduite, 
                  volume faible, voix douce. Sport/marche rapide : Vitesse 1.5x-2x pour maintenir l&apos;attention.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">⚠️ Limitez les caractères spéciaux</h3>
                <p className="text-sm">
                  Les emojis, symboles mathématiques complexes, et formatage HTML ne sont pas bien gérés. 
                  Nettoyez votre texte avant synthèse. Les URLs longues sont lues caractère par caractère - 
                  remplacez par &quot;voir le lien&quot; ou similaire.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Comparaison : Synthèse vocale vs Audiobooks professionnels</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded">
                <h3 className="text-xl font-semibold mb-2">✅ Avantages de la synthèse vocale (TTS)</h3>
                <ul className="list-disc list-inside space-y-2 text-sm ml-4">
                  <li><strong>Instantané</strong> : Convertit n&apos;importe quel texte en secondes</li>
                  <li><strong>Gratuit</strong> : Aucun coût pour convertir vos propres textes</li>
                  <li><strong>Personnalisable</strong> : Contrôle total sur vitesse, voix, pitch</li>
                  <li><strong>Universel</strong> : Fonctionne pour tout contenu textuel (emails, articles, PDFs)</li>
                  <li><strong>Multilingue</strong> : Plus de 50 langues disponibles</li>
                  <li><strong>Accessible</strong> : Fonctionne dans le navigateur, aucune installation</li>
                  <li><strong>On-demand</strong> : Créez de l&apos;audio exactement quand vous en avez besoin</li>
                </ul>
              </div>
              <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded">
                <h3 className="text-xl font-semibold mb-2">📚 Avantages des audiobooks professionnels</h3>
                <ul className="list-disc list-inside space-y-2 text-sm ml-4">
                  <li><strong>Qualité vocale supérieure</strong> : Voix humaines avec émotions authentiques</li>
                  <li><strong>Performance théâtrale</strong> : Narration dramatique, personnages distincts</li>
                  <li><strong>Production professionnelle</strong> : Musique, effets sonores, montage</li>
                  <li><strong>Expérience immersive</strong> : Capture l&apos;intention de l&apos;auteur</li>
                  <li><strong>Pas de configuration</strong> : Prêt à l&apos;écoute, qualité garantie</li>
                  <li><strong>Confort long</strong> : Plus agréable pour des heures d&apos;écoute</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🎯 Quand utiliser chaque option ?</h3>
                <p className="mb-2"><strong>Utilisez la synthèse vocale TTS pour :</strong></p>
                <ul className="list-disc list-inside space-y-1 text-sm ml-4 mb-3">
                  <li>Articles de presse, blogs, documentation technique</li>
                  <li>Emails, rapports professionnels, notes de cours</li>
                  <li>Apprentissage de langues (prononciation)</li>
                  <li>Contenu qu&apos;on ne relira pas (actualités, emails)</li>
                  <li>Besoin de personnalisation (vitesse, voix)</li>
                </ul>
                <p className="mb-2"><strong>Choisissez les audiobooks professionnels pour :</strong></p>
                <ul className="list-disc list-inside space-y-1 text-sm ml-4">
                  <li>Fiction littéraire (romans, nouvelles)</li>
                  <li>Biographies et mémoires (émotion importante)</li>
                  <li>Livres pour enfants (voix animées)</li>
                  <li>Écoute prolongée de plusieurs heures</li>
                  <li>Quand l&apos;expérience auditive fait partie du plaisir</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Technologies de synthèse vocale modernes</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="text-xl font-semibold mb-2">🧠 TTS basé sur règles (Concatenative)</h3>
                <p>
                  Première génération de TTS. Enregistre des milliers de fragments de voix humaine (phonèmes, 
                  syllabes) et les assemble pour former des phrases. Résultat souvent robotique avec des transitions 
                  abruptes. Technologie en voie d&apos;obsolescence mais encore utilisée pour des systèmes simples.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🎼 TTS paramétrique</h3>
                <p>
                  Utilise des modèles statistiques pour générer des paramètres acoustiques (fréquence, durée, 
                  intensité) qui sont ensuite convertis en audio via un vocodeur. Plus lisse que la concaténation 
                  mais manque de naturel. Base de nombreux systèmes TTS modernes avant l&apos;ère du deep learning.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🚀 Neural TTS (Deep Learning)</h3>
                <p className="mb-2">
                  Révolution actuelle utilisant les réseaux de neurones profonds :
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm ml-4">
                  <li><strong>WaveNet (Google DeepMind)</strong> : Génère l&apos;audio échantillon par échantillon. 
                  Qualité quasi-humaine mais gourmand en calcul. Utilisé par Google Assistant.</li>
                  <li><strong>Tacotron 2 (Google)</strong> : Convertit texte en spectrogramme mel, puis en audio. 
                  Combiné avec WaveNet pour résultats impressionnants.</li>
                  <li><strong>Neural TTS (Microsoft)</strong> : Technologie d&apos;Azure Cognitive Services. Voix 
                  très naturelles avec contrôle des émotions et du style.</li>
                  <li><strong>Polly (Amazon AWS)</strong> : Service cloud avec voix Neural de haute qualité dans 
                  des dizaines de langues. Utilisé par de nombreuses apps.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🎭 Synthèse vocale émotionnelle</h3>
                <p>
                  Les dernières avancées permettent de contrôler l&apos;émotion dans la voix synthétique : joie, 
                  tristesse, colère, surprise. Utile pour assistants virtuels, jeux vidéo, narration dynamique. 
                  Des modèles comme GPT-4 combinés à TTS peuvent générer des réponses textuelles ET les lire avec 
                  l&apos;émotion appropriée.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🔮 Clonage de voix</h3>
                <p>
                  Technologies récentes (Eleven Labs, Resemble AI) permettent de créer une voix synthétique 
                  personnalisée à partir de quelques minutes d&apos;enregistrement. Applications : célébrités pour 
                  audiobooks, personnes ayant perdu leur voix, personnalisation d&apos;assistants. Soulève aussi des 
                  questions éthiques sur les deepfakes audio.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Questions fréquentes</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  La synthèse vocale fonctionne-t-elle hors ligne ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Cela dépend de votre système et navigateur. Sur Windows et macOS, certaines voix sont installées 
                  localement et fonctionnent hors ligne. Sur Chrome, certaines voix nécessitent une connexion 
                  internet car elles utilisent les serveurs cloud de Google. Les voix natives du système (comme 
                  Siri sur Mac/iOS ou Cortana sur Windows) fonctionnent généralement offline.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Puis-je utiliser la synthèse vocale commercialement ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Les voix du système (Windows, macOS, iOS, Android) sont généralement libres d&apos;usage pour un 
                  usage personnel et éducatif. Pour un usage commercial (vidéos YouTube monétisées, podcasts 
                  commerciaux, applications), vérifiez les conditions d&apos;utilisation spécifiques. Les services 
                  cloud premium (Google Cloud TTS, Amazon Polly, Azure) ont des licences commerciales claires mais 
                  payantes selon l&apos;usage.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Quelle est la limite de caractères ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Notre outil accepte jusqu&apos;à 5000 caractères par conversion (environ 3-5 pages de texte). 
                  Cette limite est due aux contraintes de l&apos;API Web Speech. Pour des textes plus longs, divisez-les 
                  en sections et synthétisez-les séparément, ou utilisez des services cloud professionnels qui 
                  supportent des documents entiers (livres complets).
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Pourquoi certaines voix sont-elles meilleures que d&apos;autres ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Les voix varient énormément en qualité. Les voix anciennes utilisent la synthèse par concaténation 
                  (robotique). Les voix récentes utilisent le deep learning (Neural TTS) et sonnent quasi-humaines. 
                  La qualité dépend aussi de votre système : Windows 10/11 a de meilleures voix que Windows 7. 
                  macOS et iOS ont généralement d&apos;excellentes voix Siri. Chrome offre l&apos;accès aux voix cloud 
                  premium de Google. Explorez les différentes voix disponibles pour trouver les meilleures.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Puis-je télécharger l&apos;audio généré ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Oui ! Notre outil permet de télécharger l&apos;audio synthétisé au format MP3 ou WAV. Vous pouvez 
                  ensuite l&apos;écouter sur votre smartphone, dans votre voiture via Bluetooth, le partager avec 
                  d&apos;autres, ou l&apos;intégrer dans vos projets. L&apos;audio téléchargé est de même qualité que la lecture 
                  en ligne. Idéal pour créer une bibliothèque d&apos;écoute personnalisée.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  La synthèse vocale respecte-t-elle ma vie privée ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Avec notre outil utilisant l&apos;API Web Speech native, la confidentialité dépend du navigateur. 
                  Les voix locales (système) traitent tout sur votre appareil - 100% privé. Les voix cloud 
                  (certaines sur Chrome) envoient le texte aux serveurs Google pour synthèse mais Google indique 
                  ne pas stocker le contenu. Pour un maximum de confidentialité, utilisez des voix système locales 
                  ou des services auto-hébergés.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Quels navigateurs supportent la synthèse vocale ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Tous les navigateurs modernes supportent l&apos;API Web Speech : Chrome/Chromium (meilleur support), 
                  Microsoft Edge, Safari (macOS/iOS), Firefox, Opera, Brave, Samsung Internet. Chrome offre 
                  généralement le plus grand choix de voix. Internet Explorer n&apos;est pas supporté. Sur mobile, 
                  le support est excellent sur iOS (Safari) et Android (Chrome, Samsung Browser).
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Comment ajouter plus de voix à mon système ?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <strong>Windows 10/11 :</strong> Paramètres → Heure et langue → Voix → Ajouter des voix. 
                  <strong>macOS :</strong> Préférences Système → Accessibilité → Contenu parlé → Voix système. 
                  <strong>iOS/iPad :</strong> Réglages → Accessibilité → Contenu énoncé → Voix. 
                  <strong>Android :</strong> Paramètres → Accessibilité → Synthèse vocale, puis téléchargez des 
                  moteurs TTS additionnels depuis le Play Store (Google TTS, Samsung TTS, etc.).
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Avantages de notre outil de synthèse vocale</h2>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>100% Gratuit et illimité</strong> - Convertissez autant de texte que vous voulez
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Plus de 50 langues</strong> - Support multilingue avec accents régionaux
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Contrôle total</strong> - Ajustez vitesse, pitch, volume selon vos préférences
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Téléchargement audio</strong> - Exportez en MP3 pour écoute offline
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Aucune installation</strong> - Fonctionne directement dans votre navigateur
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Confidentialité respectée</strong> - Vos textes ne sont pas stockés
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Interface intuitive</strong> - Facile à utiliser pour tous les niveaux
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Compatible tous appareils</strong> - Desktop, tablette, smartphone
                </span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
