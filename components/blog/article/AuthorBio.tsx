import Image from 'next/image';
import Link from 'next/link';

interface AuthorBioProps {
  variant?: 'sidebar' | 'extended';
  author?: string;
  bio?: string;
}

/**
 * Author bio component with E-E-A-T optimization for SEO
 * Two variants: sidebar (compact) and extended (full bio)
 */
export function AuthorBio({ 
  variant = 'sidebar',
  author = 'Alex Veldra',
  bio = 'Développeur fullstack & investisseur immo/crypto - 8+ ans d\'expérience'
}: AuthorBioProps) {
  
  if (variant === 'sidebar') {
    return (
      <div className="sticky top-24 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-12 w-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg flex-shrink-0">
            {author.charAt(0)}
          </div>
          <div>
            <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-50">
              {author}
            </h3>
            <p className="text-xs text-zinc-600 dark:text-zinc-400">
              Dev fullstack & Investisseur
            </p>
          </div>
        </div>
        <p className="text-sm text-zinc-700 dark:text-zinc-300 mb-4 leading-relaxed">
          8+ ans d&apos;expérience en dev web et investissements immo/crypto. 
          Créateur de 50+ outils gratuits.
        </p>
        <div className="flex gap-2">
          <Link 
            href="https://linkedin.com/in/veldra" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 px-3 py-2 text-sm border border-zinc-200 dark:border-zinc-700 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors text-center text-zinc-700 dark:text-zinc-300"
          >
            LinkedIn
          </Link>
          <Link 
            href="https://github.com/veldra" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 px-3 py-2 text-sm border border-zinc-200 dark:border-zinc-700 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors text-center text-zinc-700 dark:text-zinc-300"
          >
            GitHub
          </Link>
        </div>
      </div>
    );
  }
  
  // Extended version for footer
  return (
    <div className="my-12 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg p-6">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-shrink-0">
          <div className="h-24 w-24 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-3xl shadow-lg">
            {author.charAt(0)}
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-2 text-zinc-900 dark:text-zinc-50">
            À propos d&apos;{author}
          </h3>
          <p className="text-zinc-700 dark:text-zinc-300 mb-4 leading-relaxed">
            Développeur fullstack spécialisé Angular/Spring Boot depuis 8+ ans. 
            Investisseur actif en immobilier locatif (3 biens) et crypto (BTC, ETH, SOL). 
            Créateur de veldra.net et 50+ outils gratuits pour développeurs et investisseurs. 
            Passionné par l&apos;automatisation et les revenus passifs.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-200 text-sm rounded-full font-medium">
              Développement Web
            </span>
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-200 text-sm rounded-full font-medium">
              Finance
            </span>
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-200 text-sm rounded-full font-medium">
              Immobilier
            </span>
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-200 text-sm rounded-full font-medium">
              Crypto
            </span>
          </div>
          <div className="flex gap-3">
            <Link 
              href="https://linkedin.com/in/veldra" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm border border-zinc-200 dark:border-zinc-700 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors text-zinc-700 dark:text-zinc-300 font-medium"
            >
              LinkedIn
            </Link>
            <Link 
              href="https://github.com/veldra" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm border border-zinc-200 dark:border-zinc-700 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors text-zinc-700 dark:text-zinc-300 font-medium"
            >
              GitHub
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
