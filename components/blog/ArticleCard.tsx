import Link from 'next/link';
import Image from 'next/image';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

interface ArticleCardProps {
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

/**
 * Carte d'article pour l'affichage en grille
 */
export default function ArticleCard({
  title,
  description,
  image,
  date,
  author,
  category,
  slug,
  readingTime,
  tags = [],
}: ArticleCardProps) {
  const formattedDate = format(new Date(date), 'dd MMMM yyyy', { locale: fr });

  return (
    <article className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
      <Link href={`/blog/${slug}`} className="block">
        <div className="relative h-48 w-full overflow-hidden bg-gray-200">
          {image && (
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          )}
          <div className="absolute top-3 left-3">
            <span className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
              {category}
            </span>
          </div>
        </div>
      </Link>

      <div className="p-6">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
          <time dateTime={date}>{formattedDate}</time>
          {readingTime && (
            <>
              <span>•</span>
              <span>{readingTime}</span>
            </>
          )}
        </div>

        <Link href={`/blog/${slug}`}>
          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
            {title}
          </h3>
        </Link>

        <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>

        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
              {author.charAt(0)}
            </div>
            <span className="text-sm font-medium text-gray-700">{author}</span>
          </div>

          <Link
            href={`/blog/${slug}`}
            className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center gap-1"
          >
            Lire l'article
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
}
