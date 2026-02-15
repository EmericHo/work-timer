'use client';

import { useState, useMemo } from 'react';
import { allPosts } from 'contentlayer/generated';
import { compareDesc } from 'date-fns';
import BlogList from '@/components/blog/BlogList';
import CategoryFilter from '@/components/blog/CategoryFilter';
import AdSenseBanner from '@/components/ads/AdSenseBanner';

/**
 * Page principale du blog
 * Liste tous les articles avec filtrage par catégorie
 */
export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('tous');

  // Trier les articles par date (plus récents en premier)
  const sortedPosts = useMemo(
    () => allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date))),
    []
  );

  // Extraire les catégories uniques
  const categories = useMemo(
    () => Array.from(new Set(sortedPosts.map((post) => post.category))),
    [sortedPosts]
  );

  // Filtrer les articles par catégorie
  const filteredPosts = useMemo(() => {
    if (selectedCategory === 'tous') return sortedPosts;
    return sortedPosts.filter((post) => post.category === selectedCategory);
  }, [sortedPosts, selectedCategory]);

  // Préparer les données pour ArticleCard
  const articles = filteredPosts.map((post) => ({
    title: post.title,
    description: post.description,
    image: post.image,
    date: post.date,
    author: post.author,
    category: post.category,
    slug: post.slug,
    readingTime: post.readingTime,
    tags: post.tags,
  }));

  return (
    <div className="min-h-screen bg-white">
      {/* Header AdSense Banner */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <AdSenseBanner />
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-b from-blue-600 to-indigo-700 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Blog Veldra</h1>
          <p className="text-xl text-blue-100 mb-2">Outils puissants. Analyses expertes.</p>
          <p className="text-lg text-blue-200">
            Guides, analyses et recommandations sur la finance, l'immobilier et le développement
          </p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <a href="/" className="hover:text-blue-600">
              Veldra
            </a>
            <span>/</span>
            <span className="text-gray-900 font-medium">Blog</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Category Filter */}
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        {/* Articles Count */}
        <div className="mb-8 text-center">
          <p className="text-gray-600">
            {filteredPosts.length} article{filteredPosts.length > 1 ? 's' : ''}{' '}
            {selectedCategory !== 'tous' && `dans la catégorie "${selectedCategory}"`}
          </p>
        </div>

        {/* Articles List */}
        <BlogList articles={articles} />
      </div>
    </div>
  );
}
