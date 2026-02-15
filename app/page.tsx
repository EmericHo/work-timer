import { Metadata } from "next";
import { getAllPosts } from "@/lib/posts";
import HeroSection from "@/components/homepage/HeroSection";
import ArticlesCarousel from "@/components/homepage/ArticlesCarousel";
import ArticleGrid from "@/components/homepage/ArticleGrid";

export const metadata: Metadata = {
  title: "Veldra - Outils puissants. Analyses expertes.",
  description: "Découvrez nos guides, analyses et recommandations sur la finance, l'immobilier et le développement. Accédez à nos outils gratuits pour booster votre productivité.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Veldra - Outils puissants. Analyses expertes.",
    description: "Découvrez nos guides, analyses et recommandations sur la finance, l'immobilier et le développement.",
    url: "/",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Veldra - Blog et Outils",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Veldra - Outils puissants. Analyses expertes.",
    description: "Découvrez nos guides, analyses et recommandations sur la finance, l'immobilier et le développement.",
    images: ["/og-image.png"],
  },
};

export default function HomePage() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://work-timer.com';
  
  // Get all blog posts
  const allPosts = getAllPosts();
  
  // Prepare articles for carousel (5 latest)
  const carouselArticles = allPosts
    .slice(0, 5)
    .map((post) => ({
      title: post.title,
      description: post.description,
      image: post.image,
      date: post.date,
      author: post.author,
      category: post.category,
      slug: post.slug,
      readingTime: post.readingTime,
    }));

  // Prepare articles for grid (9 latest)
  const gridArticles = allPosts
    .slice(0, 9)
    .map((post) => ({
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
    <>
      {/* Schema.org structured data for Blog */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Veldra Tools & Insights",
            "description": "Outils puissants. Analyses expertes. Guides sur la finance, l'immobilier et le développement.",
            "url": `${baseUrl}`,
            "publisher": {
              "@type": "Organization",
              "name": "Veldra",
              "url": `${baseUrl}`,
            },
            "blogPost": allPosts.slice(0, 5).map((post) => ({
              "@type": "BlogPosting",
              "headline": post.title,
              "description": post.description,
              "url": `${baseUrl}/blog/${post.slug}`,
              "datePublished": post.date,
              "author": {
                "@type": "Person",
                "name": post.author,
              },
              "image": post.image,
            })),
          }),
        }}
      />

      <main className="min-h-screen bg-white dark:bg-gray-900">
        {/* Hero Section */}
        <HeroSection 
          title="Veldra Tools & Insights"
          subtitle="Outils puissants. Analyses expertes."
        />

        {/* Articles Carousel - 5 latest articles with auto-scroll */}
        {carouselArticles.length > 0 && (
          <ArticlesCarousel articles={carouselArticles} />
        )}

        {/* Articles Grid - 9 recent articles */}
        {gridArticles.length > 0 && (
          <ArticleGrid articles={gridArticles} limit={9} />
        )}
      </main>
    </>
  );
}
