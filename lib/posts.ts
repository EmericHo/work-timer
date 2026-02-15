import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import { extractHeadings, extractKeyTakeaways, type Heading } from './mdx-utils';

const postsDirectory = path.join(process.cwd(), 'content/blog');

export interface Post {
  slug: string;
  title: string;
  date: string;
  author: string;
  image: string;
  tags: string[];
  category: string;
  description: string;
  keywords: string;
  relatedTools?: string[];
  content: string;
  readingTime: string;
  readingMinutes: number;
  headings: Heading[];
  keyTakeaways: string[];
}

export function getAllPosts(): Post[] {
  // Vérifier si le dossier existe
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      const { data, content } = matter(fileContents);
      const readingStats = readingTime(content);
      const headings = extractHeadings(content);
      const keyTakeaways = extractKeyTakeaways(content);

      return {
        slug,
        title: data.title,
        date: data.date,
        author: data.author,
        image: data.image,
        tags: data.tags || [],
        category: data.category,
        description: data.description,
        keywords: data.keywords,
        relatedTools: data.relatedTools || [],
        content,
        readingTime: readingStats.text,
        readingMinutes: Math.ceil(readingStats.minutes),
        headings,
        keyTakeaways,
      } as Post;
    });

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getPostBySlug(slug: string): Post | null {
  const allPosts = getAllPosts();
  return allPosts.find((post) => post.slug === slug) || null;
}

export function getAllCategories(): string[] {
  const allPosts = getAllPosts();
  const categories = Array.from(new Set(allPosts.map((post) => post.category)));
  return categories;
}

export function getPostsByCategory(category: string): Post[] {
  const allPosts = getAllPosts();
  return allPosts.filter((post) => post.category === category);
}
