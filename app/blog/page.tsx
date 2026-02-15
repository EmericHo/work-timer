import { getAllPosts, getAllCategories } from '@/lib/posts';
import BlogPageClient from './BlogPageClient';

export const metadata = {
  title: 'Blog Veldra - Outils puissants. Analyses expertes.',
  description: 'Découvrez nos guides, analyses et recommandations sur la finance, l\'immobilier et le développement.',
};

export default function BlogPage() {
  const posts = getAllPosts();
  const categories = getAllCategories();

  return <BlogPageClient posts={posts} categories={categories} />;
}

