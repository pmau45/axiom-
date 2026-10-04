import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export const ARTICLES_DIR = path.join(process.cwd(), 'app/blog/content');

/** Stable fallback so missing dates cannot produce Invalid Date or mark routes dynamic. */
export const FALLBACK_ARTICLE_DATE = '2026-01-01';

export interface ArticleSitemapEntry {
  slug: string;
  lastModified: Date;
}

export function parseArticleDate(value: unknown): Date {
  if (value instanceof Date && !Number.isNaN(value.getTime())) {
    return value;
  }
  if (typeof value === 'string' || typeof value === 'number') {
    const parsed = new Date(value);
    if (!Number.isNaN(parsed.getTime())) {
      return parsed;
    }
  }
  return new Date(`${FALLBACK_ARTICLE_DATE}T00:00:00.000Z`);
}

export function formatArticleDate(value: unknown): string {
  return parseArticleDate(value).toISOString().slice(0, 10);
}

export function listArticleFiles(): string[] {
  if (!fs.existsSync(ARTICLES_DIR)) {
    return [];
  }
  try {
    return fs.readdirSync(ARTICLES_DIR).filter((file) => file.endsWith('.mdx'));
  } catch {
    return [];
  }
}

/**
 * Frontmatter-only article list for the sitemap. Skips remark/HTML and
 * individual corrupt files so one bad post cannot 500 /sitemap.xml.
 */
export function getArticleSitemapEntries(): ArticleSitemapEntry[] {
  const entries: ArticleSitemapEntry[] = [];

  for (const file of listArticleFiles()) {
    try {
      const filePath = path.join(ARTICLES_DIR, file);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const { data } = matter(fileContent);
      entries.push({
        slug: file.replace(/\.mdx$/, ''),
        lastModified: parseArticleDate(data.date),
      });
    } catch {
      // Skip unreadable/invalid frontmatter rather than failing the sitemap.
    }
  }

  return entries.sort(
    (a, b) => b.lastModified.getTime() - a.lastModified.getTime()
  );
}
