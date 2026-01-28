import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 mt-auto py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8 mb-6">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-gray-100">
              Timer Focus
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
              Suite complète d&apos;outils gratuits en ligne : Timer Pomodoro, compresseur d&apos;image, 
              générateurs, formatters et calculatrices pour améliorer votre productivité.
            </p>
            <Link 
              href="/a-propos" 
              className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
            >
              En savoir plus →
            </Link>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-gray-100">
              Outils Principaux
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/timer" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                  Timer & Pomodoro
                </Link>
              </li>
              <li>
                <Link href="/calculatrice-fiscale" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                  Calculatrice Fiscale
                </Link>
              </li>
              <li>
                <Link href="/compresseur-image" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                  Compresseur Image
                </Link>
              </li>
              <li>
                <Link href="/generateur-uuid" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                  Générateur UUID
                </Link>
              </li>
            </ul>
          </div>

          {/* Developer Tools */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-gray-100">
              Outils Développeurs
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/json-formatter" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                  JSON Formatter
                </Link>
              </li>
              <li>
                <Link href="/minificateur-css-js" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                  Minificateur CSS/JS
                </Link>
              </li>
              <li>
                <Link href="/editeur-markdown" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                  Éditeur Markdown
                </Link>
              </li>
              <li>
                <Link href="/calculatrice-avancee" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                  Calculatrice Avancée
                </Link>
              </li>
              <li>
                <Link href="/generateur-iban" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                  Générateur IBAN
                </Link>
              </li>
            </ul>
          </div>

          {/* Information Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-gray-100">
              Informations
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/guide" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                  Guide de Productivité
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/a-propos" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                  À Propos
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-gray-100">
              Informations Légales
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/politique-confidentialite" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                  Politique de Confidentialité
                </Link>
              </li>
              <li>
                <Link href="/conditions-utilisation" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                  Conditions d&apos;Utilisation
                </Link>
              </li>
              <li>
                <a 
                  href="https://www.cnil.fr" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  CNIL (RGPD)
                </a>
              </li>
              <li>
                <a 
                  href="https://policies.google.com/privacy" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Confidentialité Google
                </a>
              </li>
              <li>
                <a 
                  href="https://adssettings.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Paramètres des annonces
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600 dark:text-gray-400 text-center sm:text-left">
              © {currentYear} Outils Gratuits en Ligne. Tous droits réservés.
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-500 text-center sm:text-right">
              Application gratuite financée par la publicité (Google AdSense)
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
