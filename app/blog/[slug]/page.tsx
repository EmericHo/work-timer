import { notFound } from 'next/navigation';
import { getAllPosts, getPostBySlug } from '@/lib/posts';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import Link from 'next/link';
import Image from 'next/image';
import { MDXRemote } from 'next-mdx-remote/rsc';
import AdSenseSidebar from '@/components/ads/AdSenseSidebar';
import AdSenseInArticle from '@/components/ads/AdSenseInArticle';
import SchemaArticle from '@/components/seo/SchemaArticle';
import AuthorBox from '@/components/seo/AuthorBox';
import { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/config';
interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Générer les métadonnées pour SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Article non trouvé',
    };
  }

  const baseUrl = SITE_CONFIG.baseUrl;

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      images: [
        {
          url: `${baseUrl}${post.image}`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [`${baseUrl}${post.image}`],
    },
    alternates: {
      canonical: `${baseUrl}/blog/${post.slug}`,
    },
  };
}

// Générer les routes statiques
export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const formattedDate = format(new Date(post.date), 'dd MMMM yyyy', { locale: fr });
  const baseUrl = SITE_CONFIG.baseUrl;

  // Trouver des articles reliés
  const allPosts = getAllPosts();
  const relatedPosts = allPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3);

  return (
    <>
      {/* Schema.org Article pour SEO */}
      <SchemaArticle
        title={post.title}
        description={post.description}
        image={post.image}
        date={post.date}
        author={post.author}
        url={`${baseUrl}/blog/${post.slug}`}
        keywords={post.keywords}
        readingTime={post.readingTime}
      />

      <div className="min-h-screen bg-white">
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
              <Link
                href={`/blog/categorie/${post.category}`}
                className="hover:text-blue-600 capitalize"
              >
                {post.category}
              </Link>
              <span>/</span>
              <span className="text-gray-900 font-medium truncate">{post.title}</span>
            </nav>
          </div>
        </div>

        {/* Article Container */}
        <article className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12">
            {/* Main Content */}
            <div>
              {/* Header */}
              <header className="mb-8">
                <div className="mb-4">
                  <Link
                    href={`/blog/categorie/${post.category}`}
                    className="inline-block px-4 py-1 bg-blue-600 text-white text-sm font-semibold rounded-full hover:bg-blue-700 transition-colors"
                  >
                    {post.category}
                  </Link>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  {post.title}
                </h1>

                <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                      {post.author.charAt(0)}
                    </div>
                    <span className="font-medium">{post.author}</span>
                  </div>
                  <span>•</span>
                  <time dateTime={post.date}>{formattedDate}</time>
                  <span>•</span>
                  <span>{post.readingTime}</span>
                </div>

                {/* Tags */}
                {post.tags && post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Featured Image */}
                {post.image && (
                  <div className="relative w-full h-[400px] rounded-lg overflow-hidden mb-8 bg-gradient-to-r from-blue-500 to-indigo-600">
                    <div className="flex items-center justify-center h-full text-white text-xl font-semibold">
                      Image: {post.image}
                    </div>
                  </div>
                )}
              </header>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none prose-headings:font-bold prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-img:rounded-lg">
                <MDXRemote source={post.content} />
              </div>

              {/* In-Article Ad */}
              <div className="my-8">
                <AdSenseInArticle />
              </div>

              {/* Outils reliés */}
              {post.relatedTools && post.relatedTools.length > 0 && (
                <div className="mt-12 p-6 bg-blue-50 rounded-lg border border-blue-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    🛠️ Outils Veldra recommandés
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {post.relatedTools.map((tool) => (
                      <Link
                        key={tool}
                        href={`/${tool}`}
                        className="flex items-center gap-3 p-4 bg-white rounded-lg hover:shadow-md transition-all"
                      >
                        <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white">
                          <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
                            />
                          </svg>
                        </div>
                        <span className="font-medium text-gray-900 capitalize">
                          {tool.replace(/-/g, ' ')}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Author Box */}
              <AuthorBox author={post.author} />

              {/* Related Articles */}
              {relatedPosts.length > 0 && (
                <div className="mt-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Articles similaires
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {relatedPosts.map((relatedPost) => (
                      <Link
                        key={relatedPost.slug}
                        href={`/blog/${relatedPost.slug}`}
                        className="group"
                      >
                        <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all overflow-hidden">
                          <div className="relative h-32 bg-gradient-to-r from-blue-400 to-indigo-500 flex items-center justify-center text-white text-sm">
                            {relatedPost.image}
                          </div>
                          <div className="p-4">
                            <h4 className="font-semibold text-gray-900 line-clamp-2 group-hover:text-blue-600">
                              {relatedPost.title}
                            </h4>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar (Desktop only) */}
            <aside className="hidden lg:block">
              <div className="sticky top-4 space-y-6">
                {/* AdSense Sidebar */}
                <AdSenseSidebar />

                {/* Derniers articles */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">
                    Derniers articles
                  </h3>
                  <div className="space-y-4">
                    {allPosts.slice(0, 5).map((latestPost) => (
                      <Link
                        key={latestPost.slug}
                        href={`/blog/${latestPost.slug}`}
                        className="block group"
                      >
                        <h4 className="text-sm font-medium text-gray-900 group-hover:text-blue-600 line-clamp-2">
                          {latestPost.title}
                        </h4>
                        <p className="text-xs text-gray-500 mt-1">
                          {format(new Date(latestPost.date), 'dd MMM yyyy', { locale: fr })}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </article>
      </div>
    </>
  );
}
