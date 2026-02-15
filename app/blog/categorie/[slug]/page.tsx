import { notFound } from 'next/navigation';
import { getAllPosts, getPostsByCategory, getAllCategories } from '@/lib/posts';
import BlogList from '@/components/blog/BlogList';
import Link from 'next/link';
import { Metadata } from 'next';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Générer les métadonnées pour SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = slug;
  const postsInCategory = getPostsByCategory(category);

  if (postsInCategory.length === 0) {
    return {
      title: 'Catégorie non trouvée',
    };
  }

  return {
    title: `Articles ${category} - Blog Veldra`,
    description: `Découvrez tous nos articles sur ${category}. Guides, analyses et recommandations par Alex Veldra.`,
    openGraph: {
      title: `Articles ${category} - Blog Veldra`,
      description: `Découvrez tous nos articles sur ${category}. Guides, analyses et recommandations par Alex Veldra.`,
      type: 'website',
    },
  };
}

// Générer les routes statiques
export async function generateStaticParams() {
  const categories = getAllCategories();
  return categories.map((category) => ({
    slug: category,
  }));
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const category = slug;
  const postsInCategory = getPostsByCategory(category);

  if (postsInCategory.length === 0) {
    notFound();
  }

  // Préparer les données pour ArticleCard
  const articles = postsInCategory.map((post) => ({
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
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-blue-600 to-indigo-700 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4 capitalize">{category}</h1>
          <p className="text-xl text-blue-100">
            {postsInCategory.length} article{postsInCategory.length > 1 ? 's' : ''} dans cette
            catégorie
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
            <Link href="/blog" className="hover:text-blue-600">
              Blog
            </Link>
            <span>/</span>
            <span className="text-gray-900 font-medium capitalize">{category}</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <BlogList articles={articles} />

        {/* Back to Blog Button */}
        <div className="mt-12 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
          >
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
                d="M11 17l-5-5m0 0l5-5m-5 5h12"
              />
            </svg>
            Retour au blog
          </Link>
        </div>
      </div>
    </div>
  );
}
