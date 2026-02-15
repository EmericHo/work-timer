'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

interface Article {
  title: string;
  description: string;
  image: string;
  date: string;
  author: string;
  category: string;
  slug: string;
  readingTime?: string;
}

interface ArticlesCarouselProps {
  articles: Article[];
}

export default function ArticlesCarousel({ articles }: ArticlesCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const displayArticles = articles.slice(0, 5);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % displayArticles.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + displayArticles.length) % displayArticles.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (!isPaused && displayArticles.length > 1) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % displayArticles.length);
      }, 5000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused, displayArticles.length]);

  if (displayArticles.length === 0) {
    return null;
  }

  const currentArticle = displayArticles[currentIndex];
  
  // Safe date formatting with error handling
  let formattedDate = currentArticle.date;
  try {
    formattedDate = format(new Date(currentArticle.date), 'dd MMMM yyyy', { locale: fr });
  } catch (error) {
    console.error('Error formatting date:', error);
  }

  return (
    <section className="py-16 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          📰 Derniers Articles
        </h2>

        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Main Carousel */}
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <Link href={`/blog/${currentArticle.slug}`}>
              <div className="relative h-full w-full">
                {currentArticle.image && (
                  <Image
                    src={currentArticle.image}
                    alt={currentArticle.title}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, 1200px"
                  />
                )}
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="max-w-4xl">
                    <span className="inline-block px-4 py-2 bg-blue-600 rounded-full text-sm font-semibold mb-4">
                      {currentArticle.category}
                    </span>
                    
                    <h3 className="text-4xl md:text-5xl font-bold mb-4 line-clamp-2">
                      {currentArticle.title}
                    </h3>
                    
                    <p className="text-lg md:text-xl text-gray-200 mb-6 line-clamp-2">
                      {currentArticle.description}
                    </p>

                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center font-semibold">
                          {currentArticle.author.charAt(0)}
                        </div>
                        <span className="font-medium">{currentArticle.author}</span>
                      </div>
                      <span>•</span>
                      <time dateTime={currentArticle.date}>{formattedDate}</time>
                      {currentArticle.readingTime && (
                        <>
                          <span>•</span>
                          <span>{currentArticle.readingTime}</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Navigation Arrows */}
          {displayArticles.length > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/90 dark:bg-gray-800/90 hover:bg-white dark:hover:bg-gray-800 rounded-full shadow-lg transition-all z-10"
                aria-label="Article précédent"
              >
                <svg
                  className="w-6 h-6 text-gray-900 dark:text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/90 dark:bg-gray-800/90 hover:bg-white dark:hover:bg-gray-800 rounded-full shadow-lg transition-all z-10"
                aria-label="Article suivant"
              >
                <svg
                  className="w-6 h-6 text-gray-900 dark:text-white"
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
              </button>
            </>
          )}

          {/* Dots Navigation */}
          {displayArticles.length > 1 && (
            <div className="flex justify-center gap-2 mt-6">
              {displayArticles.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-blue-600 w-8'
                      : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                  }`}
                  aria-label={`Aller à l'article ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
