import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkHtml from 'remark-html';
import { buildTrainingImageAlt } from '@/app/lib/schema';

export interface ArticleMetadata {
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: 'Training Tips' | 'Behavior Insights' | 'Philosophy' | 'Technique Breakdowns';
  readTime: number;
  heroImage: string;
  /** Descriptive alt text with local + training context */
  heroImageAlt: string;
  slug: string;
}

export interface Article extends ArticleMetadata {
  content: string;
}

const ARTICLES_DIR = path.join(process.cwd(), 'app/blog/content');

async function markdownToHtml(markdown: string): Promise<string> {
  const result = await remark().use(remarkHtml).process(markdown);
  return result.toString();
}

function toArticleMetadata(
  file: string,
  data: Record<string, unknown>,
  content: string
): ArticleMetadata {
  const title = (data.title as string) || 'Untitled';
  return {
    slug: file.replace('.mdx', ''),
    title,
    excerpt: (data.excerpt as string) || '',
    date: (data.date as string) || new Date().toISOString().split('T')[0],
    author: (data.author as string) || 'Axiom Canine',
    category: (data.category as ArticleMetadata['category']) || 'Training Tips',
    readTime: (data.readTime as number) || calculateReadTime(content),
    heroImage: (data.heroImage as string) || '/images/blog-default.jpg',
    heroImageAlt: buildTrainingImageAlt(title, data.heroImageAlt as string | undefined),
  };
}

export async function getAllArticles(): Promise<Article[]> {
  const files = fs.readdirSync(ARTICLES_DIR).filter((file) => file.endsWith('.mdx'));

  const articles = await Promise.all(
    files.map(async (file) => {
      const filePath = path.join(ARTICLES_DIR, file);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const { data, content } = matter(fileContent);

      const htmlContent = await markdownToHtml(content);
      const meta = toArticleMetadata(file, data as Record<string, unknown>, content);

      return {
        ...meta,
        content: htmlContent,
      };
    })
  );

  return articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const articles = await getAllArticles();
  return articles.find((article) => article.slug === slug) || null;
}

export async function getArticlesByCategory(category: ArticleMetadata['category']): Promise<Article[]> {
  const articles = await getAllArticles();
  return articles.filter((article) => article.category === category);
}

export async function getRelatedArticles(slug: string, limit = 3): Promise<Article[]> {
  const article = await getArticleBySlug(slug);
  if (!article) return [];

  const articles = await getAllArticles();
  return articles
    .filter((a) => a.slug !== slug && a.category === article.category)
    .slice(0, limit);
}

function calculateReadTime(content: string): number {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}

export const CATEGORIES: ArticleMetadata['category'][] = [
  'Training Tips',
  'Behavior Insights',
  'Philosophy',
  'Technique Breakdowns',
];
