import Link from 'next/link';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

interface ArticleHeaderProps {
  title: string;
  category: string;
  author: string;
  date: string;
  readingTime: string;
  tags?: string[];
  image?: string;
}

/**
 * Article header with hero image, breadcrumbs, and meta information
 */
export function ArticleHeader({
  title,
  category,
  author,
  date,
  readingTime,
  tags,
  image,
}: ArticleHeaderProps) {
  const formattedDate = format(new Date(date), 'dd MMMM yyyy', { locale: fr });
  
  return (
    <header className="mb-12">
      {/* Breadcrumb */}
      <div className="bg-zinc-50 dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 -mx-4 sm:mx-0 sm:rounded-t-lg">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <nav className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Veldra
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Blog
            </Link>
            <span>/</span>
            <Link
              href={`/blog/categorie/${category}`}
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors capitalize"
            >
              {category}
            </Link>
            <span>/</span>
            <span className="text-zinc-900 dark:text-zinc-50 font-medium truncate">Article</span>
          </nav>
        </div>
      </div>
      
      {/* Category badge */}
      <div className="mt-8 mb-4">
        <Link
          href={`/blog/categorie/${category}`}
          className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-600 dark:bg-blue-500 text-white text-sm font-semibold rounded-full hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
          </svg>
          {category.toUpperCase()}
        </Link>
      </div>
      
      {/* Title */}
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-900 dark:text-zinc-50 mb-6 leading-tight">
        {title}
      </h1>
      
      {/* Meta information */}
      <div className="flex flex-wrap items-center gap-4 text-zinc-600 dark:text-zinc-400 mb-6">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white font-semibold">
            {author.charAt(0)}
          </div>
          <span className="font-medium text-zinc-900 dark:text-zinc-50">{author}</span>
        </div>
        <span className="text-zinc-400 dark:text-zinc-600">•</span>
        <time dateTime={date} className="flex items-center gap-1">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          {formattedDate}
        </time>
        <span className="text-zinc-400 dark:text-zinc-600">•</span>
        <span className="flex items-center gap-1">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {readingTime}
        </span>
      </div>
      
      {/* Tags */}
      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-8">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-sm rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}
      
      {/* Featured Image */}
      {image && (
        <div className="relative w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden bg-gradient-to-br from-blue-500 to-indigo-600 shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="flex items-center justify-center h-full">
            <span className="text-white text-xl font-semibold opacity-50">
              {image}
            </span>
          </div>
        </div>
      )}
    </header>
  );
}
