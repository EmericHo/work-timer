import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Outils Gratuits en Ligne - Timer, Calculatrices, Générateurs et Plus",
  description: "Suite d'outils gratuits en ligne : Timer Pomodoro, compresseur d'image, générateur UUID, JSON formatter, minificateur CSS/JS, éditeur Markdown, calculatrice scientifique et générateur IBAN. Outils professionnels pour développeurs et travailleurs.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col p-4 sm:p-8">
      <main className="flex flex-col gap-12 max-w-7xl mx-auto w-full">
        {/* Hero Section */}
        <section className="text-center py-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-balance mb-4">
            Outils Gratuits en Ligne - Productivité & Développement
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-6">
            Suite complète d&apos;outils professionnels 100% gratuits pour améliorer votre productivité, 
            optimiser votre code et faciliter votre développement web.
          </p>
        </section>

        {/* Outils de Productivité & Texte */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-center">🎯 Outils de Productivité & Texte</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-4">
            <Link href="/timer" className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all border-2 border-transparent hover:border-blue-500">
              <h3 className="text-2xl font-semibold mb-3">⏱️ Timer & Pomodoro</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-3">
                Chronomètre précis et technique Pomodoro pour maximiser votre concentration
              </p>
              <span className="text-blue-600 dark:text-blue-400 text-sm font-semibold">En savoir plus →</span>
            </Link>

            <Link href="/compteur-mots" className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all border-2 border-transparent hover:border-green-500">
              <h3 className="text-2xl font-semibold mb-3">📝 Compteur de Mots</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-3">
                Comptez mots, caractères, phrases et temps de lecture en temps réel
              </p>
              <span className="text-green-600 dark:text-green-400 text-sm font-semibold">En savoir plus →</span>
            </Link>

            <Link href="/generateur-lorem-ipsum" className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all border-2 border-transparent hover:border-purple-500">
              <h3 className="text-2xl font-semibold mb-3">📄 Lorem Ipsum</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-3">
                Générez du texte de remplissage pour vos maquettes et designs
              </p>
              <span className="text-purple-600 dark:text-purple-400 text-sm font-semibold">En savoir plus →</span>
            </Link>

            <Link href="/generateur-slug" className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all border-2 border-transparent hover:border-indigo-500">
              <h3 className="text-2xl font-semibold mb-3">🔗 Générateur de Slug</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-3">
                Créez des URLs SEO-friendly à partir de n&apos;importe quel texte
              </p>
              <span className="text-indigo-600 dark:text-indigo-400 text-sm font-semibold">En savoir plus →</span>
            </Link>

            <Link href="/repeteur-texte" className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all border-2 border-transparent hover:border-pink-500">
              <h3 className="text-2xl font-semibold mb-3">🔁 Répéteur de Texte</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-3">
                Répétez du texte plusieurs fois avec séparateur personnalisable
              </p>
              <span className="text-pink-600 dark:text-pink-400 text-sm font-semibold">En savoir plus →</span>
            </Link>

            <Link href="/convertisseur-morse" className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all border-2 border-transparent hover:border-teal-500">
              <h3 className="text-2xl font-semibold mb-3">📡 Code Morse</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-3">
                Convertissez texte en morse et vice-versa avec lecture audio
              </p>
              <span className="text-teal-600 dark:text-teal-400 text-sm font-semibold">En savoir plus →</span>
            </Link>

            <Link href="/comparateur-texte" className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all border-2 border-transparent hover:border-orange-500">
              <h3 className="text-2xl font-semibold mb-3">🔍 Comparateur de Texte</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-3">
                Comparez deux textes et visualisez les différences ligne par ligne
              </p>
              <span className="text-orange-600 dark:text-orange-400 text-sm font-semibold">En savoir plus →</span>
            </Link>

            <Link href="/convertisseur-unites" className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all border-2 border-transparent hover:border-cyan-500">
              <h3 className="text-2xl font-semibold mb-3">⚖️ Convertisseur d&apos;Unités</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-3">
                Convertissez longueurs, poids, températures et volumes facilement
              </p>
              <span className="text-cyan-600 dark:text-cyan-400 text-sm font-semibold">En savoir plus →</span>
            </Link>

            <Link href="/csv-to-json" className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all border-2 border-transparent hover:border-emerald-500">
              <h3 className="text-2xl font-semibold mb-3">📊 CSV vers JSON</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-3">
                Convertissez vos fichiers CSV en JSON instantanément
              </p>
              <span className="text-emerald-600 dark:text-emerald-400 text-sm font-semibold">En savoir plus →</span>
            </Link>
          </div>
        </section>

        {/* Outils pour Développeurs & Sécurité */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-center">💻 Outils pour Développeurs & Sécurité</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-4">
            <Link href="/json-formatter" className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all border-2 border-transparent hover:border-blue-500">
              <h3 className="text-2xl font-semibold mb-3">📋 JSON Formatter</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-3">
                Formatez, validez et minifiez vos fichiers JSON avec syntaxe colorée
              </p>
              <span className="text-blue-600 dark:text-blue-400 text-sm font-semibold">En savoir plus →</span>
            </Link>
            
            <Link href="/minificateur-css-js" className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all border-2 border-transparent hover:border-orange-500">
              <h3 className="text-2xl font-semibold mb-3">🗜️ Minificateur CSS/JS</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-3">
                Compressez vos fichiers CSS et JavaScript pour optimiser les performances
              </p>
              <span className="text-orange-600 dark:text-orange-400 text-sm font-semibold">En savoir plus →</span>
            </Link>
            
            <Link href="/editeur-markdown" className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all border-2 border-transparent hover:border-indigo-500">
              <h3 className="text-2xl font-semibold mb-3">📝 Éditeur Markdown</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-3">
                Éditeur Markdown en ligne avec aperçu en temps réel et export
              </p>
              <span className="text-indigo-600 dark:text-indigo-400 text-sm font-semibold">En savoir plus →</span>
            </Link>

            <Link href="/encodeur-base64" className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all border-2 border-transparent hover:border-green-500">
              <h3 className="text-2xl font-semibold mb-3">🔐 Encodeur Base64</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-3">
                Encodez et décodez vos données en Base64 pour emails et APIs
              </p>
              <span className="text-green-600 dark:text-green-400 text-sm font-semibold">En savoir plus →</span>
            </Link>

            <Link href="/generateur-hash" className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all border-2 border-transparent hover:border-red-500">
              <h3 className="text-2xl font-semibold mb-3">🔒 Générateur de Hash</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-3">
                Générez des hash MD5, SHA-1, SHA-256, SHA-512 pour vos données
              </p>
              <span className="text-red-600 dark:text-red-400 text-sm font-semibold">En savoir plus →</span>
            </Link>

            <Link href="/testeur-regex" className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all border-2 border-transparent hover:border-purple-500">
              <h3 className="text-2xl font-semibold mb-3">🎯 Testeur Regex</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-3">
                Testez vos expressions régulières avec mise en surbrillance en direct
              </p>
              <span className="text-purple-600 dark:text-purple-400 text-sm font-semibold">En savoir plus →</span>
            </Link>

            <Link href="/encodeur-url" className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all border-2 border-transparent hover:border-yellow-500">
              <h3 className="text-2xl font-semibold mb-3">🌐 Encodeur URL</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-3">
                Encodez et décodez les URLs pour vos liens et APIs web
              </p>
              <span className="text-yellow-600 dark:text-yellow-400 text-sm font-semibold">En savoir plus →</span>
            </Link>

            <Link href="/decodeur-jwt" className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all border-2 border-transparent hover:border-teal-500">
              <h3 className="text-2xl font-semibold mb-3">🎫 Décodeur JWT</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-3">
                Décodez et inspectez vos tokens JWT visuellement
              </p>
              <span className="text-teal-600 dark:text-teal-400 text-sm font-semibold">En savoir plus →</span>
            </Link>

            <Link href="/generateur-meta-seo" className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all border-2 border-transparent hover:border-pink-500">
              <h3 className="text-2xl font-semibold mb-3">🏷️ Meta Tags SEO</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-3">
                Générez des meta tags optimisés pour le référencement de votre site
              </p>
              <span className="text-pink-600 dark:text-pink-400 text-sm font-semibold">En savoir plus →</span>
            </Link>

            <Link href="/generateur-robots-txt" className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all border-2 border-transparent hover:border-cyan-500">
              <h3 className="text-2xl font-semibold mb-3">🤖 Robots.txt</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-3">
                Créez votre fichier robots.txt pour contrôler l&apos;indexation
              </p>
              <span className="text-cyan-600 dark:text-cyan-400 text-sm font-semibold">En savoir plus →</span>
            </Link>

            <Link href="/minificateur-html" className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all border-2 border-transparent hover:border-blue-500">
              <h3 className="text-2xl font-semibold mb-3">📦 Minificateur HTML</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-3">
                Compressez votre code HTML pour améliorer les performances web
              </p>
              <span className="text-blue-600 dark:text-blue-400 text-sm font-semibold">En savoir plus →</span>
            </Link>
          </div>
        </section>

        {/* Outils Design & Créatifs */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-center">🎨 Outils Design & Créatifs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-4">
            <Link href="/convertisseur-couleur" className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all border-2 border-transparent hover:border-red-500">
              <h3 className="text-2xl font-semibold mb-3">🎨 Convertisseur Couleur</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-3">
                Convertissez entre HEX, RGB et HSL avec prévisualisation en direct
              </p>
              <span className="text-red-600 dark:text-red-400 text-sm font-semibold">En savoir plus →</span>
            </Link>

            <Link href="/generateur-palette-couleurs" className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all border-2 border-transparent hover:border-purple-500">
              <h3 className="text-2xl font-semibold mb-3">🌈 Palette de Couleurs</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-3">
                Générez des palettes harmonieuses, export CSS et Tailwind
              </p>
              <span className="text-purple-600 dark:text-purple-400 text-sm font-semibold">En savoir plus →</span>
            </Link>

            <Link href="/generateur-gradient-css" className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all border-2 border-transparent hover:border-pink-500">
              <h3 className="text-2xl font-semibold mb-3">🌅 Gradient CSS</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-3">
                Créez des dégradés CSS linéaires et radiaux interactifs
              </p>
              <span className="text-pink-600 dark:text-pink-400 text-sm font-semibold">En savoir plus →</span>
            </Link>

            <Link href="/generateur-shadow-css" className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all border-2 border-transparent hover:border-indigo-500">
              <h3 className="text-2xl font-semibold mb-3">💫 Box Shadow CSS</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-3">
                Générez des ombres CSS avec prévisualisation instantanée
              </p>
              <span className="text-indigo-600 dark:text-indigo-400 text-sm font-semibold">En savoir plus →</span>
            </Link>

            <Link href="/generateur-banniere-linkedin" className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all border-2 border-transparent hover:border-blue-500">
              <h3 className="text-2xl font-semibold mb-3">💼 Bannière LinkedIn</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-3">
                Créez des bannières professionnelles pour votre profil LinkedIn
              </p>
              <span className="text-blue-600 dark:text-blue-400 text-sm font-semibold">En savoir plus →</span>
            </Link>
          </div>
        </section>
        {/* Outils Générateurs & Aléatoires */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-center">🎲 Générateurs & Aléatoires</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-4">
            <Link href="/generateur-mot-de-passe" className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all border-2 border-transparent hover:border-red-500">
              <h3 className="text-2xl font-semibold mb-3">🔑 Mot de Passe</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-3">
                Générez des mots de passe sécurisés et personnalisables
              </p>
              <span className="text-red-600 dark:text-red-400 text-sm font-semibold">En savoir plus →</span>
            </Link>

            <Link href="/generateur-nombre-aleatoire" className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all border-2 border-transparent hover:border-green-500">
              <h3 className="text-2xl font-semibold mb-3">🎲 Nombre Aléatoire</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-3">
                Générez des nombres aléatoires avec plage personnalisable
              </p>
              <span className="text-green-600 dark:text-green-400 text-sm font-semibold">En savoir plus →</span>
            </Link>

            <Link href="/lanceur-des" className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all border-2 border-transparent hover:border-purple-500">
              <h3 className="text-2xl font-semibold mb-3">🎲 Lanceur de Dés</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-3">
                Lancez des dés D&D (d4, d6, d8, d10, d12, d20, d100)
              </p>
              <span className="text-purple-600 dark:text-purple-400 text-sm font-semibold">En savoir plus →</span>
            </Link>

            <Link href="/pile-ou-face" className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all border-2 border-transparent hover:border-blue-500">
              <h3 className="text-2xl font-semibold mb-3">🪙 Pile ou Face</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-3">
                Tirez à pile ou face avec animation et historique
              </p>
              <span className="text-blue-600 dark:text-blue-400 text-sm font-semibold">En savoir plus →</span>
            </Link>

            <Link href="/generateur-nom-aleatoire" className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all border-2 border-transparent hover:border-yellow-500">
              <h3 className="text-2xl font-semibold mb-3">👤 Noms Aléatoires</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-3">
                Générez des prénoms, noms complets ou pseudos aléatoires
              </p>
              <span className="text-yellow-600 dark:text-yellow-400 text-sm font-semibold">En savoir plus →</span>
            </Link>

            <Link href="/generateur-nom-entreprise" className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all border-2 border-transparent hover:border-orange-500">
              <h3 className="text-2xl font-semibold mb-3">🏢 Nom d&apos;Entreprise</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-3">
                Trouvez le nom parfait pour votre startup ou entreprise
              </p>
              <span className="text-orange-600 dark:text-orange-400 text-sm font-semibold">En savoir plus →</span>
            </Link>

            <Link href="/generateur-excuses" className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all border-2 border-transparent hover:border-pink-500">
              <h3 className="text-2xl font-semibold mb-3">😅 Excuses Amusantes</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-3">
                Générez des excuses créatives pour toutes les situations
              </p>
              <span className="text-pink-600 dark:text-pink-400 text-sm font-semibold">En savoir plus →</span>
            </Link>

            <Link href="/generateur-uuid" className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all border-2 border-transparent hover:border-cyan-500">
              <h3 className="text-2xl font-semibold mb-3">🆔 Générateur UUID</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-3">
                Créez des identifiants uniques universels v1 et v4 en masse
              </p>
              <span className="text-cyan-600 dark:text-cyan-400 text-sm font-semibold">En savoir plus →</span>
            </Link>
            
            <Link href="/generateur-iban" className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all border-2 border-transparent hover:border-emerald-500">
              <h3 className="text-2xl font-semibold mb-3">🏦 Générateur IBAN</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-3">
                Générez des numéros IBAN de test pour 8 pays européens
              </p>
              <span className="text-emerald-600 dark:text-emerald-400 text-sm font-semibold">En savoir plus →</span>
            </Link>
            
            <Link href="/generateur-qr-code" className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all border-2 border-transparent hover:border-purple-500">
              <h3 className="text-2xl font-semibold mb-3">📱 Générateur QR Code</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-3">
                Créez des QR codes personnalisés avec couleurs et export PNG/SVG
              </p>
              <span className="text-purple-600 dark:text-purple-400 text-sm font-semibold">En savoir plus →</span>
            </Link>

            <Link href="/generateur-nom-personnage" className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all border-2 border-transparent hover:border-red-500">
              <h3 className="text-2xl font-semibold mb-3">🧙 Nom de Personnage</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-3">
                Générez des noms de personnages pour vos histoires et jeux
              </p>
              <span className="text-red-600 dark:text-red-400 text-sm font-semibold">En savoir plus →</span>
            </Link>
            
            <Link href="/compresseur-image" className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all border-2 border-transparent hover:border-teal-500">
              <h3 className="text-2xl font-semibold mb-3">🖼️ Compresseur d&apos;Images</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-3">
                Réduisez la taille de vos images JPG, PNG et WebP sans perte visible
              </p>
              <span className="text-teal-600 dark:text-teal-400 text-sm font-semibold">En savoir plus →</span>
            </Link>
          </div>
        </section>

        {/* Outils Financiers & Calculatrices */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-center">💰 Outils Financiers & Calculatrices</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-4">
            <Link href="/calculatrice-fiscale" className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all border-2 border-transparent hover:border-green-500">
              <h3 className="text-2xl font-semibold mb-3">🧮 Calculatrice Fiscale</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-3">
                Calculez votre impôt sur le revenu 2025-2026
              </p>
              <span className="text-green-600 dark:text-green-400 text-sm font-semibold">En savoir plus →</span>
            </Link>

            <Link href="/calculatrice-avancee" className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all border-2 border-transparent hover:border-purple-500">
              <h3 className="text-2xl font-semibold mb-3">🔬 Calculatrice Scientifique</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-3">
                Fonctions trigonométriques, logarithmes et calculs avancés
              </p>
              <span className="text-purple-600 dark:text-purple-400 text-sm font-semibold">En savoir plus →</span>
            </Link>

            <Link href="/convertisseur-devises" className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all border-2 border-transparent hover:border-blue-500">
              <h3 className="text-2xl font-semibold mb-3">💱 Convertisseur Devises</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-3">
                Convertissez entre 8 devises majeures (EUR, USD, GBP, JPY...)
              </p>
              <span className="text-blue-600 dark:text-blue-400 text-sm font-semibold">En savoir plus →</span>
            </Link>

            <Link href="/calculateur-roi" className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all border-2 border-transparent hover:border-yellow-500">
              <h3 className="text-2xl font-semibold mb-3">📈 Calculateur ROI</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-3">
                Calculez votre retour sur investissement facilement
              </p>
              <span className="text-yellow-600 dark:text-yellow-400 text-sm font-semibold">En savoir plus →</span>
            </Link>

            <Link href="/calculateur-interets-composes" className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all border-2 border-transparent hover:border-emerald-500">
              <h3 className="text-2xl font-semibold mb-3">💸 Intérêts Composés</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-3">
                Calculez la croissance de vos investissements à long terme
              </p>
              <span className="text-emerald-600 dark:text-emerald-400 text-sm font-semibold">En savoir plus →</span>
            </Link>

            <Link href="/calculateur-credit-immobilier" className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all border-2 border-transparent hover:border-orange-500">
              <h3 className="text-2xl font-semibold mb-3">🏠 Crédit Immobilier</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-3">
                Calculez vos mensualités de prêt immobilier détaillées
              </p>
              <span className="text-orange-600 dark:text-orange-400 text-sm font-semibold">En savoir plus →</span>
            </Link>

            <Link href="/calculateur-pourboire" className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all border-2 border-transparent hover:border-pink-500">
              <h3 className="text-2xl font-semibold mb-3">💵 Calculateur Pourboire</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-3">
                Calculez pourboires et division de l&apos;addition facilement
              </p>
              <span className="text-pink-600 dark:text-pink-400 text-sm font-semibold">En savoir plus →</span>
            </Link>

            <Link href="/simulateur-scpi" className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all border-2 border-transparent hover:border-teal-500">
              <h3 className="text-2xl font-semibold mb-3">🏢 Simulateur SCPI</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-3">
                Simulez vos investissements immobiliers en SCPI avec rendements
              </p>
              <span className="text-teal-600 dark:text-teal-400 text-sm font-semibold">En savoir plus →</span>
            </Link>

            <Link href="/calculateur-credit" className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all border-2 border-transparent hover:border-indigo-500">
              <h3 className="text-2xl font-semibold mb-3">🚗 Calculateur Crédit</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-3">
                Calculez vos mensualités de crédit auto et immobilier
              </p>
              <span className="text-indigo-600 dark:text-indigo-400 text-sm font-semibold">En savoir plus →</span>
            </Link>

            <Link href="/planificateur-budget" className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all border-2 border-transparent hover:border-cyan-500">
              <h3 className="text-2xl font-semibold mb-3">📊 Budget Planner</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-3">
                Gérez votre budget personnel avec la règle 50/30/20
              </p>
              <span className="text-cyan-600 dark:text-cyan-400 text-sm font-semibold">En savoir plus →</span>
            </Link>

            <Link href="/tracker-crypto" className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all border-2 border-transparent hover:border-yellow-500">
              <h3 className="text-2xl font-semibold mb-3">₿ Crypto Portfolio</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-3">
                Suivez vos investissements crypto et calculez vos gains/pertes
              </p>
              <span className="text-yellow-600 dark:text-yellow-400 text-sm font-semibold">En savoir plus →</span>
            </Link>
          </div>
        </section>

        {/* Outils Média & Utilitaires */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-center">🎬 Outils Média & Divers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-4">
            <Link href="/redimensionneur-image" className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all border-2 border-transparent hover:border-purple-500">
              <h3 className="text-2xl font-semibold mb-3">📐 Redimensionneur Image</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-3">
                Redimensionnez vos images avec prévisualisation en direct
              </p>
              <span className="text-purple-600 dark:text-purple-400 text-sm font-semibold">En savoir plus →</span>
            </Link>

            <Link href="/generateur-code-barres" className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all border-2 border-transparent hover:border-indigo-500">
              <h3 className="text-2xl font-semibold mb-3">📊 Code-Barres</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-3">
                Générez codes-barres Code128, EAN13, UPC et Code39
              </p>
              <span className="text-indigo-600 dark:text-indigo-400 text-sm font-semibold">En savoir plus →</span>
            </Link>

            <Link href="/calculateur-duree-video" className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all border-2 border-transparent hover:border-teal-500">
              <h3 className="text-2xl font-semibold mb-3">⏱️ Durée Vidéo</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-3">
                Calculez la durée totale de plusieurs vidéos facilement
              </p>
              <span className="text-teal-600 dark:text-teal-400 text-sm font-semibold">En savoir plus →</span>
            </Link>

            <Link href="/convertisseur-fuseau-horaire" className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all border-2 border-transparent hover:border-blue-500">
              <h3 className="text-2xl font-semibold mb-3">🌍 Fuseau Horaire</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-3">
                Convertissez heures entre différents fuseaux horaires
              </p>
              <span className="text-blue-600 dark:text-blue-400 text-sm font-semibold">En savoir plus →</span>
            </Link>

            <Link href="/text-to-speech" className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all border-2 border-transparent hover:border-pink-500">
              <h3 className="text-2xl font-semibold mb-3">🔊 Text to Speech</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-3">
                Convertissez texte en audio avec voix synthétique
              </p>
              <span className="text-pink-600 dark:text-pink-400 text-sm font-semibold">En savoir plus →</span>
            </Link>

            <Link href="/destination-voyage-aleatoire" className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all border-2 border-transparent hover:border-sky-500">
              <h3 className="text-2xl font-semibold mb-3">✈️ Destination Aléatoire</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-3">
                Découvrez votre prochaine destination de voyage au hasard
              </p>
              <span className="text-sky-600 dark:text-sky-400 text-sm font-semibold">En savoir plus →</span>
            </Link>
          </div>
        </section>

        {/* Outils Éducatifs */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-center">📚 Outils Éducatifs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-4">
            <Link href="/table-multiplication" className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all border-2 border-transparent hover:border-green-500">
              <h3 className="text-2xl font-semibold mb-3">✖️ Tables de Multiplication</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-3">
                Apprenez et révisez les tables de multiplication interactives
              </p>
              <span className="text-green-600 dark:text-green-400 text-sm font-semibold">En savoir plus →</span>
            </Link>

            <Link href="/calculateur-formules" className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all border-2 border-transparent hover:border-purple-500">
              <h3 className="text-2xl font-semibold mb-3">🧪 Calculateur Formules</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-3">
                Calculez formules mathématiques avec variables personnalisables
              </p>
              <span className="text-purple-600 dark:text-purple-400 text-sm font-semibold">En savoir plus →</span>
            </Link>
          </div>
        </section>

        {/* À propos du site */}
        <section className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 mt-8">
          <h2 className="text-3xl font-bold mb-6 text-center">À propos de notre suite d&apos;outils</h2>
          <div className="max-w-4xl mx-auto space-y-6 text-gray-700 dark:text-gray-300">
            <p className="text-lg leading-relaxed">
              Notre plateforme regroupe une <strong>collection complète d&apos;outils gratuits en ligne</strong> conçus 
              pour répondre aux besoins des <strong>professionnels</strong>, <strong>développeurs</strong>, 
              <strong>étudiants</strong> et <strong>entrepreneurs</strong>. Tous nos outils fonctionnent 
              entièrement dans votre navigateur, garantissant la <strong>confidentialité</strong> et 
              la <strong>sécurité</strong> de vos données.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
              <div className="text-center p-4">
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">55+</div>
                <div className="text-sm font-semibold">Outils Gratuits</div>
              </div>
              <div className="text-center p-4">
                <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">100%</div>
                <div className="text-sm font-semibold">Gratuit & Sans Pub Intrusive</div>
              </div>
              <div className="text-center p-4">
                <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">0</div>
                <div className="text-sm font-semibold">Inscription Requise</div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold mb-4">🎯 Notre Mission</h3>
              <p className="leading-relaxed">
                Nous croyons que les outils professionnels de qualité devraient être accessibles à tous, 
                gratuitement. C&apos;est pourquoi nous développons et maintenons cette suite d&apos;outils 
                avec une attention particulière portée à la <strong>simplicité d&apos;utilisation</strong>, 
                la <strong>performance</strong> et le <strong>respect de votre vie privée</strong>.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold mb-4">🔒 Confidentialité & Sécurité</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold mt-1">✓</span>
                  <span><strong>Traitement local</strong> - Toutes les opérations se font dans votre navigateur</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold mt-1">✓</span>
                  <span><strong>Aucune collecte de données</strong> - Vos fichiers et informations restent privés</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold mt-1">✓</span>
                  <span><strong>Code sécurisé</strong> - Protection contre les vulnérabilités XSS et injections</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold mt-1">✓</span>
                  <span><strong>HTTPS</strong> - Connexion sécurisée pour toutes vos interactions</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold mb-4">💡 Pourquoi Choisir Nos Outils ?</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold mt-1">→</span>
                  <span><strong>Sans installation</strong> - Utilisez directement depuis votre navigateur</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold mt-1">→</span>
                  <span><strong>Multi-plateforme</strong> - Compatible Windows, Mac, Linux, iOS et Android</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold mt-1">→</span>
                  <span><strong>Toujours à jour</strong> - Nouvelles fonctionnalités ajoutées régulièrement</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold mt-1">→</span>
                  <span><strong>Open Source</strong> - Code transparent et vérifiable</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center py-8">
          <h2 className="text-2xl font-bold mb-4">Commencez dès maintenant</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
            Choisissez l&apos;outil dont vous avez besoin ci-dessus et commencez à l&apos;utiliser 
            immédiatement. Aucune inscription, aucun téléchargement, 100% gratuit.
          </p>
          <div className="flex gap-4 items-center justify-center flex-wrap">
            <Link
              href="/timer"
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-blue-600 text-white gap-2 hover:bg-blue-700 text-base sm:text-lg h-12 sm:h-14 px-6 sm:px-8 focus-visible:outline-2 focus-visible:outline-blue-500"
            >
              Timer & Pomodoro
            </Link>
            <Link
              href="/json-formatter"
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-indigo-600 text-white gap-2 hover:bg-indigo-700 text-base sm:text-lg h-12 sm:h-14 px-6 sm:px-8 focus-visible:outline-2 focus-visible:outline-indigo-500"
            >
              JSON Formatter
            </Link>
            <Link
              href="/guide"
              className="rounded-full border border-solid border-gray-300 dark:border-gray-600 transition-colors flex items-center justify-center bg-transparent text-gray-900 dark:text-gray-100 gap-2 hover:bg-gray-100 dark:hover:bg-gray-800 text-base sm:text-lg h-12 sm:h-14 px-6 sm:px-8 focus-visible:outline-2 focus-visible:outline-gray-500"
            >
              Consulter le Guide
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
