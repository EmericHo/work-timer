import { NextResponse } from 'next/server';
import { getAllPosts, getAllCategories } from '@/lib/posts';
import { type Language, languages } from '@/lib/i18n';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const lang = searchParams.get('lang') as Language || 'fr';

  // Validate language
  if (!languages.includes(lang)) {
    return NextResponse.json({ error: 'Invalid language' }, { status: 400 });
  }

  try {
    const posts = getAllPosts(lang);
    const categories = getAllCategories(lang);

    return NextResponse.json({ posts, categories });
  } catch (error) {
    console.error('Error loading posts:', error);
    return NextResponse.json({ error: 'Failed to load posts' }, { status: 500 });
  }
}
