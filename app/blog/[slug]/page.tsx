import { notFound } from 'next/navigation';
import { getAllPosts, getPostBySlug } from '@/lib/posts';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';
import AdSenseSidebar from '@/components/ads/AdSenseSidebar';
import AdSenseInArticle from '@/components/ads/AdSenseInArticle';
import SchemaArticle from '@/components/seo/SchemaArticle';
import { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/config';
import { ProgressBar } from '@/components/blog/article/ProgressBar';
import { TableOfContents } from '@/components/blog/article/TableOfContents';
import { ArticleHeader } from '@/components/blog/article/ArticleHeader';
import { AuthorBio } from '@/components/blog/article/AuthorBio';
import { ShareButtons } from '@/components/blog/article/ShareButtons';
import { KeyTakeaways } from '@/components/blog/article/KeyTakeaways';
import { RecommendedTools } from '@/components/blog/article/RecommendedTools';
import { RelatedArticles } from '@/components/blog/article/RelatedArticles';
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

  const baseUrl = SITE_CONFIG.baseUrl;
  const articleUrl = `${baseUrl}/blog/${post.slug}`;

  // Find related articles
  const allPosts = getAllPosts();
  const relatedPosts = allPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3);

  return (
    <>
      {/* Schema.org Article for SEO */}
      <SchemaArticle
        title={post.title}
        description={post.description}
        image={post.image}
        date={post.date}
        author={post.author}
        url={articleUrl}
        keywords={post.keywords}
        readingTime={post.readingTime}
      />

      {/* Reading progress bar */}
      <ProgressBar />

      <div className="min-h-screen bg-white dark:bg-zinc-950">
        {/* Article Container */}
        <article className="max-w-7xl mx-auto px-4 py-8">
          {/* Article Header with breadcrumbs, hero, meta */}
          <ArticleHeader
            title={post.title}
            category={post.category}
            author={post.author}
            date={post.date}
            readingTime={post.readingTime}
            tags={post.tags}
            image={post.image}
          />

          {/* 3-Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr_280px] gap-8">
            {/* Left Sidebar: TOC + Share Buttons (Desktop only) */}
            <aside className="hidden lg:block">
              <div className="space-y-6">
                <TableOfContents headings={post.headings} />
                <ShareButtons url={articleUrl} title={post.title} />
              </div>
            </aside>

            {/* Main Content */}
            <div className="min-w-0">
              {/* Article Content with enhanced prose styling */}
              <div className="prose-article">
                <MDXRemote source={post.content} />
              </div>

              {/* In-Article Ad */}
              <div className="my-8">
                <AdSenseInArticle />
              </div>

              {/* Key Takeaways */}
              <KeyTakeaways points={post.keyTakeaways} />

              {/* Recommended Tools */}
              {post.relatedTools && post.relatedTools.length > 0 && (
                <RecommendedTools tools={post.relatedTools} />
              )}

              {/* Mobile Share Buttons */}
              <div className="lg:hidden my-8 flex justify-center gap-3">
                <ShareButtons url={articleUrl} title={post.title} />
              </div>

              {/* Extended Author Bio */}
              <AuthorBio variant="extended" author={post.author} />

              {/* Related Articles */}
              {relatedPosts.length > 0 && (
                <RelatedArticles articles={relatedPosts} />
              )}
            </div>

            {/* Right Sidebar: Ads + Author Bio (Desktop only) */}
            <aside className="hidden lg:block space-y-6">
              {/* AdSense Sidebar */}
              <AdSenseSidebar />

              {/* Compact Author Bio */}
              <AuthorBio variant="sidebar" author={post.author} />

              {/* Related Articles List */}
              {relatedPosts.length > 0 && (
                <div className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50 mb-4">
                    Articles similaires
                  </h3>
                  <div className="space-y-4">
                    {relatedPosts.map((relatedPost) => (
                      <Link
                        key={relatedPost.slug}
                        href={`/blog/${relatedPost.slug}`}
                        className="block group"
                      >
                        <h4 className="text-sm font-medium text-zinc-900 dark:text-zinc-50 group-hover:text-blue-600 dark:group-hover:text-blue-400 line-clamp-2 transition-colors">
                          {relatedPost.title}
                        </h4>
                        <p className="text-xs text-zinc-500 dark:text-zinc-500 mt-1">
                          {relatedPost.readingTime}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </aside>
          </div>
        </article>
      </div>
    </>
  );
}
