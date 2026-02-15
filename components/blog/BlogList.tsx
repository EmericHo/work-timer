import ArticleCard from './ArticleCard';

interface Article {
  title: string;
  description: string;
  image: string;
  date: string;
  author: string;
  category: string;
  slug: string;
  readingTime?: string;
  tags?: string[];
}

interface BlogListProps {
  articles: Article[];
}

/**
 * Liste complète des articles avec pagination
 */
export default function BlogList({ articles }: BlogListProps) {
  if (articles.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-xl text-gray-600">Aucun article trouvé</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {articles.map((article) => (
        <ArticleCard key={article.slug} {...article} />
      ))}
    </div>
  );
}
