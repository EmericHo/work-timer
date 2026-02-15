'use client';

import { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import BlogList from '@/components/blog/BlogList';
import CategoryFilter from '@/components/blog/CategoryFilter';
import AdSenseBanner from '@/components/ads/AdSenseBanner';

interface BlogPageProps {
  posts: any[];
  categories: string[];
}

/**
 * Page principale du blog - Client Component
 * Liste tous les articles avec filtrage par catégorie
 */
export default function BlogPageClient({ posts: initialPosts, categories: initialCategories }: BlogPageProps) {
  const { language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('tous');
  const [posts, setPosts] = useState(initialPosts);
  const [categories, setCategories] = useState(initialCategories);
  const [loading, setLoading] = useState(false);

  // Load posts when language changes
  useEffect(() => {
    const loadPosts = async () => {
      setLoading(true);
      try {
        const response = await fetch(`/api/blog?lang=${language}`);
        if (response.ok) {
          const data = await response.json();
          setPosts(data.posts || []);
          setCategories(data.categories || []);
        }
      } catch (error) {
        console.error('Error loading posts:', error);
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, [language]);

  // Filtrer les articles par catégorie
  const filteredPosts = useMemo(() => {
    if (selectedCategory === 'tous') return posts;
    return posts.filter((post: any) => post.category === selectedCategory);
  }, [posts, selectedCategory]);

  // Préparer les données pour ArticleCard
  const articles = filteredPosts.map((post: any) => ({
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
            Guides, analyses et recommandations sur la finance, l&apos;immobilier et le développement
          </p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600">
              Veldra
            </Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Blog</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-blue-600 border-r-transparent"></div>
            <p className="text-gray-600 mt-4">Chargement...</p>
          </div>
        ) : (
          <>
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
            {articles.length > 0 ? (
              <BlogList articles={articles} />
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-600">Aucun article disponible dans cette langue.</p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
