import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import { extractHeadings, extractKeyTakeaways, type Heading } from './mdx-utils';
import { type Language, defaultLanguage } from './i18n';

const contentDirectory = path.join(process.cwd(), 'content/blog');

// Get the directory for a specific language
function getPostsDirectory(lang: Language = defaultLanguage): string {
  return path.join(contentDirectory, lang);
}

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

export function getAllPosts(lang: Language = defaultLanguage): Post[] {
  const postsDirectory = getPostsDirectory(lang);
  
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

export function getPostBySlug(slug: string, lang: Language = defaultLanguage): Post | null {
  const allPosts = getAllPosts(lang);
  return allPosts.find((post) => post.slug === slug) || null;
}

export function getAllCategories(lang: Language = defaultLanguage): string[] {
  const allPosts = getAllPosts(lang);
  const categories = Array.from(new Set(allPosts.map((post) => post.category)));
  return categories;
}

export function getPostsByCategory(category: string, lang: Language = defaultLanguage): Post[] {
  const allPosts = getAllPosts(lang);
  return allPosts.filter((post) => post.category === category);
}
