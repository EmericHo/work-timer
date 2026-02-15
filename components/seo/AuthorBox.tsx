import { SITE_CONFIG } from '@/lib/config';

interface AuthorBoxProps {
  author: string;
  bio?: string;
}

/**
 * Box auteur E-E-A-T pour crédibilité SEO
 * Affiche les informations de l'auteur avec expertise
 */
export default function AuthorBox({
  author = 'Alex Veldra',
  bio = 'Développeur fullstack & investisseur immo/crypto - 8+ ans d\'expérience',
}: AuthorBoxProps) {
  const baseUrl = SITE_CONFIG.baseUrl;

  return (
    <div className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-100">
      <div className="flex items-start gap-4">
        {/* Avatar */}
        <div className="flex-shrink-0">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg">
            {author.charAt(0)}
          </div>
        </div>

        {/* Informations auteur */}
        <div className="flex-1">
          <h3 className="text-lg font-bold text-gray-900 mb-1">
            À propos de {author}
          </h3>
          <p className="text-gray-700 mb-3">{bio}</p>
          <div className="flex flex-wrap gap-2 text-sm text-gray-600">
            <span className="inline-flex items-center gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
              </svg>
              Expertise: Finance, Immo, Tech
            </span>
            <span className="text-gray-400">•</span>
            <a
              href={baseUrl}
              className="text-blue-600 hover:text-blue-700 font-medium"
              rel="author"
            >
              veldra.net
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
