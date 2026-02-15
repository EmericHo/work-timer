import Link from 'next/link';
import ArticleCard from '@/components/blog/ArticleCard';

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

interface ArticleGridProps {
  articles: Article[];
  limit?: number;
}

export default function ArticleGrid({ articles, limit = 9 }: ArticleGridProps) {
  const displayArticles = articles.slice(0, limit);

  if (displayArticles.length === 0) {
    return null;
  }

  return (
    <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Articles Récents
        </h2>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayArticles.map((article) => (
            <ArticleCard key={article.slug} {...article} />
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Charger plus d&apos;articles
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
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
