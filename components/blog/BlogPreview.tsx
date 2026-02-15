import Link from 'next/link';
import ArticleCard from './ArticleCard';

interface Article {
  title: string;
  description: string;
  image: string;
  date: string;
  author: string;
  category: string;
  slug: string;
  readingTime?: string;
  tags?: string[];
}

interface BlogPreviewProps {
  articles: Article[];
  limit?: number;
}

/**
 * Section prévisualisation blog pour la homepage
 * Affiche les derniers articles avec CTA vers /blog
 */
export default function BlogPreview({ articles, limit = 3 }: BlogPreviewProps) {
  const displayedArticles = articles.slice(0, limit);

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Insights Veldra
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Outils puissants. Analyses expertes.
          </p>
          <p className="text-lg text-gray-500 mt-2">
            Découvrez nos guides, analyses et recommandations sur la finance, l'immobilier et le développement
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayedArticles.map((article) => (
            <ArticleCard key={article.slug} {...article} />
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Voir tous les articles
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
