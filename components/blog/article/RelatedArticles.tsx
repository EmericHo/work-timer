import Link from 'next/link';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

interface Article {
  slug: string;
  title: string;
  description?: string;
  image?: string;
  date: string;
  readingTime: string;
  category: string;
}

interface RelatedArticlesProps {
  articles: Article[];
}

/**
 * Related articles section
 * Displays similar articles in card format
 */
export function RelatedArticles({ articles }: RelatedArticlesProps) {
  if (!articles || articles.length === 0) {
    return null;
  }
  
  return (
    <div className="my-12">
      <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-6">
        Articles similaires
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <Link
            key={article.slug}
            href={`/blog/${article.slug}`}
            className="group"
          >
            <article className="bg-white dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:shadow-lg dark:hover:shadow-zinc-900/50 transition-all overflow-hidden h-full flex flex-col">
              <div className="relative h-40 bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <span className="relative z-10 text-white text-xs font-semibold px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full">
                  {article.category}
                </span>
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <h4 className="font-bold text-zinc-900 dark:text-zinc-50 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2">
                  {article.title}
                </h4>
                {article.description && (
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2 mb-3 flex-1">
                    {article.description}
                  </p>
                )}
                <div className="flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-500 mt-auto pt-2 border-t border-zinc-100 dark:border-zinc-800">
                  <time dateTime={article.date}>
                    {format(new Date(article.date), 'dd MMM yyyy', { locale: fr })}
                  </time>
                  <span>{article.readingTime}</span>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}
