import { getAllPosts, getAllCategories } from '@/lib/posts';
import { defaultLanguage } from '@/lib/i18n';
import BlogPageClient from './BlogPageClient';

export const metadata = {
  title: 'Blog Veldra - Outils puissants. Analyses expertes.',
  description: 'Découvrez nos guides, analyses et recommandations sur la finance, l\'immobilier et le développement.',
};

export default function BlogPage() {
  // Load posts for the default language (French)
  // The client component will handle language switching if needed
  const posts = getAllPosts(defaultLanguage);
  const categories = getAllCategories(defaultLanguage);

  return <BlogPageClient posts={posts} categories={categories} />;
}

